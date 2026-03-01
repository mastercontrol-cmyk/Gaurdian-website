import { motion } from "framer-motion";
import { ScanFace, Fingerprint, Activity } from "lucide-react";

export function HumanLayer() {
  return (
    <section className="py-40 bg-[#0B0F1A] text-white">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} className="text-6xl font-bold">
          Human Layer
        </motion.h2>
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} className="text-white/50">
          AI detects. Humans decide. Community responds.
        </motion.p>
        <div className="grid md:grid-cols-3 gap-8">
          {[ScanFace, Fingerprint, Activity].map((Icon,i)=>(
            <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} className="border border-white/10 p-6 rounded-xl">
              <Icon className="w-6 h-6 text-red-500 mb-4"/>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
