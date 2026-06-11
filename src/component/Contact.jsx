import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  Instagram, 
  Linkedin, 
  MessageCircle, 
  Terminal, 
  Send,
  Zap,
  Globe,
  Lock
} from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      label: "PHONE_VOICE",
      value: "+91 9310109225",
      icon: <Phone size={20} className="text-[#adc6ff]" />,
      link: "tel:+919310109225"
    },
    {
      label: "SMTP_ADDR",
      value: "design.by.zaheer@gmail.com",
      icon: <Mail size={20} className="text-[#d0bcff]" />,
      link: "mailto:design.by.zaheer@gmail.com"
    }
  ];

  const socialLinks = [
    { name: "LINKEDIN", icon: <Linkedin size={18} />, value: "@zaheer-dev", link: "https://www.linkedin.com/in/zaheer-k-06b53b365/" },
    { name: "WHATSAPP", icon: <MessageCircle size={18} />, value: "Ping Me", link: "https://wa.me/919310109225" }
  ];

  return (
    <section id="contact" className="relative py-24 bg-[#020617] text-[#dce1fb] overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#4d8eff]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-[#571bc1]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-[1450px] mx-auto px-6 md:px-20 relative z-10">
        <div className="flex flex-col items-center mb-16 text-center space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#adc6ff] text-xs font-bold tracking-[0.3em] uppercase"
          >
            Network Interface
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight"
          >
            Initiate <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#adc6ff] to-[#d0bcff]">Connection</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#c2c6d6] max-w-2xl"
          >
            Available for technical consultations, architectural reviews, and high-concurrency project leadership. Let's build the next digital reality.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Digital Signal Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="text-[10px] font-bold tracking-widest text-[#8c909f] uppercase font-mono">Digital Signal</span>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, i) => (
                <motion.a
                  key={i}
                  href={method.link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group block p-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-900/60 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {method.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-[#8c909f] mb-1">{method.label}</p>
                      <p className="text-xl font-bold tracking-tight">{method.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="p-5 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl hover:border-[#4d8eff]/40 transition-all group"
                >
                  <div className="flex flex-col gap-3">
                    <div className="text-[#8c909f] group-hover:text-[#adc6ff] transition-colors">
                      {social.icon}
                    </div>
                    <div>
                      <p className="text-[9px] font-mono text-[#8c909f] mb-0.5">{social.name}</p>
                      <p className="text-xs font-bold">{social.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="p-6 bg-slate-900/40 border border-white/5 rounded-2xl">
              <p className="text-sm italic text-[#8c909f] leading-relaxed">
                "Architecting robust bridges between complex business requirements and high-performance digital reality."
              </p>
            </div>
          </div>

          {/* Handshake Terminal Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative rounded-2xl border border-white/10 bg-[#0c1324] overflow-hidden shadow-2xl"
            >
              {/* Terminal Header */}
              

              <form className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-[10px] font-mono text-[#8c909f] uppercase">
                      <Terminal size={12} className="text-[#adc6ff]" />
                      USER_NAME
                    </label>
                    <input 
                      type="text" 
                      placeholder="e.g. Satoshi Nakamoto"
                      className="w-full bg-[#070d1f] border border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4d8eff]/50 transition-colors font-mono text-[#dce1fb] placeholder:text-[#33394c]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-[10px] font-mono text-[#8c909f] uppercase">
                      <Globe size={12} className="text-[#d0bcff]" />
                      RETURN_PATH
                    </label>
                    <input 
                      type="email" 
                      placeholder="client@protocol.com"
                      className="w-full bg-[#070d1f] border border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4d8eff]/50 transition-colors font-mono text-[#dce1fb] placeholder:text-[#33394c]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-[10px] font-mono text-[#8c909f] uppercase">
                    <Zap size={12} className="text-[#89ceff]" />
                    REQUEST_TYPE
                  </label>
                  <select className="w-full bg-[#070d1f] border border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4d8eff]/50 transition-colors font-mono text-[#dce1fb] appearance-none cursor-pointer">
                    <option>Technical Consultation</option>
                    <option>Project Architecture</option>
                    <option>Full-Stack Development</option>
                    <option>Performance Optimization</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-[10px] font-mono text-[#8c909f] uppercase">
                    <MessageCircle size={12} className="text-[#4d8eff]" />
                    DATA_PAYLOAD
                  </label>
                  <textarea 
                    rows="4"
                    placeholder="Describe the scope and technical requirements of your project..."
                    className="w-full bg-[#070d1f] border border-white/5 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-[#4d8eff]/50 transition-colors font-mono text-[#dce1fb] placeholder:text-[#33394c] resize-none"
                  ></textarea>
                </div>

                <button className="group relative w-full py-4 bg-gradient-to-r from-[#4d8eff] to-[#571bc1] rounded-xl font-bold text-[#00285d] flex items-center justify-center gap-3 overflow-hidden transition-all active:scale-[0.98]">
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <span>SEND MESSAGE</span>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>

                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-2 text-[9px] font-mono text-[#8c909f]">
                    <Lock size={10} className="text-green-500" />
                    CONNECTION SECURE (TLS 1.3)
                  </div>
                  <div className="text-[9px] font-mono text-[#8c909f]">
                    LAT: 28.6139 | LON: 77.2090
                  </div>
                </div>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
