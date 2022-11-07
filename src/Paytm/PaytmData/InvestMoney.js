import React from 'react'
import Left_detail2 from "./component/Left_details2";
import { slkSecond } from "./component/CardData";
// import CardSlicker from "../component/CardSlicker";
import CardSlickerss from './component/CardSlickerss';

const InvestMoney = () => {
  return (
    <div className="container mx-auto">
      <div className="row my-5">
        <div className="col-md-2">
          <Left_detail2/>
        </div>
        <div className="col-md-10">
          <CardSlickerss data={slkSecond}/>
        </div>
      </div>
    </div>
  )
}

export default InvestMoney