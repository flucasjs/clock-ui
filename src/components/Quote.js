"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { getQuotesData } from "@/lib/data";
import refreshIcon from "../../public/assets/desktop/icon-refresh.svg";

function last(array) {
  return array[array.length - 1];
}

export default function Quote({ toggle, serverData }) {
  const [quotes, setQuotes] = React.useState(serverData);
  const [turn, setTurn] = React.useState(1);
  const [refreshDisabled, setRefreshDisabled] = React.useState(false);
  const [resetAnim, setResetAnim] = React.useState(false);

  React.useEffect(() => {
    setResetAnim(false);
  }, [resetAnim]);
  
  function handleClick() {
    setRefreshDisabled(true);
    setTimeout(() => {
      if (turn % 2 !== 0) {
        setResetAnim(true);
        setTurn(1);
      }
      setRefreshDisabled(false);
    }, 300);

    if (quotes.length > 1) {
      setQuotes((prev) => prev.slice(0, -1));
    } else {
      getQuotesData()
        .then((q) => setQuotes(q))
        .catch((e) => console.log(e));
    }
  }

  React.useEffect(() => {
    console.log(quotes);
  }, [quotes]);

  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  
  return (
    <motion.div
      className={`flex gap-x-4 lg:gap-x-6 min-w-fit ${
        toggle ? "pointer-events-none h-0" : "pointer-events-auto h-auto"
      }`}
      initial={{ opacity: 0 }}
      animate={toggle ? { opacity: 0 } : { opacity: 1 }}
    >
      <motion.div
        className="flex flex-col mb-auto gap-y-2 md:gap-y-4"
      >
        <motion.p
          className="max-w-[540px] text-quote-sm md:text-quote-md lg:text-quote-lg"
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          {quotes && last(quotes).content}
        </motion.p>
        <motion.span
          className="text-name-sm md:text-name-md lg:text-name-lg"
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          {quotes && last(quotes).author}
        </motion.span>
      </motion.div>
      <motion.button
        className={`relative mt-[0.5em] mb-auto ${refreshDisabled ? "pointer-events-none" : "pointer-events-auto"}`}
        onClick={handleClick}
        initial={{ rotate: 180, opacity: 0 }}
        animate={{ rotate: turn * 180, opacity: 1 }}
        transition={{
          type: "tween",
          ease: "circOut",
          duration: resetAnim ? "0" : "0.3",
        }}
        onTap={() => setTurn((p) => p + 1)}
        disabled={refreshDisabled}
      >
        <Image
          src={refreshIcon}
          alt=""
          className={`lg:w-[18px] lg:h-[18px] opacity-50 transition-all hover:opacity-100 ease-linear`}
        />
      </motion.button>
    </motion.div>
  );
}
