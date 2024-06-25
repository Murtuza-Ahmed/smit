// import Link from "next/link";
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


export async function getStaticProps({ params }) {  // iske parameter me hame context milta he
    try {
        const { todoId } = params;
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
        const data = await response.json();
        if (!data) {
            return {
                notFound: true
            }
        }
        return {
            props: {
                todo: data
            },
            // notFound: false,
            revalidate: 10,
        }
    } catch (Error) { console.error(`data not found ${Error}`) }
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