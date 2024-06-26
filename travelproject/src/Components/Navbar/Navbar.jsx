import React from 'react'
import "./Navbar.scss"
import { BiLogoMediumOld } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="navBar">
      <div className="logoDiv">
        <BiLogoMediumOld className="icon"/>
        <span>OU-Trips</span>
      </div>
      <div className="menu">
        <ul>
          <li className="navList">
            Destination
          </li>
          <li className="navList">
            About Us
          </li>
          <li className="navList">
            Testimonial
          </li>
          <li className="navList">
            Gallery
          </li>
        </ul>
        <AiFillCloseCircle className="icon closeIcon" />
      </div>
      <button className="signUpBtn btn">
        Sign Up
      </button>
      <PiDotsNineBold className="icon menuIcon" />
    </div>
  )
}

export default Navbar
