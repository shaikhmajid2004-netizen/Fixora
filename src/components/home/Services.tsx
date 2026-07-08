export default function Services() {
  const services = [
    {
      emoji: "⚡",
      title: "Electrician",
      description: "Professional electrical installation & repair",
    },
    {
      emoji: "🚰",
      title: "Plumber",
      description: "Leak fixing, fittings and maintenance",
    },
    {
      emoji: "❄️",
      title: "AC Repair",
      description: "Cooling, installation and servicing",
    },
    {
      emoji: "🚗",
      title: "Car Mechanic",
      description: "Car repair and maintenance at your doorstep",
    },
    {
      emoji: "🏍️",
      title: "Bike Service",
      description: "Complete bike servicing by professionals",
    },
    {
      emoji: "💻",
      title: "Laptop Repair",
      description: "Hardware and software troubleshooting",
    },
    {
      emoji: "📱",
      title: "Mobile Repair",
      description: "Screen replacement and phone repair",
    },
    {
      emoji: "🧹",
      title: "Home Cleaning",
      description: "Deep cleaning by verified professionals",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold text-slate-900">
          Popular Services
        </h2>

        <p className="mt-4 text-center text-lg text-gray-600">
          Book trusted professionals for every need.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:border-blue-500 hover:shadow-2xl"
            >
              <div className="text-5xl">
                {service.emoji}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {service.description}
              </p>

              <button className="mt-8 font-semibold text-blue-600 transition group-hover:translate-x-2">
                Book Now →
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}