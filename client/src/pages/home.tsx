import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InquiryForm } from "@/components/inquiry-form";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  Droplets, 
  AlertTriangle, 
  Thermometer, 
  Ban, 
  Clock, 
  ShieldCheck, 
  Banknote 
} from "lucide-react";

// Images from assets
import heroImage from '@assets/stock_images/professional_plumber_e06bc4a1.jpg';
import toolsImage from '@assets/stock_images/plumbing_tools_wrenc_614d7aad.jpg';
import bathroomImage from '@assets/stock_images/modern_bathroom_fauc_d54eaed8.jpg';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-sans">
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 relative bg-gradient-to-br from-blue-50/50 to-white overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="space-y-8"
            >
              <motion.div variants={fadeIn}>
                <Badge variant="secondary" className="px-4 py-2 bg-blue-100 text-primary hover:bg-blue-100 rounded-full text-sm font-semibold tracking-wide uppercase">
                  <Clock className="w-3 h-3 mr-2" />
                  24/7 Emergency Plumbing
                </Badge>
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-slate-900">
                Reliable Plumbing <br/>
                <span className="text-gradient">You Can Trust</span>
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-xl text-slate-500 max-w-lg leading-relaxed">
                From burst pipes to blocked drains, Somerset Plumbing delivers fast, professional, and affordable solutions for your home.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <Button size="xl" className="rounded-full shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 text-lg px-8 h-14 transition-all hover:-translate-y-1">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 021 851 1234
                </Button>
                <Button size="xl" variant="outline" className="rounded-full border-2 text-lg px-8 h-14 hover:bg-gray-50 transition-all" onClick={scrollToContact}>
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>

              <motion.div variants={fadeIn} className="pt-4 flex items-center gap-8 text-sm font-semibold text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Licensed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Guaranteed</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 border-[6px] border-white z-10">
                <img 
                  src={heroImage} 
                  alt="Professional Plumber Somerset West" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4 max-w-xs"
              >
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Top Rated Service</p>
                  <p className="text-xs text-slate-500">5-Star Customer Reviews</p>
                </div>
              </motion.div>
              
              {/* Background accent */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[3rem] -z-10 blur-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Our Services</h2>
            <p className="text-slate-500 text-lg">We handle everything from minor leaks to major installations. Expert workmanship guaranteed on every job.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: "Emergency Plumbing",
                desc: "Fast response for burst pipes and urgent repairs.",
                color: "text-red-500",
                bg: "bg-red-50"
              },
              {
                icon: Droplets,
                title: "Leak Detection",
                desc: "Advanced equipment to find and fix hidden leaks.",
                color: "text-blue-500",
                bg: "bg-blue-50"
              },
              {
                icon: Ban,
                title: "Blocked Drains",
                desc: "Professional drain cleaning and unblocking services.",
                color: "text-amber-500",
                bg: "bg-amber-50"
              },
              {
                icon: Thermometer,
                title: "Geyser Repairs",
                desc: "Installation, maintenance and thermostat replacements.",
                color: "text-orange-500",
                bg: "bg-orange-50"
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <Card className="h-full border-none shadow-lg shadow-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className={`w-14 h-14 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-us" className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-5">
           <img src={toolsImage} alt="background pattern" className="w-full h-full object-cover grayscale" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-block"
              >
                <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Why Choose Us</span>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">Experience the Difference</h2>
                <p className="text-slate-500 text-lg mb-8">We pride ourselves on delivering a level of service that goes beyond just fixing pipes. We build relationships based on trust and quality.</p>
              </motion.div>

              <div className="space-y-6">
                {[
                  {
                    title: "Fast Response Times",
                    desc: "We understand that plumbing emergencies can't wait. We prioritize urgent calls.",
                    icon: Clock
                  },
                  {
                    title: "Transparent Pricing",
                    desc: "No hidden fees. We provide clear, upfront quotes before we start any work.",
                    icon: Banknote
                  },
                  {
                    title: "Experienced & Reliable",
                    desc: "Our team consists of qualified professionals with years of hands-on experience.",
                    icon: ShieldCheck
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all"
                  >
                    <div className="w-12 h-12 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-primary shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src={bathroomImage} 
                alt="Modern Bathroom" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 lg:right-12 bg-primary text-white p-8 rounded-3xl shadow-xl max-w-xs">
                <p className="text-3xl font-bold font-display mb-1">100%</p>
                <p className="text-white/80 font-medium">Satisfaction Guaranteed on all workmanship.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Need a plumber now?</h2>
          <p className="text-blue-100 text-lg lg:text-xl mb-10 max-w-2xl mx-auto">Don't let a small leak become a big problem. Our team is ready to help you today.</p>
          <Button size="xl" className="bg-white text-primary hover:bg-blue-50 rounded-full h-16 px-10 text-lg shadow-2xl">
            <Phone className="w-5 h-5 mr-3" />
            Call 021 851 1234
          </Button>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Get in Touch</h2>
              <p className="text-slate-500 mb-12">Whether you need an emergency repair or a quote for a renovation, we'd love to hear from you.</p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-primary">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">Call Us</p>
                    <p className="text-2xl font-bold text-slate-900">021 851 1234</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                   <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-primary">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">Email Us</p>
                    <p className="text-2xl font-bold text-slate-900">info@somerset.co.za</p>
                  </div>
                </div>

                 <div className="flex items-center gap-6">
                   <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-primary">
                    <Clock className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">Working Hours</p>
                    <p className="text-lg font-bold text-slate-900">Mon - Fri: 08:00 - 17:00</p>
                    <p className="text-sm text-primary font-bold">24/7 For Emergencies</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 transform rotate-3 rounded-3xl -z-10 blur-lg"></div>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
