import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to my cities app.</h1>
      <Link href="/cities">Got to cities</Link>
    </div>
  );
}
