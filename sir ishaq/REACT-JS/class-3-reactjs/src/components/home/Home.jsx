// import PropTypes from "prop-types";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

// Home.propTypes = {
//   onLogout: PropTypes.func.isRequired,
// };

function Home() {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <div>Home</div>
      <button onClick={authCtx.onLogout}>Logout</button>
    </>
  );
}

export default Home;
