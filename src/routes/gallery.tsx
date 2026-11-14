import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion-primitives";
import heroImg from "@/assets/hero-workshop.jpg";
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

const PHOTOS = [
  {
    src: heroImg,
    alt: "Control panel cabinet under manufacture in the SEC workshop",
    caption: "Panel manufacturing",
    width: 1920,
    height: 1080,
  },
  {
    src: mccImg,
    alt: "Motor control center panel with circuit breakers and color-coded wiring",
    caption: "MCC panel wiring",
    width: 1200,
    height: 900,
  },
  {
    src: plcImg,
    alt: "PLC and HMI programming at a control cabinet with SCADA screen",
    caption: "PLC / HMI programming",
    width: 1200,
    height: 900,
  },
  {
    src: commissioningImg,
    alt: "Engineer commissioning a control panel beside routed power cables",
    caption: "Erection & commissioning",
    width: 1200,
    height: 900,
  },
  {
    src: spmImg,
    alt: "Special purpose machine with pneumatic automation and control panel",
    caption: "SPM machines & panels",
    width: 1200,
    height: 900,
  },
  {
    src: flpImg,
    alt: "Flameproof control panel with indicator lamps and push buttons",
    caption: "Customised FLP panels",
    width: 1200,
    height: 900,
  },
  {
    src: roboticsImg,
    alt: "Industrial robotic arm working beside its control cabinet on a production line",
    caption: "Automation projects",
    width: 1200,
    height: 900,
  },
  {
    src: rtccImg,
    alt: "Power distribution panel with digital metering instruments and indicating lamps",
    caption: "RTCC / metering panels",
    width: 1024,
    height: 1024,
  },
  {
    src: vfdImg,
    alt: "Row of variable frequency drives mounted inside a control panel",
    caption: "VFD panels",
    width: 1024,
    height: 1024,
  },
  {
    src: craneImg,
    alt: "Crane control panel with drive modules beside a pendant station on a factory floor",
    caption: "Crane & lift panels",
    width: 1024,
    height: 1024,
  },
  {
    src: cableImg,
    alt: "Cable trays with bundled power cables and terminations into a control panel",
    caption: "Cable tray & termination",
    width: 1024,
    height: 1024,
  },
  {
    src: schematicImg,
    alt: "Engineering workstation with electrical schematic CAD drawings and printed GA sheets",
    caption: "Design & drawings",
    width: 1024,
    height: 1024,
  },
  {
    src: testingImg,
    alt: "Insulation tester and multimeter connected to a control panel during final testing",
    caption: "Testing before dispatch",
    width: 1024,
    height: 1024,
  },
  {
    src: scadaImg,
    alt: "Control room monitors showing SCADA process mimics and trend graphs",
    caption: "SCADA systems",
    width: 1024,
    height: 1024,
  },
  {
    src: interiorImg,
    alt: "Freshly wired control panel interior with labeled ferrules and dressed wiring looms",
    caption: "Panel wiring close-up",
    width: 1024,
    height: 1024,
  },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | SAI Electrical and Controls" },
      {
        name: "description",
        content:
          "See our work — control panels, PLC/HMI/SCADA systems, SPM machines, FLP panels and on-site commissioning by SAI Electrical and Controls.",
      },
      {
        property: "og:title",
        content: "Gallery | SAI Electrical and Controls",
      },
      {
        property: "og:description",
        content:
          "Control panels, automation systems and commissioning work by SEC SAI Electrical and Controls.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <section className="blueprint-grid border-b border-border">
        <div className="mx-auto max-w-7xl 2xl:max-w-[96rem] px-4 lg:px-8 py-12 sm:py-16 lg:py-20">
          <Reveal>
            <p className="font-display text-xl uppercase tracking-widest text-accent">
              Gallery
            </p>
            <h1 className="mt-2 max-w-3xl font-display text-4xl font-bold uppercase leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
              Our work on the floor
            </h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              A look at the panels, machines and systems we build and support.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl 2xl:max-w-[96rem] px-4 lg:px-8">
          <ul className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {PHOTOS.map((photo, index) => (
              <li
                key={photo.caption}
                className="mb-5 break-inside-avoid"
              >
                <Reveal delay={(index % 3) * 0.08}>
                  <div className="overflow-hidden rounded-lg border border-border bg-card shadow-lg transition-shadow duration-300 hover:shadow-xl">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full object-cover transition-transform duration-700 hover:scale-105"
                      width={photo.width}
                      height={photo.height}
                      loading="lazy"
                    />
                    <p className="border-t border-border px-4 py-3 font-display text-lg font-semibold uppercase tracking-wide text-foreground">
                      {photo.caption}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="steel-surface">
        <div className="mx-auto flex max-w-7xl 2xl:max-w-[96rem] flex-col items-center gap-5 px-4 lg:px-8 py-14 text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-foreground sm:text-4xl">
            Want work like this for your plant?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-display text-xl font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get in touch
            <ArrowRight className="size-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
