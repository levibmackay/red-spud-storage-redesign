import SpudMark from "./SpudMark";

export default function Header() {
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

        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="tel:12084081110"
            className="hidden font-body text-sm font-medium text-oat/90 underline decoration-wheat/50 underline-offset-4 hover:text-oat sm:inline"
          >
            (208) 408-1110
          </a>
          <a
            href="#pricing"
            className="rounded-sm bg-russet px-4 py-2 font-display text-xs tracking-wider text-oat hover:bg-russet-deep transition-colors sm:text-sm"
          >
            RESERVE A UNIT
          </a>
        </div>
      </div>
    </header>
  );
}
