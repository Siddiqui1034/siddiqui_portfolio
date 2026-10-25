import { motion } from "framer-motion";

const Works = () => {
  const projects = [
    {
      title: "AI Analytics Dashboard",
      color: "purple",
      img: "AI+Dashboard",
      tags: ["Next JS", "Gen AI", "Tailwind"],
    },
    {
      title: "Microservices E-Commerce API",
      color: "blue",
      img: "E-Commerce+API",
      tags: ["Node", "Kafka", "PostgreSQL"],
    },
    {
      title: "Real-time Task Manager",
      color: "pink",
      img: "Task+Manager",
      tags: ["React", "MongoDB", "AWS"],
    },
  ];

  return (
    <section id="works" className="py-12 px-10 relative bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-pink-500 inline-block mb-4">
            Featured Works
          </h2>
          <p className="text-gray-400 mx-auto text-lg">
            A selection of recent projects built with modern technologies
            focusing on performance and UX.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              <div className="relative overflow-hidden h-90">
                <div
                  className={`absolute inset-0 bg-${proj.color}-500/20 group-hover:bg-transparent transition duration-300 z-10`}
                ></div>
                <img
                  src={`/images/tab-image-${idx}.png`}
                  alt={proj.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3
                  className={`text-xl font-semibold mb-2 text-white group-hover:text-${proj.color}-400 transition`}
                >
                  {proj.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  An enterprise-grade application ensuring seamless data flow,
                  scalable architecture, and premium user experience.
                </p>
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
