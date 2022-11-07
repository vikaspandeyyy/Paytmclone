import React from 'react'
import "./Details.css"
import { Link } from 'react-router-dom'

const Details = () => {
    return (
        <div className='container'>
            <div className='details'>
                <h4 style={{ textAlign: "left" }}>Bart-Pay Payment Instruments</h4>
                <div className='row-1'>
                    <div className='col '>
                    <div>
                        <div style={{ display: "flex" }}>
                            <img className='wallet' src="https://assetscdn1.paytm.com/images/catalog/view/307185/1617861564011.png" />
                            <h6 className='img-title'>Bart-Pay <br />Wallet</h6>
                        </div>
                        <div>
                            <h3>The Fastest Way to <br />Pay In-store & Online.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer</p>
                            <Link to='WalletDurgesh'><button className='down-btn'>Open Wallet</button></Link>
                        </div>
                        </div>
                    </div>
                    <div>
                        <img style={{ width: "400px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuY94xzhQwvjqlTk3x-lJDR2jhG92guKFVrA&usqp=CAU" />
                    </div>
                </div>

                <div className='row-1'>
                    <div>
                        <div style={{ display: "flex" }}>
                            <img className='wallet' src="https://assetscdn1.paytm.com/images/catalog/view/307186/1615957674521.png" />
                            <h6 className='img-title'>Easy Crypto<br /> Transfer</h6>
                        </div>
                        <div>
                            <h3>Now transfer to any crypto <br />currency regardless of any currency you have</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer</p>
                            <Link to="SendDurgesh"><button className='down-btn'>Send Crypto</button></Link>
                        </div>
                    </div>
                    <div>
                        <img className='side-img' style={{ width: "400px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxsWyuaAaQkZkV3eSi2z8TeDZCNHuHKly0NQ&usqp=CAU" />
                    </div>
                </div>

                <div className='row-1'>
                    <div>
                        <div style={{ display: "flex" }}>
                            <img className='wallet' src="https://assetscdn1.paytm.com/images/catalog/view/307186/1615957674521.png" />
                            <h6 className='img-title'>Easy Crypto<br /> Transfer</h6>
                        </div>
                        <div>
                            <h3>Now transfer to any crypto <br />currency regardless of any currency you have</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer</p>
                            <Link to="LearnDurgesh"><button className='down-btn'>Learn More</button></Link>
                        </div>
                    </div>
                    <div>
                        <img className='side-img' style={{ width: "400px" }} src="https://assetscdn1.paytm.com/images/catalog/view_item/850765/1655987252365.png" />
                    </div>



                </div>
            </div>



            <div className='details' style={{ display: "flex", marginTop: "50px", textAlign: "left" }}>

                <div className='middle'>
                    <img className='mid-top' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRK1yBY2IlhQfoWx5dBbKpW2V22BN8qaOKGg&usqp=CAU' />
                    <h3 style={{ marginTop: "0px" }}>Unlimited Cashback <br />Every time</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer</p>
                    <div>
                        <Link to='cashbackDurgesh'>
                            <img className='middle-img' style={{ width: "400px" }} src="https://assetscdn1.paytm.com/images/catalog/view_item/850765/1655987252365.png" />
                        </Link>
                    </div>
                </div>


                <div className='middle' style={{ marginLeft: "50px" }}>
                    <img className='mid-top' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRK1yBY2IlhQfoWx5dBbKpW2V22BN8qaOKGg&usqp=CAU' />
                    <h3 style={{ marginTop: "0px" }}>The Fastest Way to <br />Pay In-store & Online.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer</p>
                    <div>
                        <Link to='PayDurgesh'>
                            <img className='middle-img' style={{ width: "400px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxsWyuaAaQkZkV3eSi2z8TeDZCNHuHKly0NQ&usqp=CAU" />
                        </Link>
                    </div>
                </div>

            </div>


            <div className='details'>
                <h1 style={{ textAlign: "left" }}>Bart-Pay Tools</h1>
                <div className='row-2'>
                    <div>
                        <div style={{ display: "flex" }}>
                            <img className='wallet' src="https://assetscdn1.paytm.com/images/catalog/view/307185/1617861564011.png" />
                            <h6 className='img-title'>Bart-Pay <br />Wallet</h6>
                        </div>
                        <div>
                            <h3>The Fastest Way to <br />Pay In-store & Online.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer</p>
                            <Link to='LearnDurgesh'><button className='blue-btn'>Learn More</button></Link>
                        </div>
                    </div>
                    <div className="row-2-right">
                        <img style={{ width: "400px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuY94xzhQwvjqlTk3x-lJDR2jhG92guKFVrA&usqp=CAU" />
                    </div>
                </div>

                <div className='row-2'>
                    <div>
                        <img className='side-img' style={{ width: "400px" }} src="https://assetscdn1.paytm.com/images/catalog/view_item/850765/1655987252365.png" />
                    </div>
                    <div className='right-txt'>
                        <div style={{ display: "flex" }}>
                            <img className='wallet' src="https://assetscdn1.paytm.com/images/catalog/view/307186/1615957674521.png" />
                            <h6 className='img-title'>Easy Crypto<br /> Transfer</h6>
                        </div>
                        <div className="row-2-right">
                            <h3>Now transfer to any crypto <br />currency regardless of any currency you have</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer</p>
                            <Link to='LearnDurgesh'><button className='blue-btn'>Learn More</button></Link>                        </div>
                    </div>

                </div>

                <div className='row-2'>
                    <div>
                        <div style={{ display: "flex" }}>
                            <img className='wallet' src="https://assetscdn1.paytm.com/images/catalog/view/307186/1615957674521.png" />
                            <h6 className='img-title'>Easy Crypto<br /> Transfer</h6>
                        </div>
                        <div>
                            <h3>Now transfer to any crypto <br />currency regardless of any currency you have</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer</p>
                            <Link to='LearnDurgesh'><button className='blue-btn'>Learn More</button></Link>                        </div>
                    </div>
                    <div className="row-2-right">
                        <img className='side-img' style={{ width: "400px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxsWyuaAaQkZkV3eSi2z8TeDZCNHuHKly0NQ&usqp=CAU" />
                    </div>



                </div>

                <div className='row-2'>
                    <div>
                        <img className='side-img' style={{ width: "400px" }} src="https://assetscdn1.paytm.com/images/catalog/view_item/850765/1655987252365.png" />
                    </div>
                    <div className='right-txt'>
                        <div style={{ display: "flex" }}>
                            <img className='wallet' src="https://assetscdn1.paytm.com/images/catalog/view/307186/1615957674521.png" />
                            <h6 className='img-title'>Easy Crypto<br /> Transfer</h6>
                        </div>
                        <div className="row-2-right">
                            <h3>Now transfer to any crypto <br />currency regardless of any currency you have</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer</p>
                            <Link to='LearnDurgesh'><button className='blue-btn'>Learn More</button></Link>                        </div>
                    </div>

                </div>

            </div>



            <div className='details'>
                <h1 style={{ textAlign: "left" }}>Financial Services by Bart-pay</h1>
                <div className='row-1'>
                    <div>
                        <div style={{ display: "flex" }}>
                            <img className='wallet' src="https://assetscdn1.paytm.com/images/catalog/view/307185/1617861564011.png" />
                            <h6 className='img-title'>Bart-Pay <br />Wallet</h6>
                        </div>
                        <div>
                            <h3>The Fastest Way to <br />Pay In-store & Online.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer</p>
                            <Link to='LearnDurgesh'><button className='blue-btn'>Learn More</button></Link>                        </div>
                    </div>
                    <div>
                        <img style={{ width: "400px" }} src="https://assetscdn1.paytm.com/images/catalog/view_item/853880/1656675942486.png" />
                    </div>
                </div>

                <div className='row-1'>
                    <div>
                        <div style={{ display: "flex" }}>
                            <img className='wallet' src="https://assetscdn1.paytm.com/images/catalog/view/307186/1615957674521.png" />
                            <h6 className='img-title'>Easy Crypto<br /> Transfer</h6>
                        </div>
                        <div>
                            <h3>Now transfer to any crypto <br />currency regardless of any currency you have</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer</p>
                            <Link to='LearnDurgesh'><button className='blue-btn'>Learn More</button></Link>                        </div>
                    </div>
                    <div>
                        <img className='side-img' style={{ width: "400px" }} src="https://assetscdn1.paytm.com/images/catalog/view_item/850765/1655987252365.png" />
                    </div>
                </div>

            </div>

        </div>


    )
}

export default Details




{/* <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='card'>
                      
                        <div className='card-body'>
                        <div className='container mt-2'>
                                <div className='row row-1'>
                                    <div className='col-md-3'>
                                        <div style={{display:"flex"}}>
                                            <img className='wallet' src="https://assetscdn1.paytm.com/images/catalog/view/307185/1617861564011.png"/>
                                            <h6>Bart-Pay Wallet</h6>
                                        </div>
                                        <div>
                                            <h3>The Fastest Way to <br/>Pay In-store & Online.</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer</p>
                                        </div>
                                    </div>
                                    <div className='col-md-3 col-sm-6 col-xs-6'>
                                        <img style={{width:"50%", height:"50%"}} src="https://assetscdn1.paytm.com/images/catalog/view_item/728701/1618577020961.png"/>
                                    </div>

                                    
                                </div>
                                <div className='row'>
                                    <div className='col-md-3 col-sm-6 col-xs-6'><p><b>Ayush</b></p></div>

                                    
                                </div>
                                </div>
                        </div>
                    </div>
                </div> */}
{/* </div>
        </div> */}