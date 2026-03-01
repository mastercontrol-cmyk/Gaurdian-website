import { motion } from "framer-motion";

export function SystemNetwork() {
  return (
    <section className="py-40 bg-black text-white text-center">
      <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} className="text-6xl font-bold">
        System Network
      </motion.h2>
    </section>
  );
}
