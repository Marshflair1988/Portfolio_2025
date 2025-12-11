import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPaperAirplane } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { personalInfo } from '../data/personal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission
    console.log('Form submitted:', formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-br from-black to-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto rounded-full" />
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from
            you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <form
              onSubmit={handleSubmit}
              className="bg-gray-800 rounded-xl p-8 shadow-xl border border-gray-700">
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all text-gray-100 placeholder-gray-500"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all text-gray-100 placeholder-gray-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all resize-none text-gray-100 placeholder-gray-500"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent-600 text-white rounded-lg font-semibold hover:bg-accent-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-accent-600/30"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}>
                  Send Message
                  <HiPaperAirplane className="w-5 h-5" />
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8">
            <div className="bg-gray-800 rounded-xl p-8 shadow-xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-300 mb-8">
                Feel free to reach out through any of these channels. I'm always
                open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </p>

              {/* Email */}
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-700 border border-gray-700 hover:border-accent-500/50 transition-colors mb-4 group"
                whileHover={{ x: 5 }}>
                <div className="p-3 bg-accent-500/20 rounded-lg group-hover:bg-accent-500/30 transition-colors">
                  <HiMail className="w-6 h-6 text-accent-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium text-white">{personalInfo.email}</p>
                </div>
              </motion.a>

              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-accent-500/20 rounded-lg hover:bg-accent-600 border border-accent-500/30 hover:border-accent-500 transition-colors group"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}>
                  <FaLinkedin className="w-6 h-6 text-accent-400 group-hover:text-white transition-colors" />
                </motion.a>
                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-accent-500/20 rounded-lg hover:bg-accent-600 border border-accent-500/30 hover:border-accent-500 transition-colors group"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}>
                  <FaGithub className="w-6 h-6 text-accent-400 group-hover:text-white transition-colors" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
