import React from 'react';
import Profile from './Profile';
import Overview from './Overview';
import Analytic from './Analytic';
import Listing from './Listing';
import Promopost from './Promopost';
import './App.css';
import AdditionalPromotional from './AdditionalPromotional';




function App() {
  return (
   <>
  <Overview/>
  <Profile/>
  <Analytic/>
  <Listing/>
  <AdditionalPromotional/>
  <Promopost/>
   </>
  );
}

export default App;
