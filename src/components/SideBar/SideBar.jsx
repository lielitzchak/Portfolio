import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <div className="SideBar">
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
        <Link to="/email">
          <FontAwesomeIcon icon={faEnvelope} />
        </Link>
        <Link to="/">
          <FontAwesomeIcon icon={faAddressBook} />
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
