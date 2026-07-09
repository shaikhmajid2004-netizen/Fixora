import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6 py-10">
      <div className="grid w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-2">

        {/* Left Side */}
        <div className="hidden bg-blue-600 p-12 text-white lg:flex lg:flex-col lg:justify-center">

          <h1 className="text-5xl font-extrabold">
            Fixora
          </h1>

          <p className="mt-4 text-xl text-blue-100">
            One Platform. Every Service.
          </p>

          <p className="mt-8 leading-8 text-blue-100">
            Book trusted electricians, plumbers, AC technicians,
            car mechanics, bike service, appliance repair,
            cleaning services and much more.
          </p>

        </div>

        {/* Right Side */}
        <div className="p-10 lg:p-16">

          <h2 className="text-4xl font-bold text-slate-900">
            Welcome Back
          </h2>

          <p className="mt-3 text-slate-500">
            Login to continue using Fixora.
          </p>

          <div className="mt-10">
            <LoginForm />
          </div>

        </div>

      </div>
    </main>
  );
}