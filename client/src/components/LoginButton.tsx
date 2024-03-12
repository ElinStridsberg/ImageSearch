import { useAuth0 } from "@auth0/auth0-react";
import "../styles/_loginBtn.scss"

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log in please</button>;
};

export default LoginButton;