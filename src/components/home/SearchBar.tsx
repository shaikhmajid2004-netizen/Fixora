import { Search, MapPin } from "lucide-react";

export default function SearchBar() {
  return (
    <section className="mx-auto -mt-14 relative z-20 max-w-6xl px-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl">

        <div className="grid gap-4 lg:grid-cols-[1fr_250px_180px]">

          {/* Search */}

          <div className="flex items-center rounded-2xl border border-slate-200 px-4">

            <Search className="mr-3 h-5 w-5 text-slate-400" />

            <input
              type="text"
              placeholder="Search for Electrician, Plumber, AC Service..."
              className="h-14 w-full bg-transparent outline-none placeholder:text-slate-400"
            />

          </div>

          {/* Location */}

          <div className="flex items-center rounded-2xl border border-slate-200 px-4">

            <MapPin className="mr-3 h-5 w-5 text-blue-600" />

            <input
              type="text"
              placeholder="Your Location"
              className="h-14 w-full bg-transparent outline-none placeholder:text-slate-400"
            />

          </div>

          {/* Search Button */}

          <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            Search Services
          </button>

        </div>

      </div>
    </section>
  );
}