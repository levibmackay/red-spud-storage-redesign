import { motion } from "framer-motion";

const tiers = [
  {
    label: "SMALL",
    price: "$35",
    note: "starting at, per month",
    sizes: "5x5 · 5x10 · 5x15",
  },
  {
    label: "MEDIUM",
    price: "$78",
    note: "starting at, per month",
    sizes: "10x10 · 10x15",
  },
  {
    label: "LARGE",
    price: "$91",
    note: "starting at, per month",
    sizes: "10x20 · 10x25 · 10x35 Big Bay",
  },
];

const fits = [
  {
    size: "5x5",
    desc: 'About the size of a small walk-in closet. Boxes, holiday decorations, camping gear, college storage.',
  },
  {
    size: "5x10 / 5x15",
    desc: "Bikes, tools, small furniture.",
  },
  {
    size: "10x20 / 10x25",
    desc: "Household contents, furniture, appliances, yard equipment. Suits a two- to three-bedroom home.",
  },
  {
    size: "10x35 Big Bay",
    desc: "Pull-thru unit for boats, trailers, RVs, and compact vehicles.",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-oat py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl tracking-tight text-ink sm:text-5xl">
            UNIT SIZES &amp; PRICING
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-body text-sm text-ink/70 sm:text-base">
            Three straightforward tiers. Call or reserve online for your
            exact size and rate.
          </p>
        </motion.div>

        {/* Price board — feed-store chalkboard / hardware-store spec sheet feel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 overflow-hidden rounded-sm border-2 border-ink bg-ink text-oat"
        >
          <div className="grid divide-y-2 divide-wheat/30 sm:grid-cols-3 sm:divide-x-2 sm:divide-y-0">
            {tiers.map((t) => (
              <div key={t.label} className="px-6 py-8 text-center sm:px-4">
                <p className="font-display text-xs tracking-[0.3em] text-wheat">
                  {t.label}
                </p>
                <p className="mt-4 font-display text-5xl text-oat sm:text-4xl md:text-5xl">
                  {t.price}
                </p>
                <p className="mt-1 font-body text-xs text-oat/60">
                  {t.note}
                </p>
                <p className="mt-5 font-body text-sm text-oat/85">
                  {t.sizes}
                </p>
              </div>
            ))}
          </div>
          <div className="border-t-2 border-wheat/30 bg-oat/[0.03] px-6 py-4 text-center">
            <p className="font-body text-xs text-oat/60">
              Plus outdoor RV, boat, trailer, ATV &amp; snowmobile parking.
              Exact size-to-rate pairing varies by availability &mdash;
              nothing here is a guess, just an honest starting point.
            </p>
          </div>
        </motion.div>

        {/* What fits — scale strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-16"
        >
          <h3 className="text-center font-display text-sm tracking-[0.3em] text-russet">
            WHAT FITS WHERE
          </h3>
          <div className="mt-8 grid gap-px overflow-hidden rounded-sm border border-ink/15 bg-ink/15 sm:grid-cols-4">
            {fits.map((f) => (
              <div key={f.size} className="bg-oat px-5 py-6">
                <p className="font-display text-base text-ink">{f.size}</p>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink/70">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
