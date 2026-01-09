---
title: SaaS de Réservation & Paiement
publishDate: 2026-01-09 00:00:00
img: /assets/booking.jpg
img_alt: Interface de réservation de rendez-vous avec calendrier interactif
description: |
  Application Fullstack complète permettant la prise de rendez-vous en ligne et le paiement sécurisé via Stripe. Gestion des disponibilités côté pro et interface client intuitive.
tags:
- React
- Node.js
- Stripe
- Docker
- Fullstack
- DevOps
---

## Lien vers le projet

🚀 **[Voir l'application en ligne](https://rdv-node.vercel.app/)**
*(Note : Le backend étant hébergé sur une instance gratuite, le premier chargement peut prendre quelques secondes).*

---

## Présentation

Ce projet est né d'une volonté de maîtriser l'intégralité du cycle de vie d'un produit SaaS (Software as a Service), de la conception de la base de données jusqu'au déploiement en production, en passant par la gestion des paiements bancaires.

J'ai commencé par concevoir une architecture **Fullstack** robuste. Pour le Frontend, j'ai choisi **React** avec Vite pour sa rapidité, couplé à Tailwind CSS pour une interface moderne et responsive. Pour le Backend, j'ai développé une API REST avec **Node.js** et Express, structurée selon le modèle MVC (Modèle-Vue-Contrôleur).

Le cœur du défi technique résidait dans l'intégration du système de paiement. J'ai implémenté l'API **Stripe** (Payment Intents) pour sécuriser les transactions. Une partie complexe du développement a consisté à gérer les contraintes réseaux : j'ai dû configurer un **agent proxy** spécifique (`https-proxy-agent`) pour permettre à l'environnement de développement local de communiquer avec les serveurs de Stripe à travers un pare-feu d'entreprise strict.

En parallèle, j'ai mis en place un système d'authentification sécurisé basé sur des **JWT (JSON Web Tokens)** stockés dans des cookies *HttpOnly*. Le déploiement a nécessité une configuration fine des politiques **CORS** et des attributs de cookies (`SameSite: None`, `Secure`) pour permettre la communication entre le Frontend (hébergé sur Vercel) et le Backend (hébergé sur Render).

Ce projet m'a permis de consolider mes compétences en :
* **Architecture logicielle :** Séparation des préoccupations Frontend/Backend.
* **DevOps :** Gestion des variables d'environnement et déploiement continu (CI/CD).
* **Sécurité :** Protection des données utilisateurs et gestion des flux financiers.

## Le projet en quelques images

### Le calendrier de réservation (Côté Client)
<img src="/assets/booking.jpg" alt="Vue du calendrier de réservation">

### Le Dashboard Professionnel & Suivi du CA
<img src="/assets/proDashboard.jpg" alt="Dashboard administrateur">

### Le module de Paiement Sécurisé (Stripe)
<img src="/assets/paiementForm.jpg" alt="Formulaire de paiement">