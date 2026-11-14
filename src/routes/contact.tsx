import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MessageCircle, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { Reveal, Stagger, StaggerItem } from "@/components/motion-primitives";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | SAI Electrical and Controls" },
      {
        name: "description",
        content:
          "Call or WhatsApp SAI Electrical and Controls on +91 72004 44216 or +91 98949 76258, or email saielectricalcontrols@gmail.com to discuss panels and automation.",
      },
      {
        property: "og:title",
        content: "Contact | SAI Electrical and Controls",
      },
      {
        property: "og:description",
        content:
          "Call or WhatsApp us with your panel or automation requirement, or send us an email.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: BUSINESS.name,
          email: BUSINESS.email,
          telephone: "+91-7200444216",
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="blueprint-grid border-b border-border">
        <div className="mx-auto max-w-7xl 2xl:max-w-[96rem] px-4 lg:px-8 py-12 sm:py-16 lg:py-20">
          <Reveal>
            <p className="font-display text-xl uppercase tracking-widest text-accent">
              Contact
            </p>
            <h1 className="mt-2 max-w-3xl font-display text-4xl font-bold uppercase leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
              Talk to us directly
            </h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              No forms, no waiting — call or WhatsApp your requirement and you'll
              speak to the people who design and build the panels.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <Stagger className="mx-auto grid max-w-7xl 2xl:max-w-[96rem] gap-6 px-4 lg:px-8 md:grid-cols-2">
          {/* Phones */}
          {BUSINESS.phones.map((phone) => (
            <StaggerItem key={phone.tel}>
            <div
              className="h-full rounded-lg border border-border bg-card p-6 transition-colors duration-300 hover:border-accent/40 sm:p-8"
            >
              <h2 className="flex items-center gap-3 font-display text-2xl font-bold uppercase tracking-wide text-foreground">
                <Phone className="size-6 text-accent" aria-hidden="true" />
                Call / WhatsApp
              </h2>
              <p className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                {phone.label}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={phone.tel}
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-display text-lg font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  Call now
                </a>
                <a
                  href={phone.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`WhatsApp ${phone.label}`}
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-display text-lg font-semibold uppercase tracking-wide text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
            </div>
            </StaggerItem>
          ))}

          {/* Email */}
          <StaggerItem>
          <div className="h-full rounded-lg border border-border bg-card p-6 transition-colors duration-300 hover:border-accent/40 sm:p-8">
            <h2 className="flex items-center gap-3 font-display text-2xl font-bold uppercase tracking-wide text-foreground">
              <Mail className="size-6 text-accent" aria-hidden="true" />
              Email
            </h2>
            <a
              href={`mailto:${BUSINESS.email}`}
              className="mt-4 block break-all font-display text-xl font-semibold text-accent transition-colors hover:text-accent/80 sm:text-2xl"
            >
              {BUSINESS.email}
            </a>
            <p className="mt-3 text-sm text-muted-foreground">
              Send drawings, panel schedules or specifications — we'll review
              and get back to you.
            </p>
          </div>
          </StaggerItem>

          {/* Guidance */}
          <StaggerItem>
          <div className="h-full rounded-lg border border-border bg-card p-6 transition-colors duration-300 hover:border-accent/40 sm:p-8">
            <h2 className="flex items-center gap-3 font-display text-2xl font-bold uppercase tracking-wide text-foreground">
              <Clock className="size-6 text-accent" aria-hidden="true" />
              What to share
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {[
                "Type of panel or machine you need (PDB, MCC, VFD, FLP, lift, crane…)",
                "Single-line diagram, GA drawing or panel schedule, if available",
                "Load details or motor ratings",
                "Site location and target delivery timeframe",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              Not sure what you need? Describe the application on a call and
              we'll work it out together.
            </p>
          </div>
          </StaggerItem>
        </Stagger>
      </section>
    </>
  );
}
