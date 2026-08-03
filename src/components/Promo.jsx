import { motion } from "framer-motion";

export default function Promo() {
  return (
    <section className="bg-ink pt-10 pb-10 sm:pt-14 sm:pb-14">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-between gap-4 rounded-sm border-2 border-wheat/50 bg-oat/[0.05] px-6 py-6 text-center sm:flex-row sm:text-left"
        >
          <div>
            <p className="font-display text-xs tracking-[0.25em] text-wheat">
              CURRENT OFFER
            </p>
            <p className="mt-2 font-display text-lg text-oat sm:text-xl">
              50% off your first 4 months on a 10x20 or larger unit
            </p>
            <p className="mt-1 font-body text-xs text-oat/60">
              Requires 4 consecutive months. Ask when you call or reserve
              online.
            </p>
          </div>
          <a
            href="#pricing"
            className="inline-flex min-h-11 shrink-0 items-center rounded-sm bg-russet px-6 py-3 font-display text-xs tracking-wider text-oat hover:bg-russet-deep transition-colors"
          >
            SEE SIZES
          </a>
        </motion.div>
      </div>
    </section>
  );
}
