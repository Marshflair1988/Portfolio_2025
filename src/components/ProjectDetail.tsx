import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiArrowLeft,
  HiExternalLink,
  HiChevronDown,
  HiClipboard,
} from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string>('');
  const [linkCopied, setLinkCopied] = useState(false);

  const project = projects.find((p) => p.id === Number(id));

  const copyProjectLink = async () => {
    const url = project?.liveUrl || window.location.href;
    if (url && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(url);
        setLinkCopied(true);
        setTimeout(() => setLinkCopied(false), 2000);
      } catch (error) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = url;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
          setLinkCopied(true);
          setTimeout(() => setLinkCopied(false), 2000);
        } catch {
          // Silent fail - user can manually copy
        }
        document.body.removeChild(textArea);
      }
    }
  };

  useEffect(() => {
    if (project) {
      // Set the first gallery image or main image as selected
      const firstImage = project.gallery?.[0] || project.image;
      setSelectedImage(firstImage);
    }
  }, [project]);

  // Handle ESC key to close modal
  useEffect(() => {
    if (!isModalOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
        setModalImage('');
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Project not found
          </h2>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-accent-600 text-white rounded-lg hover:bg-accent-500 transition-colors">
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  const galleryImages = project.gallery || [project.image];

  // Toggle section expansion
  const toggleSection = (sectionName: string) => {
    setExpandedSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(sectionName)) {
        newSet.delete(sectionName);
      } else {
        newSet.add(sectionName);
      }
      return newSet;
    });
  };

  // Extract pre-content (intro text before first heading)
  const getPreContent = (text: string): string => {
    if (!text) return '';
    const lines = text.split('\n');
    const majorHeadings = [
      'Project Overview',
      'Project Purpose',
      'Key Features',
      'Key Features & Technical Highlights',
      'Technical Implementation',
      'Technical Architecture',
      'Technical Challenges Solved',
      'Development Practices',
      'Design Decisions',
      'Challenges & Solutions',
      'Project Highlights',
      'Project Impact',
    ];

    for (let i = 0; i < lines.length; i++) {
      if (majorHeadings.includes(lines[i].trim())) {
        return lines
          .slice(0, i)
          .filter((l) => l.trim() !== '')
          .join('\n');
      }
    }
    return '';
  };

  // Function to render collapsible sections (for left side)
  const renderCollapsibleSections = (text: string) => {
    if (!text) return null;

    const lines = text.split('\n');
    const sections: Array<{
      heading: string;
      content: string[];
      startIndex: number;
    }> = [];
    let currentSection: {
      heading: string;
      content: string[];
      startIndex: number;
    } | null = null;

    const majorHeadings = [
      'Project Overview',
      'Project Purpose',
      'Key Features',
      'Key Features & Technical Highlights',
      'Technical Implementation',
      'Technical Architecture',
      'Technical Challenges Solved',
      'Development Practices',
      'Design Decisions',
      'Challenges & Solutions',
      'Project Highlights',
      'Project Impact',
    ];

    let firstHeadingIndex = -1;

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      const isHeading = majorHeadings.includes(trimmedLine);

      if (isHeading) {
        if (firstHeadingIndex === -1) {
          firstHeadingIndex = index;
        }

        // Save previous section if exists
        if (currentSection) {
          sections.push({ ...currentSection });
        }

        // Start new section
        currentSection = {
          heading: trimmedLine,
          content: [],
          startIndex: index,
        };
      } else if (currentSection) {
        // Add content to current section
        currentSection.content.push(line);
      }
    });

    // Add last section
    if (currentSection) {
      sections.push(currentSection);
    }

    if (sections.length === 0) return null;

    const result: JSX.Element[] = [];

    // Render collapsible sections only
    sections.forEach((section, sectionIndex) => {
      const isExpanded = expandedSections.has(section.heading);
      const contentLines = section.content.filter((line) => line.trim() !== '');

      result.push(
        <div key={`section-${sectionIndex}`} className="mb-4">
          <button
            onClick={() => toggleSection(section.heading)}
            className="flex items-center gap-2 w-full text-left font-bold underline text-white text-xl md:text-2xl mt-6 mb-2 first:mt-0 hover:text-accent-400 transition-colors group">
            <HiChevronDown
              className={`w-5 h-5 transition-transform duration-300 ${
                isExpanded ? 'rotate-180' : ''
              }`}
            />
            {section.heading}
          </button>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden">
                <div className="pt-2 pb-4 pl-7">
                  {contentLines.map((line, lineIndex) => {
                    const trimmedLine = line.trim();
                    // Check if line is a subheading
                    if (
                      trimmedLine.endsWith(':') &&
                      trimmedLine.length > 5 &&
                      trimmedLine.length < 60
                    ) {
                      return (
                        <div
                          key={lineIndex}
                          className="font-semibold text-gray-100 text-lg md:text-xl mt-4 mb-2">
                          {trimmedLine}
                        </div>
                      );
                    }
                    return (
                      <div key={lineIndex} className="mb-2 text-gray-200">
                        {line}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    });

    return result;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container-custom section-padding pt-32">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors group">
          <HiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Home</span>
        </motion.button>

        {/* Project Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white flex-1">
              {project.title}
            </h1>
            <motion.button
              onClick={copyProjectLink}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 border border-gray-700 rounded-lg hover:bg-gray-700 hover:border-gray-600 transition-colors text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Copy project link">
              <HiClipboard className="w-4 h-4" />
              {linkCopied ? 'Copied!' : 'Copy Link'}
            </motion.button>
          </div>
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
          className="mb-16 max-w-[96.39rem] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {galleryImages.map((image, index) => {
              const caption =
                project.galleryCaptions?.[index] ||
                `${project.title} - View ${index + 1}`;
              return (
                <div key={index} className="flex flex-col">
                  <motion.button
                    onClick={() => {
                      setSelectedImage(image);
                      setModalImage(image);
                      setIsModalOpen(true);
                    }}
                    aria-label={`View ${caption} in full size`}
                    className={`relative overflow-hidden rounded-xl border-2 transition-all ${
                      selectedImage === image
                        ? 'border-accent-500 ring-2 ring-accent-500/50'
                        : 'border-gray-700 hover:border-gray-600'
                    } bg-gray-800 shadow-xl`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>
                    <img
                      src={image}
                      alt={caption}
                      className="w-full aspect-[5/4] object-cover"
                      loading="lazy"
                    />
                    {selectedImage === image && (
                      <div className="absolute inset-0 bg-accent-500/20" />
                    )}
                  </motion.button>
                  <p className="text-xs text-gray-400 mt-2 text-center">
                    {caption}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Description Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            About This Project
          </h2>
          <div className="w-24 h-1 bg-accent-500 mb-8 rounded-full" />
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Left Side - Regular Description */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-xl p-6 md:p-8 border border-gray-700/50 shadow-2xl backdrop-blur-sm">
              <div className="project-description text-gray-200 text-base md:text-lg leading-7 md:leading-8">
                {project.detailedDescription &&
                  getPreContent(project.detailedDescription) && (
                    <div className="mb-4 whitespace-pre-line">
                      {getPreContent(project.detailedDescription)}
                    </div>
                  )}
                <p className="whitespace-pre-line">{project.description}</p>
              </div>
            </div>

            {/* Right Side - Collapsible Sections */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-xl p-6 md:p-8 border border-gray-700/50 shadow-2xl backdrop-blur-sm">
              <div className="project-description text-gray-200 text-base md:text-lg leading-7 md:leading-8">
                {project.detailedDescription
                  ? renderCollapsibleSections(project.detailedDescription)
                  : null}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Project Links
          </h2>
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
                <FaGithub className="w-5 h-5" />
                View on GitHub
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setIsModalOpen(false);
              setModalImage('');
            }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            aria-label="Close image modal">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative inline-block max-h-[90vh] max-w-[90vw]">
              {/* Full Size Image */}
              <img
                src={modalImage}
                alt={`${project.title} - Full size view`}
                className="max-h-[90vh] max-w-[90vw] h-auto w-auto object-contain rounded-lg"
                loading="eager"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetail;
