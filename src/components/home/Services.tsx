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
  rating: "4.9",
  time: "30 mins",
  price: "Starts ₹199",
  popular: true,
  verified: true,
},
  {
    icon: Wrench,
    title: "Plumber",
    description: "Leak fixing, fittings and maintenance",
    popular: true,
    verified: true,
  },
  {
    icon: Snowflake,
    title: "AC Repair",
    description: "Cooling, installation and servicing",
    popular: true,
    verified: true,
  },
  {
    icon: Car,
    title: "Car Mechanic",
    description: "Car repair and maintenance at your doorstep",
    popular: true,
    verified: true,
  },
  {
    icon: Bike,
    title: "Bike Service",
    description: "Complete bike servicing by professionals",
    popular: true,
    verified: true,
  },
  {
    icon: Laptop,
    title: "Laptop Repair",
    description: "Hardware and software troubleshooting",
    popular: true,
    verified: true,
  },
  {
    icon: Smartphone,
    title: "Mobile Repair",
    description: "Screen replacement and phone repair",
    popular: true,
    verified: true,
  },
  {
    icon: Sparkles,
    title: "Home Cleaning",
    description: "Deep cleaning by verified professionals",
    popular: true,
    verified: true,
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

                <div className="mt-6 flex items-center justify-between">

  <h3 className="text-2xl font-bold text-slate-900">
    {service.title}
  </h3>

  {service.popular && (
    <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
      🔥 Most Booked
    </span>
  )}

</div>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>
                <div className="mt-5 flex flex-col gap-2 text-sm">

  <div className="flex items-center justify-between">
    <span className="text-amber-500 font-semibold">
      ⭐ {service.rating}
    </span>

    <span className="text-slate-500">
      ⏱ {service.time}
    </span>
  </div>

  <p className="font-semibold text-blue-600">
    {service.price}
  </p>
  {service.verified && (
  <p className="mt-2 text-sm font-medium text-green-600">
    ✅ Verified Professional
  </p>
)}

</div>

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