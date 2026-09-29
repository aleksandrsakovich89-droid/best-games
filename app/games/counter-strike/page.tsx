import Link from "next/link";
import Image from "next/image";

export default function CounterStrikePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08090b] text-white selection:bg-amber-300 selection:text-[#08090b]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_68%_38%,rgba(177,116,42,0.18),transparent_30%),linear-gradient(112deg,#08090b_18%,#111217_58%,#17120f)]" />
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />

      <nav className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-7 sm:px-10 lg:px-12" aria-label="Основная навигация">
        <Link href="/" className="group flex items-center gap-3" aria-label="BEST GAMES, на главную">
          <span className="flex h-9 w-9 items-center justify-center border border-amber-300/70 text-xs font-bold tracking-[-0.08em] text-amber-200 transition-colors group-hover:bg-amber-200 group-hover:text-[#08090b]">BG</span>
          <span className="text-sm font-semibold tracking-[0.22em] text-white">BEST GAMES</span>
        </Link>
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">Архив 04 / 36</span>
      </nav>

      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-89px)] w-full max-w-7xl items-center px-6 pb-16 pt-8 sm:px-10 lg:px-12">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div className="relative order-2 aspect-[4/5] w-full max-w-2xl overflow-hidden border border-white/20 bg-[#141821] shadow-2xl shadow-black/60 lg:order-1">
            <Image src="/games/counter-strike.png" alt="Counter-Strike" fill sizes="(max-width: 639px) calc(100vw - 3rem), (max-width: 1023px) calc(100vw - 5rem), (max-width: 1279px) 45vw, 50vw" quality={85} loading="eager" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/10 to-transparent" />
            <div className="absolute left-5 top-5 border border-white/20 bg-black/25 px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-white/65 backdrop-blur-sm">2000 / Classic</div>
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between border-t border-white/20 pt-4">
              <span className="text-[10px] uppercase tracking-[0.24em] text-white/55">The essential archive</span>
              <span className="font-serif text-5xl tracking-[-0.08em] text-amber-100/90">04</span>
            </div>
          </div>

          <div className="order-1 max-w-xl lg:order-2">
            <p className="mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-200/80">
              <span className="h-px w-10 bg-amber-300" />
              Золотая коллекция / 04
            </p>
            <h1 className="font-serif text-[clamp(3rem,7vw,5.5rem)] font-medium leading-[0.78] tracking-[-0.08em] text-white">Counter-Strike</h1>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-white/10 py-4 text-[10px] font-medium uppercase tracking-[0.22em] text-white/50">
              <span className="text-amber-200">2000</span>
              <span>Тактический шутер</span>
            </div>
            <p className="mt-8 max-w-lg text-lg leading-8 text-white/70">
              Раунд решают секунды: короткая команда, шаги за стеной и выбор между точным выстрелом и рискованным манёвром. Counter-Strike превращает каждую карту в напряжённый поединок команд, где доверие и хладнокровие важны не меньше меткости.
            </p>
            <Link href="/#games" className="group mt-10 inline-flex items-center gap-3 border border-amber-200/45 bg-amber-200/5 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-100 transition-colors hover:border-amber-200 hover:bg-amber-200 hover:text-[#08090b]">
              <span className="text-base leading-none transition-transform group-hover:-translate-x-1">←</span>
              НАЗАД К ИГРАМ
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}