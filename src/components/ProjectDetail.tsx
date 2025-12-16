import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowLeft, HiExternalLink, HiCode } from 'react-icons/hi';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string>('');

  const project = projects.find((p) => p.id === Number(id));

  useEffect(() => {
    if (project) {
      // Set the first gallery image or main image as selected
      const firstImage = project.gallery?.[0] || project.image;
      setSelectedImage(firstImage);
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Project not found</h2>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-accent-600 text-white rounded-lg hover:bg-accent-500 transition-colors">
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  const galleryImages = project.gallery || [project.image, project.image, project.image, project.image, project.image];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container-custom section-padding pt-32">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors group"
        >
          <HiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Home</span>
        </motion.button>

        {/* Project Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-accent-500/20 text-accent-400 rounded-full text-sm font-medium border border-accent-500/30">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Photo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16">
          {/* Large Image Container */}
          <div className="mb-6 rounded-xl overflow-hidden bg-gray-800 border border-gray-700 shadow-2xl">
            <img
              src={selectedImage}
              alt={project.title}
              className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            />
          </div>

          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-4 gap-4">
            {galleryImages.slice(0, 4).map((image, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`relative overflow-hidden rounded-lg border-2 transition-all ${
                  selectedImage === image
                    ? 'border-accent-500 ring-2 ring-accent-500/50'
                    : 'border-gray-700 hover:border-gray-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <img
                  src={image}
                  alt={`${project.title} - View ${index + 1}`}
                  className="w-full h-24 md:h-32 lg:h-40 object-cover"
                />
                {selectedImage === image && (
                  <div className="absolute inset-0 bg-accent-500/20" />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Description Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About This Project</h2>
          <div className="w-24 h-1 bg-accent-500 mb-6 rounded-full" />
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
              {project.detailedDescription || project.description}
            </p>
          </div>
        </motion.div>

        {/* Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Project Links</h2>
          <div className="w-24 h-1 bg-accent-500 mb-6 rounded-full" />
          <div className="flex flex-col sm:flex-row gap-4">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-accent-600 text-white rounded-lg font-semibold hover:bg-accent-500 transition-colors shadow-lg shadow-accent-600/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <HiExternalLink className="w-5 h-5" />
                View Live Demo
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-800 text-gray-200 border-2 border-gray-700 rounded-lg font-semibold hover:bg-gray-700 hover:border-gray-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <HiCode className="w-5 h-5" />
                View on GitHub
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;

