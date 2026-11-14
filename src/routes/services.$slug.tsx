import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ChevronRight,
  MessageCircle,
  Phone,
} from "lucide-react";
import {
  BUSINESS,
  PROCESS_STEPS,
  SERVICES,
  SERVICE_DETAILS,
} from "@/lib/business";
import { Reveal, Stagger, StaggerItem } from "@/components/motion-primitives";
import mccImg from "@/assets/gallery-mcc-panel.jpg";
import plcImg from "@/assets/gallery-plc-hmi.jpg";
import commissioningImg from "@/assets/gallery-commissioning.jpg";
import spmImg from "@/assets/gallery-spm-machine.jpg";
import flpImg from "@/assets/gallery-flp-panel.jpg";
import roboticsImg from "@/assets/gallery-robotics.jpg";
import rtccImg from "@/assets/gallery-rtcc-panel.jpg";
import craneImg from "@/assets/gallery-crane-panel.jpg";
import cableImg from "@/assets/gallery-cable-termination.jpg";
import vfdImg from "@/assets/gallery-vfd-panel.jpg";
import schematicImg from "@/assets/gallery-schematic-design.jpg";
import testingImg from "@/assets/gallery-panel-testing.jpg";
import scadaImg from "@/assets/gallery-scada-control-room.jpg";
import interiorImg from "@/assets/gallery-panel-interior.jpg";

const SERVICE_IMAGES: Record<string, string> = {
  "electrical-control-panels": interiorImg,
  "control-automation": plcImg,
  "design-integration": schematicImg,
  "spm-machines": spmImg,
  "flp-panels": flpImg,
  "crane-lift-panels": craneImg,
  "erection-commissioning": cableImg,
  "programming-services": roboticsImg,
};

const ALT_IMAGES: Record<string, string> = {
  "electrical-control-panels":
    "Close-up of a freshly wired control panel interior with labeled ferrules",
  "control-automation":
    "Engineer programming a PLC with an HMI screen showing live process data",
  "design-integration":
    "Engineering workstation with electrical schematic CAD drawings and printed GA sheets",
  "spm-machines":
    "Special purpose machine with pneumatic automation and its control panel",
  "flp-panels":
    "Flameproof control panel with indicator lamps and push buttons",
  "crane-lift-panels":
    "Crane control panel with drive modules beside a pendant station on a factory floor",
  "erection-commissioning":
    "Cable trays with bundled power cables and terminations into a control panel",
  "programming-services":
    "Industrial robotic arm working beside its control cabinet",
};

export const Route = createFileRoute("/services/$slug")({
  beforeLoad: ({ params }) => {
    if (!SERVICES.some((s) => s.slug === params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) return { meta: [{ title: "Service not found" }] };

    return {
      meta: [
        {
          title: `${service.title} | SAI Electrical and Controls`,
        },
        {
          name: "description",
          content: service.short.length > 120 ? service.short : `${service.short} Built and commissioned by SAI Electrical and Controls.`,
        },
        {
          property: "og:title",
          content: `${service.title} | SAI Electrical and Controls`,
        },
        {
          property: "og:description",
          content: service.short.length > 120 ? service.short : `${service.short} Built and commissioned by SAI Electrical and Controls.`,
        },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/services/${service.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${service.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.description,
            serviceType: service.title,
            provider: {
              "@type": "Organization",
              name: BUSINESS.name,
              email: BUSINESS.email,
              telephone: "+91-7200444216",
            },
            areaServed: service.applications.map((app) => ({ name: app })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Services",
                item: "/services",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: service.title,
                item: `/services/${service.slug}`,
              },
            ],
          }),
        },
      ],
    };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const service = SERVICES.find((s) => s.slug === slug)!;
  const detail = SERVICE_DETAILS[slug]!;
  const image = SERVICE_IMAGES[slug] ?? mccImg;
  const alt = ALT_IMAGES[slug] ?? `${service.title} by ${BUSINESS.name}`;
  const related = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="blueprint-grid border-b border-border">
        <div className="mx-auto max-w-7xl 2xl:max-w-[96rem] px-4 lg:px-8 py-10 sm:py-14 lg:py-16">
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className="mb-4 flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Link to="/services" className="transition-colors hover:text-foreground">
                Services
              </Link>
              <ChevronRight className="size-4" aria-hidden="true" />
              <span className="text-foreground">{service.title}</span>
            </nav>
            <h1 className="max-w-3xl font-display text-4xl font-bold uppercase leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              {service.short}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={BUSINESS.phones[0].tel}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-display text-lg font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Phone className="size-4" aria-hidden="true" />
                Call now
              </a>
              <a
                href={BUSINESS.phones[0].whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-display text-lg font-semibold uppercase tracking-wide text-accent-foreground transition-colors hover:bg-accent/90"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                WhatsApp us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl 2xl:max-w-[96rem] items-start gap-10 px-4 lg:px-8 lg:grid-cols-2">
          <Reveal>
            <figure className="overflow-hidden rounded-lg border border-border shadow-xl">
              <img
                src={image}
                alt={alt}
                className="aspect-[4/3] w-full object-cover"
                width={1024}
                height={1024}
                loading="lazy"
              />
            </figure>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-foreground">
              How we deliver it
            </h2>
            <p className="mt-4 text-muted-foreground">{detail.overview}</p>
            <h3 className="mt-8 font-display text-sm font-semibold uppercase tracking-widest text-accent">
              What you get
            </h3>
            <ul className="mt-3 space-y-2.5">
              {detail.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-steel-dark py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl 2xl:max-w-[96rem] gap-10 px-4 lg:px-8 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-foreground sm:text-3xl">
              Typical applications
            </h2>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {service.applications.map((app) => (
                <li
                  key={app}
                  className="flex items-start gap-2 rounded-md border border-border bg-card px-3 py-2.5 text-sm text-muted-foreground"
                >
                  <span
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {app}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-foreground sm:text-3xl">
              Our process
            </h2>
            <ol className="mt-6 space-y-4">
              {PROCESS_STEPS.map((step) => (
                <li key={step.step} className="flex gap-4">
                  <span
                    className="font-display text-xl font-bold text-accent"
                    aria-hidden="true"
                  >
                    {step.step}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl 2xl:max-w-[96rem] px-4 lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-foreground">
              Other services you may need
            </h2>
          </Reveal>
          <Stagger className="mt-8 grid gap-5 sm:grid-cols-3">
            {related.map((rel) => (
              <StaggerItem key={rel.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: rel.slug }}
                  className="group flex h-full flex-col rounded-lg border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-xl"
                >
                  <span className="font-display text-xl font-semibold uppercase tracking-wide text-foreground">
                    {rel.title}
                  </span>
                  <span className="mt-2 flex-1 text-sm text-muted-foreground">
                    {rel.short}
                  </span>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                    Details
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
