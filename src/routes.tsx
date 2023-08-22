import { createBrowserRouter } from "react-router-dom";
import Feed from "./pages/feed";
import Account from "./pages/account";
import Billing from "./pages/billing";
// import Home from "./pages/home";
// import Error from "./pages/error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Feed />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/billing",
    element: <Billing />,
  },
  // {
  //   path: "/bookmarks",
  //   element: <Bookmarks />,
  // },
]);
