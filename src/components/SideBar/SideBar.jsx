import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sideBar">
      <Link to="/">Home</Link>
      <nav className="navBar">
        <Link to="about">About</Link>
        <Link to="my-skills">my skills</Link>
        <Link to="work">work</Link>
        <Link to="contact">contact</Link>
        {/* <Link to="blog">blog</Link> */}
      </nav>
      <div className="social">
        <Link to="/email">
          <img src="https://did.li/ZpfgT" alt="email" />
        </Link>
        <Link to="/">
          <img src="https://did.li/294Nf" alt="linkedin" />
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
