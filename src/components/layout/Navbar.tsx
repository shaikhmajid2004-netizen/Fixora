import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
       <div className="flex items-center gap-3">
  <Image
    src="/images/fixora-logo.png"
    alt="Fixora Logo"
    width={42}
    height={42}
  />

  <div>
    <h1 className="text-xl font-bold text-slate-900">
      FIXORA
    </h1>
    <p className="text-xs text-slate-500">
      One Platform. Every Service.
    </p>
  </div>
</div>

        <div className="flex items-center gap-6">
          <button className="text-gray-700 hover:text-blue-600">
            Login
          </button>

          <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}