import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { BUSINESS, NAV_LINKS, SERVICES } from "@/lib/business";
import logoSrc from "@/assets/sec-logo-600.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-steel-dark">
      <div className="mx-auto grid max-w-7xl 2xl:max-w-[96rem] gap-x-12 gap-y-10 px-4 lg:px-8 py-14 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_1.1fr_1fr] lg:py-16">
        <div>
          <img
            src={logoSrc}
            alt={`${BUSINESS.shortName} ${BUSINESS.name} logo`}
            className="h-16 w-auto sm:h-[4.5rem]"
            width={240}
            height={96}
            loading="lazy"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {BUSINESS.tagline}
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-base font-semibold uppercase tracking-wide text-foreground">
            Company
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h2 className="font-display text-base font-semibold uppercase tracking-wide text-foreground">
            Services
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICES.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-base font-semibold uppercase tracking-wide text-foreground">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            {BUSINESS.phones.map((phone) => (
              <li key={phone.tel}>
                <a
                  href={phone.tel}
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="size-4 shrink-0 text-accent" aria-hidden="true" />
                  {phone.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={BUSINESS.phones[0].whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <MessageCircle className="size-4 shrink-0 text-accent" aria-hidden="true" />
                WhatsApp us
              </a>
            </li>
            <li>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="inline-flex items-center gap-2 break-all text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-4 shrink-0 text-accent" aria-hidden="true" />
                {BUSINESS.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl 2xl:max-w-[96rem] flex-col items-center justify-between gap-2 px-4 lg:px-8 py-5 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <p>Electrical & Control Panels · Automation · Support Services</p>
        </div>
      </div>
    </footer>
  );
}
