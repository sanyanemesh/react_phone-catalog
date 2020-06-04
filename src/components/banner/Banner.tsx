import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Banner.scss";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
        <div className='Slider__image image1'></div>
        </div>
        <div>
        <div className='Slider__image image2'></div>
        </div>
        <div>
        <div className='Slider__image image3'></div>
        </div>
        <div>
        <div className='Slider__image image4'></div>
        </div>
        <div>
        <div className='Slider__image image5'></div>
        </div>
        <div>
        <div className='Slider__image image6'></div>
        </div>
      </Slider>
    );
  }
}
export default SimpleSlider;
