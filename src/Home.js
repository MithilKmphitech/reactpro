import React from "react";
import { Link } from "react-router-dom";

const Home=()=>{
  return(
    <>
    <div className="menu_box"><Link to='/crud'>Crud</Link></div>
    <div className="menu_box"><Link to='/ecommerce'>Ecommerce</Link></div>
    <div className="menu_box"><Link to='/dashboard'>Dashboard</Link></div>
    <div className="menu_box"><Link to='/login'>Login</Link></div>
    <div className="menu_box"><Link to='/register'>Register</Link></div>
    <div className="menu_box"><Link to='/input'>Input Upload</Link></div>
    <div className="menu_box"><Link to='/onchange'>Onchange</Link></div>
    </>
  )
}
export default Home;