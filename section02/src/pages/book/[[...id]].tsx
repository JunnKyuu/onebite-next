// optional catch all segment
import {useRouter} from "next/router"

export default function Page() {
    const router = useRouter();
    const id = router.query.id;

    return <h1>Book {id}</h1>
}