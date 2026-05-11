
"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const SKILL_CATEGORIES = [
  {
    title: "Frontend Development",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion", "Three.js"]
  },
  {
    title: "Backend & DevOps",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "GitHub Actions"]
  },
  {
    title: "Tools & Architectures",
    skills: ["Microservices", "GraphQL", "REST APIs", "Jest", "Storybook", "Figma", "Firebase"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-headline font-bold mb-6">Technical <span className="text-primary">Proficiency</span></h2>
            <p className="text-muted-foreground mb-8">
              A comprehensive list of technologies I use to bring ideas to life. I stay at the forefront of the industry to provide the best solutions.
            </p>
            <div className="p-6 bg-secondary/50 rounded-2xl border border-border">
              <p className="text-sm font-medium italic">
                "Code is like humor. When you have to explain it, it’s bad."
              </p>
              <p className="text-xs mt-2 text-primary font-bold uppercase">— Cory House</p>
            </div>
          </div>
          
          <div className="md:w-2/3 grid gap-10">
            {SKILL_CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-xl font-headline font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-primary" />
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
