---
title: ToggleScreenReaders : basculer entre Jaws, NVDA et le Narrateur avec un seul raccourci-clavier Par Pierre-Louis R@RPTools
permalink: "/ToggleScreenReaders/"
layout: post
author: BlindHelp
---

<footer>Publié le Dimanche 28 Avril 2024 - Dernière mise à jour le Mercredi Ier Mai 2024</footer>

Coucou mes amis du blog de BlindHelp!    

Notre ami Pierre-Louis R@RPTools vient de nous créer une version bilingue   Français-Anglais de ToggleScreenReaders le Mercredi Ier Mai 2024.

Il détecte la langue de Windows en fonction de la langue du clavier.

Si la langue du clavier n'est pas en Français, le programme fonctionnera automatiquement Anglais.

Il a modifié les raccourcis-clavier par défaut pour qu'ils ne dépendent pas de la langue du clavier.

Ce nouvel utilitaire développé par Pierre-Louis R@RPTools publié le Dimanche 28 Avril 2024 est destiné à ceux qui souhaitent basculer rapidement entre deux lecteurs d'écran.

Ce n'est pas le premier utilitaire de ce genre mais celui-ci a l'avantage de basculer avec un seul raccourci-clavier et d'être étendu à de nouvelles versions de Jaws par vous-même.

Lisez la suite, le lien de téléchargement est dans le contenu de l'aide ci-dessous fourni par son auteur.

# ToggleScreenReaders : basculer entre Jaws, NVDA et le Narrateur avec un seul raccourci-clavier

ToggleScreenReader est un programme résident qui permet de basculer entre deux lecteurs d’écran en pressant Windows+Echappe. Ce raccourci-clavier et le duo de lecteurs d’écran à basculer sont configurables.

Les lecteurs décran supportés sont Jaws, NVDA et le Narrateur.

## Installation

* [Téléchargez ToggleScreenReaders.zip](https://rptools.org/?p=9550) ;
* Extrayez le fichier ToggleScreenReaders.zip vers un dossier (non protégé contre l’écriture, par exemple à la racine d’un de vos disques durs. Ne l’extrayez pas vers C:;
* Vous obtiendrez un dossier TogglleScreenReaders, placez-vous dans ce dossier ;
* Si vous souhaitez créer une icône sur le bureau, pressez entrée sur le fichier “Create desktop icon.vbs”.    
Ceci placera sur votre bureau une icône ToggleScreenReader qui peut être invoquée par le raccourci-clavier : AltGr+z ;    
* Si vous souhaitez que ToggleScreenReaders se lance automatiquement au démarrage de Windows, Pressez Entrée sur le fichier “Create startup icon.vbs” ;    
Pour supprimer l’icône de ce dossier plus tard, pressez Entrée sur : Go to startup folder. Ceci ouvrira le dossier de démarrage dans l’explorateur de fichiers ;    

## Configuration du duo de lecteurs d’écrans

Par défaut, la bascule s’effectue entre Jaws 2024 et NVDA;

Pour modifier ces programmes, par exemple remplacer Jaws2024 par Jaws 2022 :

* Lancez ToggleScreenReaders avec AltGr+z si ce n’est pas encore fait ;
* Pressez ensuite Control+Windows+Echappe pour ouvrir le fichier config.ini dans le bloc-notes ;
* Lisez les instructions qui se trouvent au-dessus des valeurs à modifier ;
* Modifiez la valeur de primary de manière à obtenir :    
`primary=Jaws2022.ini`    
* Pressez Control+S pour enregistrer le changement puis fermez le bloc-notes ;
* Note : Il est nécessaire ici de fermer le bloc-notes pour que ToggleScreenReaders soit averti qu’il doit redémarrer ;   
 
Restriction importante :    
Vous ne pouvez pas définir deux lecteurs décran de la même famille. Exemples non autorisés :    
* Primary=Jaws2024.ini et Secondary=Jaws2022.ini ;
* Primary=NVDA.ini et Secondary=NVDAPortable.ini ;    
Il n’est pas encore possible pour ToggleScreenReaders de connaître le chemin du processus en cours d’exécution. Pour Jaws, le nom du processus est toujours jfw.exe et pour NVDA, nvda.exe. Ceci est insuffisant pour faire la distinction.    
Note : un dialogue de configuration sera ajouté plus tard.    

## Configuration des raccourcis-clavier

Si le raccourci de bascule Windows+Echappe ne vous convient pas, vous pouvez le modifier comme suit :    
* Pressez Control+Windows+Echappe pour ouvrir config.ini dans le bloc-notes ,
* Dans le texte, Descendez jusqu’à [Hotkeys] ;
* Lisez les instructions, modifiez le raccourci, enregistrez le fichier puis fermez le bloc-notes ;
* Vous devez fermer le bloc-notes pour que ToggleScreenReaders redémarre et se réinitialise ;

Note : une page d’aide vous donne la liste des noms de touches utilisables ;

## Utilisation

* Lancez ToggleScreenReaders si ce n’est pas encore fait ;
* Pressez Windows+Echappe ou le raccourci que vous avez configuré pour basculer vers l’autre lecteur décran.

## Ajouter un nouveau lecteur d’écran

Si par exemple vous souhaitez ajouter Jaws 2025 aux lecteurs d’écran supportés, procédez comme suit :    
* Ouvrez le dossier ToggleScreenReaders à l’emplacement que vous avez choisi lors de son installation ;
* Entrez dans le sous-dossier nommé Readers ;
* Sélectionnez le fichier Jaws2024.ini ;
* Pressez Control+c pour le copier puis Control+v pour en coller une copie ;
* Renommez “Jaws2024 - Copie.ini” en “Jaws2025.ini” ;
* Pressez Entrée sur Jaws2025.ini pour l’ouvrir dans le bloc-notes ;
* Dans la valeur de StartCommand, remplacez 2024 par 2025 de manière à obtenir :    
`StartCommand=C:FilesScientific\2025.exe`    

Note : Si Freedom Scientifics a modifié ce modèle de chemin, remplacez-le par le nouveau chemin.

## Raccourcis-clavier par défaut

* Windows+Echappe : basculer vers l’autre lecteur d’écran ; Control+Windows+Echappe : modifier le fichier INI ;

---

Bonne découverte  de ce nouvel utilitaire ToggleScreenReaders ! 😉    
Nous remercions notre ami Pierre-Louis R@RPTools d'avoir partager cette information avec nous ! (handshake)    
Merci de faire un max de publicité. 😊    
@+    
BlindHelp    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouvel espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---
