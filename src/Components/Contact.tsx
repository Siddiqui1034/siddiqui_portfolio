import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative bg-slate-950/50">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-pink-400 to-purple-500 inline-block mb-6">
            Let's Connect
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            I'm currently available for freelance work and full-time positions.
            If you have a project that needs a technical mastermind or just want
            to say hi, my inbox is open.
          </p>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-purple-400">
                <Mail />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white font-medium">
                  siddiqui.techsunset@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-blue-400">
                <MapPin />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white font-medium">New Delhi, India</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-2xl"
        >
          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/50 transition-all"
            />
            <textarea
              rows={4}
              placeholder="Message"
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all resize-none"
            ></textarea>
            <button className="w-full py-3 mt-2 rounded-lg bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold tracking-wide hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all transform hover:-translate-y-1">
              Connect Now
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
