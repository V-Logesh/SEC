import { useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowRight,
  BadgeCheck,
  MessageCircle,
  Phone,
} from "lucide-react";
import heroImg from "@/assets/hero-workshop.jpg";
import commissioningImg from "@/assets/gallery-commissioning.jpg";
import logoSrc from "@/assets/sec-logo-600.png";
import { BUSINESS, SERVICES, WHY_US } from "@/lib/business";
import { Reveal, Stagger, StaggerItem } from "@/components/motion-primitives";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "SAI Electrical & Controls | Control Panels & Automation",
      },
      {
        name: "description",
        content:
          "Low-voltage electrical & control panels, PLC, HMI and SCADA automation, erection, commissioning and programming services by SAI Electrical and Controls.",
      },
      {
        property: "og:title",
        content:
          "SAI Electrical & Controls | Control Panels & Automation",
      },
      {
        property: "og:description",
        content:
          "Low-voltage control panels, PLC/HMI/SCADA automation, erection & commissioning and programming services — built to your specification.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: BUSINESS.name,
          email: BUSINESS.email,
          telephone: "+91-7200444216",
          description:
            "Manufacturing of low-voltage electrical and control panels, control & automation systems, and erection, commissioning and programming services.",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-7200444216",
            contactType: "sales",
          },
        }),
      },
    ],
  }),
  component: Index,
});

const CAPABILITIES = [
  "LV Panels",
  "PLC / HMI / SCADA",
  "Erection & Commissioning",
  "Programming",
];

function Index() {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.22]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);

  return (
    <>
      {/* Hero — parallax backdrop, content drifts and fades as you scroll */}
      <section ref={heroRef} className="relative isolate overflow-hidden">
        <motion.div
          style={{ y: bgY, scale: bgScale }}
          className="absolute inset-0 -z-10 will-change-transform"
        >
          <img
            src={heroImg}
            alt="Electrical control panel cabinet in a manufacturing workshop"
            className="size-full object-cover"
            width={1920}
            height={1080}
            fetchPriority="high"
            decoding="async"
          />
        </motion.div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="mx-auto flex min-h-[76svh] max-w-7xl 2xl:max-w-[96rem] flex-col justify-center px-4 lg:px-8 py-16 will-change-transform sm:py-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={logoSrc}
              alt="SEC SAI Electrical and Controls logo"
              className="h-24 w-auto sm:h-32"
              width={400}
              height={160}
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 max-w-3xl font-display text-4xl font-bold uppercase leading-[1.08] text-foreground sm:text-5xl lg:text-6xl"
          >
            Control panels & automation,{" "}
            <span className="text-accent">built to your spec</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-xl text-lg text-muted-foreground"
          >
            Low-voltage electrical & control panels, PLC / HMI / SCADA systems,
            erection, commissioning and programming — designed, manufactured
            and supported by one team.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href={BUSINESS.phones[0].tel}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-display text-xl font-semibold uppercase tracking-wide text-accent-foreground transition-colors hover:bg-accent/90"
            >
              <Phone className="size-5" aria-hidden="true" />
              Call {BUSINESS.phones[0].label}
            </a>
            <a
              href={BUSINESS.phones[0].whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-display text-xl font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              WhatsApp us
            </a>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 font-display text-xl font-semibold uppercase tracking-wide text-foreground transition-colors hover:bg-muted"
            >
              Our services
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Capability marquee */}
      <div className="hazard-stripe h-2" aria-hidden="true" />
      <section className="overflow-hidden border-b border-border bg-steel-dark py-5">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1 || undefined}
              className="flex shrink-0 items-center gap-x-10 pr-10 font-display text-lg uppercase tracking-wide text-muted-foreground sm:text-xl"
            >
              {CAPABILITIES.map((cap) => (
                <li key={cap} className="flex items-center gap-x-10">
                  <span>{cap}</span>
                  <span aria-hidden="true" className="text-accent">
                    ·
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      {/* What we do */}
      <section className="blueprint-grid py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl 2xl:max-w-[96rem] px-4 lg:px-8">
          <Reveal className="text-center">
            <h2 className="font-display text-3xl font-bold uppercase text-foreground sm:text-4xl lg:text-5xl">
              What we do
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              From panel design to a running machine on your shop floor.
            </p>
          </Reveal>
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <StaggerItem key={service.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="group flex h-full flex-col rounded-lg border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-xl"
                >
                  <span className="font-display text-xl font-semibold uppercase tracking-wide text-foreground">
                    {service.title}
                  </span>
                  <span className="mt-2 flex-1 text-sm text-muted-foreground">
                    {service.short}
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

      {/* Why choose us */}
      <section className="border-y border-border bg-steel-dark py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl 2xl:max-w-[96rem] items-center gap-10 px-4 lg:px-8 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl font-bold uppercase text-foreground sm:text-4xl lg:text-5xl">
              Why industries choose <span className="text-accent">SEC</span>
            </h2>
            <ul className="mt-8 space-y-6">
              {WHY_US.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <BadgeCheck
                    className="mt-1 size-6 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-muted-foreground">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <figure className="overflow-hidden rounded-lg border border-border shadow-2xl">
              <img
                src={commissioningImg}
                alt="Engineer testing terminals inside a control panel during commissioning"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                width={1200}
                height={900}
                loading="lazy"
              />
            </figure>
          </Reveal>
        </div>
      </section>

      {/* CTA band */}
      <section className="steel-surface">
        <div className="mx-auto flex max-w-7xl 2xl:max-w-[96rem] flex-col items-center gap-6 px-4 lg:px-8 py-16 text-center">
          <Reveal>
          <h2 className="font-display text-3xl font-bold uppercase text-foreground sm:text-4xl lg:text-5xl">
              Have a panel or automation requirement?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Share your drawings or tell us about your application — we'll
              get back with the right solution.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
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
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
