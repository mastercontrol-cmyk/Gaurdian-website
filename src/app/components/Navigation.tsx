
import { useEffect, useState } from "react";

export default function Navigation() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.6) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-10 px-6 py-3 backdrop-blur-md bg-black/40 border border-white/10 rounded-full">
        <span className="text-sm text-white/80">Guardian</span>
        <nav className="flex gap-6 text-xs uppercase tracking-widest text-white/40">
          <span>system</span>
          <span>control</span>
          <span>access</span>
        </nav>
        <span className="flex items-center gap-2 text-xs text-green-400">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse"></span>
          online
        </span>
      </div>
    </div>
  );
}
