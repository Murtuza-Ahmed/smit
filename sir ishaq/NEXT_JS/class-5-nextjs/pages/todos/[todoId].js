import Link from "next/link";
import { notFound } from "next/navigation";

export default function Home(props) {
    const { todo } = props

    // if (!todo) {
    //     return <div>Loading...</div>
    // }

    return (
        <>
            <h2>Todo Page Details</h2>
            <h3>{todo.title}</h3>
        </>
    )
}


export async function getStaticProps({ params }) {
    // console.log(params)
    const { todoId } = params;
    // console.log(todoId)
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const data = await response.json();
    // console.log("DATA", data)
    return {
        props: {
            todo: data
        },
        // notFound: false,
        revalidate: 10,
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    todoId: '1',
                },
            }, // See the "paths" section below
        ],
        fallback: "blocking", // false or "blocking"
    }
}