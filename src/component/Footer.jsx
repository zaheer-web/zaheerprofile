import { Github, Linkedin, Instagram, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#020617] via-[#0f172a] to-black text-gray-400 pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* NAME */}
        <h2 className="text-2xl font-bold text-white mb-4">
          Zaheer Khan
        </h2>

        <p className="text-gray-400 mb-8">
          Frontend Developer building modern web interfaces.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-6 mb-10">

          <a
            href="https://github.com/zaheer-web"
            className="hover:text-blue-400 transition"
          >
            <Github size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/zaheer-k-06b53b365/"
            className="hover:text-blue-400 transition"
          >
            <Linkedin size={22} />
          </a>

          <a
            href="https://www.instagram.com/md_zaherr/?hl=en"
            className="hover:text-blue-400 transition"
          >
            <Instagram size={22} />
          </a>

        </div>

        {/* COPYRIGHT */}
        <p className="text-sm">
          © {new Date().getFullYear()} Zaheer Khan — All rights reserved
        </p>

      </div>

      {/* BACK TO TOP */}
      <a
        href="#home"
        className="fixed bottom-6 right-6 bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        <ArrowUp size={18} />
      </a>

    </footer>
  );
}