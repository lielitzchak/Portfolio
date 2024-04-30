import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="tags">
        <span>&lt;html&gt;</span>
        <span>&lt;body&gt;</span>
        <span>&lt;h1&gt;</span>
      </div>

      <h1 className="myName">
        Hi, I'm Liel Itzchak and I'm a full stack developer!
      </h1>

      <div className="tags">
        <span>&lt;/h1&gt;</span>
        <span>&lt;p&gt;</span>
      </div>

      <p className="myName">frontend, backend and full stack</p>
      <div className="tags">
        <span> &lt;/p&gt;</span>
      </div>
      <div class="contactHome">
        <div class="container">
          <Link
            to="https://twitter.com/masuwa1018"
            class="btn effect04"
            data-sm-link-text="CLICK"
            target="_blank"
          >
            <span>CLICK HERE</span>
          </Link>
        </div>
      </div>
      <div className="tags">
        <span> &lt;/body&gt;</span>
        <span>&lt;/html&gt;</span>
      </div>
    </div>
  );
}
