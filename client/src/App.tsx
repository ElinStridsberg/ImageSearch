import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";

function App() {
  const { isAuthenticated, user } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <>
        <div className="LogOut">
        <p className="WelcomeTxt">Welcome {user?.name} </p>
          <LogoutButton />
          {/* Inloggad */}
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
          
       </div> </>
      )}
    </div>
  );
}

export default App;
