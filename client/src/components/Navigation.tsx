import heartImage from "../images/heart.png";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      {/* Länk runt hjärtbilden */}
      <NavLink to={"/favorites"}>
        <div className="menu">
        <p>Favorites</p>
        <img src={heartImage} alt="Favorites" className="favoritesImg"/>
        </div>
      </NavLink>
    </nav>
  );
}
