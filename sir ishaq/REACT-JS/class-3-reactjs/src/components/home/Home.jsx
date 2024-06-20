import PropTypes from "prop-types";

Home.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

function Home({ onLogout }) {
  return (
    <>
      <div>Home</div>
      <button onClick={onLogout}>Logout</button>
    </>
  );
}

export default Home;
