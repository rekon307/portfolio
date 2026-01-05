"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const techIcons = [
  { name: "Python", icon: "python/python-original", desc: "AI agents, automation scripts, data pipelines" },
  { name: "TypeScript", icon: "typescript/typescript-original", desc: "Full-stack apps, type-safe APIs" },
  { name: "JavaScript", icon: "javascript/javascript-original", desc: "Browser automation, Node.js tools" },
  { name: "React", icon: "react/react-original", desc: "Interactive dashboards, web apps" },
  { name: "Next.js", icon: "nextjs/nextjs-original", desc: "Production websites, SSR apps" },
  { name: "Node.js", icon: "nodejs/nodejs-original", desc: "Backend services, CLI tools" },
  { name: "FastAPI", icon: "fastapi/fastapi-original", desc: "High-performance APIs, async services" },
  { name: "Flask", icon: "flask/flask-original", desc: "Lightweight APIs, webhooks" },
  { name: "PostgreSQL", icon: "postgresql/postgresql-original", desc: "Primary database, complex queries" },
  { name: "MongoDB", icon: "mongodb/mongodb-original", desc: "Document storage, flexible schemas" },
  { name: "Redis", icon: "redis/redis-original", desc: "Caching, real-time data, queues" },
  { name: "Docker", icon: "docker/docker-original", desc: "Containerized deployments, dev environments" },
  { name: "AWS", icon: "amazonwebservices/amazonwebservices-original-wordmark", desc: "Lambda, S3, SES, EC2" },
  { name: "Git", icon: "git/git-original", desc: "Version control, collaboration" },
  { name: "GitHub", icon: "github/github-original", desc: "CI/CD, Actions, collaboration" },
  { name: "Linux", icon: "linux/linux-original", desc: "Server management, shell scripting" },
  { name: "Selenium", icon: "selenium/selenium-original", desc: "Browser automation, testing" },
  { name: "Pandas", icon: "pandas/pandas-original", desc: "Data analysis, ETL pipelines" },
  { name: "Firebase", icon: "firebase/firebase-original", desc: "Auth, real-time databases" },
  { name: "Supabase", icon: "supabase/supabase-original", desc: "Postgres + auth + storage" },
  { name: "Vercel", icon: "vercel/vercel-original", desc: "Edge deployments, serverless" },
  { name: "Tailwind", icon: "tailwindcss/tailwindcss-original", desc: "Rapid UI development" },
  { name: "GraphQL", icon: "graphql/graphql-plain", desc: "Flexible APIs, efficient queries" },
  { name: "Bash", icon: "bash/bash-original", desc: "Automation scripts, system tasks" },
];

export function TechStack() {
  return (
    <section className="mb-20">
      <h2 className="text-2xl font-bold mb-8 text-center">Tech Stack</h2>
      <TooltipProvider delayDuration={100}>
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          {techIcons.map((tech) => (
            <Tooltip key={tech.name}>
              <TooltipTrigger asChild>
                <div className="group flex flex-col items-center gap-2 cursor-pointer">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-secondary/30 group-hover:bg-secondary/60 transition-colors">
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.icon}.svg`}
                      alt={tech.name}
                      className="w-9 h-9"
                    />
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="max-w-[200px]">
                <p className="font-semibold">{tech.name}</p>
                <p className="text-xs text-muted-foreground">{tech.desc}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </section>
  );
}
