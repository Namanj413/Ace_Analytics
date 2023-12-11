// App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route,Link } from 'react-router-dom';
import axios from 'axios';
import Tab1 from './Pages/Dashboard/Tab1';
import Tab2 from './Pages/Dashboard/Tab2';
import Tab3 from './Pages/Dashboard/Tab3';

import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import FourOFour from './Pages/FourOFour/FourOFour';
function App() {

const token = localStorage.getItem("token");
 if(token){
  return (
    <Routes>
         <Route exact path="/" element={<Dashboard />} />
    <Route exact path="/dashboard" element={<Dashboard />} />
    <Route  path="*" element={<FourOFour />} />
    <Route exact path="/tab1" element={<Tab1  />} />
    <Route exact path="/tab2" element={<Tab2 />} />
     
    {/* <Route exact path="/tab2" element={<Tab3 users={users} dishes={dishes}/>} /> */}
     
   
      </Routes>
  );
 }else{

  return (
    <Routes>
       <Route exact path="/login" element={<Login />} />
       <Route exact path="/" element={<Login />} />
       <Route  path="*" element={<FourOFour />} />
   
      </Routes>
  );
 }
 
}

export default App;
