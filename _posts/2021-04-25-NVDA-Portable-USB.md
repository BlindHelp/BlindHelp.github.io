---
title: Créer une copie portable de NVDA sur une clé USB
permalink: "/NVDA-Portable-USB/"
layout: post
author: BlindHelp
---

<footer>Publié le Dimanche 25 Avril 2021</footer>


Coucou mes amis du blog de BlindHelp!    
Voici toute la procédure de A à Z!    
Attention : Comme d’habitude, vous êtes seuls responsables de vos actes, le mode opératoire que je donne ici a fonctionné pour moi mais je ne saurais être tenu pour responsable en cas de pépins, vous êtes prévenus !    
Un gars de la liste de nvda en espagnol [Félix Couce Arcay](mailto:Felixcouce@hotmail.com) nous a donné les instructions afin de pouvoir créer une version portable de NVDA, et je les ai adaptés aux utilisateurs de NVDA en français, eh bien, les voici ci-dessous.    
Nous avons besoins d'une clé USB mémoire 8 GO / 16 GO    
Avoir une version installer de NVDA afin de créer la version portable.    

# Procédure de création: #
La premièr chose est de brancher la clé USB sur le port USB de notre ordinateur.    
Aller sur Ce PC (sous un Windows 10)    
Rechercher la clée USB    
Au préalable nous avons déja créé un dossier nommé NVDA afin de placer la copie portable de NVDA sur celui-ci, car comme vous le savez bien, lorsque vous créez une copie portable de NVDA, ce dossier n'est pas créé.    
Il est conseillé de n'avoir que cette clé USB avec le dossier NVDA à la racine de cette clé USB.    
Une fois le dossier NVDA créé, nous procéderons à la création d'une copie portable, comme expliqué ci-dessous.    

# Créer une Copie Portable: #
Si vous voulez créer votre copie depuis le paquet téléchargé, cliquez simplement sur le bouton "Créer une copie portable". Si vous avez déjà fermé ce dialogue ou si vous êtes dans une version installée, allez dans le menu NVDA, cliquez sur "Outils", et choisissez "Créer une copie portable".    
Le dialogue qui s'affiche vous permet de choisir où créer la copie portable. Celui-ci peut être un répertoire de votre disque dur, un chemin sur une clé USB ou un autre média portable. Vous pouvez choisir si oui ou non NVDA doit copier la configuration NVDA de l'utilisateur courant pour l'utiliser avec la copie portable nouvellement créée. Cette option n'est disponible que lorsque vous créez une copie portable de NVDA depuis une copie installée, pas quand vous créez une copie portable depuis le paquet téléchargé du lanceur. Cliquer sur "Continuer" créera la copie portable. Dès que la création est terminée, un message s'affiche. Cliquez sur "OK" pour fermer ce dialogue.    
Dans notre cas, nous devrons rechercher notre dossier NVDA déjà créé à la racine de cette clé USB à l'aide du bouton Parcourir.    
Une fois le dossier NVDA sélectionné, nous faisons entrée sur le bouton OK    
Note: si nous souhaitons copier toute notre configuration actuelle sur cette clée USB Nous devons utiliser la case à cocher:    
`Copier la configuration utilisateur courante case à cocher non coché Alt+u`    
(valeur par défaut)    
Une fois coché cette case à cocher nous pouvons utiliser notre même configuration utilisée dans notre version de NVDA installable, ce qui nous évitera de faire une configuration manuelle à partir de notre copie portable de NVDA.    
Ensuite nous avons la case à cocher :    
`Démarrer la nouvelle copie portable après création case à cocher non coché Alt+d`    
(valeur par défaut)    
Si cette case est coché, elle lancera notre copie portable de NVDA récemment  créée à partir de notre clé USB.    
Ensuite nous avons le bouton:    
`Continuer bouton Alt+c`    
Une fois appuyer sur ce bouton créera la copie portable.    
Dès que la création est terminée, un message s'affiche. Cliquez sur "OK" pour fermer ce dialogue.    
Nous aurons deux façons de démarrer NVDA à partir de cette copie portable.    
1. Pour démarrer la copie portable, rendez-vous dans le dossier où NVDA a été décompressé, et appuyez sur "Entrée" ou double-cliquez sur nvda.exe.     
2. À l'aveuglette:     
Vous pouvez taper `e:\NVDA` dans le dialogue "Exécuter" (Windows+r) puis appuyer sur "Entrée".    
Quand je me réfère à la lettre "E" est la lettre du lecteur USB, suivi de deux points et de la barre oblique inversée, et le nom du dossier NVDA tout en lettres majuscules.    
`e:\NVDA`    
Les lettres des lecteurs peuvent passer de la lettre "E" à la lettre "Y"    
La barre oblique inversée est faite en appuyant sur les touches:    
AltGR+8 (souligner) du clavier Alpha Numérique dans un clavier AZERTY (Clavier français).    
une fois ouvert le dossier NVDA    
Appuyer sur la lettre n pour être sur le fichier nvda.exe    
Appuyer sur Entrée et nous allons exécuter le programme NVDA dans cette version portable fraîchement créé.    

Auparavant, sous Windows XP nous pourrions utiliser un fichier Autorun.inf afin de lancer un programme donné dans ce cas précis, c'était le lecteur d'écran NVDA qui été exécuté à l'aide de ce fichier, pour le créer, suivez les instructions suivantes:    
1) Ouvrez votre éditeur de texte favori comme Notepad sous Windows 10 (Bloc-notes) par exemple.    
2) Copiez et collez le texte ci-dessous dans l'éditeur de texte.    


`[autorun]`    
`open=nvda.bat`    
`action=NVDA`    
`icon=NVDA\nvda.exe`    
`shell\NVDA="&NVDA"`    
`shell\NVDA\command=nvda.bat`    

3) Maintenant, sauvegardez et renommez le fichier: Autorun.inf    
4) Ajoutez ce fichier dans la racine de la clé, avec le fichier nvda.bat pour Démarrer  notre lecteur d'écran NVDA, pour le créer, suivez les instructions suivantes:    
1) Ouvrez votre éditeur de texte favori comme Notepad sous Windows 10 (Bloc-notes) par exemple.    
2) Copiez et collez le texte ci-dessous dans l'éditeur de texte.    


`@echo off`    
`start NVDA\nvda.exe`    

3) Maintenant, sauvegardez et renommez le fichier: nvda.bat    
4) Ajoutez ce fichier dans la racine de la clé, avec le fichier Autorun.inf récemment créé pour Démarrer  notre lecteur d'écran NVDA.    
Au préalable nous avons déja créé un dossier nommé NVDA a la racine du cd ou clé USB avec le contenu de la copie portable générée comme indiqué ci-dessus.    
Et nous avons mis ces deux fichiers créés Comme indiqué   ci-dessus au même niveau que le dossier NVDA à la racine du cd ou clé USB lequelle nous permetter d'exécuter NVDA au démarrage du CD ou clé USB.    
Bien sûr, maintenant ces les lecteurs amovibles qui sont utilisés, alors que  les CD de données sont  moins utilisés et surtout, ces données ont été écrites dans des CD réinscriptible (CDRW).     

Remarque: Pour les personnes qui possèdent actuellement un Windows 10, j'ai trouvé une astuce sur la toile:    
Vous connectez une clé USB à votre ordinateur. Et là, frustration suprême, rien ne se passe. Ou plutôt si, vous entendez un signal sonore qui vous fait supposer que la clé a bien été identifiée par Windows. Mais rien de plus : aucune notification, aucune ouverture de l’Explorateur de fichiers. Rassurez-vous, il n’est pas nécessaire de retourner à une version antérieure de Windows    
Vous pouvez lire cette article externe à propos de:    
[Windows 10 – Définir l’action à l’introduction d’une clé USB](https://www.mediaforma.com/windows-10-definir-laction-a-lintroduction-dune-cle-usb/)

Nous avons une autre alternative additionnelle, pour cela  je vais vous expliquer comment mettre en place simplement et rapidement un "Autorun" sur votre clé USB, ce qui vous permettra d’exécuter la nouvelle copie portable après création au démarrage de la clé, au moment où vous aurez branché votre clé USB sur votre Ordinateur.    
Pour cela rien de plus simple:    
1. Télécharger le  programme Usb Autorun  en cliquant sur [ce lien](https://pav-3dgc-origami.pagesperso-orange.fr/PB/TelechargementsPB/Usb_Autorun.zip)    
Nom de l'archive à télécharger:    
`Usb_Autorun.zip`    
Source de la page de téléchargement:    
[Oliv.fr.fm : PureBasic et 3D Games Creator](https://pav-3dgc-origami.pagesperso-orange.fr/PB/TelechargementsPB.htm)    
Usb Autorun permet de créer des autoruns sur tous types de supports amovibles tels que disques durs externes ou clefs USB, mais aussi des supports amovibles fonctionnant en FireWire. Le programme fonctionne sans installation, il suffit de le placer dans un répertoire.    
Avertissement: 💀    
Le blog de BlindHelp n'est pas responsable des dommages causés par une mauvaise utilisation du logiciel téléchargé  ni des informations ce trouvant sur le site Web dédié et l'utilisation du programmes téléchargé est à vos risques et périls. ☠    
2. Décompressez le dossier ZIP où vous voulez, puis copier le fichier "Usb Autorun.exe" dans le dossier "Démarrage"    
`C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp`    
Cette manipulation permet de lancer automatiquement le logiciel « Usb Autorun.exe » à chaque démarrage de Windows.    
3. Copier les fichiers fraîchement créés "Autorun.inf" et "nvda.bat" à la racine de la clé USB.    
"Autorun.inf": Fichier utilisé par le logiciel "Usb Autorun.exe" pour exécuter le fichier  nvda.bat dès la détection de ce fichier par le logiciel, en l’occurrence ici dès le branchement de la clé USB.    
4. Redémarrer le PC pour lancer le programme "Usb Autorun.exe" au démarrage de Windows    
Le programme se lancera à chaque démarrage de Windows, si vous voulez désinstaller complètement ce logiciel vous devrez le supprimer depuis le chemin:    
`C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp`    
5. Brancher la clé USB, puis la copie portable de NVDA se lancera.    
P.S.: Si malheureusement, rien ne se passe, ou plutôt notre copie portable de NVDA n'est pas lancée, nous devrons modifier le fichier "Autorun.inf" comme sui:    
1) Ouvrez votre éditeur de texte favori comme Notepad sous Windows 10 (Bloc-notes) par exemple.    
2) Copiez et collez le texte ci-dessous dans l'éditeur de texte.    
`nvda.bat`    
3) Maintenant, sauvegardez et renommez le fichier: Autorun.inf    
4) Ajoutez ce fichier dans la racine de la clé, avec le fichier nvda.bat pour Démarrer  notre lecteur d'écran NVDA    
"Autorun.inf": Fichier utilisé par le logiciel "Usb Autorun.exe" pour exécuter le fichier  nvda.bat dès la détection de ce fichier par le logiciel, en l’occurrence ici dès le branchement de la clé USB.    
Maintenant, je pense que vous devriez lancer la copie portable de NVDA sans aucun problème En effet maintenant il vous suffira simplement de brancher votre clé USB, attendre quelques secondes au maximum et entendre le démarrage de la nouvelle copie portable de NVDA!    
Et si toujours la copie portable NVDA n'est pas exécutée, nous reviendrons pour modifier le fichier "Autorun.inf" comme sui:    
1) Ouvrez votre éditeur de texte favori comme Notepad sous Windows 10 (Bloc-notes) par exemple.    
2) Copiez et collez le texte ci-dessous dans l'éditeur de texte.    
`NVDA\nvda.exe`    
3) Maintenant, sauvegardez et renommez le fichier: Autorun.inf    
4) Ajoutez ce fichier dans la racine de la clé puis et éliminer le fichier nvda.bat qui est dans la racine de la clé comme il n'a pas fonctionné pour lancer notre copie portable de NVDA, cela ce n'est pas grave.    
Nous avons fait différemment, donc à la dure!    
Sachez aussi que ces méthodes n'ont pas été testées à fond!    
Mais cette dernière méthode utilisant ce programme Usb Autorun est purement expérimental! Donc, prudence! ☠    
Voilà ! Vous pouvez maintenant ne plus vous soucier de la fastidieuse façon de faire fonctionner une copie portable de NVDA depuis une clé USB grâce à ce tutoriel! :)    
En attendant de tout mon cœur que ces astuces fonctionnent sur votre ordinateur avec une copie portable de notre lecteur NVDA! 😉    
@+    
BlindHelp!    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouveau espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---