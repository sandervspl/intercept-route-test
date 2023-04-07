import Link from "next/link";

export default function Page(props: any) {
  return (
    <Link
      href={`/en/user/a-b-c`}
      className="flex gap-1 border-gray-600 bg-base-300 font-medium capitalize hover:border-gray-400 disabled:border-gray-600 lg:text-xs xl:text-sm"
    >
      Show user
    </Link>
  );
}
