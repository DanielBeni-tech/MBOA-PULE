"use client";

import { useMemo, useState } from "react";
import { ArrowRight, CalendarDays, Check, ChevronDown, Heart, MapPin, Search, Share2, Trophy, Zap } from "lucide-react";

const events = [
  { slug: "douala-music-week", title: "Douala Music Week", date: "Sam. 05 déc. 2026", venue: "Canal Olympia, Douala", views: "2 480", price: "5 000 XAF", host: "Mboa Live", verified: true, category: "Concert", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=550&q=85", badge: "À la une" },
  { slug: "afrowave-festival", title: "AfroWave Festival", date: "Mar. 22 déc. 2026", venue: "Stade Omnisports, Douala", views: "927", price: "2 000 XAF", host: "Owise Agency", verified: true, category: "Festival", image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=550&q=85" },
  { slug: "nuits-de-yaounde", title: "Les Nuits de Yaoundé", date: "Ven. 11 déc. 2026", venue: "Palais des Congrès, Yaoundé", views: "385", price: "3 500 XAF", host: "Kora Events", verified: true, category: "Soirée", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=550&q=85" },
  { slug: "afromood-festival", title: "Afromood — Édition de Noël", date: "Mar. 15 déc. 2026", venue: "Église Orthodoxe, Yaoundé", views: "375", price: "8 000 XAF", host: "Jeunes Dynamiques", verified: false, category: "Festival", image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=550&q=85" },
  { slug: "ya-fe-2026", title: "YA-FE 2026", date: "Sam. 19 déc. 2026", venue: "Palais des Congrès, Yaoundé", views: "756", price: "2 000 XAF", host: "KEN Events", verified: true, category: "Culture", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=550&q=85" },
  { slug: "brunch-vibes", title: "Brunch & Vibes", date: "Dim. 13 déc. 2026", venue: "Krystal Palace, Douala", views: "154", price: "12 000 XAF", host: "Sunday Social", verified: false, category: "Autre", image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=550&q=85" },
];

const campaigns = [
  { slug: "pulse-awards", title: "Pulse Awards 2026", date: "Jusqu’au 30 déc. 2026", venue: "Talents de l’année · Douala", views: "1 284", price: "Dès 100 XAF / vote", host: "Mboa Pulse", verified: true, category: "Musique", image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=550&q=85", badge: "En cours" },
  { slug: "voix-urbaines", title: "Les Voix Urbaines", date: "Jusqu’au 18 déc. 2026", venue: "Révélation musicale · Cameroun", views: "846", price: "Vote gratuit", host: "Culture 237", verified: true, category: "Musique", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=550&q=85" },
  { slug: "talents-creatifs", title: "Talents Créatifs 237", date: "Jusqu’au 24 déc. 2026", venue: "Créativité & design · Yaoundé", views: "392", price: "Dès 200 XAF / vote", host: "Le Hub", verified: false, category: "Culture", image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=550&q=85" },
];

const eventCategories = ["Tous", "Concert", "Festival", "Soirée", "Conférence", "Culture", "Autre"];
const voteCategories = ["Tous", "Musique", "Culture"];

type Listing = (typeof events)[number];

function ListingCard({ item, voting, onNotify }: { item: Listing; voting: boolean; onNotify: (message: string) => void }) {
  const [favorite, setFavorite] = useState(false);
  const href = voting ? `/votes/${item.slug}` : `/events/${item.slug}`;
  async function share() {
    try {
      if (navigator.share) await navigator.share({ title: item.title, url: window.location.origin + href });
      else {
        await navigator.clipboard.writeText(window.location.origin + href);
        onNotify("Lien copié. Partage-le avec tes proches !");
      }
    } catch {
      onNotify("Le partage n’a pas pu être ouvert.");
    }
  }

  return (
    <article className="listing-card group grid overflow-hidden rounded-[18px] border border-[#e8e6e1] bg-white transition duration-200 hover:-translate-y-0.5 hover:border-[#d6d2ca] hover:shadow-[0_12px_30px_rgba(16,21,43,.09)] md:grid-cols-[132px_minmax(0,1fr)]">
      <div className="relative min-h-[220px] overflow-hidden md:min-h-full">
        <a href={href} tabIndex={-1} aria-hidden="true" className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105" style={{ backgroundImage: `url('${item.image}')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10152B]/55 via-transparent to-transparent md:hidden" />
        {item.badge && <span className="absolute left-3 top-3 rounded-full bg-[#C7F36B] px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[.1em] text-[#10152B]">{item.badge}</span>}
        <div className="absolute right-3 top-3 flex gap-1.5 md:flex-col">
          <button type="button" aria-label={favorite ? "Retirer des favoris" : "Ajouter aux favoris"} aria-pressed={favorite} onClick={() => setFavorite(!favorite)} className={`grid size-8 place-items-center rounded-full shadow-sm transition ${favorite ? "bg-[#FF5C5C] text-white" : "bg-white/95 text-[#10152B] hover:text-[#FF5C5C]"}`}><Heart className={`size-4 ${favorite ? "fill-current" : ""}`} /></button>
          <button type="button" aria-label="Partager" onClick={share} className="grid size-8 place-items-center rounded-full bg-white/95 text-[#10152B] shadow-sm transition hover:text-[#FF5C5C]"><Share2 className="size-4" /></button>
        </div>
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-[#10152B]/80 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-sm md:hidden"><CalendarDays className="size-3" />{item.date}</span>
      </div>
      <div className="flex min-w-0 flex-col p-4">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[9px] font-extrabold uppercase tracking-[.14em] text-[#FF5C5C]">{item.category}</span>
          <span className="inline-flex items-center gap-1 text-[10px] text-[#697386]"><Zap className="size-3 text-[#FF5C5C]" />{item.views}</span>
        </div>
        <a href={href} className="mt-1.5 line-clamp-2 font-heading text-[17px] font-bold leading-tight tracking-[-.04em] text-[#10152B] transition hover:text-[#e84c50]">{item.title}</a>
        <div className="mt-3 flex flex-col gap-2 text-[11px] leading-4 text-[#697386]">
          <span className="hidden items-center gap-1.5 md:flex"><CalendarDays className="size-3.5 shrink-0 text-[#FF5C5C]" />{item.date}</span>
          <span className="flex items-center gap-1.5"><MapPin className="size-3.5 shrink-0 text-[#FF5C5C]" /><span className="truncate">{item.venue}</span></span>
        </div>
        <div className="mt-auto pt-4">
          <div className="mb-3 flex min-h-5 items-center justify-between gap-2"><span className="truncate text-[10px] text-[#697386]">par <strong className="font-semibold text-[#10152B]">{item.host}</strong></span>{item.verified && <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#f0f5e8] px-2 py-0.5 text-[9px] font-bold text-[#536a22]"><Check className="size-3" />Vérifié</span>}</div>
          <div className="flex items-center justify-between gap-2 border-t border-[#f0eee9] pt-3"><span className="text-[10px] font-bold text-[#10152B]">{item.price}</span><a href={href} className="inline-flex h-9 items-center justify-center gap-1.5 rounded-full bg-[#10152B] px-3.5 text-[10px] font-bold text-white transition hover:bg-[#FF5C5C]">{voting ? "Voter" : "Découvrir"}<ArrowRight className="size-3.5" /></a></div>
        </div>
      </div>
    </article>
  );
}

export function EventDiscoveryHome() {
  const [mode, setMode] = useState<"events" | "votes">("events");
  const [category, setCategory] = useState("Tous");
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<"relevance" | "popular" | "price">("relevance");
  const [notice, setNotice] = useState("");
  const listing = mode === "events" ? events : campaigns;
  const categories = mode === "events" ? eventCategories : voteCategories;
  const filtered = useMemo(() => {
    const matching = listing.filter(item => (category === "Tous" || item.category === category) && `${item.title} ${item.venue} ${item.host} ${item.category}`.toLowerCase().includes(query.trim().toLowerCase()));
    if (sortBy === "popular") return matching.sort((a, b) => Number.parseInt(b.views.replace(/\D/g, ""), 10) - Number.parseInt(a.views.replace(/\D/g, ""), 10));
    if (sortBy === "price") return matching.sort((a, b) => Number.parseInt(a.price.replace(/\D/g, ""), 10) - Number.parseInt(b.price.replace(/\D/g, ""), 10));
    return matching;
  }, [category, listing, query, sortBy]);

  return (
    <main className="min-h-screen bg-[#F6F4EF]">
      <section className="bg-white px-5 md:px-10"><div className="mx-auto flex max-w-[1320px] flex-col gap-5 pb-5 pt-8 md:flex-row md:items-end md:justify-between md:pb-6 md:pt-10"><div><p className="section-kicker">Le Cameroun sort ici</p><h1 className="mt-2 font-heading text-[clamp(2rem,4vw,3.25rem)] font-bold leading-none tracking-[-.065em] text-[#10152B]">Trouve ta prochaine <span className="text-[#FF5C5C]">sortie.</span></h1></div><p className="max-w-[360px] text-[12px] leading-5 text-[#697386]">Concerts, festivals, soirées et talents à soutenir. Tout ce qui fait vibrer le Cameroun, au même endroit.</p></div></section>
      <div className="bg-[#10152B] px-5 py-3 text-white md:px-10"><div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-3"><p className="text-[11px] font-medium text-white/85"><span className="mr-2 inline-block size-1.5 rounded-full bg-[#C7F36B] align-middle" />Tu couvres des événements ? Fais découvrir ton travail à toute la communauté.</p><a href="#organisateurs" className="rounded-full bg-[#C7F36B] px-4 py-1.5 text-[10px] font-extrabold text-[#10152B] transition hover:bg-white">Rejoindre Mboa Pulse <ArrowRight className="ml-1 inline size-3" /></a></div></div>
      <section className="border-b border-[#e8e5df] bg-white px-5 py-5 md:px-10"><div className="mx-auto flex max-w-[1320px] flex-col gap-4 md:flex-row md:items-center md:justify-between"><label className="relative block w-full md:max-w-[510px]"><span className="sr-only">Rechercher un événement ou un vote</span><Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#697386]" /><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Rechercher un événement ou un vote…" className="h-12 w-full rounded-xl border border-[#e4e2dc] bg-[#fbfaf8] pl-11 pr-4 text-[13px] text-[#10152B] outline-none transition placeholder:text-[#9298a3] focus:border-[#FF5C5C] focus:ring-2 focus:ring-[#FF5C5C]/10" /></label><div role="group" aria-label="Type de contenu" className="flex rounded-xl bg-[#f4f3f0] p-1"><button type="button" aria-pressed={mode === "events"} onClick={() => { setMode("events"); setCategory("Tous"); }} className={`inline-flex h-10 items-center gap-2 rounded-lg px-5 text-[12px] font-bold transition ${mode === "events" ? "bg-white text-[#10152B] shadow-sm" : "text-[#697386] hover:text-[#10152B]"}`}><CalendarDays className="size-4" />Événements <span className={`rounded-full px-2 py-0.5 text-[9px] ${mode === "events" ? "bg-[#10152B] text-white" : "bg-[#e5e2db] text-[#697386]"}`}>06</span></button><button type="button" aria-pressed={mode === "votes"} onClick={() => { setMode("votes"); setCategory("Tous"); }} className={`inline-flex h-10 items-center gap-2 rounded-lg px-5 text-[12px] font-bold transition ${mode === "votes" ? "bg-white text-[#10152B] shadow-sm" : "text-[#697386] hover:text-[#10152B]"}`}><Trophy className="size-4" />Votes <span className={`rounded-full px-2 py-0.5 text-[9px] ${mode === "votes" ? "bg-[#FF5C5C] text-white" : "bg-[#e5e2db] text-[#697386]"}`}>03</span></button></div></div></section>
      <section id="event-list" className="mx-auto max-w-[1320px] px-5 pb-16 pt-6 md:px-10 md:pb-20 md:pt-8"><div className="mb-5 flex flex-wrap items-center justify-between gap-3"><div className="flex flex-wrap gap-2" aria-label="Filtrer par catégorie">{categories.map(item => <button type="button" key={item} aria-pressed={category === item} onClick={() => setCategory(item)} className={`rounded-full border px-3.5 py-2 text-[10px] font-bold transition ${category === item ? "border-[#10152B] bg-[#10152B] text-white" : "border-[#e1ded7] bg-white text-[#536070] hover:border-[#FF5C5C] hover:text-[#10152B]"}`}>{item}</button>)}</div><label className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#697386]"><span>Trier :</span><select aria-label="Trier les résultats" value={sortBy} onChange={event => setSortBy(event.target.value as "relevance" | "popular" | "price")} className="appearance-none bg-transparent pr-0.5 text-[10px] font-bold text-[#10152B] outline-none"><option value="relevance">Pertinence</option><option value="popular">Plus vus</option><option value="price">Prix croissant</option></select><ChevronDown className="size-3.5" /></label></div>
        <div className="mb-4 flex items-center justify-between"><p className="text-[11px] text-[#697386]"><strong className="text-[#10152B]">{filtered.length} {mode === "events" ? "événements" : "campagnes"}</strong> {query || category !== "Tous" ? "correspondants" : "à découvrir"}</p><p className="hidden text-[10px] text-[#8a909c] sm:block">Contenus de démonstration</p></div>
        {filtered.length ? <div className="grid gap-3.5 sm:grid-cols-2 xl:grid-cols-3">{filtered.map(item => <ListingCard key={item.slug} item={item} voting={mode === "votes"} onNotify={setNotice} />)}</div> : <div className="rounded-2xl border border-dashed border-[#d9d5cd] bg-white px-6 py-16 text-center"><Search className="mx-auto size-7 text-[#b1b4bb]" /><h2 className="mt-3 font-heading text-lg font-bold text-[#10152B]">Aucun résultat trouvé</h2><p className="mt-1 text-sm text-[#697386]">Essaie un autre mot-clé ou une autre catégorie.</p><button type="button" onClick={() => { setQuery(""); setCategory("Tous"); }} className="mt-4 text-xs font-bold text-[#FF5C5C] hover:underline">Effacer les filtres</button></div>}
      </section>
      <div aria-live="polite" className="sr-only">{notice}</div>
    </main>
  );
}
