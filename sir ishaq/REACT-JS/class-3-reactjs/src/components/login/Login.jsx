import PropTypes from "prop-types";

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

function Login({ onLogin }) {
  return (
    <>
      <div>Login Page</div>
      <button onClick={onLogin}>Login</button>
    </>
  );
}

export default Login;
