import React, { useEffect, useState } from "react";
import "./Navigation.css";
import logo from "../../assets/Blue_and_White_Vintage_School_Logo-removebg-preview.png";
import { sideMenu } from "../../assets/dataAssets";
import { useRef } from "react";
import Useoutsideremoveclick from "../../HooksCOMPONENTS/Useoutsideremoveclick";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [dropNavList, setDropnavList] = useState(false);
  const [navIcon, setnavIcon] = useState(false);
  const removethedropnavlist = useRef(null);
  const removethenavslide = useRef(null);
  const topNav=useRef(null)
  const mobile = useMediaQuery({ query: "(max-width: 600px)" });
  const laptop = useMediaQuery({ query: "(min-width: 601px)" });

  Useoutsideremoveclick(removethedropnavlist, () => {
    setDropnavList(false);
  });

  Useoutsideremoveclick(removethenavslide, () => {
    if (mobile && navIcon) {
      setnavIcon(false);
    }
  });

  function toggleicon() {
    setnavIcon(true);
  }

  function handleOpendropItem(navId) {
    if (laptop) {
      setDropnavList((prev) => ({ [navId]: !prev[navId] }));
    }
  }
  function handleopendroponclick(navId) {
    if (mobile) {
      setDropnavList((prev) => ({ [navId]: !prev[navId] }));
    }
  }

 useEffect(()=>{
  function removethetop(){
    if(laptop && window.scrollY >0){
        topNav.current.classList.add("topNav")
        removethedropnavlist.current.id="myid"
    }
    else if(mobile && window.scrollY===0){
      topNav.current.classList.remove("topNav")
    }
    else{
      topNav.current.classList.remove("topNav")
      removethedropnavlist.current.id=""
    }
   }
   window.addEventListener("scroll", removethetop) 
   return()=>{
    window.removeEventListener("scroll", removethetop)
   }
 },[laptop,mobile])

  return (
    <nav ref={removethedropnavlist}>
      <div className="upper-nav" ref={topNav}>
        <div className="logo">
          <img src={logo} alt="" />
          <h1>AnglicanModal</h1>
        </div>
      </div>
      <hr />
      <span className="navcon" onClick={toggleicon}>
        <i class="fa-solid fa-bars"></i>
      </span>
      <div className="bottom-nav">
      <ul
        className={`navmenu ${navIcon && "navmenuActive"}`}
        ref={removethenavslide}
      >
        {sideMenu.map((navitem, index) => (
          <li key={index}>
            {navitem.children ? (
              <span
                onMouseOver={() => handleOpendropItem(navitem.id)}
                onClick={() => handleopendroponclick(navitem.id)}
              >
                 <Link to={ mobile?null:navitem.to} className="Link">{navitem.label}</Link>
                {dropNavList[navitem.id] ? (
                  <span style={{ fontSize: "10px" }}> &darr;</span>
                ) : null}
              </span>
            ) : (
              <Link to={navitem.to} className="Link"><span>{navitem.label}</span></Link>
            )}

            {navitem && dropNavList[navitem.id] ? (
              <ul className="dropNav" ref={removethedropnavlist}>
                {navitem.children.map((child, index) => (
                 <Link to={child.to} className="dropLink"><li key={index}>{child.label} </li></Link>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
        <div className="socials">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-x-twitter"></i>
          <i class="fa-brands fa-linkedin-in"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
