import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";
import { ArrowRight, Github, Bot, Workflow, Globe, Database, Code, Layers } from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Clients Served", value: "100+" },
  { label: "Scripts Built", value: "400+" },
];

const clientResults = [
  {
    client: "Real Estate Agency (Sweden)",
    project: "AI Voice Agent",
    result: "25% more appointments, 80% time saved",
  },
  {
    client: "Dental Network (DE/AT)",
    project: "Lead Qualification Pipeline",
    result: "49,000 practices processed",
  },
  {
    client: "Hosting Provider",
    project: "Abuse Complaint System",
    result: "AI classification + auto-routing",
  },
  {
    client: "Recruitment Agency",
    project: "AI Assistant",
    result: "Email summarization, calendar sync, SOP retrieval",
  },
  {
    client: "Prop Trader",
    project: "Webhook Bridge",
    result: "TradingView signals to automated execution",
  },
];

const services = [
  { icon: Bot, title: "AI Agents", desc: "GPT, Claude, Gemini, LangChain" },
  { icon: Workflow, title: "Workflow Automation", desc: "n8n, Make.com, Zapier" },
  { icon: Globe, title: "Browser Automation", desc: "Playwright, Selenium, nodriver" },
  { icon: Database, title: "Data Pipelines", desc: "Scraping, ETL, real-time sync" },
  { icon: Code, title: "API Integrations", desc: "REST, GraphQL, webhooks" },
  { icon: Layers, title: "Full-Stack Apps", desc: "Next.js, FastAPI, Supabase" },
];

// Tech icons using devicon CDN
const techIcons = [
  { name: "Python", icon: "python/python-original" },
  { name: "TypeScript", icon: "typescript/typescript-original" },
  { name: "JavaScript", icon: "javascript/javascript-original" },
  { name: "React", icon: "react/react-original" },
  { name: "Next.js", icon: "nextjs/nextjs-original" },
  { name: "Node.js", icon: "nodejs/nodejs-original" },
  { name: "FastAPI", icon: "fastapi/fastapi-original" },
  { name: "Flask", icon: "flask/flask-original" },
  { name: "PostgreSQL", icon: "postgresql/postgresql-original" },
  { name: "MongoDB", icon: "mongodb/mongodb-original" },
  { name: "Redis", icon: "redis/redis-original" },
  { name: "Docker", icon: "docker/docker-original" },
  { name: "AWS", icon: "amazonwebservices/amazonwebservices-original-wordmark" },
  { name: "Git", icon: "git/git-original" },
  { name: "GitHub", icon: "github/github-original" },
  { name: "Linux", icon: "linux/linux-original" },
  { name: "Selenium", icon: "selenium/selenium-original" },
  { name: "Pandas", icon: "pandas/pandas-original" },
  { name: "Firebase", icon: "firebase/firebase-original" },
  { name: "Supabase", icon: "supabase/supabase-original" },
  { name: "Vercel", icon: "vercel/vercel-original" },
  { name: "Tailwind", icon: "tailwindcss/tailwindcss-original" },
  { name: "GraphQL", icon: "graphql/graphql-plain" },
  { name: "Bash", icon: "bash/bash-original" },
];

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Stats Bar */}
      <div className="flex justify-center gap-8 md:gap-16 mb-12">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="mb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          I automate businesses. Yours could be next.
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          AI agents, workflow automation, browser automation. From 49,000-lead pipelines to stealth scraping systems.
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://www.upwork.com/freelancers/agenticworkflows" target="_blank" rel="noopener noreferrer">
            <Button size="lg">
              Let&apos;s Talk
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <a href="https://github.com/rekon307" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </a>
        </div>
      </section>

      {/* Client Results */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8 text-center">Client Results</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {clientResults.map((item) => (
            <Card key={item.client} className="border-border/40">
              <CardHeader className="pb-2">
                <CardDescription>{item.client}</CardDescription>
                <CardTitle className="text-base">{item.project}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.result}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8 text-center">What I Build</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="border-border/40">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <service.icon className="h-5 w-5 text-muted-foreground" />
                  <CardTitle className="text-base">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8 text-center">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          {techIcons.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center gap-2"
              title={tech.name}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-secondary/30 group-hover:bg-secondary/60 transition-colors">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.icon}.svg`}
                  alt={tech.name}
                  className="w-9 h-9"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      {/* Other Projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">More Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 border-t border-border/40">
        <h2 className="text-2xl font-bold mb-4">Ready to automate?</h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Let&apos;s discuss your project. I&apos;ll map your workflows and find the bottlenecks.
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://www.upwork.com/freelancers/agenticworkflows" target="_blank" rel="noopener noreferrer">
            <Button>
              Hire me on Upwork
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
