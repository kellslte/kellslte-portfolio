import React, { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const FramerImage = motion(Image);

const MovingImage = ({ title, img, slug }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imageRef = useRef(null);

  const handleMouse = function (e) {
    imageRef.current.style.display = `inline-block`;
    x.set(e.pageX);
    y.set(-10);
  };

  const handleMouseLeave = function (e) {
    imageRef.current.style.display = `none`;
    x.set(0);
    y.set(0);
  };

  return (
    <Link
      href={`https://kells.hashnode.dev/${slug}`}
      target="_blank"
      className="relative"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-xl font-semibold capitalize hover:underline underline-offset-2 text-hospitalBlue">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        ref={imageRef}
        alt={title}
        className="absolute z-10 hidden h-auto rounded-lg w-96 md:!hidden"
        width={500}
        height={500}
        src={img}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        initial={{ opacity: 0 }}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </Link>
  );
};

export default MovingImage;
