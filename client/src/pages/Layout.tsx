import "./../styles/main.scss";

import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Navigation";

export const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      
        <Outlet />
      
     
    </>
  );
};
