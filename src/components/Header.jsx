import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SpudMark from "./SpudMark";

const navLinks = [
  { label: "HOME", href: "#top" },
  { label: "PRICING", href: "#pricing" },
  { label: "LOCATION", href: "#location" },
  { label: "SPECS", href: "#specs" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink text-oat border-b-2 border-wheat/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <SpudMark className="h-8 w-8 text-wheat" />
          <span className="font-display text-lg leading-none tracking-wide sm:text-xl">
            RED SPUD
            <span className="block text-[0.6rem] font-normal tracking-[0.3em] text-oat/70 font-body">
              STORAGE
            </span>
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-5 lg:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-xs tracking-wider text-oat/85 hover:text-oat transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="tel:12084081110"
            className="hidden font-body text-sm font-medium text-oat/90 underline decoration-wheat/50 underline-offset-4 hover:text-oat lg:inline"
          >
            (208) 408-1110
          </a>
          <a
            href="#pricing"
            className="hidden min-h-11 items-center rounded-sm bg-russet px-4 py-2 font-display text-xs tracking-wider text-oat hover:bg-russet-deep transition-colors lg:inline-flex lg:text-sm"
          >
            RESERVE A UNIT
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
            aria-label="Toggle menu"
            className="flex h-11 w-11 items-center justify-center rounded-sm text-oat lg:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {menuOpen ? (
                <>
                  <line x1="5" y1="5" x2="19" y2="19" />
                  <line x1="19" y1="5" x2="5" y2="19" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t-2 border-wheat/30 lg:hidden"
          >
            <nav
              aria-label="Mobile"
              className="flex flex-col gap-1 px-5 py-4"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-11 items-center font-display text-sm tracking-wider text-oat/90 hover:text-oat transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:12084081110"
                onClick={() => setMenuOpen(false)}
                className="mt-2 flex min-h-11 items-center font-body text-sm font-medium text-oat/90 underline decoration-wheat/50 underline-offset-4"
              >
                (208) 408-1110
              </a>
              <a
                href="#pricing"
                onClick={() => setMenuOpen(false)}
                className="mt-2 flex min-h-11 items-center justify-center rounded-sm bg-russet px-4 py-2 text-center font-display text-xs tracking-wider text-oat hover:bg-russet-deep transition-colors"
              >
                RESERVE A UNIT
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
