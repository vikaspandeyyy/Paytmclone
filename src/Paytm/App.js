import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Paytm from "./PaytmData/Paytm";
import BartPayDownload from "./PaytmData/utils/BartPayDownload";
import BillPayment from './PaytmData/utils/BillPayment'
import CreditPayment from './PaytmData/utils/CreditPayment'
import DTHrecharge from "./PaytmData/utils/DTHrecharge"
import FastTag from './PaytmData/utils/FastTag'
import GasPayment from './PaytmData/utils/GasPayment'
import GooglePlay from './PaytmData/utils/GooglePlay'
import MobileRecharge from './PaytmData/utils/MobileRecharge'
import Water from './PaytmData/utils/Water'
import Offer from './PaytmData/utils/Offer'
import MyVouchcer from './PaytmData/utils/MyVouchcer'
import Reward from './PaytmData/utils/Reward'
import Gift from './PaytmData/utils/Gift'
import Home from './Home1/Home'
// import RechargePay from "./PaytmData/RechargePay";
// import Navbar from './PaytmData/Navbar/Navbar'
import Login from "./PaytmData/utils/Login";
import LearnDurgesh from "./PaytmData/utils/LearnDurgesh";
import CashbackDurgesh from "./PaytmData/utils/CashbackDurgesh";
import PayDurgesh from "./PaytmData/utils/PayDurgesh";
import SendDurgesh from "./PaytmData/utils/SendDurgesh";
import WalletDurgesh from "./PaytmData/utils/WalletDurgesh";
const App = () => {
    return (
        <Router>
          
            <Routes>
                {/* Vikash */}
                {/* <Routes path="IPO" element={<ApplyForIPO/>}/>
                <Routes path="HappyBus" element={<CashBackHappyBus/>}/>
                <Routes path="InvestStock" element={<InvestInStock/>}/>
                <Routes path="senitisedbus" element={<SenitisedBus/>}/> */}
                {/* <Routes path="IPO" element={<ApplyForIPO/>}/>
                <Routes path="IPO" element={<ApplyForIPO/>}/>
                <Routes path="IPO" element={<ApplyForIPO/>}/>
                <Routes path="IPO" element={<ApplyForIPO/>}/>
                <Routes path="IPO" element={<ApplyForIPO/>}/>
                <Routes path="IPO" element={<ApplyForIPO/>}/>
                <Routes path="IPO" element={<ApplyForIPO/>}/>
                <Routes path="IPO" element={<ApplyForIPO/>}/>
                <Routes path="IPO" element={<ApplyForIPO/>}/> */}
                



                 <Route path='/' element={<Home/>} />
                 {/* Durgesh */}
                 <Route path='LearnDurgesh' element={<LearnDurgesh/>} />
                 <Route path='cashbackDurgesh' element={<CashbackDurgesh/>} />
                 <Route path='PayDurgesh' element={<PayDurgesh/>} />
                 <Route path='SendDurgesh' element={<SendDurgesh/>} />
                 <Route path='WalletDurgesh' element={<WalletDurgesh/>} />



                 <Route path='login' element ={<Login/>}/>              
                <Route path='Bill' element ={<BillPayment/>}/>
                <Route path='Credit' element ={<CreditPayment/>}/>
                <Route path='DTH' element ={<DTHrecharge/>}/>
                <Route path='FastTag' element ={<  FastTag/>}/>
                <Route path='GasPayment' element ={< GasPayment/>}/>
                <Route path='googleplay' element ={<GooglePlay/>}/>
                <Route path='Recharge' element ={<MobileRecharge/>}/>
                <Route path='Gift' element ={< Gift/>}/>
                <Route path='water' element ={< Water/>}/>
                <Route path='MyVouchcer' element ={< MyVouchcer/>}/>
                <Route path='Offer' element ={< Offer/>}/>
                <Route path=' Reward' element ={<  Reward/>}/>
                <Route path='bartpay' element ={<BartPayDownload/>}/>
                
            </Routes>
        </Router>

    )
}
export default App