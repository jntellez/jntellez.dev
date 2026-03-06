export interface StackCategory {
  key: string;
  items: string[];
}

export const stack: StackCategory[] = [
  {
    key: "stack.frontend",
    items: [
      "React",
      "Next.js",
      "Astro",
      "React Native",
      "Tailwind CSS",
      "TypeScript",
    ],
  },
  {
    key: "stack.backend",
    items: ["Node.js", "Express", "Hono", "Prisma"],
  },
  {
    key: "stack.databases",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    key: "stack.tools",
    items: ["Git", "Turborepo", "Docker", "Vite"],
  },
];
