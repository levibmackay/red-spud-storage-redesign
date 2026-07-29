import { motion } from "framer-motion";

const specs = [
  ["Access", "Interior drive-through units, double-door design — no backing up."],
  ["Security", "Gated keypad entry, 24/7 video surveillance, well-lit concrete drives."],
  ["Doors", "7-foot doors, 8-foot interior clearance."],
  ["Climate control", "Climate-controlled units available — Rexburg's swings are no joke."],
  ["Outdoor parking", "RV, boat, trailer, ATV, and snowmobile parking on site."],
  ["Lease terms", "Month-to-month, no long-term contract required."],
  ["Insurance & billing", "Insurance available, prorated billing."],
  ["Discounts", "Student, military, and senior discounts."],
  ["Moving supplies", "Boxes, tape, bubble wrap, and furniture covers sold at the office."],
  ["Locks", "Bring your own — disc-style locks recommended."],
  ["Payment", "Credit cards, checks, or online — 24/7 rental and payment portal."],
  ["Not permitted", "Perishables, flammables, hazardous chemicals, firearms, live animals."],
];

export default function Features() {
  return (
    <section className="bg-oat py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl tracking-tight text-ink sm:text-5xl">
            THE SPEC SHEET
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-body text-sm text-ink/70 sm:text-base">
            No icon grid, no fluff. Here's exactly what you get.
          </p>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 divide-y-2 divide-ink/10 border-y-2 border-ink/15"
        >
          {specs.map(([term, desc]) => (
            <div
              key={term}
              className="grid gap-1 py-4 sm:grid-cols-[13rem_1fr] sm:gap-6 sm:py-5"
            >
              <dt className="font-display text-sm tracking-wide text-russet">
                {term}
              </dt>
              <dd className="font-body text-sm leading-relaxed text-ink/80 sm:text-[0.95rem]">
                {desc}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
