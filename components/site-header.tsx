import { ArrowUpRight, Menu, Search } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";

const links = [
  ["Accueil", "#accueil"],
  ["Événements", "#evenements"],
  ["Votes", "#votes"],
  ["Organisateurs", "#organisateurs"],
];

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 px-5 md:px-10">
      <div className="mx-auto flex h-[84px] max-w-[1320px] items-center justify-between border-b border-white/15">
        <BrandMark light />
        <nav aria-label="Navigation principale" className="hidden items-center gap-9 lg:flex">
          {links.map(([label, href]) => <a key={label} href={href} className="text-[13px] font-semibold text-white/75 transition hover:text-white">{label}</a>)}
        </nav>
        <div className="hidden items-center gap-5 md:flex">
          <a href="#evenements" aria-label="Rechercher un événement" className="grid size-10 place-items-center rounded-full border border-white/20 text-white transition hover:bg-white/10"><Search className="size-[17px]" /></a>
          <a href="/login" className="text-[13px] font-semibold text-white/80 hover:text-white">Se connecter</a>
          <a href="#evenements" className="inline-flex h-11 items-center gap-2 rounded-full bg-[#C7F36B] px-5 text-[13px] font-bold text-[#10152B] transition hover:bg-[#d5ff84]">Découvrir <ArrowUpRight className="size-4" /></a>
        </div>
        <details className="group relative md:hidden">
          <summary aria-label="Ouvrir le menu" className="grid size-11 cursor-pointer list-none place-items-center rounded-full border border-white/20 text-white [&::-webkit-details-marker]:hidden"><Menu className="size-5" /></summary>
          <nav aria-label="Navigation mobile" className="absolute right-0 top-14 flex w-64 flex-col gap-1 rounded-2xl border border-white/10 bg-[#151b35] p-3 shadow-2xl">
            {links.map(([label, href]) => <a key={label} href={href} className="rounded-xl px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/10">{label}</a>)}
            <a href="/login" className="rounded-xl px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/10">Se connecter</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
