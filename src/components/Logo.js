import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink href={`/`} className="w-16 h-16" whileHover={{  scale: 1.5 }}>
        <Image src={`/logo.png`} width={64} height={64} alt="Site Logo" />
      </MotionLink>
    </div>
  );
};

export default Logo;
