# Prince Gautam Portfolio

A modern, futuristic portfolio website for Front-end Developer Prince Gautam, built with Next.js 14, Tailwind CSS, TypeScript, and Framer Motion.

<!-- Replace with actual screenshot once site is deployed -->
<!-- ![Portfolio Preview](public/preview.jpg) -->

## Features

- Responsive design for all devices
- Dark mode by default with futuristic UI elements
- Smooth animations and transitions using Framer Motion
- Optimized for performance and SEO
- Modular component architecture

## Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe code
- **Tailwind CSS**: Utility-first CSS for styling
- **Framer Motion**: Animation library
- **Vercel**: Deployment platform (recommended)

## Sections

1. **Home**: Hero section with introduction
2. **About**: Personal information and bio
3. **Skills**: Technical skills showcase
4. **Projects**: Portfolio of completed projects
5. **Experience**: Work experience and education
6. **Contact**: Contact form and information

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/princegautam1/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Personal Information

To update personal information, edit the following files:

- `src/components/sections/Hero.tsx`: Update name, title
- `src/components/sections/About.tsx`: Update bio information
- `src/components/sections/Skills.tsx`: Update skills list
- `src/components/sections/Projects.tsx`: Update projects list
- `src/components/sections/Experience.tsx`: Update work experience and education
- `src/components/sections/Contact.tsx`: Update contact information

### Styling

The project uses Tailwind CSS for styling. You can customize the colors, fonts, and other design elements by editing:

- `src/app/globals.css`: Global CSS and variables
- `tailwind.config.ts`: Tailwind configuration

### Adding New Projects

To add new projects, update the `projects` array in `src/components/sections/Projects.tsx`:

```typescript
const projects = [
  {
    title: "Project Name",
    description: "Project description here...",
    image: "/projects/project-image.jpg",
    tags: ["React", "Next.js", "TypeScript"],
    liveUrl: "https://project-url.com",
    githubUrl: "https://github.com/username/project"
  },
  // Add more projects...
];
```

## Deployment

The easiest way to deploy this portfolio is using [Vercel](https://vercel.com), the platform built by the creators of Next.js.

1. Push your code to a GitHub repository
2. Import the project to Vercel
3. Deploy!

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- Design inspiration from modern portfolio websites
- Next.js documentation and examples
- Tailwind CSS community
- Framer Motion examples
