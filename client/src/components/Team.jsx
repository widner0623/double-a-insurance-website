import { FiMail, FiPhone } from "react-icons/fi";
import angelaImg from "../assets/team_Angela.jpg"
import amieImg from "../assets/team_Amie.jpg"

function Team() {
  const agents = [
    {
      name: "Angela Embry",
      title: "CEO / Insurance Agent",
      bio: "With 20+ years of experience in the industry, Angela is passionate about helping people feel confident in their coverage decisions. She specializes in matching individuals and businesses with plans that truly fit their needs, making the process simple, stress-free, and tailored to each client.",
      email: "doubleainsurance@yahoo.com",
      phone: "(270) 202-0347",
      image: angelaImg,
    },
    {
      name: "Amie Watkins",
      title: "CEO / Insurance Agent",
      bio: "Amie brings over 10 years of experience in the insurance industry, specializing in helping clients find the right coverage to fit their unique needs. Whether working with individuals or employer groups, she is dedicated to providing personalized solutions, clear guidance, and reliable support every step of the way.",
      email: "doubleainsurance@yahoo.com",
      phone: "(270) 202-1101",
      image: amieImg,
    },
  ];

  return (
    <section id="team" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-950">
            Meet Our Insurance Agents
          </h2>

          <p className="mt-5 text-base leading-relaxed text-gray-500">
            Our dedicated team of insurance professionals are here to help you
            find the perfect coverage for your needs.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {agents.map((agent) => (
            <article
              key={agent.name}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={agent.image}
                alt={agent.name}
                className="h-[550px] top-14 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-950">
                  {agent.name}
                </h3>

                <p className="mt-2 font-medium text-gray-800">
                  {agent.title}
                </p>

                <p className="mt-6 leading-relaxed text-gray-500">
                  {agent.bio}
                </p>

                <div className="mt-6 space-y-3 text-gray-500">
                  <p className="flex items-center gap-3">
                    <FiMail />
                    {agent.email}
                  </p>

                  <p className="flex items-center gap-3">
                    <FiPhone />
                    {agent.phone}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;