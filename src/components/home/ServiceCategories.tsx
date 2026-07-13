import {
  Zap,
  Wrench,
  Snowflake,
  Car,
  Bike,
  Laptop,
  Smartphone,
  Sparkles,
} from "lucide-react";

const categories = [
  { title: "Electrician", icon: Zap },
  { title: "Plumber", icon: Wrench },
  { title: "AC Service", icon: Snowflake },
  { title: "Car Service", icon: Car },
  { title: "Bike Service", icon: Bike },
  { title: "Laptop Repair", icon: Laptop },
  { title: "Mobile Repair", icon: Smartphone },
  { title: "Home Cleaning", icon: Sparkles },
];

export default function ServiceCategories() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-10 text-center text-3xl font-bold text-slate-900">
          Browse Categories
        </h2>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="group flex cursor-pointer flex-col items-center rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <div className="rounded-2xl bg-blue-100 p-4 transition group-hover:bg-blue-600">
                  <Icon className="h-8 w-8 text-blue-600 group-hover:text-white" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {category.title}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}