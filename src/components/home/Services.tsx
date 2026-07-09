import {
  Zap,
  Wrench,
  Snowflake,
  Car,
  Bike,
  Laptop,
  Smartphone,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Electrician",
    description: "Professional electrical installation & repair",
  },
  {
    icon: Wrench,
    title: "Plumber",
    description: "Leak fixing, fittings and maintenance",
  },
  {
    icon: Snowflake,
    title: "AC Repair",
    description: "Cooling, installation and servicing",
  },
  {
    icon: Car,
    title: "Car Mechanic",
    description: "Car repair and maintenance at your doorstep",
  },
  {
    icon: Bike,
    title: "Bike Service",
    description: "Complete bike servicing by professionals",
  },
  {
    icon: Laptop,
    title: "Laptop Repair",
    description: "Hardware and software troubleshooting",
  },
  {
    icon: Smartphone,
    title: "Mobile Repair",
    description: "Screen replacement and phone repair",
  },
  {
    icon: Sparkles,
    title: "Home Cleaning",
    description: "Deep cleaning by verified professionals",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-blue-600">
            OUR SERVICES
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
            Popular Services
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            From home maintenance to vehicle repair, Fixora connects you with
            trusted professionals in just a few clicks.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:border-blue-500 hover:shadow-2xl"
              >
                <div className="inline-flex rounded-2xl bg-blue-100 p-4 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={34} strokeWidth={2.2} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <button className="mt-8 flex items-center gap-2 font-semibold text-blue-600 transition group-hover:gap-3">
                  Book Now
                  <ArrowRight size={18} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}