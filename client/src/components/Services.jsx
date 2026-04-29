import {
  FiHome,
  FiHeart,
  FiBriefcase,
  FiUmbrella,
  FiUsers,
  FiShield
} from "react-icons/fi";

function Services() {
  const services = [
     {
      icon: <FiShield  />,
      title: "Medicare Options",
      text: "Find the right Medicare coverage for your lifestyle with flexible plan options, trusted providers, and personalized support.",
    },
    {
      icon: <FiHeart />,
      title: "Health Insurance",
      text: "Quality healthcare coverage for you and your family with extensive provider networks.",
    },
    {
      icon: <FiUmbrella />,
      title: "Life Insurance",
      text: "Secure your family’s financial future with term and whole life insurance policies.",
    },
    {
      icon: <FiHome />,
      title: "Home & Auto Insurance",
      text: "Comprehensive coverage for your home and vehicle, including protection from unexpected events and flexible policy options.",
    },
    {
      icon: <FiBriefcase />,
      title: "Business Insurance",
      text: "Safeguard your business with liability, property, and workers compensation coverage.",
    },
   
    {
      icon: <FiUsers />,
      title: "Group Plans",
      text: "Affordable group insurance solutions for organizations of all sizes.",
    },
  ];

  return (
    <section id="services" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-950">
            Our Insurance Services
          </h2>

          <p className="mt-5 text-base leading-relaxed text-gray-500">
            We offer a wide range of insurance products designed to protect you,
            your family, and your assets.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 cursor-pointer">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-gray-200 bg-white p-9 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-5xl text-[#050514]">{service.icon}</div>

              <h3 className="mt-7 text-xl font-bold text-gray-950">
                {service.title}
              </h3>

              <p className="mt-4 min-h-20 text-base leading-relaxed text-gray-500">
                {service.text}
              </p>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-gray-950"
              >
                Learn More <span>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;