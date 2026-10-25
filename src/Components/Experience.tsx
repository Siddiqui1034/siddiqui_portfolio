import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="resume" className="py-12 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-700 to-cyan-500 inline-block mb-4">
            Resume & Experience
          </h2>
          <p className="text-gray-400 text-lg">
            My professional journey and educational background.
          </p>
        </div>

        <div className="space-y-12 border-l-2 border-purple-500/50 pl-6 md:pl-10 relative">
          {[
            {
              year: "2022 - Present",
              title: "Senior Full Stack Developer",
              company: "TechNova Solutions",
              color: "purple",
            },
            {
              year: "2019 - 2022",
              title: "Frontend Web Developer",
              company: "Creative Web Agency",
              color: "blue",
            },
            {
              year: "2015 - 2019",
              title: "Bachelor of Computer Science",
              company: "University of Technology",
              color: "pink",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div
                className={`absolute -left-7.75 md:-left-11.75 top-1 h-5 w-5 rounded-full bg-slate-900 border-2 border-${item.color}-500 shadow-[0_0_10px_var(--tw-shadow-color)] shadow-${item.color}-500`}
              ></div>
              <div className="glass-card p-6 rounded-xl">
                <span
                  className={`text-${item.color}-400 font-semibold text-sm tracking-wider uppercase mb-1 block`}
                >
                  {item.year}
                </span>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-gray-300 text-sm mb-3 font-medium">
                  {item.company}
                </p>
                <p className="text-gray-400 text-sm">
                  Contributed to high-level architectural decisions, managed
                  complex deployments, and consistently delivered pixel-perfect
                  interfaces.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
