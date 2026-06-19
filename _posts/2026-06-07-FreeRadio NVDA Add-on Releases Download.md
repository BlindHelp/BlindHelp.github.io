---
title: Télécharger la dernière version disponible de l'extension FreeRadio pour NVDA en consultant ce post
permalink: "/freeradio-nvda-add-on-releases-download/"
layout: post
author: BlindHelp
---

<footer>Publié le Dimanche 7 Juin 2026 - Dernière mise à jour le Vendredi 19 Juin 2026</footer>

Coucou mes amis du blog de BlindHelp!    
Une nouvelle version de l'extension FreeRadio vient d'être publié.    

Avertissement: 💀    
Le blog de BlindHelp n'est pas responsable des dommages causés par une mauvaise utilisation de l'extension FreeRadio téléchargé ni des informations ce trouvant sur la documentation dédié et l'utilisation de l'extension FreeRadio téléchargé est à vos risques et périls. ☠

Les langues disponibles pour cette extension jusqu'à la date d'aujourd'hui sont l'anglais (en), l'arabe (ar), le tchèque (cs), l'espagnol (es), le français (fr), l'italien (it), le khmer (Cambodge) (km), le polonais (pl), le portugais (pt), le russe (ru), le turc (tr) et l'ukrainien (uk).

Vous trouverez cette extension à partir de l'Add-on Store.

L'Add-on Store est accessible depuis le sous-menu Outils du menu NVDA. Pour accéder à l'Add-on Store depuis n'importe où, attribuez un geste personnalisé à l'aide de la boîte de dialogue Gestes de commandes.

Pour rechercher cette  extension, utilisez la zone de texte "Rechercher". Vous pouvez y accéder en appuyant sur maj+tab dans la liste des extensions. Tapez un ou deux mots-clés pour le type d'extension que vous recherchez, dans notre cas c'est freeradio puis tabulation pour aller à la liste des extensions. L'extensions sera répertoriée si le texte de recherche peut être trouvé dans l'ID, le nom, l'éditeur l'auteur ou la description de l'extension.

Sélectionnez l'extension freeradio dans l'onglet "Extensions disponibles" ensuite ces actions sont accessibles via un menu qu'on ouvre en appuyant sur la touche applications, entrée, un clic droit ou un double-clic sur l'extension freeradio. Ce menu est également accessible par un bouton Actions dans les détails de l'extension sélectionnée.

Voici les informations en français trouvés dans l'Add-on Store à propos de cette extension:

# Description :

FreeRadio est une extension de radio Internet pour NVDA qui offre un accès continu à des milliers de stations via l'annuaire ouvert de Radio Browser. Il dispose d'un navigateur de stations entièrement accessible avec recherche, filtre de pays, gestion des favoris et profils audio par station. La lecture est gérée par une chaîne backend prioritaire (BASS, VLC, PotPlayer, Windows Media Player) avec prise en charge du contrôle du volume, des effets audio, de la sélection du périphérique de sortie et de la mise en miroir audio simultanée sur un deuxième périphérique. Les fonctionnalités supplémentaires incluent l'enregistrement instantané et planifié, des minuteries de mise en veille et d'alarme, des annonces automatiques de métadonnées ICY, une reconnaissance musicale basée sur Shazam et un journal des morceaux aimés. Tous les contrôles et raccourcis sont conçus pour l'accessibilité de NVDA.

# Autres détails :

* Éditeur : Çağrı Doğan <cagrid@hotmail.com>
* Auteur : Çağrı Doğan <cagrid@hotmail.com>
* ID : freeradio
* Version installée : 2026.20.1
* Version minimale de NVDA : 2024.1
* Dernière version NVDA testée : 2026.1.1
* Canal : Stables
* Page web : <https://github.com/Surveyor123/freeradio>
* Licence : GPL v2
* URL de la Licence : <https://www.gnu.org/licenses/gpl-2.0.html>
* URL de téléchargement : <https://github.com/Surveyor123/freeradio/releases/download/v2026.20.1/freeradio-2026.20.1.nvda-addon>
* URL du code source : <https://github.com/Surveyor123/freeradio>
* URL des avis : <https://github.com/nvaccess/addon-datastore/discussions/8952>
* Date d'installation : 19/06/2026
* Date de publication : 19/06/2026
* Résultats de l'analyse par VirusTotal : 0 analyseur de logiciels malveillants a détecté cette extension comme potentiellement malveillante (sur 63).
* URL de l'analyse par VirusTotal : <https://www.virustotal.com/gui/file/e911df9f364f724a30529cb48aa9eb7d33502edf43f1da7fda6477fde3b3bea8>

Et pour conclure, vous trouverez après ma signature la documentation de l'extension FreeRadio en français de la nouvelle version 2026.20.1 publiée le Vendredi 19 Juin 2026 traduit par mes soins.

Voilà c'est fini, 🔐    
Sur ce, je vous souhaite une bonne utilisation de cette nouvelle extension FreeRadio pour NVDA :)    
À la prochaine sur un autre post!    
Bien amicalement,    
Rémy (BlindHelp). 🇫🇷 👨‍🦯

# FreeRadio — NVDA Add-on

FreeRadio est une extension de radio Internet pour le lecteur d'écran NVDA. Son objectif principal est de permettre aux utilisateurs d'accéder facilement à des milliers de stations de radio Internet. L'ensemble de l'interface et toutes les fonctionnalités ont été conçues en gardant à l'esprit une accessibilité totale pour NVDA.

## L'Annuaire de Radio Browser

FreeRadio utilise la base de données ouverte de [Radio Browser](https://www.radio-browser.info/) pour son catalogue de stations. Radio Browser est un annuaire gratuit et géré par la communauté hébergeant plus de 50 000 stations de radio Internet du monde entier. Aucune inscription ni compte n'est requis et son API est ouverte à tous. Chaque station comprend des informations sur l'adresse, le pays, le genre, la langue et le bitrate ; les stations sont classées par votes des utilisateurs. FreeRadio se connecte à cette API via des serveurs miroir situés en Allemagne, aux Pays-Bas et en Autriche ; si un serveur est inaccessible, il passe automatiquement au suivant.

## Ajout d'une station à Radio Browser

Si une station que vous recherchez ne figure pas dans l'annuaire de Radio Browser, vous pouvez la soumettre vous-même à [https://www.radio-browser.info/add](https://www.radio-browser.info/add). Aucun compte ou inscription n'est nécessaire.

Remplissez le formulaire sur cette page :

- **Stream URL** *(requis)* — l'URL directe du flux audio, se terminant par `.mp3`, `.aac`, `.ogg` ou similaire. Il ne s'agit pas de l'adresse du site Web de la station ; c'est l'adresse du flux brut que vous colleriez dans un lecteur multimédia. La plupart des stations publient l'URL de leur flux sur leur site Web ou dans leur section "Écouter en direct".
- **Station name** *(requis)* — le nom de la station tel qu'il doit apparaître dans l'annuaire.
- **Homepage** — l'adresse du site Internet de la station.
- **Country and language** — sélectionnez le pays et la langue de diffusion dans les listes déroulantes.
- **Tags** — des mots-clés séparés par des virgules, pour  le genre ou topic par exemple `news`, `jazz`, `classical`. Ceux-ci sont utilisés pour la recherche et le filtrage.
- **Logo URL** — un lien direct vers l'image du logo de la station, si disponible.

Après soumission, la station est revue et ajoutée à l'annuaire public. Une fois accepté, il apparaîtra dans la recherche de FreeRadio et les listes de pays automatiquement, puisque l'annuaire est actualisé à partir de l'API en direct.

## Exigences

- NVDA 2024.1 ou version ultérieure
- Windows 10 ou version ultérieure
- Connexion Internet

## Installation

Téléchargez le fichier `.nvda-addon`, appuyez dessus sur Entrée et redémarrez NVDA lorsque vous y êtes invité.

## Raccourcis clavier

Tous les raccourcis peuvent être réassignés depuis le Menu NVDA → Préférences → Gestes de commandes → FreeRadio. Ces raccourcis fonctionnent de n'importe où, quelle que soit la fenêtre ayant le focus.

| Raccourci | Fonction | Description |
|---|---|---|
| `Ctrl+Win+R` | Ouvrir le navigateur de stations | Ouvre la fenêtre du navigateur si elle est fermée, ou la met au premier plan si elle est déjà ouverte. |
| `Ctrl+Win+P` | Mettre en pause / reprendre | Met en pause la station actuelle si elle est en cours de lecture ; reprend en cas de pause. Si rien ne joue, démarre la dernière station ou ouvre la liste des favoris en fonction de votre réglage. En appuyant deux fois de suite, vous accédez directement à un onglet de votre choix. Appuyer trois fois peut déclencher une action distincte en fonction de votre réglage. |
| `Ctrl+Win+S` | Arrêter | Arrête complètement la station actuelle et réinitialise le lecteur. |
| `Ctrl+Win+→` | Suivant favori | Passe à la station suivante dans la liste des favoris. Revient  au début et à la fin de la liste. |
| `Ctrl+Win+←` | Favoris précédent | Passe à la station précédente dans la liste des favoris. Saute à la fin quand on est au début. |
| `Ctrl+Win+↑` | Augmenter le volume | Augmente le volume de 5 ; maximum 100. |
| `Ctrl+Win+↓` | Diminuer le volume | Diminue le volume de 5 ; minimum 0. |
| `Ctrl+Win+V` | Ajouter aux favoris | Ajoute la station en cours de lecture à la liste des favoris. Annonce si la station est déjà dans la liste. |
| `Ctrl+Win+I` | Informations sur la Station | Annonce le nom de la station en cours de lecture. Appuyez deux fois pour afficher des détails tels que le pays, le genre et le bitrate dans un dialogue. Appuyez trois fois pour copier les informations de la piste actuelle (métadonnées ICY) dans le presse-papiers si disponible ; si aucune métadonnée n'est présente, démarre la reconnaissance musicale Shazam à la place. Appuyez quatre fois pour forcer la reconnaissance musicale en cas de métadonnées ICY erronées. |
| `Ctrl+Win+M` | Miroir audio | Mettre en miroir le flux actuel vers un périphérique de sortie audio supplémentaire simultanément. Appuyez à nouveau pour arrêter la mise en miroir. |
| `Ctrl+Win+E` | Enregistrement instantané | Appuyez une fois pour commencer à enregistrer la station actuelle ; appuyez à nouveau pour arrêter. Appuyez **deux fois** pour démarrer un **enregistrement d'un morceau**: le fichier porte le nom de la piste actuelle et l'enregistrement s'arrête automatiquement lorsque la piste change. Appuyez à nouveau deux fois pendant qu'un enregistrement d'un morceau est actif pour l'arrêter plus tôt. La lecture continue sans interruption dans tous les modes d'enregistrement. Uniquement disponible pour les stations qui diffusent des métadonnées ICY. |
| `Ctrl+Win+W` | Ouvrir le dossier des enregistrements | Ouvre le dossier contenant les fichiers enregistrés dans l'Explorateur de fichiers. |
| *(non assigné)* | Activer/désactiver les notifications muettes | Active/désactive le paramètre Muet des notifications à la volée. Assigner une combinaison de touches via NVDA Menu → Préférences → Gestes de commandes → FreeRadio. |
| *(non assigné)* | Lire une station favorite directement | Chaque station de la liste des favoris apparaît comme une entrée distincte dans le Menu NVDA → Préférences → Gestes de commandes → **FreeRadio Stations**. Assignez un raccourci clavier à n'importe quelle station pour la démarrer instantanément depuis n'importe où, sans ouvrir le navigateur. |

Les raccourcis suivant/précédent parcourent uniquement la liste des favoris ; ils ne fonctionnent pas avec la liste de toutes les stations. Quand une liste ayant le focus dans la fenêtre du navigateur, les touches fléchées gauche et droite ont le même objectif — voir la section Raccourcis dans la boîte de dialogue.

## Navigateur de Stations

FreeRadio ajoute également un sous-menu **FreeRadio** au menu Outils NVDA. De là, vous pouvez ouvrir directement le Navigateur de Stations et les Paramètres de FreeRadio.

La fenêtre ouverte avec `Ctrl+Win+R` contient cinq onglets : Toutes les stations, Favoris, Enregistrement, Minuterie et Morceaux aimés. Vous pouvez naviguer entre les onglets avec `Ctrl+Tab`.

Lorsque l'onglet Toutes les stations s'ouvre, le top 1 000 des stations les plus votées sont automatiquement chargées à partir de Radio Browser. La sélection d'un pays dans la liste déroulante met à jour la liste pour montrer les stations de ce pays. Taper dans le champ de recherche effectue instantanément une recherche complète dans toute la base de données de Radio Browser simultanément par nom, pays et genre.

La liste déroulante **Périphérique de sortie** en bas de la fenêtre du navigateur (en dehors des onglets) répertorie tous les périphériques de sortie audio reconnus par BASS. La sélection d'un périphérique redirige immédiatement la sortie audio vers celui-ci et enregistre le choix de manière permanente ; le même périphérique est utilisé automatiquement lors de la session suivante. Si le périphérique sélectionné n'est pas connecté, l'extension revient automatiquement au valeur système par défaut. Ce contrôle n'est fonctionnel que lorsque le BASS backend est actif.

Les contrôles de **Volume** (0–200) et **Effets** dans la même zone peut être ajusté à tout moment lorsque la fenêtre est ouverte. Depuis la liste des Effets, Chœur, Compression, Distorsion, Echo, Flanger, Gargle, Réverbération, EQ: Bass Boost, EQ: Treble Boost et EQ: Vocal Boost peut être activé simultanément ; les modifications sont appliquées instantanément au flux actif. Ces contrôles ne sont pleinement fonctionnelles que lorsque le BASS backend est actif.

Lorsqu'un ou plusieurs effets EQ sont activés, un **contrôle de gain** apparaît pour chaque bande active. Le gain peut être réglé entre −15 dB et +15 dB; les valeurs par défaut sont Bass +9 dB, Treble +9 dB, et Vocal +6 dB. Les contrôles de gain sont affichées uniquement pour les bandes EQ  actuellement cochées et sont automatiquement masquées lorsqu'un effet EQ  n'est pas coché. Les valeurs de gain sont enregistrées globalement et restaurées lors de la prochaine session.

Le bouton **Lecture/Pause** est également situé en bas de la fenêtre. Si aucune station n'est en cours de lecture, la station sélectionnée démarre ; si une station est déjà en cours de lecture, la lecture est interrompue.

Lorsqu'une station est sélectionnée dans la liste, le bouton **Détails de la Station** affiche des informations telles que le pays, la langue, le genre, le format, le bitrate, le site web et le flux URL dans une boîte de dialogue séparée. Chaque champ apparaît dans sa propre zone de texte en lecture seule ; vous pouvez vous déplacer entre les champs avec Tab et copier toutes les informations dans le presse-papiers en même temps avec le bouton **Copier tout dans le presse-papier**. Ce bouton est disponible dans les onglets Toutes les stations et Favoris.

### Raccourcis dans la boîte de dialogue

Les touches suivantes fonctionnent uniquement lorsque la fenêtre Navigateur de Stations est active.

### Touches F

| Raccourci | Fonction | Description |
|---|---|---|
| `F1` | Guide d'aide | Ouvre le fichier d'aide de l'extension dans le navigateur par défaut. Le guide de la langue de NVDA actif est recherché en premier ; s'il n'est pas trouvé, le guide par défaut est ouvert. |
| `F2` | qu'est-ce qui se joue | Annonce la station en cours de lecture et le nom de la piste. Appuyez deux fois pour afficher des détails tels que le pays, le genre et le bitrate dans un dialogue. Appuyez trois fois pour copier les informations de la piste actuelle (métadonnées ICY) dans le presse-papiers si disponible ; si aucune métadonnée n'est présente, démarre la reconnaissance musicale Shazam à la place. Appuyez quatre fois pour forcer la reconnaissance musicale en cas de métadonnées ICY erronées. |
| `F3` | Station précédente | Passe à la station précédente dans l'onglet Toutes les stations ou Favoris et commence à jouer immédiatement. Saute à la fin quand on est au début de la liste. |
| `F4` | Station suivante | Passe à la station suivante dans l'onglet Toutes les stations ou Favoris et commence à jouer immédiatement. Revient  au début et à la fin de la liste. |
| `F5` | Diminuer le volume | Diminue le volume de 5 (minimum 0). |
| `F6` | Augmenter le volume | Augmente le volume de 5 (maximum 200). |
| `F7` | Mettre en pause / reprendre | Met en pause la station actuelle si elle est en cours de lecture ; reprend en cas de pause et le média est chargé. |
| `F8` | Arrêter | Arrête complètement la station actuelle et réinitialise le lecteur. |
| `F9` | Renommer | Ouvre la boîte de dialogue  pour renommer la station ayant le focus dans l'onglet favoris. |

### Liste et Raccourcis de Navigation

| Raccourci | Fonction | Description |
|---|---|---|
| `→` | Station suivante | Lorsque la liste Toutes les stations ou Favoris est focalisé, passe à la station suivante et la joue immédiatement. Revient  au début et à la fin de la liste. |
| `←` | Station précédente | Lorsque la liste Toutes les stations ou Favoris est focalisé, passe à la station précédente et la joue immédiatement. Saute à la fin quand on est au début. |
| `Entrée` | Lecture | Lorsque la liste Toutes les stations ou Favoris est focalisé, commence à jouer immédiatement la station sélectionnée. Passe à la station sélectionnée même si une autre station est déjà en cours de lecture. |
| `Espace` | Lecture / Pause | Met en pause si une station est en cours de lecture ; sinon, commence la lecture de la station sélectionnée. |
| `Ctrl+Tab` | Onglet suivant | Passe à l'onglet suivant (Toutes les stations → Favoris → Enregistrement → Minuterie → Morceaux aimés). |
| `Ctrl+Shift+Tab` | Onglet précédent | Passe à l'onglet précédent. |
| `Echap` | Cacher | Cache la fenêtre ; l'extension continue de jouer en arrière-plan. |

### Raccourcis de Volume

| Raccourci | Fonction | Description |
|---|---|---|
| `Ctrl+↑` | Augmenter le volume | Augmente le volume de 5. Fonctionne uniquement lorsque la fenêtre du navigateur est ouverte. |
| `Ctrl+↓` | Diminuer le volume | Diminue le volume de 5. Fonctionne uniquement lorsque la fenêtre du navigateur est ouverte. |

### Raccourcis de la Touche Alt

| Raccourci | Fonction | Description |
|---|---|---|
| `Alt+R` | Aller au champ de recherche | Déplace le focus sur la zone de texte de recherche. Recherche sur Radio Browser avec le texte dans le champ de recherche ; le nom, le pays et le genre sont recherchés simultanément. |
| `Alt+V` | Ajouter/supprimer un favori | Ajoute la station sélectionnée aux favoris ; le supprime s'il est déjà dans la liste. |
| `Alt+1` | Toutes les stations | Passe à l'onglet Toutes les stations. |
| `Alt+2` | Favoris | Passe à l'onglet Favoris. |
| `Alt+3` | Enregistrement | Passe à l'onglet Enregistrement. |
| `Alt+4` | Minuterie | Passe à l'onglet Minuterie. |
| `Alt+5` | Morceaux aimés | Passe à l'onglet Morceaux aimés. |
| `Alt+K` | Fermer | Ferme la fenêtre ; l'extension continue de jouer en arrière-plan. |

## Favoris

La liste des favoris est une collection de stations personnelles stockée en permanence. Pour ajouter une station, sélectionnez-la dans la liste et appuyez sur le bouton Ajouter aux Favoris ou utilisez le raccourci `Alt+V`. Le même raccourci supprime une station déjà dans la liste lorsqu'elle est sélectionnée.

Les favoris peuvent être lus avec `Ctrl+Win+→` et `Ctrl+Win+←`; ces raccourcis fonctionnent même lorsque la fenêtre du navigateur n'est pas ouverte.

Pour supprimer une station de la liste des favoris, sélectionnez-la et appuyez sur le bouton **Supprimer la station** ou sur la touche `Supprimer`. Après la suppression, le focus et la sélection passent automatiquement à la station suivante dans la liste. Si la station supprimée était la dernière, le focus se déplace sur la station précédente. Si la liste devient vide, le focus se déplace vers le bouton Lecture.

### Réorganisation des Favoris

Une station étant sélectionnée dans l'onglet Favoris, appuyez sur la `virgule` pour entrer en mode déplacement — vous entendrez un bip. Accédez à la position cible avec les touches fléchées, puis appuyez à nouveau sur la `virgule`. La station est placée à l'emplacement choisi et la nouvelle organisation est immédiatement enregistrée. En appuyant à nouveau sur la `virgule` à la même position annule le déplacement.

### Raccourcis Clavier Directs pour les Stations Favorites

Chaque station de la liste des favoris est enregistrée comme un script distinct dans la boîte de dialogue Gestes de commandes de NVDA, sous la catégorie **FreeRadio Stations**. Vous pouvez assigner n'importe quel raccourci clavier à n'importe quelle station et l'utiliser depuis n'importe où — sans avoir à ouvrir la fenêtre du navigateur.

Pour assigner un raccourci :

1. Ouvrez le Menu NVDA → Préférences → Gestes de commandes.
2. Développez la catégorie **FreeRadio Stations**.
3. Trouvez la station par son nom, sélectionnez-la et appuyez sur **Ajouter**.
4. Appuyez sur la combinaison de touches souhaitée et confirmez.

Le raccourci démarre la station immédiatement. Si la station est retirée des favoris, son entrée disparaît de la catégorie et tout raccourci assigné est automatiquement supprimé par NVDA. Lorsqu'une nouvelle station est ajoutée aux favoris, elle apparaît immédiatement dans la catégorie — il n'est pas nécessaire de rouvrir la boîte de dialogue Gestes de commandes.

### Ajout d'une Station Personnalisée

Pour ajouter une station qui n'est pas dans Radio Browser, utilisez le bouton Ajouter une station personnalisée. Dans la boîte de dialogue qui apparaît, saisissez le nom de la station et l'URL du flux pour l'ajouter directement à vos favoris. Les stations personnalisées peuvent être écoutées et réorganisées comme n'importe quel autre favori.

### Profil Audio de la Station

L'onglet Favoris comprend deux boutons pour gérer les paramètres audio par station:

**Enregistrer le profil audio de cette station** — enregistre le niveau de volume actuel et les effets actifs (chœur, EQ, etc.), et les valeurs de gain EQ en tant que profil lié à cette station spécifique. Chaque fois que cette station commence à jouer, ses paramètres de volume, d'effets et de gain enregistrés sont automatiquement appliqués, remplaçant les valeurs par défaut globales.

**Effacer le profil audio** — supprime le profil audio enregistré de la station sélectionnée. Après l'effacement, la station revient aux paramètres globaux de volume, d'effets et gain EQ. Ce bouton n'est actif que lorsque la station sélectionnée possède déjà un profil enregistré.

Les deux boutons sont situés sous la liste des favoris et ne sont activés que lorsqu'une station de la liste est sélectionnée.

## Reconnaissance Musicale

Appuyer trois fois sur `Ctrl+Win+I` déclenche la reconnaissance musicale basée sur Shazam pour le flux en cours de lecture. La reconnaissance ne démarre que lorsqu'aucune métadonnée ICY (informations sur la piste diffusées par la station) n'est disponible ; si des métadonnées sont présentes, elles sont copiées dans le presse-papiers à la place.

La reconnaissance fonctionne comme suit : un court échantillon audio est capturé à partir du flux à l'aide de ffmpeg, l'algorithme d'empreinte digitale Shazam est appliqué et le résultat est envoyé aux serveurs de Shazam. Si la reconnaissance réussit, le titre du morceau, l'artiste, l'album et l'année de sortie sont annoncés par NVDA et automatiquement copiés dans le presse-papiers. Si l'option **Enregistrer les morceaux aimés dans un fichier texte** est activée, le résultat de la reconnaissance est également ajouté à `likedSongs.txt`.

**Retour audio:** Deux bips montants retentissent lorsque la reconnaissance démarre et deux bips descendants lorsqu'elle se termine. Un bip court retentit toutes les 2 secondes pendant que le processus est en cours.

**Exigence:** ffmpeg.exe est requis. Un ffmpeg.exe placé dans le dossier de l'extension est utilisé automatiquement ; s'il se trouve à un emplacement différent, le chemin peut être défini dans les Paramètres. Téléchargez ffmpeg depuis [ffmpeg.org](https://ffmpeg.org/download.html).

## Miroir Audio

Le raccourci `Ctrl+Win+M` met les miroirs du flux en cours de lecture vers un deuxième périphérique de sortie audio simultanément. Ceci est utile pour écouter sur deux périphériques différents en même temps, tel que des haut-parleurs et écouteurs.

Au premier appui, une boîte de dialogue de sélection répertoriant les périphériques de sortie disponibles apparaît. Une fois le périphérique choisi, la mise en miroir commence et la lecture principale se poursuit sans interruption. Appuyer à nouveau sur le raccourci arrête la mise en miroir.

**Cas d'utilisation:**
- **Haut-parleurs + écouteurs** — Laissez un invité suivre la même émission avec des écouteurs pendant que vous écoutez via les haut-parleurs de l'ordinateur.
- **Configuration d'enregistrement** — Acheminez la sortie principale vers des haut-parleurs et la deuxième sortie vers un enregistreur externe ou une interface audio pour une capture externe.
- **Multi-pièces** — Jouez simultanément via un haut-parleur Bluetooth et le haut-parleur intégré ; aucun logiciel supplémentaire n'est nécessaire pour transporter l'audio dans une autre pièce.
- **Surveillance à distance** — Dans une session de partage d'écran ou de bureau à distance, les côtés local et distant peuvent entendre le même flux simultanément.

> **Note:** La mise en miroir audio n'est disponible que lorsque le BASS backend est actif. Si le volume est modifié alors que la mise en miroir est active, les deux sorties sont mises à jour simultanément.

## Enregistrement

Les enregistrements sont enregistrés par défaut dans `Documents\FreeRadio Recordings\`. Le nom du fichier inclut le nom de la station (ou le titre du morceau, en mode enregistrement de morceau) et l'heure de début de l'enregistrement. Le dossier des enregistrements peut être modifié à tout moment depuis NVDA Menu → Préférences → Paramètres → FreeRadio → **Dossier des enregistrements**. Étant donné que le moteur d'enregistrement se connecte directement au flux, l'audio est écrit sur le disque tel qu'il est reçu — aucun traitement ni réencodage n'est appliqué ; la qualité d'enregistrement est identique à la qualité de diffusion.

**Enregistrement instantané:** Pendant la lecture d'une station, appuyez une fois sur `Ctrl+Win+E`. Appuyez à nouveau pour arrêter. La lecture se poursuit sans interruption.

**Enregistrement du morceau :** Appuyez sur `Ctrl+Win+E` **deux fois** de suite pendant qu'une station qui diffuse des métadonnées ICY est en cours de lecture. L'enregistrement démarre immédiatement et porte le nom du titre de la piste actuelle. Lorsque la piste change, l'enregistrement s'arrête automatiquement et NVDA annonce le nom du fichier enregistré. Si vous souhaitez terminer l'enregistrement plus tôt avant la fin de la piste, appuyez à nouveau deux fois sur `Ctrl+Win+E`. Si la station actuelle ne diffuse pas de métadonnées ICY, l'enregistrement du morceau n'est pas disponible et NVDA vous en informera.

**Enregistrement planifié:** Ouvrez l'onglet Enregistrement dans le navigateur. Sélectionnez une station parmi vos favoris, entrez l'heure de début en format HH:MM et la durée en minutes, puis choisissez un mode d'enregistrement:

- **Enregistrer pendant l'écoute** — joue et enregistre simultanément. Un backend de lecture est démarré en utilisant l'ordre de priorité BASS → VLC → PotPlayer → Windows Media Player.
- **Enregistrer seulement** — enregistre silencieusement en arrière-plan sans aucune sortie audio; le moteur d'enregistrement se connecte directement au flux.

Si l'heure saisie est déjà dépassée, l'enregistrement est planifié pour le lendemain. NVDA annonce quand un enregistrement commence et quand il se termine.

## Minuterie

Ouvrez l'onglet Minuterie dans le navigateur de stations (`Alt+4`). Deux types de minuterie peuvent être ajoutés:

**Alarme — démarrer la radio:** Commence automatiquement la lecture d'une station sélectionnée parmi vos favoris à l'heure spécifiée. Choisissez une station et entrez l'heure en format HH:MM.

**Mise en veille — arrêter la radio:** Arrête la lecture à l'heure spécifiée. Lorsque la minuterie se déclenche, le volume est progressivement réduit sur 60 secondes avant l'arrêt de la lecture. Aucune sélection de station n'est nécessaire ; entrez simplement l'heure.

Pour les deux types, si l'heure saisie est déjà dépassée, l'action est planifiée pour le lendemain. Les minuteries en attente sont répertoriées dans l'onglet ; sélectionnez-en un et appuyez sur le bouton Supprimer la minuterie sélectionnée pour l'annuler.

## Paramètres

Les options suivantes peuvent être configurées à partir de NVDA Menu → Préférences → Paramètres → FreeRadio:

| Option | Description |
|---|---|
| Périphérique de sortie audio (BASS backend) | Définit  le périphérique de sortie audio pour la lecture de la radio. La liste comprend tous les périphériques sur le système BASS-compatible plus une option "valeur système par défaut". Les modifications sont appliquées immédiatement lors de l'enregistrement ; si le périphérique sélectionné est déconnecté, l'extension revient automatiquement au valeur système par défaut et annonce le changement. Actif uniquement lorsque le BASS backend est utilisé. |
| Volume | Définit le volume au démarrage de l'extension (0–200). Modifications apportées pendant la lecture avec `Ctrl+Win+↑` / `Ctrl+Win+↓` se reflètent également ici. |
| Effet audio par défaut | Définit l'effet audio appliqué au démarrage de NVDA ou une station commence à jouer. L'effet sélectionné correspond à la liste des effets dans le navigateur de stations. Actif uniquement lorsque le BASS backend est utilisé. |
| Gain EQ (Bass / Treble / Vocal) | Définit le niveau de gain en dB pour chaque bande EQ (−15 à +15). Ces valeurs s'appliquent lorsque l'effet EQ correspondant est actif et sont enregistrées globalement. Les remplacements par station peuvent être stockés à l'aide du bouton **Enregistrer le profil audio** dans l'onglet Favoris. Actif uniquement lorsque le BASS backend est utilisé. |
| Transition de changement de station (BASS backend) | Contrôle le comportement de transition lors de la commutation entre les stations. **Coupe instantanée ** (par défaut) arrête la station précédente juste avant le début de la nouvelle. **Fondu enchaîné court (1 seconde)** et **Fondu enchaîné normal (2 secondes)** démarre immédiatement la nouvelle station sans interruption, puis faites disparaître progressivement la station précédente en arrière-plan une fois que le nouveau flux est confirmé actif. N'a aucun effet et aucun impact sur les performances lorsqu'il est réglé sur Coupe instantanée. Uniquement disponible lorsque le BASS backend est en cours d'utilisation. |
| Reprendre la dernière station au démarrage de NVDA | Lorsqu'elle est activée, la dernière station écoutée redémarre automatiquement à chaque démarrage de NVDA. |
| Annoncer automatiquement les changements de piste (métadonnées ICY) | Lorsqu'il est activé, NVDA lit automatiquement le nouveau nom de la piste à chaque fois qu'il change sur une station qui diffuse des métadonnées ICY. Le premier morceau est également annoncé immédiatement lors du passage à une nouvelle station. Désactivé par défaut. |
| Notifications muettes | Lorsqu'il est activé, NVDA n'annonce pas les changements de station, changements d'état de lecture (lecture, pause, arrêt) ou événements d'enregistrement (démarré, arrêté, terminé). Les messages d'erreur, les commentaires sur les favoris, les résultats de la reconnaissance musicale et les notifications de mise à jour ne sont pas affectés. Peut également être activé à la volée via un geste de commande non assigné. Désactivé par défaut. |
| Enregistrer les morceaux aimés dans un fichier texte | Lorsqu'il est activé, les informations de piste sont copiées dans le presse-papiers en appuyant sur `Ctrl+Win+I` trois fois est également ajouté à `Documents\FreeRadio Recordings\likedSongs.txt`. Si aucune métadonnée ICY n'est disponible, le résultat de la reconnaissance Shazam est enregistré dans le même fichier. Désactivé par défaut. |
| Lorsque Ctrl+Win+P est appuyé sans lecture active | Détermine ce qui se passe lorsque ce raccourci est appuyé et que rien n'est joué: démarrer la dernière station ou ouvrir la liste des favoris. |
| Lorsque Ctrl+Win+P est appuyé deux fois | Sélectionne ce qui se passe lorsque le raccourci est appuyé deux fois de suite rapidement: ne rien faire, ouvrir la liste des favoris, ouvrir l'onglet d'enregistrement ou ouvrir l'onglet minuterie. Lorsque "Ne rien faire " est sélectionné, la première pulsation répond instantanément sans délai. |
| Lorsque Ctrl+Win+P est appuyé trois fois | Sélectionne ce qui se passe lorsque le raccourci est appuyé trois fois de suite rapidement: ne rien faire, ouvrir la liste des favoris, ouvrir la recherche de stations, ouvrir l'onglet d'enregistrement ou ouvrir l'onglet minuterie. |
| Rechercher automatiquement les mises à jour au démarrage | Lorsqu'elle est activée, une vérification de mise à jour en arrière-plan s'exécute à chaque démarrage de NVDA; vous êtes averti si une nouvelle version est trouvée. Lorsqu'il est désactivé, les contrôles automatiques s'arrêtent mais les contrôles manuels restent disponibles. |
| Chemin ffmpeg.exe | Chemin d'accès au ffmpeg.exe utilisé pour la reconnaissance musicale. S'il est laissé vide, un ffmpeg.exe dans le dossier d'extension est utilisé automatiquement. |
| Chemin VLC | Si VLC n'est pas installé ou se trouve dans un emplacement non standard, le chemin complet vers l'exécutable peut être saisi ici. |
| Chemin wmplayer.exe | Entrez le chemin d'accès à Windows Media Player ici si nécessaire. |
| Chemin PotPlayer | Si PotPlayer se trouve dans un emplacement non standard, son chemin peut être saisi ici. |
| Dossier des enregistrements | Définit le dossier dans lequel les fichiers enregistrés sont sauvegardés. Si laissé vide, l'emplacement par défaut `Documents\FreeRadio Recordings\` est utilisé. Un bouton Explorer le dossier vous permet de sélectionner le dossier de manière interactive. Les modifications prennent effet immédiatement après l'enregistrement. |
| Désactiver la vérification de la connectivité Internet avant de la lecture | Recommandé pour les utilisateurs qui subissent un délai avant le début de la lecture d'une station. Également utile lorsque le DNS est bloqué. |

## Notifications Muettes

Lorsque **Notifications muettes ** est activé dans les Paramètres, NVDA fait taire les annonces automatiques suivantes:

- Nom de la station quand une nouvelle station commence à jouer
- Changements d'état de lecture : lecture, pause, arrêt
- Événements d'enregistrement : démarré, arrêté, terminé (enregistrements instantanés, de morceaux et planifiés)
- Annonces de changement de piste ICY, même lorsque **Annoncer automatiquement les changements de piste** est également activé

Les annonces suivantes ne sont intentionnellement **pas** affectées : messages d'erreur, commentaires sur les favoris (ajouté/déjà dans la liste), résultats de reconnaissance musicale et notifications de mise à jour.

Le paramètre peut être basculé depuis NVDA Menu → Préférences → Paramètres → FreeRadio, ou instantanément à tout moment via un geste de commande non assigné (en assigner un à partir de NVDA Menu → Préférences → Gestes de commandes → FreeRadio). Lorsqu'il est activé, NVDA annonce une fois "Notifications muettes" ou "Notifications réactivées" pour confirmer le changement.

## Annoncer automatiquement les changements de piste

Lorsque l'option **Annoncer automatiquement les changements de piste** est activé dans les Paramètres, FreeRadio vérifie le flux de métadonnées ICY de la station active en arrière-plan environ toutes les 5 secondes. Lorsque la piste change, le nouveau titre est automatiquement lu par NVDA — aucune pulsation de touche n'est requise.

Lors du passage à une nouvelle station, les premières informations sur la piste sont annoncées dès que la connexion est établie. Si vous passez à une station qui ne diffuse pas de métadonnées ICY, le système reste silencieux et les informations sur la piste de la station précédente ne sont pas répétées.

Cette fonctionnalité est désactivée par défaut et peut être basculée depuis NVDA Menu → Préférences → Paramètres → FreeRadio.

## Morceaux aimés

Lorsque l'option **Enregistrer les morceaux aimés dans un fichier texte** est activée, les informations sur la piste copiées dans le presse-papiers en appuyant trois fois sur `Ctrl+Win+I` sont également ajoutées ligne par ligne à `Documents\FreeRadio Recordings\likedSongs.txt`.

Sur les stations qui diffusent des métadonnées ICY, le titre de la piste et l'artiste sont directement enregistrés. Sur les stations sans métadonnées ICY, le résultat de la reconnaissance Shazam est enregistré dans le même fichier — les deux sources partagent la même liste. Le fichier est créé automatiquement s'il n'existe pas ; chaque entrée est ajoutée à la fin du fichier et les entrées précédentes ne sont jamais supprimées.

## Onglet Morceaux aimés

L'onglet **Morceaux aimés** dans le navigateur de stations affiche toutes les pistes enregistrées dans `likedSongs.txt`. La liste est automatiquement rechargée depuis le fichier à chaque ouverture de l'onglet.

La sélection d'une piste dans la liste permet les actions suivantes:

- **Lire sur Spotify:** Essaie d'ouvrir directement l'application de bureau Spotify. Si l'application n'est pas installée, revient au site Web Spotify et commence automatiquement à lire le premier résultat.
- **Lire sur YouTube (`Alt+O`):** Recherche sur YouTube la piste sélectionnée et ouvre les résultats dans le navigateur par défaut.
- **Supprimer (`Alt+M`):** Supprime la piste sélectionnée de `likedSongs.txt` et met à jour la liste. La touche `Supprimer` déclenche également ce bouton lorsque la liste est focalisé.
- **Rafraîchir (`Alt+E`):** Recharge la liste à partir du fichier.

Les boutons Spotify, YouTube et Supprimer ne sont activés que lorsqu'une vraie piste est sélectionnée dans la liste.

## Lecture

L'extension sélectionne un backend de lecture en utilisant l'ordre de priorité suivant:

1. **BASS** — le backend par défaut et principalthe . Aucune installation séparée n'est requise; il est fourni avec l'extension. BASS envoie l'audio directement à la pile audio Windows et apparaît dans le mélangeur de volume Windows en tant que source audio indépendante nommée "pythonw.exe", séparé de NVDA. Cela signifie que l'audio FreeRadio circule sur un canal complètement distinct de la parole de NVDA : la radio n'est pas coupée, mélangée ou affectée par les propres paramètres audio de NVDA pendant que NVDA parle. L'utilisateur peut régler le volume de la radio indépendamment de NVDA dans le Mélangeur de volume Windows. Prend en charge  HTTP, HTTPS et la plupart des formats de flux intégrés. La mise en miroir audio n'est disponible qu'avec ce backend.
2. **VLC** — prend le relais si le BASS échoue. Recherche automatique dans les emplacements d'installation courants, les dossiers de profil utilisateur et le CHEMIN du système.
3. **PotPlayer** — essayé si VLC n'est pas trouvé. Recherche automatique dans les emplacements d'installation courants.
4. **Windows Media Player** — utilisé en dernier recours; nécessite le composant  WMP à installer sur le système.

## Vérification des mises à jour

FreeRadio vérifie automatiquement les nouvelles versions via GitHub.

**Vérification automatique:** S'exécute silencieusement en arrière-plan 15 secondes après le démarrage de NVDA. Si une nouvelle version est trouvée, vous en êtes averti ; si aucun n'est trouvé, aucun message n'est affiché.

**Vérification manuelle:** Peut être déclenché sur demande depuis Outils NVDA → FreeRadio → **Rechercher des mises à jour…**. Au démarrage, le résultat est annoncé même si la version est à jour.

**Lorsqu'une mise à jour est trouvée:** Une boîte de dialogue s'ouvre affichant le numéro de version et votre version installée.

- Si un fichier `.nvda-addon` directement téléchargeable est disponible sur la release de GitHub, un bouton **Télécharger  et Installer** est affiché. Une fois confirmé, le fichier est téléchargé en arrière-plan, NVDA annonce le démarrage du téléchargement et l'écran d'installation de NVDA s'ouvre automatiquement.
- Si aucun lien de téléchargement direct n'est disponible, un bouton **Ouvrir la page** s'affiche et la page de la release sur GitHub s'ouvre dans le navigateur par défaut.

**Pour désactiver les vérifications automatiques:** Désactivez l'option **Rechercher automatiquement les mises à jour au démarrage** depuis NVDA Menu → Préférences  → Paramètres → FreeRadio.

## Licence

GPL v2