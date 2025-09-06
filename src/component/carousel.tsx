"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselProps {
  items: { img: string; name: string; href?: string; description?: string }[];
  slidesToShow?: number; // optional, default 3
}


export default function Carousel({ items, slidesToShow = 3 }: CarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerMode: slidesToShow === 1,
    centerPadding: slidesToShow === 1 ? "25%" : "0px", // relative padding for zoom
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "10%",
        },
      },
      {
        breakpoint: 640, // phone
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {items.map((item, i) => (
        <div key={i} className="px-2 sm:px-4 md:px-6">
          <div className="w-full max-h-[300px] md:max-h-[400px] aspect-[16/9]">
            {item.href ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover md:object-fill rounded"
                />
              </a>
            ) : (
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover md:object-fill rounded"
              />
            )}
          </div>
          <p className="mt-2 text-center font-semibold">{item.name}</p>
          {item.description && (
            <p className="text-sm text-gray-500 text-center">{item.description}</p>
          )}
        </div>
      ))}
    </Slider>
  );
}
