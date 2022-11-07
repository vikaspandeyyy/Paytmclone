import React from "react";
import { Link } from "react-router-dom";
const Paytm = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <>
              <br></br>
              <br></br>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1490/1490900.png"
                width="60pxl"
              />
              <div>
                <br></br>
                <h1>
                  <p>
                    <b>India's Most-loved Bart-Pay App</b>
                  </p>
                </h1>
                <p>
                  <b>
                    Recharge & pay bills, book flights & movie tickets, open a
                    savings account, invest in stocks & mutual funds, and do a
                    lot more.
                  </b>
                </p>
                <Link to="bartpay">
                  {" "}
                  <button className="btn btn-primary" rounded="true">
                    Download Bart-Pay{" "}
                    <Link to="http//facebook.com">
                      {" "}
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/732/732042.png"
                        width="20px"
                        alt="google Store"
                      />
                    </Link>
                  </button>
                </Link>
              </div>
            </>
          </div>
          <br></br>
          <br></br>
          <div className="col-md-6">
            <img
              src="https://img.freepik.com/free-vector/man-transferring-money-woman-via-smartphone-online-transaction-banking-flat-vector-illustration-finance-digital-technology-concept_74855-10107.jpg?w=2000"
              width="500px"
              height="500px"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Paytm;
