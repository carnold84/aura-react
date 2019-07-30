import HomeView from "../views/Home";
import ProjectsView from "../views/Projects";

export default [
  {
    component: HomeView,
    id: "home",
    label: "Home",
    path: "/home",
    showInMenu: true
  },
  {
    component: ProjectsView,
    id: "projects",
    label: "Projects",
    path: "/projects",
    showInMenu: true
  }
];
