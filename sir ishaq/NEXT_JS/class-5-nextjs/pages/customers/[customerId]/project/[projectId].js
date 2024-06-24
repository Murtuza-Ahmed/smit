import { useRouter } from "next/router"


export default function () {
    const router = useRouter();
    const { customerId, projectId } = router.query;
    return (
        <>
            <h1>Customers {customerId} Project List Page</h1>
            <h2>Project_{projectId}</h2>
        </>
    )
}