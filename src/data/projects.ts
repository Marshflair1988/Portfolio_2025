import ecommerceImage from '../Assets/images/ecommerce.png';
import holidazeImage from '../Assets/images/holidaze.png';
import socialImage from '../Assets/images/social.png';

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
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with user authentication, product management, and payment integration.',
    detailedDescription: 'This comprehensive e-commerce platform provides a seamless shopping experience with advanced features including user authentication, secure payment processing, and an intuitive admin dashboard. Built with modern technologies, it offers real-time inventory management, order tracking, and a responsive design that works across all devices. The platform includes features like product search and filtering, shopping cart functionality, wishlist management, and customer reviews.',
    image: ecommerceImage,
    gallery: [ecommerceImage, ecommerceImage, ecommerceImage, ecommerceImage, ecommerceImage],
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    detailedDescription: 'A powerful task management application designed for teams to collaborate effectively. Features include real-time updates, drag-and-drop task organization, priority settings, deadline tracking, and team member assignments. The app supports multiple project boards, task filtering and sorting, comment threads, file attachments, and progress visualization. Built with a focus on user experience and productivity.',
    image: holidazeImage,
    gallery: [holidazeImage, holidazeImage, holidazeImage, holidazeImage, holidazeImage],
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Firebase'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with location-based forecasts and interactive data visualization.',
    detailedDescription: 'An elegant weather dashboard that provides comprehensive weather information with beautiful data visualizations. Features include location-based forecasts, hourly and daily weather predictions, interactive charts, weather maps, and detailed meteorological data. The dashboard supports multiple locations, weather alerts, and customizable widgets. The interface is designed to be both functional and visually appealing.',
    image: socialImage,
    gallery: [socialImage, socialImage, socialImage, socialImage, socialImage],
    tags: ['React', 'JavaScript', 'API', 'Chart.js'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Social Media Analytics',
    description: 'Analytics dashboard for tracking social media performance with detailed insights and reports.',
    detailedDescription: 'A comprehensive analytics dashboard for tracking and analyzing social media performance across multiple platforms. Features include engagement metrics, follower growth tracking, content performance analysis, best posting times, audience demographics, and detailed reporting. The dashboard provides actionable insights to help optimize social media strategy and improve engagement rates.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
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

