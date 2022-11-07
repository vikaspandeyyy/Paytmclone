import React from "react";
import { SlickData } from "./component/CardData";
import CardSlicker from "./component/CardSlicker";
import Left_details from "./component/Left_details";

const Pmoney = () => {
  return (
    <div className="container mx-auto ">
      <div className="row my-5 ">
        <div className="col-md-2">
          <Left_details/>
        </div>
        <div className="col-md-10">
          <CardSlicker data={SlickData} />
        </div>
      </div>
    </div>
  );
};

export default Pmoney;
