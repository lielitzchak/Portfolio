import About from "../components/About/About.component";
import TestPageComponents from "../components/testPage/testPage.components";
export const ROUTES = [
  { path: "/", element: <TestPageComponents /> },
  { path: "/about", element: <About /> },
  { path: "/my-skills", element: <TestPageComponents /> },
  { path: "/work", element: <TestPageComponents /> },
  { path: "/contact", element: <TestPageComponents /> },
];
