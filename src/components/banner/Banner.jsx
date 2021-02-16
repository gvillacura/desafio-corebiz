import React from "react";
import banner from "../../media/statics_Banner.jpg";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <img src={banner} alt="banner" />
    </div>
  );
};

export default Banner;
