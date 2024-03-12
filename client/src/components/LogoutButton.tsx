
import { useAuth0 } from "@auth0/auth0-react";
import heartImage from "../images/heart.png";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <>
  
        <img 
          src={heartImage} 
          alt="like" 
          className="heartImg"
          
        />
 
      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        Log Out
      </button>
    </>
  );
};

export default LogoutButton;
