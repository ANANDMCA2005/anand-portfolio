"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

const skills = {
  "Program & Project Management": [
    "Agile Project Management",
    "End-to-end Delivery Management",
    "Project Life Cycle Management",
    "Release Planning",
    "Backlog Grooming",
    "Sprint Planning",
    "KPI Reporting",
  ],
  "Governance & Control": [
    "Risk & Issue Management",
    "Budgeting & Cost Control",
    "Compliance & Regulatory Adherence",
    "Governance Transparency",
    "Executive Reporting",
  ],
  "Leadership & Collaboration": [
    "Stakeholder Alignment",
    "Team Mentoring & Coaching",
    "Cross-functional Collaboration",
    "Conflict Resolution",
    "Performance Management",
  ],
  "Process Excellence": [
    "Change Management",
    "Process Automation",
    "Quality Assurance",
    "Operational Efficiency",
    "Continuous Improvement",
  ],
  "Technology & Delivery": [
    "DevOps Pipelines",
    "CI/CD",
    "Cloud & Core Banking Solutions",
    "SAP Business Objects",
  ],
};

const tools = {
  "Agile & Project Management": ["Jira", "Asana", "Confluence", "MS Project", "MS Visio"],
  "Collaboration & Testing": ["Microsoft Office", "TestRail", "Zephyr"],
  "Development & CI/CD": ["GitHub", "Bitbucket", "Jenkins", "OpenShift"],
  "Data & Analytics": ["SAP BO 4.2", "SQL Database"],
  "Payments & Protocols": ["ISO 8583", "SWIFT", "ISO 20022", "EMV", "SEPA"],
  "Simulators & Products": ["Finsim", "Amex", "MasterCard/Visa", "Europay", "MBP", "IBS", "IST/Switch", "Connex"],
};

const experience = [
  {
    company: "Fidelity Information Services (FIS)",
    role: "Principal Engineer / Delivery Lead",
    location: "Chennai, India",
    period: "Jun 2016 – Aug 2025",
    highlights: [
      "Facilitated Agile ceremonies for 3 teams (21+ members), improving sprint predictability by 30%.",
      "Coached teams on Agile maturity, boosting velocity and reducing spillovers.",
      "Delivered multiple enterprise projects (SAP BO conversion, ETL QA, IBS BIC architecture) supporting 40+ banks.",
      "Implemented an AI-driven support agent, reducing support costs by 20% and increasing CSAT by 10%.",
      "Deployed an AI-based loan personalization agent, increasing conversion rates by 7%.",
      "Successfully delivered a $3M SAP BO conversion project with <1% defects.",
      "Automated regression testing, cutting post-release defects by 25%.",
    ],
  },
  {
    company: "Cognizant Technology Solutions",
    role: "Senior Associate",
    location: "Chennai, India",
    period: "Apr 2015 – Jun 2016",
    highlights: [
      "Drove successful delivery of BI applications for 4+ clients.",
      "Partnered with cross-functional teams to deliver projects within tight deadlines.",
    ],
  },
  {
    company: "Tata Consultancy Services (TCS)",
    role: "Assistant Consultant",
    location: "Chennai, India",
    period: "Sep 2011 – Mar 2015",
    highlights: [
      "Improved client satisfaction by 15% with proactive updates and issue resolution.",
      "Led 5+ recruitment drives, supporting 20+ hires.",
    ],
  },
  {
    company: "Syntel Limited",
    role: "Analyst Programmer",
    location: "Chennai, India",
    period: "Sep 2010 – Jun 2011",
    highlights: [
      "Automated reporting dashboards, reducing data entry errors by 30%.",
      "Contributed to hiring efforts by participating in recruitment drives.",
    ],
  },
  {
    company: "Wipro Technologies",
    role: "Senior Software Engineer",
    location: "Chennai, India",
    period: "Apr 2010 – Sep 2010",
    highlights: [
      "Improved CSAT by 25% and reduced response times by 15% through proactive issue resolution.",
      "Delivered 100% on-time and defect-free fixes.",
    ],
  },
  {
    company: "MRESULT Services Pvt Ltd",
    role: "Senior Software Developer",
    location: "Bengaluru, India",
    period: "Jun 2006 – Apr 2010",
    highlights: [
      "Trained 20+ developers on design and review standards.",
      "Resolved complex technical issues across multiple projects.",
    ],
  },
];

const projects = [
  {
    title: "AI-Driven Support Agent for Payments Platform",
    context: "Fidelity Information Services",
    details:
      "Led delivery for an AI support agent for FIS payment systems, handling L1 queries, knowledge lookup, and troubleshooting guidance.",
    impact: [
      "Reduced support costs by 20% and improved CSAT by 10%.",
      "Shortened average response times and enabled 24x7 self-service support.",
    ],
    tags: ["AI", "Support Automation", "Payments"],
  },
  {
    title: "AI-Based Loan Personalization Engine",
    context: "FIS – Retail Banking Transformation",
    details:
      "Led delivery for an AI-powered recommendation engine that personalized loan offers based on customer profiles and transaction patterns.",
    impact: [
      "Increased loan conversion rates by 7%.",
      "Enabled targeted, compliant, and scalable lending campaigns.",
    ],
    tags: ["AI", "Personalization", "Retail Banking"],
  },
  {
    title: "$3M SAP Business Objects Conversion Program",
    context: "Global Banking Client",
    details:
      "Managed end-to-end delivery of SAP BO conversion and upgrade, modernizing legacy reporting for 40+ banks.",
    impact: [
      "Delivered with <1% defects in production.",
      "Improved reporting stability and reduced manual reconciliations.",
    ],
    tags: ["SAP BO", "Data & Analytics", "Program Management"],
  },
  {
    title: "Cloud & Core Banking Modernization",
    context: "Multiple Financial Institutions",
    details:
      "Led initiatives around core lending product development (MBP), IBS BIC application support, and payment switch enhancement.",
    impact: [
      "Improved system reliability and transaction throughput across channels.",
      "Enhanced compliance with EMV, SEPA, ISO 8583, ISO 20022 standards.",
    ],
    tags: ["Core Banking", "Cloud", "Payments"],
  },
];

const aiPortfolio = [
  {
    title: "Anand's AI Career Agent",
    description:
      "Personal AI chatbot that answers queries about my skills, project experience, education, job preferences, and personal details.",
    link: "https://anandbala-anands-ai-career-agent.hf.space",
    outcomes: [
      "Showcases my hands-on experience with LLM integration and prompt design.",
      "Acts as a living, interactive portfolio for recruiters and stakeholders.",
    ],
  },
  {
    title: "AI-Driven Governance Dashboard (Concept)",
    description:
      "Design for an AI assistant that surfaces delivery risks, predicts slippages, and generates executive-ready status reports using Jira, ADO, and CI/CD data.",
    link: undefined,
    outcomes: [
      "Reduces time spent on status prep and governance reporting.",
      "Improves early risk visibility across programs and projects.",
    ],
  },
];

const certifications = [
  "Certified SAFe 5 Scrum Master",
  "Certified SAFe 5 Product Owner / Product Manager (POPM)",
  "TOGAF Enterprise Architect",
];

const education = [
  {
    degree: "MBA, Distance Education",
    institution: "Madras University, Chennai",
    year: "2015",
  },
  {
    degree: "MCA",
    institution: "Anna University, Chennai",
    year: "2005",
  },
];

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "ai", label: "AI Portfolio" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const SectionTitle: React.FC<{ title: string; eyebrow?: string }> = ({ title, eyebrow }) => (
  <div className="mb-6">
    {eyebrow && (
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
        {eyebrow}
      </p>
    )}
    <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-50">
      {title}
    </h2>
  </div>
);

const Chip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-200">
    {children}
  </span>
);

const AnandITPMPortfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Gradient background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-[-10%] h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute right-[-10%] top-1/3 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute bottom-[-10%] left-1/4 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      {/* Layout */}
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 md:flex-row md:px-8">
        {/* Left sidebar / hero */}
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:sticky md:top-6 md:h-[calc(100vh-3rem)] md:w-80"
        >
          <Card className="border-slate-800/80 bg-gradient-to-b from-slate-950/95 to-slate-900/80 shadow-2xl shadow-black/60 backdrop-blur">
            <CardHeader className="pb-4 flex flex-col items-center text-center md:items-start md:text-left">
              {/* Profile photo - square, larger, glow */}
              <div className="relative mb-4 h-36 w-36 overflow-hidden rounded-2xl border border-slate-600 bg-slate-900 ring-2 ring-indigo-500/70 shadow-[0_0_30px_rgba(129,140,248,0.7)]">
                <Image
                  src="/Anand_Pic.png"
                  alt="Anand portrait"
                  fill
                  sizes="144px"
                  className="object-cover"
                />
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-400">
                IT Project & Program Manager
              </p>
              <CardTitle className="mt-2 text-2xl font-semibold text-slate-50">
                Anand
                <span className="block text-sm font-normal text-slate-400">
                  Strategic IT Leader · 19+ years
                </span>
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-5 text-sm text-slate-200">
              <p className="text-sm text-slate-300">
                Delivering large-scale digital transformation across Banking, Healthcare, and Financial Services.
                Specialised in governance, payments, and AI-driven delivery.
              </p>

              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-slate-400" />
                  <a
                    href="mailto:anandondotnet@gmail.com"
                    className="truncate text-slate-200 hover:text-indigo-300"
                  >
                    anandondotnet@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-slate-400" />
                  <span className="text-slate-200">+91 98843 07456</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-slate-400" />
                  <span className="text-slate-200">Chennai, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4 text-slate-400" />
                  <a
                    href="https://linkedin.com/in/anandbalaki"
                    target="_blank"
                    rel="noreferrer"
                    className="truncate text-slate-200 hover:text-indigo-300"
                  >
                    linkedin.com/in/anandbalaki
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-2 pt-1 md:justify-start">
                <Badge className="border-0 bg-indigo-600/90 text-xs text-slate-50">
                  Digital Transformation
                </Badge>
                <Badge className="border border-slate-700 bg-slate-900/80 text-xs text-slate-100">
                  Payments & Core Banking
                </Badge>
                <Badge className="border border-slate-700 bg-slate-900/80 text-xs text-slate-100">
                  AI-Driven Delivery
                </Badge>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                <Button
                  asChild
                  size="sm"
                  className="h-8 rounded-full bg-indigo-600 px-3 text-xs font-medium text-slate-50 hover:bg-indigo-500"
                >
                  <a href="#contact">
                    Contact Me
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="h-8 rounded-full border-slate-700 bg-slate-900/70 px-3 text-xs text-slate-100 hover:bg-slate-800"
                >
                  <a href="#ai">
                    View AI Work
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </Button>
              </div>

              <div className="border-t border-slate-800 pt-4">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Navigate
                </p>
                <div className="flex flex-wrap gap-2">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="rounded-full border border-slate-700 bg-slate-950/40 px-3 py-1 text-[11px] text-slate-200 transition hover:border-indigo-500 hover:bg-slate-900"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.aside>

        {/* Main content */}
        <motion.main
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex-1 space-y-12 pb-10"
        >
          {/* About */}
          <section id="about" className="scroll-mt-24">
            <SectionTitle eyebrow="Overview" title="Strategic IT leadership with deep delivery and payments expertise" />
            <div className="space-y-4 text-sm text-slate-200">
              <p>
                I am a Project Manager and Strategic IT Leader with 19+ years of experience delivering large-scale digital
                transformation across Banking, Healthcare, and Financial Services. I specialise in modernising legacy systems,
                driving cloud adoption, and ensuring regulatory compliance while maintaining strong governance.
              </p>
              <p>
                My focus is on building high-performing teams, fostering transparency, and driving KPI-based outcomes that
                improve customer experience, operational efficiency, and business value.
              </p>
              <div className="flex flex-wrap gap-2 pt-1 text-xs text-slate-300">
                <Chip>Digital Transformation</Chip>
                <Chip>Payments & Core Banking</Chip>
                <Chip>AI & Automation</Chip>
                <Chip>Agile / SAFe / Waterfall</Chip>
                <Chip>Stakeholder Management</Chip>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="scroll-mt-24">
            <SectionTitle eyebrow="Career" title="Experience" />
            <div className="space-y-4">
              {experience.map((job) => (
                <Card
                  key={job.company + job.period}
                  className="border-slate-800/80 bg-gradient-to-b from-slate-950/95 to-slate-900/80 shadow-lg shadow-black/40"
                >
                  <CardHeader className="pb-3">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                          {job.company}
                        </p>
                        <CardTitle className="mt-1 text-base font-semibold text-slate-50">
                          {job.role}
                        </CardTitle>
                      </div>
                      <div className="text-right text-xs text-slate-400">
                        <p>{job.period}</p>
                        <p>{job.location}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 text-sm text-slate-200">
                    <ul className="list-disc space-y-1 pl-5 text-slate-300">
                      {job.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section id="skills" className="scroll-mt-24">
            <SectionTitle eyebrow="Capabilities" title="Skills & Tools" />
            <div className="grid gap-4 md:grid-cols-2">
              {Object.entries(skills).map(([group, items]) => (
                <Card
                  key={group}
                  className="border-slate-800/80 bg-gradient-to-b from-slate-950/95 to-slate-900/80 shadow-lg shadow-black/40"
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-semibold text-slate-50">{group}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2 text-xs text-slate-200">
                    {items.map((item) => (
                      <Chip key={item}>{item}</Chip>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6 space-y-3">
              <h3 className="text-sm font-semibold text-slate-200">Tools & Platforms</h3>
              <div className="grid gap-3 md:grid-cols-2">
                {Object.entries(tools).map(([group, items]) => (
                  <div key={group} className="rounded-xl border border-slate-800 bg-slate-950/80 p-3 text-xs shadow-md shadow-black/40">
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                      {group}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-slate-900/80 px-2 py-1 text-[11px] text-slate-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="scroll-mt-24">
            <SectionTitle eyebrow="Selected Work" title="Key Programs & Projects" />
            <div className="grid gap-4 lg:grid-cols-2">
              {projects.map((project) => (
                <Card
                  key={project.title}
                  className="flex flex-col border-slate-800/80 bg-gradient-to-b from-slate-950/95 to-slate-900/80 shadow-lg shadow-black/40"
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base font-semibold text-slate-50">
                      {project.title}
                    </CardTitle>
                    <p className="text-xs text-slate-400">{project.context}</p>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col justify-between pt-0 text-sm text-slate-200">
                    <p className="mb-3 text-sm text-slate-200">{project.details}</p>
                    <ul className="mb-3 list-disc space-y-1 pl-5 text-xs text-slate-300">
                      {project.impact.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 text-[11px]">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-900/80 px-2 py-1 text-[11px] text-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* AI Portfolio */}
          <section id="ai" className="scroll-mt-24">
            <SectionTitle eyebrow="AI & Automation" title="AI-First Portfolio" />
            <div className="grid gap-4 md:grid-cols-2">
              {aiPortfolio.map((item) => (
                <Card
                  key={item.title}
                  className="border-slate-800/80 bg-gradient-to-b from-slate-950/95 to-slate-900/80 shadow-lg shadow-black/40"
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base font-semibold text-slate-50">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-slate-200">
                    <p>{item.description}</p>
                    <ul className="list-disc space-y-1 pl-5 text-xs text-slate-300">
                      {item.outcomes.map((o) => (
                        <li key={o}>{o}</li>
                      ))}
                    </ul>
                    {item.link && (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="h-8 rounded-full border-slate-700 bg-slate-900/80 px-3 text-xs text-slate-100 hover:bg-slate-800"
                      >
                        <a href={item.link} target="_blank" rel="noreferrer">
                          Open Live Demo
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Chatbot */}
          <section id="chatbot" className="scroll-mt-24">
            <SectionTitle eyebrow="Interactive" title="Talk to my AI Career Agent" />
            <div className="space-y-3 text-sm text-slate-200">
              <p>
                This chatbot is built as a Hugging Face Space and is connected to my real experience, skills, and
                preferences. Recruiters and stakeholders can interact with it to explore my profile in a conversational way.
              </p>
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 shadow-lg shadow-black/50">
                <iframe
                  src="https://anandbala-anands-ai-career-agent.hf.space"
                  title="Anand's AI Career Agent"
                  loading="lazy"
                  className="h-[600px] w-full"
                />
              </div>
            </div>
          </section>

          {/* Education & Certifications */}
          <section id="education" className="scroll-mt-24">
            <SectionTitle eyebrow="Profile" title="Education & Certifications" />
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-800/80 bg-slate-950/80 shadow-lg shadow-black/40">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold text-slate-50">Education</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-slate-200">
                  {education.map((edu) => (
                    <div key={edu.degree} className="border-l border-slate-700 pl-3">
                      <p className="text-slate-100">{edu.degree}</p>
                      <p className="text-xs text-slate-400">{edu.institution}</p>
                      <p className="text-[11px] text-slate-500">{edu.year}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-slate-800/80 bg-slate-950/80 shadow-lg shadow-black/40">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold text-slate-50">Certifications & Awards</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-slate-200">
                  <ul className="list-disc space-y-1 pl-5 text-xs text-slate-300">
                    {certifications.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                    <li>Operational Excellence Award (FIS)</li>
                    <li>Make a Difference Award (FIS)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="scroll-mt-24">
            <SectionTitle eyebrow="Next Step" title="Let&apos;s talk about delivery, AI, and transformation" />
            <Card className="border-slate-800/80 bg-slate-950/80 shadow-lg shadow-black/40">
              <CardContent className="flex flex-col gap-6 py-5 text-sm text-slate-200 md:flex-row md:items-center md:justify-between">
                <div className="space-y-2">
                  <p>
                    Whether you&apos;re scaling an existing platform, modernising legacy architecture, or exploring how AI can
                    strengthen delivery, I&apos;d be happy to connect.
                  </p>
                  <div className="mt-2 space-y-1 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-slate-400" />
                      <a
                        href="mailto:anandondotnet@gmail.com"
                        className="text-slate-200 hover:text-indigo-300"
                      >
                        anandondotnet@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Linkedin className="h-4 w-4 text-slate-400" />
                      <a
                        href="https://linkedin.com/in/anandbalaki"
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-200 hover:text-indigo-300"
                      >
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 text-xs text-slate-300 md:items-end">
                  <Button
                    asChild
                    className="h-9 rounded-full bg-indigo-600 px-4 text-xs font-medium text-slate-50 hover:bg-indigo-500"
                  >
                    <a href="#about">
                      View Profile Summary
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </a>
                  </Button>
                  <p className="max-w-xs text-right text-[11px] text-slate-400">
                    Available for roles in IT Project / Program Management, Delivery Leadership, and AI-led transformation
                    initiatives.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        </motion.main>
      </div>
    </div>
  );
};

export default AnandITPMPortfolio;