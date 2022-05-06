import loginbg from "./loginbg.jpg"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { loginAction } from "../../store/actions/login"
export const Login = () => {
    const [inputValue, setInputValue] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    const handleChangeInput = (e) => {
        setInputValue(e.target.value)
    }
    const handleLogin = async () => {
        let res = await dispatch(loginAction(inputValue));
        if (res) {
            history.push('/dashboard');
            window.location.reload()
        }
    }
    return <>
        <div id="reg-layout" className="devsBg"
            style={{
                backgroundImage: `url(${loginbg})`,
                backgroundSize: "cover",
                backgroundColor: "#000",
                backgroundAttachment: "fixed",
                backgroundPosition: "center"
            }}
        >
            <div class="Toastify"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-2"></div>
                    <div class="col-md-8">
                        <div class="row bx_hover">
                            <div class="col-md-6 bdr_non">
                                <div class="reg-box">
                                    <div class="reg-content">
                                        <div class="login_hd"><h2><a href="index.html">Login</a></h2></div>
                                        <div class="subtitle">Automatic login if you have MetaMask wallet:</div>
                                        <div class="ule_logo">
                                            <img src="assets/images/Icon/metamask.png" />
                                        </div>
                                        <span id="metamaskConnections" style={{ color: "red" }}>MetaMask is not connected..!..Wait...</span>
                                        <button class="btn loginbtn" disabled id="vendor" >Authorised Login</button>


                                        <form>
                                            <div class="form-row">
                                                <input id="loginid" class="input_bg" type="text" maxlength="100"
                                                    onChange={handleChangeInput}
                                                    value={inputValue}
                                                    placeholder="Please enter ID or MetaMask address " className="form-input" />

                                            </div>
                                            <div class="form-row">
                                                <input type="button"
                                                    onClick={handleLogin}
                                                    class="btn loginbtn" value="Login" id="myBtn25" readonly />


                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                            <div class="col-md-6 bdl_non">
                                <div class="reg-box">
                                    <div class="reg-content">
                                        <center>
                                            <a href="index.html">
                                                <img src="assets/images/logo.png" style={{ width: "109px" }} />
                                            </a>
                                            <br />
                                            <p style={{ color: "#000", fontSize: "13px" }}>Follow us on Telegram</p>
                                            <br />
                                            <ul class="social-media">
                                                <li>
                                                    <a href="https://t.me/joinchat/U8ot8F38yb4zZjY1" target="_blank">
                                                        <img src="assets/images/Icon/telegram.png" />
                                                    </a>
                                                </li>
                                            </ul>
                                            <br />
                                            <p style={{ color: "#000", fontSize: "13px" }}>Any query you can get support:</p>
                                            <br />

                                            <input class="right-btn-styl" type="button" value="Support in Telegram EN" />
                                            <br />
                                            <br />
                                            <a class="left-btn-styl loginbtn" href="/" title="Go To Home" id="gotohome">Go To Home</a>
                                            <br />
                                            <br />
                                            <span id="metamaskConnection" style={{ color: "red" }}>Please Install MetaMask!</span>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <link rel="stylesheet" type="text/css" href="assets/loginAssets/css/2.d34346ea.chunk.css" />
        <link rel="stylesheet" type="text/css" href="assets/loginAssets/css/main.f70df022.chunk.css" />
        <link rel="stylesheet" type="text/css" href="assets/loginAssets/css/bootstrap.css" />
        <link rel="stylesheet" type="text/css" href="assets/loginAssets/css/login.css" />
    </>
}