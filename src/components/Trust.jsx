import { motion } from "framer-motion";
import PostDivider from "./PostDivider";

export default function Trust() {
  return (
    <section className="bg-ink py-16 text-oat sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 sm:grid-cols-2 sm:gap-14"
        >
          <div>
            <h3 className="font-display text-sm tracking-[0.25em] text-wheat">
              OWNER
            </h3>
            <p className="mt-3 font-display text-2xl leading-tight sm:text-3xl">
              Brannon Birrer
            </p>
            <p className="mt-3 font-body text-sm leading-relaxed text-oat/75 sm:text-base">
              A BYU-Idaho alumnus who understands the Rexburg community from
              the ground up &mdash; from student move-outs to snowmobile
              season.
            </p>
          </div>
          <div>
            <h3 className="font-display text-sm tracking-[0.25em] text-wheat">
              PROPERTY MANAGER
            </h3>
            <p className="mt-3 font-display text-2xl leading-tight sm:text-3xl">
              Kevin
            </p>
            <p className="mt-3 font-body text-sm leading-relaxed text-oat/75 sm:text-base">
              A local pro who ensures the facility stays clean, secure, and
              running smoothly &mdash; day in, day out.
            </p>
          </div>
        </motion.div>

        <PostDivider className="mt-14" />

        {/* The plaque */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl rounded-sm border-2 border-wheat/50 bg-oat/[0.04] px-6 py-10 text-center sm:px-12 sm:py-14"
        >
          <p className="font-display text-xs tracking-[0.35em] text-wheat">
            THE RED SPUD HANDSHAKE
          </p>
          <p className="mt-5 font-display text-xl leading-snug text-oat sm:text-2xl">
            Honest pricing. Local accountability. A neighborly approach to
            business.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
