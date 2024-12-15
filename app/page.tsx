import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <p>
        <Link href="/exam">시험 시작</Link>
      </p>
      <p>
        <Link href="/questions">문제 출제</Link>
      </p>
    </main>
  );
}
