---
title: Les sources de NVDA et la magie de Git
permalink: "/SOURCESNVDAEtGit/"
layout: post
author: BlindHelp
---

<footer>Publié le Mardi 12 Janvier 2021</footer>


Coucou mes amis du blog de BlindHelp!    
Voici un message dédié aux sources de NVDA et la magie de Git fait par @ abdel792 transmis par lui sur un groupe de discussion et je le partage avec vous tous, et vous le trouverez ci-dessous.    
Je vous souhaite une bonne lecture.    


# Les sources de NVDA et la magie de Git par Abdel

Note Très Importante:    

Désolé, pour la commande permettant de revenir à la racine du disque C, c'est ```cd\```    

N'oubliez pas la bare oblique inversée après la commande cd.

Salut les scripteurs !

Ce message s'adresse particulièrement à notre ami JF, qui se posait des questions sur l'endroit où trouver le module globalCommands.py.

Bien sûr, si d'autres personnes sont intéressées, il leur est adressé également !

Dans ce petit tuto, nous allons utiliser le programme Git.

Voici le lien de téléchargement de la dernière version de Git pour Windows :

[Git version installable 32 bits.](https://github.com/git-for-windows/git/releases/download/v2.29.2.windows.1/Git-2.29.2-32-bit.exe)

[Git version installable 64 bits.](https://github.com/git-for-windows/git/releases/download/v2.29.2.windows.1/Git-2.29.2-64-bit.exe)

Il existe également en version portable :

[Git version portable 32 bits.](https://github.com/git-for-windows/git/releases/download/v2.29.2.windows.1/PortableGit-2.29.2-32-bit.7z.exe)

[Git version portable 64 bits.](https://github.com/git-for-windows/git/releases/download/v2.29.2.windows.1/PortableGit-2.29.2-64-bit.7z.exe)

Si vous utilisez la version installable, le chemin pointant vers l'exécutable de Git devrait automatiquement être ajouté à la variable système path.

Si vous utilisez la version portable, il est conseillé d'ajouter le chemin du répertoire "bin" à la variable système path, afin de pouvoir utiliser la commande git en ligne de commandes.

Pour télécharger les sources de NVDA, personnellement, je les télécharge à la racine de mon disque principal, qui est généralement le disque C.

Pour ce faire, Windows + R pour afficher le champ "Exécuter", puis écrire CMD.

Ensuite, presser le raccourci-clavier Contrôle + Shift + Entrée pour ouvrir l'invite en mode administrateur.

Ceci fait, en mode invite de commande, se diriger vers la racine du disque actuel, généralement, c'est le disque C en utilisant la commande suivante :
```
cd
```

Si c'est la première fois que nous téléchargeons les sources de NVDA, taper la commands suivante, suivie de la touche entrée, ce qui devrait créer un nouveau répertoire à la racine du disque C, intitulé nvda et y introduire les sources :
```
git clone --recursive https://github.com/nvaccess/nvda.git
```

Si l'on souhaite mettre à jour les sources précédemment téléchargées, à partir de la racine du disque C où nous sommes actuellement, taper les 2 commandes suivantes, suivies respectivement de la touche entrée :
```
cd nvda
git pull --recurse-submodules
```

La première ouvrira le dossier nvda où figurent les sources précédemment téléchargées et la seconde mettra à jour ce répertoire nvda.

Maintenant, parlons un peu de la magie de Git.

Là, nous venons de télécharger la toute dernière version des sources de nvda.

Mais si l'on souhaitait revenir en arrière, pour remonter l'histoire et voir par exemple quel était l'état de ces sources à l'époque de nvda-2017.4 ?

C'est très simple !

Après s'être introduit dans le répertoire nvda comportant les sources avec la commande "cd nvda", exécuter la commande suivante, suivi bien entendu par la touche entrée :
```
git checkout release-2017.4
```

Après avoir entendu les différents warning, notre dossier nvda devrait se retrouver avec les sources de la version 2017.4.

On peut revenir à n'importe quelle autre ancienne version si on le souhaite, en n'oubliant pas qu'après le mot checkout, le mot release devra être séparé de la version en question par un tiret du six, pas un underscore.

Par exemple, pour nvda-2013.3

```
git checkout release-2013.3
```

Si l'on souhaite retrouver la dernière version en date :

```
git checkout master
```

Voili voilou pour l'exploration des différentes versions des sources de NVDA.

Au fait, le module globalCommands.py est situé dans le répertoire "nvda/source/".

Cordialement,    
Abdel.


## Remerciements

Merci à @ abdel792 pour avoir rendu cela possible.

---

Voilà,    
Je vous souhaite une bonne capture des sources de NVDA avec la magie de Git :)    
@+    
BlindHelp!    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouvel espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---