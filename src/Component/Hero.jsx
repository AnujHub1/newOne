import React from "react";
import "./Hero.css";
import intro from "../assets/intro-bg.jpg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import Header from "./Header";
const icons = [
  <FaFacebookF />,
  <FaBehance />,
  <FaTwitter />,
  <FaDribbble />,
  <RiInstagramLine />,
];

export default function Hero() {
  return (
    <div className="hero">
      <Header />
      <div className="intro-overlay"></div>
      <div className="centerContain">
        <p className="p-hello">Hello, World.</p>
        <p className="p-Name">I'm Juan Dela Cruz.</p>
        <p className="p-role">
          <span>|</span> Front-end Developer <span>|</span> UI/UX Designer
          <span>|</span>
        </p>
        <a className="aboutbtn">
          More About Me{" "}
          <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown>
        </a>
      </div>
      <ul className="social-link">
        {icons.map((icon, index) => (
          <li key={index} className="social-icon">
            <a href="#">{icon}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
