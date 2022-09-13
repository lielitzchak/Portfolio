import About from "../components/About/About.component";
import SkillsAndExperience from "../components/Skills and Experience/SkillsAndExperience";
import Work from "../components/work/work.component";
import Contact from "../components/Contact/Contact.component";
import Home from "../components/Home/Home.component";
export const ROUTES = [
  { path: "/", element: < Home/> },
  { path: "/about", element: <About /> },
  { path: "/my-skills", element: <SkillsAndExperience /> },
  { path: "/work", element: <Work /> },
  { path: "/contact", element: <Contact /> },
];
