// import PropTypes from "prop-types";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";

// Login.propTypes = {
//   onLogin: PropTypes.func.isRequired,
// };

function Login() {
  const authCtx = useContext(AuthContext);

  const [data, setData] = useState("");
  const onTextHandler = (event) => {
    setData(event.target.value);
  };
  return (
    <>
      <div>Login Page</div>
      <input type="text" onChange={onTextHandler} value={data} />
      <button onClick={authCtx.onLogin}>Login</button>
    </>
  );
}

export default Login;
