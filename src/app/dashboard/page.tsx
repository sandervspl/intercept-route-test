import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <Link href="/user" className="rounded-xl border-2 border-gray-400 p-2">
        Show user
      </Link>
    </>
  );
}
