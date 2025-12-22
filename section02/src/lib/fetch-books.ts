import { BookData } from "@/types"

export default async function fetchBooks(q?:string) : Promise<BookData []>{
    let url = `https://onebite-books-server-main-silk-gamma.vercel.app/book`;

    if(q) {
        url += `/search?q=${q}`;
        console.log("검색어:", q);
    }

    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error();
        }

        return await response.json();
    } catch (err) {
        console.error(err);
        return [];
    }
}