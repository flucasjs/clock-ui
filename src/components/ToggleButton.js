"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import iconOuter from "../../public/assets/desktop/icon-arrow-outer.svg";
import iconInner from "../../public/assets/desktop/icon-arrow-inner.svg";

export default function ToggleButon({ toggle, handleClick }) {
  const [disabled, setDisabled] = React.useState(false);
  React.useEffect(() => {
    setDisabled(true); 
    setTimeout(() => setDisabled(false), 100);
  }, [toggle]);

  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  
  return (
    <motion.button
      onClick={handleClick}
      className={`p-1 bg-white rounded-[28px] flex items-center gap-x-4 w-fit lg:h-fit z-[20] group`}
      layout
      variants={FADE_UP_ANIMATION_VARIANTS}
      disabled={disabled}
    >
      <div className="w-12 ml-3 text-black opacity-50 pointer-events-none text-button-sm">
        {toggle ? "LESS" : "MORE"}
      </div>
      <div className="relative">
        <motion.div className="transition-opacity group-hover:opacity-[0.49] duration-150 ease-out">
          <Image src={iconOuter} alt="" />
        </motion.div>
        <motion.div
          className="absolute top-0 left-0 pointer-events-none"
          initial={{ rotateX: 180 }}
          animate={toggle ? { rotateX: 0 } : { rotateX: 180 }}
          transition={spring}
        >
          <Image src={iconInner} alt="" />
        </motion.div>
      </div>
    </motion.button>
  );
}

const spring = {
  type: "spring",
  damping: 10,
  stiffness: 30,
  duration: 0.2,
  delay: 0.05
};
