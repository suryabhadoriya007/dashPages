import React from 'react'

function OurTeam() {
    return (
        <>

       
       <div className='container-fluid topdash'>
           <div className='row pt-1'>
               <div className='col-md-3'>
               <img src={require("../src/images/LOGO 4.png")} alt="" /> 
               </div>
               <div className='col-md-6 '>
                   <div className='row pt-3'>
                  <div className='col-md-6 cardspace'>
                      
                  </div>
                   </div>
                  
                       </div>
             
               <div className='col-md-3'>
               <div className='row pt-3'>
               <div className='col-md-5'>
               Will Newman
                   </div>
                   <div className='col-md-2'>
                  gfh
                   </div>
                   <div className='col-md-2'>
                   ggg
                   </div>
                   <div className='col-md-2'>
                   gg
                   </div>
                   
                   </div>
               </div>
           </div>


       </div>
        <div className="left-side-menu"></div>
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
