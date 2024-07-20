import { useContext } from "react";
import MyButton from "../myButton/MyButton";
import AuthContext from "../../contexts/AuthContext";

function Logout() {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <div>
        <div>
          <MyButton
            type="button"
            onClick={() => authCtx.setAuthentication(false)}
          >
            Logout
          </MyButton>
        </div>
      </div>
    </>
  );
}

export default Logout;
