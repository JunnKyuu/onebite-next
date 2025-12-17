import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router"
import {ReactNode} from "react";

export default function Page() {
    const router = useRouter();
    const q = router.query.q;

    return <h1>Search {q} </h1>
}

Page.getLayout = ({page}:{page:ReactNode}) => {
    return <SearchableLayout>{page}</SearchableLayout>;
}