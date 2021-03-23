# Projet JS 2021 : "Game Over"

### Membres

- Loïc DEMAY
- Lucas PLÉ
- Eliott COLIN

### État du Projet

Une deuxième branche, `protondb-feature-abandonned`, contient une feature abandonnée à cause de limitations de l'API RAWG. Les instructions pour tester cette branche sont dans le README de cette dernière. Cette feature permet l'affichage de la note ProtonDB, un site répertoriant la compatibilité des jeux Steam avec Proton, le fork de Wine de Valve permettant aux utilisateurs Linux de jouer à des jeux sans port natif pour Linux.

### Build

Ajoutez votre clé d'API a `tokenconfig-template.json` puis renommer le fichier a `tokenconfig.json`. Si aucune clé valide n'est donnée (e.g. pas de la taille standard) aucune authentification ne sera faite.

Build :
`npm run build`

Lancer serve :
`npx serve -s -l <port binding>`

### Captures d'écran

<div style="vertical-align:middle">
    <p>Page Principale</p>
    <img src="screenshots/main.png" alt="Page Principale" width="500"/>
    <p>Recherche dans la page principale</p>
    <img src="screenshots/main-recherche.png" alt="Recherche dans la page principale" width="500"/>
    <p>Détail : Cyberpunk 2077</p>
    <img src="screenshots/detail-cp2077.png" alt="Détail : Cyberpunk 2077" width="500"/>
    <p>Détail : Persona 5 Royal</p>
    <img src="screenshots/detail-p5r.png" alt="Détail : Persona 5 Royal" width="500"/>
    <p>Détail avec un jeu invalide</p>
    <img src="screenshots/detail-inexistant.png" alt="Détail avec un jeu invalide" width="500"/>
    <p>Page des favoris</p>
    <img src="screenshots/fav.png" alt="Page des favoris" width="500"/>
    <p>Page des favoris, sans favoris</p>
    <img src="screenshots/fav-empty.png" alt="Page des favoris, sans favoris" width="500"/>
    <p>Page de l'équipe</p>
    <img src="screenshots/equipe.png" alt="Page de l'équipe" width="500"/>
</div>