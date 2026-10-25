import { ToastContainer } from "react-toastify";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Works from "./Components/Works";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { ProjectsList } from "./Components/ProjectCard/ProjectsList";
import NavbarMobile from "./Components/NavbarMobile";
import ScrollTop from "./Components/ScrollTop/ScrollTop";

export default function App() {
  const phoneNumber = "917376147918"; // Replace with your WhatsApp number
  const message =
    "Hello Nausheen, I visited your portfolio and would like to connect.";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="antialiased pb-20 md:pb-0 font-sans">
      {/* Ambient Background Blobs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <NavbarMobile />
      <Hero />
      <Works />
      <ProjectsList />
      <Experience />
      <Contact />
      <ScrollTop />
      <Footer />

      <ScrollTop />

      {/* Floating CTA */}

      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        title="Chat on WhatsApp"
        className="hidden md:flex fixed bottom-8 right-8 w-14 h-14 bg-green-500 text-white rounded-full items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.6)] hover:scale-110 hover:shadow-[0_0_30px_rgba(34,197,94,0.8)] transition-all z-50"
      >
        <i className="ri-whatsapp-line text-5xl"></i>
      </a>
      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        className="md:hidden flex justify-center items-center fixed bottom-2 left-4 right-4 rounded-lg p-4 bg-gradient-to-r from-violet-400/80 via-indigo-400 to-purple-700/80 text-white  text-lg  z-50 shadow-[0_-5px_25px_rgba(168,85,247,0.7)] animate-bounce tracking-wider"
      >
        <i className="ri-whatsapp-line text-xl mr-4"></i> Hire Me
      </a>
      <ToastContainer />
    </div>
  );
}
