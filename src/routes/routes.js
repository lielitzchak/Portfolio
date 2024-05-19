import About from "../components/About/About.component";
import MySkills from "../components/MySkills/MySkills";
import Work from "../components/work/work.component";
import Contact from "../components/Contact/Contact.component";
import Home from "../components/Home/Home.component";
export const ROUTES = [
  { path: "/", element: <Home /> }, //done scss
  { path: "/about", element: <About /> }, //done scss
  { path: "/my-skills", element: <MySkills /> }, // done scss
  { path: "/work", element: <Work /> }, // done scss
  { path: "/contact", element: <Contact /> }, // done scss
];
