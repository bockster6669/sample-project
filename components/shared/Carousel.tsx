"use client";
import React from "react";
import Card from "@/components/cards/Card";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { gameAds } from "@/constants";

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay: 5000 }),
  ]);

  return (
    <section className="max-w-[393px] overflow-hidden" ref={emblaRef}>
      <div className="flex min-h-[270px] min-w-full">
        {gameAds.map((item) => (
          <Card
            img={item.img}
            key={item.img}
            progress1={item.progress1}
            progress2={item.progress2}
            progress3={item.progress3}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
