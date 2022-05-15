

import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import {
    getDownlineReport
} from "../../store/actions/dailyYield"
import { API } from "../../store/actions/API";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Web3 from "web3";
import { contractAddressToken, abiToken, contractAddress, abi } from "./constants";

export const Activate = () => {
    const downlineReport = useSelector(state => state?.dailyYield?.downlineReport)
    const dispatch = useDispatch();
    const user = localStorage.getItem('user')
    const dashboard = useSelector(state => state?.dashboard)

    const [blnce, setBlnce] = useState(0)
    const [account, setAccount] = useState('')
    const [chainId, setChainId] = useState('')
    const [amount, setAmount] = useState('')

    const [rate, setRate] = useState(0)


    const getLiveRate = async () => {
        try {
            const res = await API.get(`/live_rate`);
            setRate(res?.data.data[0].usdperunit)
        } catch (e) {
            console.log("error", e)

        }
    }
    useEffect(() => {
        getLiveRate()
    }, [])
    const metamask = async () => {
        let isConnected = false;
        try {
            if (window.ethereum) {
                window.web3 = new Web3(window.ethereum);
                await window.ethereum.enable();
                isConnected = true;
            } else if (window.web3) {
                window.web3 = new Web3(window.web3.currentProvider);
                isConnected = true;
            } else {
                isConnected = false;
            }
            if (isConnected === true) {
                const web3 = window.web3;
                let accounts = await web3.eth.getAccounts();
                setAccount(accounts[0]);
                let chain = await web3.eth.getChainId()
                setChainId(chain)

                let contract = new web3.eth.Contract(abiToken, contractAddressToken);
                let data = await contract.methods.balanceOf(accounts[0]).call();
                let token = data / 1000000000000000000;
                setBlnce(token)
                console.log(token)

                window.ethereum.on("accountsChanged", async function (accounts) {
                    setAccount(accounts[0]);
                    let chain = await web3.eth.getChainId()
                    setChainId(chain)

                    const web3 = window.web3;
                    let contract = new web3.eth.Contract(abiToken, contractAddressToken);
                    let data = await contract.methods.balanceOf(accounts[0]).call();
                    let token = data / 1000000000000000000;
                    setBlnce(token)

                });
            }
        } catch (error) {
            console.log("error message", error?.message);
        }
    };
    useEffect(() => {
        metamask()
    }, [])


    async function handleActivation() {

        try {
            let address = dashboard?.walletAddress;         //Login User Address
            let uid = dashboard?.userId;               //Login User Id
            let usdamt = amount;        //Package USD Amount
            let token = blnce;     //Package ULE Value
            let packid = usdamt;
            // let package = 1;

            let mainadd = account;

            if (parseInt(usdamt) < 100) {
                alert("Enter Minimum package amount 100 USD!!!");
                return;
            }

            if (parseInt(usdamt % 100) != 0) {
                alert("Enter package amount in multiple of 100 USD!!!");
                return;
            }

            if (parseInt(usdamt) > 100000) {
                alert('Maximum package amount is 100000 USD');
                return false;
            }


            if (mainadd == undefined) {
                alert("Please connect wallet!!!");
                return;
            }
            if (address.toUpperCase() != mainadd.toUpperCase()) {
                alert("Wallet address and login miss match");
                return;
            }
            if (packid == "0" || packid == "") {
                alert("Please Enter correct package amount!!!");
                return;
            }
            // if (parseInt(token) > parseInt(Token_Balance)) {
            //     alert("Wallet balance insufficient!!!");
            //     return;
            // }
            let value = blnce;

            let tokenAmount = value * (10 ** 18);
            console.log("tokenAmount", tokenAmount)
            const web3 = window.web3;
            let contract = new web3.eth.Contract(abi, contractAddress);
            let tokencontract = new web3.eth.Contract(abiToken, contractAddressToken);
            // await tokencontract.methods.approve(contractAddress, value).send({ from: account });
            try {
                const res = await API.post(`/activation`, {
                    uid: uid,
                    transaction: 'transaction',
                    amount: value,
                    
                    addreslist: account,
                    addresslist: account,
                    amountlist: value,
                    tokenamount: amount / rate,
                });
            } catch (e) {
                console.log("error", e)

            }

            contract.methods.sell(value).send({
                from: account
            }).on("transactionHash", async (hash) => {
                if (hash != "") {
                    try {
                        const res = await API.post(`/activation`, {
                            uid: uid,
                            transaction: 'transaction',
                            amount: value,
                            
                            addreslist: account,
                            addresslist: account,
                            amountlist: value,
                            tokenamount: amount / rate,
                        });
                    } catch (e) {
                        console.log("error", e)

                    }

                    //    -- Activate(uid, hash, usdamt, package, address, token);
                }

            });

        } catch (error) {
            console.log("error", error);
        }
    }
    return (
        <>

            <div class="content-wrapper">
                <div class="container body-content">
                    <div class="row">
            <ToastContainer />

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
                                    <div class="modal-header" style={{ paddingBottom: "10px !important", margin: '10px' }}>

                                        <br></br>
                                        <div class="avlbal row" style={{ padding: '20px' }}>
                                            <h5 class="modal-title col-12 pb-4" id="exampleModal3Label2">
                                                Available ULE Token Balance
                                                <span id="tokenbalance" style={{ paddingTop: '7px', paddingBottom: '7px' }}>{blnce} Token</span>
                                            </h5>
                                            <br />

                                            <h5 class="modal-title">
                                                Live Rate
                                                <input type="text" class="input_width" id="txtchangevalue" style={{ color: "black" }} placeholder={`1 ULE /  ${rate} USD`} readonly="" />
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
                                                    <div className='row'>
                                                        <div className='col-8 p-3'>
                                                            <div className='row'>

                                                                <input type="number"
                                                                    value={amount}
                                                                    style={{ width: '100%' }}

                                                                    onChange={e => setAmount(e.target.value)}
                                                                    className="form5" min="100" placeholder="Enter Package Amount in USD" />
                                                            </div>
                                                            <div className='row mt-3'>


                                                                <input type="number"
                                                                    value={amount / rate}
                                                                    disabled
                                                                    style={{ width: '100%' }}
                                                                    className="form5" min="100" placeholder="Enter Package Amount in USD" />
                                                            </div>
                                                        </div>
                                                        <div className='col-4 p-3' style={{ display: 'flex', alignItems: 'flex-end' }}>

                                                            <button style={{ minHeight: '32px' }} onClick={handleActivation}>
                                                                <img src="assets/images/activateBlack.png" class="whImg" />
                                                                <img src="assets/images/activateYello.png" class="yellowImg" />
                                                                Activate
                                                            </button>
                                                        </div>
                                                    </div>
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
            {/* <div class="clearfix"><br /></div> */}
            <link rel="stylesheet" type="text/css" href="assets/css/trading.css" />
          {/*  <script type="text/javascript" src="assets/js/bootstrap.min.js"></script>
            <link rel="stylesheet" type="text/css" href="assets/css/2.d34346ea.chunk.css" />
            <link rel="stylesheet" type="text/css" href="assets/css/main.f70df022.chunk.css" />
            <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600&amp;family=Fira+Sans:wght@300;400&amp;family=Mukta+Vaani:wght@200;300;600&amp;display=swap" rel="stylesheet" />
            <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /> */}

            {/* <script type="text/javascript" src="assets/js/bootstrap.min.js"></script> */}
            {/* <link href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" /> */}

            <br /><br />
            <div class="footer-section">Copyright © 2022 Yeepule. All Rights Reserved.</div>

        </>
    );
}

