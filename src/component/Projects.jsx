import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github, Terminal, Code2, Layers, Cpu, Menu, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import img from "../assets/img/pro5.jpeg";
import img1 from "../assets/img/na.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Coffee Website",
      desc: "A premium café website featuring elegant UI, interactive sections, and a seamless user experience.",
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800",
      live: "https://brewfield1.vercel.app/",
      github: "#",
      tags: ["React", "Tailwind"],
      icons: [<Code2 key="1" size={18} />, <Layers key="2" size={18} />]
    },
    {
      title: "Sarfraz Portfolio",
      desc: "Personal portfolio with modern UI design and performance-first architecture.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      live: "https://sarfrazkhan.in/",
      github: "#",
      tags: ["Astro", "GSAP"],
      icons: [<Terminal key="1" size={18} />, <Cpu key="2" size={18} />]
    },
    {
      title: "Pink Roof Interior",
      desc: "Modern interior design company website with premium aesthetics and smooth user experience.",
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
      live: "https://pinkroof.in/",
      github: "#",
      tags: ["Next.js", "Three.js"],
      icons: [<Layers key="1" size={18} />, <Code2 key="2" size={18} />]
    },
    {
      title: "Mannat Luxury Event",
      desc: "Luxury event management website showcasing premium services and elegant branding.",
      img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
      live: "https://mannat-luxury-event.vercel.app/",
      github: "#",
      tags: ["React", "Tailwind"],
      icons: [<Terminal key="1" size={18} />, <Layers key="2" size={18} />]
    },
    {
      title: "Interior Design",
      desc: "Modern responsive interior design website with clean UI and smooth interactions.",
      img: img,
      live: "https://interiorcom.netlify.app",
      github: "#",
      tags: ["Netlify", "Vanilla JS"],
      icons: [<Code2 key="1" size={18} />, <Cpu key="2" size={18} />]
    },
    {
      title: "BAAVAN",
      desc: "Professional modern business website with premium design and branding.",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      live: "https://baavan.com/",
      github: "#",
      tags: ["Enterprise", "Custom UI"],
      icons: [<Terminal key="1" size={18} />, <Layers key="2" size={18} />]
    },
    {
      title: "Theory Spa",
      desc: "Luxury spa and wellness website with elegant branding and SEO optimization.",
      img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
      live: "https://theorryspa.com/",
      github: "#",
      tags: ["Webflow", "SEO"],
      icons: [<Code2 key="1" size={18} />, <Cpu key="2" size={18} />]
    },
    {
      title: "Interior UI",
      desc: "React based interior design UI focused on advanced animations and UX.",
      img: "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&q=80&w=800",
      live: "https://interiorcom.netlify.app/",
      github: "#",
      tags: ["UX/UI", "Animation"],
      icons: [<Layers key="1" size={18} />, <Terminal key="2" size={18} />]
    },
    {
      title: "Food UI",
      desc: "Modern food ordering website built with React and optimized for Vercel.",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
      live: "https://al-shah.vercel.app/",
      github: "#",
      tags: ["Vercel", "React"],
      icons: [<Code2 key="1" size={18} />, <Cpu key="2" size={18} />]
    },
    {
      title: "Eco Capacity",
      desc: "Corporate sustainability and environmental solutions platform focused on data visualization.",
      img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
      live: "https://ecocapacityexchange.com/",
      github: "#",
      tags: ["Go", "PostgreSQL"],
      icons: [<Terminal key="1" size={18} />, <Layers key="2" size={18} />]
    },
    {
      title: "The ICEN",
      desc: "Professional organization website with responsive design and modern API integration.",
      img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
      live: "https://theicen.org/",
      github: "#",
      tags: ["Python", "FastAPI"],
      icons: [<Code2 key="1" size={18} />, <Cpu key="2" size={18} />]
    },
    {
      title: "Uniform Hub",
      desc: "Corporate uniform and apparel platform with premium product showcase.",
      img: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800",
      live: "https://uniformhub.co.in/",
      github: "#",
      tags: ["Shopify", "Liquid"],
      icons: [<Terminal key="1" size={18} />, <Layers key="2" size={18} />]
    },
    {
      title: "Alvora Jewels",
      desc: "Luxury jewelry brand website with premium visual experience and branding.",
      img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800",
      live: "https://www.alvorajewels.com/",
      github: "#",
      tags: ["E-commerce", "Luxury"],
      icons: [<Layers key="1" size={18} />, <Code2 key="2" size={18} />]
    },
    {
      title: "Clinifia",
      desc: "Healthcare platform built with modern UI and responsive experience.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQxNIglH4KAPvl1-NT7b1-Qca8ZSE74ww17g&s",
      live: "https://clinifia.com/",
      github: "#",
      tags: ["HealthTech", "React"],
      icons: [<Cpu key="1" size={18} />, <Terminal key="2" size={18} />]
    },
    {
      title: "Al Shah Ent.",
      desc: "Business website showcasing products, services and company profile.",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
      live: "https://www.alshahenterprises.com/",
      github: "#",
      tags: ["Logistics", "Business"],
      icons: [<Layers key="1" size={18} />, <Code2 key="2" size={18} />]
    }
  ];

  return (
    <div id='projects' className="bg-[#020617] text-[#dce1fb] font-sans selection:bg-[#adc6ff]/30 min-h-screen relative overflow-x-hidden">
      {/* Background Ambient Effects */}
      <div className="fixed top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-[radial-gradient(circle,rgba(77,142,255,0.08)_0%,transparent_70%)] z-0 pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[radial-gradient(circle,rgba(208,188,255,0.08)_0%,transparent_70%)] z-0 pointer-events-none" />

      {/* Navigation */}
     

      <main className="pt-32 pb-24 px-6 md:px-20 max-w-[1450px] mx-auto relative z-10">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="h-[1px] w-12 bg-[#adc6ff]" />
            <span className="text-[12px] font-bold text-[#89ceff] uppercase tracking-[0.3em]">Engineering Showcase</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-none tracking-tight">Production Deployments</h1>
          <p className="max-w-2xl text-[#c2c6d6] text-lg leading-relaxed">
            A curated selection of architected solutions, from enterprise-grade resource exchanges to high-fidelity interior design platforms. Each project represents a commitment to performance, scalability, and technical excellence.
          </p>
        </motion.header>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group bg-[#0f172a]/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-[#adc6ff]/40 transition-all duration-500 flex flex-col"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#0c1324]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-[#adc6ff]/50 flex items-center justify-center text-[#adc6ff] hover:bg-[#adc6ff] hover:text-[#00285d] transition-all"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-[#d0bcff]/50 flex items-center justify-center text-[#d0bcff] hover:bg-[#d0bcff] hover:text-[#23005c] transition-all"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#adc6ff] transition-colors">{project.title}</h3>
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold">BUILD: OK</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-[#adc6ff]/10 text-[#adc6ff] border border-[#adc6ff]/20 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-[#8c909f] text-sm leading-relaxed mb-8 flex-grow">
                  {project.desc}
                </p>

                <div className="flex items-center gap-4 text-[#8c909f] pt-4 border-t border-white/5">
                  {project.icons}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Request Access Section */}
       
      </main>

     
      
    </div>
  );
};

export default Projects;
