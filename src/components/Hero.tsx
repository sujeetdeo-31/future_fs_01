
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase mb-4 block">
            Full Stack Developer & CS Student
            </span>
            <h1 className="text-5xl md:text-7xl font-headline font-bold mb-6 leading-tight">
            Building Modern Full-Stack <span className="text-primary">Web Applications</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
            I am a Computer Science student passionate about full-stack web development and building modern responsive applications using React, Node.js, and MongoDB.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <Button asChild size="lg" className="rounded-full shadow-xl shadow-primary/20">
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <div className="flex items-center gap-4 px-4">
                <a href="https://github.com/SujeetDeo-31" className="p-2 text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/sujeet31in/" className="p-2 text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:sujitkumardeo31@gmail.com" className="p-2 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

  <div className="flex items-center gap-8 py-6 border-t border-border">
  <div>
    <p className="text-3xl font-headline font-bold">5+</p>
    <p className="text-xs text-muted-foreground uppercase tracking-widest">
      Projects Built
    </p>
  </div>

  <div>
    <p className="text-3xl font-headline font-bold">Full Stack</p>
    <p className="text-xs text-muted-foreground uppercase tracking-widest">
      Web Development
    </p>
  </div>

  <div>
    <p className="text-3xl font-headline font-bold">Open Source</p>
    <p className="text-xs text-muted-foreground uppercase tracking-widest">
      Learning Journey
    </p>
  </div>
</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square relative rounded-3xl overflow-hidden border-2 border-primary/20 shadow-2xl">
              <Image
                src={heroImage?.imageUrl || "https://picsum.photos/seed/elite/800/800"}
                alt="Elite Developer"
                width={800}
                height={800}
                className="object-cover"
                data-ai-hint="developer portrait"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            
            {/* Floating stats card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-card border border-border p-6 rounded-2xl shadow-2xl"
            >
              <p className="text-primary font-bold text-sm uppercase mb-1">Current Focus</p>
              <p className="font-headline text-xl">Full Stack Development</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
