import { createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddStaff from "./pages/AddStaff";
import Settings from "./pages/Settings";
import AddUserRole from "./pages/AddUserRole";
import AddBranch from "./pages/AddBranch";
import CreateCustomer from "./pages/CreateCustomer";
import Customers from "./pages/Customers";
import CustomerProfile from "./pages/CustomerProfile";
import Accounts from "./pages/Accounts";
import AccountsById from "./pages/AccountsById";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/add_staff",
    element: <AddStaff />,
  },
  {
    path: "/create_customer",
    element: <CreateCustomer />,
  },

  {
    path: "/customers",
    element: <Customers />,
  },

  {
    path: "/customer/:userId",
    element: <CustomerProfile />,
  },

  {
    path: "/accounts/:userId",
    element: <AccountsById />,
  },

  {
    path: "/accounts",
    element: <Accounts />,
  },

  {
    path: "/settings",
    element: <Settings />,

    children: [
      { index: true, element: <AddUserRole /> },
      {
        path: "create_user_role",
        element: <AddUserRole />,
      },
      {
        path: "create_branch",
        element: <AddBranch />,
      },
    ],
  },
]);

export default routes;
