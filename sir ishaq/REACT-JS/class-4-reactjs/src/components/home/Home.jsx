import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Link to="invoice">Home</Link>
      <div>
        <Link to="about">About</Link>
      </div>
    </>
  );
};

export default Home;
