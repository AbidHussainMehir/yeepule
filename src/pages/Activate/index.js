

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
import moment from "moment";
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
    const [apiDate, setDate] = useState(true)
    const [pending, setPending] = useState(0)
    const [confirm, setConfirm] = useState([])
    console.log(apiDate, pending, confirm)


    const getLiveRate = async () => {
        try {
            const res = await API.get(`/live_rate`);
            setRate(res?.data.data[0].usdperunit)
        } catch (e) {
            console.log("error", e)

        }
    }
    const getLiveRate1 = async () => {
        let ress = JSON.parse(user);
        let uId = ress?.user_id;
        try {
            const res = await API.get(`/pending_date?id=${uId}`);
            setDate(res?.data.data[0].edate)
            let date1 = moment(res?.data.data[0].edate).add(15, 'minutes').isBefore((moment()))
            setDate(date1)
        } catch (e) {
            console.log("error", e)

        }
    }
    const getLiveRate2 = async () => {
        let ress = JSON.parse(user);
        let uId = ress?.user_id;
        try {
            const res = await API.get(`/pending_activation?id=${uId}`);
            setPending(res?.data.data[0])
        } catch (e) {
            console.log("error", e)

        }
    }
    const getLiveRate3 = async () => {
        let ress = JSON.parse(user);
        let uId = ress?.user_id;
        try {
            const res = await API.get(`/confirm_payment?id=${uId}`);
            setConfirm(res?.data.data)
        } catch (e) {
            console.log("error", e)

        }
    }
    useEffect(() => {
        getLiveRate();
        getLiveRate1();
        getLiveRate2();
        getLiveRate3();
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
            if (parseInt(blnce) < parseInt(parseInt(amount) / rate)) {
                alert("Wallet balance insufficient!!!");
                return;
            }
            if (parseInt(usdamt) < 100) {
                alert("Enter Minimum package amount 100 USD!!!");
                return;
            }

            if (parseInt(parseInt(usdamt) % 100) != 0) {
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

            let value = blnce;
            const web3 = window.web3;

            let tokenAmount = web3.utils.toWei(value.toString());
            console.log("tokenAmount", tokenAmount)
            let contract = new web3.eth.Contract(abi, contractAddress);
            let tokencontract = new web3.eth.Contract(abiToken, contractAddressToken);
            await tokencontract.methods.approve(contractAddress, tokenAmount.toString()).send({ from: account });


            contract.methods.sell(tokenAmount.toString()).send({
                from: account
            }).on("transactionHash", async (hash) => {
                if (hash != "") {
                    try {
                        const res = await API.post(`/activation`, {
                            uid: uid,
                            transaction: hash,
                            amount: value,
                            addreslist: account,
                            useraddress: account,
                            amountlist: value,
                            tokenamount: amount / rate,
                        });
                        console.log(res)
                        if (res?.data?.success) {
                            toast.success('Successfully subscribed to Activation ! ')
                        } else {
                            toast.error('Something went wrong ! ')

                        }

                        setTimeout(() => {
                            getLiveRate1();
                        }, 250);
                    } catch (e) {
                        console.log("error", e)
                        toast.error('Something went wrong ! ')
                    }
                }

            });

        } catch (error) {
            console.log("error", error);
        }
    }
    return (
        <>

            <div className="content-wrapper">
                <div className="container body-content">
                    <div className="row">
                        <ToastContainer />

                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">

                                    <div className="ule_logo">
                                        <img src="assets/images/logo.png" />
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <h3 className="text-center">Activation</h3>

                                        </div>
                                    </div>
                                    <div className="modal-header" style={{ paddingBottom: "10px !important", margin: '10px' }}>

                                        <br></br>
                                        <div className="avlbal row" style={{ padding: '20px' }}>
                                            <h5 className="modal-title col-12 pb-4" id="exampleModal3Label2">
                                                Available ULE Token Balance
                                                <span id="tokenbalance" style={{ paddingTop: '7px', paddingBottom: '7px' }}>{blnce} Token</span>
                                            </h5>
                                            <br />

                                            <h5 className="modal-title">
                                                Live Rate
                                                <input type="text" className="input_width" id="txtchangevalue" style={{ color: "black" }} placeholder={`1 ULE /  ${rate} USD`} readonly="" />
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="modal-body">
                                        <div className="popup_net">
                                            <div className="set_meta">
                                                <span className="metamaskConnection"> </span>
                                            </div>
                                            <div className="addNum">
                                                <div className="trxnumber">
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
                                                            {confirm.length === 0 && apiDate &&
                                                                <button style={{ minHeight: '32px' }} onClick={handleActivation}>
                                                                    <img src="assets/images/activateBlack.png" className="whImg" />
                                                                    <img src="assets/images/activateYello.png" className="yellowImg" />
                                                                    Activate
                                                                </button>
                                                            }
                                                            {confirm.length > 0 && <button style={{ minHeight: '32px' }}
                                                            // onClick={handleActivation}
                                                            >
                                                                <img src="assets/images/activateBlack.png" className="whImg" />
                                                                <img src="assets/images/activateYello.png" className="yellowImg" />
                                                                Update
                                                            </button>}

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="yeep_note">
                                                    <h2>Note:</h2>
                                                    <ul>
                                                        <li>Please ensure to connect Metamask wallet.</li>
                                                        <li>Please get ref check of input value before select the pacakage amount.</li>
                                                        <li>Min pacakage amount is 100 USD &amp; maximum is 10,000 USD.</li>
                                                        <li>Refrence rate of ule token taken from www.wyzthswap.org</li>
                                                    </ul>
                                                </div>

                                                <div className="yeep_footer">
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
            <div className="footer-section">Copyright © 2022 Yeepule. All Rights Reserved.</div>

        </>
    );
}

