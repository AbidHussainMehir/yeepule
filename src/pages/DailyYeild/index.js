import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import {
    getDailyYieldReport
} from "../../store/actions/dailyYield"
import moment from 'moment';
export const DailyYeild = () => {
    const dailyYield = useSelector(state => state?.dailyYield?.dailyYeildReport)
    const dispatch = useDispatch();
    const user = localStorage.getItem('user')


    const getAllData = () => {
        if (user) {
            let ress = JSON.parse(user);
            let uId = ress?.user_id;
            dispatch(getDailyYieldReport(uId));
        }

    }
    useEffect(() => {
        getAllData()
    }, [])
    console.log("state", dailyYield)
    return (
        <>
            <div class="content-wrapper">
                <div class="grid grid-1">
                    <div class="section-heading">
                        <h2>Daily Yeild</h2>
                    </div>
                    <div class="box box-default table-wrapper" style={{
                        maxHeight: "530px",
                        overflow: "scroll"
                    }}>
                        <table cellpadding="0" cellspacing="0" class="t-data">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>ID</th>


                                    <th>USD Value</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dailyYield.map((item, index) => {
                                    return <tr>
                                        <td>{index + 1}</td>
                                        <td>{item?.id}</td>
                                        <td>{item?.amount}</td>
                                        <td>
                                            {moment(item?.date).format('M/D/YYYY h:m:s A')}
                                        </td>
                                    </tr>
                                })}

                            </tbody>
                        </table>
                    </div>
                    <div class="pagination-wrapper">
                        <div class="pagination">
                            <div class="pagination-container"><ul class="pagination"><li class="disabled PagedList-pageCountAndLocation">
                                <a>Page 1 of 1.</a></li>
                                <li class="disabled PagedList-pageCountAndLocation"><a>Showing items 1 through 2 of 2.</a></li><li class="active"><a>1</a></li></ul></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="clearfix"><br /></div>

            <br /><br />
            <div class="footer-section">Copyright © 2022 Yeepule. All Rights Reserved.</div>
            <link rel="stylesheet" type="text/css" href="assets/css/2.d34346ea.chunk.css" />
            <link rel="stylesheet" type="text/css" href="assets/css/main.f70df022.chunk.css" />

        </>);
}

