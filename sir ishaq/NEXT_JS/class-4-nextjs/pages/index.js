import Link from "next/link";

export default function Home() {

  return (
    <>
      <h1>Home Page</h1>
      <h2>Our Costomers</h2>
      <Link href="/customers">Go to Customers</Link>
    </>
  )
}
