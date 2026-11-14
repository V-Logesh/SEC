import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll } from "motion/react";
import { Menu, Phone, X } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/business";
import logoSrc from "@/assets/sec-logo-600.png";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { scrollYProgress } = useScroll();

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 shadow-lg shadow-background/10 backdrop-blur-xl">
      <div className="mx-auto grid h-[4.5rem] max-w-7xl 2xl:max-w-[96rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 lg:px-8 lg:flex lg:h-20 lg:justify-between">
        <Link
          to="/"
          className="flex shrink-0 items-center"
          aria-label={`${BUSINESS.name} — home`}
        >
          <img
            src={logoSrc}
            alt={`${BUSINESS.shortName} ${BUSINESS.name} logo`}
            className="h-12 w-auto lg:h-14"
            width={200}
            height={80}
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              aria-current={isActive(item.to) ? "page" : undefined}
              className={`relative rounded-md px-3 py-2 font-display text-base font-semibold uppercase tracking-wide transition-colors ${
                isActive(item.to)
                  ? "text-accent"
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              {item.label}
              {isActive(item.to) && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <a
            href={BUSINESS.phones[0].tel}
            className="ml-3 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 font-display text-lg font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Phone className="size-4" aria-hidden="true" />
            Call now
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-md border border-border bg-card text-foreground transition-colors hover:border-accent/60 hover:text-accent lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ rotate: -70, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 70, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="grid place-items-center"
            >
              {open ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Main"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.05 } },
              }}
              className="mx-auto max-w-7xl 2xl:max-w-[96rem] px-4 lg:px-8 py-4"
            >
              {NAV_LINKS.map((item) => (
                <motion.li
                  key={item.to}
                  variants={{
                    hidden: { opacity: 0, x: -14 },
                    show: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(item.to) ? "page" : undefined}
                    className={`block rounded-md px-3 py-3 font-display text-lg font-semibold uppercase tracking-wide transition-colors ${
                      isActive(item.to)
                        ? "text-accent"
                        : "text-foreground/85 hover:bg-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
          <motion.li variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="px-3 pb-1 pt-2">
                <a
                  href={BUSINESS.phones[0].tel}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 font-display text-lg font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Phone className="size-5" aria-hidden="true" />
                  Call {BUSINESS.phones[0].label}
                </a>
              </motion.li>
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Scroll progress */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: scrollYProgress }}
        className="h-0.5 origin-left bg-accent"
      />
    </header>
  );
}
