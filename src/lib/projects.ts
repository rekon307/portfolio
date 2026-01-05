export interface Project {
  name: string;
  description: string;
  domain: string;
  tags: string[];
  github: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: "x402",
    description: "DeFi API service with 12 exchange integrations for funding rates, market data, and arbitrage analysis",
    domain: "DeFi",
    tags: ["Python", "FastAPI", "WebSocket", "REST API", "Redis", "Docker", "12 Exchanges"],
    github: "https://github.com/rekon307/x402",
    featured: true,
  },
  {
    name: "Flashbot",
    description: "Real-time trading co-pilot with WebSocket streaming and live commentary for Binance",
    domain: "Trading",
    tags: ["Python", "WebSocket", "MCP", "Claude", "Real-time", "Binance API"],
    github: "https://github.com/rekon307/Flashbot",
    featured: true,
  },
  {
    name: "CDDAi",
    description: "AI-powered autonomous player for Cataclysm: Dark Days Ahead roguelike game",
    domain: "AI/Gaming",
    tags: ["Python", "GPT-4", "Autonomous Agent", "Game AI", "State Machine"],
    github: "https://github.com/rekon307/CDDAi",
    featured: true,
  },
  {
    name: "VaultMind",
    description: "Semantic search MCP server for Obsidian vaults with hybrid search",
    domain: "AI/Productivity",
    tags: ["Python", "MCP", "ChromaDB", "Embeddings", "Semantic Search", "Obsidian"],
    github: "https://github.com/rekon307/VaultMind",
    featured: true,
  },
  {
    name: "FeedForge",
    description: "AI-powered news aggregator with personalized feeds and smart filtering",
    domain: "Full-stack",
    tags: ["Next.js", "Supabase", "TypeScript", "OpenAI", "RSS", "PostgreSQL"],
    github: "https://github.com/rekon307/FeedForge",
  },
  {
    name: "ChatLift",
    description: "TypeScript CLI to extract and export conversations from Claude, ChatGPT, and Gemini",
    domain: "CLI Tools",
    tags: ["TypeScript", "Node.js", "CLI", "Parsing", "Multi-platform"],
    github: "https://github.com/rekon307/ChatLift",
  },
  {
    name: "MailBridge",
    description: "Serverless newsletter translator - auto-translate emails using DeepL + AWS Lambda",
    domain: "Automation",
    tags: ["Python", "AWS Lambda", "SES", "DeepL API", "Serverless"],
    github: "https://github.com/rekon307/MailBridge",
  },
  {
    name: "ThreadsScraper",
    description: "Threads.net scraper for posts and engagement metrics using Playwright and Docker",
    domain: "Automation",
    tags: ["Python", "Playwright", "Docker", "Stealth", "Anti-detect"],
    github: "https://github.com/rekon307/ThreadsScraper",
  },
  {
    name: "Node23",
    description: "Modern Next.js landing page template with Tailwind CSS and shadcn/ui",
    domain: "Frontend",
    tags: ["Next.js", "Tailwind CSS", "shadcn/ui", "TypeScript", "Vercel"],
    github: "https://github.com/rekon307/Node23",
  },
];
