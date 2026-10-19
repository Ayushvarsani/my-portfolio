const icon = (name, style = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${style}.svg`;

export const skillGroups = [
  {
    title: "Frontend Development",
    description: "Interfaces that stay clear and consistent on every screen size",
    items: [
      { name: "React.js", icon: icon("react") },
      { name: "Next.js", icon: icon("nextjs") },
      { name: "TypeScript", icon: icon("typescript") },
      { name: "JavaScript", icon: icon("javascript") },
      { name: "Angular", icon: icon("angularjs") },
      { name: "HTML5", icon: icon("html5") },
      { name: "CSS3", icon: icon("css3") },
      { name: "Bootstrap", icon: icon("bootstrap") },
      { name: "Material UI", icon: icon("materialui") },
      { name: "Vite", icon: icon("vitejs") },
      { name: "PrimeReact" },
      { name: "PrimeNG" },
    ],
  },
  {
    title: "Backend Development",
    description: "APIs and services structured so features can grow without a rewrite",
    items: [
      { name: "Node.js", icon: icon("nodejs") },
      { name: "NestJS", icon: icon("nestjs") },
      { name: "Express.js", icon: icon("express") },
      { name: ".NET", icon: icon("dotnetcore") },
      { name: "Python", icon: icon("python") },
      { name: "GraphQL", icon: icon("graphql", "plain") },
    ],
  },
  {
    title: "Databases",
    description: "Relational data, queries, and storage used in production apps",
    items: [
      { name: "PostgreSQL", icon: icon("postgresql") },
      { name: "SQL Server", icon: icon("microsoftsqlserver", "plain") },
    ],
  },
  {
    title: "Cloud & DevOps",
    description: "Hosting, pipelines, and access control for reliable releases",
    items: [
      { name: "AWS", icon: icon("amazonwebservices", "plain-wordmark") },
      { name: "Azure", icon: icon("azure") },
      { name: "GitHub Actions", icon: icon("githubactions") },
    ],
  },
  {
    title: "Development Tools",
    description: "Day-to-day tools for source control, APIs, and delivery",
    items: [
      { name: "Git", icon: icon("git") },
      { name: "GitHub", icon: icon("github") },
      { name: "VS Code", icon: icon("vscode") },
      { name: "Postman", icon: icon("postman") },
      { name: "Swagger" },
      { name: "Jira" },
    ],
  },
  {
    title: "AI Tools",
    description: "Assistants I use for coding, debugging, and faster iteration",
    items: [
      { name: "Cursor" },
      { name: "Claude" },
      { name: "ChatGPT" },
      { name: "Gemini" },
    ],
  },
];
