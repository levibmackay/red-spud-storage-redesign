import { motion } from "framer-motion";

export default function Proximity() {
  return (
    <section id="location" className="bg-ink pt-12 pb-12 text-oat sm:pt-20 sm:pb-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-[clamp(2rem,1.2rem+4vw,3.5rem)] tracking-tight">
            RIGHT OFF US-20
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-sm text-oat/70 sm:text-base">
            The last major storage option as you head north out of town.
            Half a mile from Walmart, minutes from BYU-Idaho, and on the way
            to the South Fork for a weekend of fishing &mdash; or a trailer
            of sleds in the winter.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mt-12"
        >
          <div className="overflow-x-auto pb-1">
            <svg
              viewBox="0 0 800 420"
              className="mx-auto w-full max-w-3xl min-w-[620px]"
              role="img"
            aria-label="Line map showing Red Spud Storage located off US-20 between the North Rexburg and Sugar City-Salem exits, near Walmart and BYU-Idaho, with the Snake River to the east."
          >
            {/* US-20 corridor */}
            <path
              d="M40 260 C 220 220, 380 210, 780 150"
              stroke="#F2E9D8"
              strokeOpacity="0.25"
              strokeWidth="18"
              fill="none"
            />
            <path
              d="M40 260 C 220 220, 380 210, 780 150"
              stroke="#F2E9D8"
              strokeOpacity="0.6"
              strokeWidth="2"
              strokeDasharray="10 10"
              fill="none"
            />
            <text x="60" y="245" className="font-display" fill="#C8A24A" fontSize="15" letterSpacing="2">
              US-20
            </text>

            {/* Exit 337 - North Rexburg */}
            <g>
              <circle cx="330" cy="216" r="5" fill="#3E7CA6" />
              <text x="330" y="200" textAnchor="middle" fill="#F2E9D8" fontSize="12" className="font-display">
                EXIT 337
              </text>
              <text x="330" y="238" textAnchor="middle" fill="#F2E9D8" fillOpacity="0.6" fontSize="10">
                N. Rexburg
              </text>
            </g>

            {/* Exit 338 - Sugar City/Salem */}
            <g>
              <circle cx="560" cy="178" r="5" fill="#3E7CA6" />
              <text x="560" y="162" textAnchor="middle" fill="#F2E9D8" fontSize="12" className="font-display">
                EXIT 338
              </text>
              <text x="560" y="200" textAnchor="middle" fill="#F2E9D8" fillOpacity="0.6" fontSize="10">
                Sugar City / Salem
              </text>
            </g>

            {/* Local road to facility */}
            <path
              d="M440 200 L 430 300"
              stroke="#F2E9D8"
              strokeOpacity="0.5"
              strokeWidth="2"
              fill="none"
            />
            <text x="452" y="255" fill="#F2E9D8" fillOpacity="0.55" fontSize="10">
              N Mendoza Dr
            </text>

            {/* Red Spud Storage marker */}
            <g>
              <rect x="395" y="300" width="70" height="46" rx="3" fill="#A8432C" stroke="#F2E9D8" strokeWidth="1.5" />
              <text x="430" y="320" textAnchor="middle" fill="#F2E9D8" fontSize="9.5" fontWeight="700" className="font-display">
                RED SPUD
              </text>
              <text x="430" y="333" textAnchor="middle" fill="#F2E9D8" fontSize="9.5" fontWeight="700" className="font-display">
                STORAGE
              </text>
            </g>

            {/* Walmart marker, 0.5mi */}
            <g>
              <circle cx="330" cy="330" r="4" fill="#C8A24A" />
              <text x="330" y="352" textAnchor="middle" fill="#F2E9D8" fontSize="10.5">
                Walmart
              </text>
              <text x="330" y="365" textAnchor="middle" fill="#C8A24A" fontSize="9.5">
                0.5 mi
              </text>
              <line x1="395" y1="323" x2="340" y2="330" stroke="#F2E9D8" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="3 3" />
            </g>

            {/* BYU-Idaho marker */}
            <g>
              <circle cx="560" cy="300" r="4" fill="#C8A24A" />
              <text x="560" y="322" textAnchor="middle" fill="#F2E9D8" fontSize="10.5">
                BYU-Idaho
              </text>
              <text x="560" y="335" textAnchor="middle" fill="#C8A24A" fontSize="9.5">
                minutes away
              </text>
              <line x1="465" y1="318" x2="555" y2="300" stroke="#F2E9D8" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="3 3" />
            </g>

            {/* Snake River arrow, off to the east */}
            <g>
              <path
                d="M700 340 C 730 300, 735 240, 705 190"
                stroke="#3E7CA6"
                strokeWidth="2.5"
                fill="none"
                markerEnd="url(#arrow)"
              />
              <text x="712" y="360" textAnchor="middle" fill="#3E7CA6" fontSize="11" className="font-display">
                SOUTH FORK,
              </text>
              <text x="712" y="374" textAnchor="middle" fill="#3E7CA6" fontSize="11" className="font-display">
                SNAKE RIVER
              </text>
            </g>

            <defs>
              <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#3E7CA6" />
              </marker>
            </defs>
            </svg>
          </div>
          {/* fade + hint indicating the diagram scrolls horizontally on narrow screens */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-ink to-transparent sm:hidden" />
          <p className="mt-2 text-center font-body text-[0.65rem] tracking-wide text-oat/40 sm:hidden">
            scroll to see the full map &rarr;
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-10 grid max-w-3xl gap-6 text-center sm:grid-cols-3"
        >
          <div>
            <p className="font-display text-2xl text-wheat">0.5 mi</p>
            <p className="mt-1 font-body text-xs text-oat/60">from Walmart</p>
          </div>
          <div>
            <p className="font-display text-2xl text-wheat">Minutes</p>
            <p className="mt-1 font-body text-xs text-oat/60">from BYU-Idaho</p>
          </div>
          <div>
            <p className="font-display text-2xl text-wheat">Also serving</p>
            <p className="mt-1 font-body text-xs text-oat/60">
              Driggs, Victor, Ashton &amp; Idaho Falls
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
