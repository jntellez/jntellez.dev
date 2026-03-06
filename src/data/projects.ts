export interface Project {
  name: string;
  i18nKey: string;
  url: string;
  technologies: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    name: "glass-ui",
    i18nKey: "projects.glass-ui",
    url: "https://ui-glass.vercel.app",
    technologies: "Turborepo, React, Astro, Tailwind CSS.",
    githubUrl: "https://github.com/jntellez/glass-ui",
  },
  {
    name: "html-to-image",
    i18nKey: "projects.html-to-image",
    url: "https://htmltoimage3.vercel.app",
    technologies: "React, Vite, shadcn/ui.",
    githubUrl: "https://github.com/jntellez/html-to-image",
  },
  {
    name: "pixie",
    i18nKey: "projects.pixie",
    url: "https://pixie-link.vercel.app",
    technologies: "Next.js, Prisma, PostgreSQL.",
    githubUrl: "https://github.com/jntellez/pixie",
  },
  {
    name: "documind",
    i18nKey: "projects.documind",
    url: "https://github.com/jntellez/documind",
    technologies: "React Native, Expo, Hono.",
    githubUrl: "https://github.com/jntellez/documind",
  },
];
