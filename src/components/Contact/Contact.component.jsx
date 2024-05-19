import { useState } from "react";

const Contact = () => {
  let [userData, setUserData] = useState({
    userName: "",
    email: "",
    subject: "",
    userMessage: "",
  });
  const validationData = (event) => {
    if (userData.email.includes("@")) {
      console.log(userData);
    } else {
      alert("you have some problem with your mail, please check again");
    }
  };
  const savaUserData = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    console.log(userData);
  };
  return (
    <form
      data-email="liel.izcha321@gmail.com"
      type="text/javascript"
      src="form-submission-handler.js"
      action="https://script.google.com/macros/s/AKfycbw4Q-GFzEDZPEg81ca1o39oz_tqpV12x8cmdjAj45vnWt1xu17lsa8r5cxK7t5W-eVv0g/exec"
      className="Contact gform"
      method="POST"
    >
      <div className="container">
        <h1>Contact Me</h1>
        <h4 style={{ textAlign: "center" }}>
          I’m interested in freelance opportunities – especially ambitious or
          large projects. However, if you have other request or question, don’t
          hesitate to use the form.
        </h4>
        <div className="row input-container">
          <div className="styled-input wide">
            <input
              onChange={(event) => {
                savaUserData(event);
              }}
              name="userName"
              type="text"
              required
            />
            <label>Name</label>
          </div>
          <div className="styled-input">
            <input
              onChange={(event) => {
                savaUserData(event);
              }}
              name="email"
              type="email"
              required
            />
            <label>Email</label>
          </div>
          <div className="styled-input">
            <input
              onChange={(event) => {
                savaUserData(event);
              }}
              name="subject"
              type="text"
              required
            />
            <label>Subject</label>
          </div>
          <div className="styled-input wide">
            <textarea
              required
              onChange={(event) => {
                savaUserData(event);
              }}
              name="userMessage"
            ></textarea>
            <label>Message</label>
          </div>
          <button
            className="btn-lrg submit-btn"
            onClick={(event) => validationData(event)}
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default Contact;
