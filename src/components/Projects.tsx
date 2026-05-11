
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";

const PROJECTS = [
  {
    id: "project-1",
    title: "NextGen Dashboard",
    desc: "A high-performance analytics dashboard for cloud infrastructure monitoring.",
    techs: ["Next.js", "Recharts", "Prisma"],
    github: "#",
    demo: "#"
  },
  {
    id: "project-2",
    title: "SwiftCommerce",
    desc: "Full-stack e-commerce engine with real-time inventory management.",
    techs: ["React", "Stripe", "Express"],
    github: "#",
    demo: "#"
  },
  {
    id: "project-3",
    title: "AI Sentinel",
    desc: "Machine learning platform for anomaly detection in network traffic.",
    techs: ["Python", "TensorFlow", "FastAPI"],
    github: "#",
    demo: "#"
  },
  {
    id: "project-4",
    title: "Vitals Mobile",
    desc: "Health tracking application with encrypted local storage.",
    techs: ["React Native", "Firebase", "HealthKit"],
    github: "#",
    demo: "#"
  },
  {
    id: "project-5",
    title: "CipherChat",
    desc: "End-to-end encrypted messaging service using WebCrypto API.",
    techs: ["Node.js", "WebSockets", "Redis"],
    github: "#",
    demo: "#"
  },
  {
    id: "project-6",
    title: "EstateExplorer",
    desc: "Immersive real-estate platform with 3D property tours.",
    techs: ["Three.js", "Next.js", "Mapbox"],
    github: "#",
    demo: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-headline font-bold mb-4">Selected <span className="text-primary">Works</span></h2>
            <p className="text-muted-foreground max-w-lg">
              A curated selection of my recent projects. Each represents a unique challenge solved with modern technology.
            </p>
          </div>
          <Button variant="outline" className="rounded-full">
            View All Projects
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => {
            const imgData = PlaceHolderImages.find(img => img.id === project.id);
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
                    <a href={project.github} className="bg-background p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.demo} className="bg-background p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex gap-2 mb-4">
                    {project.techs.map(t => (
                      <span key={t} className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded">
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
                    <Button variant="link" className="p-0 h-auto text-primary font-bold group-hover:translate-x-1 transition-transform">
                      Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
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
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
