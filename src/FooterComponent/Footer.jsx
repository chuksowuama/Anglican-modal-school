import React from "react";
import "./FooterStyle.css";

const Footer = () => {
  return (
    <>
      <div className="FooterContainer">
        <div className="topfooter">
          <h3 className="Footerlogo">ANGLICAN MODAL</h3>
          <div className="socials">
            <a href="/">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="bottomfooter">
          <ul className="linkRow">
            <h3>Projects</h3>
            <a href="">Changelog</a>
            <a href="">Status</a>
            <a href="">Lincense</a>
            <a href="">All version</a>
          </ul>
          <ul className="linkRow">
            <h3>Community</h3>
            <a href="">GitHub</a>
            <a href="">Issues</a>
            <a href="">Project</a>
            <a href="">Twitter</a>
          </ul>
          <ul className="linkRow">
            <h3>Help</h3>
            <a href="">Support</a>
            <a href="">TroubleShooting</a>
            <a href="">Contact Us</a>
          </ul>
          <ul className="linkRow">
            <h3>Others</h3>
            <a href="">Terms of Service</a>
            <a href="">Privacy Policy</a>
            <a href="">Lincense</a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
