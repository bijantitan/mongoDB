import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/11cd504bbc3a1493.jpg?q=20"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/aa1b2bdcf519b468.jpg?q=20"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/d0e5eab8be082868.png?q=20"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/511b24085490ff2d.jpg?q=20"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}
