import { MessageCircle, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";

/**
 * App-like bottom action bar on phones: one-tap call and WhatsApp,
 * always reachable without scrolling back to the top.
 */
export function MobileActionBar() {
  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_28px_color-mix(in_oklab,var(--background)_72%,transparent)] backdrop-blur-xl lg:hidden"
    >
      <div className="grid grid-cols-2 divide-x divide-border">
        <a
          href={BUSINESS.phones[0].tel}
          className="flex min-h-14 items-center justify-center gap-2 py-3 font-display text-base font-semibold uppercase tracking-wide text-foreground transition-colors hover:bg-muted"
        >
          <Phone className="size-5 text-accent" aria-hidden="true" />
          Call now
        </a>
        <a
          href={BUSINESS.phones[0].whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-14 items-center justify-center gap-2 py-3 font-display text-base font-semibold uppercase tracking-wide text-accent transition-colors hover:bg-muted"
        >
          <MessageCircle className="size-5" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </nav>
  );
}
