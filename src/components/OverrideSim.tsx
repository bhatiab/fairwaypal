import { useState } from "react";
import { Zap } from "lucide-react";

export const OverrideSim = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="p-4 sm:p-8 border border-white/10 rounded-xl bg-gradient-to-br from-black to-zinc-900 text-center">
      <h3 className="text-xs uppercase tracking-widest text-white/50 mb-6">MOM: Manual Override Simulator</h3>
      <div className="flex justify-center gap-4 mb-8">
        <div className={`h-12 w-24 sm:h-16 sm:w-32 rounded border flex flex-col justify-center transition-all ${active ? 'border-[#39FF14] bg-[#39FF14]/10 shadow-[0_0_20px_#39FF14/20]' : 'border-white/10'}`}>
          <span className="text-[10px] uppercase opacity-50">Velocity</span>
          <span className="text-lg sm:text-2xl font-black">{active ? "342" : "318"}<span className="text-xs ml-1">KM/H</span></span>
        </div>
      </div>
      <button 
        onMouseDown={() => setActive(true)}
        onMouseUp={() => setActive(false)}
        className="group relative h-16 w-16 sm:h-20 sm:w-20 rounded-full border-4 border-[#EF3340] bg-transparent flex items-center justify-center transition-transform active:scale-90"
      >
        <Zap className={`h-8 w-8 transition-colors ${active ? 'text-[#39FF14]' : 'text-[#EF3340]'}`} />
        <span className="absolute -bottom-8 w-32 left-1/2 -translate-x-1/2 text-[10px] uppercase font-bold text-white/40">Hold to Boost</span>
      </button>
    </div>
  );
};