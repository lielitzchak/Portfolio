// // import { MY_PROJECTS } from "./Project";
// export class Project {
//   name;
//   description;
//   link;
//   photo;
//   id;
//   constructor(name, description, link, photo) {
//     this.name = name;
//     this.description = description;
//     this.link = link;
//     this.photo = photo;
//     this.id = ++Project.id;
//   }
//   static id = 0;
// }

// const MY_PROJECTS = [
//   new Project(
//     "fitness app",
//     "As a bodybuilder myself, I was always looking for an app that could give me tracking to stick to my goals, when I could not find a free app, I decided to build one myself that suited my needs and what was important to me.",
//     "https://did.li/Fvarl",
//     "https://did.li/qj2YH"
//   ),
//   new Project(
//     "spotify",
//     "During the course, I made a Spotify system, with an original API",
//     "https://did.li/Fvarl",
//     "https://did.li/YFVfT"
//   ),
//   new Project(
//     "hotel project",
//     "Hotel reservation site in Israel, the site is built from HTML, SCSS. The site is responsive.",
//     "https://did.li/hZNw5",
//     "https://did.li/1sINf"
//   ),
//   new Project(
//     "DJ Chekol",
//     "The first project I submitted, happened after one month in a development course. Done with HTML, CSS building a landing page for my boiler, and during the course I improved it with the help of scss",
//     "https://did.li/1sINf",
//     "https://did.li/1sINf"
//   ),
//   new Project(
//     "Clothing-Store-project",
//     "First project I submitted with HTML, CSS, JAVASCRIPT.",
//     "https://did.li/trrCN",
//     "https://did.li/1sINf"
//   ),
//   new Project(
//     "calculator",
//     "Nice project of a calculator.",
//     "https://did.li/KCTfT",
//     "https://did.li/fRnTY"
//   ),
//   new Project(
//     "movie",
//     "my first project with API ' that i didn't build",
//     "https://did.li/Qkgaa",
//     "https://did.li/w3Pw5"
//   ),
// ];

// export default function Projects() {
//   return (
//     <article className="Projects">
//       {MY_PROJECTS.map((project, i) => {
//         return (
//           <section className="DetailsProject" key={i}>
//             <h1>{project.name}</h1>
//             <img src={project.photo} alt={project.name} />
//             <p>{project.description}</p>
//             <a href={project.link}>link to Github</a>
//           </section>
//         );
//       })}
//     </article>
//   );
// }
