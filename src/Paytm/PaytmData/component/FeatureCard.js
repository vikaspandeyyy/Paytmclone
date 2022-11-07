import React from "react";

const FeatureCard = (props) => {
  return props.data.map((val) => {
    return (
      <div className="card" style={{ width: "18rem", border: "none" }}>
        <img src={val.CImg} className="card-img-top" alt="..." />
        <div className="card-body my-3">
          <h2 className="card-title">{val.CHeading}</h2>
          <p className="card-text fs-5 my-4">{val.CPara}</p>
          <a href="#" className="btn btn-light fw-bolder">
            Learn More
          </a>
        </div>
      </div>
    );
  });
};

export default FeatureCard;
