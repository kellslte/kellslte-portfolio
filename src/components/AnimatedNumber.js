import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

const AnimatedNumber = ({ value }) => {
  const number = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: 3000,
  });
  const isInView = useInView(number, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (number.current && latest.toFixed(0) <= value) {
        number.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={number}></span>;
};

export default AnimatedNumber;
