// import Link from "next/link";
// import { notFound } from "next/navigation";

import Head from "next/head"

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
      <Head>
        <title>My NextJS Page Content</title>
        <meta name="description" content="This Is Dummy Page" />
      </Head>
      <h2>{title}</h2>
      <h3>{todoList}</h3>
    </>
  )
}

export async function getServerSideProps(context) {
  console.log(context)
  // const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const data = await response.json();
  return {
    props: {
      title: "Hello",
      todos: data
    }
  }
}




// export async function getStaticProps() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
//   const data = await response.json();
//   console.log("DATA", data)
//   return {
//     props: {
//       title: "Hello",
//       todos: data
//     },
//     // notFound: true,
//     revalidate: 10,
//   }
// }