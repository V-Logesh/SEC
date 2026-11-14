import { createFileRoute } from "@tanstack/react-router";
import { NAV_LINKS, SERVICES } from "@/lib/business";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }: { request: Request }) => {
        const origin = new URL(request.url).origin;
        const paths = [
          ...NAV_LINKS.map((l) => (l.to === "/" ? "/" : l.to)),
          ...SERVICES.map((s) => `/services/${s.slug}`),
        ];
        const body =
          `<?xml version="1.0" encoding="UTF-8"?>\n` +
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
          paths.map((p) => `  <url><loc>${origin}${p}</loc></url>`).join("\n") +
          `\n</urlset>\n`;
        return new Response(body, {
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
