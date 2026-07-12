import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <Image
            src="/images/fixora-logo.png"
            alt="Fixora Logo"
            width={46}
            height={46}
          />

          <div>
            <h1 className="text-2xl font-extrabold text-slate-900">
              Fixora
            </h1>

            <p className="text-xs text-slate-500">
              One Platform. Every Service.
            </p>
          </div>

        </div>

        {/* Navigation */}

        <nav className="hidden gap-8 font-medium text-slate-700 lg:flex">

          <Link
            href="/services"
            className="transition duration-300 hover:text-blue-600"
             >
             Services
</Link>
          <a href="#" className="transition hover:text-blue-600">
            Become a Professional
          </a>

          <a href="#" className="transition hover:text-blue-600">
            About
          </a>

          <a href="#" className="transition hover:text-blue-600">
            Contact
          </a>

        </nav>

        {/* Buttons */}

        <div className="flex items-center gap-4">

          <Link
  href="/login"
  className="font-medium text-slate-700 transition hover:text-blue-600"
>
  Login
</Link>

         <Link
           href="/register"
           className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 hover:shadow-lg"
           >
            Get Started
         </Link>

        </div>

      </div>
    </header>
  );
}