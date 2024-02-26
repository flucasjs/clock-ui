"use client";

import React from "react";
import { motion } from "framer-motion";
import Quote from "@/components/Quote";
import Clock from "@/components/Clock";
import ToggleButton from "@/components/ToggleButton";
import Info from "@/components/Info";
import Background from "@/components/Background";
import { useClientWidth } from "@/hooks/useClientWidth";
import { getTimeData } from "@/lib/data";

export default function ClockApp({ serverData }) {
  const [screen, setScreen] = React.useState(null);
  const [theme, setTheme] = React.useState(
    (() => {
      const localtime = new Date();
      const hours = localtime.getHours();
      if (hours >= 5 && hours < 18) {
        return "day";
      } else {
        return "night";
      }
    })()
  );
  const [time, setTime] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  const ref = React.useRef(null);
  useClientWidth(ref, handleResize, 100);

  const [toggle, setToggle] = React.useState(false);

  function handleResize(clientWidth) {
    if (clientWidth >= 768) {
      setScreen("desktop");
    } else if (clientWidth >= 375) {
      setScreen("tablet");
    } else {
      setScreen("mobile");
    }
  }

  function handleClick() {
    setToggle((v) => !v);
  }

  React.useEffect(() => {
    setLoaded(false);

    if (mounted) {
      getTimeData(process.env.NEXT_PUBLIC_API_URL)
        .then((t) => setTime(t))
        .then(() => setLoaded(true))
        .catch((e) => console.log(e))
    }
  }, [mounted]);

  React.useEffect(() => setMounted(true), []);

  return (
    <>
      {!time && !loaded ? (
        <span>Loading...</span>
      ) : (
        <>
          <motion.main
            className={`z-20 container lg:max-w-full mx-0 relative flex flex-col font-sans pt-8 md:pt-10 lg:pt-14 xl:pt-20 ${
              toggle ? "mb-10 pb-0" : "pb-12 mb-0"
            } h-full ${
              toggle ? "justify-start gap-y-0" : "justify-between gap-y-8"
            }`}
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            layout
          >
            <Quote toggle={toggle} serverData={serverData.quotes} />
            <div className="lg:flex lg:justify-between lg:items-end lg:mb-[42px] lg:w-full">
              <Clock
                toggle={toggle}
                abbreviation={time.abbreviation}
                city={time.city}
                country={time.country}
                timezone={time.timezone}
                theme={theme}
              />
              <ToggleButton toggle={toggle} handleClick={handleClick} />
            </div>
          </motion.main>
          <Info
            toggle={toggle}
            dayOfWeek={time.dayOfWeek}
            dayOfYear={time.dayOfYear}
            weekNumber={time.weekNumber}
            timezone={time.timezone}
          />
        </>
      )}
      <Background screen={screen} theme={theme} />
      <div ref={ref} className="w-full"></div>
    </>
  );
}
