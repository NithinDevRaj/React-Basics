import React from "react";
import "./Header.css";


function Header(props){
  const {onMenuSelect}=props
  // console.log("thisis is si sis",children)
    return (
        <div className="app-header">
        <span className="header-title">Nithin Raj</span>
        <span onClick={()=>{
          onMenuSelect("home")
        }}>Home</span>
        <span onClick={()=>{
          onMenuSelect("usage")
        }}>Usage</span>
        <span onClick={()=>{
          onMenuSelect("settings")
        }}>Settings</span>
        <span onClick={()=>{
          onMenuSelect("logout")
        }}>Logout</span>
      </div>
    )
}
export default Header;