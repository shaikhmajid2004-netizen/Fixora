export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-bold text-blue-600">
          Fixora
        </h1>

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