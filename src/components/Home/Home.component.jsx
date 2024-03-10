import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="tags">
        <span>&lt;html&gt;</span>
        <span>&lt;body&gt;</span>
        <span>&lt;h1&gt;</span>
      </div>

      <h1>Hi, Im Liel full stack development!</h1>

      <div className="tags">
        <span>&lt;/h1&gt;</span>
        <span>&lt;p&gt;</span>
      </div>

      <p>frontend, backend and full stack</p>
      <div className="tags">
        <span> &lt;/p&gt;</span>
      </div>
      <button className="contactHome">
        <Link to="/contact"> contact me!</Link>
      </button>
      <div className="tags">
        <span> &lt;/body&gt;</span>
        <span>&lt;/html&gt;</span>
      </div>
    </div>
  );
}
