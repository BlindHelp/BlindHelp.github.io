---
title: Petit rappel pour configurer au mieux notre CDex
permalink: "/A-quick-reminder-to-best-configure-our-CDex"
layout: post
author: BlindHelp
---

<footer> Publié le Mercredi 23 Septembre 2026</footer>


Coucou mes amis du blog de BlindHelp!    
Aujourd'hui, je vous présente un petit rappel pour configurer au mieux notre CDex !    

Eh bien, l'histoire de cet post a commencé lorsque j'ai dû réinstaller le programme CDex que j'utilisais depuis de nombreuses années, de XP à aujourd'hui, après avoir acquis un PC de bureau avec Windows 11 Pro, et j'ai décidé de noter tous les paramètres de CDex pour me faciliter sa configuration y compris les nouveaux changements dans l'onglet CDDB distant.

Avertissement: 💀    
Le blog de BlindHelp n'est pas responsable des dommages causés par une mauvaise utilisation de CDex téléchargé ni des informations ce trouvant sur la documentation dédié et l'utilisation de CDex téléchargé est à vos risques et périls. ☠    

# Petit rappel pour configurer au mieux notre CDex

Avant de commencer ce rappel, si vous n'avez pas encore téléchargé CDex, voici le lien vers la dernière version à ce jour :    

<https://mirror.cdex.mu/CDex-2.24.exe>

Nom du fichier à télécharger :    
`CDex-2.24.exe`    

La version 2.24 de CDex est sortie le 12 août 2020.    

# Source : page anglaise de CDex

<https://cdex.mu/>

## CDex 2.24 — Encoder de l'audio vers du MP3

## CDex — Introduction

CDex 2.24 offre des fonctionnalités concernant l'exploitation de fichier au format audio.    

Ici, nous allons parler de la manière de convertir un Cd audio vers un format compressé, le MP3.    

Nous allons utiliser une option appelée « CDDB distant » qui permet la reconnaissance automatique de l'album, afin que les différentes pistes soient renommées
par le titre correspondant.    

Si vous ne possédez pas de connexion INTERNET, vous devez ignorer les étapes de ce résumé qui font références à cette option.    

## CDex — L'Installation

Lors de l'installation de CDex 2.24, vous devez choisir les options par défaut.    

Cette version de CDex inclut le pack de langues, dont le français.    

## CDex — Changer la langue en français

Si l'interface n'est pas en français, faire comme sui :    
Lorsque nous avons ouvert notre programme CDex à partir de l'icône sur le bureau, si nous allons à    
`Options Alt+o`    
flèche haut    
Choisir la Langue  sous-menu,    
appuyez sur la lettre f deux fois    
`french`    
il faut qui soit coché.    
puis OK    
Il me semble qu'il faut redémarrer le programme pour qui tienne en compte le changement de la langue, quoi que…    

## CDex — La configuration

Lancez CDex 2.24 à partir de l'icône sur le bureau.    

Activez le menu déroulant avec ALT, puis ouvrez la boîte de dialogue de la configuration de CDex à partir de l'option de menu :    

« Options|Configuration… »    

Mais vous pouvez également utiliser la touche de fonction F4 du clavier.    

Une boîte de dialogue apparaît à l'écran.    

Réalisez le raccourci clavier CTRL +TAB jusqu'à l'onglet « CDDB Distant ».    

Tabulation jusqu'à la zone d'édition intitulée : « Adresse Mail » (Si je ne me trompe pas, bien que je ne le pense pas, il s'agit du sixième champ d'édition)    

Saisissez votre adresse de messagerie ; vous pouvez en donner une fictive mais cela ne présente aucun intérêt, car
on ne reçois jamais de spam provoqués par CDex.    

Lors de la première utilisation du logiciel : Par défaut, CDex exige que vous renseigniez une adresse e-mail (une adresse fictive comme test@test.com fonctionne) pour autoriser les requêtes vers les bases de données musicales. Sans cela, le logiciel refusera de récupérer automatiquement le nom de l'artiste, de l'album et des pistes.    

Faire tabulation jusqu'à la case à cocher intitulée :    

« Utiliser un proxy ».    

Si cette option est cochée, décochez-là en pressant la barre d'espacement.    

Faire tabulation jusqu'à la case à cocher intitulée :    

« Authentification ».    

Si cette option est cochée, décochez-là en pressant la barre d'espacement.    

Faire tabulation jusqu'à la case à cocher intitulée :    

« Se connecter automatiquement à CDDB ».    

Cochez cette option en pressant la barre d'espacement.    

### Ce qui a changé

* Arrêt du service : L'entreprise Magix (propriétaire de Freedb) a arrêté le service en mars 2020 après des années de support.
* Impact pour CDex : Le système de recherche de pistes par défaut ne renvoie plus rien, car l'adresse historique ne répond plus.

Depuis la fermeture définitive de freedb : Le serveur historique préconfiguré par défaut (freedb.freedb.org) a fermé ses portes. Si vous laissez l'ancienne configuration, vous obtiendrez des erreurs de connexion (comme "An invalid argument was supplied") et vos pistes resteront nommées "Audio Track 01, 02...". Il faut donc obligatoirement modifier cet onglet pour rediriger CDex vers une base alternative active, telle que GNUDB.    

Dans notre belle langue le français Le message d'erreur de connexion traduit serait : "Un argument invalide a été fourni"    

## CDex — Comment configurer l'onglet CDDB distant aujourd'hui ?

Pour rétablir la récupération automatique des titres de vos CD, suivez cette procédure :    
1. Ouvrez CDex à partir de l'icône sur le bureau et accédez aux options en appuyant sur la touche F4 (ou via le menu Options > Configuration).    
2. Cliquez sur l'onglet CDDB distant (ou Remote freedb).    
3. Renseignez obligatoirement une adresse e-mail dans le champ Votre adresse e-mail (ex: votre-nom@mail.com).    
4. Dans la section des serveurs, ajoutez ou modifiez le serveur existant avec les paramètres officiels de GNUDB :    
* Serveur / URL : gnudb.gnudb.org    
* Protocole / Port : Choisissez HTTP avec le port 80 (recommandé pour éviter les blocages de pare-feu) ou le protocole CDDBP avec le port 8880.    
* Chemin d'accès (si HTTP) : /~cddb/cddb.cgi    
5. Cochez l'option Se connecter automatiquement au CDDB puis validez en cliquant sur OK.    

Voici les Valeurs d'avant par défaut  après avoir cliqué sur le bouton : « Ajouter un site bouton » dans CDex Version 2.24 dans l'onglet CDDB distant :    

Testé avec le lecteur d'écran NVDA 2026.2 sur un ordinateur de bureau Windows 11 Pro.    

Faites tabulation.    

NVDA m'annonce les valeurs suivantes :    

`arborescence`    
`Onglet CDDB distant`    
`CDDB distant page de propriété Serveur distant`    
`Adresse mail`    
`Port du Proxy`    
`Mot de passe`    
`Timeout (secondes)`    
`Adresse`    
`Chemin`    
`Protocole`    
`Localisation`    
`Port`    
`liste déroulante localhost http  80 ( localserver ) réduit`    
`édition sélectionné  localserver`    
`édition sélectionné  localhost`    
`édition sélectionné  /~cddb/cddb.cgi`    
`liste déroulante HTTP (port par défaut 80) réduit`    
`édition sélectionné  80`    
`édition sélectionné  remyruiz@gmail.com`    
`édition sélectionné  20`    
`Utiliser un Proxy case à cocher non coché`    
`Authentification case à cocher non coché`    
`Se connecter automatiquement à CDDB case à cocher coché`    
`Ajouter un site bouton`    
`Récupérer des sites bouton`    
`Tout réinitialiser bouton`    
`Options d'envoi bouton`    
`OK bouton`    

Comme je l'ai expliqué plus haut, nous devrons modifier les valeurs par défaut, qui sont désormais obsolètes, et les remplacer par ces nouvelles valeurs qui fonctionnent actuellement avec CDex 2.24 :    

Faites tabulation.    

`arborescence`    
`Onglet CDDB distant`    
`CDDB distant page de propriété Serveur distant`    
`Adresse mail`    
`Port du Proxy`    
`Mot de passe`    
`Timeout (secondes)`    
`Adresse`    
`Chemin`    
`Protocole`    
`Localisation`    
`Port`    
`Configuration d'avant :`    
`liste déroulante localhost http  80 ( localserver ) réduit`    
`Changé par :`    
`liste déroulante gnudb.gnudb.org cddbp  8880  (GNUDB) réduit`    
`Configuration d'avant :`    
`édition sélectionné  localserver`    
`Changé par :`    
`édition sélectionné  GNUDB`    
`Configuration d'avant :`    
`édition sélectionné  localhost`    
`Changé par :`    
`édition sélectionné  gnudb.gnudb.org`    
`Le champ d'édition suivant restera inchangé :`    
`édition sélectionné  /~cddb/cddb.cgi`    
`Configuration d'avant :`    
`liste déroulante HTTP (port par défaut 80) réduit`    
`Appuyez sur flèche haut et modifiez la valeur comme suit :`    
`liste déroulante CDDB ( port par défaut 888 or 8880) réduit`    
`Configuration d'avant :`    
`édition sélectionné  80`    
`Changé par :`    
`édition sélectionné  8880`    
`Votre adresse électronique doit apparaître dans le suivant champ d'édition :`    
`édition sélectionné  remyruiz@gmail.com`    
`Le champ d'édition suivant restera inchangé :`    
`édition sélectionné  20`    
`Les cases à cocher suivantes doivent être cochées comme suit :`    
`Utiliser un Proxy case à cocher non coché`    
`Authentification case à cocher non coché`    
`Se connecter automatiquement à CDDB case à cocher coché`    
`Ajouter un site bouton`    
`Récupérer des sites bouton`    
`Tout réinitialiser bouton`    
`Options d'envoi bouton`    
`OK bouton`    

Appuyez sur le bouton « Ok » et pressez la touche entrée pour enregistrer les modifications.    

Faites CTRL +TAB jusqu'à activer l'onglet intitulé « Cd-rom ». Dans la première liste, vous trouverez les différents lecteurs de votre ordinateur, avec vos    
flèches verticales, sélectionnez le lecteur que vous souhaitez utiliser pour lire les Cd Audio qui seront encodés.    

Faites tabulation jusqu'à la case à cocher intitulée :    

« Ejecter le Cd à la fin de l'extraction ».    

Si cette option n'est pas cochée, cochez-là en pressant la barre d'espacement.    

Maintenant, faites tabulation jusqu'au bouton « Ok » et pressez la touche entrée.    

## CDex — L'encodage à partir d'un CD Audio

A partir du bureau de WINDOWS 10 ou version ultérieure, ouvrez le plateau de votre lecteur.    

Introduisez le Cd mais ne refermez pas le plateau.    

Lancez CDex à partir de l'icône sur le bureau.    

Automatiquement, le plateau se referme.    

Patientez quelques secondes.    

Puis, vous arrivez dans la fenêtre principale de CDex, vous êtes directement positionnés dans la liste des pistes du Cd audio.    

Si le « CDDB Distant » a reconnu l'album, les pistes seront renommées.    

Ensuite, faites tabulation.    

Si vous n'écrivez aucune valeur dans cette zone d'édition, les pistes seront numérotées de 1 à « N », « N » étant le nombre total de pistes du Cd Audio.    

En revanche, si vous saisissez la valeur de la dernière piste du Cd précédemment encodé, la numérotation du Cd audio en cours débutera juste au numéro suivant.    
Par exemple, si vous saisissez la valeur 20, la première piste du Cd audio en cours aura le numéro 21.    

Cette option de décalage de numérotation est très pratique lorsque l'on souhaite graver plusieurs albums MP3 sur un Cd vierge.    

Ensuite, faites tabulation une seule fois pour atteindre la zone d'édition intitulée « Artiste ».    

Si l'option « CDDB distant » n'a pas reconnu l'album, vous pouvez saisir vous-mêmes le nom de l'artiste.    

Faites tabulation pour atteindre la zone d'édition suivante.    

Cette fois, il s'agit du titre de l'album.    

Si l'option « CDDB distant » n'a pas reconnu l'album, saisissez au clavier le titre.    

Faites une dernière fois tabulation.    

Vous arrivez dans une liste contenant le genre de l'album, faites votre choix en utilisant vos flèches verticales.    

Allez vous êtes prêts ?    

Démarrez l'encodage en pressant la touche de fonction F9 de votre clavier.    

Vous devez patienter durant l'opération d'encodage.    

Dès que l'opération est terminée, le Cd audio est éjecté.    

Alors, quittez CDex en réalisant le raccourci clavier ALT +F4.    

Vous pouvez maintenant visualiser le résultat dans le dossier :    

« Mes documents », « My Music », puis, « MP3 ».

Pour trouver votre CD audio extrait avec CDex 2.24, vous devrez vous rendre à l'emplacement suivant sous Windows 10 ou version ultérieure :    
`C:\Users\VotreNomUtilisateur\Music\Various Artists`    
Ou le nom du dossier attribué par CDex selon le nom du CD audio utilisé pendant l'extraction pris par le CDDB distant.    

## CDex — L'encodage à partir de fichiers WAV

A partir de votre disque dur, vous pouvez convertir des fichiers WAV en MP3.    

Lancez CDex à partir de l'icône sur le bureau.    

Lorsque vous arrivez dans la fenêtre principale, activez le menu déroulant avec ALT, flèche droite jusqu'à « Conversion », puis flèche basse jusqu'à atteindre    
« Convertir fichiers WAV vers MPEG » et pressez la touche entrée.    

On peut également utiliser la touche de fonction F11.    

Une boîte de dialogue apparaît à l'écran.    

Vous êtes directement positionnés sur une zone intitulée « Édition en lecture seule dossier ».    

Les lecteurs d'écran, qu'il s'agisse de NVDA ou de JAWS vous annonce alors le nom du dossier source contenant les fichiers WAV à convertir. Pour ouvrir un autre dossier, pressez la touche entrée. Un explorateur
de documents apparaît à l'écran. Choisissez le dossier puis pressez la touche entrée sur le bouton « Ouvrir ».    

Vous êtes de retour dans la première boîte de dialogue.    

Faites tabulation jusqu'au bouton intitulé « Tout sélectionner » et pressez la touche entrée.    

Faites tabulation pour atteindre la case à cocher intitulée « Lire les sous répertoires ».    

Si vous souhaitez que les sous dossiers contenus dans le dossier ouvert soit concernés par la conversion, cochez cette option en pressant la barre d'espacement.    

Faites tabulation.    

Vous arrivez sur une case à cocher intitulée « Supprimer l'original ».    

Si vous souhaitez que le fichier WAV soit supprimé après avoir été converti en MP3, cochez cette option en pressant la barre d'espacement.    

Faites tabulation.    

Vous arrivez sur une case à cocher intitulée « Normaliser ».    

Si vous souhaitez que tous les fichiers MP3 en sortie aient le même niveau sonore, c'est-à-dire un volume de base identique, cochez cette option en pressant    
la barre d'espacement.    

Maintenant, nous allons démarrer la conversion, faites tabulation jusqu'au bouton « Convertir » et pressez la touche entrée.    

Patientez durant l'encodage.    

Ensuite, refermez CDex en réalisant le raccourci clavier ALT +F4.    

Pour atteindre le résultat de l'encodage, ouvrez le dossier « Mes documents », puis « My Music » et « MP3 ».    

Par contre vous devrez vous rendre à l'emplacement suivant sous Windows 10 ou version ultérieure :    
`C:\Users\VotreNomUtilisateur\Music\Various Artists`
Ou le nom du dossier attribué par CDex selon le nom du CD audio utilisé pendant l'extraction pris par le CDDB distant.    

## CDex — Réduire la taille d'un fichier MP3

Pour des raisons diverses, vous pouvez avoir besoin de réduire la taille d'un ou plusieurs fichiers MP3.    

Bref, toujours est-il que voici la manière de réaliser cette opération…    

Placez vos fichiers MP3 dans le dossier « Ma musique » ou « Music » selon le système d'exploitation utilisé.    

Ouvrez CDex à partir de l'icône sur le bureau.    

Dans la fenêtre principale de CDex, activez le menu déroulant avec ALT, flèche droite jusqu'à « Options», puis flèche basse jusqu'à atteindre « Configurations    
» et pressez la touche entrée.    

Le raccourci clavier de l'ouverture de cette boîte de dialogue est F4.    

Dans la boîte de dialogue, faire tabulation jusqu'à la liste intitulée « Bitrate » et avec flèche haute, diminuer la valeur proposée.    

Il s'agit du nombre d'information utilisée par seconde pour coder le fichier. Cette valeur est exprimée en KBPS, Kilo Bits par seconde.    

En réduisant cette valeur, vous réduisez la qualité du fichier, et par conséquent, sa taille. Il se peut toutefois que la différence de qualité soit insensible…    

Maintenant, faites tabulation jusqu'au bouton intitulé « Ok » et pressez la touche entrée.    

Vous êtes de retour dans la fenêtre principale de CDex.    

Activez le menu déroulant avec ALT, flèche droite jusqu'à « Conversions » puis flèche basse jusqu'à atteindre « Ré-encoder MPEG » et pressez la touche entrée.    

Dans la fenêtre qui apparaît à l'écran, faites tabulation pour atteindre la liste du contenu du dossier « Ma musique » ou « Musique ». Sélectionnez les fichiers à convertir,    
dans le cas ou vous souhaiteriez sélectionner le contenu entier du dossier, faites tabulation jusqu'au bouton intitulé « Tout sélectionner » et pressez    
la touche entrée.    

Puis, faites tabulation jusqu'au bouton intitulé « Convertir » et pressez la touche entrée.    

Patientez durant l'étape d'encodage, une barre de progression indique l'avancement de l'opération.    

Pour finir, quittez CDex en réalisant le raccourci clavier ALT +F4.    

Maintenant, allez constater le résultat dans le dossier intitulé « My MUSIC » situé dans le dossier « Mes Documents » ou dans le dossier intitulé « Music » situé dans le dossier « Documents » selon le système d'exploitation utilisé.    

Remarque :    

Ultérieurement, vous devrez revenir dans la fenêtre de configuration avec F4, de façon à remettre la valeur « Bitrate » à 128 KBPS.    

## CDex — EXTRACTION DE PISTES SUR UN CD AUDIO.

1. Ouvrir le lecteur de CD et placer le CD audio à convertir.    
2. Ne pas refermer le tiroir.    
3. Lancez CDex à partir de l'icône sur le bureau.    
4. Le tiroir doit se refermer.    
5. On attend un moment, les pistes s'affichent.    
6. On fait la commande F9 pour faire une conversion en mP3 ou F8 pour une conversion en WAV.    
7. L'extraction des pistes commence…    
8. On entend le pourcentage de l'extraction.    
9. Une fois le travail terminé, le tiroir s'ouvre.    
10. On retrouve le résultat dans « mes documents », dans « my music » , puis dans le dossier MP3 ou dans le dossier « Documents » dans « Music » , puis dans le dossier MP3 selon le système d'exploitation utilisé.    
11. Soit on obtient  un dossier avec le nom de l'artiste, soit avec le nom « pas d'artiste »    
12. Dans ce dossier on trouve un dossier avec le nom de l'album ou avec le nom «pas d'album »    
13. Dans ce dernier dossier on retrouve toutes les pistes converties au format voulu.    

Remarque : Le dossier MP3 dont nous avons parlé tout au long de cet post a été créé au préalable dans les dossiers « Ma musique » ou « Music » selon le système d'exploitation utilisé.    

Ce dossier MP3 est facultatif, mais sa création facilitera la recherche de vos fichiers MP3 convertis avec CDex.    

## CDex — Premier dialogue après la configuration de CDex Version 2.24 dans l'onglet CDDB distant

Après avoir correctement rempli les champs obligatoires lors de la configuration de CDex Version 2.24 dans l'onglet CDDB distant et inséré votre CD audio provenant du magasin où vous l'avez légitimement acheté, vous recevrez le message suivant en anglais :    
`Connexion en cours`    
`Ouverture de la connexion`    
`OK Réponse`    

`Envoi de la requête`    
`Found inexact match, please select a match and press the next button`    
`Or press the Cancel button  to abort`    

Dans notre belle langue le français Cela se traduit par :    
`Correspondance inexacte trouvée, veuillez sélectionner une correspondance et appuyer sur le bouton suivant`    
`Ou appuyez sur le bouton Annuler pour interrompre.`    

`When selecting a code page other than UTF-8  is recommended to re-submit the CDDB entry.`    

Dans notre belle langue le français Cela se traduit par :    
`Lorsqu'on sélectionne une page de codes autre que UTF-8, il est recommandé de soumettre à nouveau l'entrée CDDB.`    

Ce message provient généralement du logiciel CDex (un outil populaire pour extraire les pistes d'un CD audio en fichiers MP3 ou WAV).    
Il signifie que le logiciel a cherché les informations de votre CD (titres des chansons, artiste, album) sur une base de données en ligne (comme freedb ou gnudb), mais qu'il a trouvé plusieurs albums correspondants ou une correspondance incomplète.    
Voici comment procéder :    
 
📋 Ce que vous devez faire :    
1. Regardez la liste affichée à l'écran dans la fenêtre de CDex.    
2. Sélectionnez l'album qui correspond exactement au vôtre (vérifiez le nom de l'artiste et l'année si nécessaire).    
 3. Cliquez sur le bouton "Next" (Suivant) pour valider et importer les bons titres.    
 4. Si aucun ne correspond, vous pouvez cliquer sur "Cancel" (Annuler). Vous devrez alors renommer les pistes à la main.    

Eh bien, j'ai appuyé sur Tab et j'ai cliqué ensuite sur le bouton Next comme recommandé.    

Commentaire de notre ami Sèb :    
> Ce message apparaît quand il y a plusieurs résultats. On ne doit pas pouvoir le supprimer car pour aller plus loin il faut absolument faire un choix dans la liste d'album proposée.    

Pour trouver votre CD audio extrait avec CDex 2.24, vous devrez vous rendre à l'emplacement suivant sous Windows 10 ou version ultérieure :    
`C:\Users\VotreNomUtilisateur\Music\Various Artists`    
Ou le nom du dossier attribué par CDex selon le nom du CD audio utilisé pendant l'extraction pris par le CDDB distant.    

# CDex — Rappel des principaux raccourcis clavier utilisés par CDex

Les principaux raccourcis clavier du logiciel d'extraction audio CDex reposent essentiellement sur les touches de fonction (F4 à F12) :    

"F8" : copie intégralement le CD en Wav sur le Disque;    
"F9" : copie le CD en Mp3;    
"F10" : permet de copier sélectivement une partie du CD;    
"F11" : permet d'encoder n'importe quel fichier Wav se trouvant sur le disque dur en Mp3;    
"F12" : permet d'encoder des fichiers Mp3 se trouvant sur le disque dur en Wav;    
"F2" : permet de renommer une Piste;    
"F4" : permet de Configurer CDex;    
"F5" : Rafraîchit la liste des pistes (relecture de la Table des Matières et des informations CDDB);    

Voilà, je pense avoir fait le tour de comment utiliser  et configurer au mieux notre CDex    

Un grand merci à notre regretté formateur Philippe BOULANGER 🙏 pour avoir partagé cette fiche d'information dédiée au programme CDex pendant sa formation et aussi à tous mes amis qui m'ont laissé un commentaire sur la liste de diffusion ou en privé. (handshake)    

C'est fini ce rappel pour configurer au mieux notre CDex! 🔐    
À la prochaine sur un autre post!    
Bien amicalement,    
Rémy (BlindHelp). 🇫🇷 👨‍🦯    

> Il est plus facile de manger les frites que de se baisser pour ramasser les patates

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouvel espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---