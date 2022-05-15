

import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import {
    getDownlineReport
} from "../../store/actions/dailyYield"

export const Activate = () => {
    const downlineReport = useSelector(state => state?.dailyYield?.downlineReport)
    const dispatch = useDispatch();
    const user = localStorage.getItem('user')

const [amount,setAmount]=useState('')




    return (
        <>
            <div class="content-wrapper">
                <div class="container body-content">
                    <div class="row">
                        <div class="col-md-3"></div>
                        <div class="col-md-6">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">

                                    <div class="ule_logo">
                                        <img src="assets/images/logo.png" />
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <h3 class="text-center">Activation</h3>

                                        </div>
                                    </div>
                                    <div class="modal-header" style={{ paddingBottom: "10px !important" ,margin:'10px'}}>

                                        <br></br>
                                        <div class="avlbal row">
                                            <h5 class="modal-title col-12 pb-4" id="exampleModal3Label2">
                                                Available ULE Token Balance
                                                <span id="tokenbalance" style={{ paddingTop: '7px', paddingBottom: '7px' }}>0 Token</span>
                                            </h5>
                                            <br />

                                            <h5 class="modal-title">
                                                Live Rate
                                                <input type="text" class="input_width" id="txtchangevalue" style={{ color: "black" }} placeholder="1 USD / 9.1036  ULE Token" readonly="" />
                                            </h5>
                                        </div>
                                    </div>
                                    <div class="modal-body">
                                        <div class="popup_net">
                                            <div class="set_meta">
                                                <span class="metamaskConnection"> </span>
                                            </div>
                                            <div class="addNum">
                                                <div class="trxnumber">
                                                    <input type="number"
                                                    value={amount}
                                                    onChange={e=>setAmount(e.target.value)}
                                                    className="form5" min="100" placeholder="Enter Package Amount in USD" />

                                                    <button>
                                                        <img src="assets/images/activateBlack.png" class="whImg" />
                                                        <img src="assets/images/activateYello.png" class="yellowImg" />
                                                        Upgrade
                                                    </button>
                                                </div>
                                                <div class="yeep_note">
                                                    <h2>Note:</h2>
                                                    <ul>
                                                        <li>Please ensure to connect Metamask wallet.</li>
                                                        <li>Please get ref check of input value before select the pacakage amount.</li>
                                                        <li>Min pacakage amount is 100 USD &amp; maximum is 10,000 USD.</li>
                                                        <li>Refrence rate of ule token taken from www.wyzthswap.org</li>
                                                    </ul>
                                                </div>

                                                <div class="yeep_footer">
                                                    <p>
                                                        © 2022 | yeepule.network
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="clearfix"><br /></div>
            <link rel="stylesheet" type="text/css" href="assets/css/trading.css" />
            <script type="text/javascript" src="assets/js/bootstrap.min.js"></script>
            <link rel="stylesheet" type="text/css" href="assets/css/2.d34346ea.chunk.css" />
            <link rel="stylesheet" type="text/css" href="assets/css/main.f70df022.chunk.css" />
            <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600&amp;family=Fira+Sans:wght@300;400&amp;family=Mukta+Vaani:wght@200;300;600&amp;display=swap" rel="stylesheet" />
            <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <script type="text/javascript" src="https://code.jquery.com/jquery-1.7.1.min.js"></script>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="~/UserAssets/js/pages/compCalendar.js"></script>
            <script type="text/javascript" src="assets/js/bootstrap.min.js"></script>
            <script src="~/UserAssets/static/js/e1d0078771.js"></script>
            <link href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

            <br /><br />
            <div class="footer-section">Copyright © 2022 Yeepule. All Rights Reserved.</div>

        </>
    );
}

