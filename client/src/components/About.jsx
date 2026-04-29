import { FiCheckCircle } from "react-icons/fi";

function About() {
  const reasons = [
    {
      title: "Care That Feels Like Family",
      text: "Compassionate support you can trust",
    },
    {
      title: "Local Agents",
      text: "Personalized service in your community",
    },
    {
      title: "Competitive Rates",
      text: "Quality coverage at affordable prices",
    },
    {
      title: "Fast, Reliable Service",
      text: "Quick response times and dependable support when you need it",
    },
  ];

  const stats = [
    { number: "2023", label: "Founded & Growing Strong" },
    { number: "1,500+", label: "Satisfied Customers" },
    { number: "98.9%", label: "Customer Satisfaction" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <section id="about" className="bg-gray-100 px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-950">
            Why Choose Double A Insurance?
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-500">
           We specialize in building long-term relationships, not just filling out forms 
          </p>

          <div className="mt-10 space-y-6">
            {reasons.map((reason) => (
              <div key={reason.title} className="flex gap-4">
                <FiCheckCircle className="mt-1 shrink-0 text-2xl text-gray-950" />

                <div>
                  <h3 className="font-bold text-gray-950 text-xl">{reason.title}</h3>
                  <p className="mt-2 text-gray-500 text-lg">{reason.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-[#000] p-10 text-white md:p-14">
          <div className="space-y-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-5xl font-medium tracking-tight">
                  {stat.number}
                </p>
                <p className="mt-2 text-lg text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;