import ecommerceImage from '../Assets/images/ecommerce/ecommerce.png';
import ecommerceShoppingCart from '../Assets/images/ecommerce/shoppingcart.png';
import ecommerceOrderSuccessful from '../Assets/images/ecommerce/ordersuccesful.png';
import ecommerceContact from '../Assets/images/ecommerce/contact.png';
import ecommerceEarrings from '../Assets/images/ecommerce/ecommerce-earrings.png';
import socialImage from '../Assets/images/socialconnect/social.png';
import socialimagecontainer from '../Assets/images/socialconnect/socialimagecontainer.png';
import socialstrendingcontainer from '../Assets/images/socialconnect/socialstrendingcontainer.png';
import socialprofile from '../Assets/images/socialconnect/socialprofile.png';
import socialnavigation from '../Assets/images/socialconnect/socialnavigation.png';
import bidhiveHome from '../Assets/images/bidhive/bidhivehome.png';
import bidhiveAbout from '../Assets/images/bidhive/bidhiveabout.png';
import bidhiveListings from '../Assets/images/bidhive/bidhivelistings.png';
import bidhiveProfile from '../Assets/images/bidhive/bidhiveprofile.png';
import bidhiveProfilePic from '../Assets/images/bidhive/bidhiveprofilepic.png';

export interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription?: string;
  image: string;
  gallery?: string[];
  galleryCaptions?: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Store',
    description:
      'A full-stack e-commerce solution with user authentication, product management, and the roadmap to payment integration.',
    detailedDescription: `This e-commerce application is a full-featured online shopping platform built from the ground up using modern React and TypeScript. The project demonstrates advanced frontend development skills, including state management, API integration, responsive design, and comprehensive testing practices.

Project Overview

The application provides a complete shopping experience with a product catalog, detailed product pages, shopping cart functionality, and a streamlined checkout process. Built with React 19 and TypeScript, the project showcases professional-grade code organization, type safety, and user experience design.

Key Features
Product Management
Dynamic product catalog with image galleries, pricing, and ratings
Detailed product pages featuring reviews, tags, and comprehensive product information
Real-time search functionality with instant filtering
Advanced sorting capabilities (by name and price, ascending/descending)

Shopping Cart
Persistent cart state management using React Context API
Add, remove, and update item quantities
Real-time cart total calculations with support for discounted pricing
Visual cart icon with item count indicator

User Experience
Fully responsive design optimized for mobile, tablet, and desktop
Custom toast notification system for user feedback
Smooth page transitions and loading states
Contact form with comprehensive client-side validation
Checkout success confirmation page

Technical Implementation
Architecture & State Management
The application uses React Context API with useReducer for centralized state management. The cart state is managed through a reducer pattern, ensuring predictable state updates and maintaining data consistency across components. A custom toast notification system provides user feedback for all cart operations and form submissions.

Type Safety
Full TypeScript implementation with comprehensive type definitions for all data structures, API responses, component props, and context values. This ensures compile-time error detection and improves code maintainability and developer experience.

Styling & Design
Styled-components provide component-scoped CSS-in-JS styling, enabling dynamic theming and responsive design patterns. The application follows a mobile-first approach with breakpoints optimized for various screen sizes.

API Integration
RESTful API integration with the Noroff Online Shop API, featuring robust error handling, loading states, and type-safe data fetching. All API responses are fully typed, ensuring data integrity throughout the application.

Testing
Comprehensive test suite with 91% pass rate using Jest and React Testing Library. Tests cover component rendering, user interactions, context functionality, form validation, and routing behavior. Custom mocks and test utilities ensure reliable and maintainable test coverage.

Technologies & Tools
Frontend Framework: React 19.1.1
Language: TypeScript 4.9.5
Styling: Styled-components 6.1.19
Routing: React Router DOM 7.8.2
State Management: React Context API with useReducer
Testing: Jest, React Testing Library, @testing-library/user-event
Build Tool: Create React App
Code Quality: ESLint, Prettier
API: Noroff Online Shop REST API

Development Highlights
The project demonstrates proficiency in modern React patterns including custom hooks, context providers, and component composition. Code follows strict TypeScript conventions with explicit interfaces, avoiding any types, and comprehensive type coverage. The application architecture emphasizes separation of concerns with organized component, context, and page structures.
All code adheres to professional standards including consistent 2-space indentation, semantic HTML, accessibility considerations, and clean code principles. The project showcases the ability to build production-ready applications with attention to user experience, code quality, and maintainability.`,
    image: ecommerceImage,
    gallery: [
      ecommerceImage,
      ecommerceShoppingCart,
      ecommerceOrderSuccessful,
      ecommerceContact,
      ecommerceEarrings,
    ],
    galleryCaptions: [
      'E-Commerce Store Homepage',
      'Shopping Cart with Items',
      'Order Success Confirmation',
      'Contact Form',
      'Product Detail Page',
    ],
    tags: ['React', 'TypeScript', 'API'],
    liveUrl: 'https://ecommercestore-jsframeworksassignment.netlify.app/',
    githubUrl: 'https://github.com/Marshflair1988/ecommerce-store/tree/master',
  },
  {
    id: 2,
    title: 'BidHive',
    description:
      'A modern, responsive auction house platform for online auctions. Built with HTML, CSS, and JavaScript, featuring real-time bidding and user management.',
    detailedDescription: `Project Purpose

BidHive is a comprehensive auction house web application that provides a platform for users to browse, bid on, and create auction listings. The application serves auction enthusiasts and sellers, enabling them to participate in online auctions with a credit-based bidding system and comprehensive listing management.

Key Features & Technical Highlights
User Authentication
Secure login and registration system with email validation (@stud.noroff.no requirement)
Profile management with avatar and banner customization
Credit system: Users receive 1,000 credits upon registration for bidding
JWT-based authentication with persistent sessions stored in localStorage
Protected routes and API endpoints ensuring secure access

Auction Listings
Browse active auctions with pagination support
Featured listings displayed on homepage
Detailed item views with image galleries
Real-time bidding system with complete bid history tracking
Advanced search and filter functionality
Sort options: newest, ending soon, or most bids
Filter by active/ended status

User Dashboard
View and manage personal listings
Track bids and auction status across all listings
Credit balance management and display
Active bids tracking with real-time updates
Profile customization: avatar, banner, and bio updates

Responsive Design
Mobile-first approach ensuring optimal experience
Fully responsive across all device sizes (mobile, tablet, desktop)
Modern UI built with Tailwind CSS utility classes
Accessible mobile navigation menu
Consistent layout structure across all pages

Error Handling & User Feedback
Centralized error handling system (errorHandler.js)
User-friendly error messages with proper HTTP status code handling
Loading states for all async operations
Success notifications with auto-dismiss functionality
Network error detection and recovery mechanisms
Empty state handling for improved user experience

Technical Architecture
Built with vanilla web technologies emphasizing performance and maintainability:
HTML5: Semantic markup with accessibility considerations
CSS3: Tailwind CSS for utility-first styling and responsive design
JavaScript (ES6+): Modular architecture with ES6 modules
Font Awesome 6.4.0: Icon library for consistent UI elements
Noroff API v2: RESTful API for auction data and authentication
JWT Authentication: Secure token-based authentication system

Technical Challenges Solved
API Integration Complexity
Implemented comprehensive REST API client with proper error handling
Built pagination system to fetch all listings across multiple API pages
Created flexible API service layer (apiClient.js) supporting multiple endpoints
Implemented Bearer token authentication with localStorage persistence
Handled CORS and network error scenarios gracefully

State Management & Data Flow
Managed complex state for listings, bids, and user profiles across multiple pages
Implemented real-time bid updates when new bids are placed
Built filtering and search functionality that maintains state
Created seamless data synchronization between listing details and bid history
Handled credit deduction and balance updates in real-time

User Experience Optimization
Developed bid validation that prevents bidding on own listings
Implemented automatic filtering to show only active auctions
Built responsive modal system for various user interactions
Created intuitive navigation flows between browsing, bidding, and profile management
Optimized image loading and display for better performance

Development Practices
Modular JavaScript: ES6+ modules with clear separation of concerns
Error Handling: Centralized error handling system for consistent user feedback
Code Organization: Well-structured file organization (pages, js modules, utils)
Accessibility: Semantic HTML, ARIA labels, keyboard navigation support
Performance: Optimized images, efficient DOM manipulation, minimal dependencies

Project Impact
This project demonstrates proficiency in building production-ready web applications using vanilla JavaScript and modern web standards. It showcases the ability to work with external REST APIs, implement secure authentication flows, manage complex application state, and create polished user experiences that handle edge cases gracefully. The project highlights skills in responsive design, error handling, and creating intuitive user interfaces without relying on modern frameworks.`,
    image: bidhiveHome,
    gallery: [
      bidhiveHome,
      bidhiveListings,
      bidhiveAbout,
      bidhiveProfile,
      bidhiveProfilePic,
    ],
    galleryCaptions: [
      'BidHive Homepage',
      'Listings Page',
      'About Page',
      'User Profile',
      'Profile Picture',
    ],
    tags: ['HTML5', 'JavaScript', 'TailwindCSS', 'API'],
    liveUrl: 'https://auctionhousebidhive.netlify.app/',
    githubUrl: 'https://github.com/Marshflair1988/AuctionHouseSemesterProject',
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
      socialnavigation,
    ],
    galleryCaptions: [
      'Trending Posts Section',
      'Image Container with Posts',
      'User Profile Page',
      'Social Feed Main View',
      'Navigation Menu',
    ],
    tags: ['HTML5', 'TailwindCSS'],
    liveUrl: 'https://cssframeworksmarsh.netlify.app/profile/',
    githubUrl:
      'https://github.com/Marshflair1988/CSSframeworksCS/blob/main/README.md',
  },
  {
    id: 4,
    title: 'Coming Soon',
    description:
      'This project is under development and will be available to view soon',
    detailedDescription: 'Description coming soon',
    image:
      'https://images.unsplash.com/photo-1636654129379-e7ae6f30bfd0?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gallery: [
      'https://images.unsplash.com/photo-1636654129379-e7ae6f30bfd0?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1636654129379-e7ae6f30bfd0?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1636654129379-e7ae6f30bfd0?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1636654129379-e7ae6f30bfd0?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1636654129379-e7ae6f30bfd0?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'D3.js'],
    liveUrl: '#',
    githubUrl: 'https://www.github.com',
  },
];
