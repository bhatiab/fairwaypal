"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Trees, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/plan', label: 'Plan' },
  { href: '/destinations/scottsdale', label: 'Destinations' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
]

export default function Navbar() {
  const pathname = usePathname() ?? '/'
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl">
      <div className="page-shell flex items-center justify-between py-4">
        <Link className="flex items-center gap-3" href="/">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
            <Trees className="h-5 w-5" />
          </span>
          <span className="text-lg font-semibold tracking-wide text-foreground" style={{ fontFamily: 'var(--font-body)' }}>
            FairwayPal
          </span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={active ? 'nav-link nav-link-active' : 'nav-link'}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-card text-foreground md:hidden"
          aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen ? (
        <nav className="border-t border-border/70 bg-background/95 md:hidden" aria-label="Mobile primary">
          <div className="page-shell flex flex-col gap-2 py-4">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={active ? 'nav-link nav-link-active' : 'nav-link'}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </nav>
      ) : null}
    </header>
  )
}
