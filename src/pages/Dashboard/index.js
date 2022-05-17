import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getWalletAddress,
  getDailyYeild,
  getTeamDy,
  getAllParticipants,
  getBonusDy,
  getReferralEarning,
  getPools,
  getWithdrawal,
  getDownlineBusiness,
} from "../../store/actions/dashboard";
const Dashboard = () => {
  const dashboard = useSelector((state) => state?.dashboard);
  const user = localStorage.getItem("user");
  const dispatch = useDispatch();
  const getAllData = () => {
    if (user) {
      let ress = JSON.parse(user);
      let uId = ress?.user_id;
      dispatch(getWalletAddress(uId));
      dispatch(getAllParticipants(uId));
      dispatch(getDailyYeild(uId));
      dispatch(getTeamDy(uId));
      dispatch(getBonusDy(uId));
      dispatch(getReferralEarning(uId));
      dispatch(getPools(uId));
      dispatch(getWithdrawal(uId));
      dispatch(getDownlineBusiness(uId));
    }
  };
  useEffect(() => {
    getAllData();
  }, []);
  console.log("state", dashboard);
  return (
    <div class="content-wrapper">
      <link
        rel="stylesheet"
        type="text/css"
        href="assets/css/NewUserPannel.css"
      />
      <section className="maindsb">
        <div className="container">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <a href="https://www.wyshopping.life/" target="_blank">
                  <img
                    src="assets/images/banner/12.jpg"
                    alt="d-app banner -1"
                    style={{ width: "100%" }}
                  />
                </a>
              </div>
              <div class="carousel-item">
                <a href="https://www.wyshopping.life/" target="_blank">
                  <img
                    src="assets/images/banner/8.jpg"
                    alt="d-app banner -2"
                    style={{ width: "100%" }}
                  />
                </a>
              </div>
              <div class="carousel-item">
                <a href="https://www.wyshopping.life/" target="_blank">
                  <img
                    src="assets/images/banner/9.jpg"
                    alt="d-app banner -3"
                    style={{ width: "100%" }}
                  />
                </a>
              </div>
              <div className="carousel-item">
                <a href="https://www.wyshopping.life/" target="_blank">
                  <img
                    src="assets/images/banner/10.jpg"
                    alt="d-app banner -4"
                    style={{ width: "100%" }}
                  />
                </a>
              </div>
              <div className="carousel-item">
                <a href="https://www.wyshopping.life/" target="_blank">
                  <img
                    src="assets/images/banner/11.jpg"
                    alt="d-app banner -5"
                    style={{ width: "100%" }}
                  />
                </a>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          {/* <div
            id="myCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="item">
                <a href="https://www.wyshopping.life/" target="_blank">
                  <img
                    src="assets/images/banner/12.jpg"
                    alt="d-app banner -1"
                    style={{ width: "100%" }}
                  />
                </a>
              </div>
              <div className="item active">
                <a href="https://www.wyshopping.life/" target="_blank">
                  <img
                    src="assets/images/banner/8.jpg"
                    alt="d-app banner -2"
                    style={{ width: "100%" }}
                  />
                </a>
              </div>
              <div className="item">
                <a href="https://www.wyshopping.life/" target="_blank">
                  <img
                    src="assets/images/banner/9.jpg"
                    alt="d-app banner -3"
                    style={{ width: "100%" }}
                  />
                </a>
              </div>
              <div className="item">
                <a href="https://www.wyshopping.life/" target="_blank">
                  <img
                    src="assets/images/banner/10.jpg"
                    alt="d-app banner -4"
                    style={{ width: "100%" }}
                  />
                </a>
              </div>
              <div className="item">
                <a href="https://www.wyshopping.life/" target="_blank">
                  <img
                    src="assets/images/banner/11.jpg"
                    alt="d-app banner -5"
                    style={{ width: "100%" }}
                  />
                </a>
              </div>
            </div>
            <a
              className="left carousel-control indicator_set"
              href="#myCarousel"
              data-bs-slide="prev"
            >
              <span className=" indicator_set glyphicon fa fa-chevron-circle-left"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="right carousel-control indicator_set"
              href="#myCarousel"
              data-bs-slide="next"
            >
              <span className=" indicator_set glyphicon fa fa-chevron-circle-right"></span>
              <span className="sr-only">Next</span>
            </a>
          </div> */}
        </div>
      </section>
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <a href="/daily-yeild">
              <div class="box features-1">
                <div class="gen-comp-plan">
                  <div class="gcp-description">
                    <div class="gcp-title">Daily Yeild</div>
                    <div class="gcp-income">
                      <span class="cur1">
                        {parseFloat(
                          dashboard?.dailyYeild ? dashboard?.dailyYeild : 0
                        ).toFixed(4)}{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-3">
            <a href="/team-dy">
              <div class="box features-1">
                <div class="gen-comp-plan">
                  <div class="gcp-description">
                    <div class="gcp-title">Team DY</div>
                    <div class="gcp-income">
                      <span class="cur1">
                        {parseFloat(
                          dashboard?.teamDy ? dashboard?.teamDy : 0
                        ).toFixed(4)}{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-3">
            <a href="/referral-earning">
              <div class="box features-1">
                <div class="gen-comp-plan">
                  <div class="gcp-description">
                    <div class="gcp-title">Referral Earning</div>
                    <div class="gcp-income">
                      <span class="cur1">
                        {parseFloat(
                          dashboard?.referralEearnig
                            ? dashboard?.referralEearnig
                            : 0
                        ).toFixed(4)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-3">
            <a href="/my-team">
              <div class="box features-1">
                <div class="gen-comp-plan">
                  <div class="gcp-description">
                    <div class="gcp-title">My Team</div>
                    <div class="gcp-income">
                      <span class="cur1">Active 0 /In-Active 1</span>
                      <input type="hidden" id="jj" autocomplete="off" />
                      <input type="hidden" id="u" autocomplete="off" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-3">
            <a href="/referral-report">
              <div class="box features-1">
                <div class="gen-comp-plan">
                  <div class="gcp-description">
                    <div class="gcp-title">My Referral</div>
                    <div class="gcp-income">
                      <span class="cur1">Active 0 /In-Active 1</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-3">
            <a href="/pools">
              <div class="box features-1">
                <div class="gen-comp-plan">
                  <div class="gcp-description">
                    <div class="gcp-title">Total Pool Income</div>
                    <div class="gcp-income">
                      <span class="cur1">
                        {parseFloat(
                          dashboard?.pools?.total_pool_income
                            ? dashboard?.pools?.total_pool_income
                            : 0
                        ).toFixed(4)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-3">
            <a href="/pools">
              <div class="box features-1">
                <div class="gen-comp-plan">
                  <div class="gcp-description">
                    <div class="gcp-title">Pool Income 1</div>
                    <div class="gcp-income">
                      <span class="cur1">
                        {parseFloat(
                          dashboard?.pools?.pool_income_1
                            ? dashboard?.pools?.pool_income_1
                            : 0
                        ).toFixed(4)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-3">
            <a href="/pools">
              <div class="box features-1">
                <div class="gen-comp-plan">
                  <div class="gcp-description">
                    <div class="gcp-title">Pool Income 2</div>
                    <div class="gcp-income">
                      <span class="cur1">
                        {" "}
                        {parseFloat(
                          dashboard?.pools?.pool_income_2
                            ? dashboard?.pools?.pool_income_2
                            : 0
                        ).toFixed(4)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-3">
            <a href="/pools">
              <div class="box features-1">
                <div class="gen-comp-plan">
                  <div class="gcp-description">
                    <div class="gcp-title">Pool Income 3</div>
                    <div class="gcp-income">
                      <span class="cur1">
                        {" "}
                        {parseFloat(
                          dashboard?.pools?.pool_income_3
                            ? dashboard?.pools?.pool_income_3
                            : 0
                        ).toFixed(4)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-3">
            <a href="/bonus-dy">
              <div class="box features-1">
                <div class="gen-comp-plan">
                  <div class="gcp-description">
                    <div class="gcp-title">Bonus DY</div>
                    <div class="gcp-income">
                      <span class="cur1">
                        {parseFloat(
                          dashboard?.bonusDy ? dashboard?.bonusDy : 0
                        ).toFixed(4)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-3">
            <a href="/widthdrawl">
              <div class="box features-1">
                <div class="gen-comp-plan">
                  <div class="gcp-description">
                    <div class="gcp-title">Withdrawal</div>
                    <div class="gcp-income">
                      <span class="cur1">
                        {parseFloat(
                          dashboard?.widthdrawl ? dashboard?.widthdrawl : 0
                        ).toFixed(4)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-3">
            <a href="#">
              <div class="box features-1">
                <div class="gen-comp-plan">
                  <div class="gcp-description">
                    <div class="gcp-title">Total Downline Business</div>
                    <div class="gcp-income">
                      <span class="cur1">
                        {parseFloat(
                          dashboard?.downlineBusiness
                            ? dashboard?.downlineBusiness
                            : 0
                        ).toFixed(4)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="swap_heading">
              <h2>
                Want to be Swap ? Select Swap according to Chain Now
                <span class="blink_me">
                  {" "}
                  <i class="fa fa-mars"></i>
                </span>
              </h2>
            </div>
            <div class="exbox ">
              <a
                href="https://sunswap.com/#/scanold/detail/TEQuSBH1jxGzqJfZSQx8tusHrLaKobnRZz"
                target="_blank"
              >
                <div class="rate juslogoset">
                  <span>
                    <img src="assets/images/Icon/sunswapName.png" />{" "}
                  </span>
                </div>
              </a>
              <a href="https://wyzthswap.org/home" target="_blank">
                <div class="rate juslogoset mrlrset">
                  <span>
                    <img src="assets/images/Icon/raydiumswap.png" />{" "}
                  </span>
                </div>
              </a>
              <a href="https://justlend.org/#/home" target="_blank">
                <div class="rate juslogoset">
                  <span>
                    <img src="assets/images/Icon/wyzswap.png" />{" "}
                  </span>
                </div>
              </a>
              <a href="https://justlend.org/#/home" target="_blank">
                <div class="rate juslogoset">
                  <span>
                    <img src="assets/images/Icon/quickswapWithName.png" />{" "}
                  </span>
                </div>
              </a>
              <a href="https://justlend.org/#/home" target="_blank">
                <div class="rate juslogoset">
                  <span>
                    <img src="assets/images/Icon/pancakeswapName.png" />{" "}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div class="row">
          <div class="col-md-12">
            <div class="prgs">
              <div id="myProgress">
                <div
                  id="myBar"
                  style={{ width: "100%", backgroundColor: "red" }}
                ></div>
              </div>
            </div>
            <div style={{ color: "#000", fontWeight: "400" }}>
              {" "}
              Your total earning is 300.0000 USD out of 300.0000 USD (Your
              earned 100.0000% out of 300% of your investment )
            </div>
            {/* 
                    <style>


                        #myProgress {
                            width: 100%;
                            background-color: lightblue;
                        }

                        #myBar {
                            width: 1%;
                            height: 30px;
                            background: #656262 !important;
                        }
                    </style>
                    <script>
                        $(document).ready(function () {
                            move();
                        });
                        var i = 0;
                        function move() {
                            if (i == 0) {
                                i = 1;
                                var elem = document.getElementById("myBar");
                                var width =100.0000  ;
                                elem.style.width = width + "%";
                                if (width > 90) {
                                    elem.style.backgroundColor = "red";
                                }
                                else {
                                    elem.style.backgroundColor = "green";
                                }
                                
                            }
                        }

                    </script> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
