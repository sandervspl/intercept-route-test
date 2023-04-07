import Link from "next/link";

export default function Page(props: any) {
  return (
    <Link
      href={`/${props.params.locale}/player/${props.name}/${props.region}/${props.realm}`}
      className="flex gap-1 border-gray-600 bg-base-300 font-medium capitalize hover:border-gray-400 disabled:border-gray-600 lg:text-xs xl:text-sm"
    >
      Show user
    </Link>
  );
}
