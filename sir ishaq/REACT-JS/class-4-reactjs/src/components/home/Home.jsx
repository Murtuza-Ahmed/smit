import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1", { method: "GET" })
      .then((response) => {
        console.log("RESPONSE", response);
        return response.json();
      })
      .then((json) => setData(json));
  }, []);
  // const { userId, title, completed } = data;
  return (
    <>
      Home
      <div>
        UserID: {data.userId} <br />
        Title: {data.title} <br />
        Completed: {data.completed}
      </div>
      <div>
        <Link to="about">About</Link>
      </div>
      <Link to="invoices/123">My Invoices</Link>
    </>
  );
};

export default Home;
