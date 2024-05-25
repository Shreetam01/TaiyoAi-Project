import React from 'react'
import { Link } from 'react-router-dom';
import { GiChart } from "react-icons/gi";
import { PiUsersLight } from "react-icons/pi";
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="logo">
            {/* <img src={img1} alt="" /> */}
        </div>
        <div className="sidebarLinks">
            <Link to={"/"} className="sidebar-link active">
                <PiUsersLight />
                <div className="sidebar-link-text">Contact</div>
            </Link>
            <Link to={"/Charts-and-Maps"} className="sidebar-link">
                <GiChart />
                <div className="sidebar-link-text">Charts and Maps</div>
            </Link>
        </div>
    </div>
  )
}

export default Sidebar