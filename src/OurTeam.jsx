import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreVertIcon from '@material-ui/icons/MoreVert';



function OurTeam() {
    return (
        <>

       
       <div className='container-fluid topdash'>
           <div className='row leftdah'>
               <div className='col-md-3'>
               <img src={require("../src/images/LOGO 4.png")} alt="" /> 
               </div>
               <div className='col-md-6 '>
                   <div className='row searchdah'>
                  <div className='col-md-6 cardspace'>
                  <div class="md-form ">
                  <SearchIcon/>
                  <label for="" className='searchic'>Search </label>
            
       
        </div>
                  </div>
                   </div>
                  
                       </div>
             
               <div className='col-md-3'>
               <div className='row '>
               <div className='col-md-5 namedash rightdah'>
              <h3> Will Newman </h3>
                   </div>
                   <div className='col-md-2 '>
                  <div className='row imgaligng'>
                   <img src={require("../src/images/Ellipse 1.png")} alt="" /> 
                   </div>
                   </div>
                   <div className='col-md-2 rightdah'>
                   <NotificationsIcon/>
                   </div>
                   <div className='col-md-2 rightdah'>
                   <MoreVertIcon/>
                   </div>
                   
                   </div>
               </div>
           </div>


       </div>
        
        <div className="left-side-menu">
        <div className="col-md-12 left_nav">
          <div className="row left_content">
            <div className="col-md-2  ">
              <img src={require("../src/images/Color.png")} alt="" />
            </div>
            <div className="col-md-10 ">
              <span>Dashboard</span>
            </div>
          </div>
          <div className="row left_content">
            <div className="col-md-2  ">
              <img src={require("../src/images/user.png")} alt="" />
            </div>
            <div className="col-md-10 ">
              <span>User Profile</span>
            </div>
          </div>
          <div className="row left_content">
            <div className="col-md-2  ">
              <img src={require("../src/images/linechartup.png")} alt="" />
            </div>
            <div className="col-md-10 ">
              <span>Activity</span>
            </div>
          </div>
          <div className="row left_content">
            <div className="col-md-2  ">
              <img src={require("../src/images/filefind.png")} alt="" />
            </div>
            <div className="col-md-10 ">
              <span>Report</span>
            </div>
          </div>
          <div className="row left_content">
            <div className="col-md-2  ">
              <img src={require("../src/images/uservoice.png")} alt="" />
            </div>
            <div className="col-md-10 ">
              <span>Suport</span>
            </div>
          </div>
          <div className="row left_content">
            <div className="col-md-2  ">
              <img src={require("../src/images/settingsfuture.png")} alt="" />
            </div>
            <div className="col-md-10 ">
              <span>Settings</span>
            </div>
          </div>
        </div>
        <div className="col-md-10 invite_text">
          <p>Invite your team and start collaborating</p>

          <div className="invite_box">
            <div className="row dash_fry ">
              <div className="col-md-3 ">
                <img src={require("../src/images/logo_4.png")} alt="" />
              </div>
              <div className="col-md-9 invity ">
                <p>Invite to Dashify</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        
      <div className="content-page">
        <div className=' dashifymenu-10'>
           <div className='row'>
               <div className='col-md-1 '>
               Overview 
               </div>
               <div className='col-md-1'>
               Listing 
               </div>
               <div className='col-md-1'>
               Analytics
               </div>
               <div className='col-md-2'>
               Location Manager
               </div>
               <div className='col-md-2'>
               Reviews Generations
               </div>
               <div className='col-md-2'>
               Promotional Posts
               </div>
           </div>
        </div>
      </div>

        </>
    )
}

export default OurTeam
