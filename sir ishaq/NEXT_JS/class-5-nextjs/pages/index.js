import Link from "next/link";

export default function Home() {

  const customers = [{
    name: "sheroz",
    id: 6,
    project: [{
      name: "ecommerce",
      details: "Auton_Company"
    }]
  }]

  return (
    <>
      <h1>Home Page</h1>
      <h2>Our Costomers</h2>
      <Link href="/customers">Go to Customers</Link>
    </>
  )
}
