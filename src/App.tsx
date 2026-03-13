import React from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronRight,
  Briefcase,
  GraduationCap,
  Layout,
  Megaphone,
  Palette,
  Globe,
  Search,
  ShoppingBag,
  Linkedin
} from 'lucide-react';
import { EXPERIENCES, EDUCATION, SKILLS, CONTACT } from './constants';
import swatiHero from './static/swatiimage.jpeg';

const Section = ({ children, id, className = "" }: { children: React.ReactNode, id?: string, className?: string }) => (
  <section id={id} className={`py-20 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const SkillIcon = ({ category }: { category: string }) => {
  switch (category) {
    case 'Marketing': return <Megaphone className="w-5 h-5 text-primary" />;
    case 'Design': return <Palette className="w-5 h-5 text-primary" />;
    case 'Technical': return <Globe className="w-5 h-5 text-primary" />;
    default: return <Layout className="w-5 h-5 text-primary" />;
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-primary/30 text-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-display text-xl font-bold tracking-tighter">
            SWATI<span className="text-primary">.</span>
          </span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <a
            href={`mailto:${CONTACT.email}`}
            className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md"
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for Opportunities
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-white">
            Swati Rajput: <br />
            <span className="text-primary text-4xl md:text-6xl">Digital Marketing Strategist.</span>
          </h1>
          <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
            Results-driven digital marketing executive and <strong className="text-white">SEO Expert</strong> specializing in Meta Ads, Google Ads, and e-commerce growth. I help brands build a powerful online presence.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#experience" className="flex items-center gap-2 bg-white text-slate-950 px-6 py-3 rounded-xl font-semibold hover:bg-slate-200 transition-all">
              View Work <ChevronRight className="w-4 h-4" />
            </a>
            <div className="flex items-center gap-4 px-4">
              <a href="https://www.linkedin.com/in/swati-rajput-6406ab291/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="aspect-square rounded-[2rem] overflow-hidden bg-slate-800 relative z-10">
            <img
              src={swatiHero}
              alt="Swati Rajput"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100"
            />
          </div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-0"></div>
          <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-0"></div>

          {/* Floating Stats Card */}
          <motion.div
            className="absolute -bottom-4 -right-4 glass-card p-6 rounded-2xl z-20 hidden md:block"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Search className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white leading-tight">Digital</div>
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Marketing Executive</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </header>

      {/* About Section */}
      <Section id="about" className="bg-slate-900/50 border-y border-slate-800">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="section-title text-white">My Profile</h2>
            <p className="text-slate-400 font-medium">Crafting digital experiences that convert.</p>
          </div>
          <div className="md:col-span-2 space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>
              I am a passionate digital marketing professional dedicated to helping organizations grow through strategic online initiatives. With a strong foundation in academic knowledge and hands-on experience, I bring a holistic approach to marketing.
            </p>
            <p>
              My expertise spans across <strong className="text-white">Search Engine Optimization (SEO)</strong>, <strong className="text-white">Meta & Google Ads</strong>, and <strong className="text-white">E-commerce management</strong> on platforms like Amazon and Flipkart. I believe in data-driven decision making and creative storytelling to build brand loyalty.
            </p>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto text-white">Core Expertise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit designed to tackle the dynamic challenges of modern digital marketing.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-card p-6 rounded-2xl hover:border-primary/50 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <SkillIcon category={skill.category} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-100">{skill.name}</h3>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{skill.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" className="bg-slate-900 text-white rounded-[3rem] my-20 border border-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-display font-bold mb-2">Work Experience</h2>
            <p className="text-slate-400">My professional journey in the digital landscape.</p>
          </div>
          <div className="text-primary font-mono text-sm tracking-widest uppercase">2022 — Present</div>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l border-slate-800 group"
            >
              <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-primary group-hover:scale-150 transition-transform" />
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-slate-500 font-mono">{exp.period}</span>
              </div>
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-slate-400 flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-700 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education">
        <h2 className="section-title text-white">Education</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-white">{edu.degree}</h3>
              <p className="text-slate-400 mb-4">{edu.institution}</p>
              <span className="text-xs font-mono text-slate-500 bg-slate-800 px-3 py-1 rounded-full">{edu.period}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="pb-32">
        <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 leading-tight">
              Ready to grow your <br />digital presence?
            </h2>
            <p className="text-white/80 text-xl mb-12">
              Let's collaborate on your next project and create something extraordinary together.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-white/60 font-medium uppercase tracking-wider">Email Me</div>
                  <div className="text-lg font-semibold">{CONTACT.email}</div>
                </div>
              </a>
              <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-white/60 font-medium uppercase tracking-wider">Call Me</div>
                  <div className="text-lg font-semibold">{CONTACT.phone}</div>
                </div>
              </a>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 right-0 p-12 hidden lg:block">
            <div className="w-32 h-32 border-4 border-white/20 rounded-full animate-pulse"></div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-display text-2xl font-bold text-white">
            SWATI<span className="text-primary">.</span>
          </div>
          <div className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} Swati Rajput. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/swati-rajput-6406ab291/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
