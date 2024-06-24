import { useRouter } from "next/router"


export default function () {
    const router = useRouter();
    const { customerId } = router.query;
    return (
        <>
            <h1>Customers {customerId} Project List Page</h1>
            <h2>Projects</h2>
            <ul>

                <li>ABC</li>
                {/* <br /> */}
                <li>XYZ</li>

            </ul>
        </>
    )
}