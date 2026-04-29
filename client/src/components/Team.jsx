import { FiMail, FiPhone } from "react-icons/fi";

function Team() {
  const agents = [
    {
      name: "Angela Embry",
      title: "CEO / Insurance Agent",
      bio: "With 20+ years of experience in the industry, Angela is passionate about helping people feel confident in their coverage decisions. She specializes in matching individuals and businesses with plans that truly fit their needs, making the process simple, stress-free, and tailored to each client.",
      email: "doubleainsurance@yahoo.com",
      phone: "(270) 202-0347",
      image:
        "https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/469226622_431528980008663_6451512936600384130_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd6889&_nc_ohc=PK-lhuKHKyYQ7kNvwEIi_Xw&_nc_oc=AdqGAj7f4n94n_S6cQ1JQmBN3V3rVpERh_7yHnjYn7sP2nPJityqbr5fqp0QvdnNIfbDY_CQLDB8os52_mT9Y2KN&_nc_zt=23&_nc_ht=scontent-lga3-1.xx&_nc_gid=TYBkbj-uKLjspsvMPC_zuA&_nc_ss=7b2a8&oh=00_Af21aAxoECDjYrCTiPXyz1eMWBT-zgFMKTBi-OJ1CvQfIg&oe=69F40AA5",
    },
    {
      name: "Amie Watkins",
      title: "CEO / Insurance Agent",
      bio: "Amie brings over 10 years of experience in the insurance industry, specializing in helping clients find the right coverage to fit their unique needs. Whether working with individuals or exployer groups, she is dedicated to providing personalized solutions, clear guidance, and reliable support every step of the way.",
      email: "doubleainsurance@yahoo.com",
      phone: "(270) 202-1101",
      image:
        "https://scontent-lga3-3.xx.fbcdn.net/v/t39.30808-6/469217119_431528920008669_5782108318087999375_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd6889&_nc_ohc=TUt5DwgPE_MQ7kNvwGf5C63&_nc_oc=Adpo3UPJ6c7VE3ovGlMfzZmpJbeEJAsbQ2TRpmu1usjBvHczmS9wQeTnRb6MlUIDr14PFSMpZOT4limHA0aIe2Nv&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=6rL_MNM456FfDq1o-RRvag&_nc_ss=7b2a8&oh=00_Af3xajWRJTWni4LMYhkdey0UfSXUyL0Y7q8Eov2vM11ElA&oe=69F40A3E",
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
                className="h-[500px] pt-16 w-full object-cover"
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