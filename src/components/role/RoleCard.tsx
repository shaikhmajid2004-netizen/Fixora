import Link from "next/link";

type RoleCardProps = {
  title: string;
  description: string;
  href: string;
};

export default function RoleCard({
  title,
  description,
  href,
}: RoleCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-600 hover:shadow-xl"
    >
      <h3 className="text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-slate-600 leading-7">
        {description}
      </p>

      <div className="mt-8 flex items-center font-semibold text-blue-600">
        Continue
        <span className="ml-2 transition-transform group-hover:translate-x-2">
          →
        </span>
      </div>
    </Link>
  );
}