# Portfolio 2025

A modern, responsive portfolio website showcasing my projects and skills as a Frontend Developer. Built with React, TypeScript, and Tailwind CSS, featuring smooth animations, a fully functional contact form, and detailed project showcases.

## Features

- **Modern Design**: Clean, professional UI with smooth animations powered by Framer Motion
- **Responsive Layout**: Fully responsive design that works seamlessly across all devices
- **Project Showcase**: Detailed project pages with image galleries, descriptions, and links
- **Contact Form**: Integrated EmailJS contact form for direct communication
- **Smooth Navigation**: React Router for seamless page transitions
- **Accessibility**: ARIA labels, keyboard navigation, and semantic HTML
- **Performance Optimized**: Lazy loading images, optimized bundle size, and efficient rendering
- **Error Handling**: Production-ready error boundaries and graceful error handling
- **SEO Optimized**: Meta tags, Open Graph tags, and proper semantic structure

## Tech Stack

### Core Technologies

- **React 18.2.0** - Modern React with hooks and functional components
- **TypeScript 5.2.2** - Type-safe JavaScript for better code quality
- **Vite 5.0.8** - Fast build tool and development server
- **React Router DOM 7.10.1** - Client-side routing

### Styling & Animation

- **Tailwind CSS 3.4.0** - Utility-first CSS framework
- **Framer Motion 10.16.16** - Production-ready motion library for React

### Additional Libraries

- **EmailJS 4.4.1** - Email service integration
- **React Icons 4.12.0** - Popular icon library

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** package manager

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/marshflair1988/portfolio-2025.git
   cd portfolio-2025
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

   For EmailJS setup instructions, see the [EmailJS Documentation](https://www.emailjs.com/docs/).

4. **Start the development server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Customization

### Updating Personal Information

Edit `src/data/personal.ts` to update:

- Name, title, and bio
- Contact information
- Experience and education
- Interests

### Adding/Modifying Projects

Edit `src/data/projects.ts` to:

- Add new projects
- Update project descriptions
- Modify project images and galleries
- Update project links

### Styling

The project uses Tailwind CSS. Customize colors and styles in:

- `tailwind.config.js` - Tailwind configuration
- `src/styles/index.css` - Global styles and custom classes

## Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

## Configuration

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service (Gmail recommended)
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Add them to your `.env` file

### Environment Variables

| Variable                   | Description              |
| -------------------------- | ------------------------ |
| `VITE_EMAILJS_SERVICE_ID`  | Your EmailJS service ID  |
| `VITE_EMAILJS_TEMPLATE_ID` | Your EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY`  | Your EmailJS public key  |

## Testing

Run the linter to check code quality:

```bash
npm run lint
```

## Code Quality

This project follows modern best practices:

- TypeScript strict mode enabled
- ESLint configured for code quality
- No console.log statements in production
- Proper error handling with error boundaries
- Accessibility compliant (ARIA labels, keyboard navigation)
- Performance optimized (lazy loading, code splitting)
- SEO optimized (meta tags, semantic HTML)

## Contributing

This is a personal portfolio project. If you'd like to suggest improvements or report issues, please feel free to open an issue or submit a pull request.

## License

This project is private and personal. All rights reserved.

## Author

**Marsh Woolgar**

- Email: [marshwoolgar@gmail.com](mailto:marshwoolgar@gmail.com)
- LinkedIn: [linkedin.com/in/marshwoolgar](https://linkedin.com/in/marshwoolgar)
- GitHub: [@marshflair1988](https://github.com/marshflair1988)

## Acknowledgments

- [React](https://react.dev/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [EmailJS](https://www.emailjs.com/) - Email service

