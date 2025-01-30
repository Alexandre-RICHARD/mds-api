# TP

## Technologies imposées 
X - Node / Express
X - SQL Serveur
X - ORM (ex: Sequelize)
- Documentation : obligatoire avec SWAGGER
X - JSON (pas de XML ou de CSV)
X - **Mise en prod : attendre pour le moment**
- Mocha / JEST pour les tests

## Bonnes pratiques imposées 
X - Intégrer obligatoirement un numéro de version dans vos URLs
X - Respect du Linter ESLint avec la configuration donnée (cf ./documentation/linter.md)
- Les paramètres pour filtrer vos résultats de recherches doivent être passer en $_GET (dans l'URL via ```?param1=valeur1&param2=valeur2```")

## Recherches / Organisation / Explications imposées
X - 1 repo GIT => créé maintenant, et vous me l'envoyez sur la discussion teams
X - GIT
X     - Messages clairs et cohérents. 
X     - Commits réguliers ET **pertinents** (chaque fin de fonctionnalité, mise en place d'un fichier, correctif, fix, etc...)
X - Dans votre repo GIT, vous allez devoir créer : 
X     - 1 dossier "documentation" pour la partie "recherches" que je vais vous demander. Je dois y retrouver : 
X         - 💩 Un fichier qui explique JWT
X         - 💩 Qu'est-ce que le REST / comment ça marche
X         - --> 💩 Modèle de Richardson et comment l'implémenter
        - Explication des Websockets / Socket.io
X         - 💩 Un fichier qui détail les bonnes pratiques de SWAGGER avec l'autodocumentation (comment la mettre en place)
X         - Un fichier qui détail les bonnes pratiques de POSTMAN avec les informations sur comment mettre en place des collections, et l'autogénération de Bearer
X         - --> 💩 Un fichier paramétré de ESLINT avec des paramétrages customs que tout le monde va devoir respecter
X        - 💩 Documentation sur le HTTP + HTTPS, avec tous les codes d'erreur et toutes les méthodes pour les API

## Routes de base imposées

- **Utilisateur** - _/users_
    - **POST** - _/users_
    - **GET** - _/users/role/{role}_
    - **GET** - _/users/{id}_
    - **PUT** - _/users/{id}_
    - **DELETE** - _/users/{id}_
- **Produits** - _/products_
    - **POST** - _/products_
    - **GET** - _/products_
    - **GET** - _/products/{id}_
    - **PUT** - _/products/{id}_
    - **DELETE** - _/products/{id}_
- **Commandes** - _/orders_
    - **POST** - _/orders_
    - **GET** - _/orders_
    - **GET** - _/orders/{id}_
    - **PUT** - _/orders/{id}_
    - **DELETE** - _/orders/{id}_
- **Tournées** - _/delivery-tours_
    - **POST** - _/delivery-tours_
    - **GET** - _/delivery-tours_
    - **GET** - _/delivery-tours/{id}_
    - **PUT** - _/delivery-tours/{id}_
    - **DELETE** - _/delivery-tours/{id}_
- **Commentaires** - _/products/{id}/comments_
    - **POST** - _/products/{id}/comments_
    - **GET** - _/products/{id}/comments_
    - **GET** - _/products/{id}/comments/{id}_
    - **PUT** - _/products/{id}/comments/{id}_
    - **DELETE** - _/products/{id}/comments/{id}_
- **Messages** - _/messages_
    - **POST** - _/messages_
    - **GET** - _/messages_
    - **GET** - _/messages/{id}_
    - **PUT** - _/messages/{id}_
    - **DELETE** - _/messages/{id}_
- **Demande d'affection** - _/assignment-requests_
    - **POST** - _/assignment-requests_
    - **GET** - _/assignment-requests_
    - **GET** - _/assignment-requests/{id}_
    - **PUT** - _/assignment-requests/{id}_
    - **DELETE** - _/assignment-requests/{id}_



## Barème d'évaluation

- Swagger / Documentation => 3pts
X - Connexion BDD => 1 pt
X - ORM => 3 pts
- REST => 4 pts
X - JSON / XML : header request => 1pt
X - JWT => 3 pts
X - Mise en production (avec P2M + SQLServer) => 4 pts
- Tests unitaires + tests de charge (K6 / Artillery) => 3 pts
X - Postman + collections + token => 4 pts
X - Architecture & Qualité de code => 4 pts
- page dédiée chat avec Socket.io => en lien avec le DAB => 10 pts

## Repo GIT

- Yann : https://github.com/Chakyu23/API_COURS
- Tom : https://github.com/tombury59/MDS_API_BOUTIQUE
- Aubin : https://github.com/AubinManceau/express-api-grocery
- Alexandre : https://github.com/Alexandre-RICHARD/mds-api
- Enzo : https://github.com/Minozen72/MDS-API-ZOO
- Léa : https://github.com/leagrnr/gpa-api
- Léane : https://github.com/leanecharpentier/running-shop-api
- Louis : https://github.com/KobalaGlou/ProjetAPIDofus
- Kévin : https://github.com/Frize01/mds-api-tp
- Raphaël : https://github.com/RaphLho/MDS-TP-API

## Evaluation

Le 31 Janvier, vous commencerez la journée par un QCM tous ensemble. Vous passerez ensuite 1 par 1 en présentation pendant 10 minutes devant vos deux meilleurs profs : Clément & Kévin. Vous aurez 10 minutes pour nous présenter un maximum de choses pour que nous puissions vous noter selon le barème mentionné ci-dessus.

Vous aurez entre 15 et 20 minutes pour réaliser le QCM - la durée précise vous sera communiquée au début !
