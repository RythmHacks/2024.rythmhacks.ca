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
import capybara from '../../assets/capybara.jpg';
import capybara75 from '../../assets/capybara75.jpg';
import capybara50 from '../../assets/capybara50.jpg';
import capybara25 from '../../assets/capybara25.jpg';



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

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

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
    capybara75,
    capybara75,
    capybara75,
    capybara75
  ];

  const images3 = [
    capybara50,
    capybara50,
    capybara50,
    capybara50,
    capybara50,
    capybara50,
    capybara50,
    capybara50
  ];

  const images4 = [
    capybara25,
    capybara25,
    capybara25,
    capybara25,
    capybara25,
    capybara25,
    capybara25,
    capybara25,
    capybara25,
    capybara25,
    capybara25,
    capybara25,
    capybara25,
    capybara25,
    capybara25
  ];

  return (
    <section>
      <ParallaxImages baseVelocity={5} images={images2} />
      <ParallaxImages baseVelocity={-5} images={images3} />
      <ParallaxImages baseVelocity={5} images={images4} />
    </section>
  );
}