import ecommerceImage from '../Assets/images/ecommerce/ecommerce.png';
import ecommerceShoppingCart from '../Assets/images/ecommerce/shoppingcart.png';
import ecommerceOrderSuccessful from '../Assets/images/ecommerce/ordersuccesful.png';
import ecommerceContact from '../Assets/images/ecommerce/contact.png';
import ecommerceEarrings from '../Assets/images/ecommerce/ecommerce-earrings.png';
import holidazeImage from '../Assets/images/holidaze/holidaze.png';
import holidazeHomepageFooter from '../Assets/images/holidaze/homepagefooter.png';
import holidazeConfirmBooking from '../Assets/images/holidaze/confirmbooking.png';
import holidazeBookingConfirmed from '../Assets/images/holidaze/bookingconfirmed.png';
import holidazeUserBooking from '../Assets/images/holidaze/userbooking.png';
import socialImage from '../Assets/images/socialconnect/social.png';
import socialimagecontainer from '../Assets/images/socialconnect/socialimagecontainer.png';
import socialstrendingcontainer from '../Assets/images/socialconnect/socialstrendingcontainer.png';
import socialprofile from '../Assets/images/socialconnect/socialprofile.png';
import socialnavigation from '../Assets/images/socialconnect/socialnavigation.png';

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
    githubUrl: 'https://github.com/Marshflair1988/ecommerce-store',
  },
  {
    id: 2,
    title: 'Holidaze',
    description:
      'A full-featured accommodation booking platform connecting travelers with unique venues. Built with React and TypeScript.',
    detailedDescription: `Project Purpose

The application serves two distinct user types: customers seeking accommodations and venue managers managing their properties. Customers can browse venues, search by location and dates, view detailed property information, and make bookings. Venue managers have a comprehensive dashboard to create, edit, and delete their venues, manage bookings, and track their business.

Key Features & Technical Highlights
User Experience
Intelligent Search System: Home page search bar with city and date filtering that redirects to filtered venue listings
Real-time Availability: Dynamic calendar integration that automatically excludes booked dates and prevents double-booking
Responsive Design: Fully responsive UI built with Tailwind CSS, ensuring optimal experience across all devices
Modal-based Interactions: Seamless user flows through modals for bookings, profile updates, and venue management

Customer Features
Complete booking lifecycle: create, view, edit, and cancel bookings
Profile management with avatar updates via image URL integration
Upcoming bookings dashboard with automatic filtering of past dates
Advanced venue filtering by location, price, guest capacity, and amenities

Venue Manager Features
Comprehensive venue management: create, edit, and delete properties
Booking management dashboard showing all upcoming bookings across owned venues
Profile customization with avatar and banner updates
Account deletion functionality with proper data cleanup

Technical Architecture
Built with a modern tech stack emphasizing type safety, performance, and developer experience:
React 18.2.0 with TypeScript for robust, type-safe component architecture
Vite 5.0.8 for lightning-fast development and optimized production builds
React Router DOM 6.20.0 for client-side routing with protected routes
Tailwind CSS 3.4.0 for utility-first styling with custom design system
React DatePicker for intuitive date selection with custom validation

Technical Challenges Solved
API Integration Complexity
Implemented comprehensive REST API client with proper error handling and token management
Built pagination system to fetch all venues across multiple API pages
Created flexible API service layer supporting multiple endpoints with consistent error handling
Implemented Bearer token authentication with localStorage persistence

State Management & Data Flow
Managed complex state for bookings, venues, and user profiles across multiple components
Implemented real-time calendar updates when bookings are created or modified
Built filtering and search functionality that maintains state through URL parameters
Created seamless data synchronization between venue details and booking calendars

User Experience Optimization
Developed date picker validation that prevents booking conflicts
Implemented automatic filtering to show only future bookings
Built responsive modal system for various user interactions
Created intuitive navigation flows between search, browsing, and booking

Development Practices
TypeScript: Full type safety throughout the application with strict TypeScript configuration
ESLint: Code quality enforcement with TypeScript-specific linting rules
Performance: Optimized builds with Vite and Lighthouse validation for accessibility and performance
Code Organization: Modular component structure with separation of concerns (pages, components, services)

Project Impact
This project showcases proficiency in building production-ready React applications with complex business logic, real-time data synchronization, and intuitive user interfaces. It demonstrates the ability to work with external APIs, implement authentication flows, manage application state effectively, and create polished user experiences that handle edge cases gracefully.`,
    image: holidazeImage,
    gallery: [
      holidazeImage,
      holidazeUserBooking,
      holidazeHomepageFooter,
      holidazeConfirmBooking,
      holidazeBookingConfirmed,
    ],
    galleryCaptions: [
      'Holidaze Homepage',
      'User Booking Dashboard',
      'Homepage Footer Section',
      'Confirm Booking Modal',
      'Booking Confirmation Page',
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
    githubUrl: 'https://github.com/Marshflair1988/CSSframeworksCS',
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
