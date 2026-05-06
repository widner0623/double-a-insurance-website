import { FiMail, FiPhone } from "react-icons/fi";
import angelaImg from "../assets/team_Angela.jpg"
import amieImg from "../assets/team_Amie.jpg"

function Team() {
  const agents = [
    {
      name: "Angela Embry",
      title: "CEO / Insurance Agent",
      bio: "Meet Angela Embry, co-founder of Double A Insurance Agency, LLC, and a veteran of the insurance industry with two decades of experience. Driven by the goal of providing truly personalized service, she teamed up with her best friend three years ago to launch their independent agency. For Angela, being an independent agent isn't just about selling policies-it's about building relationships and protecting her community.",
      about: "As a dedicated Wife, Mom, and Mami, she understands the importance of security and peace of mind. Her clients often become friends because of her honest, hands-on approach. When she’s not matching clients with the perfect policy, you can find her spending time with her 4 children and her grandchild. ",
      email: "doubleainsurance@yahoo.com",
      phone: "(270) 202-0347",
      image: angelaImg,
    },
    {
      name: "Amie Watkins",
      title: "CEO / Insurance Agent",
      bio: "With 13 years in the industry, Amie has built her career on helping families navigate the complexities of Medicare, Life, Health, Group, and Auto insurance, ensuring they feel secure and educated. Three years ago, Amie took a leap of Faith to open an independent agency with her best friend, allowing them to offer the personalized service their community deserves without the pressure of corporate quotas.",
      about: "When Amie’s not analyzing policies or finding the best coverage, you can usually find her traveling to beach with her family, soaking up the sun and making memories with her grandkids. She brings that same care and dedication to your family as she does herself.",
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

                 <p className="mt-6 leading-relaxed text-gray-500">
                  {agent.about}
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