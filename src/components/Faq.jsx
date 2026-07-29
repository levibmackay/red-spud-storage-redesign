import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Do you offer climate-controlled units?",
    a: "Yes. Climate-controlled units are available — helpful given how much Rexburg temperatures swing between seasons.",
  },
  {
    q: "I'm a BYU-Idaho student — do you offer student storage?",
    a: "Yes, and we offer a student discount. Plenty of customers store between semesters and during breaks.",
  },
  {
    q: "How do I know what size unit I need?",
    a: "As a rough guide: 5x5 units hold about what fits in a small walk-in closet — boxes, decorations, camping gear. 5x10 and 5x15 handle bikes, tools, and small furniture. 10x20 and 10x25 fit the contents of a two- to three-bedroom home. Call or stop by and Kevin can help you size it right.",
  },
  {
    q: "Can I store my RV, boat, or trailer?",
    a: "Yes — we have outdoor parking for RVs, boats, trailers, ATVs, and snowmobiles, plus a 10x35 pull-thru \"Big Bay\" unit for larger vehicles.",
  },
  {
    q: "What am I not allowed to store?",
    a: "Perishables, flammables, hazardous chemicals, firearms, and live animals are not permitted.",
  },
  {
    q: "Do you sell moving and packing supplies?",
    a: "Yes, boxes, tape, bubble wrap, and furniture covers are sold at the office.",
  },
  {
    q: "Do I need my own lock?",
    a: "Yes, you'll provide your own lock. We recommend a disc-style lock for better security.",
  },
  {
    q: "What are the lease terms, and how do I pay?",
    a: "It's month-to-month with no long-term contract. We accept major credit cards, checks, and online payments through our 24/7 rental and payment portal. Billing is prorated, and insurance is available.",
  },
  {
    q: "How secure is the facility?",
    a: "The property has gated keypad entry, 24/7 video surveillance, and well-lit concrete drives. Unit access is 24/7 for tenants, even though the office keeps set hours.",
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b-2 border-ink/15">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-display text-base text-ink sm:text-lg">
          {item.q}
        </span>
        <span
          className={`shrink-0 font-display text-2xl text-russet transition-transform duration-200 ${
            isOpen ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 font-body text-sm leading-relaxed text-ink/75 sm:text-base">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-oat py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center font-display text-3xl tracking-tight text-ink sm:text-5xl"
        >
          QUESTIONS, ANSWERED
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 border-t-2 border-ink/15"
        >
          {faqs.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
