import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const skills = {
  automation: ["n8n", "Make.com", "Python", "Playwright", "Selenium"],
  ai: ["OpenAI", "Claude", "Gemini", "LangChain", "Vector DBs"],
  data: ["PostgreSQL", "Airtable", "Google Sheets", "Supabase"],
  apis: ["REST", "GraphQL", "FastAPI", "Node.js"],
  deployment: ["AWS Lambda", "Vercel", "Railway", "Docker"],
};

const results = [
  {
    project: "Real Estate AI Voice Agent",
    result: "80% time reduction, 25% more appointments",
  },
  {
    project: "Dental Lead Qualification",
    result: "49,000 practices qualified across Germany & Austria",
  },
  {
    project: "Abuse Complaint Automation",
    result: "AI classification with Gemini, auto-routing to teams",
  },
  {
    project: "Recruitment AI Assistant",
    result: "Email summarization, calendar automation, SOP retrieval",
  },
  {
    project: "Trading Webhook Bridge",
    result: "Real-time TradingView signals to automated execution",
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight mb-8">About</h1>

        <section className="mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            5+ years automating business processes. 100+ clients served.
            I build systems that actually work.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I specialize in AI agents, workflow automation, and browser automation.
            From 49,000-lead qualification pipelines to stealth scraping systems with
            human behavior simulation - I&apos;ve built it.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My workspace runs on 407 execution scripts across 14 specialized agents.
            Twitter automation, multi-platform publishing, video production pipelines,
            iPhone automation - all production-tested.
          </p>
        </section>

        <Separator className="my-12" />

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-8">Client Results</h2>
          <div className="space-y-4">
            {results.map((item) => (
              <Card key={item.project}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">{item.project}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.result}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        <section>
          <h2 className="text-2xl font-bold mb-8">Tech Stack</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Automation</h3>
              <div className="flex flex-wrap gap-2">
                {skills.automation.map((skill) => (
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
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Data</h3>
              <div className="flex flex-wrap gap-2">
                {skills.data.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-3">APIs</h3>
              <div className="flex flex-wrap gap-2">
                {skills.apis.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Deployment</h3>
              <div className="flex flex-wrap gap-2">
                {skills.deployment.map((skill) => (
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
