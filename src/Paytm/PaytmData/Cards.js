import React from "react";
import FeatureCard from "./component/FeatureCard";
import { Cdata } from "./component/CardData";

const Cards = () => {
  return (
    <>
      <div className="">
        <h1>Business Tools to help</h1>
        <h1>your business grow</h1>
      </div>
      <div className="mx-5 my-5">
        <div className="row ms-5">
          <FeatureCard data={Cdata} />
        </div>
      </div>
    </>
  );
};

export default Cards;


