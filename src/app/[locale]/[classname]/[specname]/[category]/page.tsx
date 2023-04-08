import Link from "next/link";

export default function Page(props: any) {
  return (
    <ul>
      <li>
        <Link
          href={`/photo/1`}
          className="flex gap-1 border-gray-600 bg-base-300 font-medium capitalize hover:border-gray-400 disabled:border-gray-600 "
        >
          Show photo (works)
        </Link>
      </li>
      <li>
        <Link
          href={`/en/user/sander`}
          className="flex gap-1 border-gray-600 bg-base-300 font-medium capitalize hover:border-gray-400 disabled:border-gray-600 "
        >
          Show user (doesn't work)
        </Link>
      </li>
    </ul>
  );
}
