import Link from 'next/link'

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Plan', href: '/plan' },
  { label: 'About', href: '/about' },
  { label: 'Status', href: '/status' },
  { label: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
]

const destinationLinks = [
  { label: 'Scottsdale', href: '/destinations/scottsdale' },
  { label: 'Myrtle Beach', href: '/destinations/myrtle-beach' },
  { label: 'Bandon Dunes', href: '/destinations/bandon-dunes' },
  { label: 'Pinehurst', href: '/destinations/pinehurst' },
  { label: 'Pebble Beach', href: '/destinations/pebble-beach' },
  { label: 'Kiawah Island', href: '/destinations/kiawah-island' },
  { label: 'Florida', href: '/destinations/florida-golf' },
  { label: 'Scotland', href: '/destinations/scotland' },
  { label: 'Ireland', href: '/destinations/ireland' },
  { label: 'Algarve', href: '/destinations/algarve' },
]

const blogLinks = [
  { label: 'How to Plan a Golf Trip', href: '/blog/golf-trip-with-non-golfers' },
  { label: 'Golf Trip Budget Breakdown', href: '/blog/golf-trip-budget' },
  { label: 'What Partners Do on Golf Trips', href: '/blog/what-to-do-on-golf-trip-non-golfer' },
  { label: 'Best Bachelor Party Golf Destinations', href: '/blog/best-bachelor-party-golf-destinations' },
]

const Footer = () => (
  <footer className="w-full border-t border-border/80 mt-20 py-10 px-5">
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="grid gap-8 sm:grid-cols-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
            FairwayPal
          </p>
          <nav className="mt-3 flex flex-col gap-1">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors w-fit"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
            Destinations
          </p>
          <nav className="mt-3 flex flex-col gap-1">
            {destinationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors w-fit"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
            From the Blog
          </p>
          <nav className="mt-3 flex flex-col gap-1">
            {blogLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors w-fit"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="border-t border-border/60 pt-4 text-center">
        <p className="text-xs text-muted-foreground/80">
          Some links may earn a commission at no extra cost to you.{' '}
          <Link href="/affiliate-disclosure" className="hover:text-foreground">
            Learn more
          </Link>
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
