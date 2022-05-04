const Dashboard = () => {
  return (
    <div className="content-wrapper">
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
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <a href="DailyYeild.html">
              <div className="box features-1">
                <div className="gen-comp-plan">
                  <div className="gcp-description">
                    <div className="gcp-title">Daily Yeild</div>
                    <div className="gcp-income">
                      <span className="cur1">4418.1702 </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a href="TeamDY.html">
              <div className="box features-1">
                <div className="gen-comp-plan">
                  <div className="gcp-description">
                    <div className="gcp-title">Team DY</div>
                    <div className="gcp-income">
                      <span className="cur1">0.0000 </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a href="ReferralEarning.html">
              <div className="box features-1">
                <div className="gen-comp-plan">
                  <div className="gcp-description">
                    <div className="gcp-title">Referral Earning</div>
                    <div className="gcp-income">
                      <span className="cur1">0.0000 </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a href="myTeam.html">
              <div className="box features-1">
                <div className="gen-comp-plan">
                  <div className="gcp-description">
                    <div className="gcp-title">My Team</div>
                    <div className="gcp-income">
                      <span className="cur1">Active 0 /In-Active 1</span>
                      <input type="hidden" id="jj" autocomplete="off" />
                      <input type="hidden" id="u" autocomplete="off" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a href="MyReferral.html">
              <div className="box features-1">
                <div className="gen-comp-plan">
                  <div className="gcp-description">
                    <div className="gcp-title">My Referral</div>
                    <div className="gcp-income">
                      <span className="cur1">Active 0 /In-Active 1</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a href="PoolIncome.html">
              <div className="box features-1">
                <div className="gen-comp-plan">
                  <div className="gcp-description">
                    <div className="gcp-title">Total Pool Income</div>
                    <div className="gcp-income">
                      <span className="cur1">0</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a href="PoolIncome.html">
              <div className="box features-1">
                <div className="gen-comp-plan">
                  <div className="gcp-description">
                    <div className="gcp-title">Pool Income 1</div>
                    <div className="gcp-income">
                      <span className="cur1">104.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a href="PoolIncome.html">
              <div className="box features-1">
                <div className="gen-comp-plan">
                  <div className="gcp-description">
                    <div className="gcp-title">Pool Income 2</div>
                    <div className="gcp-income">
                      <span className="cur1">0.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a href="PoolIncome.html">
              <div className="box features-1">
                <div className="gen-comp-plan">
                  <div className="gcp-description">
                    <div className="gcp-title">Pool Income 3</div>
                    <div className="gcp-income">
                      <span className="cur1">0.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a href="BonusDY.html">
              <div className="box features-1">
                <div className="gen-comp-plan">
                  <div className="gcp-description">
                    <div className="gcp-title">Bonus DY</div>
                    <div className="gcp-income">
                      <span className="cur1">0.50</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a href="withdrawal.html">
              <div className="box features-1">
                <div className="gen-comp-plan">
                  <div className="gcp-description">
                    <div className="gcp-title">Withdrawal</div>
                    <div className="gcp-income">
                      <span className="cur1">4415.6100</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a href="#">
              <div className="box features-1">
                <div className="gen-comp-plan">
                  <div className="gcp-description">
                    <div className="gcp-title">Total Downline Business</div>
                    <div className="gcp-income">
                      <span className="cur1">38400.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="swap_heading">
              <h2>
                Want to be Swap ? Select Swap according to Chain Now
                <span className="blink_me">
                  {" "}
                  <i className="fa fa-mars"></i>
                </span>
              </h2>
            </div>
            <div className="exbox ">
              <a
                href="https://sunswap.com/#/scanold/detail/TEQuSBH1jxGzqJfZSQx8tusHrLaKobnRZz"
                target="_blank"
              >
                <div className="rate juslogoset">
                  <span>
                    <img src="assets/images/Icon/sunswapName.png" />{" "}
                  </span>
                </div>
              </a>
              <a href="https://wyzthswap.org/home" target="_blank">
                <div className="rate juslogoset mrlrset">
                  <span>
                    <img src="assets/images/Icon/raydiumswap.png" />{" "}
                  </span>
                </div>
              </a>
              <a href="https://justlend.org/#/home" target="_blank">
                <div className="rate juslogoset">
                  <span>
                    <img src="assets/images/Icon/wyzswap.png" />{" "}
                  </span>
                </div>
              </a>
              <a href="https://justlend.org/#/home" target="_blank">
                <div className="rate juslogoset">
                  <span>
                    <img src="assets/images/Icon/quickswapWithName.png" />{" "}
                  </span>
                </div>
              </a>
              <a href="https://justlend.org/#/home" target="_blank">
                <div className="rate juslogoset">
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
        <div className="row">
          <div className="col-md-12">
            <div className="prgs">
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
