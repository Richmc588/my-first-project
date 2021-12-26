import React from "react";

const Banner = () => {
  return (
    <div className="banner-top">
      <p>TechBlog.IO</p>
      <img
        className="img-top"
        src={`${process.env.PUBLIC_URL}/assets/mobile-phone-g7839eb0c3_1920.jpg`}
        alt="banner"
      />
    </div>
  );
};

export default Banner;
