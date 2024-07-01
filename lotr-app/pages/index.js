import { introduction } from "../lib/data";
import { volumes } from "../lib/data";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            The Fellowship of the Ring
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-kings">
            The Return of the Kings
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-two.towers">The Two Towers</Link>
        </li>
      </ul>
    </div>
  );
}
