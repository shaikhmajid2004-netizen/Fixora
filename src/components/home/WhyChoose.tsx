export default function WhyChoose() {
  const features = [
    {
      icon: "✅",
      title: "Verified Professionals",
      description:
        "Every professional is verified before joining Fixora.",
    },
    {
      icon: "⚡",
      title: "Fast Response",
      description:
        "Book trusted services quickly with fast response times.",
    },
    {
      icon: "💰",
      title: "Transparent Pricing",
      description:
        "Know the service cost before confirming your booking.",
    },
    {
      icon: "🛡️",
      title: "Secure Platform",
      description:
        "Safe bookings, reliable professionals, and secure experience.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold text-slate-900">
          Why Choose Fixora?
        </h2>

        <p className="mt-4 text-center text-lg text-gray-600">
          Professional services with trust, quality, and transparency.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-5xl">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}