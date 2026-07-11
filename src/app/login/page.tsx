import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center px-6 py-10">

      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl"></div>

      <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl"></div>

      <div className="grid w-full max-w-6xl overflow-hidden rounded-[32px] border border-white/20 bg-white/95 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,0.25)] lg:grid-cols-2">

        {/* Left Side */}
        <div className="hidden bg-blue-600 p-12 text-white lg:flex lg:flex-col lg:justify-center">

          <h1 className="text-5xl font-extrabold">
            Welcome Back
          </h1>

          <p className="mt-4 text-xl text-blue-100">
            One Platform. Every Service.
          </p>

          <p className="mt-8 leading-8 text-blue-100">
            Continue your journey with Fixora and access trusted
            professionals for home services, repairs, cleaning,
            vehicle services and much more.
          </p>

          <div className="mt-10 space-y-4">

            <div className="flex items-center gap-3">
              <span className="text-2xl">🛡️</span>
              <span className="text-blue-100 text-lg">
                Verified Professionals
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              <span className="text-blue-100 text-lg">
                Fast & Easy Booking
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">💳</span>
              <span className="text-blue-100 text-lg">
                Secure Payments
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">⭐</span>
              <span className="text-blue-100 text-lg">
                Trusted Home Service Platform
              </span>
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="p-10 lg:p-16">

          <h2 className="text-4xl font-bold text-slate-900">
            Login
          </h2>

          <p className="mt-3 text-slate-500">
            Sign in to continue with Fixora.
          </p>

          <div className="mt-10">
            <LoginForm />
          </div>

        </div>

      </div>

    </main>
  );
}