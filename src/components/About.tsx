
"use client";

import { motion } from "framer-motion";
import { User, Cpu, Rocket } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-headline font-bold mb-4"
          >
            About Me
          </motion.h2>
          <div className="h-1.5 w-20 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-muted-foreground text-lg leading-relaxed">
            I am a passionate software developer with a mission to solve complex problems through elegant code. 
            My journey began over a decade ago, and since then, I've had the privilege of working with startups and industry giants to build transformative digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <User className="w-8 h-8 text-primary" />,
              title: "Expertise",
              desc: "Deep knowledge in modern JavaScript frameworks (React, Next.js, Node.js) and TypeScript."
            },
            {
              icon: <Cpu className="w-8 h-8 text-primary" />,
              title: "Process",
              desc: "Test-driven development, CI/CD pipelines, and agile methodologies for reliable software delivery."
            },
            {
              icon: <Rocket className="w-8 h-8 text-primary" />,
              title: "Vision",
              desc: "Committed to creating accessible, user-centric interfaces that provide exceptional user experiences."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border p-8 rounded-2xl hover:border-primary/50 transition-all group"
            >
              <div className="mb-6 bg-secondary w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-primary transition-colors">
                <div className="group-hover:text-primary-foreground transition-colors">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
