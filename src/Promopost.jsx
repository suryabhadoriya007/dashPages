import React from 'react'
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import EventNoteIcon from "@material-ui/icons/EventNote";
import rec from "../src/images/rectangle.png";

function Promopost() {
    return (
        <>
    

      
        <div className="container" id="overview-10">
          <div className="promo_div"> Promotional Posts</div>
          <div className="col-12">
            <div className="row ">
              <div className="col-md-4 card_left">
               
                  <div className="row promobottom">
                  <div className="col-md-12 this_week   ">
                    <EventNoteIcon />
                   This Week
                    <ArrowDropDownIcon />
                  </div>
                  </div>

                  <div className="row">
                    <div className="col-md-2">
                      <img
                        src={require("../src/images/rectangle.png")}
                        alt="rec"
                      />
                    </div>
                    <div className="col-md-6">
                      <span>15</span> <p>Total active post</p>
                    </div>
                    <div className="col-md-4">
                      <span>+01.03%</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-2">
                      <img
                        src={require("../src/images/rectangle.png")}
                        alt="rec"
                      />
                    </div>
                    <div className="col-md-6">
                      <span>15</span> <p>Total active post</p>
                    </div>
                    <div className="col-md-4">
                      <span>+01.03%</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-2">
                      <img
                        src={require("../src/images/rectangle.png")}
                        alt="rec"
                      />
                    </div>
                    <div className="col-md-6">
                      <span>15</span> <p>Total active post</p>
                    </div>
                    <div className="col-md-4">
                      <span>+01.03%</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-2">
                      <img
                        src={require("../src/images/rectangle.png")}
                        alt="rec"
                      />
                    </div>
                    <div className="col-md-6">
                      <span>15</span> <p>Total active post</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-2">
                      <img
                        src={require("../src/images/rectangle.png")}
                        alt="rec"
                      />
                    </div>
                    <div className="col-md-6">
                      <span>15</span> <p>Total active post</p>
                    </div>
                  </div>
                
              </div>

              <div className="col-md-7 card_right ">
                <div className="row gap_101 ">
                  <div className="col-md-6 ">
                    <form>
                      <input
                        type="text"
                        name="search"
                        placeholder="Search Google Posts"
                      />
                    </form>
                  </div>
                  <div className="col-md-2 ">Views</div>
                  <div className="col-md-2">Clicks</div>
                  <div className="col-md-2">Status</div>
                </div>

                <hr />

                <div className="row">
                  <div className="col-md-2 jazz_img">
                    <img
                      src={require("../src/images/rectangle309.png")}
                      alt="rec"
                    />
                  </div>
                  <div className="col-md-4 jazz_today">
                    <span> 2nd March</span>
                    <h6>Jazz Today By Whitney Ballett</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                  </div>
                  <div className="col-md-2">N/A</div>
                  <div className="col-md-2">N/A</div>
                  <div className="col-md-2">
                    <button class="btn btn-success" type="submit">
                      Active
                    </button>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-2 jazz_img">
                    <img
                      src={require("../src/images/rectangle312.png")}
                      alt="rec"
                    />
                  </div>
                  <div className="col-md-4 jazz_today">
                    <span> 2nd March</span>
                    <h6>Jazz Today By Whitney Ballett</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                  </div>
                  <div className="col-md-2">N/A</div>
                  <div className="col-md-2">N/A</div>
                  <div className="col-md-2">
                    <button class="btn btn-success" type="submit">
                      Active
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    </>
    )
}

export default Promopost
