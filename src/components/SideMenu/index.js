import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getWalletAddress, getAllParticipants } from "../../store/actions/dashboard"
export const SideMenu = () => {
    const dashboard = useSelector(state => state?.dashboard)
    const dispatch = useDispatch();
    const user = localStorage.getItem('user')

    const getAllData = () => {
        if (user) {
            let ress = JSON.parse(user);
            let uId = ress?.user_id;
            dispatch(getWalletAddress(uId));
            dispatch(getAllParticipants(uId));
        }
    }
    useEffect(() => {
        getAllData();
    }, [])
    return (
        <div className="left-panel left-panel2">
            <div className="close-panel">
                <i className="fa fa-times close_button" aria-hidden="true"></i>
            </div>
            <div className="wdg-divider"></div>
            <div className="wdg-logo">
                <a href="index.html">
                    <img src="assets/images/logo.png" style={{ width: "100px", marginTop: "60px" }} />
                </a>
            </div>
            <div className="wdg-divider"></div>
            <div>
                <div className="wdg-avatar" onclick="window.open('index.html', '_self' )"></div>
                <div className="wdg-user">
                    <input type="hidden" id="HiddenField1UserAccount" value="TL8p3KVhZj6Gu59zh8bF6WregzGFpJSgL9" autocomplete="off" />
                    <span className="user-label">Member ID:</span>
                    <span className="user-id" id="" style={{ color: "#fbc50b" }}>{dashboard?.userId?dashboard?.userId:0} </span>
                </div>
            </div>
            <div className="wdg-divider"></div>
            <div className="wdg-stats">
                <div className="stats-box-icon text-center">

                    <i className="fa fa-users"></i>
                </div>
                <div className="stats-box">
                    <div className="stats-value">
                        {dashboard?.allParticipants?.all_participants ?
                            dashboard?.allParticipants?.all_participants : 0}
                    </div>
                    <div className="stats-label">All participants:</div>
                </div>

                <div className="stats-box">
                    <div className="stats-value">

                        {dashboard?.allParticipants?.participants_joined_last_24_hours ?
                            dashboard?.allParticipants?.participants_joined_last_24_hours : 0}
                    </div>
                    <div className="stats-label">Joined in 24 hour:</div>
                </div>
                <div className="stats-box">
                    <div className="stats-value">115728058.0970</div>

                    <div className="stats-label">Participants have earned ULE:</div>
                </div>
                <div className="stats-box">
                    <div className="stats-value">7540711.8020</div>

                    <div className="stats-label">Participants have earned USD:</div>
                </div>
            </div>

            <div className="wdg-divider"></div>
            <div className="wdg-links">
                <div className="wdg-label">Affiliate Link:</div>
                <div className="wdg-box bxset primary">
                    <input type="text" className="wdg-input-box" id="myInput1" readonly="" value="http://d-app.network/registration?referrallink=100" />
                    <div className="fast-msg-box"></div>
                </div>
                <div className="wdg-actions">
                    <button type="button" onclick="myFunction1()">
                        <i className="fa fa-clipboard"></i>
                        <span>Copy</span>
                    </button>
                    {/* <script>
	                    function myFunction1() {
	                        var copyText = document.getElementById("myInput1");
	                        copyText.select();
	                        copyText.setSelectionRange(0, 99999)
	                        document.execCommand("copy");
	                    }
	                </script> */}
                </div>
            </div>

            <div className="wdg-links">
                <div className="wdg-label">Wallet  Address:</div>
                <div className="wdg-box bxset primary">

                    <input type="text" onclick={`window.open('https://tronscan.org/#/address/${dashboard?.walletAddress}/transactions','_blank')`} className="wdg-input-box cursorset" id="myInput1" readonly="" value={dashboard?.walletAddress} />
                </div>
            </div>
        </div>
    );
}

