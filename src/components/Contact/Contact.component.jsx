import React from "react";

const Contact = () => {
  return (
    <div className="information Contact">
      <div className="container">
        <h1>Contact Me</h1>
        <h4 style={{ textAlign: "center" }}>
          I’m interested in freelance opportunities – especially ambitious or
          large projects. However, if you have other request or question, don’t
          hesitate to use the form.
        </h4>
        <div className="row input-container">
          <div className="styled-input wide">
            <input type="text" required />
            <label>Name</label>
          </div>
          <div className="styled-input">
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="styled-input" style={{ float: "right" }}>
            <input type="text" required />
            <label>Subject</label>
          </div>
          <div className="styled-input wide">
            <textarea required></textarea>
            <label>Message</label>
          </div>
          <button className="btn-lrg submit-btn">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
