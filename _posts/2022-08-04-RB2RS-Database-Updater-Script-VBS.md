---
title: Script VBS afin de télécharger et d'installer la dernière liste "non officielle" des stations de radios pour RadioSure
permalink: "/RB2RS-Database-Updater-Script-VBS/"
layout: post
author: BlindHelp
---

<footer>Publié le Jeudi 4 Août 2022 - Dernière mise à jour le Lundi 22 Août 2022</footer>

Coucou mes amis du blog de BlindHelp!    
Aujourd'hui, je  vous apporte un script VBS afin de télécharger et d'installer la dernière liste "non officielle" des stations de radios pour RadioSure! Merci à @GHbasicuser (aka PhiliWeb) (handshake)    

Ce script VBS permet de télécharger et d'installer la dernière liste "non officielle" des stations de radios pour RadioSure! 😄    

Cette liste de stations est une conversion de la base ["Radio-Browser.info"](https://www.radio-browser.info/)    

## Que fait ce script VBS?

* Affiche un message pendant 5 secondes si la mise à jour était réussie.
* N'essaie pas de télécharger quoi que ce soit si une mise à jour était effectuée il y a moins de 12 heures. (Nombre modifiable d'heures)
* annule la mise à jour si le fichier zip est trop petit.
* Modifie le fichier "RadioSure.xml" pour informer le logiciel que la dernière recherche de station vient d'être effectuée.
* Affiche quelques messages d'information (Ex: Si la dernière mise à jour RB2RS réussie a plus de 30 jours).
* La source de téléchargement peut être modifiée dans l'en-tête de fichier. Francois-neosurf's server = http://82.66.77.189:8080/)
* Peut lancer RadioSure en définissant RadioSure = 1 dans l'en-tête de fichier  (db-update.vbs).

Si vous êtes programmeur vous pouvez examiner le contenu du fichier db-update.vbs en ouvrant le fichier dans un éditeur de texte tel que le Bloc-notes de Windows.    
Le script VBS et la documentation du README.md (en anglais) ils peuvent être téléchargés à partir des liens situés ci-dessous. Merci.    

## Test de ce script VBS avec RadioSure by BlindHelp

Mon test du script VBS que je vous apporte aujourd'hui a été effectué avec la version installable et la version pseudo portable (Concocter à partir du dossier RadioSure de la version instalable 1042 du programme RadioSure, ceci sous Windows 10    

Je viens de tester également le script VBS avec  une véritable version portable 1046 que j'ai construit à partir du Setup 1046 du programme RadioSure, dans le même système d'exploitation.    

Je vous prie instamment de lire cet article dans sa totalité pour le bon fonctionnement du script VBS, merci.    

## ATTENTION! 🔐

`404`    
`NOT FOUND`    

À savoir que la page officielle du programme [RadioSure](http://www.radiosure.com/downloadz/downloadz-select/) est fermée définitivement et l'URL pour télécharger la dernière mise à jour de la liste officielle des stations de radios pour RadioSure également! 😥 puisque nous avons ce script VBS qui répond à cette dernière fonction! :)    

Je pense que c'était des Russes et pour le thème de la guerre, ils ont disparu et ne fournit plus de mises à jour. :(    

Cependant, pour les amis qui n'ont pas le programme RadioSure, je leur donne un lien de téléchargement plus bas via mon espace sur BlindHelp.github.io afin qu'ils puissent le télécharger en version pseudo portable (Concocter à partir de ma version instalable 1042):    

<https://blindhelp.github.io/RadioSure%20portable%20version%202.2.1042.0.zip>

Lorsque je parle d'une version pseudo portable tout au long de ce post, il s'agit d'une version pseudo portable concoctée à partir du dossier "RadioSure" une fois l'installation effectuée via le Setup de l'application RadioSure, dans se cas la version utilisée est la 1042, que je viens de vous partager. Ce n'est pas une véritable version portable, qui peut être effectuée via le Setup de l'application RadioSure.    

Si vous avez déjà une version installable, vous trouverez le dossier RadioSure par défaut dans le chemin:    
`"C:\Program Files (x86)\RadioSure"`    
Si vous avez déjà une véritable version portable, vous trouverez le dossier RadioSure par défaut dans le chemin:    
`C:\Users\VotreNomUtilisateur\AppData\Local\RadioSure`    

Si vous n'avez pas encore le programme RadioSure et que vous avez téléchargé la version pseudo portable 1042 en archive Zip appelé:    
`RadioSure portable version 2.2.1042.0.zip`    
Créez préalablement un dossier appelé "RadioSure" et décompressé  tout le contenu trouvé dans l'archive Zip dans ledit dossier sur votre ordinateur...    

Celle-ci contient les dossiers / fichiers suivants (Il y a dix-huit éléments par défaut à la racine du dossier de RadioSure):    

1. Lang
2. Log
3. Skins
4. Stations
5. bass.dll
6. bass_aac.dll
7. bass_fx.dll
8. basswma.dll
9. lame_enc.dll
10. Mute.png
11. Next.png
12. Play.png
13. Prev.png
14. RadioSure.exe
15. RadioSure.png
16. Rec.png
17. Stop.png
18. Uninstall.exe

Note:    
Dans la version pseudo portable 1042 que j'ai construit à partir du dossier "RadioSure" une fois installé le programme RadioSure, dans le dossier appelé:    
`Stations`    
Nous trouverons les deux fichiers par défaut avant modification appelés:    
`stations.rsdx`    
`stations-2013-11-30.rsd`    

Dans le dossier RadioSure de la version instalable créée à partir du Setup de RadioSure ou dans le dossier de la version pseudo portable 1042, nous devons placer les deux fichiers appelés:    
`db-update.vbs (Fichier récupéré du dépôt ou de l'archive RB2RS-Database-Updater-main.zip)`    
`RB2RS-Database-Updater.bat (Fichier créé comme indiqué dans le README.md en anglais se trouvant dans l'archive: RB2RS-Database-Updater-main.zip)`    

Vous pouvez consulter la façon de lancer ce script VBS lisant mes explications ci-dessous. Merci.    

Note: Si vous avez toujours le fichier d'installation (Setup) du programme RadioSure, vous pouvez créer une version portable en cochant la case à cocher appelée:    
`Install as Portable`    
La version portable créée à partir du Setup de RadioSure sera dans le chemin suivant:    
`C:\Users\VotreNomUtilisateur\AppData\Local\RadioSure`    

Ici, nous trouverons presque les mêmes éléments qui se trouvent dans la version installable ou la version pseudo portable 1042, sauf le fichier Uninstall.exe, En plus des fichiers RadioSure.xml et basshls.dll, donc, voici la liste des dossiers / fichiers trouvés dans la véritable version portable 1046:    

1. Lang
2. Log
3. Skins
4. Stations
5. bass.dll
6. bass_aac.dll
7. bass_fx.dll
8. basshls.dll
9. basswma.dll
10. lame_enc.dll
11. Mute.png
12. Next.png
13. Play.png
14. Prev.png
15. RadioSure.exe
16. RadioSure.png
17. RadioSure.xml
18. Rec.png
19. Stop.png

Note:    
Dans la version portable 1046 que j'ai construit à partir du Setup 1046 du programme RadioSure, dans le dossier appelé:    
`Stations`    
Nous trouverons les deux fichiers par défaut avant modification appelés:    
`stations.rsdx`    
`stations-2016-01-18.rsd`    

Dans le dossier RadioSure de la version portable créée à partir du Setup de RadioSure, nous devons placer les deux fichiers appelés:    
`db-update.vbs (Fichier récupéré du dépôt ou de l'archive RB2RS-Database-Updater-main.zip)`    
`RB2RS-Database-Updater.bat (Fichier créé comme indiqué dans le README.md en anglais se trouvant dans l'archive: RB2RS-Database-Updater-main.zip)`    

Vous pouvez consulter la façon de lancer ce script VBS lisant mes explications ci-dessous. Merci.    

Le terme "portable" signifie que vous pouvez utiliser ce logiciel à partir d'un support externe comme une clé USB, aucun fichier n'est installé sur windows.    

Avertissement: 💀  
Le blog de BlindHelp n'est pas responsable des dommages causés par une mauvaise utilisation du Script VBS et l'utilisation du script VBS est à vos risques et périls. ☠  


## RB2RS Database Updater dépôt sur GitHub

Le dépôt du script VBS est [par ici](https://github.com/GHbasicuser/RB2RS-Database-Updater)

La documentation du README.md (en anglais) à consulter en ligne est [par là](https://github.com/GHbasicuser/RB2RS-Database-Updater/blob/main/README.md)

Si vous souhaitez cloner le dépôt, vous pouvez utiliser la commande ci-dessous si vous utilisez Git:    

`https://github.com/GHbasicuser/RB2RS-Database-Updater.git`    

Si vous souhaitez télécharger le dépôt, vous pouvez télécharger l'archive Zip [en cliquant ici](https://github.com/GHbasicuser/RB2RS-Database-Updater/archive/refs/heads/main.zip)

Il me semble que la personne qui a réalisé ce script VBS est francophone, car les commentaires énumérés dans le code du dit script VBS sont en français. Peut-être qu'il existe un moyen de le contacter pour demander plus d'explications, à propos de son script VBS via son dépôt sur [GitHub.](https://github.com/GHbasicuser/RB2RS-Database-Updater)    

## Mise en place de la dernière mise à jour des stations de radio manuellement dans le programme RadioSure à partir de l'archive B2RS-Database-Updater-main.zip by BlindHelp

Une fois téléchargée  puis décompressée l'archive Zip appelé:    
`B2RS-Database-Updater-main.zip`    
Celui-ci contient le dossier appelé:    
`RB2RS-Database-Updater-main`    
Puis les fichiers suivants:    
`db-update.vbs`    
`README.md`    

## Très important!

Ces deux derniers fichiers nous les trouveront également si vous avez cloné le dépôt avec Git:    
`db-update.vbs`    
`README.md`    

Les explications qui suivent pour la mise en place du script VBS sont pour les deux situations, que vous ayez décompressé l'archive Zip indiquée ci-dessus ou si vous avez cloné le dépôt à l'aide de Git.    

Si vous n'avez encore pas installé Git, vous pouvez visiter la page en anglais ci-dessous afin de le télécharger.

### Télécharger Git.

<https://git-scm.com/downloads>

Sur cette page en anglais, vous devez rechercher le bon fichier correspondant à votre système utilisée, par exemple pour Linux, macOS et Windows.

Dans mon cas, comme j'ai un Windows 64 bits, donc, je dois télécharger puis installer Git pour Windows. Ci-dessous, je vous laisse le lien Git pour ce système d'exploitation.

### Git pour Windows.

L'application officielle pour Windows est disponible au téléchargement sur le site web de Git. Rendez-vous sur <http://git-scm.com/download/win> et le téléchargement démarrera automatiquement.

puis en bonus quelques tutoriels pour Git:

[git - petit guide - no deep shit!](http://rogerdudler.github.io/git-guide/index.fr.html)

Documentation pour GitHub en français (format .epub):

<https://github.com/progit/progit2-fr/releases/download/2.1.68/progit.epub>

Source de la documentation:

<https://git-scm.com/book/fr/v2>

## Mise en place du script VBS afin de télécharger et d'installer la dernière liste "non officielle" des stations de radios pour RadioSure by BlindHelp

À savoir que un script VBS est un fichier qui contient du VBScript ou des codes Visual Basic Scripting . Vous pouvez examiner le contenu du script VBS en ouvrant le fichier dans un éditeur de texte tel que le Bloc-notes de Windows ou vous pouvez exécuter le script VBS à travers intégré dans Windows Scripting Host de Windows.    

Fermez le programme RadioSure, si vous l'utilisez avant de faire ces manipulations.    
Ouvrez l'Emplacement du programme RadioSure, pour une version instalable (sous Windows 10) le chemin est:    
`"C:\Program Files (x86)\RadioSure"`    
Et si vous avez la véritable  version portable, de RadioSure et non la version pseudo  portable 1042 créée à partir du dossier RadioSure de  la version instalable 1042 comme c'est mon cas, le chemin de La véritable version portable (sous Windows 10) est:    
`"C:\Users\VotreNomUtilisateur\AppData\Local\RadioSure"`    
Et si vous avez téléchargé la version pseudo portable 1042 localisez le dossier RadioSure précédemment créé sur votre ordinateur...    
J'ai oublié de vous dire que la version pseudo portable 1042 crée un dossier RadioSure dans AppData\Local et y place le fichier RadioSure.xml.    
Eh bien, je recommande de mettre la version pseudo portable à la racine du  disque "C:\" (facultatif)    
Placez ce script:    
`db-update.vbs`    
à la racine du dossier RadioSure, puis vous pouvez le lancer avec un ".bat", un raccourci ou le planificateur de tâches.    

## Comment le lancer à partir d'un fichier ".bat"?

Un fichier "bat" est un format de fichier texte spécial avec une extension ".bat" qui exécute une série de commandes de l'invite de commande dans un ordre que vous spécifiez. Vous pouvez créer un fichier ".bat" qui automatise tout ce que vous pouvez faire dans une invite de commande.    
Dans notre cas, il sera pour télécharger et installer la dernière liste "non officielle" des stations de radios pour RadioSure en utilisant ce script VBS    

Pour créer un fichier "bat" sous Windows 10, il suffit de sélectionner le menu Démarrer, de taper Notepad, et de sélectionner l'application Notepad pour l'ouvrir. A l'intérieur de Notepad, vous devrez copier et coller Les trois lignes que vous trouverez ci-dessous dans le Bloc-notes.    

Si nous voulons lancer le script VBS à partir d'un fichier ".bat", nous devons créer préalablement le fichier utilisant un éditeur de texte tel que le Bloc-notes de Windows puis l'enregistrer comme nom:    
`RB2RS-Database-Updater.bat`    
Dans ce fichier, j'ai mis les trois lignes suivantes:    

```
@echo OFF
WScript.exe db-update.vbs
exit
```

Enregistrez le fichier dans un endroit de votre PC facile à trouver. De nombreuses personnes enregistrent leurs fichiers "bat" dans C:\temp ou dans un simple dossier situé à la racine C : niveau du lecteur.    
Il est important de changer le menu déroulant Enregistrer sous pour Tous les fichiers. Ensuite, assurez-vous d'ajouter ".bat" à la fin du nom du fichier.    

Une fois que vous avez créé le fichier appelé:    
`RB2RS-Database-Updater.bat`    
puis l'avoir mis à la racine du dossier du programme RadioSure au même niveau que le script VBS appelé:    
`db-update.vbs`    
Si vous avez une version instalable ou si vous avez téléchargé la version pseudo portable 1042 de RadioSure, vous devez également localiser le fichier appelé:    
`RadioSure.xml`    
Note:    
Le fichier RadioSure.xml dans une version instalable ou dans une véritable version portable de RadioSure se trouve dans le chemin:    
`C:\Users\VotreNomUtilisateur\AppData\Local\RadioSure\RadioSure.xml`    
La version pseudo portable 1042 crée un dossier radioSure dans AppData\Local et y place le fichier RadioSure.xml.    
Ce fichier doit être copier et coller au même niveau que les fichiers précédents, c'est-à-dire à la racine du dossier du programme RadioSure.     
Si vous avez une véritable version portable de RadioSure et non la version pseudo portable 1042 créée à partir du dossier RadioSure de  la version instalable 1042 comme c'est mon cas, le fichier RadioSure.xml il n'est pas nécessaire de le chercher ailleurs, puisque ce dossier le contient.    
Le script VBS essaie de modifier le fichier RadioSure.xml pour y mettre à jour la dernière date de la mise à jour des stations.    
À savoir que le fichier RadioSure.xml contient les paramètres que nous avons configurés dans le programme RadioSure, Comme les favoris que nous avons ajoutés, la langue et les autres changements que nous avons modifiés dans les options du programme.    
Au premier démarrage de RadioSure une radio est automatiquement diffusée, la langue du programme RadioSure sera en anglais par défaut, et aucun favori n'est présent.    
Pour changer la langue, il faut faire menu contextuel et choisir:    
`Language sous-menu`    
Faire une flèche droite et choisir:    
`French`    
En appuyant sur la touche Entrée    
Vous pouvez également taper la lettre f sur votre clavier et l'interface sera en français.    
En français c'est mieux... 😼    
Mais pour qu'il marche, il faut qu'une première mise à jour ait été faite.    
N'oubliez pas aussi que l'option "Rechercher une nouvelle version" dans le programme doit être cochée.    
Voir: Options, onglet Général.    
Si cette case n'est pas cochée:    

- Dans les paramètres, il faut cocher: Rechercher une nouvelle version (Redémarrer RadioSure)
- Écouter une station pendant au moins 5 minutes

Une fois cela fait, nous pouvons cliquer sur le fichier appelé:    
`RB2RS-Database-Updater.bat`    
La console Windows s'ouvre nous donnant le suivant message en anglais:    
`C:\WINDOWS\system32\cmd.exe terminal ligne 1 vide`    
`RB2RS-Database-Updater (db-update.vbs) dialogue RadioSure - The Radio Stations database has been updated.`    
`OK`    
Vous devez cliquer sur le bouton OK pour fermer cette boîte de dialogue.    
Cette boîte de dialogue affiche un message pour informer du succès de la mise à jour pendant 5 secondes.    

## Très important!

Si nous n'avons pas copié le fichier RadioSure.xml soit dans le dossier "RadioSure" de la version instalable ou de la version pseudo portable 1042, comme indiqué ci-dessus lorsque nous cliquons sur ce fichier ".bat", nous aurons un message d'erreur comme sui:    

```
---------------------------
Windows Script Host
---------------------------
Script :	C:\Program Files (x86)\RadioSure\db-update.vbs
Ligne :	94
Caract. :	1
Erreur :	Objet requis: 'nNode'
Code :	800A01A8
Source : 	Erreur d'exécution Microsoft VBScript

---------------------------
OK   
---------------------------
```

Vous devez cliquer sur le bouton OK pour fermer cette boîte de dialogue.    
Cependant, ne vous inquiétez pas mes amis, malgré ce message d'erreur tantôt dans la version instalable ou dans la version pseudo  portable 1042, le script VBS remplit sa fonction de téléchargement et d'installation de la dernière liste "non officielle" des stations de radios pour RadioSure    
Au moins cette erreur ne se produit pas si vous avez une véritable version portable de RadioSure et non la version pseudo  portable 1042 créée à partir du dossier RadioSure de  la version instalable 1042 comme c'est mon cas, le fichier RadioSure.xml il n'est pas nécessaire de le chercher ailleurs, puisque ce dossier le contient.    
Vous verrez les nouvelles modifications faites par le script VBS en allant au dossier:    
`Stations`    
Ici, vous trouverez l'archive Zip appelé:    
`Latest_RB2RS.zip`    
Puis vous trouverez aussi le nouveau fichier rsd,  dans mon cas, celui-ci s'appelle:    
`stations-2022-08-04.rsd`    
Note: Ces deux fichiers sont créés lors de l'exécution du script VBS    
Le script VBS supprime l'ancien fichier rsd lors de son exécution et  décompresse l'archive Latest_RB2RS.zip contenant le nouveau fichier rsd dans ce dossier.    
Bien sûr, si vous avez modifié l'ancien fichier rsd, vous pouvez le copier /le coller ailleurs sur votre ordinateur afin de le sauvegarder, au cas où, cela ne coûte rien!    
De toute façon nous pouvons contourner ce message d'erreur au prochain lancement du script VBS en copiant le fichier RadioSure.xml comme indiqué ci-dessus. Vous devez attendre au moins plus de 12 heures pour effectuer à nouveau l'action.    
Si vous êtes impatient, vous pouvez toujours effacer ces deux fichiers récemment créés lors de l'exécution du script VBS, en allant au dossier:    
`Stations`    
en sélectionnant les deux fichiers appelés:
`Latest_RB2RS.zip`    
`stations-2022-08-04.rsd`    
Note: La date contenue dans le nom du fichier .rsd peut varier en fonction de la date de ça mise à jour.    
Une fois ces deux fichiers supprimés, exécutez le script VBS comme expliqué ci-dessus pour recréer ces fichiers.
Une fois que vous avez fait cela, fermez le tout par Alt+F4!    
Vous pouvez maintenant lancer le programme RadioSure à partir de l'icône se trouvant sur le bureau si vous avez une version installée, ou à partir du fichier  exécutable de la version pseudo portable 1042 ou d'une véritable version portable, si vous n'avez pas créé de raccourci sur le bureau afin de profiter des stations de radio qui ont été mises à jour à partir du script VBS! Enjoy! 😏    
La cerise sur le gâteau!    
J'ai essayé en faisant une petite modification du script VBS comme expliqué ci-dessous, une fois mis soit dans la version instalable, dans la véritable version portable ou dans la version pseudo portable 1042 du programme RadioSure, le script VBS télécharge et installe la dernière liste "non officielle" des stations de radios pour RadioSure, puis grâce à cette petite modification lance le programme RadioSure lorsque le script VBS se termine.    
Pour lancer RadioSure après la mise à jour, il faut modifier la ligne:    
`RadioSure = 0 'Put 1 to start RadioSure at the end of the script, otherwise 0'`    
comme ceci:    
`RadioSure = 1 'Put 1 to start RadioSure at the end of the script, otherwise 0'`    

Cela se fait dans le fichier db-update.vbs se trouvant à la racine du dossier de RadioSure    
Faisant cette modification dans cette ligne en modifiant la valeur 0 en 1 une fois le script terminé, le programme RadioSure est lancé!    

Eh bien, une fois ces fichiers placés à la racine du dossier de RadioSure, je peux cliquer sur le fichier .bat, ensuite le script VBS téléchargera et installera la dernière liste non officielle des stations de radios pour RadioSure :)    
Si la ligne a été modifiée dans le script VBS comme indiqué ci-dessus, le programme RadioSure sera lancé à la fin du script. 😊    

# Demande de l'aide by BlindHelp

Eh bien, dans le fichier README.md en anglais, je ne comprends pas comment créer un raccourci sur le bureau pour lancer le script VBS, c'est-à-dire si nous créons un raccourci sur le bureau à partir du fichier .vbs ou du fichier .bat, ceci n'est pas très clair en tout cas pour moi, ni la façon de l'exécutez depuis le planificateur de tâches... 😕 C'est pourquoi je demande à mes amis développeurs ou qui ont une connaissance en programmation de script VBS, de bien vouloir s'il vous plaît m'aider à compléter ces deux parties manquantes Et je les mettrai dans ce post avec leur crédit respectif, mais pour une meilleure information, vous pouvez lire le fichier README.md en anglais qui traite dudit script VBS 😔 Please Help me! Thanks!    
Tous les conseils sont les bienvenues! 😃    
Merci d'avance à mes amis développeurs et les autres pour votre aide, vous pouvez me contacter par e-mail, merci encore pour votre future collaboration dans cet article. (handshake)    

## Télécharger l'archive latest.zip manuellement

Si vous n'êtes pas programmeur ou ne comprenez pas comment faire fonctionner le script VBS, vous avez la possibilité de télécharger le dernier archive Zip [en cliquant ici](http://82.66.77.189:8080/latest.zip)

En cliquant toujours sur le lien ci-dessus, vous obtiendrez le dernier archive Zip contenant la dernière mise à jour des stations de radio pour le programme RadioSure, pour cela, suivez les instructions ci-dessous pour une bonne utilisation.    

## Mise en place de la dernière mise à jour des stations de radio manuellement dans le programme RadioSure à partir de l'archive latest.zip by BlindHelp

Une fois téléchargé l'archive Zip appelé:    
`latest.zip`    
Une fois que vous l'avez décompressé, vous obtiendrez le fichier rsd (selon la dernière date de cette mise à jour disponible), par exemple, dans mon cas j'obtiens le fichier rsd appelé:    
`stations-2022-08-04.rsd`    
Fermez le programme RadioSure, si vous l'utilisez avant de faire ces manipulations.    
Ouvrez l'Emplacement du programme RadioSure, dans une version instalable (sous Windows 10) le chemin est:    
`"C:\Program Files (x86)\RadioSure"`    
Et si vous avez la véritable  version portable, de RadioSure et non la version pseudo portable 1042 créée à partir du dossier RadioSure de  la version instalable 1042 comme c'est mon cas, le chemin de La véritable version portable (sous Windows 10) est:    
`"C:\Users\VotreNomUtilisateur\AppData\Local\RadioSure"`    
Et si vous avez la version pseudo portable 1042, localisez le dossier RadioSure précédemment créé sur votre ordinateur...    
Eh bien, je recommande de mettre la version pseudo portable à la racine du  disque "C:\" (facultatif)    
Ensuite, ouvrez le dossier appelé:    
`Stations`    
Il est probable que vous ayez un ancien fichier rsd dans ledit dossier.    
Dans mon cas, j'avais un fichier rsd avec une ancienne date appelé:    
`stations-2013-11-30.rsd`    
Eh bien, comme il y avait des liens de certaines stations qui ne fonctionnaient pas, la seule chose que j'ai faite était de supprimer ce fichier rsd de ce dossier et de placer par un copier / coller le nouveau fichier rsd appelé:    
`stations-2022-08-04.rsd`    
Bien sûr, si vous avez modifié l'ancien fichier rsd, vous pouvez le copier /le coller ailleurs sur votre ordinateur afin de le sauvegarder, au cas où, cela ne coûte rien!    
Une fois que vous avez fait cela, fermez le tout par Alt+F4!    
Vous pouvez maintenant lancer le programme RadioSure à partir de l'icône se trouvant sur le bureau si vous avez une version installée, ou à partir du fichier  exécutable de la version pseudo portable 1042 ou d'une véritable version portable, si vous n'avez pas créé de raccourci sur le bureau afin de profiter des stations de radio qui ont été mises à jour à partir de l'archive latest.zip! Enjoy! 😏    

## Remerciements

Je remercie à mon ami développeur qui m'a aidé en coulisse 🙇, lui se reconnaîtra j'en suis sûre) si relit ce post! 😉    

Nous remercions encore @GHbasicuser pour le partage de son script VBS afin de télécharger et d'installer la dernière liste "non officielle" des stations de radios pour RadioSure! (handshake)    
Voilà, j'espère que vous prendrez autant de plaisir que j'en ai pris à l'utiliser. 😼    
J'espère que vous l'apprécierez et que ceci  soit très utile pour vous!    
À la prochaine sur un autre post!     
@+    
BlindHelp!    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouvel espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---
