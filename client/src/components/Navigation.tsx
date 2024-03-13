import { useAuth0 } from "@auth0/auth0-react";
import heartImage from "../images/heart.png";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const { isAuthenticated } = useAuth0();

  // Om användaren inte är inloggad visas inte navigeringen
  if (!isAuthenticated) {
    return null;
  }

  // Om användaren är inloggad visas navigeringen
  return (
    <nav>
      <NavLink to={"/favorites"}>
        <div className="menu">
          <img src={heartImage} alt="Favorites" className="favoritesImg" />
        </div>
      </NavLink>
      <NavLink to={"/"}><p>Start</p></NavLink>
    </nav>
  );
};
