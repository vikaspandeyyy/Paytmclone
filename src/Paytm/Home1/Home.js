import React from "react";
// import { Container } from 'react-bootstrap';
import Paytm from "./../PaytmData/Paytm";
import RechargePay from "./../PaytmData/RechargePay";
import Navbar from './../Navbar/Navbar'
import Details  from "./../PaytmData/Details"
import Cards from './../PaytmData/Cards'
import InvestMoney from "./../PaytmData/InvestMoney"
import Pmoney from "./../PaytmData/Pmoney"
import Accordian from "./../PaytmData/Accordian"

const Home =()=>{
    return(
        // <Container>
        <>
            <Navbar/>
            <Paytm/>
            <RechargePay/>
            <Details/>
            <Cards/>
            <InvestMoney/>
            <Pmoney/>
            <Accordian/>
</>
        // {/* </Container> */}
    )
}
export default Home