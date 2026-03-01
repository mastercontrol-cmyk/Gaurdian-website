import { motion } from "motion/react";
import { ScanFace, Fingerprint, Activity } from "lucide-react";

export function HumanLayer() {
  return (
    <section className="relative py-48 w-full px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-[#0B0F1A]">
      {/* Background Image with Heavy Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1668941352926-1787c7108207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxob3VldHRlJTIwcGVvcGxlJTIwaGVscGluZyUyMGRhcmslMjB3YXJtJTIwbWluaW1hbHxlbnwxfHx8fDE3NzIzNTg0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="Human Connection" 
          className="w-full h-full object-cover opacity-[0.03] grayscale contrast-150 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-[#0B0F1A]/80 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_8px] opacity-10 pointer-events-none" />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative inline-block"
        >
          <div className="absolute -top-10 -left-10 w-6 h-[1px] bg-red-500/30" />
          <div className="absolute -top-10 -left-10 w-[1px] h-6 bg-red-500/30" />
          <div className="absolute -bottom-10 -right-10 w-6 h-[1px] bg-red-500/30" />
          <div className="absolute -bottom-10 -right-10 w-[1px] h-6 bg-red-500/30" />

          <h2 className="text-[10px] font-bold tracking-[0.5em] text-red-500 mb-6 uppercase">
            Biological Integration
          </h2>

          <h3 className="text-5xl md:text-8xl font-bold text-white uppercase tracking-tighter leading-none">
            Empathy <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 italic">
              Uncoded
            </span>.
          </h3>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-2xl font-light text-white/40 max-w-2xl mx-auto leading-relaxed border-l border-red-500/20 pl-10 text-left"
        >
          Guardian bridges the gap between neural detection and human compassion.
          When the AI escalates, a verified community protocol activates.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 text-left">
          {[
            { title: "AI Detects", desc: "Real-time anomaly triangulation across the local network.", icon: ScanFace },
            { title: "Humans Decide", desc: "Contextual judgment calls powered by the protocol.", icon: Fingerprint },
            { title: "Community Hub", desc: "Physical response layers when proximity is critical.", icon: Activity }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.8 }}
              className="group border-t border-white/5 pt-8 hover:border-red-500/30 transition-all duration-700 cursor-default"
            >
              <item.icon className="w-5 h-5 text-red-500/50 mb-6 group-hover:text-red-500 transition-colors duration-500" />
              <h4 className="text-[11px] font-bold text-white/80 mb-4 uppercase tracking-[0.3em]">
                {item.title}
              </h4>
              <p className="text-white/30 text-[13px] font-mono leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
