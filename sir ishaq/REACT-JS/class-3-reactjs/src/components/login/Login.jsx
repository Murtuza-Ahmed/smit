// import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";

// Login.propTypes = {
//   onLogin: PropTypes.func.isRequired,
// };

function Login() {
  const [data, setData] = useState("");
  const [data1, setData1] = useState("");
  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    console.log("useeffect");
    // setIsValid(data.length >= 6);
    const timeOut = setTimeout(() => {
      console.log("useeffect => settimeout");
      setIsValid(data.length >= 6);
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [data]);
  const onTextHandler = (event) => {
    setData(event.target.value);
    // validate();
  };

  const data1Change = (event) => {
    setData1(event.target.value);
    // validate();
  };
  // const validate = () => {
  //   console.log("VALIDATION");
  //   // setIsValid(data.length >= 6);
  // };
  const authCtx = useContext(AuthContext);
  return (
    <>
      <div>Login Page</div>
      <input type="text" onChange={onTextHandler} value={data} />
      {isValid ? "inValid" : "Valid"}
      <input type="text" value={data1} onChange={data1Change} />
      <button onClick={authCtx.onLogin}>Login</button>
    </>
  );
}

export default Login;
