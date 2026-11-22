# MBOA PULSE

**Le Cameroun sort ici.** Plateforme camerounaise de découverte d’événements, billetterie et votes numériques.

## Phase 1 — Identité, fondations et accueil

La page d’accueil responsive reprend le parcours de découverte observé sur le site de référence (navigation, bandeau d’information, recherche, choix événements/votes, filtres par catégorie et grille de cartes avec date, lieu, prix et organisateur), avec une identité visuelle originale Mboa Pulse : palette nuit/corail/vert citron, typographies Space Grotesk et Manrope, logo ticket-pulse original. La recherche, les filtres, la bascule événements/votes, les favoris et le partage sont interactifs sur les contenus de démonstration ; ils ne sont pas reliés à une source réelle.

### Démarrer en local

```bash
pnpm install
pnpm dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

### Vérification Phase 1

```bash
pnpm lint
pnpm exec tsc --noEmit
```

### Fichiers principaux

- `app/page.tsx` — composition de la page d’accueil.
- `app/layout.tsx` — polices, métadonnées SEO et couleur de thème.
- `app/globals.css` — tokens visuels et styles globaux.
- `components/brand-mark.tsx` — signature Mboa Pulse réutilisable.
- `components/site-header.tsx` — navigation responsive.
- `components/event-discovery-home.tsx` — recherche, filtres et cartes de démonstration inspirés de la structure fonctionnelle de la référence.
- `components/home-sections.tsx` — appel organisateurs et pied de page.
- `public/mboa-nightlife-hero.png` — photographie originale de la scène live.

## Périmètre actuel et suite

Cette livraison est la fondation frontend de la Phase 1. Recherche et liens servent de structure visuelle/navigationnelle ; les routes d’événements, comptes, commandes, paiement, QR, votes persistés, espace organisateur et administration ne sont pas encore implémentés. Aucune transaction réelle ni confirmation de billet n’est simulée.

Prochaine étape : Phase 2, découverte des événements et pages détaillées, avant de connecter authentification et données réelles.
