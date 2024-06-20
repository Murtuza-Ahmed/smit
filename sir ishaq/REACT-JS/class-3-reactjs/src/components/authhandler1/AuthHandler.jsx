import { useContext } from "react";
import PropTypes from "prop-types";
import AuthContext from "../../context/AuthContext";
import Home from "../home/Home";
import Login from "../login/Login";

AuthHandler.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};

function AuthHandler({ onLogin, onLogout }) {
  const authCtx = useContext(AuthContext);
  return (
    <>
      {authCtx.isLoggedIn ? (
        <Home onLogout={onLogout} />
      ) : (
        <Login onLogin={onLogin} />
      )}
    </>
  );
}

export default AuthHandler;
