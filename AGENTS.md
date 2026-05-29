# Project Overview
This is a Next.js application (version 16) built with React 19 and TypeScript, focused on implementing a custom design system for UI components. The project appears to be in early development stages, featuring a comprehensive theming system with CSS variables for colors, typography, spacing, and border radius. It includes dark mode support and follows an atomic design pattern with reusable components. The primary goal is to create a scalable, maintainable UI library or website with a consistent design language.

Core features include:
- Custom design system with CSS variables for theming
- Atomic component architecture (e.g., atoms/Button)
- Dark mode support
- TypeScript for type safety
- Tailwind CSS for utility-first styling

Technology Stack:
- Frontend: Next.js 16 (App Router), React 19, TypeScript 5
- Styling: Tailwind CSS 4 with custom CSS variables
- Linting: ESLint with Next.js configuration
- Fonts: Inter and Inter Tight from Google Fonts
- Icons: Solar Icons React

# Build and Test Commands
1. Install dependencies: `npm install` (or `bun install` if using Bun)
2. Run the development server: `npm run dev`
3. Build the project for production: `npm run build`
4. Start the production server: `npm run start`
5. Run linting: `npm run lint`

Note: The project uses Bun as evidenced by bun.lock, so `bun dev`, `bun build`, etc., are also supported.

# Code Style and Design Principles
This project uses ESLint and Prettier (via Next.js configuration). Run `npm run lint` to check for issues and enforce code style.

Design Principles:
- **Single Responsibility Principle (SOLID)**: Each component should have one clear purpose. For example, the Button component in `components/atoms/` handles only button rendering and styling.
- **DRY (Don't Repeat Yourself)**: Use reusable utilities like the `cn` function for class name concatenation. Leverage CSS variables for consistent theming across components.
- **Clean Code**: Use descriptive TypeScript interfaces (e.g., ButtonProps extends React.ButtonHTMLAttributes). Follow atomic design: organize components in atoms/, molecules/, organisms/ directories as the project grows.
- **Type Safety**: Strict TypeScript configuration is enabled. All components must be properly typed with interfaces for props.
- **Accessibility**: Include focus states and proper ARIA attributes where applicable. The Button component includes focus:ring styles.
- **Responsive Design**: Use CSS variables for spacing and typography that can adapt to different screen sizes.
- **Theming**: Always use CSS variables (e.g., var(--color-primary)) instead of hardcoded colors. Support both light and dark modes.

# Testing Instructions
Currently, no testing framework is set up. When adding tests:
- Use a testing library compatible with Next.js (e.g., Jest + React Testing Library)
- Place unit tests co-located with source files using .test.ts or .test.tsx extensions
- Aim for at least 80% code coverage
- Test components with different variants and props (e.g., Button with different sizes and variants)
- Include integration tests for page-level functionality as the app grows

# Security Considerations
- All user inputs must be validated and sanitized before processing
- Use environment variables for any sensitive configuration (API keys, secrets)
- Follow Next.js security best practices for API routes (if added later)
- Ensure proper Content Security Policy headers in production
- Validate and sanitize any dynamic content to prevent XSS attacks
- Use HTTPS in production deployments

# Additional Instructions
- **Commit Message Format**: Follow conventional commits (e.g., "feat: add new button variant", "fix: correct button focus styles")
- **Pull Request Guidelines**: Keep PRs focused and small. Include screenshots for UI changes. Ensure all linting passes.
- **Deployment**: Deploy to Vercel (recommended) or any static hosting. The build output is optimized for static generation.
- **Component Structure**: As the project grows, maintain the atomic design pattern: atoms (basic elements like Button), molecules (combinations), organisms (complex sections).
- **CSS Variables**: Always extend the design system in globals.css rather than adding inline styles. Use the @theme inline block for Tailwind integration.
- **Font Loading**: Use Next.js font optimization for performance.
- **Icons**: Use @solar-icons/react for consistent iconography.
- **File Organization**: Keep components in components/ directory, pages in app/, styles in app/globals.css, utilities in a utils/ directory (create if needed).
- **Performance**: Leverage Next.js Image component for optimized images, and ensure components are memoized where appropriate to prevent unnecessary re-renders.