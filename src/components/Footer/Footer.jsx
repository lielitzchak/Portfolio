import React from "react";
import whatsapp from "./Photo/whatsapp.png";
import linkedin from "./Photo/linkedin.png";
import github from "./Photo/github.png";
import gmail from "./Photo/gmail.png";

export default function Footer() {
  return (
    <section className="Footer">
      <a href="https://www.linkedin.com/in/lielitzchak/">
        <img src={linkedin} alt="Liel Itzchak linkedin" />
      </a>
      <a href="mailto:liel.izcha321@gmail.com">
        <img src={gmail} alt="Liel Itzchak Email" />
      </a>
      <a href="https://github.com/lielitzchak">
        <img src={github} alt="Liel Itzchak Github" />
      </a>
      <a href="https://www.linkedin.com/in/lielitzchak/">
        <img src={whatsapp} alt="Liel Itzchak Whatsapp" />
      </a>
      
    </section>
  );
}
