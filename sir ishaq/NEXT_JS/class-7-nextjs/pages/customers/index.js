import Link from "next/link";

export default function () {
    return (
        <>
            <h1>Costomers Page</h1>
            <ul>
                <li>
                    <Link href="customers/sheroz">Sheroz</Link>
                    <br />
                    <Link href="customers/raza">Raza</Link>
                </li>
            </ul>
        </>
    )
}