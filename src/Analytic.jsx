import React from "react";
import fb1 from "../src/images/fb.png";
import fb2 from "../src/images/fb1.png";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function Analytic() {
  return (
    <>
     
  
        <div className="container " id="overview-10">
          <div className="profanalytic">
            <h3>Profile Analytics</h3>
          </div>
          <div className="col-12">
            <div className="row ">
              <div className="col-md-5 anacard  ">
                <div className="row">
                  <div className="col-md-2">
                    <img src={fb1} />
                  </div>
                  <div className="col-md-6  ana-10 ">
                    <h5>
                      Connect your Facebook profile to get profile analytics for
                      your Facebook listing
                    </h5>
                  </div>
                  <div className="col-md-4 button_connect ">
                    <a href="#" className="btn btn-analy  ">
                      <h6>Connect</h6>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-5 anacard ">
                <div className="row">
                  <div className="col-md-2">
                    <img src={fb1} />
                  </div>
                  <div className="col-md-6  ana-10">
                    <h5>
                      Connect your Twitter profile to get profile analytics for
                      your Facebook listing
                    </h5>
                  </div>
                  <div className="col-md-4 button_connect">
                    <a href="#" className="btn btn-analy  ">
                      <h6>Connect</h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container analytic-11 ">
            <div className="col-md-12 ">
              <div className="row ">
                <div className="col-md-4 analytic-14">
                  <div className="row ">
                    <div className="col-md-6 this_week ">
                      <a href="#">
                        This Week <ArrowDropDownIcon />
                      </a>
                    </div>
                    <div className="col-md-6">
                      <a href="#" className="btn btn-analytic-13">
                        <h6>Download Report</h6>
                      </a>
                    </div>
                  </div>
                  <div className="row total_top ">
                    <div className="col-md-3  ">
                      <img src={fb2} />
                    </div>
                    <div className="col-md-6" style={{ lineHeight: 0 }}>
                      <p className="analytic-16"> 2623</p>
                      <p className="analytic-17">Total profile view</p>
                    </div>
                    <div className="col-md-3 ">+01.03%</div>
                  </div>
                  <div className="row total_top">
                    <div className="col-md-3  ">
                      <img src={fb2} />
                    </div>
                    <div className="col-md-6" style={{ lineHeight: 0 }}>
                      <p className="analytic-16"> 2623</p>
                      <p className="analytic-17">Total profile view</p>
                    </div>
                    <div className="col-md-3  ">+01.03%</div>
                  </div>
                  <div className="row total_top">
                    <div className="col-md-3  ">
                      <img src={fb2} />
                    </div>
                    <div className="col-md-6" style={{ lineHeight: 0 }}>
                      <p className="analytic-16"> 2623</p>
                      <p className="analytic-17">Total profile view</p>
                    </div>
                    <div className="col-md-3  ">+01.03%</div>
                  </div>
                  <div className="row total_top">
                    <div className="col-md-3  ">
                      <img src={fb2} />
                    </div>
                    <div className="col-md-6" style={{ lineHeight: 0 }}>
                      <p className="analytic-16"> 2623</p>
                      <p className="analytic-17">Total profile view</p>
                    </div>
                    <div className="col-md-3  ">+01.03%</div>
                  </div>
                  <div className="row total_top">
                    <div className="col-md-3  ">
                      <img src={fb2} />
                    </div>
                    <div className="col-md-6" style={{ lineHeight: 0 }}>
                      <p className="analytic-16"> 2623</p>
                      <p className="analytic-17">Total profile view</p>
                    </div>
                    <div className="col-md-3  ">+01.03%</div>
                  </div>
                </div>
                <div className="col-md-7  analytic-14">
                  <table class="table table-hover">
                    <thead className="head_font">
                      <tr>
                        <th scope="col">Profiles 02</th>
                        <th scope="col">Profiles views</th>
                        <th scope="col">Website views</th>
                        <th scope="col">Phone calls</th>
                        <th scope="col">Direction Request</th>
                        <th scope="col">Button clicks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row" className="analytics-17">
                          Consolidated
                        </th>
                        <td>2636</td>
                        <td>10876</td>
                        <td>213</td>
                        <td>543</td>
                        <td>1123</td>
                      </tr>
                      <tr>
                        <th scope="row" className="analytics-17">
                          Google
                        </th>
                        <td>65</td>
                        <td>65</td>
                        <td>112</td>
                        <td>453</td>
                        <td>54</td>
                      </tr>
                      <tr>
                        <th scope="row" className="analytics-17">
                          Bing
                        </th>
                        <td>785</td>
                        <td>345</td>
                        <td>432</td>
                        <td>76</td>
                        <td>89</td>
                      </tr>
                      <tr>
                        <th scope="row" className="analytics-17">
                          Bing
                        </th>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                      </tr>
                      <tr>
                        <th scope="row" className="analytics-17">
                          Google
                        </th>
                        <td>65</td>
                        <td>60</td>
                        <td>112</td>
                        <td>453</td>
                        <td>54</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
     
    </>
  );
}

export default Analytic;
