import { motion } from "framer-motion";
import SpudMark from "./SpudMark";

export default function Hero() {
  return (
    <section id="top" className="bg-grain relative overflow-hidden bg-oat pt-14 pb-14 sm:pt-20 sm:pb-20">
      {/* faint diagonal furrow-line texture, evoking plowed field rows */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full text-ink/[0.04]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="hero-furrows"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(28)"
          >
            <line x1="0" y1="0" x2="0" y2="28" stroke="currentColor" strokeWidth="2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-furrows)" />
      </svg>

      {/* faint oversized spud mark, decorative, bleeding off the edge */}
      <SpudMark
        className="pointer-events-none absolute -right-16 -top-10 h-72 w-72 text-ink/[0.04] sm:h-96 sm:w-96"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 font-display text-xs tracking-[0.35em] text-russet"
        >
          REXBURG, IDAHO &middot; LOCALLY OWNED
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-[clamp(2.6rem,1.4rem+6vw,4.5rem)] leading-[0.95] tracking-tight text-ink"
        >
          STORAGE THAT
          <br />
          SHAKES YOUR HAND,
          <br />
          NOT A CALL CENTER
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-6 max-w-xl font-body text-base leading-relaxed text-ink/80 sm:text-lg"
        >
          Owned by Brannon Birrer, a BYU-Idaho alum who understands this town
          from the ground up. Gated, well-lit units just off US-20 &mdash;
          honest pricing, no long-term contract, and a real person on the
          phone.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-3 font-body text-sm text-ink/60"
        >
          2866 N Mendoza Dr, Rexburg &middot; half a mile from Walmart &middot;
          minutes from campus
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="tel:12084081110"
            className="w-full rounded-sm bg-russet px-7 py-3.5 text-center font-display text-sm tracking-wider text-oat shadow-sm hover:bg-russet-deep transition-colors sm:w-auto"
          >
            CALL (208) 408-1110
          </a>
          <a
            href="#pricing"
            className="w-full rounded-sm border-2 border-ink px-7 py-3.5 text-center font-display text-sm tracking-wider text-ink hover:bg-ink hover:text-oat transition-colors sm:w-auto"
          >
            RESERVE A UNIT
          </a>
        </motion.div>
      </div>
    </section>
  );
}
