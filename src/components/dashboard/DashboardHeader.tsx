export default function DashboardHeader() {
  return (
    <header className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl">

      <div className="flex items-center justify-between px-8 py-6">

        <div>

          <p className="text-sm uppercase tracking-[0.25em] text-blue-400">
            FIXORA
          </p>

          <h1 className="mt-2 text-3xl font-bold text-white">
            Welcome Back 👋
          </h1>

          <p className="mt-2 text-slate-300">
            Manage your bookings and services from one place.
          </p>

        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-xl font-bold text-white shadow-lg">
          A
        </div>

      </div>

    </header>
  );
}