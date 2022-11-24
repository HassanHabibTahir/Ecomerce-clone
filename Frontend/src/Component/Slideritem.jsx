import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import imgone from "../assests/img.webp";
import imgtwo from "../assests/img2.webp";
import imgthree from "../assests/img3.webp";
import imgfour from "../assests/img4.webp";
import imgfive from "../assests/img5.webp";
import { Box, useMediaQuery } from "@mui/material";

export default function Slideritem() {
  const matches = useMediaQuery("(max-width:600px)");
  // function SampleNextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{
  //         ...style,
  //         display: "block",
  //         fontSize: "15px",
  //         right: matches ? "580px" : "650px",
  //         top: matches ? "450px" : "450px",
  //       }}
  //       onClick={onClick}
  //     >
  //       <img src={arrowtwo} alt="arrowone" width="500%" />
  //     </div>
  //   );
  // }
  // function SamplePrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{
  //         ...style,
  //         left: matches ? "580px" : "650px",
  //         top: matches ? "450px" : "450px",

  //         display: "block",
  //       }}
  //       onClick={onClick}
  //     >
  //       <img src={arrowone} alt="arrowtwo" width="500%" />
  //     </div>
  //   );
  // }
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,

    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,

    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    lazyLoad: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: true,
          arrows: false,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          lazyLoad: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          lazyLoad: true,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          lazyLoad: true,
        },
      },
    ],
  };
  return (
    <>
      <Box
        sx={{
          pb: "30px",
        }}
      >
        <Slider {...settings}>
          <div>
            <img
              src={imgone}
              alt="imgone"
              width="100%"
              style={{
                height: matches ? "220px" : "100%",
              }}
            />
          </div>
          <div>
            <img
              src={imgtwo}
              alt="imgtwo"
              width="100%"
              style={{
                height: matches ? "220px" : "100%",
              }}
            />
          </div>
          <div>
            <img
              src={imgthree}
              alt="imgthree"
              width="100%"
              style={{
                height: matches ? "220px" : "100%",
              }}
            />
          </div>
          <div>
            <img
              src={imgfour}
              alt="imgfour"
              width="100%"
              style={{
                height: matches ? "220px" : "100%",
              }}
            />
          </div>
          <div>
            <img
              src={imgfive}
              alt="imgfive"
              width="100%"
              style={{
                height: matches ? "220px" : "100%",
              }}
            />
          </div>
        </Slider>
      </Box>
    </>
  );
}
