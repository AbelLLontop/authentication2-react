import AccountPage from "@/pages/AccountPage";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import NotFoundPage from "@/pages/NotFoundPage";
import ProjectPage from "@/pages/ProjectPage";
import ProjectsPage from "@/pages/ProjectsPage";
import RegisterPage from "@/pages/RegisterPage";
import UsersPage from "@/pages/UsersPage";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "@/pages/layouts/AppLayout";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import { roles } from "@/models/roles";
import routes from "./routes";

export default createBrowserRouter([
  {
    path: routes.home,
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: routes.login,
        element: (
          <PublicRouter>
            <LoginPage />
          </PublicRouter>
        ),
      },
      {
        path: routes.register,
        element: (
          <PublicRouter>
            <RegisterPage />
          </PublicRouter>
        ),
      },
      {
        path: routes.account,
        element: (
          <PrivateRouter>
            <AccountPage />
          </PrivateRouter>
        ),
      },
      {
        path: routes.projects,
        element: (
          <PrivateRouter>
            <ProjectsPage />
          </PrivateRouter>
        ),
      },
      {
        path: routes.project(),
        element: (
          <PrivateRouter>
            <ProjectPage />
          </PrivateRouter>
        ),
      },
      {
        path:routes.admin.user,
        element: (
          <PrivateRouter hasRole={roles.admin}>
            <UsersPage />
          </PrivateRouter>
        ),
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
