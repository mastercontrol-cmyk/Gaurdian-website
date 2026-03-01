import { motion } from "motion/react";
import { Link } from "react-router";
import logoSymbol from "figma:asset/dd16ad27f1e068319b6efb129cb2b3fb68ec5e36.png";

export function FinalCTA() {
  return (
    <section className="py-32 w-full px-6 flex flex-col items-center justify-center text-center bg-[#0B0F1A] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px]" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="space-y-10 max-w-4xl relative z-10"
      >
        <motion.img 
            src={logoSymbol} 
            alt="Guardian"
            className="w-24 h-24 object-contain mx-auto mb-8 drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <h2 className="text-5xl md:text-8xl font-bold text-white leading-none tracking-tighter">
          Safety is a <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">presence</span>.
        </h2>
        
        <p className="text-xl text-white/50 max-w-2xl mx-auto font-light">
            Join the network. Protect yourself. Protect your city.
        </p>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-6">
            <Link 
                to="#" 
                className="group relative px-10 py-5 bg-red-600 overflow-hidden rounded-full transition-all duration-300 hover:shadow-[0_0_50px_rgba(220,38,38,0.6)] hover:scale-105"
            >
                <span className="relative z-10 text-white font-bold tracking-widest uppercase">Request Early Access</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            
            <Link 
                to="#" 
                className="px-10 py-5 bg-transparent border border-white/10 text-white font-bold tracking-widest uppercase rounded-full hover:bg-white/5 transition-all duration-300"
            >
                Read Manifesto
            </Link>
        </div>
      </motion.div>
    </section>
  );
}
