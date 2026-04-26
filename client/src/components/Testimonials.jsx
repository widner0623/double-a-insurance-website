import { FiStar } from "react-icons/fi";

function Testimonials() {
  const reviews = [
    {
      text: "Double A Insurance made the claims process so easy after the storm damage. They were responsive, professional, and got everything handled quickly.",
      name: "Sarah Johnson",
      role: "Homeowner",
    },
    {
      text: "Their business insurance package saved my company. When we had a liability claim, they handled everything professionally and efficiently.",
      name: "Michael Chen",
      role: "Business Owner",
    },
    {
      text: "Best insurance company I’ve worked with. Great rates, excellent customer service, and they actually care about their clients.",
      name: "Emily Rodriguez",
      role: "Auto Insurance Client",
    },
  ];

  return (
    <section className="bg-gray-100 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-gray-950">
            What Our Clients Say
          </h2>

          <p className="mt-4 text-gray-500">
            Don’t just take our word for it - hear from some of our satisfied customers.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex gap-1 text-black">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} fill="black" />
                ))}
              </div>

              <p className="mt-5 text-gray-600 leading-relaxed">
                {review.text}
              </p>

              <div className="mt-6">
                <p className="font-semibold text-gray-900">
                  {review.name}
                </p>
                <p className="text-sm text-gray-500">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="mt-10 text-center">
          <a
            href="https://www.google.com/search?q=double+a+insurance#lrd=0xac5ea6d4f997914b:0x16df6c119d6d271f,1"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-600 hover:underline"
          >
            View all reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;