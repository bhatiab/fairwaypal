import Navbar from "@/components/Navbar";
import { Calendar as CalendarIcon, MapPin, Clock, CheckCircle2 } from "lucide-react";

const Calendar = () => {
  // 1. Race Data with actual Date objects
  const races = [
    { 
      id: 1, 
      grandPrix: "Australian GP", 
      circuit: "Albert Park", 
      city: "Melbourne",
      date: new Date("2026-03-15T05:00:00Z"), // UTC Time
    },
    { 
      id: 2, 
      grandPrix: "Chinese GP", 
      circuit: "Shanghai International", 
      city: "Shanghai",
      date: new Date("2026-03-22T07:00:00Z"),
    },
    { 
      id: 3, 
      grandPrix: "Japanese GP", 
      circuit: "Suzuka", 
      city: "Suzuka",
      date: new Date("2026-04-05T05:00:00Z"),
    },
    { 
      id: 4, 
      grandPrix: "Bahrain GP", 
      circuit: "Sakhir", 
      city: "Sakhir",
      date: new Date("2026-04-19T15:00:00Z"),
    }
  ];

  const now = new Date();

  // 2. Logic to determine race status based on current time
  const getStatus = (raceDate: Date) => {
    const diffInHours = (raceDate.getTime() - now.getTime()) / (1000 * 60 * 60);

    if (diffInHours < -3) {
      return { label: "Completed", style: "text-white/20 border-white/5 bg-transparent", icon: <CheckCircle2 className="h-3 w-3" /> };
    }
    if (diffInHours <= 0 && diffInHours >= -3) {
      return { label: "LIVE NOW", style: "text-[#39FF14] border-[#39FF14] bg-[#39FF14]/10", icon: <span className="h-2 w-2 rounded-full bg-[#39FF14] animate-ping" /> };
    }
    if (diffInHours > 0 && diffInHours < 168) { // Within 7 days
      return { label: "Race Week", style: "text-[#FFD700] border-[#FFD700] bg-[#FFD700]/10", icon: <Clock className="h-3 w-3" /> };
    }
    return { label: "Upcoming", style: "text-white/40 border-white/10 bg-white/5", icon: null };
  };

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 px-5">
      <Navbar />
      
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center gap-4 mb-12">
          <div className="p-3 rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/20">
            <CalendarIcon className="text-[#FFD700] h-8 w-8" />
          </div>
          <div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase" style={{ fontFamily: "var(--font-hero)" }}>
              2026 Schedule
            </h1>
            <p className="text-white/40 text-sm uppercase tracking-[0.2em]">The New Era Begins</p>
          </div>
        </header>

        <div className="grid gap-6">
          {races.map((race) => {
            const status = getStatus(race.date);
            return (
              <div 
                key={race.id} 
                className={`relative overflow-hidden border p-6 md:p-8 rounded-2xl transition-all duration-500 ${status.style}`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold opacity-80">
                        {race.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest ${status.style}`}>
                        {status.icon}
                        {status.label}
                      </div>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter pt-2">
                      {race.grandPrix}
                    </h2>
                    
                    <div className="flex items-center gap-4 pt-2">
                      <div className="flex items-center gap-1.5 text-white/50 text-xs font-medium uppercase tracking-wider">
                        <MapPin className="h-3.5 w-3.5" />
                        {race.circuit}
                      </div>
                    </div>
                  </div>

                  <div className="text-left md:text-right">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-1">Local Start Time</p>
                    <p className="text-xl font-mono font-bold">
                      {race.date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}
                    </p>
                  </div>
                </div>
                
                {/* Background Decoration for Live/Upcoming races */}
                {status.label !== "Completed" && (
                  <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-white/5 blur-[80px]" />
                )}
              </div>
            );
          })}
        </div>

        {/* Support Section Hook */}
        <div className="mt-16 p-8 rounded-2xl border border-white/5 bg-gradient-to-r from-transparent to-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/60 text-sm max-w-md text-center md:text-left leading-relaxed">
            Get the <span className="text-white font-bold">full technical breakdown</span> for every track on the 2026 calendar, including fuel consumption and battery deployment maps.
          </p>
          <a 
            href="/new-era" 
            className="px-8 py-3 bg-white text-black font-black uppercase tracking-tighter rounded-md hover:bg-[#FFD700] transition-colors whitespace-nowrap"
          >
            Access Tech Guide
          </a>
        </div>
      </div>
    </main>
  );
};

export default Calendar;