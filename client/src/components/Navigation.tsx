import { useAuth0 } from "@auth0/auth0-react";
import heartImage from "../images/heart.png";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return null;
  }

  return (
   <div className="menu">  <nav>
      <NavLink to={"/favorites"}>
       
          <img src={heartImage} alt="Favorites" className="favoritesImg" />
       
      </NavLink>
      <NavLink to={"/"}><p>Start</p></NavLink>
 </nav>    
 </div>
  );
};
