import React from 'react';
import { 
  Code2, 
  Terminal, 
  Database, 
  Globe, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Cloud, 
  Zap,
  Server,
  Workflow
} from 'lucide-react';
import { motion } from 'framer-motion';

const TechStack = () => {
  const stackCategories = [
    {
      title: "Frontend Architecture",
      icon: <Code2 className="text-[#adc6ff]" size={24} />,
      skills: [
        { name: "React.js", level: "Expert" },
        { name: "Javascript", level: "Advanced" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "TypeScript", level: "Advanced" },
        { name: "html/css3", level: "Advanced" }
      ],
      description: "Building high-performance, accessible, and scalable user interfaces with a focus on design systems."
    },
    {
      title: "Backend & Logic",
      icon: <Server className="text-[#d0bcff]" size={24} />,
      skills: [
        { name: "Node.js  ", level: "Expert" },
        { name: "Express.js", level: "Intermediate" },
        { name: "FastAPI", level: "Advanced" },
        { name: "authentication & Authorization", level: "Expert" },
        { name: "API Integration", level: "Advanced" }
      ],
      description: "Architecting resilient server-side logic and distributed systems for complex business requirements."
    },
    {
      title: "Data & Persistence",
      icon: <Database className="text-[#89ceff]" size={24} />,
      skills: [
        { name: "MongoDB", level: "Expert" },
        { name: "CRUD Operation", level: "Expert" },
        { name: "Database design", level: "Advanced" }
        
      ],
      description: "Designing efficient data models and optimizing query performance for high-traffic environments."
    },
    {
      title: "Infrastructure & DevOps",
      icon: <Cloud className="text-[#4d8eff]" size={24} />,
      skills: [
        { name: "Contabo Cloud", level: "Advanced" },
        { name: "Git/Github", level: "Expert" },
        { name: "CI/CD Pipelines", level: "Advanced" },
        { name: "postman", level: "Expert" },
        { name: "Deployment& hosting", level: "Expert" }

      ],
      description: "Automating deployments and managing cloud-native infrastructure with focus on security and uptime."
    }
  ];

  return (
    <section id="skills" className="relative py-24 bg-[#020617] text-[#dce1fb] overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#4d8eff]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-[#571bc1]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1450px] mx-auto px-6 md:px-20 relative z-10">
        <div className="flex flex-col items-center mb-20 text-center space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#adc6ff] text-xs font-bold tracking-[0.3em] uppercase"
          >
            Engineering Excellence
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            The Architectural <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#adc6ff] to-[#d0bcff]">Ecosystem</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#c2c6d6] max-w-2xl"
          >
            A highly curated stack focused on performance, scalability, and developer experience. Purpose-built for high-concurrency systems.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stackCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-[#4d8eff] to-[#571bc1] group-hover:h-full transition-all duration-500"></div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              <p className="text-[#8c909f] text-sm leading-relaxed mb-8">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-white/5 text-xs font-mono group-hover:border-[#4d8eff]/30 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#adc6ff] animate-pulse"></span>
                    <span className="text-[#dce1fb]">{skill.name}</span>
                    <span className="text-[10px] text-[#8c909f] ml-1 uppercase">{skill.level}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Tech Stats Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 pt-16 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { label: "months Experience", value: "6+" },
            { label: "Projects Shipped", value: "50+" },
            
            { label: "Code Coverage", value: "95%" }
          ].map((stat, i) => (
            <div key={i} className="space-y-1">
              <p className="text-3xl font-extrabold text-[#adc6ff]">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-widest text-[#8c909f] font-bold">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
