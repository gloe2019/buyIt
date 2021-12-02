import About from "../components/About";
import Home from "../components/Home";
import IRoute from "../interfaces/route";

//All page routes should be defined here.

const routes: IRoute[] = [
  {
    path: "/",
    name: "Home Page",
    component: Home,
    exact: true,
  },
  {
    path: "/about",
    name: "About Page",
    component: About,
    exact: true,
  },
];

export default routes;
