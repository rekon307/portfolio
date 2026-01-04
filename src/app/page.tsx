import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";
import { ArrowRight, Github, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="mb-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Hi, I&apos;m Adrian Chiru
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Full-stack developer building AI tools, DeFi systems, and automation.
            I turn complex problems into elegant solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://github.com/rekon307" target="_blank" rel="noopener noreferrer">
              <Button>
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </a>
            <Link href="/about">
              <Button variant="outline">
                About me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
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
        <h2 className="text-2xl font-bold mb-4">Let&apos;s work together</h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities.
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://www.upwork.com/freelancers/agenticworkflows" target="_blank" rel="noopener noreferrer">
            <Button>
              <Mail className="mr-2 h-4 w-4" />
              Get in touch
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
