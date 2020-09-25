import React from "react";
import fb from "../src/images/fb.png";
import snap from "../src/images/snap.png";
import insta from "../src/images/instagram.png";
import tw from "../src/images/tw.png";
import ChartsPage from "./Dogh";
import BarChart from "./Bar";
import add from "../src/images/tw.png";
import fb1 from "../src/images/fb1.png";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

function Overview() {
  return (
    <>
      <div className="left-side-menu"></div>
      <div className="content-page">
        <div className="container " id="overview-10">
          <div className="row">
            <div className="col-md-6 recent_noti">
              <div className="recent-9">
                <h3>Recent Notification</h3>
              </div>
              <div className="row">
                <div className="col-md-12 special_tit">
                  <div className="row">
                    <div className="col-md-7">
                      <h5 className="recent-title">Special title treatment</h5>
                      <p className="recent-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                    </div>

                    <div className="col-md-2 ">
                      <a href="#" className="btn btn-primary ">
                        <h6>Comment</h6>
                      </a>
                    </div>
                    <div className="col-md-3  recent-hour">
                      <h6>2 hours ago</h6>
                    </div>
                    <div className="col-md-7">
                      <h5 className="recent-title">Special title treatment</h5>
                      <p className="recent-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                    </div>

                    <div className="col-md-2 ">
                      <a href="#" className="btn btn-primary ">
                        <h6>Comment</h6>
                      </a>
                    </div>
                    <div className="col-md-3 recent-hour">
                      <h6>2 hours ago</h6>
                    </div>
                    <div className="col-md-7">
                      <h5 className="recent-title">Special title treatment</h5>
                      <p className="recent-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                    </div>

                    <div className="col-md-2 ">
                      <a href="#" className="btn btn-primary ">
                        <h6>Comment</h6>
                      </a>
                    </div>
                    <div className="col-md-3  recent-hour">
                      <h6>2 hours ago</h6>
                    </div>
                    <div className="col-md-7">
                      <h5 className="recent-title">Special title treatment</h5>
                      <p className="recent-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                    </div>

                    <div className="col-md-2 ">
                      <a href="#" className="btn btn-primary ">
                        <h6>Comment</h6>
                      </a>
                    </div>
                    <div className="col-md-3 recent-hour">
                      <h6>2 hours ago</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col-md-6 recent_noti ">
            <div className="recent-9">
                <h3>Social Overview</h3>
              </div>
              <div className="row ">
                <div className="card  col-md-6">
                  <div className="social-10">
                    <img src={snap} />
                  </div>
                  <div className="row ">
                    <div className="col-sm-4 social-11">
                      <h6>310,125 </h6>
                      <p>+10,03% </p>
                      <a href="#" class="link-social" role="button">
                        Likes
                      </a>
                    </div>
                    <div className="col-sm-4 social-11">
                      <h6>310,125 </h6>
                      <p>+10,03% </p>
                      <a href="#" class="link-social" role="button">
                        Chek ins
                      </a>
                    </div>
                    <div className="col-sm-4 social-11">
                      <h6>310,125 </h6>
                      <p>+10,03% </p>
                      <a href="#" class="link-social" role="button">
                        Chek ins
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card  col-md-6">
                  <div className="social-10">
                    <img src={insta} />
                  </div>
                  <div className="row ">
                    <div className="col-sm-4 social-11">
                      <h6>310,125 </h6>
                      <p>+10,03% </p>
                      <a href="#" class="link-social" role="button">
                        Likes
                      </a>
                    </div>
                    <div className="col-sm-4 social-11">
                      <h6>310,125 </h6>
                      <p>+10,03% </p>
                      <a href="#" class="link-social" role="button">
                        Chek ins
                      </a>
                    </div>
                    <div className="col-sm-4 social-11">
                      <h6>310,125 </h6>
                      <p>+10,03% </p>
                      <a href="#" class="link-social" role="button">
                        Chek ins
                      </a>
                    </div>
                  </div>
                </div>
                </div>

                <div className="row ">
                <div className="card  col-md-6">
                  <div className="social-10">
                    <img src={fb} />
                  </div>
                  <div className="row ">
                    <div className="col-sm-4 social-11">
                      <h6>310,125 </h6>
                      <p>+10,03% </p>
                      <a href="#" class="link-social" role="button">
                        Likes
                      </a>
                    </div>
                    <div className="col-sm-4 social-11">
                      <h6>310,125 </h6>
                      <p>+10,03% </p>
                      <a href="#" class="link-social" role="button">
                        Chek ins
                      </a>
                    </div>
                    <div className="col-sm-4 social-11">
                      <h6>310,125 </h6>
                      <p>+10,03% </p>
                      <a href="#" class="link-social" role="button">
                        Chek ins
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card  col-md-6">
                  <div className="social-10">
                    <img src={tw} />
                  </div>
                  <div className="row">
                    <div className="col-sm-4 social-11">
                      <h6>310,125 </h6>
                      <p>+10,03% </p>
                      <a href="#" class="link-social" role="button">
                        Likes
                      </a>
                    </div>
                    <div className="col-sm-4 social-11">
                      <h6>310,125 </h6>
                      <p>+10,03% </p>
                      <a href="#" class="link-social" role="button">
                        Chek ins
                      </a>
                    </div>
                    <div className="col-sm-4 social-11">
                      <h6>310,125 </h6>
                      <p>+10,03% </p>
                      <a href="#" class="link-social" role="button">
                        Chek ins
                      </a>
                    </div>
                  </div>
                </div>
                </div>
             
            </div> */}
           
          <div className='col-md-6  recent_noti'>
          <div className="recent-9">
                <h3>Social Overview</h3>
              </div>
          <div class="row">
  <div class=" col-md-6 ">
    <div class="card social-10 ">
    
                    <img src={fb} />
     
    
    
    <div className="row card_jump">
                    <div className="col-sm-4 social-11">
                      <h6>310,125 </h6>
                      <p>+10,03% </p>
                      <a href="#" class="link-social" role="button">
                        Likes
                      </a>
                    </div>
                    <div className="col-sm-4 social-11">
                      <h6>310,125 </h6>
                      <p>+10,03% </p>
                      <a href="#" class="link-social" role="button">
                        Chek ins
                      </a>
                    </div>
                    <div className="col-sm-4 social-11">
                      <h6>310,125 </h6>
                      <p>+10,03% </p>
                      <a href="#" class="link-social" role="button">
                        Chek ins
                      </a>
                    </div>
                  </div>
                  </div>
  </div>
  <div class=" col-md-6">
     <div class="card social-10 ">
    
                    <img src={fb} />
                    <div className="row card_jump">
                    <div className="col-sm-4 social-11">
                      <h6>310,125 </h6>
                      <p>+10,03% </p>
                      <a href="#" class="link-social" role="button">
                        Likes
                      </a>
                    </div>
                    <div className="col-sm-4 social-11">
                      <h6>310,125 </h6>
                      <p>+10,03% </p>
                      <a href="#" class="link-social" role="button">
                        Chek ins
                      </a>
                    </div>
                    <div className="col-sm-4 social-11">
                      <h6>310,125 </h6>
                      <p>+10,03% </p>
                      <a href="#" class="link-social" role="button">
                        Chek ins
                      </a>
                    </div>
                  </div>
     
     
    </div>
  </div>
</div>
<div className='card_gap1'>

<div class="row">
<div class=" col-md-6 ">
    <div class="card social-10 ">
    
                    <img src={fb} />
                    <div className="row card_jump">
                    <div className="col-sm-4 social-11">
                      <h6>310,125 </h6>
                      <p>+10,03% </p>
                      <a href="#" class="link-social" role="button">
                        Likes
                      </a>
                    </div>
                    <div className="col-sm-4 social-11">
                      <h6>310,125 </h6>
                      <p>+10,03% </p>
                      <a href="#" class="link-social" role="button">
                        Chek ins
                      </a>
                    </div>
                    <div className="col-sm-4 social-11">
                      <h6>310,125 </h6>
                      <p>+10,03% </p>
                      <a href="#" class="link-social" role="button">
                        Chek ins
                      </a>
                    </div>
                  </div>
     
    
    </div>
  </div>
  <div class=" col-md-6">
    <div class="card social-10 ">
    
                    <img src={fb} />
                    <div className="row card_jump">
                    <div className="col-sm-4 social-11">
                      <h6>310,125 </h6>
                      <p>+10,03% </p>
                      <a href="#" class="link-social" role="button">
                        Likes
                      </a>
                    </div>
                    <div className="col-sm-4 social-11">
                      <h6>310,125 </h6>
                      <p>+10,03% </p>
                      <a href="#" class="link-social" role="button">
                        Chek ins
                      </a>
                    </div>
                    <div className="col-sm-4 social-11">
                      <h6>310,125 </h6>
                      <p>+10,03% </p>
                      <a href="#" class="link-social" role="button">
                        Chek ins
                      </a>
                    </div>
                  </div>
     
    
    </div>
  </div>
</div>
</div>

          </div>
          </div>

          {/* <div class="row hawaipatti ">
            <div class="col-md-8 ">
              <div class="row recent-card">
                <div className="col-sm-2 icon_margin  ">
                  <div className="row ">
                    <img src={add} alt="add" />

                    <div className="icon_margin ">
                      <div className="row  ">
                        <span>sdsds</span>
                      </div>
                      <div className="row">
                        <span>sdsds</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2 icon_margin  ">
                  <div className="row ">
                    <img src={add} alt="add" />

                    <div className="icon_margin ">
                      <div className="row  ">
                        <span>sdsds</span>
                      </div>
                      <div className="row">
                        <span>sdsds</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2 icon_margin  ">
                  <div className="row ">
                    <img src={add} alt="add" />

                    <div className="icon_margin ">
                      <div className="row  ">
                        <span>sdsds</span>
                      </div>
                      <div className="row">
                        <span>sdsds</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2 icon_margin  ">
                  <div className="row ">
                    <img src={add} alt="add" />

                    <div className="icon_margin ">
                      <div className="row  ">
                        <span>sdsds</span>
                      </div>
                      <div className="row">
                        <span>sdsds</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2 icon_margin  ">
                  <div className="row ">
                    <img src={add} alt="add" />

                    <div className="icon_margin ">
                      <div className="row  ">
                        <span>sdsds</span>
                      </div>
                      <div className="row">
                        <span>sdsds</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 ">
              <div className="row recent-card">
                <div className="col-md-12">
                  <div className="row right_icons">
                    <div className="col-md-2">
                      <img src={fb1} />
                    </div>
                    <div className="col-md-2">
                      <img src={fb1} />
                    </div>
                    <div className="col-md-2">
                      <img src={fb1} />
                    </div>
                    <div className="col-md-2">
                      <img src={fb1} />
                    </div>
                    <div className="col-md-2">
                      <img src={fb1} />
                    </div>
                    <div className="col-md-2">vhyv</div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}


             <div className="row hawaipatti ">
               <div className='col-md-9 '>
                 <div className='recent-card'>
                 <div class="row">
                <div className="col-sm-2 icon_margin  ">
                  <div className="row ">
                    <img src={add} alt="add" />

                    <div className="icon_margin ">
                      <div className="row  ">
                        <span>sdsds</span>
                      </div>
                      <div className="row">
                        <span>sdsds</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2 icon_margin  ">
                  <div className="row ">
                    <img src={add} alt="add" />

                    <div className="icon_margin ">
                      <div className="row  ">
                        <span>sdsds</span>
                      </div>
                      <div className="row">
                        <span>sdsds</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2 icon_margin  ">
                  <div className="row ">
                    <img src={add} alt="add" />

                    <div className="icon_margin ">
                      <div className="row  ">
                        <span>sdsds</span>
                      </div>
                      <div className="row">
                        <span>sdsds</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2 icon_margin  ">
                  <div className="row ">
                    <img src={add} alt="add" />

                    <div className="icon_margin ">
                      <div className="row  ">
                        <span>sdsds</span>
                      </div>
                      <div className="row">
                        <span>sdsds</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2 icon_margin  ">
                  <div className="row ">
                    <img src={add} alt="add" />

                    <div className="icon_margin ">
                      <div className="row  ">
                        <span>sdsds</span>
                      </div>
                      <div className="row">
                        <span>sdsds</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                </div>
               </div>
               <div className='col-md-3'>
               <div className='recent-card'>
               <div className="row right_icons">
                    <div className="col-md-1">
                      <img src={fb1} />
                    </div>
                    <div className="col-md-1">
                      <img src={fb1} />
                    </div>
                    <div className="col-md-1">
                      <img src={fb1} />
                    </div>
                    <div className="col-md-1">
                      <img src={fb1} />
                    </div>
                    <div className="col-md-2">
                      <img src={fb1} />
                    </div>
                    <div className="col-md-4 view_10">view all<ArrowRightIcon/></div>
                  </div>
                </div>
                 
                 </div>
             </div>






          <div class="row chart_10">
            <div class="col-md-4">
            <div className="recent-9">
                <h3>Listing Status</h3>
              </div>
              <div class="card4">

                <ChartsPage />
              </div>
            </div>
            <div class="col-md-8">
            <div className="recent-9">
                <h3>Average Google customer Actions</h3>
              </div>
              <div class="card4">
                <BarChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;


