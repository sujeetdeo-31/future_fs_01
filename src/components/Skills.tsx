"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { PORTFOLIO_DATA } from "@/lib/constants";

export function Skills() {
  const categories = [
    { title: "Frontend Development", skills: PORTFOLIO_DATA.skills.frontend },
    { title: "Backend & Database", skills: PORTFOLIO_DATA.skills.backend },
    { title: "Programming & Tools", skills: PORTFOLIO_DATA.skills.tools },
    { title: "Machine Learning", skills: PORTFOLIO_DATA.skills.ml },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-headline font-bold mb-6">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Technologies and tools I use while building full-stack web
              applications, APIs, and machine learning projects.
            </p>
          </div>

          <div className="md:w-2/3 grid gap-10">
            {categories.map((cat, i) => (
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
