--- 
title: StartLater, ne pas démarrer Thunderbird trop tôt par Pierre-Louis


permalink: "/StartLater/"
layout: post
author: BlindHelp
---

<footer> Publié le Mercredi 3 Juillet 2024</footer>


# StartLater, ne pas démarrer Thunderbird trop tôt par Pierre-Louis

Bonjour à toutes et tous,    

Tout d'abord, je précise que ce post s'adresse aussi aux utilisateurs de Jaws.    

Vous devez avoir aussi remarqué que Thunderbird se fait voler le focus si vous le démarrez avant que Windows n'ait lancé toutes les  applications d'arrière plan lors de son démarrage.    
L'extension Thunderbird+G5  n'arrive pas toujours à le lui rendre,  ce qui cause un désagrément  par la suite. C'est probablement pareil avec Jaws.    

Le nouvel utilitaire que je vous propose sert à lancer Thunderbird automatiquement avec un certain  retard lors du démarrage de Windows. Ainsi, il est le dernier à démarrer et ne se fait pas voler le focus par une autre application d'arrière-plan.    

Voici le contenu de son fichier Lisez-moi suivi de son lien de téléchargement :    
L'utilitaire StartLater démarre un programme après un certain nombre de millisecondes.    
StartLater sert principalement à démarrer une application lorsque Windows a complètement démarré. Ceci évite que votre application se fasse voler le focus par une autre qui n'aurait pas terminé son chargement. Exemple : OneDrive.    

Par défaut, StartLater démarre Thunderbird après un délai d'une seconde.    

### Configuration :
* Extrayez l'archive StartLater.zip  à la racine du disque `C:` par exemple ;
* Vous obtenez alors le dossier `C:\StartLater` ;
* Placez-vous dans ce dossier ;
* Pressez Entrée sur le fichier :`Create Startup icon.vbs`     
Ceci crée l'icône `StartLater.lnk` dans le dossier de démarrage de Windows.  Vous pouvez la renommer en pressant entrée sur `Go to startup folder`.    

### Si vous souhaitez modifier le délai et l'application à démarrer :
* Renommez `startLater-config.ini` en `StartLater.ini`.
* Pressez entrée dessus pour l'ouvrir dans le bloc-notes ;
  * Modifiez le délai après `DelayMS= . Ecrivez ce délai en millisecondes`
  * Ecrivez le chemin de l'application après `ExePath= `;
* Enregistrez le fichier puis fermez le bloc-notes ;
* Vous pouvez tester votre fichier INI en pressant Entrée sur `StartLater.exe` ;
* Note à propos de la variable `DelaYMS` :    
La valeur minimale est de 1000ms ;    
Même avec 1000ms, votre application pourra démarrer après plusieurs secondes.  Cela signifie que Windows n'était pas prêt plus tôt ;    
* Note à propos de la variable `ExePath` :    
Si vous écrivez :    
* Un chemin invalide : StartLater émettra un bip chaque seconde jusqu'à atteindre le délai indiqué dans la variable DelayMS. Vous saurez alors que Windows a terminé le chargement des applications invisibles ;
* Le chemin valide d'une application : StartLater lancera l'application après les bips ;
* le chemin d'un fichier audio :  StartLater jouera le fichier audio dans votre lecteur audio par défaut ;

### Télécharger StartLater
[Par ici ](https://www.rptools.org/?p=8790)

Cordialement,Bonne utilisation,    
Pierre-Louis    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouveau espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---