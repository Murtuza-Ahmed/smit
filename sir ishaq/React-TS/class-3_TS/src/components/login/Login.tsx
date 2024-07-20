import { useContext } from "react";
import MyButton from "../myButton/MyButton";
import AuthContext from "../../contexts/AuthContext";

function Login() {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <div>
        <div>Please Login...</div>
        <div>
          <MyButton
            type="button"
            onClick={() => authCtx.setAuthentication(true)}
          >
            Login
          </MyButton>
        </div>
      </div>
    </>
  );
}

export default Login;
