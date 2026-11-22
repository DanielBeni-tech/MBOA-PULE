import { EventDiscoveryHome } from "@/components/event-discovery-home";
import { SiteHeader } from "@/components/site-header";
import { OrganizerSection, SiteFooter } from "@/components/home-sections";

export default function Home() {
  return <><SiteHeader /><EventDiscoveryHome /><div id="organisateurs"><OrganizerSection /></div><SiteFooter /></>;
}
