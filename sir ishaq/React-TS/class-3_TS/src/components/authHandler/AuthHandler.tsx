import { useContext } from "react";
import Login from "../login/Login";
import Todo from "../todo/Todo";
import AuthContext from "../../contexts/AuthContext";

function AuthHandler() {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <div>{authCtx.isLoggedIn ? <Todo /> : <Login />}</div>
    </>
  );
}

export default AuthHandler;
