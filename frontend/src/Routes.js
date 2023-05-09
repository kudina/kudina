import { createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default routes;
