import { motion } from 'framer-motion';
import { HiBriefcase, HiAcademicCap, HiHeart } from 'react-icons/hi';
import {
  personalInfo,
  experiences,
  education,
  interests,
} from '../data/personal';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto rounded-full" />
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-gray-300 leading-relaxed text-center">
            {personalInfo.bio}
          </p>
        </motion.div>

        {/* Experience, Education, Interests */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8">
          {/* Experience */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-800 rounded-xl p-6 hover:shadow-xl hover:shadow-black/50 transition-shadow border border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-accent-500/20 rounded-lg">
                <HiBriefcase className="w-6 h-6 text-accent-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-accent-500 pl-4">
                  <h4 className="font-semibold text-white">{exp.title}</h4>
                  <p className="text-accent-400 font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
                  <p className="text-gray-300 text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-800 rounded-xl p-6 hover:shadow-xl hover:shadow-black/50 transition-shadow border border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-accent-500/20 rounded-lg">
                <HiAcademicCap className="w-6 h-6 text-accent-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-accent-500 pl-4">
                  <h4 className="font-semibold text-white">{edu.degree}</h4>
                  <p className="text-accent-400 font-medium">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-400">{edu.period}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-800 rounded-xl p-6 hover:shadow-xl hover:shadow-black/50 transition-shadow border border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-accent-500/20 rounded-lg">
                <HiHeart className="w-6 h-6 text-accent-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Interests</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-900 rounded-full text-sm font-medium text-gray-300 border border-gray-700 hover:border-accent-500 hover:text-accent-400 transition-colors">
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
