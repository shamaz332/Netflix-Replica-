import React from "react";
import { useState ,useEffect} from "react";
import "./Nav.css";

function Nav() {

const [show,handleShow]=useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return()=>{
        window.removeEventListener("scroll")
    }
  },[]);

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <img
        className="nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/1000px-Netflix_logo.svg.png"
        alt="logo"
      />
      <img
        className="nav-ava"
        src="https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png"
        alt="logo"
      />
    </div>
  );
}

export default Nav;
