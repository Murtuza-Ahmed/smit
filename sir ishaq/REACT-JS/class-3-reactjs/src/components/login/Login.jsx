// import PropTypes from "prop-types";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

// Login.propTypes = {
//   onLogin: PropTypes.func.isRequired,
// };

function Login() {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <div>Login Page</div>
      <button onClick={authCtx.onLogin}>Login</button>
    </>
  );
}

export default Login;
