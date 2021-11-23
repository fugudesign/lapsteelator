import React from 'react';
import './NavBarHomePage.css';

const uri = process.env.REACT_APP_URI;

const NavBarHomePage = (props) => {
  console.log(uri);
  return (
    <div className="mb-5" style={{backgroundColor:'#343a40'}}>
      <img src={uri +"/images/lapsteelManV4.png"} alt="logo lapsteelator" style={{ width: "100px" }} />
    </div>
  );
}

export default NavBarHomePage;
