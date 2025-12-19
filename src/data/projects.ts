import ecommerceImage from '../Assets/images/ecommerce.png';
import holidazeImage from '../Assets/images/holidaze.png';
import socialImage from '../Assets/images/social.png';
import socialimagecontainer from '../Assets/images/socialimagecontainer.png';
import socialstrendingcontainer from '../Assets/images/socialstrendingcontainer.png';
import socialprofile from '../Assets/images/socialprofile.png';

export interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription?: string;
  image: string;
  gallery?: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Store',
    description:
      'A full-stack e-commerce solution with user authentication, product management, and payment integration.',
    detailedDescription:
      'This comprehensive e-commerce platform provides a seamless shopping experience with advanced features including user authentication, secure payment processing, and an intuitive admin dashboard. Built with modern technologies, it offers real-time inventory management, order tracking, and a responsive design that works across all devices. The platform includes features like product search and filtering, shopping cart functionality, wishlist management, and customer reviews.',
    image: ecommerceImage,
    gallery: [
      ecommerceImage,
      ecommerceImage,
      ecommerceImage,
      ecommerceImage,
      ecommerceImage,
    ],
    tags: ['React', 'TypeScript', 'API'],
    liveUrl: 'https://ecommercestore-jsframeworksassignment.netlify.app/',
    githubUrl: 'https://github.com/Marshflair1988/ecommerce-store',
  },
  {
    id: 2,
    title: 'Holidaze',
    description:
      'A collaborative task management application with real-time updates and team collaboration features.',
    detailedDescription:
      'A powerful task management application designed for teams to collaborate effectively. Features include real-time updates, drag-and-drop task organization, priority settings, deadline tracking, and team member assignments. The app supports multiple project boards, task filtering and sorting, comment threads, file attachments, and progress visualization. Built with a focus on user experience and productivity.',
    image: holidazeImage,
    gallery: [
      holidazeImage,
      holidazeImage,
      holidazeImage,
      holidazeImage,
      holidazeImage,
    ],
    tags: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'API'],
    liveUrl: 'https://holidazeprojectexam2.netlify.app/',
    githubUrl: 'https://github.com/Marshflair1988/Project-Exam-2-Holidaze',
  },
  {
    id: 3,
    title: 'Social Connect',
    description:
      'A beautiful weather dashboard with location-based forecasts and interactive data visualization.',
    detailedDescription: `SocialConnect is a responsive social media web application built with vanilla HTML, CSS, and JavaScript, styled with Tailwind CSS. It demonstrates modern front-end development practices and responsive design.

Project Overview

The application includes three main pages: an authentication page with login and registration, a social feed for browsing and creating posts, and a user profile page with social features. The project emphasizes clean code, accessibility, and a mobile-first approach.

Key Features
Authentication System
Dual-form interface (login/register) with tab switching
Real-time form validation with error messages
Email format validation and password strength requirements (minimum 8 characters)
Password visibility toggles
HTML5 validation attributes combined with JavaScript validation
Social Feed
Post browsing with thumbnails
Search functionality
Sort options (Recent, Popular, Trending)
Post creation form with media attachment options
Interactive post elements (like, comment, share buttons)
User Profile
Profile header with image and user information
Statistics display (posts, followers, following)
Follow/unfollow functionality
Lists of followers and following
User post history with engagement metrics
Responsive Design
Mobile-first approach using Tailwind CSS breakpoints
Collapsible navigation menu for mobile devices
Responsive grid layouts that adapt to screen size
Touch-friendly interface elements
Back-to-top button for mobile users
Technical Implementation
Technologies & Tools
HTML5: Semantic markup with accessibility considerations
Tailwind CSS v3.4.17: Utility-first CSS framework for rapid styling
Vanilla JavaScript: No frameworks, demonstrating core JavaScript skills
JSDoc: Comprehensive code documentation
Git: Version control with feature branch workflow
Development Practices
Mobile-first responsive design
Form validation with real-time feedback
Accessible UI components (ARIA labels, semantic HTML)
Clean, maintainable code structure
Comprehensive error handling
Design Decisions
The design uses an indigo color scheme for a modern, cohesive look. The interface prioritizes clarity and usability, with clear visual hierarchy and consistent spacing. Forms provide immediate feedback, and the responsive layout ensures a consistent experience across devices.
Challenges & Solutions
Form Validation: Implemented real-time validation that provides immediate feedback while maintaining HTML5 validation for accessibility and browser compatibility.
Responsive Navigation: Created a mobile menu that smoothly transitions between mobile and desktop views, ensuring usability across all screen sizes.
Code Organization: Structured JavaScript with JSDoc comments for maintainability and clear separation of concerns.
Project Highlights
Fully responsive across mobile, tablet, and desktop
Accessible with semantic HTML and ARIA attributes
Clean, documented codebase
Modern UI with Tailwind CSS
Real-time form validation
Mobile-optimized user experience
This project demonstrates proficiency in modern web development, responsive design, and user experience design, suitable for production-ready applications.`,
    image: socialImage,
    gallery: [
      socialstrendingcontainer,
      socialimagecontainer,
      socialprofile,
      socialImage,
      socialImage,
    ],
    tags: ['HTML5', 'TailwindCSS'],
    liveUrl: 'https://cssframeworksmarsh.netlify.app/profile/',
    githubUrl: 'https://github.com/Marshflair1988/CSSframeworksCS',
  },
  {
    id: 4,
    title: 'Coming Soon',
    description:
      'Analytics dashboard for tracking social media performance with detailed insights and reports.',
    detailedDescription:
      'A comprehensive analytics dashboard for tracking and analyzing social media performance across multiple platforms. Features include engagement metrics, follower growth tracking, content performance analysis, best posting times, audience demographics, and detailed reporting. The dashboard provides actionable insights to help optimize social media strategy and improve engagement rates.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    ],
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'D3.js'],
    liveUrl: '#',
    githubUrl: '#',
  },
];
