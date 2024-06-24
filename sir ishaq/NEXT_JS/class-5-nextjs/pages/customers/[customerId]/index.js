import Link from "next/link";
import { useRouter } from "next/router"


export default function () {
    const router = useRouter();
    const { customerId } = router.query;
    // console.log(router)
    return (
        <>
            <h1>Customers {customerId} Detail Page</h1>
            <h2>Projects</h2>
            <Link href={`/customers/${customerId}/project`}>Go to this Customers Project List</Link>
        </>
    )
}