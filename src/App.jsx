import emailjs from 'emailjs-com';
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_r48k15j',
      'template_kzvh97l',
      form.current,
      '0GErKl8gu-hsKXaCT'
    )
    .then(() => {
      toast.success('✅ Message sent successfully!');
      form.current.reset();
    })
    .catch(() => {
      toast.error('❌ Failed to send message.');
    });
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow fixed w-full top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-blue-600 font-bold text-xl">Kalingu's Portfolio</h1>
          <div className="space-x-6">
            <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>
        </div>
      </nav>

      {/* Home */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-gray-100 pt-24">
        <h2 className="text-4xl font-bold text-blue-700">Hi, I'm Kalingu Kalhara</h2>
        <p className="mt-4 text-lg text-gray-600">Welcome to my smart portfolio!</p>

        <a
    href="/Kalingu_CV.pdf"
    download
    className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
  >
    📄 Download CV
  </a>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-white py-16 px-4">
  <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">My Projects</h2>
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

    <a
      href="https://github.com/kalingukalhara/cropguard"
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 bg-gray-100 rounded shadow hover:shadow-lg transition"
    >
      <h3 className="text-xl font-semibold text-blue-600">CropGuard</h3>
      <p className="mt-2 text-gray-700">AI-powered tomato disease detection with Flask backend.</p>
    </a>

    <a
      href="https://github.com/Kalingukalhara/Smart-Air-Quality-Monitoring.git"
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 bg-gray-100 rounded shadow hover:shadow-lg transition"
    >
      <h3 className="text-xl font-semibold text-blue-600">Air Quality Monitor</h3>
      <p className="mt-2 text-gray-700">Real-time web dashboard using ThingSpeak and sensors.</p>
    </a>

    <a
      href="https://github.com/kalingukalhara/ecommerce-site"
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 bg-gray-100 rounded shadow hover:shadow-lg transition"
    >
      <h3 className="text-xl font-semibold text-blue-600">E-Commerce Site</h3>
      <p className="mt-2 text-gray-700">Full-stack mini Amazon clone with Stripe integration.</p>
    </a>

  </div>
</section>


      {/* Contact - with Framer Motion */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-100 py-16 px-4"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Get in Touch</h2>
        <div className="max-w-xl mx-auto bg-white p-8 rounded shadow-md">
          <form ref={form} onSubmit={sendEmail}>
            <input type="hidden" name="title" value="New Contact Message" />

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                rows="5"
                name="message"
                placeholder="Your message..."
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.section>

      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
