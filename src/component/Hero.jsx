import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, Terminal, Menu } from 'lucide-react';
import img from "../assets/img/zaheer.jpg";

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["Full Stack Developer", "Backend Specialist", "Frontend Architect", "MERN Expert"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setDisplayText(isDeleting 
        ? fullText.substring(0, displayText.length - 1) 
        : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  return (
    <div id='hero' className="bg-[#020617] text-[#dce1fb] selection:bg-[#adc6ff]/30 min-h-screen overflow-x-hidden font-sans">
      {/* Global Navigation Shell */}
      
      {/* Hero Section */}
      <main className="relative pt-32 pb-20 px-6 md:px-20 flex flex-col items-center justify-center min-h-screen overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#adc6ff]/20 rounded-full blur-[120px] animate-blob pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-[#d0bcff]/20 rounded-full blur-[120px] animate-blob animation-delay-2000 pointer-events-none"></div>

        <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Hero Content */}
          <div className="order-2 md:order-1 flex flex-col items-start space-y-6 animate-slide-up">
            <div className="space-y-2">
              <span className="text-[#adc6ff] text-xs font-bold tracking-widest block uppercase animate-fade-in">
                Hello, I'm
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-[#dce1fb] animate-fade-in animation-delay-200">
                Zaheer khan
              </h1>
              <div className="h-10 md:h-14">
                <span className="text-2xl md:text-4xl font-bold text-[#d0bcff] border-r-2 border-[#adc6ff] pr-1 animate-pulse">
                  {displayText}
                </span>
              </div>
            </div>
            
            <p className="text-lg text-[#c2c6d6] max-w-xl animate-fade-in animation-delay-400">
              I build scalable, high-performance web applications and robust backend systems with a focus on seamless user experience and clean code.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in animation-delay-600">
              <a
  href="/zaheer-resume.pdf"
  download="Zaheer-Khan-Resume.pdf"
  className="bg-gradient-to-r from-[#4d8eff] to-[#571bc1] text-white px-8 py-4 rounded-xl font-bold shadow-[0_0_20px_-5px_rgba(77,142,255,0.5)] hover:shadow-[0_0_30px_-2px_rgba(77,142,255,0.6)] transition-all duration-300 active:scale-95"
>
  Download CV
</a>
              <button
  onClick={() => {
    document
      .getElementById("projects")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
  className="border border-[#424754]/30 hover:bg-white/5 text-[#dce1fb] px-8 py-4 rounded-xl font-bold transition-all duration-300 active:scale-95"
>
  View Projects
</button>
            </div>

            {/* Socials */}
            <div className="flex gap-6 pt-4 animate-fade-in animation-delay-800">
              <a className="text-[#8c909f] hover:text-[#adc6ff] transition-colors" href="https://github.com/zaheer-web"><Github size={24} /></a>
              <a className="text-[#8c909f] hover:text-[#adc6ff] transition-colors" href="https://www.linkedin.com/in/zaheer-k-06b53b365"><Linkedin size={24} /></a>
              <a className="text-[#8c909f] hover:text-[#adc6ff] transition-colors" href="https://www.instagram.com/md_zaherr"><Instagram size={24} /></a>
            </div>

            {/* Tech Stack Strips */}
            <div className="pt-10 flex flex-col gap-4 w-full animate-fade-in animation-delay-1000">
              <span className="text-[#8c909f] uppercase tracking-widest text-[10px] font-mono">Primary Ecosystem</span>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'React', color: '#61DAFB' },
                  { name: 'Node.js', color: '#339933' },
                  { name: 'MongoDB', color: '#FFFFFF' },
                  { name: 'JavaScript', color: '#4169E1' },
                  { name: 'CI/CD', color: '#2496ED' },
                  { name: 'Express.js', color: '#339933' },
                   { name: 'html', color: '#61DAFB' },
                  { name: 'css, Tailwind css', color: '#339933' },
                  { name: 'Bootstrap', color: '#FFFFFF' },
                  { name: 'REST APIs', color: '#4169E1' },
                  { name: ' Authentication & Authorization,', color: '#2496ED' },
                  { name: 'Deployment & Hosting', color: '#339933' },


                ].map((tech) => (
                  <div key={tech.name} className="backdrop-blur-md bg-slate-900/60 border border-white/10 px-4 py-2 rounded-lg flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: tech.color }}></span>
                    <span className="font-mono text-xs text-[#dce1fb]">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Image Container */}
          <div className="order-1 md:order-2 flex justify-center items-center relative animate-fade-in">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Glow Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-[#adc6ff]/20 animate-ping opacity-30"></div>
              <div className="absolute -inset-4 rounded-full border border-[#d0bcff]/10 animate-pulse opacity-50"></div>
              
              {/* Main Profile Image */}
              <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-tr from-[#adc6ff]/20 via-transparent to-[#d0bcff]/20 overflow-hidden shadow-[0_0_40px_rgba(173,198,255,0.2)]">
                <img 
                  alt="Zaheer Khan Portrait" 
                  className="w-full h-full object-cover rounded-full filter grayscale-[30%] hover:grayscale-0 transition-all duration-700" 
                  src={img}
                />
              </div>

              {/* Floating Indicator Card */}
              <div className="absolute -bottom-4 -left-4 backdrop-blur-md bg-slate-900/60 border border-white/10 p-4 rounded-2xl shadow-2xl animate-bounce hover:animate-none cursor-default">
                <div className="flex items-center gap-3">
                  <div className="bg-[#adc6ff]/20 p-2 rounded-lg">
                    <Terminal className="text-[#adc6ff]" size={20} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-[#c2c6d6]">Availability</p>
                    <p className="text-xs text-[#d0bcff] font-bold">Open for Work</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      

      {/* Tailwind Custom Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slideUp 1s ease-out forwards;
        }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animation-delay-1000 { animation-delay: 1s; }
      `}} />
    </div>
  );
};

export default Hero;