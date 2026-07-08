export default function Testimonials() {
  const reviews = [
    {
      name: "Abdul",
      city: "Bangalore",
      review:
        "Booked an electrician in less than 15 minutes. The service was fast, professional and affordable.",
    },
    {
      name: "Ayesha",
      city: "Bangalore",
      review:
        "Very easy booking process and transparent pricing. Definitely using Fixora again.",
    },
    {
      name: "Rahul",
      city: "Bangalore",
      review:
        "My AC was repaired the same day. Excellent experience with verified professionals.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold text-slate-900">
          What Our Customers Say
        </h2>

        <p className="mt-4 text-center text-lg text-gray-600">
          Trusted by families across the city.
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-yellow-500 text-xl">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="mt-6 leading-8 text-gray-600">
                "{review.review}"
              </p>

              <div className="mt-8">
                <h3 className="font-bold text-lg">
                  {review.name}
                </h3>

                <p className="text-gray-500">
                  {review.city}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}