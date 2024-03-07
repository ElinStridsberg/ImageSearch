import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { UserSite } from "./pages/UserSite";


export const router = createBrowserRouter([
    {
          path: "/",
          element: <Home />,
          index: true
        },
        {
          path: "/usersite",
          element: <UserSite />,
        }
      ])
