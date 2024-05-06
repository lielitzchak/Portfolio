import { MY_PROJECTS } from "../Projects/Projects";
import { Link } from "react-router-dom";
const Work = () => {
  const ShowProjectOnScreen = (project) => {
    if (project.IsProjectFinished)
      return (
        <div className="project" key={project.Id}>
          <div className="container">
            <div className="singleProject">
              <Link to={`${project.Link}`}>
                <div className="text">
                  <h1>{project.Name}</h1>
                </div>
                <img src={project.Photo} alt={project.Name} />
              </Link>
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
