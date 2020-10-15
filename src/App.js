import React from 'react';

import './App.css';

import Address from "./Component/Profile/Address";
import FullName from './Component/Profile/FullName';
import ProfilPhoto from './Component/Profile/ProfilPhoto';


function App() {
  return (
    <div style={{border:"2px solid black",textAlign:"center",backgroundColor:"lightgrey"}}>
     <FullName/>
     <ProfilPhoto/>
     <Address/>
    </div>
  );
};

export default App;
