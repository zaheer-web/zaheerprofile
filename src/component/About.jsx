import React, { useEffect, useRef } from "react";
import {
  CheckCircle,
  Layers3,
  Network,
  Database,
  Terminal,
  Server,
  TrendingUp,
} from "lucide-react";

const About = () => {
  const glow1Ref = useRef(null);
  const glow2Ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      if (glow1Ref.current) {
        glow1Ref.current.style.transform = `translate(${x * 50}px, ${
          y * 50
        }px)`;
      }

      if (glow2Ref.current) {
        glow2Ref.current.style.transform = `translate(${x * -50}px, ${
          y * -50
        }px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const proficiencies = [
    "CI/CD Pipeline Optimization",
    "Cloud-Native Architectures",
    "Highly Available System Scaling",
    "Microservices & Event-Driven Design",
  ];

  const techStack = [
    "MongoDB",
    "Express.js",
    "React",
    "Node.js",
    
    
    
    "TypeScript",
  ];

  const skillGrid = [
    {
      title: "Frontend Architecture",
      desc: "Design systems and scalable React applications.",
      icon: <Layers3 className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Backend Systems",
      desc: "Node.js APIs, authentication and microservices.",
      icon: <Network className="w-8 h-8 text-purple-400" />,
    },
    {
      title: "Database Design",
      desc: "MongoDB, SQL and distributed caching.",
      icon: <Database className="w-8 h-8 text-cyan-400" />,
    },
    {
      title: "DevOps & CI/CD",
      desc: "Docker, GitHub Actions and deployment automation.",
      icon: <Terminal className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Linux Administration",
      desc: "Shell scripting and server management.",
      icon: <Server className="w-8 h-8 text-violet-500" />,
    },
    {
      title: "System Scalability",
      desc: "Load balancing and high availability systems.",
      icon: <TrendingUp className="w-8 h-8 text-slate-400" />,
    },
  ];

  return (
    <div id="about" className="bg-slate-950 text-white min-h-screen relative overflow-hidden">
      {/* Background Glow */}
      <div
        ref={glow1Ref}
        className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none"
      />

      <div
        ref={glow2Ref}
        className="fixed bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none"
      />

      {/* Navbar */}
      

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Engineering
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Full Stack Excellence
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-slate-300 text-lg">
          Specialized Full Stack Engineer focused on MERN Stack,
          scalable architecture, DevOps and cloud infrastructure.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-8 pb-20">
        {/* Left */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-blue-400 uppercase text-sm mb-4">
              Philosophy
            </h3>

            <p className="text-xl italic">
              "Scalability is not an afterthought; it's the
              foundation of modern digital craftsmanship."
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-purple-400 uppercase text-sm mb-4">
              Core Proficiencies
            </h3>

            {proficiencies.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 mb-3"
              >
                <CheckCircle
                  className="w-5 h-5 text-blue-400"
                  fill="currentColor"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-cyan-400 uppercase text-sm mb-4">
              Tech Stack
            </h3>

            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="border border-slate-700 px-3 py-1 rounded-md text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="lg:col-span-8">
          <div className="grid md:grid-cols-2 gap-6">
            {skillGrid.map((skill) => (
              <div
                key={skill.title}
                className="bg-slate-900 p-6 rounded-xl hover:bg-slate-800 transition"
              >
                {skill.icon}

                <h3 className="text-xl font-bold mt-4 mb-2">
                  {skill.title}
                </h3>

                <p className="text-slate-400">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;