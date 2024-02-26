import React from "react";
import ClockApp from "@/components/ClockApp";
import { getQuotesData } from "@/lib/data";

export default async function Home() {
  const quotes = await getQuotesData({ limit: 10 });
  // const time = await getTimeData();
  return (
    <>
      {(quotes) ? (
        <div className="relative h-full min-h-[800px] overflow-hidden min-w-[375px] md:min-h-[1024px] lg:min-h-[800px]">
          <ClockApp serverData={{ quotes }} />
        </div>
      ) : (
        <span>Loading...</span>
      )}
    </>
  );
}
