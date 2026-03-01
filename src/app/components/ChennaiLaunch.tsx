import { motion } from "motion/react";
import { MapPin } from "lucide-react";

export function ChennaiLaunch() {
  return (
    <section className="relative py-48 w-full px-6 md:px-12 flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
            <img 
                src="https://images.unsplash.com/photo-1760421130990-928037a1af03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjBjaXR5JTIwbmlnaHQlMjBsaWdodHMlMjBibHVycmVkfGVufDF8fHx8MTc3MjM1ODQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Chennai Night Lights"
                className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F1A] via-[#0B0F1A]/90 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-12">
            <div className="space-y-8">
                <div className="flex items-center gap-2 text-red-500">
                    <MapPin className="w-5 h-5" />
                    <span className="text-sm font-medium tracking-[0.2em] uppercase">Launch Location</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-light text-white">
                    Hello, <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 font-normal">Chennai</span>.
                </h2>
                <p className="text-xl text-white/60 max-w-xl">
                    We are building the first Guardian network in India. 
                    Be part of the pilot program starting next month.
                </p>
                <div className="flex flex-wrap gap-4">
                    <button className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors">
                        Join Early Access
                    </button>
                    <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-colors">
                        Apply as Safe Shop
                    </button>
                </div>
            </div>

            <div className="hidden md:block">
                <div className="p-6 border border-white/10 rounded-2xl backdrop-blur-md bg-white/5 max-w-sm">
                    <div className="text-xs text-white/40 uppercase mb-4">Network Status</div>
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-white">Active Nodes</span>
                        <span className="text-green-400 font-mono">142</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-white">Safe Zones</span>
                        <span className="text-green-400 font-mono">18</span>
                    </div>
                    <div className="w-full bg-white/10 h-1 mt-4 rounded-full overflow-hidden">
                        <div className="w-[35%] h-full bg-red-500 rounded-full" />
                    </div>
                    <div className="mt-2 text-[10px] text-white/30 text-right">Pilot Capacity 35% Filled</div>
                </div>
            </div>
        </div>
    </section>
  );
}
