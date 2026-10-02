---
title: Petit script en Python pour convertir des fichiers csv en fichiers m3u
permalink: "/petit-script-en-python-pour-convertir-des-fichiers-csv-en-fichiers-m3u/"
layout: post
author: BlindHelp

---


<footer>Publié le Lundi 28 Septembre 2026</footer>


Coucou mes amis du blog de BlindHelp!    
Aujourd'hui, je vous présente ce post dédié au petit script en Python pour convertir des fichiers .csv en fichiers .m3u, à savoir que ledit script a été créé par l'IA 🤖 Gemini.

Le fait que ce script ait été généré par l'IA 🤖 Gemini est une excellente information, car cela permet de mieux comprendre sa structure type et d'anticiper d'éventuels ajustements, et cela a été fait en demandant de l'aide sur la liste de discussion francophone appelée "progliste".

Un membre de la liste a fait la demande en mon nom auprès de l'IA 🤖 Gemini, qui a répondu de manière satisfaisante à mes attentes.

Voici Gemini, l'assistant IA 🤖 de Google. Faites-vous aider pour rédiger, planifier, trouver des idées et plus encore. Découvrez la puissance de l'IA 🤖…

[Google Gemini](https://gemini.google.com)    

Je ne suis pas programmeur en Python ni dans aucun autre langage de programmation, je suis simplement une personne curieuse qui aime découvrir des choses et les partager ici.

Avertissement: 💀    

Le blog de BlindHelp n'est pas responsable des dommages causés par une mauvaise utilisation de ce script Python téléchargé ni des informations ce trouvant sur  ce post dédié et l'utilisation de ce script Python téléchargé est à vos risques et périls. ☠

Le fin mot de l'histoire est que j'avais déjà un script  en Python pour convertir des fichiers csv en fichiers m3u (Recommandé pour automatiser) donné par une IA 🤖, mais malheureusement il me donnait un message d'erreur car le fichier csv était tronqué de commentaires et je ne l'avais pas fait le nettoyage avant d'exécuter le script mentionné.

Après avoir envoyé un message pour demander de l'aide concernant ce problème sur la liste progliste, l'idée m'est venue de supprimer les `#` commentaires du fichier ma_liste.csv :    
`# PyRadio Playlist File - Format:`    
`# name,url,encoding,icon,profile,buffering,force-http,volume,referer,player`    

`J'ai placé la syntaxe sur la première ligne : name,url`    
Ensuite j'ai laissé ci-dessous les noms des stations de radio suivi de leurs URLs, Par exemple :    

`name,url`    
`Alternative (BAGeL Radio),https://ais-sa3.cdnstream1.com/2606_128.aac`    
`Alternative (The Alternative Project),http://c9.prod.playlists.ihrhls.com/4447/playlist.m3u8`    

etc, etc.    

Après avoir fait cela, j'ai lancé la ligne de commande suivante :    
`python csv_to_m3u.py ma_liste.csv ma_playlist.m3u`    

Et le nouveau fichier ma_playlist.m3u a été généré.    

## 📋 Structure attendue pour votre fichier M3U

Voici la syntaxe correcte pour que le fichier ma_playlist.m3u fonctionne sur n'importe quel lecteur :    

`#EXTM3U`    
`#EXTINF:-1,Alternative (BAGeL Radio)`    
`https://ais-sa3.cdnstream1.com/2606_128.aac`    
`#EXTINF:-1,Alternative (The Alternative Project)`    
`http://c9.prod.playlists.ihrhls.com/4447/playlist.m3u8`    
`#EXTINF:-1,American Roots (Boot Liquor - SomaFM)`    
`http://somafm.com/bootliquor.pl`    

etc, etc.    

## 📋 Structure attendue pour votre fichier PY

Vous pouvez trouver son code dans l'ancien fichier py    

Je n'ai pas inclus le code Python dans cet article car il pourrait être tronqué par contre je l'ai compressé dans un archive zip pour que vous puissiez le télécharger et le consulter à votre guise.    

Vous trouverez ci-dessous le lien de téléchargement de ces fichiers dans un seul archive zip.    

Une fois décompressé vous pourrez voir le contenu du dossier nommé : csv2m3u(ancienne_version)

Celui-ci contient les fichiers :    

`csv_to_m3u.py`    
`ma_liste.csv`    
`ma_playlist.m3u`    

Vous pouvez utiliser ce script Python à condition de supprimer les commentaires de votre fichier CSV ; sinon, vous obtiendrez un message d’erreur.

## 🚀 Comment l'utiliser

Ouvrez votre terminal et lancez la commande suivante :    
`python csv_to_m3u.py ma_liste.csv ma_playlist.m3u`    

N'oubliez pas que ce fichier py doit se trouver au même niveau que votre fichier csv, par exemple dans le répertoire "Documents".    

De plus, les deux fichiers mentionnés ci-dessous ne sont que des exemples destinés à vous donner une idée de leur structure.    

`ma_liste.csv`    
`ma_playlist.m3u`    

Nous allons maintenant passer à la réponse donnée par l'IA 🤖 de Gemini.    

## 🪄 Réponse Gemini

Ce fichier CSV fournit une information précieuse : il s'agit d'un format de playlist **PyRadio** (qui utilise des lignes de commentaires commençant par `#` pour documenter le format et la liste des colonnes).    

### Pourquoi le premier script a échoué ?

1. Le script a pris la première ligne de commentaires (`# PyRadio Playlist File...`) comme première ligne de données, et a confondu l'en-tête réel avec les valeurs, ce qui a tout inversé.
2. Il a converti les lignes en objets/listes de manière un peu anarchique d'où les crochets `['...']`.

### Comment réécrire le script ?

Pour que ce script soit robuste et gère à la fois ce format PyRadio (avec des en-têtes commentés) et potentiellement d'autres types de CSV standards (avec de vrais en-têtes ou sans en-têtes), voici une version corrigée et universelle.     

Le script va :    

* Ignorer les lignes de commentaires (qui commencent par `#`).
* Détecter si une ligne contient l'en-tête officiel (`name,url...`).
* Utiliser `csv.reader` proprement pour extraire la colonne du nom (titre) et celle de l'URL (généralement les colonnes 0 et 1).

## 📋 Structure attendue pour votre fichier PY

Vous pouvez trouver son code mis à jour dans le nouveau fichier py    

Je n'ai pas inclus le code Python dans cet article car il pourrait être tronqué par contre je l'ai compressé dans un archive zip pour que vous puissiez le télécharger et le consulter à votre guise.    

Vous trouverez ci-dessous le lien de téléchargement de ces fichiers dans un seul archive zip.    

Une fois décompressé vous pourrez voir le contenu du dossier nommé : csv2m3u(nouvelle_version)    

Celui-ci contient les fichiers :    

`csv_to_m3u.py`    
`ma_liste.csv`    
`ma_playlist.m3u`    

Je vous recommande d'utiliser plutôt ce nouveau script Python, car il est mieux structuré que l'ancien script Python vu précédemment.

Comme mentionné précédemment le nouveau script Python va :    

* Ignorer les lignes de commentaires (qui commencent par `#`).
* Détecter si une ligne contient l'en-tête officiel (`name,url...`).
* Utiliser `csv.reader` proprement pour extraire la colonne du nom (titre) et celle de l'URL (généralement les colonnes 0 et 1).

## 🚀 Comment l'utiliser

Ouvrez votre terminal et lancez la commande suivante :    
`python csv_to_m3u.py ma_liste.csv ma_playlist.m3u`    

N'oubliez pas que ce fichier py doit se trouver au même niveau que votre fichier csv, par exemple dans le répertoire "Documents".    

De plus, les deux fichiers mentionnés ci-dessous ne sont que des exemples destinés à vous donner une idée de leur structure.    

`ma_liste.csv`    
`ma_playlist.m3u`    

### Ce que produira ce nouveau script pour  ce fichier :

Il générera un fichier M3U parfaitement conforme et propre, sans crochets ni inversions :    

`#EXTM3U`    
`#EXTINF:-1,Alternative (BAGeL Radio)`    
`https://ais-sa3.cdnstream1.com/2606_128.aac`    
`#EXTINF:-1,Alternative (The Alternative Project)`    
`http://c9.prod.playlists.ihrhls.com/4447/playlist.m3u8`    

etc, etc.

## 🛠 Télecharger le script en Python pour convertir des fichiers csv en fichiers m3u dans un seul archive zip depuis l'espace sur BlindHelp.github.io

<https://blindhelp.github.io/csv_to_m3u_script_python.zip>

Vous trouverez également dans le fichier zip le fichier appelé :    
`csv_to_m3u_script_python_aide.txt`    
Ce fichier texte résume les points les plus importants abordés dans ce post.

### 🖥️ Prérequis indispensable pour que le script Python fonctionne

L'installation de Python est le prérequis indispensable sur Windows 10 et 11 pour exécuter des scripts, et vous pouvez le télécharger directement depuis le site officiel de [Python](https://www.python.org/downloads/).

### 🖥️ Prérequis : Installation de Python sur Windows 10/11

Pour installer Python correctement sur votre ordinateur :

* Téléchargez l'installateur pour Windows depuis Python Downloads.
* Lancez le fichier exécutable téléchargé.
* Important : Cochez impérativement la case "Add Python to PATH" au tout début de la fenêtre d'installation pour configurer automatiquement les variables d'environnement.
* Cliquez sur Install Now et patientez quelques instants.

Profitez-en ! 😊    
C'est fini ce post dédié au petit script en Python pour convertir des fichiers .csv en fichiers .m3u! 🔐    
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