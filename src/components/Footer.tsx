
"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-20 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-10 text-center md:text-left">
          <div className="max-w-xs">
            <Link href="/" className="text-2xl font-headline font-bold tracking-tight mb-4 block">
              Elite<span className="text-primary">Portfolio</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Creating digital excellence through code and design. Based in San Francisco, working globally.
            </p>
          </div>
          
          <div className="flex gap-12 text-sm font-medium uppercase tracking-widest">
            <div className="flex flex-col gap-4">
              <Link href="#about" className="hover:text-primary transition-colors">About</Link>
              <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link href="#resume" className="hover:text-primary transition-colors">Resume</Link>
              <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-4">
              <a href="https://github.com/SujeetDeo-31" className="w-12 h-12 flex items-center justify-center border border-border rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/sujeet31in/" className="w-12 h-12 flex items-center justify-center border border-border rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center border border-border rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <Button onClick={scrollToTop} variant="ghost" className="rounded-full text-muted-foreground hover:text-primary group">
              Back to Top <ArrowUp className="ml-2 w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Elite Portfolio. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
