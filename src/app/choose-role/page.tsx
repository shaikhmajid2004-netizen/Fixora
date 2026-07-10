import RoleCard from "@/components/role/RoleCard";

export default function ChooseRolePage() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-5xl rounded-3xl bg-white p-10 shadow-2xl">

        <div className="text-center">

          <h1 className="text-5xl font-extrabold text-slate-900">
            Join Fixora
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            Choose how you want to continue.
          </p>

        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">

          <RoleCard
            title="Customer"
            description="Book trusted electricians, plumbers, cleaners, AC technicians, mechanics and many more services."
            href="/register"
          />

          <RoleCard
            title="Service Professional"
            description="Join Fixora as a verified professional and grow your income by serving customers near you."
            href="/register"
          />

        </div>

      </div>

    </main>
  );
}