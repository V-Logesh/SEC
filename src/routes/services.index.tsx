import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpDown,
  Cable,
  CircuitBoard,
  Code,
  Cpu,
  DraftingCompass,
  MessageCircle,
  Phone,
  Settings,
  ShieldCheck,
} from "lucide-react";
import { BUSINESS, INDUSTRIES, PROCESS_STEPS, SERVICES, type ServiceIcon } from "@/lib/business";
import { Reveal, Stagger, StaggerItem } from "@/components/motion-primitives";

const ICONS: Record<ServiceIcon, typeof CircuitBoard> = {
  "circuit-board": CircuitBoard,
  cpu: Cpu,
  "drafting-compass": DraftingCompass,
  settings: Settings,
  "shield-check": ShieldCheck,
  "arrow-up-down": ArrowUpDown,
  cable: Cable,
  code: Code,
};

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      {
        title: "Services | SAI Electrical and Controls",
      },
      {
        name: "description",
        content:
          "Control panels, PLC/HMI/SCADA automation, SPM machines, FLP and crane panels, erection, commissioning and programming services.",
      },
      {
        property: "og:title",
        content: "Services | SAI Electrical and Controls",
      },
      {
        property: "og:description",
        content:
          "From panel design and manufacturing to PLC/HMI/SCADA programming, erection and commissioning — see the full list of SEC services.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="blueprint-grid border-b border-border">
        <div className="mx-auto max-w-7xl 2xl:max-w-[96rem] px-4 lg:px-8 py-12 sm:py-16 lg:py-20">
          <Reveal>
            <p className="font-display text-xl uppercase tracking-widest text-accent">
              Our services
            </p>
            <h1 className="mt-2 max-w-3xl font-display text-4xl font-bold uppercase leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
              What we design, build and support
            </h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Every service below is delivered by our own team — from the first
              drawing to the final commissioning checklist.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <Stagger className="mx-auto grid max-w-7xl 2xl:max-w-[96rem] gap-5 px-4 lg:px-8 md:grid-cols-2 lg:gap-6">
          {SERVICES.map((service, index) => {
            const Icon = ICONS[service.icon];
            return (
              <StaggerItem key={service.slug}>
              <article
                className="flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-xl sm:p-8"
              >
                <div className="flex items-center gap-4">
                  <span className="steel-surface inline-flex size-12 shrink-0 items-center justify-center rounded-md border border-border sm:size-14">
                    <Icon className="size-7 text-accent" aria-hidden="true" />
                  </span>
                  <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-foreground">
                    <span
                      className="mr-2 text-sm text-muted-foreground"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {service.title}
                  </h2>
                </div>
                <p className="mt-4 text-muted-foreground">{service.description}</p>
                <h3 className="mt-6 font-display text-sm font-semibold uppercase tracking-widest text-accent">
                  Typical applications
                </h3>
                <ul className="mt-2 grid gap-1.5 text-sm text-muted-foreground sm:grid-cols-2">
                  {service.applications.map((app) => (
                    <li key={app} className="flex items-start gap-2">
                      <span
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      {app}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-medium text-accent transition-colors hover:text-accent/80"
                >
                  View details
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* Delivery process */}
      <section className="border-y border-border bg-steel-dark py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl 2xl:max-w-[96rem] px-4 lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold uppercase text-foreground sm:text-4xl lg:text-5xl">
              How a project runs
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Six clear stages from your first call to long-term support — you
              always know where your panel stands.
            </p>
          </Reveal>
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS_STEPS.map((step) => (
              <StaggerItem key={step.step}>
                <div className="h-full rounded-lg border border-border bg-card p-6 transition-colors duration-300 hover:border-accent/40">
                  <span
                    className="font-display text-3xl font-bold text-accent"
                    aria-hidden="true"
                  >
                    {step.step}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold uppercase tracking-wide text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Industries served */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl 2xl:max-w-[96rem] px-4 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-foreground sm:text-4xl">
              Industries we serve
            </h2>
            <ul className="mt-6 flex flex-wrap justify-center gap-3">
              {INDUSTRIES.map((industry) => (
                <li
                  key={industry}
                  className="rounded-full border border-border bg-card px-5 py-2 font-display text-lg uppercase tracking-wide text-muted-foreground"
                >
                  {industry}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="steel-surface">
        <div className="mx-auto flex max-w-7xl 2xl:max-w-[96rem] flex-col items-center gap-6 px-4 lg:px-8 py-14 text-center">
          <Reveal>
          <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-foreground sm:text-4xl">
            Need a quotation?
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Call or WhatsApp your requirement — drawings, panel schedule or a
            description of the application.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {BUSINESS.phones.map((phone) => (
              <a
                key={phone.tel}
                href={phone.tel}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-display text-xl font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Phone className="size-5" aria-hidden="true" />
                {phone.label}
              </a>
            ))}
            <a
              href={BUSINESS.phones[0].whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-display text-xl font-semibold uppercase tracking-wide text-accent-foreground transition-colors hover:bg-accent/90"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 font-display text-xl font-semibold uppercase tracking-wide text-foreground transition-colors hover:bg-muted"
            >
              Contact details
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
          </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
