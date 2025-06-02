import React from "react";
import "./ContactForm.css";
import ContactUs from "../../assets/contact-us-1.jpg";
import { contactform } from "../../assets/dataAssets";

const ContactForm = () => {
  console.log("hello");
  return (
    <>
     <div className="Contact">
      <div>
      <h1 className="Title">Feel Free to drop us a Message</h1>
      <h4 style={{color:"grey"}}>Please contact us using the information below. For additional information on our business consulting services, please visit the appropriate page on our site.</h4>
      </div>
     <div className="ContactForm">
        <div className="FormContainer">
        <form action="" className="Mform">
            <input type="text" name="" id="" placeholder="Name" required /> <br />
            <input type="email" name="" id="" placeholder="email" required /> <br />
            <input type="text" name="" id="" placeholder="subject" /> <br />
            <textarea name="" id="" className="classtextarea"></textarea>
             <input type="submit" />
          </form>
        </div>
        <div className="formImage">
          <img src={ContactUs} alt="" />
        </div>
      </div>
      <div className="ConatctCards-Container">
        {
          contactform.map((item)=>(
            <div className="Contact-Card">
              <i className={item.icon}></i>
              <h3>{item.info}</h3>
            </div>
          ))
        }
      </div>
     </div>
    </>
  );
};

export default ContactForm;
