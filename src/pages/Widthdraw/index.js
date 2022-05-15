

import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import {
    getDownlineReport
} from "../../store/actions/dailyYield";
import {
    getWalletAddress
} from "../../store/actions/dashboard";
import { API } from "../../store/actions/API";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

export const Widthdraw = () => {
    const downlineReport = useSelector(state => state?.dailyYield?.downlineReport);
    const dashboard = useSelector(state => state?.dashboard);

    const dispatch = useDispatch();
    const user = localStorage.getItem('user')
    const [depositeAmount, setDepositeAmount] = useState([])
  
    const getAllData = () => {
        if (user) {
            let ress = JSON.parse(user);
            let uId = ress?.user_id;
            dispatch(getDownlineReport(uId));
            dispatch(getWalletAddress(uId));
        }
    }
   
    const wid=async ()=>{
        try {
            const res = await API.get(`/widthdraw?amount=${depositeAmount}&address=${dashboard?.walletAddress}`);
            console.log(res?.data?.hexAddress)
            toast.success("Successfully Widthdrawl !");
          } catch (e) {
              console.log("error",e)
        toast.error("Failed !",e.toString());

          }
    }

    useEffect(() => {
        getAllData();
    }, [])

   
    
    return (
        <>
        <ToastContainer />


			<div className="content-wrapper">
			    <div className="grid grid-1">
		            <div className="">

		                <div className="section-heading">
		                    <h2>Withdrawal</h2>
		                </div>
		                
                        <div className="box box-default table-wrapper ">
		                    <div className="panel-body">
		                        {/* <span className="metamaskConnection" style={{color:"red"}}>Metamask is not connected..!..Wait...</span> */}
		                        <br/>
		                        <br/>
		                        <br/>

		                        <div className="row">
		                            <div className="col-md-2">
		                                <label>Wallet Net USD Value</label>
		                            </div>
		                            <div className="col-md-3">
		                                <label className="form-control ng-pristine ng-untouched ng-valid ng-binding ng-empty" ng-model="p.walletAmount" id="walletAmount"></label>
		                            </div>
		                        </div>

		                        <br/>

		                        <div className="row">
		                            <div className="col-md-2">
		                                <label>Enter USD Amount </label>
		                            </div>
		                            <div className="col-md-3">
		                                <input type="text" 
                                        className="form-control mb-20 ng-pristine ng-untouched ng-valid ng-empty ng-valid-maxlength" 
                                        id="amount" 
                                        placeholder="Enter USD Amount" 
                                        value={depositeAmount}
                                        onChange={e=>setDepositeAmount(e.target.value)}
                                        maxLength="10" />
		                            </div>
		                        </div>

		                        {/* <div className="row mrset" id="withdrwaltokendiv">
		                            <div className="col-md-2">
		                                <label>Withdrawal Token </label>
		                            </div>
		                            <div className="col-md-3">
		                                <input type="text" 
                                        className="form-control ng-pristine ng-untouched ng-valid ng-empty" 
                                        id="tokenvalue" 
                                        placeholder="Withdrwal Token " disabled=""/>
		                            </div>
		                        </div> */}

		                        <input type="hidden" id="address" className="form-control ng-pristine ng-untouched ng-valid ng-empty" value=""  autocomplete="off"/>
		                        <input type="hidden" id="userid" className="form-control ng-pristine ng-untouched ng-valid ng-empty" value="" autocomplete="off"/>
		                        <input type="hidden" id="withdrawalvalidate" className="form-control ng-pristine ng-untouched ng-valid ng-empty" value=""  autocomplete="off"/>
		                        
                                <div className="row">
		                            <div className="col-md-3 col-md-offset-2" >
		                                <button className="btn btn-success" onClick={wid} style={{marginTop: "10px"}} id="btnother">Withdrawal  </button>
		                            </div>
		                        </div>

		                    </div>
		                </div>
		            </div>
		        </div>
			</div>
			<div className="clearfix">
                <br/>
            </div>

			<br/><br/>
			<div className="footer-section">Copyright © 2022 Yeepule. All Rights Reserved.</div>
	

        </>
        );
}

