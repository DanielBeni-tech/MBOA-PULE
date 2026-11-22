# MBOA PULSE

**Le Cameroun sort ici.** Plateforme camerounaise de découverte d’événements, billetterie et votes numériques.

## Phase 1 — Identité, fondations et accueil

La page d’accueil responsive pose le langage visuel Mboa Pulse : palette nuit/corail/vert citron, typographies Space Grotesk et Manrope, logo ticket-pulse original, navigation, recherche, cartes événement, catégories, campagne de vote mise en avant et appel destiné aux organisateurs. Les événements présentés sont des contenus de démonstration, pas des événements ni des inventaires de billets connectés à une source réelle.

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
- `components/home-sections.tsx` — sections d’accueil et exemples d’événements.
- `public/mboa-nightlife-hero.png` — photographie originale de la scène live.

## Périmètre actuel et suite

Cette livraison est la fondation frontend de la Phase 1. Recherche et liens servent de structure visuelle/navigationnelle ; les routes d’événements, comptes, commandes, paiement, QR, votes persistés, espace organisateur et administration ne sont pas encore implémentés. Aucune transaction réelle ni confirmation de billet n’est simulée.

Prochaine étape : Phase 2, découverte des événements et pages détaillées, avant de connecter authentification et données réelles.
