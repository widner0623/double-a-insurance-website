import { FiShield, FiAward, FiUsers } from "react-icons/fi";

function Hero() {
  const cards = [
    {
      icon: <FiShield />,
      title: "Trusted Protection",
      text: "Personalized coverage for your peace of mind",
    },
    {
      icon: <FiAward />,
      title: "Expert Guidance",
      text: "Dedicated agents who know your community",
    },
    {
      icon: <FiUsers />,
      title: "Growing Family",
      text: "Join hundreds of satisfied customers",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-[720px] bg-[#000] px-6 py-24 text-white md:py-32"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2 ">
        {/* LEFT CONTENT */}
        <div>
          <div className="mt-[-100px] mb-[0px] max-w-md">
            <img
              src="/amie_angela.PNG"
              alt="Company Logo"
              className="w-full max-w-md h-auto"
            />
          </div>
          <h1 className="max-w-xl text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            Protecting What Matters Most
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-gray-200 md:text-xl">
             At Double A Insurance Agency<sup>LLC</sup>, we believe insurance is a personal business, not a digital transaction. We're an independent agency that treats you like family, focusing on taking the time to truly understand your unique needs. Your peace of mind is our priority, delivered with the kind of service you can trust
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-lg bg-white px-8 py-4 text-center font-semibold text-[#11111d] transition hover:-translate-y-0.5 hover:bg-gray-100"
            >
              Get Started
            </a>

            <a
              href="#services"
              className="rounded-lg border border-white/80 px-8 py-4 text-center font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#11111d]"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* RIGHT FEATURE CARDS */}
        <div className="space-y-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white/10 p-8 shadow-lg backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/15 cursor-default"
            >
              <div className="mb-6 text-5xl text-white">{card.icon}</div>

              <h3 className="text-xl font-bold">{card.title}</h3>

              <p className="mt-3 text-base text-gray-300">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;