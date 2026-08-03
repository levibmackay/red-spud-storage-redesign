import SpudMark from "./SpudMark";

export default function Footer() {
  return (
    <footer className="bg-ink text-oat">
      <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
          <div>
            <div className="flex items-center gap-2">
              <SpudMark className="h-7 w-7 text-wheat" />
              <span className="font-display text-base tracking-wide">
                RED SPUD STORAGE
              </span>
            </div>
            <p className="mt-4 font-body text-sm leading-relaxed text-oat/70">
              2866 N Mendoza Dr
              <br />
              Rexburg, ID 83440
            </p>
            <p className="mt-2 font-body text-xs text-oat/50">
              Off US-20, between Exit 337 and Exit 338
            </p>
          </div>

          <div>
            <h4 className="font-display text-xs tracking-[0.25em] text-wheat">
              CONTACT
            </h4>
            <div className="mt-4 flex flex-col gap-2 font-body text-sm">
              <a href="tel:12084081110" className="text-oat/85 hover:text-oat underline decoration-wheat/40 underline-offset-4">
                (208) 408-1110
              </a>
              <a href="tel:12086563436" className="text-oat/85 hover:text-oat underline decoration-wheat/40 underline-offset-4">
                (208) 656-3436
              </a>
              <a href="mailto:redspudstorage@gmail.com" className="text-oat/85 hover:text-oat underline decoration-wheat/40 underline-offset-4">
                redspudstorage@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xs tracking-[0.25em] text-wheat">
              OFFICE HOURS
            </h4>
            <div className="mt-4 font-body text-sm text-oat/85">
              <p>Monday &ndash; Saturday</p>
              <p className="text-oat/70">8:00 AM &ndash; 8:00 PM</p>
              <p className="mt-2">Sunday</p>
              <p className="text-oat/70">Closed</p>
              <p className="mt-3 text-xs text-wheat">
                Unit access is 24/7 for tenants.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t-2 border-oat/10 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="font-body text-xs text-oat/50">
            Locally owned and operated in Rexburg, Idaho.
          </p>
          <a
            href="#pricing"
            className="inline-flex min-h-11 items-center rounded-sm bg-russet px-5 py-2.5 font-display text-xs tracking-wider text-oat hover:bg-russet-deep transition-colors"
          >
            RESERVE A UNIT
          </a>
        </div>
      </div>
    </footer>
  );
}
