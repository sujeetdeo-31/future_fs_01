"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { PORTFOLIO_DATA } from "@/lib/constants";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    setIsSubmitting(true);
  
    const formData = new FormData(e.currentTarget);
  
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };
  
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }
  
      setIsSuccess(true);
  
      toast({
        title: "Message Sent Successfully!",
        description: "I'll get back to you soon.",
      });
  
      e.currentTarget.reset();
  
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
  
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to send message",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-headline font-bold mb-6">Let's <span className="text-primary">Collaborate</span></h2>
            <p className="text-muted-foreground text-lg mb-12">
              {PORTFOLIO_DATA.contact.description}
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-card border border-border flex items-center justify-center rounded-2xl shadow-lg">
                  <Mail className="text-primary w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Email Me</p>
                  <p className="text-xl font-headline font-bold">{PORTFOLIO_DATA.email}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-card border border-border flex items-center justify-center rounded-2xl shadow-lg">
                  <Phone className="text-primary w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Call Me</p>
                  <p className="text-xl font-headline font-bold">{PORTFOLIO_DATA.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-card border border-border flex items-center justify-center rounded-2xl shadow-lg">
                  <MapPin className="text-primary w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Location</p>
                  <p className="text-xl font-headline font-bold">{PORTFOLIO_DATA.location}</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-card border border-border p-10 rounded-3xl shadow-2xl relative"
          >
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-headline font-bold mb-4">Message Sent!</h3>
                <p className="text-muted-foreground">Thank you for reaching out. I'll be in touch soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest opacity-70">Name</label>
                    <Input name="name" placeholder="John Doe" required className="bg-secondary/50 border-none h-12 focus:ring-1 focus:ring-primary"/>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest opacity-70">Email</label>
                    <Input name="email" type="email" placeholder="john@example.com" required className="bg-secondary/50 border-none h-12 focus:ring-1 focus:ring-primary"/>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest opacity-70">Subject</label>
                  <Input name="subject" placeholder="Project Inquiry" required className="bg-secondary/50 border-none h-12 focus:ring-1 focus:ring-primary"/>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest opacity-70">Message</label>
                  <Textarea  name="message" placeholder="Tell me about your project..." required className="bg-secondary/50 border-none min-h-[150px] focus:ring-1 focus:ring-primary"/>
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full h-14 rounded-full font-bold text-lg shadow-xl shadow-primary/20 transition-all active:scale-95">
                  {isSubmitting ? "Sending Message..." : <><Send className="mr-2 w-5 h-5" /> Send Message</>}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
