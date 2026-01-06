import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectCard } from "@/components/project-card";
import { TechStack } from "@/components/tech-stack";
import { FloatingIcons } from "@/components/floating-icons";
import { AnimatedStats } from "@/components/animated-stats";
import { projects } from "@/lib/projects";
import { ArrowRight, Github, Bot, Workflow, Globe, Database, Code, Layers } from "lucide-react";
import Link from "next/link";


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


export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Stats Bar */}
      <AnimatedStats />

      {/* Hero Section */}
      <section className="mb-20 text-center relative">
        <FloatingIcons />
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 relative z-10">
          I automate businesses. Yours could be next.
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto relative z-10">
          AI agents, workflow automation, browser automation. From 49,000-lead pipelines to stealth scraping systems.
        </p>
        <div className="flex justify-center gap-4 relative z-10">
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

      <TechStack />

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
