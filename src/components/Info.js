import React from "react";
import { motion } from "framer-motion";

export default function Info({ toggle, timezone, dayOfWeek,  dayOfYear, weekNumber }) {
  return (
    <motion.div className={`${toggle ? " bottom-0" : "-bottom-full"} font-sans left-0 absolute w-full bg-opaqueDark py-12 md:py-[119px] lg:py-[75px] px-[26px] lg:pl-[165px] lg:pr-[431px] xl:pl-[218px] md:pl-16 md:pr-[168px] z-[15] max-h-[256px] md:max-h-[440px] lg:max-h-[400px]`} layout initial={{opacity: 0}} animate={toggle ? {opacity: 1} : {opacity: 0}}>
      <div className={`flex flex-col md:grid md:grid-rows-2 md:gap-y-12 md:gap-x-20 md:min-w-fit md:max-w-[70%] lg:auto-cols-max lg:gap-x-0`}>
        <div className="flex items-center md:items-start justify-between md:justify-normal md:flex-col gap-x-8 md:col-start-1 md:row-start-1 lg:col-start-1 lg:mr-[147px]">
          <span className="whitespace-nowrap text-label-sm md:text-label-md lg:text-label-lg">CURRENT TIMEZONE</span>
          <span className="text-end md:text-start text-info-sm md:text-info-md lg:text-info-lg">{timezone && (timezone.length > 13 ? timezone.split("/")[timezone.split("/").length - 1].replace("_", " ") : timezone)}</span>
        </div>
        <div className="flex items-center justify-between md:items-start md:flex-col gap-x-10 md:col-start-1 md:row-start-2 lg:col-start-1 min-w-[160px]">
          <span className="text-label-sm md:text-label-md lg:text-label-lg">DAY OF THE YEAR</span>
          <span className="text-info-sm md:text-info-md lg:text-info-lg">{dayOfYear}</span>
        </div>
        <div className="flex items-center md:items-start justify-between md:flex-col gap-x-10 md:col-start-2 lg:col-start-3 md:row-start-1 lg:ml-[94px] min-w-[160px]">
          <span className="text-label-sm md:text-label-md lg:text-label-lg">DAY OF THE WEEK</span>
          <span className="text-info-sm md:text-info-md lg:text-info-lg">{dayOfWeek}</span>
        </div>
        <div className="flex items-center md:items-start justify-between md:flex-col gap-x-10 md:col-start-2 lg:col-start-3 md:row-start-2 lg:ml-[94px] min-w-[160px]">
          <span className="text-label-sm md:text-label-md lg:text-label-lg">WEEK NUMBER</span>
          <span className="text-info-sm md:text-info-md lg:text-info-lg">{weekNumber}</span>
        </div>
        <div className="hidden lg:block lg:w-[1px] lg:col-start-2 lg:row-start-1 lg:row-end-3 lg:bg-white lg:opacity-25"></div>
      </div>
    </motion.div>
  );
}
