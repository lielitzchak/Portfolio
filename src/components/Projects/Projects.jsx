import { MY_PROJECTS } from "./Project";
import "./Project.css";
export default function Projects() {
  return (
    <article className="Projects">
      {MY_PROJECTS.map((project, i) => {
        return (
          <section className="DetailsProject" key={i}>
            <h1>{project.name}</h1>
            <img src={project.photo} alt={project.name} />
            <p>{project.description}</p>
            <a href={project.link}>link to Github</a>
          </section>
        );
      })}
    </article>
  );
}
