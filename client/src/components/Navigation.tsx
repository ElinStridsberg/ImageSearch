import heartImage from "../images/heart.png";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>

        <NavLink to={"/favorites"}>
        <div className="menu">
        <img src={heartImage} alt="Favorites" className="favoritesImg"/>
        </div>
        </NavLink>
        <NavLink to={"/"}><p>start</p></NavLink>
      
    </nav>
  );
}
