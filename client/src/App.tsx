import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <>
          <LogoutButton />
          {/* Inloggad */}
        </>
      ) : (
        <>
          <LoginButton />
          <p>Please log in</p> {/* Text som visas när ej inloggad */}
        </>
      )}
    </div>
  );
}

export default App;
