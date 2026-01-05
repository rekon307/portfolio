"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

const techIcons = [
  { name: "Python", icon: "python/python-original", desc: "AI agents, automation scripts, data pipelines", category: "Language" },
  { name: "TypeScript", icon: "typescript/typescript-original", desc: "Full-stack apps, type-safe APIs", category: "Language" },
  { name: "JavaScript", icon: "javascript/javascript-original", desc: "Browser automation, Node.js tools", category: "Language" },
  { name: "React", icon: "react/react-original", desc: "Interactive dashboards, web apps", category: "Frontend" },
  { name: "Next.js", icon: "nextjs/nextjs-original", desc: "Production websites, SSR apps", category: "Frontend" },
  { name: "Node.js", icon: "nodejs/nodejs-original", desc: "Backend services, CLI tools", category: "Backend" },
  { name: "FastAPI", icon: "fastapi/fastapi-original", desc: "High-performance APIs, async services", category: "Backend" },
  { name: "Flask", icon: "flask/flask-original", desc: "Lightweight APIs, webhooks", category: "Backend" },
  { name: "PostgreSQL", icon: "postgresql/postgresql-original", desc: "Primary database, complex queries", category: "Database" },
  { name: "MongoDB", icon: "mongodb/mongodb-original", desc: "Document storage, flexible schemas", category: "Database" },
  { name: "Redis", icon: "redis/redis-original", desc: "Caching, real-time data, queues", category: "Database" },
  { name: "Docker", icon: "docker/docker-original", desc: "Containerized deployments, dev environments", category: "DevOps" },
  { name: "AWS", icon: "amazonwebservices/amazonwebservices-original-wordmark", desc: "Lambda, S3, SES, EC2", category: "Cloud" },
  { name: "Git", icon: "git/git-original", desc: "Version control, collaboration", category: "DevOps" },
  { name: "GitHub", icon: "github/github-original", desc: "CI/CD, Actions, collaboration", category: "DevOps" },
  { name: "Linux", icon: "linux/linux-original", desc: "Server management, shell scripting", category: "DevOps" },
  { name: "Selenium", icon: "selenium/selenium-original", desc: "Browser automation, testing", category: "Automation" },
  { name: "Pandas", icon: "pandas/pandas-original", desc: "Data analysis, ETL pipelines", category: "Data" },
  { name: "Firebase", icon: "firebase/firebase-original", desc: "Auth, real-time databases", category: "Cloud" },
  { name: "Supabase", icon: "supabase/supabase-original", desc: "Postgres + auth + storage", category: "Cloud" },
  { name: "Vercel", icon: "vercel/vercel-original", desc: "Edge deployments, serverless", category: "Cloud" },
  { name: "Tailwind", icon: "tailwindcss/tailwindcss-original", desc: "Rapid UI development", category: "Frontend" },
  { name: "GraphQL", icon: "graphql/graphql-plain", desc: "Flexible APIs, efficient queries", category: "Backend" },
  { name: "Bash", icon: "bash/bash-original", desc: "Automation scripts, system tasks", category: "DevOps" },
];

const categoryColors: Record<string, string> = {
  Language: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  Frontend: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  Backend: "bg-green-500/20 text-green-300 border-green-500/30",
  Database: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  DevOps: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  Cloud: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  Data: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  Automation: "bg-red-500/20 text-red-300 border-red-500/30",
};

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
              <TooltipContent
                side="bottom"
                sideOffset={8}
                className="px-4 py-3 max-w-[220px] backdrop-blur-xl bg-background/80 border border-border/50 shadow-xl
                  animate-in fade-in-0 zoom-in-50 slide-in-from-top-4 duration-300
                  data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-50 data-[state=closed]:slide-out-to-top-4 data-[state=closed]:duration-200"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-bold text-base">{tech.name}</p>
                    <Badge variant="outline" className={`text-[10px] px-1.5 py-0 ${categoryColors[tech.category]}`}>
                      {tech.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tech.desc}</p>
                </div>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </section>
  );
}
