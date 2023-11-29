import React from "react";
import HeaderImage from "../assets/bg.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tag from "./Tag";
import ShortInfo from "./ShortInfo";
// import Slider from "react-slick";

const Sliders = () => {
  const containerStyle = {
    backgroundImage: `url(${HeaderImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  // const sliderSettings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  return (
    <section
      className="flex items-end p-2 sm:p-5 md:p-10 w-full h-[400px] md:h-[600px] relative overflow-hidden"
      style={containerStyle}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="z-10 absolute w-full md:w-1/2">
        <Tag
          category="Technology"
          labelClassName="bg-badge"
          textColor="text-white"
        />
        <h1 className="title font-bold text-white text-xl md:text-3xl mt-2 md:mt-5">
          The Impact of Technology on the Workplace:
          <br /> How Technology is Changing
        </h1>
        <ShortInfo />
      </div>
    </section>
  );
};

export default Sliders;
