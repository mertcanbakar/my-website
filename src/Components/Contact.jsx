import React from "react";
//ICONS
import { AiOutlineMail, AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import {FaLinkedinIn} from 'react-icons/fa'
import {MdLocationOn} from 'react-icons/md'

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <h1 >Contact</h1>
      <div className="header-cont">
        <h4>Let's chat.</h4>
        <h4>Tell me about your project.</h4>
      </div>
      <div className="contact-div">
        <div className="contact-info">
        <p className="location"><MdLocationOn size={'20px'}/> Istanbul/Turkey</p>
        <p className="mail">
          <AiOutlineMail size={'20px'}/> mertcanbakar@outlook.com
        </p>
        </div>
        <div className="social">
        <a href="#"><FaLinkedinIn className="social-icons"/> in.com/mertcanbakar</a>
        <a href="#"><AiFillGithub className="social-icons"/> github.com/mertcanbakar</a>
        <a href="#"><AiOutlineTwitter className="social-icons"/> twitter.com/merttcanbakar</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
