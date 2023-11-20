---
title: Espeak avec Mbrola inclus
permalink: "/Espeak-with-Mbrola-included/"
layout: post
author: BlindHelp
---

<footer>Publié le Lundi 20 Novembre 2023</footer>


# Informations sur l'extension espeakWitMbrola: #

* Auteur: Felipe Porciuncula Zanabria
* Version actuelle: 1.0.1 stable
* Compatibilité NVDA : 2019.3 et versions ultérieures
* Télécharger [version stable][1]
* [Voir code source sur GitHub][2]


# Espeak avec Mbrola inclus #

Il s'agit de l'ancien Espeak  avec Mbrola inclus, empaqueté sous forme d'extension pour NVDA.

## Caractéristiques ##

* Cette extension est livrée avec une version open source d'une dll Mbrola, trouvée sur: <https://github.com/thiekus/MBROLA>, qui est une bifurcation à partir de <https://github.com/numediart/ MBROLA>. Cette version n'affiche plus le contrat de licence, ce qui était très gênant car la voix du lecteur d'écran s'arrêtait.
* Dans cette distribution l'auteur a corrigé les traductions des phonèmes des variantes portugaise brésilienne et espagnole de Mbrola. De plus, ces voix sont incluses dans l'extension. Les voix sont: br1, (connu comme la voix du lecteur d'écran Virtual Vision du Brésil, br2 et 3, également créé par la même société, et br4, connue sous le nom de voix Liane, qui accompagne le système Dosvox.
Pour l'Espagnol, il y a les 4 voix d'Espagne, les 2 du Mexique et la Vénézuélienne.
* Cette version gère les changements de fréquence d'échantillonnage lors de l'utilisation d'une voix Mbrola. Avec la version qui accompagnait NVDA avant  Espeak-ng, il était possible d'utiliser ces voix, mais elles semblaient enfantines car le lecteur NVDA ne passait pas à 16000hz lorsque cela était nécessaire.
* Fonctionne à 100% sur les copies portables de NVDA.
* Elle est plus légère que la version Sapi5 d'Espeak.
* Les paramètres de variantes et changement de langue automatique ont été supprimés parce qu'ils posaient problème. Le premier changé la fréquence d'échantillonnage et le second choisi une voix extérieure à Mbrola.

## Pour ajouter plus de voix Mbrola à l'extension ##

1. Vérifiez les voix prise en charge par Espeak dans: le répertoire de configuration utilisateur de NVDA/addons/espeakWithMbrola/synthDrivers/espeak-data/voices/mb
2. Téléchargez les bases de données Mbrola  que vous souhaitez à partir de: <https://github.com/numediart/MBROLA-voices>
3. Copiez ou déplacez vers le chemin: le répertoire de configuration utilisateur de NVDA/addons/espeakWithMbrola/synthDrivers/espeak-data/mbrola

## Problèmes connus ##

* Le pourcentage de changement de hauteur pour indiquer les majuscules ne fonctionne pas lors de l'utilisation d'une voix Mbrola. La version Sapi5 change la hauteur du texte qui suit la lettre.
* À la fin de certaines phrases, il peut y avoir de petits défauts dans les voix masculines, ce qui, l'auteur pense, est peut-être dû au fait qu'il n'y a pas assez de silence pour que Mbrola puisse respirer. l'auteur a fait quelques tests avec le programme Serpro Liane  tts avec des pauses de 1 ms et cela se produit.


[1]: https://github.com/FelipeZanabria/Espeak-wit-Mbrola/releases/download/1.0.1/espeakWitMbrola-1.0.1.nvda-addon

[2]: https://github.com/FelipeZanabria/Espeak-wit-Mbrola


## Pour ajouter des voix Mbrola en français à l'extension  par BlindHelp ##

Avertissement: 💀  
Le blog de BlindHelp n'est pas responsable des dommages causés par une mauvaise utilisation de l'extension téléchargé ni des informations ce trouvant sur la documentation dédié et l'utilisation de l'extension téléchargé est à vos risques et périls. ☠  

Par exemple,  les seules voix compatibles pour le français sont les suivantes:

* [mb-fr1](https://raw.githubusercontent.com/numediart/MBROLA-voices/master/data/fr1/fr1)
* [mb-fr4](https://raw.githubusercontent.com/numediart/MBROLA-voices/master/data/fr4/fr4)

Suivez l'étape 3 pour ajouter les voix en français à l'extension.

Cette extension inclut les voix portugaise brésilienne et espagnole comme indiqué ci-dessus.

Si vous souhaitez obtenir d'autres voix pour cette extension dans une autre langue, suivez les étapes suivantes :


1. Vérifiez les voix prise en charge par Espeak dans: le répertoire de configuration utilisateur de NVDA/addons/espeakWithMbrola/synthDrivers/espeak-data/voices/mb
2. Téléchargez les bases de données Mbrola  que vous souhaitez à partir de: <https://github.com/numediart/MBROLA-voices>
3. Copiez ou déplacez vers le chemin: le répertoire de configuration utilisateur de NVDA/addons/espeakWithMbrola/synthDrivers/espeak-data/mbrola


---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouvel espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---