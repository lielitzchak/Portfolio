import whatsapp from "./Photos/whatsapp.png";
import linkedin from "./Photos/linkedin.png";
import github from "./Photos/github.png";
import gmail from "./Photos/gmail.png";
import "./Footer.css";

let FooterComponent = () => {
  return (
    <section className="Footer">
      <a href="https://wa.me/<0547080093>/">
        <img src={whatsapp} alt="Liel Itzchak Whatsapp" />
      </a>
      <a href="https://www.linkedin.com/in/lielitzchak/">
        <img src={linkedin} alt="Liel Itzchak linkedin" />
      </a>
      <a href="mailto:liel.izcha321@gmail.com">
        <img src={gmail} alt="Liel Itzchak Email" />
      </a>
      <a href="https://github.com/lielitzchak">
        <img src={github} alt="Liel Itzchak Github" />
      </a>
    </section>
  );
};
export default FooterComponent;
