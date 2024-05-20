import { MY_PROJECTS } from "../Projects/Projects";
import { Link } from "react-router-dom";
const Work = () => {
  const cutLink = (project) => {
    // window.location.href = project.Link;
    // console.log();
  };
  const ShowProjectOnScreen = (project) => {
    cutLink();
    if (project.IsProjectFinished)
      return (
        <div className="project" key={project.Id}>
          <div className="container">
            <div className="singleProject">
              <a href={project.Link}>
                <div className="text">
                  <h1>{project.Name}</h1>
                </div>
                <img src={project.Photo} alt={project.Name} />
              </a>
            </div>
          </div>
        </div>
      );
  };

  return (
    <div className="work">
      {MY_PROJECTS.map((project) => ShowProjectOnScreen(project))}
    </div>
  );
};
export default Work;
