﻿---
title: YoutubeChannelManager extension pour NVDA
permalink: "/YoutubeChannelManager/"
layout: post
author: BlindHelp
---

<footer>Publié le Mardi 8 Mars 2022 - Dernière mise à jour le Lundi 6 Mars 2023</footer>

Coucou mes amis du blog de BlindHelp!    
Voici une extension non officielle  pour NVDA nommé YoutubeChannelManager créée par Gerar Késsler, membre de la [Communauté de NVDA en espagnol](https://nvda.es/), afin de gérer les chaînes favorites YouTube via une interface invisible et simple.    

Au préalable il sera nécessaire de supprimer l'extension appelée [YoutubePlay](https://blindhelp.github.io/YoutubePlay/) de vos extensions NVDA installées si vous l'avez installé, car elle est en conflit avec cette nouvelle extension YoutubeChannelManager, car elle affiche un message comme quoi il faut mettre à jour puis installer la librairie YouTube_DL car cette extension la  contient également.    

Cette nouvelle extension comporte une interface invisible c'est-à-dire quelle est en couche de commandes...    

N'oubliez pas que vous devrez activer ladite interface avec le raccourci préalablement assigné en utilisant le dialogue des Gestes de Commandes pour l'utiliser puis désactiver avec la même commande, afin de retrouver l'utilisation correcte des touches par défaut.    

Une dernière chose, le lecteur Web est chargé lorsque vous appuyer sur la lettre r quand vous êtes sur la chaîne que vous voulez écouter depuis la liste des chaînes, et nous ouvrirons celui-ci dans notre navigateur par défaut, veillez à ne pas fermer ledit lecteur Web, lors de la consultation d'une autre page Web avec Alt + f4, car cette commande ferme la fenêtre de la chaîne en cours de lecture, plutôt utiliser Ctrl + w qui fonctionne sur tous les navigateurs, et nous repositionne sur l'onglet précédent, qui est normalement l'onglet de notre lecteur Web.    

Je viens de le traduire en français pour le fun, et l'auteur m'a dit que je pouvais le partager avec vous tous, au-dessous je vous laisse le lien de téléchargement et sa description faite par le même auteur.    

# Informations sur l'extension YoutubeChannelManager: #

* Auteur: <span lang="es">Gerar Késsler</span>
* Version actuelle: 1.7 et plus
* Compatibilité avec NVDA: de 2022.4 à 2023.1
* Langues supportées: Arabe, Espagnol, Français, Italien, Portugais du Portugal / Brésil, Turc et Ukrainien
* [Télécharger](https://nvda.es/files/get.php?file=ytcmanager)
* [Voir code source sur GitHub](https://github.com/GerardKessler/YoutubeChannelManager)

--

# YoutubeChannelManager
[Gerardo Késsler](http://gera.ar)  

Cette extension vous permet de gérer les chaînes favorites de la plate-forme YouTube avec des raccourcis clavier et une interface invisible et simple.  

## Raccourcis de l'extension

* Activer l'interface invisible; Non assigné

Pour activer ou désactiver l'interface invisible, veuillez assigner préalablement un geste personnalisé en utilisant le dialogue des Gestes de Commandes

## Raccourcis disponibles dans l'interface invisible

* échap; Ferme l'interface virtuelle et renvoie les raccourcis clavier à sa fonction par défaut.
* Flèche droite; Se déplace à la chaîne suivante.
* Flèche gauche; Se déplace à la chaîne précédente.
* Flèche bas; Se déplace à la suivante vidéo de la chaîne focalisée.
* Flèche haut; Se déplace à la vidéo précédente de la chaîne focalisée.
* début; Se déplace à la première vidéo de la chaîne focalisée.
* fin; Verbalise la position, le nom de la chaîne, et le nombre de vues de la vidéo.
* n; Ouvre le dialogue pour ajouter une nouvelle chaîne.
* o; Ouvre le lien de la vidéo dans le navigateur par défaut.
* r; Ouvre le lien de l'audio dans un lecteur Web personnalisé.
* control + c; Ouvre le lien du presse-papiers dans le lecteur Web personnalisé.
* c; Copie le lien de la vidéo dans le presse-papiers.
* t; Copie le titre de la vidéo dans le presse-papiers.
* d; Obtiens les données de la vidéo et les affichent dans une fenêtre de NVDA.
* control + d; Télécharge la vidéo dans son format d'origine dans le dossier youtubeDL à la racine de l'utilisateur actuel.
* control + maj + d; Télécharge la vidéo à partir du presse-papiers dans son format d'origine dans le dossier youtubeDL à la racine de l'utilisateur actuel.
* b; Active le dialogue de recherche dans la base de données.
* Contrôle + b; Active le dialogue de recherche générale.
* f5; Recherche s'il y a de nouvelles vidéos sur la chaîne focalisée.
* s; Active la fenêtre de configuration de la chaîne focalisée.
* g; Active la fenêtre Options globales.
* Effacement; Élimine la chaîne focalisée, et dans la fenêtre de résultats, il supprime la colonne et retourne à la liste des chaînes.
* contrôle + maj + effacement; Élimine la base de données.
* f1; Active l'aide des commandes.

### Ajouter des chaînes

Pour ajouter une nouvelle chaîne à la base de données, il vous suffit d'ouvrir l'interface virtuelle avec le raccourci préalablement assigné. Par défaut, l'interface virtuelle n'a pas de geste de commande assigné pour cette action. Une fois assigné et ouverte l'interface virtuelle appuyer sur la lettre n.    
La fenêtre demande 2 champs. Un nom de la chaîne, et l'URL de celle-ci. Dans ce dernier cas, l'extension permet la saisi des formats d'URL suivants:

* Lien d'une vidéo, qui a généralement le format suivant:

    https://www.youtube.com/watch?v=IdDeLaVideo

* Lien d'une chaîne

    https://www.youtube.com/channel/IdDeLaChaine

Donc un moyen de l'obtenir est en ouvrant une quelconque vidéo sur la page de YouTube via le navigateur, appuyez sur alt et la lettre d pour ouvrir la barre d'adresse et copier l'URL avec contrôle + c, qui sera déjà sélectionnée par défaut.  
Les chaînes peuvent également être ajoutées depuis la liste des résultats globaux. Pour cela, il suffit  d'effectuez la recherche, se situer sur la vidéo de la chaîne à ajouter et appuyez sur la touche n.  
Cela activera le dialogue pour saisir les données de la chaîne, qui seront automatiquement complétées avec le lien et le nom pris depuis Youtube.

### Assistant de mise à jour automatique:

L'extension vous permet de cocher des chaînes comme favorites et d'activer la vérification des nouveautés avec un intervalle de temps stipulée.  
Pour cocher ou décocher une chaîne comme favorite:  

* Activer l'interface virtuelle avec le geste préalablement assigné.
* Sélectionner la chaîne souhaitée avec les flèches gauche ou droite.
* Activer la fenêtre de configuration de la chaîne avec la lettre s.
* Cocher la case correspondante et appuyez sur le bouton pour enregistrer la configuration.

La vérification des nouveautés dans les chaînes favorites est désactivée par défaut. Pour le modifier, vous devez suivre les étapes suivantes:

* Activer l'interface virtuelle avec le geste préalablement assigné.
* Activer la fenêtre de configuration globale avec la lettre g.
* Tabuler jusqu'à la liste des options, et sélectionner avec les flèches haut  et bas l'intervalle souhaitée.
* Appuyer sur le bouton pour enregistrer les configurations.

En trouvant des nouveautés, l'extension émettra un son lors de la mise à jour et un message à la fin de celle-ci.

### Recherche de vidéos dans la base de données:

L'extension permet de rechercher par mots-clés entre les vidéos des chaînes ajoutées à la base de données.  

* Activer l'interface virtuelle avec le geste préalablement assigné.
* Activer la fenêtre de recherche avec la lettre b.
* Écrire un mot ou une phrase de référence.
* Appuyer sur Entrée ou sur le bouton Démarrer la recherche.

Si aucun résultat n'est trouvé, ceci est notifié par un message et l'interface virtuelle n'est pas modifiée.  
Dans le cas de la recherche de vidéos correspondant aux données saisies, ceci est notifié par un message et l'interface de résultats est activée.  
Pour naviguer à travers de celle-ci, cela peut être fait avec les flèches haut et bas. Les mêmes commandes sont disponibles comme dans l'interface  des chaînes; r pour le lecteur Web personnalisé, o pour ouvrir dans le navigateur, etc.  
Pour revenir à l'interface des chaînes vous devez appuyer sur la touche effacement dans l'interface des résultats, qui supprimera cette colonne et retournera à la liste des chaînes et des vidéos.

### Recherche globale:

Pour effectuer une recherche globale en dehors de la base de données, vous devez procéder comme suit:

* Activer l'interface virtuelle avec le geste préalablement assigné.
* Activer la fenêtre de recherche avec le raccourci contrôle + b.
* Écrire un mot ou une phrase de référence et sélectionner la quantité de résultats à afficher.
* Appuyer sur le bouton Démarrer la recherche.

Si aucun résultat n'est trouvé, ceci est notifié par un message.  
Lorsque des résultats sont trouvés, ceux-ci sont ajoutés à la liste principale que nous pouvons parcourir avec les flèches haut et bas.  
Ici, nous avons également les mêmes raccourcis que dans la recherche de la base de données. O pour ouvrir dans le navigateur, r pour le lecteur Web, c pour copier le lien, etc.  
Si l'une des vidéos est sur une chaîne que vous souhaitez ajouter à la base de données, appuyer sur la lettre n sur cette liste laquelle activera le dialogue de nouvelle chaîne avec les champs du nomb et l'URL déjà complets. Ces champs peuvent être édités si l'on préfère ainsi.  
Comme dans les recherches dans la base de données, pour revenir à la liste des chaînes, vous devez simplement appuyer sur la touche effacement pour supprimer les résultats et revenir à l'interface des chaînes.

### Historique de recherches

L'extension enregistre le texte des 20 dernières recherches globales dans la base de données. 
Pour accéder à l'historique, il vous suffit d'appuyer sur la touche Applications sur le champ d'édition de recherche globale. En appuyant sur celui-ci, un menu contextuel est activé avec les dernières recherches, et en appuyant sur Entrée sur l'un d'eux le champ est complété avec le texte correspondant.

## Téléchargement des vidéos

Cette extension n'est pas destinée à convertir des vidéos, mais la possibilité de télécharger la vidéo dans le format original a été ajoutée.
Pour ce faire, il vous suffit de chercher la vidéo à télécharger et d'appuyer sur le raccourci control + d. Le fichier va être téléchargé dans le dossier youtubeDL de l'utilisateur actuel.

## Traducteurs:

	Rémy Ruiz (Français)
	Ângelo Miguel Abrantes (Portugais)
	Umut KORKMAZ (Turc)
	wafiqtaher (Arabe)

---

Mille merci à notre ami <span lang="es">Gerar Késsler</span> pour l'avoir partagé avec nous tous! :)    
Profitez de l'extension YoutubeChannelManager pour NVDA afin de gérer les chaînes favorites YouTube via une interface invisible et simple!    
@+    
BlindHelp!    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouvel espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---
