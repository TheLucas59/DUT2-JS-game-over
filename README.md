# Projet JS 2021

### Membres

- Loïc DEMAY
- Lucas PLÉ
- Eliott COLIN

### Build

Ajoutez votre clé d'API a `tokenconfig-template.json` puis renommer le fichier a `tokenconfig.json`. Si aucune clé valide n'est donnée (e.g. pas de la taille standard) aucune authentification ne sera faite.

Build :
`npm run build`

Lancer serve :
`npx serve -s -l <port binding>`

### Notes

Cette branche implémente l'affichage des scores ProtonDB sur les jeux Steam. Malheureusement, RAWG ne renvoyant pas directement le Steam App ID du jeu en question, il faut le parser, et même quand il est parsé, peut être non valide (ex. sur SUPERHOT: MIND CONTROL DELETE). Cette feature étant "buguée" mais fonctionnelle sur la plupart des jeux, je l'ai enlevée de la branche master pour quand même garder le code sur cette branche.

L'API ProtonDB ne permet pas les requêtes CORS, il est donc nécéssaire d'utiliser un CORS Proxy. Ici j'ai utilisé CORS-Anywhere, il est donc nécéssaire [d'aller sur le site pour demander un accès](https://cors-anywhere.herokuapp.com/corsdemo) en cliquant sur le bouton `Request temporary access`. Il aurait néanmoins été possible d'ajouter cors-anywhere a notre projet pour avoir un proxy local.