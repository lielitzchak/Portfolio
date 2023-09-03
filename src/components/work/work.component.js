import { MY_PROJECTS } from "../Projects/Project";
const Work = () => {
  return (
    <div className="information work">
      {MY_PROJECTS.map(function (project) {
        if (project.Done)
          return (
            <div className="projects" key={project.Id}>
              <img src={project.Photo} alt={project.Name} />
              <a href={project.Link}>
                <div className="text">
                  <h1>{project.Name}</h1>
                </div>
              </a>
            </div>
          );
      })}
    </div>
  );
};
export default Work;
