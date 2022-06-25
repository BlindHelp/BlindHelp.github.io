---
title: Sauvegarder vos drivers avec Windows 10 en invite de commandes en mode administrateur
permalink: "/sauvegarder-drivers-en-ligne-de-commande-administrateur/"
layout: post
author: BlindHelp
---

<footer>Publié le Vendredi 24 Juin 2022</footer>

Coucou mes amis du blog de BlindHelp!    
Aujourd'hui, je  vous apporte une astuce afin de sauvegarder vos drivers avec Windows 10 en invite de commandes en mode administrateur.     

Avertissement: 💀  
Le blog de BlindHelp n'est pas responsable des dommages causés par une mauvaise utilisation de cette astuce et l'utilisation de cette astuce est à vos risques et périls. ☠  

## Sauvegarder vos drivers avec Windows 10 en invite de commandes en mode administrateur.

Heureusement, sous Windows 10 et Windows 11, il est possible d’exporter les pilotes en place pour en conserver une sauvegarde et pouvoir les restaurer en cas de besoin. Et cela est possible avec la commande DSIM.     
Voici donc comment l’utiliser. Avant tout, créez un dossier sur votre disque dur où vous souhaitez sauvegarder vos drivers (exemple : `D:\Drivers` sur une clé USB).    
Puis lancez ensuite un terminal en tant qu’Administrateur, c'est-à-dire, appuiyez sur la touche Windows, tapez le mot invite jusqu'à ce que l'invite de commande, alias MS-DOS en gros, apparaisse, quelque chose comme ceci:    
`Invite de commandes, Application, Appuyer à droite pour changer d’aperçu`    
Faire: Menu contextuel    
et dans le menu qui devrait se présenter, descendre (pas longtemps sur:    
`Exécuter en tant qu’administrateur`    
Appuyez sur entrée pour valider votre choix, puis entrez la commande suivante :    
`Dism /online /export-driver /destination:D:\Drivers`    
Chaque driver actuellement utilisé sur la machine sera alors exporté dans ce répertoire.     
Ensuite, lorsque vous voudrez restaurer ces pilotes pour les replacer sur un système fraîchement installé, il faudra utiliser la commande suivante :     
`Dism /online /Add-Driver /Driver:D:\Drivers /Recurse`    
Remarque Très Importante : La lettre D:\ utilisée est à titre d'exemple, vous devrez rechercher la lettre appropriée pour votre lecteur USB afin que vous puissiez sauvegardés vos pilotes.    
Vous devrez avoir suffisamment d'espace libre dans ledit lecteur USB!    
Si vous ne pouvez pas coller la commande lorsque vous êtes dans le terminal, faites Alt+Espace, cherchez le sous-menu Modifier, puis chercher: Coller Ctrl-V, une fois la commande collée faire Entrée.    
Ce n’est pas plus compliqué que ça et comme cette commande est intégrable dans vos scripts, ça peut permettre de programmer des sauvegardes régulières.

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
