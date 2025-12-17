import SearchableLayout from "@/components/searchable-layout";
import styles from "./index.module.css";
import {ReactNode} from "react";

export default function Home() {
  return (
    <div>
      <h1 className={styles.h1}>인덱스</h1>
      <h2 className={styles.h2}>h2</h2>
    </div>
  )
  
}

Home.getLayout = ({page}: {page: ReactNode}) => {
  return <SearchableLayout>{page}</SearchableLayout>
}