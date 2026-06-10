import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring, useInView, animate, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import profileImg from "@assets/1000009362_1781048086803.jpg";
import whmisImg from "@assets/whmiscoursecompletion_1781050023857.png";
import safety4StepImg from "@assets/Screenshot_2026-01-31_004226_(1)_1781050225286.png";
import volunteerImg from "@assets/Untitled34_20260609200146_1781050272216.jpeg";
import { Button } from "@/components/ui/button";

function useScrollToHash() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
}

function AnimatedCounter({ value, duration = 2 }: { value: number, duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView && ref.current) {
      animate(0, value, {
        duration,
        onUpdate: (cv) => {
          if (ref.current) {
            ref.current.textContent = Intl.NumberFormat().format(Math.floor(cv));
          }
        },
      });
    }
  }, [inView, value, duration]);

  return <span ref={ref}>0</span>;
}

const TypewriterText = () => {
  const titles = ["Full-Stack Developer", "Certified Lifeguard", "High-Performance Athlete"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[40px] flex items-center justify-center mt-4">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold text-gray-600"
        >
          {titles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

function TiltCard({ children, className = "", intensity = 15 }: { children: React.ReactNode; className?: string; intensity?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-intensity, intensity]);
  const scale = useMotionValue(1);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
    scale.set(1.04);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    scale.set(1);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d", transformPerspective: 800 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Portfolio() {
  useScrollToHash();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const sections = [
    { id: "about", label: "About Me" },
    { id: "academic", label: "Academic & Research Achievements" },
    { id: "credentials", label: "Professional Credentials & Technical Certifications" },
    { id: "experience", label: "Work Experience" },
    { id: "coop", label: "Co-op Experience" },
  ];

  return (
    <div className="min-h-screen bg-gray-50/30 text-gray-900 font-sans selection:bg-primary/20">
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-accent origin-left z-[60]"
        style={{ scaleX }}
      />
      
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-100 shadow-sm transition-all duration-300" data-testid="navbar">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="font-bold text-xl text-primary tracking-tight">John Cheung</span>
            </div>
            <div className="hidden md:flex space-x-8 overflow-x-auto">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-sm font-medium text-gray-500 hover:text-primary transition-colors whitespace-nowrap"
                  data-testid={`nav-link-${section.id}`}
                >
                  {section.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center flex flex-col items-center justify-center min-h-[85vh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent pb-2">
            Hi, I'm John Cheung
          </h1>
          <TypewriterText />
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-600 mt-6 font-medium">
            Building high-performance systems at the intersection of engineering, safety, and elite athletics.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-10">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-2xl hover:scale-105 hover:shadow-xl transition-all duration-300">
              <a
                href="https://docs.google.com/document/d/18YL1_gBjSJA2PvuXg0GDZLRD1PA76sZOTcsxolESOgY/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-resume"
              >
                Access My Updated Resume
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-gray-200 text-gray-700 hover:text-primary hover:border-primary/30 hover:bg-primary/5 font-semibold rounded-2xl hover:scale-105 hover:shadow-xl transition-all duration-300 bg-white">
              <a
                href="https://www.linkedin.com/in/johncheungdev/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-linkedin"
              >
                Connect on LinkedIn
              </a>
            </Button>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-20 max-w-4xl mx-auto w-full"
          >
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">
                <AnimatedCounter value={2000} />+
              </div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Players Supported</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">
                <AnimatedCounter value={45000} />
              </div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Peak Video Views</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">
                <AnimatedCounter value={4} />
              </div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Critical Bugs Resolved</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 space-y-32">
        {/* SECTION 1: About Me & Professional Overview */}
        <motion.section 
          id="about" 
          className="scroll-mt-32 pt-8" 
          data-testid="section-about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
            <motion.div variants={fadeInUp} className="md:col-span-4 flex justify-center md:justify-start">
              <TiltCard intensity={12} className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white cursor-pointer">
                <img
                  src={profileImg}
                  alt="John Cheung Professional Headshot"
                  className="w-full max-w-[320px] object-cover"
                  data-testid="img-profile"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none"></div>
              </TiltCard>
            </motion.div>
            <motion.div variants={fadeInUp} className="md:col-span-8 space-y-8">
              <h2 className="text-4xl font-bold text-gray-900 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                About Me & Professional Overview
              </h2>
              <p className="text-lg leading-[1.75] text-gray-600" data-testid="text-about-narrative">
                I am a driven full-stack software developer, certified lifeguard, and high-performance athlete based in Toronto, Ontario. Operating at the intersection of complex systems engineering, emergency aquatic response, and elite athletics, I specialize in building high-performance web applications, maintaining rigorous safety standards, and optimizing live production codebases. My technical toolkit spans modern frontend frameworks, backend database architectures, and cloud infrastructure integration. Whether managing safety on a pool deck, driving execution on the basketball court, or auditing production enterprise code, I focus on speed, precision, and continuous optimization.
              </p>
            </motion.div>
          </div>
          
          <motion.div variants={fadeInUp} className="mt-16 bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg bg-black ring-1 ring-black/5">
              <iframe
                src="https://www.youtube.com/embed/nHm5mfqRdw0"
                title="An overview of my time at Metatalent AI"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
                data-testid="iframe-youtube-about"
              ></iframe>
            </div>
            <p className="text-center text-sm font-medium text-gray-500 mt-6" data-testid="text-video-caption-about">
              An overview of my time at Metatalent AI
            </p>
          </motion.div>
        </motion.section>

        {/* SECTION 2: Academic & Research Achievements */}
        <motion.section 
          id="academic" 
          className="scroll-mt-32 pt-8" 
          data-testid="section-academic"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-gray-900 mb-12 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Academic & Research Achievements
          </motion.h2>
          
          <div className="grid grid-cols-1 gap-8">
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Exploratory Data Analysis (EDA) on Global Developer Ecosystems
              </h3>
              <p className="text-lg text-gray-600 leading-[1.75]" data-testid="text-academic-eda">
                Analyzed the comprehensive Stack Overflow Developer Survey 2024 dataset, parsing 65,437 individual records across 114 unique variables. Executed data cleaning, normalization, and exploratory data analysis to evaluate macroeconomic trends in employment models, compensation models, and overall career satisfaction metrics.
              </p>
              
              <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm mt-6">
                <table className="w-full text-left text-sm" data-testid="table-eda">
                  <thead className="bg-gray-50/80 text-gray-900 border-b border-gray-100">
                    <tr>
                      <th className="px-6 py-4 font-bold tracking-tight">Metric Analyzed</th>
                      <th className="px-6 py-4 font-bold tracking-tight">Findings & Distribution Data</th>
                      <th className="px-6 py-4 font-bold tracking-tight">Strategic Recommendation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-gray-600 bg-white">
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900">Work Models</td>
                      <td className="px-6 py-4">42.8% Hybrid, 40.6% Remote</td>
                      <td className="px-6 py-4">Shift recruitment models to support distributed pipelines.</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900">Compensation</td>
                      <td className="px-6 py-4">Median: $65,000, Mean: $86,000</td>
                      <td className="px-6 py-4">Implement localized talent compensation models.</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900">Job Satisfaction</td>
                      <td className="px-6 py-4">Average: 6.9 / 10</td>
                      <td className="px-6 py-4">Optimize retention frameworks by addressing development bottlenecks.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Full-Stack Regional Sports Platform
              </h3>
              <p className="text-lg text-gray-600 leading-[1.75]" data-testid="text-academic-sports">
                Designed, developed, and deployed a comprehensive, production-grade full-stack basketball platform tailored specifically for local athletic tracking and scheduling within the Toronto region. Features high-frequency relational data handling, dynamic schedule rendering, and optimized client-side state management.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  SPH3U: Wave Energy Systems Research
                </h3>
                <p className="text-lg text-gray-600 leading-[1.75] mb-8 flex-grow" data-testid="text-academic-sph3u">
                  Successfully completed Grade 11 University Physics (SPH3U) in Grade 10 and researched wave energy systems, presenting findings on the principles, efficiency, and potential of renewable wave power technologies.
                </p>
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-md bg-white ring-1 ring-black/5">
                  <iframe
                    src="https://docs.google.com/presentation/d/1WPRKOPH2nKcLTFIv3qgNX9Ae00s3ssflCFBQXUmNYnU/embed?start=false&loop=false&delayms=3000"
                    title="SPH3U Wave Energy Systems Presentation"
                    allowFullScreen
                    className="w-full h-full border-0"
                    data-testid="iframe-slides-sph3u"
                  ></iframe>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  SBI3U: Genetic Engineering Study
                </h3>
                <p className="text-lg text-gray-600 leading-[1.75] mb-8 flex-grow" data-testid="text-academic-sbi3u">
                  Conducted an in-depth study of genetic engineering as part of Grade 11 University Biology (SBI3U), examining techniques such as gene modification and their ethical, medical, and agricultural implications.
                </p>
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-md bg-white ring-1 ring-black/5">
                  <iframe
                    src="https://docs.google.com/presentation/d/1xYHbdaq54rAl1m8r2dpQimYOu6h-2Wd0BovtjHWCTXA/embed?start=false&loop=false&delayms=3000"
                    title="SBI3U Genetic Engineering Presentation"
                    allowFullScreen
                    className="w-full h-full border-0"
                    data-testid="iframe-slides-sbi3u"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* SECTION 3: Professional Credentials & Technical Certifications */}
        <motion.section 
          id="credentials" 
          className="scroll-mt-32 pt-8" 
          data-testid="section-credentials"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-gray-900 mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Professional Credentials & Technical Certifications
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-lg text-gray-600 leading-[1.75] mb-10 max-w-4xl" data-testid="text-credentials-intro">
            To ensure full operational compliance in corporate settings, public facilities, and physical production environments, I maintain a comprehensive verified catalog of health, safety, emergency response, and industry-standard certifications:
          </motion.p>

          <motion.div variants={fadeInUp} className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
            <table className="w-full text-left text-sm" data-testid="table-credentials">
              <thead className="bg-gray-50/80 text-gray-900 border-b border-gray-100">
                <tr>
                  <th className="px-8 py-5 font-bold tracking-tight w-3/4">Credential Name</th>
                  <th className="px-8 py-5 font-bold tracking-tight w-1/4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-600">
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-8 py-6 font-medium text-gray-900">
                    <div className="space-y-4">
                      <p className="text-base">WHMIS (Workplace Hazardous Materials Information System) Certificate</p>
                      <TiltCard intensity={10} className="w-full max-w-xs cursor-pointer">
                        <img src={whmisImg} alt="WHMIS Certificate" className="w-full rounded-xl border border-gray-100 shadow-sm" data-testid="img-whmis-certificate" />
                      </TiltCard>
                    </div>
                  </td>
                  <td className="px-8 py-6 align-top">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20">Verified Complete / Active</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-8 py-6 font-medium text-gray-900">
                    <div className="space-y-4">
                      <p className="text-base">Young Worker Awareness Health & Safety Certificate (4-Step Test Verified)</p>
                      <TiltCard intensity={10} className="w-full max-w-xs cursor-pointer">
                        <img src={safety4StepImg} alt="Young Worker Awareness Health & Safety Certificate" className="w-full rounded-xl border border-gray-100 shadow-sm" data-testid="img-safety4step-certificate" />
                      </TiltCard>
                    </div>
                  </td>
                  <td className="px-8 py-6 align-top">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20">Verified Complete / Active</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-8 py-6 text-base font-medium text-gray-900">Professional Lifeguarding & Aquatic Emergency Response Credentials (including Standard First Aid / CPR-C)</td>
                  <td className="px-8 py-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20">Verified Complete / Active</span>
                  </td>
                </tr>
                <tr className="bg-primary/[0.02]">
                  <td colSpan={2} className="px-8 py-6 text-primary font-semibold text-base">
                    Elite Athletic Milestone Certification: Official Selection & Roster Spot on the Nike EYBL 17U Circuit (Age 16), representing an NBA All-Star Starter's AAU team internationally.
                  </td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </motion.section>

        {/* SECTION 4: Work Experience, Volunteerism & Community Involvement */}
        <motion.section 
          id="experience" 
          className="scroll-mt-32 pt-8" 
          data-testid="section-experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-gray-900 mb-10 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Work Experience, Volunteerism & Community Involvement
          </motion.h2>
          
          <div className="grid grid-cols-1 gap-8">
            <motion.div variants={fadeInUp} className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Interactive Engineering & Digital Asset Production
              </h3>
              <p className="text-lg text-gray-600 leading-[1.75] whitespace-pre-wrap" data-testid="text-experience-interactive">
                {"Operating as an independent technical creator and digital asset entrepreneur, managing production-grade user systems before entering secondary co-op roles:\n• Online Multiplayer Architecture: Built and maintained a custom 3D online multiplayer web game that scaled to support over 2,000 players, generating early business revenue streams.\n• Digital Content Creation & Media Production: Scripted, recorded, and edited a series of technical and athletic video projects for YouTube, capturing highly engaged audiences ranging from 30,000 to 45,000 views per video.\n• E-Commerce Asset Sales: Established an independent digital art pipeline, facilitating direct-to-consumer sales ranging from $80 to $120 per bespoke piece."}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div variants={fadeInUp} className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 space-y-6 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900">
                  Glen Park Public School Fun Fair Initiative
                </h3>
                <div className="flex-grow">
                  <h4 className="font-semibold text-gray-900 mb-2 uppercase tracking-wide text-sm">Activity Summary</h4>
                  <p className="text-lg text-gray-600 leading-[1.75]" data-testid="text-experience-volunteer-summary">
                    Volunteered as a community event assistant at the Glen Park Public School Fun Fair. Collaborated directly with school administration and staff members to manage activity stations, coordinate logistics, and assist in event setup and teardown operations.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 space-y-6 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900">
                  North York Harvest Food Bank
                </h3>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 uppercase tracking-wide text-sm">Community Impact</h4>
                  <p className="text-lg text-gray-600 leading-[1.75] mb-6" data-testid="text-experience-volunteer-impact">
                    Supported food bank operations by sorting, organizing, and moving donated food items to ensure efficient inventory management and distribution.
                  </p>
                </div>
                <div className="mt-auto">
                  <TiltCard intensity={8} className="w-full cursor-pointer">
                    <img src={volunteerImg} alt="Volunteering at North York Harvest Food Bank" className="w-full rounded-2xl border border-gray-100 shadow-sm" data-testid="img-volunteer" />
                  </TiltCard>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* SECTION 5: Co-op Placement Engineering Architecture (MetaTalent.AI) */}
        <motion.section 
          id="coop" 
          className="scroll-mt-32 pt-8 pb-16" 
          data-testid="section-coop"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-gray-900 mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Co-op Placement Software Engineer (MetaTalent.AI)
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-lg text-gray-600 leading-[1.75] mb-12 max-w-4xl" data-testid="text-coop-intro">
            During an intensive technical placement (March–June 2026), operated directly within a live production environment utilizing an enterprise toolchain including Figma Make, Stitch (Google), and Claude Code.
          </motion.p>

          <motion.div variants={fadeInUp} className="bg-white border border-gray-100 rounded-2xl shadow-lg overflow-hidden mb-12" data-testid="container-coop-highlights">
            <div className="bg-primary px-8 py-5 border-b border-primary/10">
              <h3 className="text-xl font-bold text-white tracking-wide">Code & Audit Highlights</h3>
            </div>
            
            <div className="divide-y divide-gray-100">
              <div className="p-8 hover:bg-gray-50/50 transition-colors group">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 mr-4 shadow-sm group-hover:scale-125 transition-transform"></span>
                  Technical Code Audit
                </h4>
                <p className="text-lg text-gray-600 leading-[1.75] ml-6.5" data-testid="text-coop-audit">
                  Identified and resolved 4 critical JavaScript bugs by consolidating initialization into a scoped module/IIFE pattern and executing comprehensive null checks. Solved duplicate DOMContentLoaded listeners; fixed global variable collisions on 'slides' and 'showSlide'; stripped out a duplicate Swiper.js script instance saving ~120KB payload; and resolved a null getElementById call throwing an uncaught TypeError on page loads. Verified clean execution with zero console errors via Chrome DevTools.
                </p>
              </div>

              <div className="p-8 hover:bg-gray-50/50 transition-colors group">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 mr-4 shadow-sm group-hover:scale-125 transition-transform"></span>
                  High-Severity Infrastructure Remediation
                </h4>
                <p className="text-lg text-gray-600 leading-[1.75] ml-6.5" data-testid="text-coop-remediation">
                  Flagged and created a prioritized remediation roadmap for 7 high-severity issues, including missing security headers (CSP, X-Frame-Options, Referrer-Policy, X-Content-Type-Options), sidebar null-check logic flaws, invalid HTML markup tags, newsletter routing anomalies to external Mailchimp vendors, and render-blocking scripts in the document head. Documented 7 broken 404 links. Identified and removed an exposed source code archive in the public web root via SSH with server-side status checks.
                </p>
              </div>

              <div className="p-8 hover:bg-gray-50/50 transition-colors group">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 mr-4 shadow-sm group-hover:scale-125 transition-transform"></span>
                  Venture Café London Feature Build
                </h4>
                <p className="text-lg text-gray-600 leading-[1.75] ml-6.5" data-testid="text-coop-feature">
                  Designed and shipped an optimization-focused 'Spin the Wheel' web app for MetaTalent.AI's booth at Venture Café London within a single 8-hour workday. Engineered a weighted probability engine across 6 distinct prize tiers, integrated an email capture gate with one-spin-per-email validation, wired a real-time Supabase/PostgreSQL database connection, and deployed a custom iPad-optimized user layout for real-time lead capture during the live event.
                </p>
              </div>
            </div>
          </motion.div>

        </motion.section>
      </main>

      <footer className="bg-white border-t border-gray-100 py-12 text-center text-gray-500 text-sm">
        <div className="max-w-6xl mx-auto px-4 font-medium tracking-wide">
          <p>© {new Date().getFullYear()} John Cheung. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
