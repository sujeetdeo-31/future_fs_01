"use client";

import { motion } from "framer-motion";
import { Download, GraduationCap, Code2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PORTFOLIO_DATA } from "@/lib/constants";

export function Resume() {
  return (
    <section id="resume" className="py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex flex-col gap-4">
          <h2 className="text-4xl font-headline font-bold flex items-center gap-4">
            <Sparkles className="text-primary w-10 h-10" />
            Resume Overview
          </h2>
          <p className="text-muted-foreground max-w-3xl leading-relaxed">
            A concise summary of my academic background, technical skills, and
            the projects I have built so far.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-card border border-border p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-headline font-bold mb-4">Summary</h3>
              <p className="text-muted-foreground leading-relaxed">
                Computer Science undergraduate focused on Data Structures and
                Algorithms, Web Development, and Machine Learning. Built
                AI-powered web applications integrating LLM APIs and machine
                learning models, applying data-driven insights to solve
                real-world problems.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-headline font-bold mb-8 flex items-center gap-3">
                <Code2 className="text-primary w-7 h-7" />
                Projects
              </h3>

              <div className="space-y-8 relative border-l-2 border-primary/20 pl-8 ml-3">
                {PORTFOLIO_DATA.projects.map((project, i) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -left-[41px] top-1 w-5 h-5 bg-background border-4 border-primary rounded-full" />
                    <div className="flex flex-col gap-1">
                      <h4 className="text-xl font-headline font-bold">{project.title}</h4>
                      <p className="text-sm text-muted-foreground italic">
                        {project.techs.join(", ")}
                      </p>
                      <p className="text-muted-foreground mt-3 leading-relaxed">
                        {project.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-headline font-bold mb-6">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {[...PORTFOLIO_DATA.skills.frontend, ...PORTFOLIO_DATA.skills.backend, ...PORTFOLIO_DATA.skills.tools].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-secondary/60 border border-border text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-card border border-border p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-headline font-bold mb-6 flex items-center gap-3">
                <GraduationCap className="text-primary w-7 h-7" />
                Education
              </h3>

              <div className="space-y-8">
                {PORTFOLIO_DATA.education.map((edu, idx) => (
                  <div key={idx}>
                    <span className="text-primary font-bold text-sm uppercase tracking-widest">
                      {edu.period}
                    </span>
                    <h4 className="text-xl font-headline font-bold mt-1">
                      {edu.degree}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {edu.institution}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {edu.location}
                    </p>
                    <p className="mt-2 text-sm">
                      CGPA: <span className="font-semibold">{edu.gpa}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-headline font-bold mb-6">
                Relevant Coursework
              </h3>
              <div className="flex flex-wrap gap-3">
                {PORTFOLIO_DATA.coursework.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-primary p-8 rounded-3xl text-primary-foreground relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-2xl font-headline font-bold mb-3 relative z-10">
                Download Resume
              </h3>
              <p className="mb-6 opacity-90 relative z-10">
                Get a PDF copy of my resume with education, skills, and project
                details.
              </p>
              <Button
                asChild
                variant="secondary"
                className="w-full rounded-full font-bold relative z-10"
              >
                <a href={PORTFOLIO_DATA.resumeUrl} download>
                  <Download className="mr-2 w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
