import React from 'react'


function Profile() {
    return (
        <>
        <div className='left-side-menu'></div>
        <div className='content-page'   >
       

        <div className="container mt-5 " id='overview-10'>
            <div className='setting-10'>
                <h3>Profile Setting</h3>
            </div>
           <div className='row mt-4'>
               <div className='col-md-3 setting-11'>
                   <div className='row text-center '>
                       <div className='col-md-12 account-10'>
                      <h3> Account</h3>
                       </div>
                       <div className='col-md-12 account-11'>
                       <h3>Notification Setting</h3>
                       </div>
                       <div className='col-md-12 account-11'>
                      <h3> Biling</h3>
                       </div>
                       <div className='col-md-12 account-11'>
                      <h3> Integrations</h3>
                       </div>
                       <div className='col-md-12 account-11'>
                       <h3>Agency Setting</h3> 
                       </div>
                   </div>
                  
                   </div>
                   <div className='col-md-8 ml-3 '>
                      <div className='row'>
                          <div className='col-md-3 setting-12 pt-3'>
                           <h3>My Profile</h3>
                          </div>
                          <div className='col-md-3 setting-13 pt-3'>
                          <h3>Company Profile</h3>
                          </div>
                          </div>
                          <div className='row setting-14'>
                              <div className='col-md-12 '>
                                  <div className='row'>

                            
                              <div className='col-md-4 '>
                              image cropper will display soon
                              </div>
                              <div className='col-md-8 '>
                              <div class="form-group row mt-5">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email:</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="Email"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password:</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" placeholder="Password"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Role:</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" placeholder="Admin"/>
    </div>
  </div>
   <div className='pb-3 pt-3'> 
  <button type="submit" class="btn btn-profile-10 my-1">Save</button>
  </div>
                              </div>
                          </div>
                      
                   </div>
  
                   </div>
                   </div>
                   

               
               
               </div>









    </div>
     </div>
           
</>
    )
}

export default Profile
