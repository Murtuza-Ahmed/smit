import { useRouter } from "next/router"


export default function () {
    const router = useRouter();
    // console.log(router.pathname);
    // console.log(router.query);
    const { username } = router.query
    return (
        <>
            <div>
                <h1>{username} _ User Profile Page</h1>
            </div>
        </>
    )
}