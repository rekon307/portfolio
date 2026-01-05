import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const techStack = {
  "AI & LLMs": ["OpenAI", "Claude", "Gemini", "GPT-4", "GPT-4o", "LangChain", "LlamaIndex", "Ollama", "Vapi", "Bland.ai", "ChromaDB", "Pinecone", "Embeddings", "RAG"],
  "Automation Platforms": ["n8n", "Make.com", "Zapier", "Airtable Automations", "Google Apps Script", "Power Automate"],
  "Browser & Scraping": ["Playwright", "Selenium", "Puppeteer", "nodriver", "Scrapy", "BeautifulSoup", "Apify", "Crawlee", "Bright Data"],
  "Languages": ["Python", "TypeScript", "JavaScript", "SQL", "Bash", "Go"],
  "Backend Frameworks": ["FastAPI", "Flask", "Django", "Node.js", "Express", "NestJS"],
  "Frontend Frameworks": ["Next.js", "React", "Vue.js", "Tailwind CSS", "shadcn/ui"],
  "Databases": ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Redis", "Supabase", "Firebase", "DynamoDB"],
  "Cloud & Infrastructure": ["AWS Lambda", "S3", "EC2", "SES", "SQS", "Vercel", "Railway", "Docker", "Kubernetes", "Cloudflare Workers"],
  "APIs & Integrations": ["REST", "GraphQL", "WebSocket", "OAuth 2.0", "Stripe", "Twilio", "SendGrid", "HubSpot", "Salesforce", "Zoho", "Shopify", "WooCommerce", "Slack", "Discord"],
  "Data & Analytics": ["Pandas", "NumPy", "Google Sheets API", "Airtable API", "Excel Automation", "Metabase", "Grafana"],
  "DevOps & Tools": ["Git", "GitHub Actions", "GitLab CI", "Docker Compose", "Linux", "SSH", "Cron", "Terraform"],
};

const results = [
  {
    client: "Real Estate Agency (Sweden)",
    project: "AI Voice Agent",
    result: "25% more appointments booked, 80% reduction in manual outreach time",
  },
  {
    client: "Dental Network (Germany/Austria)",
    project: "Lead Qualification Pipeline",
    result: "49,000 dental practices processed and qualified automatically",
  },
  {
    client: "Hosting Provider",
    project: "Abuse Complaint Automation",
    result: "AI-powered classification with Gemini, automatic routing to correct teams",
  },
  {
    client: "Recruitment Agency",
    project: "AI Assistant",
    result: "Email summarization, calendar automation, SharePoint SOP retrieval",
  },
  {
    client: "Prop Trader",
    project: "TradingView Webhook Bridge",
    result: "Real-time signal processing to automated trade execution",
  },
];

const process = [
  {
    step: "1",
    title: "Discovery Call",
    desc: "Map your workflows, find bottlenecks, identify automation opportunities",
  },
  {
    step: "2",
    title: "Proposal",
    desc: "Clear scope, timeline, and pricing within 48 hours",
  },
  {
    step: "3",
    title: "Build",
    desc: "Rapid development with weekly check-ins and demos",
  },
  {
    step: "4",
    title: "Deliver",
    desc: "Full documentation, team training, and handover",
  },
  {
    step: "5",
    title: "Support",
    desc: "Optional ongoing maintenance and iteration",
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight mb-8">About</h1>

        <section className="mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            5+ years automating business processes. 100+ clients served.
            400+ execution scripts in production. I build systems that actually work.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I specialize in AI agents, workflow automation, and browser automation.
            From 49,000-lead qualification pipelines to stealth scraping systems with
            human behavior simulation - I&apos;ve built it and shipped it.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My workspace runs on 14 specialized agents handling everything from
            Twitter automation to video production pipelines to iPhone app control.
            All production-tested, all battle-hardened.
          </p>
        </section>

        <Separator className="my-12" />

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-8">How I Work</h2>
          <div className="grid gap-4 md:grid-cols-5">
            {process.map((item) => (
              <Card key={item.step} className="border-border/40">
                <CardHeader className="pb-2">
                  <div className="text-2xl font-bold text-muted-foreground">{item.step}</div>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-8">Client Results</h2>
          <div className="space-y-4">
            {results.map((item) => (
              <Card key={item.client} className="border-border/40">
                <CardHeader className="pb-2">
                  <div className="text-sm text-muted-foreground">{item.client}</div>
                  <CardTitle className="text-base">{item.project}</CardTitle>
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
            {Object.entries(techStack).map(([category, techs]) => (
              <div key={category}>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
