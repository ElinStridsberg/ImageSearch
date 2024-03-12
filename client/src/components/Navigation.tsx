import heartImage from "../images/heart.png";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      {/* Länk runt hjärtbilden */}
        <p>Favorites</p>   
        <NavLink to={"/favorites"}>
        <div className="menu">
       
        <img src={heartImage} alt="Favorites" className="favoritesImg"/>
        </div>
      </NavLink>
    </nav>
  );
}
