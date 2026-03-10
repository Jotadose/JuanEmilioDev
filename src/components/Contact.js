import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Get in Touch
          </h2>
          <p className="text-slate-400 mb-10">
            Open to Frontend / Full-Stack roles and interesting collaborations.
            Feel free to reach out.
          </p>
          <div className="space-y-4">
            <a
              href="mailto:juanemilioelgueda@gmail.com"
              className="flex items-center justify-between p-4 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-indigo-500/40 hover:bg-slate-800 transition-all duration-200 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center group-hover:bg-indigo-600/20 transition-colors">
                  <Mail className="w-5 h-5 text-slate-300" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Email</p>
                  <p className="text-white font-medium text-sm">
                    juanemilioelgueda@gmail.com
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/juan-emilio-elgueda-lillo-75363219a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-indigo-500/40 hover:bg-slate-800 transition-all duration-200 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center group-hover:bg-indigo-600/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-slate-300" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">LinkedIn</p>
                  <p className="text-white font-medium text-sm">
                    juan-emilio-elgueda-lillo
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
            </a>
            <a
              href="https://github.com/Jotadose"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-indigo-500/40 hover:bg-slate-800 transition-all duration-200 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center group-hover:bg-indigo-600/20 transition-colors">
                  <Github className="w-5 h-5 text-slate-300" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">GitHub</p>
                  <p className="text-white font-medium text-sm">Jotadose</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
