import { MY_PROJECTS } from "./Project";
export default function Projects() {
  return (
    <article className="Projects">
      {MY_PROJECTS.map((project, i) => {
        return (
          <section key={i}>
            <img src={project.photo} alt={project.name} />
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <a href={project.link}>link to Github</a>
          </section>
        );
      })}
    </article>
  );
}
