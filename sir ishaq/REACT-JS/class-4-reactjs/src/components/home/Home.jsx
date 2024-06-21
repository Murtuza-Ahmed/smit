import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      Home
      <div>
        <Link to="about">About</Link>
      </div>
        <Link to="invoices/123">My Invoices</Link>
    </>
  );
};

export default Home;
