const footerLinks = [
  { label: "Home", to: "/" },
  { label: "Plan", to: "/plan" },
  { label: "About", to: "/about" },
  { label: "Affiliate Disclosure", to: "/affiliate-disclosure" },
]

const Footer = () => (
  <footer className="w-full border-t border-border/80 mt-20 py-10 px-5">
    <div className="max-w-3xl mx-auto text-center space-y-4">
      <nav className="flex flex-wrap justify-center gap-x-4 gap-y-1">
        {footerLinks.map((link) => (
          <a
            key={link.to}
            href={link.to}
            className="text-xs sm:text-[11px] py-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <p className="text-xs sm:text-[11px] leading-relaxed text-muted-foreground">
        Some future partner links may earn a commission at no extra cost to users. The preserved Expedia and GetYourGuide components are kept as reusable infrastructure.
      </p>
      <p className="text-xs sm:text-[10px] leading-relaxed text-muted-foreground/80">
        This repository was cleaned back to a neutral FairwayPal starter and no longer represents the previous content property.
      </p>
    </div>
  </footer>
)

export default Footer
