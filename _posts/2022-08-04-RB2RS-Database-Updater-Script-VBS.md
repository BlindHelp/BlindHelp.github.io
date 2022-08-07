---
title: Script VBS afin de télécharger et d'installer la dernière liste "non officielle" des stations de radios pour RadioSure
permalink: "/RB2RS-Database-Updater-Script-VBS/"
layout: post
author: BlindHelp
---

<footer>Publié le Jeudi 4 Août 2022</footer>

Coucou mes amis du blog de BlindHelp!    
Aujourd'hui, je  vous apporte un script VBS afin de télécharger et d'installer la dernière liste "non officielle" des stations de radios pour RadioSure! Merci à @GHbasicuser (aka PhiliWeb) (handshake)    

Ce script VBS permet de télécharger et d'installer la dernière liste "non officielle" des stations de radios pour RadioSure! 😄    

Cette liste de stations est une conversion de la base ["Radio-Browser.info"](https://www.radio-browser.info/)    

## ATTENTION! 🔐

À savoir que la page officielle du programme [RadioSure](http://www.radiosure.com/downloadz/downloadz-select/) est fermée définitivement et l'URL pour télécharger la dernière mise à jour de la liste officielle des stations de radios pour RadioSure également! 😥 puisque nous avons ce script VBS qui répond à cette dernière fonction! :)    

Je pense que c'était des Russes et pour le thème de la guerre, ils ont disparu et ne fournit plus de mises à jour. :(    

Cependant, pour les amis qui n'ont pas le programme RadioSure, je leur donne un lien de téléchargement plus bas via mon espace sur BlindHelp.github.io afin qu'ils puissent le télécharger en version portable (Concocter à partir de ma version instalable):    

<https://blindhelp.github.io/RadioSure%20portable%20version%202.2.1042.0.zip>

Une fois téléchargée  puis décompressée l'archive Zip appelé:    
`RadioSure portable version 2.2.1042.0.zip`    
Créez  préalablement un dossier appelé "RadioSure" et placez tout le contenu trouvé dans le fichier Zip téléchargé précédemment.    

Avertissement: 💀  
Le blog de BlindHelp n'est pas responsable des dommages causés par une mauvaise utilisation du Script VBS et l'utilisation du script VBS est à vos risques et périls. ☠  


## RB2RS Database Updater dépôt sur GitHub

Le dépôt du script VBS est [par ici](https://github.com/GHbasicuser/RB2RS-Database-Updater)

La documentation du README.md (en anglais) à consulter en ligne est [par là](https://github.com/GHbasicuser/RB2RS-Database-Updater/blob/main/README.md)

Si vous souhaitez cloner le dépôt, vous pouvez utiliser la commande ci-dessous si vous utilisez Git:    

`https://github.com/GHbasicuser/RB2RS-Database-Updater.git`    

Si vous souhaitez télécharger le dépôt, vous pouvez télécharger l'archive Zip [en cliquant ici](https://github.com/GHbasicuser/RB2RS-Database-Updater/archive/refs/heads/main.zip)

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

## Mise en place du script VBS afin de télécharger et d'installer la dernière liste "non officielle" des stations de radios pour RadioSure by BlindHelp

À savoir que un script VBS est un fichier qui contient du VBScript ou des codes Visual Basic Scripting . Vous pouvez examiner le contenu du script VBS en ouvrant le fichier dans un éditeur de texte tel que le Bloc-notes de Windows ou vous pouvez exécuter le script VBS à travers intégré dans Windows Scripting Host de Windows.    

Fermez le programme RadioSure, si vous l'utilisez avant de faire ces manipulations.    
Ouvrez l'Emplacement du programme RadioSure, (sous Windows 10) le chemin est:    
`"C:\Program Files (x86)\RadioSure"`    
Et si vous avez la version portable, localisez le dossier RadioSure précédemment créé...    
Placez ce script:    
`db-update.vbs`    
à la racine du dossier RadioSure, puis vous pouvez le lancer avec un ".bat", un raccourci ou le planificateur de tâches.    

Dans notre cas nous avons créé le fichier ".bat" comme nom:    
`RB2RS-Database-Updater.bat`    
Dans ce fichier, j'ai mis les trois lignes suivantes:    

```
@echo OFF
WScript.exe db-update.vbs
exit
```

Une fois que vous avez créé le fichier appelé:    
`RB2RS-Database-Updater.bat`    
puis l'avoir mis à la racine du dossier du programme au même niveau que le script VBS appelé:    
`db-update.vbs`    
Lorsque nous cliquons sur ce fichier ".bat", nous aurons un message d'erreur comme sui:    

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
Comme je ne suis pas programmeur, j'ignore Pourquoi ce message d'erreur est affiché, peut-être que le programme RadioSure ne peut pas être lancée à la fin du script VBS, Bien qu'il soit défini sur 1    
`RadioSure = 0 "mettre 1 pour démarrer  RadioSure à la fin du script, sinon 0"`    
J'ai essayé soit avec une version instalable et une version portable du programme RadioSure Et le message d'erreur apparaît dans les deux cas de figure.    
Ou peut-être que cela se produit pour une autre raison inconnue par mes soins... 😔    
Merci d'avance à mes amis développeurs ou qui ont une connaissance en programmation de script VBS, de bien vouloir s'il vous plaît m'aider à trouver une solution possible, mais pour une meilleure information, vous pouvez lire le fichier README.md en anglais qui traite dudit script VBS    
Cependant, ne vous inquiétez pas mes amis, malgré ce message d'erreur, le script VBS remplit sa fonction de téléchargement et d'installation de la dernière liste "non officielle" des stations de radios pour RadioSure    
Vous verrez cela  en allant au dossier:    
`Stations`    
Ici, vous trouverez l'archiveZip appelé:    
`Latest_RB2RS.zip`    
Puis vous trouverez aussi le nouveau fichier rsd,  dans mon cas, celui-ci s'appelle:    
`stations-2022-08-04.rsd`    
Note: Ces deux fichiers sont créés lors de l'exécution du script VBS    
Le script VBS supprime l'ancien fichier rsd lors de son exécution et  décompresse l'archive Latest_RB2RS.zip contenant le nouveau fichier rsd dans ce dossier.    
Bien sûr, si vous avez modifié l'ancien fichier rsd, vous pouvez le copier /le coller ailleurs sur votre ordinateur afin de le sauvegarder, au cas où, cela ne coûte rien!    
Une fois que vous avez fait cela, fermez le tout par Alt+F4!    
Vous pouvez maintenant lancer le programme RadioSure à partir de l'icône se trouvant sur le bureau si vous avez une version installée, ou à partir du fichier  exécutable de la version portable, si vous n'avez pas créé de raccourci sur le bureau afin de profiter des stations de radio qui ont été mises à jour à partir du script VBS! Enjoy! 😏    

## Télécharger l'archive latest.zip manuellement

Si vous n'êtes pas programmeur ou ne comprenez pas comment faire fonctionner le script VBS, vous avez la possibilité de télécharger le dernier fichier Zip [en cliquant ici](http://82.66.77.189:8080/latest.zip)

En cliquant toujours sur ce lien, vous obtiendrez le dernier fichier zip contenant la dernière mise à jour des stations de radio pour le programme RadioSure, pour cela, suivez les instructions ci-dessous pour une bonne utilisation.    

## Mise en place de la dernière mise à jour des stations de radio manuellement dans le programme RadioSure à partir de l'archive latest.zip by BlindHelp

Une fois téléchargé le fichier appelé:    
`latest.zip`    
Une fois que vous l'avez décompressé, vous obtiendrez le fichier rsd (selon la dernière date de cette mise à jour disponible), par exemple, dans mon cas j'obtiens le fichier rsd appelé:    
`stations-2022-08-04.rsd`    
Fermez le programme RadioSure, si vous l'utilisez avant de faire ces manipulations.    
Ouvrez l'Emplacement du programme RadioSure, (sous Windows 10) le chemin est:    
`"C:\Program Files (x86)\RadioSure"`    
Et si vous avez la version portable, localisez le dossier RadioSure précédemment créé...    
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

Nous remercions encore @GHbasicuser pour le partage de son script VBS afin de télécharger et d'installer la dernière liste "non officielle" des stations de radios pour RadioSure! (handshake)    
Voilà,    
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
