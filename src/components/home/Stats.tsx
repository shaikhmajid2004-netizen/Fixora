export default function Stats() {
  const stats = [
    {
      number: "10,000+",
      label: "Happy Customers",
    },
    {
      number: "500+",
      label: "Verified Professionals",
    },
    {
      number: "25+",
      label: "Services Available",
    },
    {
      number: "4.9★",
      label: "Customer Rating",
    },
  ];

  return (
    <section className="bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat) => (
            <div key={stat.label}>
              <h2 className="text-5xl font-extrabold text-blue-400">
                {stat.number}
              </h2>

              <p className="mt-3 text-lg text-gray-300">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}