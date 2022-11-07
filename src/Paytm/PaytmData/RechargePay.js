import React from "react";
import { Link } from "react-router-dom"
const RechargePay = () => {
    return (
        <div className="container mt-0">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header bg-info text-white"><h4><b>Recharge & Pay Bills on BartPay.</b></h4>
                            <div className="container">
                                <div className='row'>
                                    <div className='col-md-3'><Link className='' to='Bill'><i className="fa fa-file-text  text-white" aria-hidden="true"></i></Link><p><b>Bill Payment</b></p></div>

                                    <div className='col-md-3'><Link className='' to='Recharge'><i className="fa fa-mobile  text-white" aria-hidden="true"></i></Link><p><b>Mobile Recharg</b></p></div>
                                    <div className='col-md-3'><Link className='' to='Credit'><i className="fa fa-id-card  text-white" aria-hidden="true"></i></Link><p><b>Credit-Card payment</b></p></div>
                                    <div className='col-md-3'><Link className='' to='DTH'><i className="fa fa-television  text-white" aria-hidden="true"></i></Link><p><b>DTH recharge</b></p></div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-3'><Link className='' to='GasPayment'><i className="fa-solid fa-gas-pump  text-white"></i></Link><p><b>Gas Payment</b></p></div>

                                    <div className='col-md-3'><Link className='' to='googleplay'><i className="fa-brands fa-google-play text-white"></i></Link><p><b>Google Play</b></p></div>
                                    <div className='col-md-3'><Link className='' to='FastTag'><i class="fa-solid fa-tag  text-white"></i></Link><p><b>Fast Tag</b></p></div>
                                    <div className='col-md-3'><Link className='' to='Water'><i class="fa-solid fa-water  text-white"></i></Link><p><b>Water</b></p></div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body bg-warning text-white"><h4><b></b>Book & Buy on BartPay</h4>
                            <div className='container mt-4'>
                                <div className='row'>
                                    <div className='col-md-3'><Link className='' to='GasPayment'><i className="fa-solid fa-gas-pump  text-white"></i></Link><p><b>Gas Payment</b></p></div>
                                    <div className='col-md-3'><Link className='' to='googleplay'><i className="fa-brands fa-google-play text-white"></i></Link><p><b>Google Play</b></p></div>
                                    <div className='col-md-3'><Link className='' to='FastTag'><i class="fa-solid fa-tag  text-white"></i></Link><p><b>Fast Tag</b></p></div>
                                    <div className='col-md-3'><Link className='' to='Water'><i class="fa-solid fa-water  text-white"></i></Link><p><b>Water</b></p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RechargePay









