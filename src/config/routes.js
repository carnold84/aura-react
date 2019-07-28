import HomeView from "../views/Home";
import LoginView from "../views/Login";
import ProjectsView from "../views/Projects";

export default [
  {
    component: LoginView,
    id: "login",
    label: "Login",
    path: "/",
    showInMenu: false
  },
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
