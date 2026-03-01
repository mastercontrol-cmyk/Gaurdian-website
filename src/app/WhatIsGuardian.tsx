import { motion } from "framer-motion";

export function EscalationModel() {
  return (
    <section className="py-40 bg-[#0E0E11] text-white text-center">
      <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} className="text-6xl font-bold">
        Escalation Model
      </motion.h2>
    </section>
  );
}
