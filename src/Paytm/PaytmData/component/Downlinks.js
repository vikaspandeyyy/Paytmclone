import React from "react";

const Downlinks = () => {
  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex">
        <h2 className="fs-4">
          Download Paytm App <br /> to Pay from anywhere
        </h2>
        <div className="mx-3">
          <a href="">
            <img
              src="https://assetscdn1.paytm.com/frontendcommonweb/71229188.svg"
              alt=""
            />
          </a>
        </div>
        <div>
          <a href="">
            <img
              src="https://assetscdn1.paytm.com/frontendcommonweb/33d9d7f1.svg"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="d-flex ">
        <a href="">
          <i className="bi bi-twitter" style={{color:"gray"}}></i>
        </a>
        <a href="">
          <i className="bi bi-instagram mx-3" style={{color:"gray"}}></i>
        </a>
        <a href="">
          <i className="bi bi-facebook" style={{color:"gray"}}></i>
        </a>
      </div>
    </div>
  );
};

export default Downlinks;
