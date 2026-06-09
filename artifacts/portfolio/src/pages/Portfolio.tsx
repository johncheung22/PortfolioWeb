import React from "react";
import profileImg from "@assets/1000009362_1781048086803.jpg";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const sections = [
    { id: "about", label: "About Me" },
    { id: "academic", label: "Academic & Research Achievements" },
    { id: "credentials", label: "Professional Credentials & Technical Certifications" },
    { id: "experience", label: "Work Experience" },
    { id: "coop", label: "Co-op Experience" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm" data-testid="navbar">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="font-bold text-xl text-primary tracking-tight">John Cheung</span>
            </div>
            <div className="hidden md:flex space-x-6 overflow-x-auto">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-sm font-medium text-gray-600 hover:text-primary transition-colors whitespace-nowrap"
                  data-testid={`nav-link-${section.id}`}
                >
                  {section.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        {/* SECTION 1: About Me & Professional Overview */}
        <section id="about" className="scroll-mt-24 pt-8" data-testid="section-about">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 flex justify-center md:justify-start">
              <img
                src={profileImg}
                alt="John Cheung Professional Headshot"
                className="w-full max-w-[280px] rounded-lg shadow-lg object-cover"
                data-testid="img-profile"
              />
            </div>
            <div className="md:col-span-8 space-y-6">
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                About Me & Professional Overview
              </h1>
              <p className="text-lg leading-relaxed text-gray-700" data-testid="text-about-narrative">
                I am a driven full-stack software developer, certified lifeguard, and high-performance athlete based in Toronto, Ontario. Operating at the intersection of complex systems engineering, emergency aquatic response, and elite athletics, I specialize in building high-performance web applications, maintaining rigorous safety standards, and optimizing live production codebases. My technical toolkit spans modern frontend frameworks, backend database architectures, and cloud infrastructure integration. Whether managing safety on a pool deck, driving execution on the basketball court, or auditing production enterprise code, I focus on speed, precision, and continuous optimization.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                  <a
                    href="https://docs.google.com/document/d/18YL1_gBjSJA2PvuXg0GDZLRD1PA76sZOTcsxolESOgY/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="button-resume"
                  >
                    Access My Updated Resume
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 font-semibold">
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
            </div>
          </div>
          
          <div className="mt-12 bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-md bg-black">
              <iframe
                src="https://www.youtube.com/embed/nHm5mfqRdw0"
                title="An overview of my time at Metatalent AI"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
                data-testid="iframe-youtube-about"
              ></iframe>
            </div>
            <p className="text-center text-sm font-medium text-gray-500 mt-4" data-testid="text-video-caption-about">
              An overview of my time at Metatalent AI
            </p>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* SECTION 2: Academic & Research Achievements */}
        <section id="academic" className="scroll-mt-24 pt-8" data-testid="section-academic">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Academic & Research Achievements
          </h2>
          
          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-primary border-l-4 border-primary pl-4">
                Subsection A: [Evidence Piece 4] Exploratory Data Analysis (EDA) on Global Developer Ecosystems
              </h3>
              <p className="text-gray-700 leading-relaxed" data-testid="text-academic-eda">
                Analyzed the comprehensive Stack Overflow Developer Survey 2024 dataset, parsing 65,437 individual records across 114 unique variables. Executed data cleaning, normalization, and exploratory data analysis to evaluate macroeconomic trends in employment models, compensation models, and overall career satisfaction metrics.
              </p>
              
              <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                <table className="w-full text-left text-sm" data-testid="table-eda">
                  <thead className="bg-gray-50 text-gray-900 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Metric Analyzed</th>
                      <th className="px-6 py-4 font-semibold">Findings & Distribution Data</th>
                      <th className="px-6 py-4 font-semibold">Strategic Recommendation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-700 bg-white">
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">Work Models</td>
                      <td className="px-6 py-4">42.8% Hybrid, 40.6% Remote</td>
                      <td className="px-6 py-4">Shift recruitment models to support distributed pipelines.</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">Compensation</td>
                      <td className="px-6 py-4">Median: $65,000, Mean: $86,000</td>
                      <td className="px-6 py-4">Implement localized talent compensation models.</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">Job Satisfaction</td>
                      <td className="px-6 py-4">Average: 6.9 / 10</td>
                      <td className="px-6 py-4">Optimize retention frameworks by addressing development bottlenecks.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-primary border-l-4 border-primary pl-4">
                Subsection B: [Evidence Piece 5] Full-Stack Regional Sports Platform
              </h3>
              <p className="text-gray-700 leading-relaxed" data-testid="text-academic-sports">
                Designed, developed, and deployed a comprehensive, production-grade full-stack basketball platform tailored specifically for local athletic tracking and scheduling within the Toronto region. Features high-frequency relational data handling, dynamic schedule rendering, and optimized client-side state management.
              </p>
              
              <div className="w-full bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-12 flex items-center justify-center text-center shadow-inner min-h-[300px]" data-testid="container-placeholder-sandbox">
                <p className="text-gray-500 font-medium">
                  [Placeholder of Project Code Sandbox and Database Schema Diagram]
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* SECTION 3: Professional Credentials & Technical Certifications */}
        <section id="credentials" className="scroll-mt-24 pt-8" data-testid="section-credentials">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Professional Credentials & Technical Certifications
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-8" data-testid="text-credentials-intro">
            To ensure full operational compliance in corporate settings, public facilities, and physical production environments, I maintain a comprehensive verified catalog of health, safety, emergency response, and industry-standard certifications:
          </p>

          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <table className="w-full text-left text-sm" data-testid="table-credentials">
              <thead className="bg-gray-50 text-gray-900 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 font-semibold w-3/4">Credential Name</th>
                  <th className="px-6 py-4 font-semibold w-1/4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">[Evidence Piece 6] WHMIS (Workplace Hazardous Materials Information System) Certificate</td>
                  <td className="px-6 py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Verified Complete / Active</span></td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">[Evidence Piece 7] Young Worker Awareness Health & Safety Certificate (4-Step Test Verified)</td>
                  <td className="px-6 py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Verified Complete / Active</span></td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">[Evidence Piece 8] AODA (Accessibility for Ontarians with Disabilities Act) Compliance Training Certificate</td>
                  <td className="px-6 py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Verified Complete / Active</span></td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">[Evidence Piece 9] Professional Lifeguarding & Aquatic Emergency Response Credentials (including Standard First Aid / CPR-C)</td>
                  <td className="px-6 py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Verified Complete / Active</span></td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">[Evidence Piece 10] LinkedIn Learning Professional Course Certificate (Advanced Programming Track)</td>
                  <td className="px-6 py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Verified Complete / Active</span></td>
                </tr>
                <tr className="bg-gray-50/80">
                  <td colSpan={2} className="px-6 py-5 text-gray-800 font-medium">
                    [Additional Milestone] Elite Athletic Milestone Certification: Official Selection & Roster Spot on the Nike EYBL 17U Circuit (Age 16), representing an NBA All-Star Starter's AAU team internationally.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* SECTION 4: Work Experience, Volunteerism & Community Involvement */}
        <section id="experience" className="scroll-mt-24 pt-8" data-testid="section-experience">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Work Experience, Volunteerism & Community Involvement
          </h2>
          
          <div className="space-y-12">
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm space-y-6">
              <h3 className="text-xl font-semibold text-primary border-l-4 border-primary pl-4">
                Subsection A: [Evidence Piece 11] Interactive Engineering & Digital Asset Production
              </h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap" data-testid="text-experience-interactive">
                {"Operating as an independent technical creator and digital asset entrepreneur, managing production-grade user systems before entering secondary co-op roles:\n• Online Multiplayer Architecture: Built and maintained a custom 3D online multiplayer web game that scaled to support over 2,000 players, generating early business revenue streams at age 9.\n• Digital Content Creation & Media Production: Scripted, recorded, and edited a series of technical and athletic video projects for YouTube, capturing highly engaged audiences ranging from 30,000 to 45,000 views per video.\n• E-Commerce Asset Sales: Established an independent digital art pipeline, facilitating direct-to-consumer sales ranging from $80 to $120 per bespoke piece."}
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm space-y-6">
              <h3 className="text-xl font-semibold text-primary border-l-4 border-primary pl-4">
                Subsection B: [Evidence Piece 12] Glen Park Public School Fun Fair Initiative
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Activity Summary</h4>
                  <p className="text-gray-700 leading-relaxed" data-testid="text-experience-volunteer-summary">
                    Volunteered as a community event assistant at the Glen Park Public School Fun Fair. Collaborated directly with school administration and staff members to manage activity stations, coordinate logistics, and assist in event setup and teardown operations.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Community Impact</h4>
                  <p className="text-gray-700 leading-relaxed" data-testid="text-experience-volunteer-impact">
                    Supported a key local community fundraising event that brought together neighborhood families, helping raise vital funding for school programs and student resources while creating a safe, highly organized environment for attendees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* SECTION 5: Co-op Placement Engineering Architecture (MetaTalent.AI) */}
        <section id="coop" className="scroll-mt-24 pt-8 pb-16" data-testid="section-coop">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Co-op Placement Engineering Architecture (MetaTalent.AI)
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-10" data-testid="text-coop-intro">
            During an intensive technical placement (March–June 2026), operated directly within a live production environment utilizing an enterprise toolchain including Figma Make, Stitch (Google), Claude Code, and direct Gemini API integrations.
          </p>

          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden mb-12" data-testid="container-coop-highlights">
            <div className="bg-primary px-6 py-4 border-b border-primary-foreground/10">
              <h3 className="text-lg font-semibold text-white tracking-wide">Code/Audit Highlight Block</h3>
            </div>
            
            <div className="divide-y divide-gray-100">
              <div className="p-6 md:p-8 hover:bg-gray-50/50 transition-colors">
                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
                  Technical Code Audit:
                </h4>
                <p className="text-gray-700 leading-relaxed ml-5" data-testid="text-coop-audit">
                  Identified and resolved 4 critical JavaScript bugs by consolidating initialization into a scoped module/IIFE pattern and executing comprehensive null checks. Solved duplicate DOMContentLoaded listeners; fixed global variable collisions on 'slides' and 'showSlide'; stripped out a duplicate Swiper.js script instance saving ~120KB payload; and resolved a null getElementById call throwing an uncaught TypeError on page loads. Verified clean execution with zero console errors via Chrome DevTools.
                </p>
              </div>

              <div className="p-6 md:p-8 hover:bg-gray-50/50 transition-colors">
                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-red-500 mr-3"></span>
                  High-Severity Infrastructure Remediation:
                </h4>
                <p className="text-gray-700 leading-relaxed ml-5" data-testid="text-coop-remediation">
                  Flagged and created a prioritized remediation roadmap for 7 high-severity issues, including missing security headers (CSP, X-Frame-Options, Referrer-Policy, X-Content-Type-Options), sidebar null-check logic flaws, invalid HTML markup tags, newsletter routing anomalies to external Mailchimp vendors, and render-blocking scripts in the document head. Documented 7 broken 404 links. Identified and removed an exposed source code archive in the public web root via SSH with server-side status checks.
                </p>
              </div>

              <div className="p-6 md:p-8 hover:bg-gray-50/50 transition-colors">
                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-3"></span>
                  Venture Café London Feature Build:
                </h4>
                <p className="text-gray-700 leading-relaxed ml-5" data-testid="text-coop-feature">
                  Designed and shipped an optimization-focused 'Spin the Wheel' web app for MetaTalent.AI's booth at Venture Café London within a single 8-hour workday. Engineered a weighted probability engine across 6 distinct prize tiers, integrated an email capture gate with one-spin-per-email validation, wired a real-time Supabase/PostgreSQL database connection, and deployed a custom iPad-optimized user layout for real-time lead capture during the live event.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm max-w-4xl mx-auto">
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-md bg-black">
              <iframe
                src="https://www.youtube.com/embed/nHm5mfqRdw0"
                title="Your Day in the Life Co-op Promo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
                data-testid="iframe-youtube-coop"
              ></iframe>
            </div>
            <p className="text-center text-sm font-medium text-gray-500 mt-4 px-4" data-testid="text-video-caption-coop">
              Your Day in the Life Co-op Promo Video presentation demonstrating everyday development operations, technology integrations, and major technical deliverables.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-8 text-center text-gray-400 text-sm border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <p>© {new Date().getFullYear()} John Cheung. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
