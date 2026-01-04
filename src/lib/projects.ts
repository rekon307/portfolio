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
    tags: ["Python", "FastAPI", "Crypto", "APIs"],
    github: "https://github.com/rekon307/x402",
    featured: true,
  },
  {
    name: "Flashbot",
    description: "Real-time trading co-pilot with WebSocket streaming and live commentary for Binance",
    domain: "Trading",
    tags: ["Python", "WebSocket", "MCP", "Binance"],
    github: "https://github.com/rekon307/Flashbot",
    featured: true,
  },
  {
    name: "CDDAi",
    description: "AI-powered autonomous player for Cataclysm: Dark Days Ahead roguelike game",
    domain: "AI/Gaming",
    tags: ["Python", "LLM", "Automation", "Gaming"],
    github: "https://github.com/rekon307/CDDAi",
    featured: true,
  },
  {
    name: "VaultMind",
    description: "Semantic search MCP server for Obsidian vaults with hybrid search",
    domain: "AI/Productivity",
    tags: ["Python", "MCP", "ChromaDB", "Embeddings"],
    github: "https://github.com/rekon307/VaultMind",
    featured: true,
  },
  {
    name: "FeedForge",
    description: "AI-powered news aggregator with personalized feeds and smart filtering",
    domain: "Full-stack",
    tags: ["Next.js", "Supabase", "TypeScript", "AI"],
    github: "https://github.com/rekon307/FeedForge",
  },
  {
    name: "ChatLift",
    description: "TypeScript CLI to extract and export conversations from Claude, ChatGPT, and Gemini",
    domain: "CLI Tools",
    tags: ["TypeScript", "CLI", "Node.js"],
    github: "https://github.com/rekon307/ChatLift",
  },
  {
    name: "MailBridge",
    description: "Serverless newsletter translator - auto-translate emails using DeepL + AWS Lambda",
    domain: "Automation",
    tags: ["Python", "AWS Lambda", "DeepL", "Serverless"],
    github: "https://github.com/rekon307/MailBridge",
  },
  {
    name: "ThreadsScraper",
    description: "Threads.net scraper for posts and engagement metrics using Playwright and Docker",
    domain: "Automation",
    tags: ["Python", "Playwright", "Docker", "Scraping"],
    github: "https://github.com/rekon307/ThreadsScraper",
  },
  {
    name: "Node23",
    description: "Modern Next.js landing page template with Tailwind CSS and shadcn/ui",
    domain: "Frontend",
    tags: ["Next.js", "Tailwind", "shadcn/ui", "Template"],
    github: "https://github.com/rekon307/Node23",
  },
];
