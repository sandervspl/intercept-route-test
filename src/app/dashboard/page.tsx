import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Dashboard</h1>
      <Link href="/user" className="rounded-xl border-2 border-gray-400 p-2">
        Show user
      </Link>
    </main>
  );
}
