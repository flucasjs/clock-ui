"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import themeIcons from "../data/themeIcons";

function formatTime(date) {
  const options = {
    hour12: false,
    // hourCycle: "h23",
    hour: "2-digit",
    minute: "2-digit",
  };

  const dateTimeFormat = new Intl.DateTimeFormat("en-US", options);

  return dateTimeFormat.format(date);
}

function getGreeting(time) {
  const hour = time.slice(0, 2);

  return `Good ${
    hour >= 5 && hour < 12
      ? "morning"
      : hour >= 12 && hour < 18
      ? "afternoon"
      : "evening"
  }`.toUpperCase();
}

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

export default function Clock({ toggle, abbreviation, city, country, theme }) {
  const [time, setTime] = React.useState(null);

  React.useEffect(() => setTime(formatTime(Date.now())), []);

  React.useEffect(() => {
    const intervalID = setInterval(() => setTime(formatTime(Date.now())), 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <motion.div
      className={`mb-12 md:mb-20 lg:mb-0 ${
        toggle ? "mt-[40px] md:mt-[80px] lg:mt-4" : "mt-0"
      } flex flex-col gap-y-4 md:gap-y-0 lg:gap-y-4`}
      layout="position"
    >
      <motion.div className="relative flex items-center gap-x-4">
        <Image src={themeIcons[theme]} alt="" />
        <motion.span
          className="text-greeting-sm md:text-greeting-md lg:text-greeting-lg"
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          {time && getGreeting(time)}
        </motion.span>
      </motion.div>
      <motion.div
        className="flex items-baseline gap-x-2 md:gap-x-4"
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        <motion.span className="text-display-sm md:text-display-md lg:text-display-lg">
          {time}
        </motion.span>
        <motion.span className="text-timezone-sm md:text-timezone-md lg:text-timezone-lg">
          {abbreviation}
        </motion.span>
      </motion.div>
      <motion.span
        className="text-location-sm md:text-location-md lg:text-location-lg"
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        IN {city.toUpperCase()}, {country}
      </motion.span>
    </motion.div>
  );
}
