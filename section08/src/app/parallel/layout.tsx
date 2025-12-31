import { ReactNode } from "react";
import Link from "next/link";

export default function Layout({
  children,
  sidebar,
  feed,
}: {
  children: ReactNode;
  sidebar: ReactNode;
  feed: ReactNode;
}) {
  return (
    <div>
      <div>
        <Link href={"/parallel"}>/parallel layout</Link>
        &nbsp;
        <Link href={"/parallel/setting"}>/parallel/setting</Link>
      </div>

      <br />
      <div>
        {sidebar}
        {feed}
        {children}
      </div>
    </div>
  );
}
