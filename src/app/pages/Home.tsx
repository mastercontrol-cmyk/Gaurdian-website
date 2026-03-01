import { motion } from "motion/react";
import { Hero } from "../components/Hero";
import { WhatIsGuardian } from "../components/WhatIsGuardian";
import { SystemNetwork } from "../components/SystemNetwork";
import { EscalationModel } from "../components/EscalationModel";
import { HumanLayer } from "../components/HumanLayer";
import { PrivacyVault } from "../components/PrivacyVault";
import { ChennaiLaunch } from "../components/ChennaiLaunch";
import { FinalCTA } from "../components/FinalCTA";
import { CustomCursor } from "../components/CustomCursor";

export function Home() {
  return (
    <div className="flex flex-col w-full cursor-none">
      <CustomCursor />
      <Hero />
      <WhatIsGuardian />
      <SystemNetwork />
      <EscalationModel />
      <HumanLayer />
      <PrivacyVault />
      <ChennaiLaunch />
      <FinalCTA />
    </div>
  );
}
