import Link from "next/link";
import { notFound } from "next/navigation";

export default function Home(props) {
  const { title, todos } = props

  if (!todos) {
    return <div>Loading...</div>
  }

  const todoList = todos.map((todo) => {
    return (
      <li key={todo.id}>
        <p>{todo.title}</p>
      </li>
    )
  })

  return (
    <>
      <h2>{title}</h2>
      <h3>{todoList}</h3>


      {/* <h1>Home Page</h1>
      <h2>Our Costomers</h2>
      <Link href="/customers">Go to Customers</Link> */}
    </>
  )
}


export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await response.json();
  console.log("DATA", data)
  return {
    props: {
      title: "Hello",
      todos: data
    },
    // notFound: true,
    revalidate: 10,
  }
}