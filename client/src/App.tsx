import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import searchImg from "../src/images/search.png";

function App() {
  const { isAuthenticated, user } = useAuth0();

  return (
    <div>
      <div className="headline">
      <h1>SEARCH</h1>   
      <img 
        src={searchImg} 
        alt="search" 
        className="searchImg"/>
      </div>

      {isAuthenticated ? (
        <>
          <div className="LogOut">
            <p className="WelcomeTxt">Welcome {user?.name} </p>
           
            <LogoutButton />
            {/* Länk till favoriter */}
            {/* <Link to="/favorites">My Favorites</Link> */}
          </div> 
          <div className="Search">
            <input type="text" placeholder="Type here.."/>
            <button className="searchBtn">Search</button>
          </div>
        </>
      ) : (
        <>
          <div className="Login">
            <p className="loginTxt">Please log in..</p> {/* Text som visas när ej inloggad */}
            <LoginButton />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
