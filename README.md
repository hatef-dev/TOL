# TOL Website

A professional Next.js application built with React 19 and TypeScript, featuring a custom design system for UI components.

## Overview

This is a Next.js application (version 16) built with React 19 and TypeScript, focused on implementing a custom design system for UI components. The project features a comprehensive theming system with CSS variables for colors, typography, spacing, and border radius, including dark mode support. It follows an atomic design pattern with reusable components.

## Demo
![Banner](./public/topOrganicLeads.png)
![Banner](./public/Tol.png)


## Features

- **Custom Design System**: CSS variables for theming with light/dark mode support
- **Atomic Component Architecture**: Organized components following atoms/molecules/organisms pattern
- **TypeScript**: Strict type safety throughout the application
- **Tailwind CSS 4**: Utility-first styling with custom CSS variable integration
- **Framer Motion & GSAP**: Advanced animations for enhanced user experience
- **Icon Libraries**: Heroicons, Lucide React, and Solar Icons for consistent iconography
- **International Phone Input**: React-international-phone for global phone number handling
- **Data Visualization**: Recharts for interactive charts and graphs
- **Performance Optimized**: Next.js font optimization and Image component
- **ESLint & Prettier**: Code quality and formatting enforcement

## Tech Stack

### Frontend
- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://reactjs.org)
- [TypeScript 5](https://www.typescriptlang.org)

### Styling
- [Tailwind CSS 4](https://tailwindcss.com) with custom CSS variables
- CSS Variables for theme colors, typography, spacing, and border radius

### Dependencies
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [GSAP](https://greensock.com/gsap/) - Advanced animation platform
- [Heroicons](https://heroicons.com) & [Lucide React](https://lucide.dev) - Icon sets
- [@solar-icons/react](https://www.npmjs.com/package/@solar-icons/react) - Solar Icons
- [react-international-phone](https://www.npmjs.com/package/react-international-phone) - Phone input
- [Recharts](https://recharts.org) - Charting library

### Dev Tools
- [ESLint](https://eslint.org) with Next.js configuration
- [PostCSS](https://postcss.org) with TailwindCSS
- [TypeScript](https://www.typescriptlang.org) for type checking

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/tol-website.git
   cd tol-website
   ```

2. **Install dependencies**
   Using npm:
   ```bash
   npm install
   ```
   
   Using Bun (recommended):
   ```bash
   bun install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory (if needed):
   ```env
   # Add your environment variables here
   NEXT_PUBLIC_EXAMPLE_VAR=your_value
   ```

4. **Run the development server**
   ```bash
   # Using npm
   npm run dev
   
   # Using Bun
   bun dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application.

## Environment Variables

The application uses environment variables for configuration. Create a `.env.local` file in the root directory:

```env
# Example environment variables
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

> **Note**: Never commit `.env.local` to version control. Add it to your `.gitignore` file.

## Project Structure

```
tol-website/
├── .next/                  # Next.js build output
├── app/                    # Application routes and pages
│   ├── Article/            # Article pages
│   ├── Author/             # Author pages
│   ├── Optimization/       # Optimization pages
│   ├── Resources/          # Resources pages
│   ├── Testimonials/       # Testimonials pages
│   ├── favicon.ico         # Favicon
│   ├── globals.css         # Global styles and CSS variables
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── test.tsx            # Test page
├── components/             # Reusable UI components
│   └── atoms/              # Atomic components (e.g., Button)
├── data/                   # Data files and utilities
├── public/                 # Static assets
├── node_modules/           # Project dependencies
├── .gitignore              # Git ignore file
├── AGENTS.md               # Agent instructions and guidelines
├── bun.lock                # Bun lockfile
├── eslint.config.mjs       # ESLint configuration
├── Makefile                # Makefile for common tasks
├── next-env.d.ts           # TypeScript declarations for Next.js
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies and scripts
├── package-lock.json       # NPM lockfile
├── postcss.config.mjs      # PostCSS configuration
├── README.md               # This file
└── tsconfig.json           # TypeScript configuration
```

## Available Scripts

In the `package.json` file, you can run the following scripts:

| Script | Description |
|--------|-------------|
| `npm run dev` | Starts the development server at `http://localhost:3000` |
| `npm run build` | Builds the application for production |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs ESLint to check for code issues |
| `bun dev` | Start development server with Bun |
| `bun build` | Build for production with Bun |
| `bun start` | Start production server with Bun |

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

### Deploy with Vercel

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Vercel will automatically detect it's a Next.js app and configure the build settings
4. Click "Deploy" and your site will be live!

### Alternative Deployment Options

- **Netlify**: [Deploy to Netlify](https://docs.netlify.com/site-deploys/create-deploys/)
- **AWS Amplify**: [Amplify Hosting](https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html)
- **Docker**: Containerize and deploy anywhere
- **Self-hosted**: Run `npm run start` after building with `npm run build`

For detailed deployment instructions, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## License

This project is private and not currently licensed for public use. If you plan to open-source this project, please add an appropriate license file (e.g., MIT, Apache-2.0) and update this section accordingly.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

If you have any questions or feedback, please open an issue on GitHub.

---

*Built with Next.js, React, and TypeScript*