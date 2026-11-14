/**
 * Single source of truth for business facts shown on the site.
 * Real details come from the SEC visiting card — do not invent data here.
 */

export const BUSINESS = {
  name: "SAI Electrical and Controls",
  shortName: "SEC",
  tagline: "Electrical & Control Panels · Automation · Support Services",
  email: "saielectricalcontrols@gmail.com",
  phones: [
    {
      label: "+91 72004 44216",
      tel: "tel:+917200444216",
      whatsapp: "https://wa.me/917200444216",
    },
    {
      label: "+91 98949 76258",
      tel: "tel:+919894976258",
      whatsapp: "https://wa.me/919894976258",
    },
  ],
} as const;

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export type ServiceIcon =
  | "circuit-board"
  | "cpu"
  | "drafting-compass"
  | "settings"
  | "shield-check"
  | "arrow-up-down"
  | "cable"
  | "code";

export interface Service {
  slug: string;
  icon: ServiceIcon;
  title: string;
  short: string;
  description: string;
  applications: string[];
}

export const SERVICES: Service[] = [
  {
    slug: "electrical-control-panels",
    icon: "circuit-board",
    title: "Electrical & Control Panels",
    short:
      "Low-voltage power and control panels manufactured to your specification and load requirements.",
    description:
      "We manufacture electrical power-based low-voltage panels built around customer requirements — from power distribution to motor control, with neat workmanship, labeled wiring and thorough testing before dispatch.",
    applications: [
      "Transformer RTCC panels",
      "Metering panels",
      "Power Distribution Boards (PDB)",
      "ACB, MCC and VFD panels",
      "Soft-starter panels",
    ],
  },
  {
    slug: "control-automation",
    icon: "cpu",
    title: "Control & Automation",
    short:
      "PLC, HMI, SCADA, servo and VFD based control systems designed, built and supported end to end.",
    description:
      "We design advanced control systems around PLC, HMI, SCADA, servo and VFD platforms — standalone machines or complete lines — for automobile and non-automobile industries, food processing and more.",
    applications: [
      "PLC & HMI based machine control",
      "SCADA monitoring systems",
      "Servo & VFD motion control",
      "Machine retrofits and upgrades",
    ],
  },
  {
    slug: "design-integration",
    icon: "drafting-compass",
    title: "Control System Design & Integration",
    short:
      "Complete control system design — schematics, panel GA drawings, wiring schedules and integration.",
    description:
      "From concept drawings to a working system: control schematics, panel general-arrangement drawings, bills of material, wiring schedules and on-site integration with your existing plant equipment.",
    applications: [
      "Control schematic design",
      "Panel GA & layout drawings",
      "BOM and component selection",
      "System integration with plant equipment",
    ],
  },
  {
    slug: "spm-machines",
    icon: "settings",
    title: "SPM Machines & Panels",
    short:
      "Special purpose machines with matching panels — built, erected, commissioned and programmed.",
    description:
      "Special purpose machine projects delivered as a package: machine-based panels, erection and commissioning, and the programming that brings the machine to life on your shop floor.",
    applications: [
      "Special purpose machines (SPM)",
      "Machine control panels",
      "Erection & commissioning",
      "Machine programming",
    ],
  },
  {
    slug: "flp-panels",
    icon: "shield-check",
    title: "Customised FLP Panels",
    short:
      "Flameproof control panels customised to your design for hazardous-area environments.",
    description:
      "Flameproof (FLP) control panels built to your drawings, available in varied shapes and customised per design for safe operation in hazardous areas.",
    applications: [
      "Pharmaceutical industries",
      "Refineries and oil-related industries",
      "Chemical and solvent handling areas",
    ],
  },
  {
    slug: "crane-lift-panels",
    icon: "arrow-up-down",
    title: "Crane & Lift Panels",
    short:
      "Lift, crane and conveyor panels engineered for reliable hydraulic and motor-based lifting.",
    description:
      "We manufacture lift, crane and conveyor panels based on customer requirement, engineered for dependable duty in hydraulic and motor-based lifting applications.",
    applications: [
      "Lift and elevator control",
      "EOT crane panels",
      "Conveyor systems",
      "Hydraulic lifting applications",
    ],
  },
  {
    slug: "erection-commissioning",
    icon: "cable",
    title: "Erection & Commissioning",
    short:
      "On-site erection support — tray work, cable laying, termination and testing by experienced hands.",
    description:
      "Field support that finishes the job properly: cable tray work, cable laying and termination, testing and commissioning so your panels and machines start up safely and stay running.",
    applications: [
      "Cable tray work",
      "Cable laying & termination",
      "Panel testing",
      "Commissioning support",
    ],
  },
  {
    slug: "programming-services",
    icon: "code",
    title: "Programming Services",
    short:
      "PLC, HMI, SCADA and servo programming support for all types of automation projects.",
    description:
      "Programming support across PLC and HMI platforms, SCADA systems and servo-based projects — new programs, modifications and troubleshooting on existing installations.",
    applications: [
      "PLC programming",
      "HMI development",
      "SCADA configuration",
      "Servo drive programming",
    ],
  },
];

export const WHY_US = [
  {
    title: "Built to your specification",
    text: "Every panel is engineered around your load list, drawings and site conditions — not off the shelf.",
  },
  {
    title: "Checked before it leaves us",
    text: "Panels are wired with labeled ferrules and thoroughly tested before dispatch, so commissioning goes smoothly.",
  },
  {
    title: "One team, end to end",
    text: "Design, manufacturing, erection, commissioning and programming from a single responsible team.",
  },
  {
    title: "Support that stays",
    text: "We support what we build — programming changes, troubleshooting and upgrades as your plant evolves.",
  },
] as const;

export interface ServiceDetail {
  overview: string;
  highlights: string[];
}

/** Extended copy for the per-service pages (all derived from the visiting-card scope). */
export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "electrical-control-panels": {
    overview:
      "Every panel starts with your load list and single-line diagram. We size the busbar and protection scheme, lay out the components for safe access and maintenance, and build the panel in our workshop — power distribution, motor control, metering and indication wired to drawing with labeled ferrules, then function-tested before dispatch.",
    highlights: [
      "Power & control wiring to drawing with labeled ferrules",
      "ACB / MCCB / contactor-based schemes with proper discrimination",
      "Metering, indication and protection as per your specification",
      "Point-to-point check and functional testing before dispatch",
      "Enclosures laid out for ventilation, cable space and maintenance",
    ],
  },
  "control-automation": {
    overview:
      "We build the intelligence around the panel: PLC, HMI and SCADA platforms configured for your process, servo and VFD drives tuned to your mechanics. Whether it's a standalone machine or a complete line, we deliver the control system wired, programmed and commissioned on your floor.",
    highlights: [
      "PLC / HMI / SCADA system design and configuration",
      "Servo and VFD drive sizing, tuning and integration",
      "Interfacing with sensors, encoders and safety devices",
      "Operator screens and alarm handling your team can actually use",
      "Retrofit and upgrade of existing machines and lines",
    ],
  },
  "design-integration": {
    overview:
      "Good panels are drawn before they are built. We produce control schematics, panel GA and layout drawings, bills of material and wiring schedules that your team and ours can work from — and we integrate the finished system with the equipment already running in your plant.",
    highlights: [
      "Control schematics and wiring schedules",
      "Panel GA, layout and enclosure drawings",
      "Bill of material with component selection support",
      "Cable schedules and interconnection drawings",
      "Integration with existing plant equipment and PLC networks",
    ],
  },
  "spm-machines": {
    overview:
      "A special purpose machine is only as good as its control system. We deliver the complete package — machine-based panel, erection, commissioning and the PLC / HMI programming that makes it run — so the machine arrives, starts and stays in production.",
    highlights: [
      "Machine control panels built around the application",
      "Erection and alignment at site",
      "PLC / HMI programming and supervised trial runs",
      "Cycle optimisation and operator walkthrough",
      "Documentation and as-built drawings",
    ],
  },
  "flp-panels": {
    overview:
      "Hazardous areas demand flameproof enclosures and disciplined workmanship. We build FLP control panels to your design — push button stations, junction boxes, control panels — customised in shape and size for pharma, refinery, chemical and solvent-handling environments.",
    highlights: [
      "Panels built to your FLP design and drawings",
      "Customised shapes and sizes to suit your layout",
      "Push button stations, junction boxes and control panels",
      "Suited to pharma, refinery and chemical industries",
      "Careful glanding and termination for hazardous-area duty",
    ],
  },
  "crane-lift-panels": {
    overview:
      "Lifting applications can't afford hesitation. We manufacture lift, crane and conveyor panels engineered for frequent starts, heavy duty cycles and dependable braking — hydraulic or motor-based — and we commission them on site with your operators.",
    highlights: [
      "EOT crane panels with pendant / remote interfaces",
      "Lift and elevator control panels",
      "Conveyor panels with sequencing and interlocks",
      "Hydraulic and motor-based lifting applications",
      "Site commissioning with safety checks",
    ],
  },
  "erection-commissioning": {
    overview:
      "The last mile decides how a panel performs for years. Our site teams handle cable tray work, cable laying and dressing, glanding and termination, then test and commission the panel or machine with your electrical team standing next to us.",
    highlights: [
      "Cable tray work and installation",
      "Power and control cable laying, dressing and termination",
      "Gland plates and panel-to-field wiring checks",
      "Insulation, continuity and functional testing",
      "Trial runs and handover support",
    ],
  },
  "programming-services": {
    overview:
      "Programs outlive panels. We provide PLC, HMI, SCADA and servo programming for new projects and existing installations — new logic, modifications after process changes, and fault-finding when a line goes down and you need it back fast.",
    highlights: [
      "PLC programming across major platforms",
      "HMI screen development and refinement",
      "SCADA configuration, trends and alarm handling",
      "Servo drive programming and motion tuning",
      "Modifications, troubleshooting and program backup",
    ],
  },
};

/** Delivery process shown on the services page and per-service pages. */
export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Requirement",
    text: "Call or WhatsApp us with your drawings, panel schedule or a description of the application.",
  },
  {
    step: "02",
    title: "Design",
    text: "Schematics, GA drawings, BOM and wiring schedules — agreed with you before manufacturing starts.",
  },
  {
    step: "03",
    title: "Build",
    text: "Panels manufactured in our workshop with neat workmanship and labeled ferrules.",
  },
  {
    step: "04",
    title: "Test",
    text: "Point-to-point checks and functional testing before dispatch, so site work stays commissioning.",
  },
  {
    step: "05",
    title: "Erect & commission",
    text: "On-site erection, cable work, termination and commissioning alongside your team.",
  },
  {
    step: "06",
    title: "Support",
    text: "Programming changes, troubleshooting and upgrades as your plant evolves.",
  },
] as const;

/** Industries drawn from the service scope — pharma, food, automobile, oil & chemical. */
export const INDUSTRIES = [
  "Automobile",
  "General manufacturing",
  "Food processing",
  "Pharmaceutical",
  "Refineries & oil",
  "Chemical & solvent handling",
] as const;
