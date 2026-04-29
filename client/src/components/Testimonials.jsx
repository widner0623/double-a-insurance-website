import { FiStar } from "react-icons/fi";

function Testimonials() {
  const reviews = [
    {
      text: "Amie and Angela are very compassionate and go above and beyond to explain everything to you. They help you make the right choices. They treat you like family. I'll drive and hour every time it worth it.",
      name: "Deniese Cannon",
      role: "Health Insurance Client",
    },
    {
      text: "Amie saved me so much time and stress when I had a mishap with my health insurance coverage. She is truly a blessing!!",
      name: "JD Davis",
      role: "Health Insurance Client",
    },
    {
      text: "We met with Angela today. She went above and beyond to give us such great information so we could decide what would be the best for us. The time she spent with us I honestly cannot imagine another insurance office spending the time that she did today . She came highly, recommended to us and we are so glad we went !! Very sweet lady. Highly recommend her also.",
      name: "Melissa Forgy",
      role: "New Client",
    },
  ];

  return (
    <section id="reviews" className="bg-gray-100 px-6 py-24">
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