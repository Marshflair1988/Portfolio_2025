import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';
import { personalInfo } from '../data/personal';
import profileImage from '../Assets/images/Me.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section-padding pt-48 md:pt-32 pb-16 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container-custom">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Hi, I'm{' '}
              <span className="text-accent-400">{personalInfo.name}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 mb-4">
              {personalInfo.title}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-gray-400 mb-8 max-w-xl">
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.button
                onClick={scrollToProjects}
                className="px-8 py-4 bg-accent-600 text-white rounded-lg font-semibold shadow-lg shadow-accent-600/50 hover:bg-accent-500 transition-colors flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                View Projects
                <HiArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center md:justify-end w-full h-full">
            <div className="relative w-[73%] mx-auto md:mx-0">
              <motion.div
                className="w-full aspect-square rounded-full overflow-hidden shadow-2xl shadow-accent-500/20 border-4 border-gray-800"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}>
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-500 rounded-full opacity-30 blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
