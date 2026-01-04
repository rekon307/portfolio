import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

// Placeholder blog posts - will be replaced with MDX
const posts = [
  {
    slug: "building-ai-agents",
    title: "Building AI Agents That Actually Work",
    description: "Lessons learned from building autonomous AI systems for gaming and trading",
    date: "2025-01-05",
    tags: ["AI", "Automation"],
  },
  {
    slug: "mcp-servers",
    title: "Creating MCP Servers for Claude",
    description: "A practical guide to extending Claude Code with custom tools",
    date: "2025-01-03",
    tags: ["MCP", "Claude", "Python"],
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Thoughts on building software, AI, and automation.
        </p>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="transition-all hover:border-foreground/20">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <time>{post.date}</time>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
