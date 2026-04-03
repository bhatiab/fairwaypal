const footerLinks = [
  { label: "About", to: "/about" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Use", to: "/terms" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => (
  <footer className="w-full border-t border-white/5 mt-20 py-8 px-5">
    <div className="max-w-3xl mx-auto text-center space-y-4">
      <nav className="flex flex-wrap justify-center gap-x-4 gap-y-1">
        {footerLinks.map((link) => (
          <a
            key={link.to}
            href={link.to}
            className="text-xs sm:text-[11px] py-1 text-white/30 hover:text-white/60 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <p className="text-xs sm:text-[11px] leading-relaxed text-white/25">
        Some links may earn a commission at no extra cost to you. This helps keep GP Moto Pal independent.
      </p>
      <p className="text-xs sm:text-[10px] leading-relaxed text-white/15">
        MotoGP™ and related marks are trademarks of Dorna Sports. This site is not affiliated with MotoGP or Dorna Sports.
      </p>
    </div>
  </footer>
);

export default Footer;
