import { MY_PROJECTS } from "../components/Projects/Project";
import {} from "../components/Projects/Projects";
import TestPageComponents from "../components/testPage/testPage.components";
export const ROUTES = [
  { path: "/", element: <TestPageComponents /> },
  { path: "/test", element: <TestPageComponents /> },
//   {
//     path: "/test",
//     element: <MY_PROJECTS />,
//   },
  //   {
  //     path: "/Projects",
  //     element: <Projects />,
  //   },
];
