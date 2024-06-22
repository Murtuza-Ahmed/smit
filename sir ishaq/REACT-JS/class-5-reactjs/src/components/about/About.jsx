import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [posts, setPosts] = useState([]);
  // console.log("POSTS", posts);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responsve = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const json = await responsve.json();
        setPosts(json);
      } catch (error) {
        console.error(`Data not fetch${error}`);
      }
    };
    fetchData();
  }, []);
  const data = posts.map((post, index) => {
    return (
      <div key={index}>
        ID: {post.id} <br /> TITLE: {post.title} <br /> BODY: {post.body}
      </div>
    );
  });
  // console.log("DATA", data);
  return (
    <>
      About
      <div>{data}</div>
      <div>
        <Link to="/">Home</Link>
      </div>
    </>
  );
};

export default About;
