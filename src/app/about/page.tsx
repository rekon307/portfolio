import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const skills = {
  languages: ["Python", "TypeScript", "JavaScript", "SQL"],
  frameworks: ["Next.js", "FastAPI", "React", "Node.js"],
  tools: ["Docker", "PostgreSQL", "Redis", "Git"],
  ai: ["LangChain", "OpenAI API", "Anthropic API", "MCP"],
  cloud: ["AWS", "Vercel", "Railway", "Supabase"],
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight mb-8">About</h1>

        <section className="mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I&apos;m a full-stack developer with a focus on building AI-powered tools,
            DeFi systems, and automation solutions. I enjoy turning complex problems
            into elegant, maintainable code.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            My work spans multiple domains - from real-time trading systems with
            WebSocket streaming, to MCP servers for AI assistants, to serverless
            automation pipelines. I believe in building things that actually work
            and solve real problems.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            When I&apos;m not coding, you can find me exploring new AI models,
            analyzing crypto markets, or contributing to open source.
          </p>
        </section>

        <Separator className="my-12" />

        <section>
          <h2 className="text-2xl font-bold mb-8">Skills & Technologies</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Tools & Databases</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-3">AI & ML</h3>
              <div className="flex flex-wrap gap-2">
                {skills.ai.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Cloud & Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                {skills.cloud.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
