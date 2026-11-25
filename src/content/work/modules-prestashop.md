---
title: Modules PrestaShop & boutique de démo
publishDate: 2026-11-25 00:00:00
img: /assets/prestashop-demo-boutique.png
img_alt: Boutique de démonstration avec la barre de livraison gratuite remplie
description: |
  Trois modules PrestaShop 8 et 9 codés de zéro : barre de livraison gratuite, export des commandes en CSV et flux produits XML pour les marketplaces. À tester dans une boutique de démo.
tags:
- PrestaShop
- PHP
- JavaScript
- E-commerce
- Freelance
---

## Liens

🛒 **[Tester la boutique de démo](/freelance/demo/)**
*Ajoutez des produits au panier, puis ouvrez l'onglet Back-office.*

💼 **[Mon offre freelance PrestaShop](/freelance/)**

---

## Présentation

En plus de mon poste, je travaille en freelance sur PrestaShop : correction de bugs, modules sur mesure, flux vers les marketplaces.

Pour montrer ce que je sais faire, j'ai codé trois modules complets, compatibles PrestaShop 8 et 9. Ils s'installent depuis le back-office comme n'importe quel module.

### 1. Barre livraison gratuite

Elle affiche au client combien il lui reste à dépenser pour avoir la livraison offerte. Exemple : « Plus que 12,50 € pour la livraison offerte ».

* Calcul côté serveur sur le total TTC des produits
* Mise à jour en direct quand le panier change (événement `updateCart` du thème + contrôleur AJAX)
* Seuil et messages réglables dans le back-office, traduits en français

### 2. Export des commandes en CSV

Un bouton dans le back-office pour sortir les commandes d'une période, filtrées par statut.

* Fichier lisible directement dans Excel en français (BOM UTF-8, séparateur `;`, virgule décimale)
* Requêtes avec `DbQuery`, compatible multiboutique

### 3. Flux produits XML

Une URL qui liste les produits actifs au format XML, pour les marketplaces et comparateurs de prix.

* Généré avec `XMLWriter` : référence, EAN, prix TTC, stock, image, catégorie
* Option « seulement en stock »
* URL protégée par une clé secrète (comparaison `hash_equals`), régénérable

## En images

### La boutique : la barre de livraison gratuite
<img src="/assets/prestashop-demo-boutique.png" alt="Boutique de démonstration, barre de livraison gratuite remplie">

### Le back-office : le flux produits XML
<img src="/assets/prestashop-demo-backoffice.png" alt="Back-office de démonstration, réglages du flux produits XML">

*La boutique de démo est une reproduction fidèle du comportement des modules, avec des données fictives.*
