import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link
        href="/dashboard"
        className="rounded-xl border-2 border-gray-400 p-2"
      >
        To dashboard
      </Link>
    </main>
  );
}
