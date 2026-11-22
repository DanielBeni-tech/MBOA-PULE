import { Activity, Ticket } from "lucide-react";
import Link from "next/link";

export function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" aria-label="Mboa Pulse, accueil" className={`inline-flex items-center gap-2.5 ${light ? "text-white" : "text-[#10152B]"}`}>
      <span className="relative grid size-10 place-items-center rounded-[14px] bg-[#FF5C5C] text-white shadow-[0_8px_20px_rgba(255,92,92,.24)]">
        <Ticket className="size-[22px]" strokeWidth={1.8} />
        <Activity className="absolute left-[11px] top-[15px] size-[18px] text-[#C7F36B]" strokeWidth={2.4} />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-heading text-[17px] font-bold tracking-[-.06em]">MBOA<span className="text-[#FF5C5C]"> PULSE</span></span>
        <span className={`mt-1 text-[9px] font-semibold tracking-[.2em] ${light ? "text-white/55" : "text-[#697386]"}`}>LE CAMEROUN SORT ICI</span>
      </span>
    </Link>
  );
}
