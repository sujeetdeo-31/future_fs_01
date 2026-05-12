"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";

const PROJECTS = [
  {
    id: "project-1",
    title: "Travel AI – Predictive Intelligence Engine",
    desc: "An AI-powered travel analysis dashboard that uses Google Gemini API to generate structured travel insights, compare trip options, and help users plan trips more efficiently through interactive data panels.",
    techs: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Gemini API",
    ],
    github: "https://github.com/SujeetDeo-31/travel-intelligence-engine",
    demo: "https://travel-web-intelligence-engine.vercel.app/",
  },
  {
    id: "project-2",
    title: "Health Insurance Cost Prediction",
    desc: "A machine learning web application that predicts health insurance charges using demographic and lifestyle data. Built with feature engineering, model evaluation, and deployed with Streamlit for real-time predictions.",
    techs: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Streamlit",
      "Machine Learning",
    ],
    github: "https://github.com/SujeetDeo-31/Health-Insurance-Charges-Predictor-AI",
    demo: "https://insurance-charges-predictor.streamlit.app/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-headline font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            A small selection of my real work in AI, web development, and
            machine learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => {
            const imgData = PlaceHolderImages.find((img) => img.id === project.id);

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/50 transition-all flex flex-col h-full"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={imgData?.imageUrl || "https://picsum.photos/seed/p/800/450"}
                    alt={project.title}
                    width={800}
                    height={450}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint={imgData?.imageHint || "software screenshot"}
                  />

                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      className="bg-background p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      className="bg-background p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techs.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-headline font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {project.desc}
                  </p>

                  <div className="pt-6 border-t border-border mt-auto">
                    <Button
                      variant="link"
                      className="p-0 h-auto text-primary font-bold group-hover:translate-x-1 transition-transform"
                    >
                      Read Case Study
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const ArrowRight = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 8H15M15 8L8 1M15 8L8 15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);