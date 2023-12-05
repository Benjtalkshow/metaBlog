import React from "react";
import Sliders from "../components/Sliders";
import Advert from "../components/Advert";
import CardContainer from "../components/CardContainer";

const Blog = () => {
  return (
    <div>
      <Sliders />
      <Advert />
      <CardContainer />
      <Advert />
    </div>
  );
};

export default Blog;
