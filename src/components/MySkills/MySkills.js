import { Link } from "react-router-dom";
const mySkills = () => {
  return (
    <div className="mySkills">
      <h1>Skills And Experience</h1>
      <p>
        In my portfolio, you'll find a collection of
        <Link className="links" to={"/work"}>
          {" "}
          projects{" "}
        </Link>
        that showcase my skills and experience as a full stack developer, as
        well as insights into my approach to problem-solving and my passion for
        building innovative solutions. I'm excited to connect with like-minded
        individuals and organizations who share my enthusiasm for creating
        exceptional digital experiences.
      </p>
      <p>More about my experience and work you'll find on Skill and about.</p>
      <p>This is where a graph of front and back end knowledge comes in </p>
      (כאן נכנס גרף של ידע פרונט ובק אנד)
    </div>
  );
};
export default mySkills;
