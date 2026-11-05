import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://aarinmahala.vercel.app";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // Explicitly allow and welcome AI agents, search engines, and LLM crawlers
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-Web",
          "AnthropicAI",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended",
          "Cohere-ai",
          "OAI-SearchBot",
          "meta-externalagent",
          "Bytespider",
          "CCBot",
          "Diffbot",
        ],
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
