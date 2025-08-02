# My Portfolio - Single Page Website

A modern, responsive single-page portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- **Single Page Layout**: All sections are on one page with smooth scrolling navigation
- **Modern Design**: Clean, professional design with gradient accents and animations
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Interactive Navigation**: Smart navbar that highlights the current section
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Beautiful project cards with links to live demos and code
- **Skills Section**: Visual representation of technical skills
- **Social Links**: Integration with GitHub, LinkedIn, and other social platforms

## Sections

1. **Home**: Hero section with introduction and call-to-action buttons
2. **About**: Personal information and background
3. **Projects**: Portfolio of work with project details
4. **Skills**: Technical skills and expertise
5. **Contact**: Contact form and social media links

## Technologies Used

- **React 19**: Latest React with hooks and functional components
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for smooth transitions
- **Lucide React**: Beautiful icon library
- **Vite**: Fast build tool and development server

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## Customization

### Personal Information
Update the following files with your information:
- `src/components/Home.tsx`: Change "Your Name" to your actual name
- `src/components/About.tsx`: Update your bio and background
- `src/components/Projects.tsx`: Add your projects
- `src/components/Skills.tsx`: Update your skills
- `src/components/Contact.tsx`: Update contact information

### Styling
- Colors and gradients can be customized in the Tailwind classes
- Animation timing can be adjusted in the Framer Motion configurations
- Layout spacing is controlled by Tailwind's spacing utilities

### Adding New Sections
To add a new section:
1. Create a new component in `src/components/`
2. Add the section to `src/App.tsx` with an appropriate ID
3. Update the navigation in `src/components/Navbar.tsx`
4. Add the section link to `src/components/Footer.tsx`

## Navigation

The website uses smooth scrolling navigation:
- **Desktop**: Fixed navbar with section highlighting
- **Mobile**: Collapsible hamburger menu
- **Footer**: Quick links to all sections
- **Scroll Detection**: Automatically highlights the current section in the navbar

## Performance

- Optimized with Vite for fast development and builds
- Lazy loading of components for better performance
- Minimal bundle size with tree shaking
- Responsive images and optimized assets

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## License

This project is open source and available under the MIT License.
