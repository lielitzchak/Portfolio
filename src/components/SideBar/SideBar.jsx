import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sideBar">
      <Link to="/">
        <img src="./logo_size.jpg" alt="logo" />
      </Link>
      <nav className="navBar">
        <Link to="about">About</Link>
        <Link to="my-skills">my skills</Link>
        <Link to="work">work</Link>
        <Link to="contact">contact</Link>
        {/* <Link to="blog">blog</Link> */}
      </nav>
      <div className="social">
        <Link to="/email">a
          {/* <FontAwesomeIcon icon={faEnvelope} /> */}
        </Link>
        <Link to="/">b
          {/* <FontAwesomeIcon icon={faAddressBook} /> */}
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
