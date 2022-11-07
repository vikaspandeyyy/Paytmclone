import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlickerss = (props) => {
  const ArrowLeft = (props) => (
    <button {...props} className="left_btn">
      <i class="bi bi-arrow-left"></i>
    </button>
  );
  const ArrowRight = (props) => (
    <button {...props} className="right_btn ">
      <i class="bi bi-arrow-right"></i>
    </button>
  );
  var settings = {
    dots: false,
    infinite: false,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    arrows: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  return (
    <div className="Slick_info">
      <Slider {...settings}>
        {props.data.map((val) => {
          return (
            <div>
              <div
                className="card slickCard"
                style={{
                  width: "12rem",
                  height: "17rem",
                  backgroundColor: "#4E6DCB",
                }}
              >
                <img
                  src={val.slkImg}
                  className="cardImg mx-auto my-2"
                  style={{ width: "180px", height: "180px" }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ color: "white" }}>
                    {val.slkTitle}
                  </h5>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CardSlickerss;
