import { useRef } from "react";
import "./Sponsors.scss";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";

import { wrap } from "@motionone/utils";
import windscribe from '../../assets/windscribe.png';




interface ParallaxProps {
  images: string[];
  baseVelocity: number;
}

function ParallaxImages({ images, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });
  // its this that cauases the jumping 
  const x = useTransform(baseX, (v) => `${wrap(-532, 0, v)}px`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Parallax image ${index}`} />
        ))}
      </motion.div>
    </div>
  );
}

export default function Sponsors() {

  const images2 = [
    windscribe,
    windscribe,
    windscribe,
    windscribe
  ];

  return (
    <section>
      <div className="flex items-center justify-center h-full z-10 pb-8">
        <h1 className="text-gray-400 text-5xl font-semibold">
          Our Sponsors
        </h1>
      </div>
      <ParallaxImages baseVelocity={200} images={images2} />
    </section>
  );
}