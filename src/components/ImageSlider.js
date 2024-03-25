import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import img1 from "../Images/slider-badging.jpg";
import img2 from "../Images/slider-scale.jpg";
import img3 from "../Images/slider-badag.jpg";
import img4 from "../Images/slider-scales.jpg";

const ImageSlider = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider className="Carousel" {...settings}>
      <div className="Wrap">
        <a href="">
          <img className="img-container" src={img1} alt="" />
        </a>
      </div>
      <div className="Wrap">
        <a href="">
          <img className="img-container" src={img2} alt="" />
        </a>
      </div>{" "}
      <div className="Wrap">
        <a href="">
          <img className="img-container" src={img3} alt="" />
        </a>
      </div>{" "}
      <div className="Wrap">
        <a href="">
          <img src={img4} alt="" />
        </a>
      </div>
    </Slider>
  );
};

export default ImageSlider;
