export const TechComparison = () => {
  const specs = [
    { feature: "Electrical Power", v2025: "120kW (160hp)", v2026: "350kW (470hp)", highlight: true },
    { feature: "Aero Control", v2025: "DRS (Rear Only)", v2026: "Active X/Z Mode", highlight: true },
    { feature: "Min. Weight", v2025: "798kg", v2026: "768kg", highlight: false },
    { feature: "Fuel Type", v2025: "10% Ethanol", v2026: "100% Sustainable", highlight: false },
  ];

  return (
    <div className="my-10 overflow-x-auto rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
      <table className="w-full text-left text-xs sm:text-sm">
        <thead className="bg-white/10 text-[9px] sm:text-[10px] uppercase tracking-widest text-white/50">
          <tr>
            <th className="p-2 sm:p-4">Technical Spec</th>
            <th className="p-2 sm:p-4">2025 Era</th>
            <th className="p-2 sm:p-4 text-[#39FF14]">2026 New Era</th>
          </tr>
        </thead>
        <tbody>
          {specs.map((s) => (
            <tr key={s.feature} className="border-t border-white/5 transition-colors hover:bg-white/5">
              <td className="p-2 sm:p-4 font-semibold text-white">{s.feature}</td>
              <td className="p-2 sm:p-4 text-white/40">{s.v2025}</td>
              <td className={`p-2 sm:p-4 font-bold ${s.highlight ? 'text-white' : 'text-white/70'}`}>{s.v2026}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};