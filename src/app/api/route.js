import { NextResponse } from "next/server";
import Ipbase from "@everapi/ipbase-js";
import { headers } from "next/headers";

export async function GET() {
  let clientIP = '';
  const FALLBACK_IP = '0.0.0.0';

  const forwardedFor = headers().get("x-forwarded-for");

  if (forwardedFor) {
    clientIP = forwardedFor.split(',')[0] ?? FALLBACK_IP;
  } else {
    clientIP = headers().get('x-real-ip') ?? FALLBACK_IP;
  }
  clientIP = clientIP.replace('::ffff:', '');
  const ipBase = new Ipbase(process.env.IPBASE_API_KEY);
  const worldTime = (ip) => `http://worldtimeapi.org/api/ip/${ip}`;

  try {
    const clientData = await ipBase.info({
      ip: clientIP,
      language: 'en',
    })

    const {
      data: {
        ip,
        timezone: { id: timezone },
        location: {
          city: { name: city },
          country: { alpha2: country },
        },
      },
    } = clientData;

    const {
      datetime,
      abbreviation,
      day_of_week: dayOfWeek,
      day_of_year: dayOfYear,
      week_number: weekNumber,
    } = await fetch(worldTime(ip), {
      headers: {
        Accept: "application/json",
      },
    }).then((response) => response.json());
    
    return NextResponse.json({
      datetime,
      abbreviation,
      dayOfWeek,
      dayOfYear,
      weekNumber,
      timezone,
      country,
      city,
    });
  } catch {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
