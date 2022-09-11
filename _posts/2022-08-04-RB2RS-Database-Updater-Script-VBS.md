---
title: Script VBS afin de télécharger et d'installer la dernière liste "non officielle" des stations de radios pour RadioSure
permalink: "/RB2RS-Database-Updater-Script-VBS/"
layout: post
author: BlindHelp
---

<footer>Publié le Jeudi 4 Août 2022 - Dernière mise à jour le Vendredi 9 Septembre 2022</footer>

Coucou mes amis du blog de BlindHelp!    
Aujourd'hui, je  vous apporte un script VBS afin de télécharger et d'installer la dernière liste "non officielle" des stations de radios pour RadioSure! Merci à @GHbasicuser (aka PhiliWeb) (handshake)    

Je remercie aussi à mon ami développeur qui m'a aidé en coulisse en donnant les explications qui suivent pour la mise en place du script VBS et d'autres informations utiles que j'ai mise dans ce post! 😉    

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

Mon test du script VBS que je vous apporte aujourd'hui a été effectué avec la version installable et la version portable 1046 du programme RadioSure, ceci sous Windows 10 en 64 bits    

Je vous prie instamment de lire cet article dans sa totalité pour le bon fonctionnement du script VBS, merci.    

## ATTENTION! 🔐

`404`    
`NOT FOUND`    

À savoir que la page officielle du programme [RadioSure](http://www.radiosure.com/downloadz/downloadz-select/) est fermée définitivement et l'URL pour télécharger la dernière mise à jour de la liste officielle des stations de radios pour RadioSure également! 😥 puisque nous avons ce script VBS qui répond à cette dernière fonction! :)    

Je pense que c'était des Russes et pour le thème de la guerre, ils ont disparu et ne fournit plus de mises à jour. :(    

Si vous avez déjà la version installable 1046, vous trouverez le dossier RadioSure par défaut dans le chemin:    
`C:\Users\VotreNomUtilisateur\AppData\Local\RadioSure`    

Si vous avez déjà la version portable 1046, vous trouverez le dossier RadioSure par défaut dans le chemin:    
`C:\Users\VotreNomUtilisateur\AppData\Local\RadioSure`    

Les applications 64 bits sont généralement installées dans le dossier "C:\Program Files", tandis que les applications 32 bits s'installent elles-mêmes dans le dossier "C:\Program Files (x86)".    

Si je ne me trompe pas, l'application RadioSure est une application en 32 bits et non une application en 64 bits.    

Mais dans le cas de la version instalable  ou portable 1046 de RadioSure, le dossier RadioSure il sera dans le suivant chemin par défaut:    
`C:\Users\VotreNomUtilisateur\AppData\Local\RadioSure`    

La seule différence entre une version installée et une portable est le raccourci sur le bureau, mais l'emplacement proposé par défaut du dossier RadioSure est le même.    

Si vous avez déjà une version précédente à la 1046, dans ce cas là, elle peut être dans le chemin suivant:    
`"C:\Program Files (x86)\RadioSure"`    

Note: Si vous avez toujours le fichier d'installation (Setup) du programme RadioSure pour la version 1046, vous pouvez créer une version portable en cochant la case à cocher appelée:    
`Install as Portable`    
La version portable 1046 créée à partir du Setup de RadioSure sera dans le chemin suivant:    
`C:\Users\VotreNomUtilisateur\AppData\Local\RadioSure`    

Je suppose que si vous avez une autre version avant la 1046, de RadioSure, il sera dans un chemin différent, par exemple:    
`"C:\Program Files (x86)\RadioSure"`    

Cependant, si vous ne l'avez pas encore cette version 1046 de RadioSure, vous pouvez toujours la télécharger en archive Zip depuis mon espace via GitHub [en cliquant ici](https://blindhelp.github.io/RadioSure-2.2.1046-setup.zip)    
Nom de l'archive à télécharger:    
`RadioSure-2.2.1046-setup.zip`    

Note:    

Tantôt dans le dossier RadioSure  de la version instalable ou portable, 1046 vous trouverez le dossier appelé:    
`Stations`    
Nous trouverons les deux fichiers par défaut avant modification appelés:    
`stations.rsdx`    
`stations-2016-01-18.rsd`    

Dans le dossier RadioSure de la version instalable / portable 1046 créée à partir du Setup de RadioSure, nous devons placer les deux fichiers appelés:    
`db-update.vbs (Fichier récupéré du dépôt ou de l'archive RB2RS-Database-Updater-main.zip)`    
`RB2RS-Database-Updater.bat (Fichier créé comme indiqué dans le README.md en anglais conseillé par l'auteur du script VBS se trouvant dans l'archive: RB2RS-Database-Updater-main.zip)`    

Note: Ce fichier ".bat" n'inclut pas la légère modification apportée par mon ami développeur pour un meilleur fonctionnement du Script VBS.    

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

Si vous n'avez encore pas installé Git, vous pouvez consulter [un de mes articles](https://blindhelp.github.io/GitHub-CLI/) où j'en parle afin de le télécharger.    

## Mise en place du script VBS afin de télécharger et d'installer la dernière liste "non officielle" des stations de radios pour RadioSure by BlindHelp

À savoir que un script VBS est un fichier qui contient du VBScript ou des codes Visual Basic Scripting . Vous pouvez examiner le contenu du script VBS en ouvrant le fichier dans un éditeur de texte tel que le Bloc-notes de Windows ou vous pouvez exécuter le script VBS à travers intégré dans Windows Scripting Host de Windows.    

Fermez le programme RadioSure, si vous l'utilisez avant de faire ces manipulations.    
Ouvrez l'Emplacement du programme RadioSure, pour une version instalable 1046 (sous Windows 10) le chemin est:    
`"C:\Users\VotreNomUtilisateur\AppData\Local\RadioSure"`    

puis pour une version portable 1046 (sous Windows 10) le chemin est:    
`"C:\Users\VotreNomUtilisateur\AppData\Local\RadioSure"`    

Je suppose que si vous avez une autre version de RadioSure avant la 1046, il sera dans un chemin différent, par exemple:    
`"C:\Program Files (x86)\RadioSure"`    
Placez ce script:    
`db-update.vbs`    
à la racine du dossier RadioSure, puis vous pouvez le lancer avec un ".bat", un raccourci ou le planificateur de tâches.    

## Comment le lancer à partir d'un fichier ".bat"?

Un fichier "bat" est un format de fichier texte spécial avec une extension ".bat" qui exécute une série de commandes de l'invite de commande dans un ordre que vous spécifiez. Vous pouvez créer un fichier ".bat" qui automatise tout ce que vous pouvez faire dans une invite de commande.    
Dans notre cas, il sera pour télécharger et installer la dernière liste "non officielle" des stations de radios pour RadioSure en utilisant ce script VBS    

Je pense qu'il n'y a pas besoin de créer un fichier ".bat", puisqu'il est possible de lancer directement ce script VBS, cependant, je vous donne cette procédure à titre d'information.    

Pour créer un fichier "bat" sous Windows 10, il suffit de sélectionner le menu Démarrer, de taper Notepad, et de sélectionner l'application Notepad pour l'ouvrir. A l'intérieur de Notepad, vous devrez copier et coller Les trois lignes que vous trouverez ci-dessous dans le Bloc-notes.    

Vous pouvez également pressez Windows+R et dans la boîte de dialogue exécutez, collez la ligne suivante avant d'appuyer sur entrée    
`%windir%\system32\notepad.exe`    

Si nous voulons lancer le script VBS à partir d'un fichier ".bat", nous devons créer préalablement le fichier utilisant un éditeur de texte tel que le Bloc-notes de Windows puis l'enregistrer comme nom, par exemple:    
`RB2RS-Database-Updater.bat`    

Dans ce fichier, j'ai mis les trois lignes suivantes, comme conseillé par l'auteur du script VBS avec une légère modification apportée par mon ami développeur pour un meilleur fonctionnement du Script VBS:

```
@echo OFF
%WINDIR%\System32\CScript.exe "cheminDuDossierDeRadioSure\db-update.vbs"
exit
```

Enregistrez le fichier dans un endroit de votre PC facile à trouver. De nombreuses personnes enregistrent leurs fichiers "bat" dans C:\temp ou dans un simple dossier situé à la racine C : niveau du lecteur.    
Il est important de changer le menu déroulant Enregistrer sous pour Tous les fichiers. Ensuite, assurez-vous d'ajouter ".bat" à la fin du nom du fichier.    

Une fois que vous avez créé le fichier ".bat" comme nom appelé, par exemple:    
`RB2RS-Database-Updater.bat`    
puis l'avoir mis à la racine du dossier du programme RadioSure au même niveau que le script VBS appelé:    
`db-update.vbs`    
Si vous avez une version instalable de RadioSure précédente à la 1046, vous devez également localiser le fichier appelé:    
`RadioSure.xml`    
Note:    
Le fichier RadioSure.xml dans une version instalable de RadioSure se trouve dans le chemin:    
`C:\Users\VotreNomUtilisateur\AppData\Local\RadioSure\RadioSure.xml`    
Ce fichier doit être copier et coller au même niveau que les fichiers précédents, c'est-à-dire à la racine du dossier du programme RadioSure, ceci pour une version précédente à la 1046.    
Cependant, si vous avez une version instalable / portable 1046 de RadioSure le fichier RadioSure.xml il n'est pas nécessaire de le chercher ailleurs, puisque ce dossier le contient, car il est créé en lançant l'exécutable RadioSure.exe la première fois.    
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

Une fois cela fait, nous pouvons cliquer sur le fichier comme nom appelé, par exemple:    
`RB2RS-Database-Updater.bat`    
La console Windows s'ouvre nous donnant le suivant message en anglais:    
`C:\WINDOWS\system32\cmd.exe terminal ligne 1 vide`    
`RB2RS-Database-Updater (db-update.vbs) dialogue RadioSure - The Radio Stations database has been updated.`    
`OK`    
Vous devez cliquer sur le bouton OK pour fermer cette boîte de dialogue.    
Cette boîte de dialogue affiche un message pour informer du succès de la mise à jour pendant 5 secondes.    

## Très important!

Si nous n'avons pas copié le fichier RadioSure.xml dans le dossier "RadioSure" de la version instalable précédente à la 1046 comme indiqué ci-dessus lorsque nous cliquons sur ce fichier ".bat", nous aurons un message d'erreur comme sui:    

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
Cependant, ne vous inquiétez pas mes amis, malgré ce message d'erreur dans la version instalable précédente à la 1046, le script VBS remplit sa fonction de téléchargement et d'installation de la dernière liste "non officielle" des stations de radios pour RadioSure    
Au moins cette erreur ne se produit pas si vous avez une version instalable ou portable 1046 de RadioSure et le fichier RadioSure.xml il n'est pas nécessaire de le chercher ailleurs, puisque ce dossier le contient, car il est créé en lançant l'exécutable RadioSure.exe la première fois.    
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
Vous pouvez maintenant lancer le programme RadioSure à partir de l'icône se trouvant sur le bureau si vous avez une version installée, ou à partir du fichier  exécutable de la version portable, si vous n'avez pas créé de raccourci sur le bureau afin de profiter des stations de radio qui ont été mises à jour à partir du script VBS! Enjoy! 😏    
La cerise sur le gâteau!    
J'ai essayé en faisant une petite modification du script VBS comme expliqué ci-dessous, une fois mis soit dans la version instalable ou portable du programme RadioSure, le script VBS télécharge et installe la dernière liste "non officielle" des stations de radios pour RadioSure, puis grâce à cette petite modification lance le programme RadioSure lorsque le script VBS se termine.    
Pour lancer RadioSure après la mise à jour, il faut modifier la ligne:    
`RadioSure = 0 'Put 1 to start RadioSure at the end of the script, otherwise 0'`    
comme ceci:    
`RadioSure = 1 'Put 1 to start RadioSure at the end of the script, otherwise 0'`    

Cela se fait dans le fichier db-update.vbs se trouvant à la racine du dossier de RadioSure    
Faisant cette modification dans cette ligne en modifiant la valeur 0 en 1 une fois le script terminé, le programme RadioSure est lancé!    

Eh bien, une fois ces fichiers placés à la racine du dossier de RadioSure, je peux cliquer sur le fichier ".bat", ensuite le script VBS téléchargera et installera la dernière liste non officielle des stations de radios pour RadioSure :)    
Si la ligne a été modifiée dans le script VBS comme indiqué ci-dessus, le programme RadioSure sera lancé à la fin du script. 😊    

J'ai oublié de dire que si vous avez activé le lancement du programme RadioSure à la fin du script VBS, vous devrez modifier dans les paramètres du programme RadioSure l'option "Autoriser une seule instance", pour cela, vous devez faire menu contextuel et aller aux Options, puis onglet Avancées puis faire plusieurs fois Tab jusqu'à l'option appelée:    
`Allow only one instance case à cocher non coché (par défaut)`    
Faire barre d'espace pour cocher cette option, puis Tab jusq'au bouton OK, de cette façon il ne s'ouvrira pas plusieurs instances du programme RadioSure à la fin du script VBS    

## Comment le lancer à partir du script ".vbs" en créant un raccourci sur le bureau?

À savoir avant tout que:     

Un script écrit en VBS est un fichier de commandes. Il doit être interprété pour être utilisable.    
Il existe 2 interpréteurs : CSCRIPT.EXE et WSCRIPT.EXE    

Ils ont tous les deux les mêmes capacités d'interprétation, la différence résidant uniquement dans l'interface.    

CSCRIPT.EXE Opère en mode texte.    
Les messages apparaissent dans une Console. A l'intérieur de fichiers de commandes (.bat ou .cmd) traitements automatiques, sans intervention.    

WSCRIPT.EXE Opère en interface graphique.    
Les messages apparaissent dans des fenêtres (Window) Lorsque qu'une interaction avec l'utilisateur.    

Je pense qu'il n'est pas nécessaire de passer par un fichier ".bat" et d'associer un raccourci à ce fichier pour fair la mise à jour des stations.    
Un simple raccourci sur le bureau créé comme ceci:    

* Copier le fichier db-update.vbs dans le dossier RadioSure.    
* Sélectionner ce fichier et avec le menu contextuel  choisir "Envoyer vers", Bureau (créer un raccourci).    
* Sur le bureau sélectionner ce raccourci et ouvrir ses propriétés.    
* Dans le champ "cible", ajouter au début `"%WINDIR%\System32\WScript.exe" (sans les guillemets). Ce sera suivi d'un espace "cheminDuDossierDeRadioSure\db-update.vbs"`    
Que se passerait-il si au début je ne mets pas cela?    
En faisant cela,  on laisse Windows utiliser le programme par défaut associé à l'extension .vbs.    
Je pense qu'il est préférable d'indiquer ce programme dans la commande.    
* Activer le bouton "Avancés" et cocher la case "Exécuter en tant qu’administrateur".    
L'obligation d'exécuter en tant qu' administrateur n'est obligatoire que si le dossier RadioSure se trouve dans `"C:\Program Files"`, (avec ou sans x86).    
Mais avec la 1046, ce n'est pas le cas si on ne change pas le chemin d'installation par défaut.    
Dans tous les cas, cela ne coute rien de faire Exécuter en tant qu'administrateur.    
* Valider.    

Ci-dessous, je vous donne quelques exemples des chemins possibles pour les propriétés de raccourci:    

Par exemple, si le programme RadioSure est en version portable et instalable 1046, les propriétés du raccourci sont les suivants:    
`Sible: %WINDIR%\System32\WScript.exe "C:\Users\VotreNomUtilisateur\AppData\Local\RadioSure\db-update.vbs"`    
`Démarrer dans: "C:\Users\VotreNomUtilisateur\AppData\Local\RadioSure"`    

Par exemple, si le programme RadioSure est en version instalable précédente à la 1046, les propriétés du raccourci sont les suivants:    
`Sible: %WINDIR%\System32\WScript.exe "C:\Program Files (x86)\RadioSure\db-update.vbs"`    
`Démarrer dans: "C:\Program Files (x86)\RadioSure"`    

Par exemple, si le programme RadioSure est à la racine du lecteur `C:\RadioSure` les propriétés du raccourci sont les suivants:    
`Sible: %WINDIR%\System32\WScript.exe "C:\RadioSure\db-update.vbs"`    
`Démarrer dans: C:\RadioSure`    

Une fois cette modification effectuée dans ce raccourci qui est sur le bureau, une fois lancé, vous donnera le message suivant:    
`RB2RS-Database-Updater (db-update.vbs) dialogue RadioSure - The Radio Stations database has been updated.`    
Si la ligne a été modifiée dans le script VBS comme indiqué ci-dessus, le programme RadioSure sera lancé à la fin du script. 😊    

## Télécharger l'archive latest.zip manuellement

Si vous n'êtes pas programmeur ou ne comprenez pas comment faire fonctionner le script VBS, vous avez la possibilité de télécharger le dernier archive Zip [en cliquant ici](http://82.66.77.189:8080/latest.zip)

En cliquant toujours sur le lien ci-dessus, vous obtiendrez le dernier archive Zip contenant la dernière mise à jour des stations de radio pour le programme RadioSure, pour cela, suivez les instructions ci-dessous pour une bonne utilisation.    

## Mise en place de la dernière mise à jour des stations de radio manuellement dans le programme RadioSure à partir de l'archive latest.zip by BlindHelp

Une fois téléchargé l'archive Zip appelé:    
`latest.zip`    
Une fois que vous l'avez décompressé, vous obtiendrez le fichier rsd (selon la dernière date de cette mise à jour disponible), par exemple, dans mon cas j'obtiens le fichier rsd appelé:    
`stations-2022-08-04.rsd`    
Fermez le programme RadioSure, si vous l'utilisez avant de faire ces manipulations.    
Ouvrez l'Emplacement du programme RadioSure, pour une version instalable 1046 (sous Windows 10) le chemin est:    
`"C:\Users\VotreNomUtilisateur\AppData\Local\RadioSure"`    
puis pour une version portable 1046 (sous Windows 10) le chemin est:    
`"C:\Users\VotreNomUtilisateur\AppData\Local\RadioSure"`    
Si vous avez déjà une version précédente à la 1046, dans ce cas là, elle peut être dans le chemin suivant:    
`"C:\Program Files (x86)\RadioSure"`    
Ensuite, ouvrez le dossier appelé:    
`Stations`    
Il est probable que vous ayez un ancien fichier rsd dans ledit dossier.    
Dans mon cas, j'avais un fichier rsd avec une ancienne date appelé:    
`stations-2013-11-30.rsd`    
Eh bien, comme il y avait des liens de certaines stations qui ne fonctionnaient pas, la seule chose que j'ai faite était de supprimer ce fichier rsd de ce dossier et de placer par un copier / coller le nouveau fichier rsd appelé:    
`stations-2022-08-04.rsd`    
Bien sûr, si vous avez modifié l'ancien fichier rsd, vous pouvez le copier /le coller ailleurs sur votre ordinateur afin de le sauvegarder, au cas où, cela ne coûte rien!    
Une fois que vous avez fait cela, fermez le tout par Alt+F4!    
Vous pouvez maintenant lancer le programme RadioSure à partir de l'icône se trouvant sur le bureau si vous avez une version installée, ou à partir du fichier  exécutable de la version portable, si vous n'avez pas créé de raccourci sur le bureau afin de profiter des stations de radio qui ont été mises à jour à partir de l'archive latest.zip! Enjoy! 😏    

## Remerciements

Je remercie encore à mon ami développeur qui m'a aidé en coulisse 🙇, lui se reconnaîtra j'en suis sûre) si relit ce post! 😉    

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
