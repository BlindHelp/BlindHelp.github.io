--- 
title: L'intelligence artificielle débarque chez Audacity avec le module OpenVINO

permalink: "/OpenVINO-AI-effects-for-Audacity/"
layout: post
author: BlindHelp
---

<footer> Publié le Vendredi 27 Décembre 2024</footer>


Coucou mes amis du blog de BlindHelp!    
L'intelligence artificielle débarque chez Audacity avec le module OpenVINO !

C'est un excellent plugin pour Audacity, et un moyen très simple de transcrire de l'audio en texte.

Intel a créé une suite d'outils qui intègre l'intelligence artificielle (IA) pour Audacity, utiles aussi bien pour l'audio que pour la musique.

Ces fonctionnalités contenant l'intelligence artificielle (IA) s'exécutent à 100 % localement sur votre PC.

## Outils qui intègre l'intelligence artificielle (IA) pour les podcasts

Pour le contenu de créations parlés, les effets OpenVINO contiennent une suppression du bruit et un plugin de transcription.

La suppression du bruit (Noise Suppression) fait ce qu'elle dit sur la boîte : elle supprime le bruit. En tant que tel, il se comporte de manière similaire à l’effet de suppression du bruit intégré d'Audacity.

La transcription optimisée par Whisper.cpp peut à la fois transcrire et traduire des mots et des sorties sur une piste d'étiquette. Si vous souhaitez exporter ces transcriptions, vous pouvez le faire via Fichier → Export Other → Exporter les marqueurs.

## Outils qui intègre l'intelligence artificielle (IA pour la musique

Pour la musique, les plugins de génération et de séparation font partie des effets OpenVINO. Music Generation et Music Style Remix utilisent Stable Diffusion (et Riffusion en particulier) pour générer une nouvelle musique à partir d'une invite ou basée sur de la musique préexistante, respectivement.

Music Separation peut diviser une chanson en parties vocales et instrumentales, ou en parties vocales, batterie, basse et une partie combinée "autre chose". C’est idéal pour créer des reprises et des playalongs.

Les plugins OpenVINO peuvent être téléchargés sur la page GitHub prévue à cet effet (voir le lien de la page du dépôt sur GitHub ci-dessous).

Vous pouvez également voir ces explications en anglais, en cliquant sur le lien suivant

[`Audacity ® | Introducing OpenVINO AI effects for Audacity`](https://www.audacityteam.org/blog/openvino-ai-effects/)

## Téléchargement et installation

Les plugins OpenVINO sont actuellement disponibles en téléchargement [ici](https://github.com/intel/openvino-plugins-ai-audacity/releases)

Actuellement, seulement la version de 64 bits pour Windows est disponible au téléchargement.

Sur cette page via GitHub (en anglais) vous trouverez ce plugin selon votre version installée d'Audacity toujours en 64 bits

Pour savoir s'il existe un plugin selon votre installation Audacity vous devrez d'abord voir la version d'Audacity que vous avez installée en vous rendant dans le Menu Aide    
puis valider sur l'élément: À propos d’Audacity    
Une boîte de dialogue s'ouvre avec les informations requises au début.    
Par exemple, dans mon cas, j'ai la version suivante d'Audacity installée :    
`À propos d’Audacity dialogue`    
`Audacity 3.6.4`    

Le programme Audacity est installé uniquement pour une architecture Windows en 64 bits, Cela signifie que cela ne fonctionnera pas sur les architectures 32 bits.

En conclusion, le plugin est conçu pour Audacity 64 bits installé sur un PC 64 bits.

C'est-à-dire  depuis Windows 7 et versions ultérieures pour 64 bits.

Si vous possédez la version d'Audacity 3.6.4, voici ci-dessous le lien de téléchargement direct du plugin pour ladite version d'Audacity :

<https://github.com/intel/openvino-plugins-ai-audacity/releases/download/v3.6.4-R3.4/audacity-win-v3.6.4-R3.4-64bit-OpenVINO-AI-Plugins.exe>

Une fois le téléchargement terminé avant de cliquer sur l'exécutable eh bien, il est recommandé de fermer toutes les applications ouvertes avant de continuer avec l'installation du plugin.

L'installation est en anglais au cas où.

Vous devrez choisir tous les modèles à télécharger (c'est préférable) ;    
Son poids est de 2 GO au cas où.    
Les modèles recommandés sont moins ;    
Si vous avez téléchargé et installé une version précédente de ce plugin vous ne devrez choisir aucun modèle dans les options, de cette façon il ne les téléchargera pas et utilisera les modèles déjà téléchargés et installés précédemment.    

Suivez les instructions affichées dans les boîtes de dialogue lors de l'installation de ce plugin (toujours en anglais).

Lorsque vous aurez fini de télécharger tous les modèles, vous devrez appuyer sur Entrée sur le bouton Installer.    
N'oubliez pas de vous assurer que vous utilisez la même version d'Audacity avec ledit plugin avant de cliquer sur ledit bouton.    

Cliquez sur le bouton Terminer pour fermer l'assistant d'installation.

Nous devons maintenant configurer notre version d'Audacity pour activer ledit plugin pour son utilisation.

1. Ouvrir le programme Audacity
2. Ouvrir les préférences avec Ctrl+P
3. Aller à l'élément :    
`Modules`    
4. Faire Tab    
`Préférences : Modules`    
5. Choisissez dans la liste des modules :    
`mod-openvino No choice made`    
Il faudra le mettre avec flèche haut sur Activé""    
Celui-ci une fois modifié sera indiqué comme :    
`mod-openvino Activé`    
6. Faire Tab et appuyez sur le bouton :
`Valider`    
7. Et enfin, fermez le programme Audacity pour que ces changements prennent effet.

Ouvrez à nouveau Audacity s'il ne vous donne aucun message d'erreur indiquant que ledit plugin ne peut pas être chargé, tout est maintenant parfait pour son utilisation.

Si vous recevez un message vous indiquant que ledit plugin ne peut pas être chargé, validez sur le bouton indiqué et vérifiez soigneusement si votre version d'Audacity correspond à celle du plugin téléchargé et réitérez les directives indiquées ci-dessus, c'est-à-dire recherchez la version du plugin et recherchez-le sur la page où ledit plugin est hébergé pour le télécharger et l'installer à nouveau.

Téléchargez Audacity pour Windows depuis son [site officiel (page en anglais)](https://www.audacityteam.org/download/windows/)

Cette explication qui suit ne vient pas de moi !

## Comment utiliser la transcription OpenVino Whisper dans Audacity

* Étape 1 : Sélectionnez le fichier audio, puis choisissez Analyser dans le menu déroulant -> Transcription OpenVino Whisper.
* Étape 2 : Choisissez le modèle "Large" et effectuez le rendu.
* Étape 3 : Sélectionnez le nouveau fichier de transcription sous la chanson, allez dans Fichier, Export Other -> Exporter les marqueurs.
* Étape 4 : Le fichier par défaut est au format .txt. Changez-le en .SRT et enregistrez.
* Étape 5 : Ouvrez le fichier .SRT dans le bloc-notes et modifiez les paroles si nécessaire.
* Étape 6 : Importez le fichier .SRT dans CapCut ou tout autre programme de montage vidéo pour afficher vos paroles.
* Résultat final si curieux : <https://youtu.be/BEx2Nlx7t8c?si=ZyEiej_MfnMJNRCT>

Cette dernière information a été trouvée sur le Web.

En espérant que cela vous soit utile, pour ma part je n'ai pas testé ledit plugin, je vous donne seulement les directives d'installation et de téléchargement dudit plugin et d'autres informations finales que vous trouverez ci-dessous.

## Ajout de raccourcis pour ce plugin dans Audacity

Si vous êtes fan des raccourcis, vous pouvez attribuer des raccourcis clavier pour les fonctions liées audit plugin dans Audacity.

Si vous le souhaitez, vous pouvez ajouter quelques raccourcis pour que votre plugin fonctionne pour déclencher les effets de celui-ci.

1. Ouvrir le programme Audacity
2. Ouvrir les préférences avec Ctrl+P
3. Aller à l'élément :    
`Raccourcis`    
4. Faire Tab    
`Préférences : Raccourcis dialogue Visualiser par :`    
`Définition des raccourcis clavier groupe`    
`Combinaisons de touches Arborescence`    
5. Dans la zone :    
`Rechercher :`    
Écrivez le nom du plugin en minuscule :    
`openvino`    
6. Faire Tab    
Vous trouverez ici les options suivantes où vous pourrez attribuer un raccourci à chacun de ces éléments en anglais :    
`Générer Menu développé`    
`OpenVINO Music Generation…`    
`Effets Menu développé`    
`OpenVINO AI Effects développé`    
`OpenVINO Music Separation`    
`OpenVINO Noise Suppression`    
`Analyse Menu développé`    
`OpenVINO Whisper Transcription…`    
7. Placez le curseur au début de l'élément pour lui donner un raccourci puis appuyez sur Tab et vous obtiendrez le champ d'édition :
`Raccourci édition ligne 1 vide`    
Dans ce champ d'édition, vous devrez cliquer sur les touches que vous souhaitez utiliser pour déclencher cette action.    
8. Faire Tab et validez sur le bouton appelé :    
`Attribuer bouton Alt+ a`    
Note: Si le raccourci ne vous convient pas, vous pouvez cliquer sur le bouton intitulé :
`Effacer bouton Alt+ e`    
9. En faisant Tab, vous retrouverez également les boutons appelés :    
`Importer… bouton Alt+ i`    
`Exporter… bouton Alt+ e`    
`Défauts bouton Alt+ d`    
Je pense qu'il ne faut pas accorder d'importance à ces trois boutons, mais une fois que vous aurez attribué un raccourci à chaque élément, il faudra valider sur le bouton appelé :    
`Valider bouton`    
10. Vous pouvez désormais lancer une action grâce aux raccourcis clavier que vous avez attribués dans le plugin.

Bon, c'est tout ce que je peux vous dire pour le moment, pour être très honnête je n'utilise pas Audacity, je peux seulement vous informer sur les possibilités qui existent pour transcrire la voix en texte.

Si quelqu'un chevronné a réussi cela, je pourrai à l'avenir mettre à jour ce post avec ces nouvelles informations sur l'utilisation de ce plugin d'Audacity.    
Voilà,    
@+    
Rémy Ruiz (BlindHelp 🇫🇷)    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouveau espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

--- 