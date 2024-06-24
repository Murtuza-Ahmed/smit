import { useRouter } from "next/router"


export default function () {
    const router = useRouter();
    const { customerId } = router.query;
    // console.log(router)
    return (
        <>
            <h1>Customers {customerId} Detail Page</h1>
            <h2>Projects</h2>
            <a>Go to this Customers Project List</a>
        </>
    )
}