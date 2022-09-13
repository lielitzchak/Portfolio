import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="information Home">
      <span>&lt;html&gt;</span>
      <span>&lt;body&gt;</span>
      <span> &lt;h1&gt;</span>
      <h1> Hi, Im Liel full stack development!</h1>
      <span> &lt;/h1&gt;</span>
      <span> &lt;p&gt;</span>
      <p>frontend, backend and full stack</p>
      <span> &lt;/p&gt;</span>
      <button>
        <Link to="/contact"> contact me!</Link>
      </button>
      <span> &lt;/body&gt;</span>
      <span>&lt;/html&gt;</span>
    </div>
  );
}
