
"use client";

import { motion } from "framer-motion";
import { Download, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const EXPERIENCE = [
  {
    role: "Senior Software Architect",
    company: "Global Tech Solutions",
    period: "2021 — Present",
    desc: "Leading a team of 15 developers in building cloud-native SaaS platforms. Implemented microservices architecture that reduced operational costs by 30%."
  },
  {
    role: "Full-Stack Developer",
    company: "Innovate AI",
    period: "2018 — 2021",
    desc: "Developed machine learning integration modules for predictive maintenance. Scaled system throughput to handle 1M+ daily transactions."
  },
  {
    role: "Junior Web Engineer",
    company: "StartUp Hub",
    period: "2015 — 2018",
    desc: "Responsive web development focusing on SEO and performance optimization. Built reusable UI component libraries used across multiple client projects."
  }
];

const EDUCATION = [
  {
    degree: "M.S. in Computer Science",
    school: "Stanford University",
    period: "2013 — 2015"
  },
  {
    degree: "B.S. in Software Engineering",
    school: "MIT",
    period: "2009 — 2013"
  }
];

export function Resume() {
  return (
    <section id="resume" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/3">
            <h2 className="text-4xl font-headline font-bold mb-12 flex items-center gap-4">
              <Briefcase className="text-primary w-10 h-10" />
              Professional Experience
            </h2>
            
            <div className="space-y-12 relative border-l-2 border-primary/20 pl-8 ml-4">
              {EXPERIENCE.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-0 w-5 h-5 bg-background border-4 border-primary rounded-full" />
                  <span className="text-primary font-bold text-sm tracking-widest">{exp.period}</span>
                  <h3 className="text-2xl font-headline font-bold mt-2">{exp.role}</h3>
                  <p className="text-muted-foreground font-medium mb-4">{exp.company}</p>
                  <p className="text-muted-foreground max-w-2xl leading-relaxed">{exp.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-card border border-border p-10 rounded-3xl mb-12">
              <h2 className="text-2xl font-headline font-bold mb-8 flex items-center gap-4">
                <GraduationCap className="text-primary w-8 h-8" />
                Education
              </h2>
              <div className="space-y-8">
                {EDUCATION.map((edu, i) => (
                  <div key={i}>
                    <span className="text-primary font-bold text-xs uppercase tracking-widest">{edu.period}</span>
                    <h4 className="text-xl font-headline font-bold mt-1">{edu.degree}</h4>
                    <p className="text-muted-foreground text-sm">{edu.school}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary p-10 rounded-3xl text-primary-foreground relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 -translate-y-1/2 translate-x-1/2 rounded-full group-hover:scale-150 transition-transform duration-700" />
              <h3 className="text-2xl font-headline font-bold mb-4 relative z-10">Interested in my work?</h3>
              <p className="mb-8 opacity-90 relative z-10">Get a comprehensive view of my journey and skills in a single PDF document.</p>
              <Button variant="secondary" className="w-full rounded-full font-bold relative z-10">
                <Download className="mr-2 w-4 h-4" /> Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
