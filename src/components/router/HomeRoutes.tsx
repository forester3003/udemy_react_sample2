import { Home } from "../pages/Home";
import { Setting } from "../pages/Setting";
import { UserManagement } from "../pages/UserManagement";
import { Page404 } from "../pages/Page404";

export const homeRoutes = [
    {
        path: "/",
        exact: true,
        children: <Home />
    },
    {
        path: "/user_management",
        exact: false,
        children: <UserManagement />
    },
    {
        path: "/setting",
        exact: false,
        children: <Setting />
    },
    {
        path: "*",
        exact: false,
        children: <Page404 />
    },
];