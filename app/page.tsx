import { CategorySection, FeaturedEvents, HeroSection, OrganizerSection, SearchStrip, SiteFooter, VotingSection } from "@/components/home-sections";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return <><SiteHeader /><main><HeroSection /><SearchStrip /><FeaturedEvents /><CategorySection /><VotingSection /><OrganizerSection /></main><SiteFooter /></>;
}
