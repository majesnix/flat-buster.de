import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Dot from "./Dot";

interface ICarouselProps {
  images: any[];
}

const LazyLoader = (props: any) => {
  let timerId: NodeJS.Timeout;
  const { src = "", delay = 0, onLoad } = props;
  const [isMounted, setMounted] = useState(false);
  const [isLoading, setLoading] = useState(true);

  function loadImage() {
    const image = new Image();

    image.src = src;
    image.onload = () => {
      setLoading(false);
      onLoad();
    };
  }

  useEffect(() => {
    if (!isMounted) {
      setMounted(true);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      delay ? (timerId = setTimeout(loadImage, delay)) : loadImage();
    }
    return () => clearTimeout(timerId);
  }, []);

  return isLoading ? (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        Loading <Dot />
        <Dot />
        <Dot />
      </div>
    </div>
  ) : (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img height={300} src={src} alt={src} />
    </div>
  );
};

const Carousel = (props: ICarouselProps) => {
  const [, setTimestamp] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const onLoad = () => setTimestamp(Date.now());
  const onSlideChanged = ({ item }: { item: any }) => setActiveIndex(item);

  return (
    <AliceCarousel
      activeIndex={activeIndex}
      disableDotsControls
      onSlideChanged={onSlideChanged}
      items={props.images.map((image, index) => (
        <LazyLoader onLoad={onLoad} src={image} delay={500} key={index} />
      ))}
    />
  );
};

export default Carousel;
