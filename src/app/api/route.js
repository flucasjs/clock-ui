import { NextResponse } from "next/server";
import Ipbase from "@everapi/ipbase-js";

export async function GET() {
  const ipBase = new Ipbase(process.env.IPBASE_API_KEY);
  const worldTime = (ip) => `http://worldtimeapi.org/api/ip/${ip}`;

  try {
    const {
      data: {
        ip,
        timezone: { id: timezone },
        location: {
          city: { name: city },
          country: { alpha2: country },
        },
      },
    } = await ipBase.info();

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
