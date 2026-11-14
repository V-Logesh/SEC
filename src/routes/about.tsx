import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, DraftingCompass, Factory, Wrench } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion-primitives";
import mccImg from "@/assets/gallery-mcc-panel.jpg";
import plcImg from "@/assets/gallery-plc-hmi.jpg";
import { BUSINESS } from "@/lib/business";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | SAI Electrical and Controls" },
      {
        name: "description",
        content:
          "About SEC SAI Electrical and Controls — a team that designs, manufactures and supports low-voltage control panels and industrial automation systems.",
      },
      {
        property: "og:title",
        content: "About | SAI Electrical and Controls",
      },
      {
        property: "og:description",
        content:
          "Design, manufacturing, erection, commissioning and programming — one responsible team for control panels and automation.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    icon: DraftingCompass,
    title: "Design first",
    text: "Schematics, GA drawings and wiring schedules before a single wire is cut — so the panel matches the plant, not the other way round.",
  },
  {
    icon: Factory,
    title: "Built with care",
    text: "Neat workmanship, labeled ferrules and component layouts that make maintenance easy years later.",
  },
  {
    icon: Wrench,
    title: "Standing by our work",
    text: "Erection, commissioning and programming support doesn't stop at dispatch — we stay with the project until it runs.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="blueprint-grid border-b border-border">
        <div className="mx-auto max-w-7xl 2xl:max-w-[96rem] px-4 lg:px-8 py-12 sm:py-16 lg:py-20">
          <Reveal>
            <p className="font-display text-xl uppercase tracking-widest text-accent">
              About us
            </p>
            <h1 className="mt-2 max-w-3xl font-display text-4xl font-bold uppercase leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
              One team for panels, automation and everything after
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl 2xl:max-w-[96rem] items-center gap-12 px-4 lg:px-8 lg:grid-cols-2">
          <Reveal>
            <div>
              <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-foreground">
                Who we are
              </h2>
            <p className="mt-4 text-muted-foreground">
              {BUSINESS.name} ({BUSINESS.shortName}) is an electrical and
              controls business serving industries that depend on reliable power
              distribution and machine control.
            </p>
            <p className="mt-4 text-muted-foreground">
              We design and manufacture low-voltage electrical and control
              panels — PDB, MCC, ACB, VFD, soft-starter, RTCC, metering and
              customised FLP panels — and we build the automation around them:
              PLC, HMI, SCADA, servo and VFD based systems for automobile and
              non-automobile industries, food processing and more.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our work doesn't end at the workshop gate. We take care of cable
              tray work, cable laying and termination, testing and
              commissioning on site, and we provide programming services for all
              types of PLC, HMI, SCADA and servo based projects.
            </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <figure className="overflow-hidden rounded-lg border border-border shadow-xl">
            <img
              src={mccImg}
              alt="Completed motor control center panel with circuit breakers and neatly wired terminal blocks"
              className="aspect-[4/3] w-full object-cover"
              width={1200}
              height={900}
              loading="lazy"
            />
          </figure>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-steel-dark py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl 2xl:max-w-[96rem] px-4 lg:px-8">
          <h2 className="text-center font-display text-3xl font-bold uppercase text-foreground sm:text-4xl">
            How we work
          </h2>
          <Stagger className="mt-10 grid gap-5 md:grid-cols-3">
            {VALUES.map((value) => (
              <StaggerItem key={value.title}>
              <div
                className="h-full rounded-lg border border-border bg-card p-6 transition-colors duration-300 hover:border-accent/40"
              >
                <value.icon className="size-8 text-accent" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl font-semibold uppercase tracking-wide text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.text}</p>
              </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl 2xl:max-w-[96rem] items-center gap-12 px-4 lg:px-8 lg:grid-cols-2">
          <Reveal>
          <figure className="overflow-hidden rounded-lg border border-border shadow-xl lg:order-1">
            <img
              src={plcImg}
              alt="Engineer programming a PLC with an HMI screen showing live process data"
              className="aspect-[4/3] w-full object-cover"
              width={1200}
              height={900}
              loading="lazy"
            />
          </figure>
          </Reveal>
          <Reveal delay={0.1}>
          <div className="lg:order-2">
            <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-foreground">
              Quality you can check
            </h2>
            <p className="mt-4 text-muted-foreground">
              Cost-effective doesn't mean cutting corners. Panels are wired to
              drawing with labeled ferrules, point-to-point checked and function
              tested before dispatch — so your electricians commission the panel
              instead of debugging it.
            </p>
            <Link
              to="/services"
              className="mt-6 inline-flex items-center gap-2 font-display text-xl font-semibold uppercase tracking-wide text-accent transition-colors hover:text-accent/80"
            >
              Explore our services
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
          </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
