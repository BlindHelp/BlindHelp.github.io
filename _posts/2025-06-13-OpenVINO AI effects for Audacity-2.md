--- 
title: Module OpenVINO pour Audacity, suite de la tuto

permalink: "/OpenVINO-AI-effects-for-Audacity-2/"
layout: post
author: BlindHelp
---

<footer> Publié le Vendredi 13 Juin 2025</footer>


Coucou mes amis du blog de BlindHelp!    
Aujourd'hui je vous apporte la suite du tutoriel pour le module OpenVINO pour Audacity à la demande de nos amis du blog de [BlindHelp.github.io](https://blindhelp.github.io) 😉    

Cependant comme je vous l'ai dit avant dans mes autres billets je ne suis pas un expert dans l'utilisation d'Audacity et c'est la première fois que j'utilise le module OpenVINO pour Audacity et soit dit en passant je le découvre en même temps que vous lors de la rédaction de ce tutoriel. 😣    

Mais tout d'abord voici une piqûre de rappel sur le Module OpenVINO pour Audacity vu sur mon billet précédent appelé:    
[L'intelligence artificielle débarque chez Audacity avec le module OpenVINO](https://blindhelp.github.io/OpenVINO-AI-effects-for-Audacity/)    

Si vous possédez la version [d'Audacity 3.6.4 en 64 bits](https://github.com/audacity/audacity/releases/download/Audacity-3.6.4/audacity-win-3.6.4-64bit.exe), voici ci-dessous le lien de téléchargement direct du plugin pour ladite version d'Audacity :    
<https://github.com/intel/openvino-plugins-ai-audacity/releases/download/v3.6.4-R3.4/audacity-win-v3.6.4-R3.4-64bit-OpenVINO-AI-Plugins.exe>    

Dans le cas où vous n'avez pas encore télécharger cette version d'Audacity 3.6.4 en 64 bits vous pouvez la télécharger en cliquant sur le lien directe où pointe ladite version.    

N'oubliez pas de vous assurer que vous utilisez la même version d'Audacity avec ledit plugin avant de l'installer comme expliqué dans mon billet précédent dédié à OpenVINO pour Audacity, donc  pour plus de détails, veuillez consulter le lien ci-dessous:    
[L'intelligence artificielle débarque chez Audacity avec le module OpenVINO](https://blindhelp.github.io/OpenVINO-AI-effects-for-Audacity/)    
Ce billet comprend également la façon de l'installer puis de configurer notre version d'Audacity pour activer ledit plugin pour son utilisation et bien plus encore…    

Le programme Audacity est installé uniquement pour une architecture Windows en 64 bits, Cela signifie que cela ne fonctionnera pas sur les architectures 32 bits.    

En conclusion, le plugin est conçu pour Audacity 64 bits installé sur un PC 64 bits.    

C'est-à-dire  depuis Windows 7 et versions ultérieures pour 64 bits.    

Par exemple, Nous trouverons deux options très intéressantes, la première option est que le module OpenVINO pour Audacity intègre le plugin "Music Separation" pour séparer une piste audio en deux pistes c'est-à-dire dans l'un d'eux il place la partie instrumentale où l'on n'entend que des instruments Et dans l'autre partie il place la partie vocale c'est-à-dire la partie destinée à être chantée sans la partie instrumentale.    

Enregistrer la partie instrumentale pourrait être utile pour réaliser des karaokés par exemple.    

puis la deuxième option est que le module OpenVINO pour Audacity intègre un plugin de transcription c'est-à-dire qu'Audacity prend une piste audio Pour réaliser une transcription vocale à texte, de la même façon  peut réaliser une traduction de la transcription vocale à texte selon la langue que nous avons sélectionnée.    

Ce plugin est appelé: "Whisper Transcription: microphone"    

Il me semble sauf erreur de ma part que vous devez avoir un bon processeur de marque "Intel" pour réaliser cette action, mais il semble que d'autres processeurs qui ne sont pas de la marque "Intel" puissent être utilisés et donne aussi de bons résultats lorsque vous réalisez cette action.    

Pour commencer voici un récapitulatif des options pour le module OpenVINO pour Audacity que vous trouverez ci-dessous en appuyant sur Alt+une lettre pour accéder aux menus d'Audacity et je vous les donne à titre informatif:    

## OpenVINO Music Generation
Si vous appuyez sur Alt+g nous trouverons le sous-menu Générer, faire plusieurs flèches haut jusqu'à atteindre l'élément appelé:    
`OpenVINO Music Generation… o`    
Cette option c'est pour générer de la musique instrumentale.    
Si vous souhaitez générer de la musique instrumentale avec le module OpenVINO pour Audacity appuyez sur "Entrée"  sur cet élément.    

Notez que cette partie ne sera pas expliquée dans ce tutoriel.    

## OpenVINO AI Effects sous-Menu
Si vous appuyez sur Alt+e nous trouverons le sous-menu Effets, faire plusieurs flèches haut jusqu'à atteindre l'élément appelé:    
`OpenVINO AI Effects sous-Menu o`    
Faire flèche droite pour accéder au sous-menu lequel contient les options suivantes:    
`OpenVINO Music Separation o`    
Cette option permet de séparer les instruments de la partie  vocale.    
Faire flèche bas pour trouver l'élément:    
`OpenVINO Noise Suppression o`    
En bon français cela signifie "Suppression du bruit" ; comme son nom l'indique c'est pour éliminer le bruit dans une piste.    

Notez que cette partie ne sera pas expliquée dans ce tutoriel.    

## OpenVINO Whisper Transcription
Si vous appuyez sur Alt+igrèque nous trouverons le sous-menu Analyse, faire plusieurs flèches haut jusqu'à atteindre l'élément appelé:    
`OpenVINO Whisper Transcription… o`    
Ceci est une option utilisée pour transcrire la partie  vocale à texte et traduire la partie vocale à texte dans une langue sélectionnée.    

##  Ajout de raccourcis pour le module OpenVINO pour Audacity

Ouvrez Audacity    
Ouvrez les Préférences d'Audacity (Préférences Ctrl+P).    
Allez à la Catégorie Raccourcis    
Faire Tabulation.    
`Définition des raccourcis clavier groupe`    
`Visualiser en arborescence bouton radio coché Alt+ a`    
Faire à nouveau Tabulation.    
`Rechercher : édition Alt+ h ligne 1 vide`    
Dans ce champ dédition, écrivez ceci:    
`OpenVINO`    
puis faire Entrée.    
Faire Tabulation.    
`Combinaisons de touches arborescence`    
Si nous faisons flèche bas, nous trouverons toutes les options pour le module OpenVINO pour Audacity que nous avons énumérées ci-dessus et elles sont les suivantes:    
`Générer Menu développé`    
`OpenVINO Music Generation…`    
`Effets Menu développé`    
`OpenVINO AI Effects développé`    
`OpenVINO Music Separation`    
`OpenVINO Noise Suppression`    
`Analyse Menu développé`    
`OpenVINO Whisper Transcription…`    

Maintenant que vous avez vu les options auxquelles aucune touche par défaut n'est attribuée pour lancer les options du module OpenVINO pour utiliser ces options, vous devez d'abord leur attribuer un raccourci et dans notre cas, j'ai considéré qu'il existe deux options qui peuvent le nécessité.    
La première option est:    
`OpenVINO Music Separation`    
Et la deuxième option est:    
`OpenVINO Whisper Transcription…`    

## Ajout d'un raccourci pour l'option OpenVINO Music Separation
Procédez comme suit:    
Recherchez l'élément:    
`OpenVINO Music Separation`    
Faire Tabulation:    
`Raccourci édition ligne 1 vide`    
Dans ce champ d'édition  il faudra attribuez un raccourci pour lancer cette option, dans mon cas, j'ai attribué le raccourci clavier:    
`Ctrl+Shift+s`    
J'ai mis la lettre s pour me rappeler qu'il s'agit du mot en anglais Separation.    
Faire Tabulation:    
Maintenant, nous appuyons avec la touche Entrée sur le bouton:    
`Attribuer bouton Alt+ a`    
Faire Shift+Tab    
Le raccourci que viens d'être ajouter sera indiqué par notre lecteur d'écran comme:    
`Raccourci édition sélectionné Ctrl+Shift+S`   
Faire encore Shift+Tab    
Le raccourci que viens d'être ajouter à cette option sera indiqué par notre lecteur d'écran comme:    
`OpenVINO Music Separation Ctrl+Shift+S`   

Notez que vous pouvez également appuyer sur Entrée sur le bouton:    
`Effacer bouton Alt+ e`    
dans le cas où ce raccourci ne vous convient pas ou vous avez échoué à la frappe d'une touche.    
Ce champ d'édition sera à nouveau vide et vous pouvez assigner un raccourci à cette option.    

À savoir que pour annuler les modifications en cours, vous pouvez appuyer sur Entrée sur le bouton:    
`Annuler bouton`    
Ceci vous ramènera à l'interface d'Audacity    

Une fois que vous avez ajouté ce raccourci à cette option, nous passerons à l'option suivante pour ajouter un raccourci sans fermer cette boîte de dialogue.    

Veuillez lire la suite de mes explications à ce sujet ci-dessous.    

## Ajout d'un raccourci pour l'option OpenVINO Whisper Transcription
Procédez comme suit:    
Recherchez l'élément:    
`OpenVINO Whisper Transcription`    
Faire Tabulation:    
`Raccourci édition ligne 1 vide`    
Dans ce champ d'édition  il faudra attribuez un raccourci pour lancer cette option, dans mon cas, j'ai attribué le raccourci clavier:    
`Ctrl+Shift+t`    
J'ai mis la lettre t pour me rappeler qu'il s'agit du mot en anglais Transcription.    
Faire Tabulation:    
Maintenant, nous appuyons avec la touche Entrée sur le bouton:    
`Attribuer bouton Alt+ a`    
Faire Shift+Tab    
Le raccourci que viens d'être ajouter sera indiqué par notre lecteur d'écran comme:    
`Raccourci édition sélectionné Ctrl+Shift+T`    
Faire encore Shift+Tab    
Le raccourci que viens d'être ajouter à cette option sera indiqué par notre lecteur d'écran comme:    
`OpenVINO Whisper Transcription… Ctrl+Shift+T`    

Notez que vous pouvez également appuyer sur Entrée sur le bouton:    
`Effacer bouton Alt+ e`    
dans le cas où ce raccourci ne vous convient pas ou vous avez échoué à la frappe d'une touche.    
Ce champ d'édition sera à nouveau vide et vous pouvez assigner un raccourci à cette option.    

À savoir que pour annuler les modifications en cours, vous pouvez appuyer sur Entrée sur le bouton:    
`Annuler bouton`    
Ceci vous ramènera à l'interface d'Audacity    

Maintenant que nous avons terminé d'attribuer leurs raccourcis respectifs à ces deux options appuyez sur Tab jusqu'au bouton:    
`Valider bouton`    
Et enfin appuyez sur Entrée.    

Vous pouvez maintenant lancer ces deux options via les raccourcis prévus à cet effet! 😏    

Pour l'option OpenVINO Music Separation vous trouverez Le nouveau raccourci dans le sous-menu Effets Alt+e sous l'élément  OpenVINO AI Effects sous-menu    
`OpenVINO Music Separation Ctrl+Shift+S o`    
Cette option est pour séparer une piste audio en deux pistes c'est-à-dire dans l'un d'eux il place la partie instrumentale où l'on n'entend que des instruments Et dans l'autre partie il place la partie vocale  c'est-à-dire la partie destinée à être chantée sans la partie instrumentale.    

Et pour l'option OpenVINO Whisper Transcription vous trouverez Le nouveau raccourci dans le sous-menu Analyse Alt+igrèque    
`OpenVINO Whisper Transcription… Ctrl+Shift+T o`    
Cette option est pour  faire une transcription c'est-à-dire qu'Audacity prend une piste audio Pour réaliser une transcription vocale à texte, de la même façon  peut réaliser une traduction de la transcription vocale à texte selon la langue que nous avons sélectionnée.    

Maintenant que vous connaissez les options que le module OpenVINO pour Audacity apporte, en principe si vous avez installé et configuré le module OpenVINO pour Audacity  et celui-ci n'a donné aucune erreur lors de l'ouverture du programme Audacity jusque-là tout est parfait. ✌    

Eh bien maintenant, je vais expliquer ci-dessous l'utilisation de ces deux plugins intégrés dans le module OpenVINO pour Audacity et je suppose que vous aviez installé et configuré ledit module OpenVINO pour Audacity comme expliqué sur le billet ci-dessous appelé:    
[L'intelligence artificielle débarque chez Audacity avec le module OpenVINO](https://blindhelp.github.io/OpenVINO-AI-effects-for-Audacity/)    

## Séparer une piste instrumentale et vocale en utilisant l'IA à partir du module OpenVINO pour Audacity
Pour ce faire une fois le programme Audacity ouvert, ouvrez un fichier .mp3 en utilisant l'option: `Ouvrir… Ctrl+O`    
Appuyez sur la barre d'espace pour lire ou mettre en pause l'audio.    
Appuyez sur Ctrl+A pour sélectionner l'intégralité de l'audio.    
Dans le cas qui nous intéresse par exemple nous allons séparer alors la musique, les instruments de la partie  vocale, pour cela, nous choisirons l'option que nous avons vue ci-dessus appelée:    
`OpenVINO Music Separation o`    
Appuyez sur "Entrée"  sur cet élément.    
Vous trouverez ceci dans le sous-menu Effets Alt+e    
Une boîte de dialogue s'ouvre comme nom:    
`OpenVINO Music Separation`    
`Separation Mode: liste déroulante (2 Stem) Instrumental, Vocals réduit`    
Cette option nous permet de créer deux pistes, la première est pour une piste instrumentale et la seconde est pour une piste vocale.    
Faire flèche bas pour trouver l'élément:    
`(4 Stem) Drums, Bass, Vocals, Others`    
Cette option nous permet de créer quatre pistes, c'est-à-dire séparer les instruments par exemple une piste pour la batterie, la basse Et ainsi de suite…    
Par exemple, si nous choisissons la première option:    
`Separation Mode: liste déroulante (2 Stem) Instrumental, Vocals réduit`    
Si vous tabulez ici vous trouvez deux options:    
`OpenVINO Inference Device: liste déroulante CPU réduit`    
Faire flèche bas pour trouver l'élément:    
`GPU`    
La première option nommée: "CPU" il s'agit d'un processeur (ou unité centrale de calcul, UCC ; en anglais central processing unit, CPU).    
Puis la deuxième option nommée: "GPU" il s'agit du processeur graphique.    
En principe avec l'option "CPU" pas de problème mais toutefois vous pourrez alors basculer vers la deuxième option "GPU"si vous trouvez un problème avec la première option.    
C'est question de tester, mais la première option pour moi est la bonne.    
Si vous tabulez une fois de plus vous trouverez un bouton appelé:    
`Device Details...`    
Par exemple lorsque vous appuyez sur ce bouton en utilisant la touche Entrée lorsque vous êtes sur CPU ou GPU vous obtiendrez des informations sur les détails de l'unité sélectionnée.    
Quand vous voulez retourner à la boîte de dialogue, appuyez simplement sur la touche Échap.    
Si vous tabulez une fois de plus vous trouverez une case à cocher appelée:    
`Advanced Options case à cocher non coché Alt+ a`    
Cette case à cocher, lorsqu'elle est cochée nous donnera plus d'options, mais quand je passe en revue celle-ci, je ne comprends rien à son contenu! :(    
Donc laissez-la telle quelle (celle-ci est non cochée par défaut).    
Cependant, si vous visitez la page de ce repos sur GitHub en utilisant le lien ci-dessous, vous pourrez probablement trouver plus d'informations en anglais sur cette option.    
<https://github.com/intel/openvino-plugins-ai-audacity/>    
Et ensuite si vous tabulez une fois de plus vous trouverez  deux boutons appelés:    
`Annuler bouton Alt+ a`    
Pour annuler les modifications, appuyez sur le bouton "Annuler" en utilisant la touche Entrée.    
`Appliquer bouton Alt+ a`    
Appuyez sur le bouton Appliquer en utilisant la touche Entrée pour que les paramètres prennent effet immédiatement.    
Veuillez noter que une fois cette action faites nous indiquera toujours le nom de la piste suivi de la mention "Non disponible".    
S'il vous plaît, attendez jusqu'à ce que ce processus soit terminé.    
Tout dépend de la taille de cette piste, par exemple, 2 minutes pour un morceau de 3 minutes et 45 secondes.    
Une fois sur la `Vue de piste` vous le trouverez affiché comme suit (le nom de cette piste n'est qu'un exemple utilisé pour créer ce tutoriel):    
`1 01 La Sonora Matancera - Yerbero Moderno Sélectionné`    
Vous trouverez votre piste originale avec son nom en première position (sans aucune mention en particulier).    
Faire flèche bas pour trouver cette même piste en deuxième position suivi de la mention `-Instrumental` comme ceci:    
`2 01 La Sonora Matancera - Yerbero Moderno-Instrumental Sélectionné`    
Cette même piste ne contient que la partie instrumentale.    
Pour écouter Cette piste , vous devez appuyer préalablement  sur Shift+S pour activer le mode Solo, celle-ci s'affiche maintenant avec la mention Solo comme ceci:    
`2 01 La Sonora Matancera - Yerbero Moderno-Instrumental Solo Sélectionné`    
Faire barre d'espace pour écouter cette piste uniquement avec la partie instrumentale.    
Les parties vocales ne sont pas écoutés.    
Appuyez à nouveau sur Shift+S pour désactiver le mode Solo pour cette piste.    
Faire flèche bas pour trouver cette même piste en troisième position suivi de la mention `-Vocals`    
`3 01 La Sonora Matancera - Yerbero Moderno-Vocals Sélectionné`    
Cette même piste ne contient que la partie vocale.    
Pour écouter Cette piste , vous devez appuyer préalablement  sur Shift+S pour activer le mode Solo, celle-ci s'affiche maintenant avec la mention Solo comme ceci:    
`3 01 La Sonora Matancera - Yerbero Moderno-Vocals Solo Sélectionné`    
Faire barre d'espace pour écouter cette piste uniquement avec la partie en vocale.    
Les instruments ne sont pas écoutés.    

Pour votre information:    
Lors de l'écoute de la piste vocale vous pouvez activer le mode Solo en appuyant sur Shift+S pour écouter seulement la partie instrumentale.    
Et si vous êtes sur la piste instrumentale, vous pouvez appuyer sur Shift+S pour activer le mode Solo pour écouter la partie vocale.    

Les résultats dépendent de la piste utilisée pour séparer la partie instrumentale et vocale.    

Par exemple, si nous voulons exporter la piste instrumentale pour faire une piste de type "karaoké" se déplacer simplement où se trouve la piste avec la partie instrumentale et appuyez sur Shift+S pour activer le mode Solo ensuite Faire barre d'espace pour écouter  et revoir cette piste pour vous assurer que vous n'écoutez que la partie instrumentale et si tout va bien vous pouvez maintenant appuyer sur Ctrl+Shift+e    
Une boîte de dialogue s'ouvre comme message:    
`Exporter l’audio dialogue Canaux`    
`Intervales d'export :`    
`Nom de fichier : édition Alt+ n`    
`01 La Sonora Matancera - Yerbero Moderno.mp3`    
Vous pouvez renommer ce nom de fichier par exemple en plaçant le type de séparation soit instrumentale ou vocale, dans notre cas je l'ai mis comme:    
`01 La Sonora Matancera - Yerbero Moderno (instrumentale).mp3`    
Faire Tab et appuyez ensuite sur l'élément appelé :    
`Exporter bouton Alt+ e`    

Comme je vous le dis, il peut y avoir des passages vierges lors de l'écoute de la piste instrumentale, c'est normal, tout cela dépend de la qualité et du contenu de la piste originale.    
En tout cas, le résultat final est bluffant! 😃    

Vous pouvez faire de-même pour exporter la piste contenant la partie vocale, pour ce faire, se déplacer simplement où se trouve la piste avec la partie vocale et appuyez sur Shift+S pour activer le mode Solo ensuite Faire barre d'espace pour écouter  et revoir cette piste pour vous assurer que vous n'écoutez que la partie vocale et si tout va bien vous pouvez maintenant appuyer sur Ctrl+Shift+e    
La même boîte de dialogue antérieure s'ouvre comme message:    
`Exporter l’audio dialogue Canaux`    
`Intervales d'export :`    
`Nom de fichier : édition Alt+ n`    
`01 La Sonora Matancera - Yerbero Moderno.mp3`    
Vous pouvez renommer ce nom de fichier par exemple en plaçant le type de séparation soit instrumentale ou vocale, dans notre cas je l'ai mis comme:    
`01 La Sonora Matancera - Yerbero Moderno (vocale).mp3`    
Faire Tab et appuyez ensuite sur l'élément appelé :    
`Exporter bouton Alt+ e`    

Comme je vous le dis, il peut y avoir aussi des passages vierges lors de l'écoute de la piste vocale, c'est normal, tout cela dépend de la qualité et du contenu de la piste originale.    
En tout cas, le résultat final est bluffant! 😃    

Celui-ci peut être utile si vous souhaitez importer un fichier vocal pour transcrire la partie vocale à texte en utilisant le même module OpenVINO pour Audacity. Pour plus de détails, vous pouvez lire mes explications à ce sujet ci-dessous.    

## Transcription et traduction vocale à texte en utilisant l'IA à partir du module OpenVINO pour Audacity
Pour ce faire une fois le programme Audacity ouvert, ouvrez un fichier .mp3 en utilisant l'option: `Ouvrir… Ctrl+O`    
Appuyez sur la barre d'espace pour lire ou mettre en pause l'audio.    
Appuyez sur Ctrl+A pour sélectionner l'intégralité de l'audio.    
Dans notre cas nous allons ouvrir le même fichier d'origine utilisé ci-dessus utilisé dans notre exemple précédent appelé:    
`01 La Sonora Matancera - Yerbero Moderno.mp3`    
Dans le cas qui nous intéresse par exemple nous allons transcrire la partie  vocale à texte, pour cela, nous choisirons l'option que nous avons vue ci-dessus appelée:    
`OpenVINO Whisper Transcription… o`    
Appuyez sur "Entrée"  sur cet élément.    
Vous trouverez ceci dans le sous-menu Analyse Alt+igrèque    
Une boîte de dialogue s'ouvre comme nom:    
`OpenVINO Whisper Transcription`    
Ici, nous trouverons la même option que nous avons vue ci-dessus:    
`OpenVINO Inference Device: liste déroulante CPU réduit`    
Faire flèche bas pour trouver l'élément:    
`GPU`    
La première option nommée: "CPU" il s'agit d'un processeur (ou unité centrale de calcul, UCC ; en anglais central processing unit, CPU).    
Puis la deuxième option nommée: "GPU" il s'agit du processeur graphique.    
En principe avec l'option "CPU" pas de problème mais toutefois vous pourrez alors basculer vers la deuxième option "GPU"si vous trouvez un problème avec la première option.    
C'est question de tester, mais la première option pour moi est la bonne.    
Si vous tabulez une fois de plus vous trouverez un bouton appelé:    
`Device Details...`    
Par exemple lorsque vous appuyez sur ce bouton en utilisant la touche Entrée lorsque vous êtes sur CPU ou GPU vous obtiendrez des informations sur les détails de l'unité sélectionnée.    
Quand vous voulez retourner à la boîte de dialogue, appuyez simplement sur la touche Échap.    
Si vous tabulez une fois de plus vous trouverez une liste déroulante  appelée:    
`Whisper Model: liste déroulante base réduit`    
Ici, nous trouverons les modèles de transcription, le modèle appelé "base" est le plus rapide.    
Faire flèche bas pour trouver les autres modèles de transcription.    
Par exemple, vous trouverez les modèles de transcription comme noms:    
`small`    
`small.en-tdrz`    
`medium`    
`large-v1`    
`large-v2`    
`large-v3`    
C'est question de tester tous ces modèles de transcription…    
Pour ma part J'ai testé en sélectionnant le modèle de transcription appelé:    
`large-v1`    
Une fois ce modèle de transcription sélectionné faire Tabulation.    
Ici vous trouverez une liste déroulante appelée:    
`Mode : liste déroulante transcribe réduit`    
En bon français cela signifie "transcrire" et c'est le premier mode utilisé pour faire une transcription de vocale à texte.    
Faire flèche bas pour trouver le deuxième mode appelé:    
`translate`    
En bon français cela signifie "traduire" et c'est le deuxième  mode utilisé pour faire une traduction de vocale à texte.    
Comme nous allons faire une transcription, nous utiliserons le premier mode appelé transcribe.    
Une fois ce premier mode appelé transcribe sélectionné faire Tabulation.    
Ici vous trouverez une liste déroulante appelée:    
`Source Language: liste déroulante auto réduit`    
Je ne modifie rien, je le laisse tel quel.    
Si vous tabulez une fois de plus vous trouverez une case à cocher appelée:    
`Advanced Options case à cocher non coché Alt+ a`    
Cette case à cocher, lorsqu'elle est cochée nous donnera plus d'options, mais quand je passe en revue celle-ci, je ne comprends rien à son contenu! :(    
Donc laissez-la telle quelle (celle-ci est non cochée par défaut).    
Et ensuite si vous tabulez une fois de plus vous trouverez  deux boutons appelés:    
`Annuler bouton Alt+ a`    
Pour annuler les modifications, appuyez sur le bouton "Annuler" en utilisant la touche Entrée.    
`Appliquer bouton Alt+ a`    
Appuyez sur le bouton Appliquer en utilisant la touche Entrée pour que les paramètres prennent effet immédiatement.    
Veuillez noter que une fois cette action faites nous indiquera toujours le nom de la piste suivi de la mention "Non disponible".    
S'il vous plaît, attendez jusqu'à ce que ce processus soit terminé.    
Notez que ce processus  de transcription de la partie vocale à texte peut demander un certain temps en fonction du contenu vocal trouvé sur ladite piste audio.    
Une fois sur la `Vue de piste` vous le trouverez affiché comme suit (le nom de cette piste n'est qu'un exemple utilisé pour créer ce tutoriel):    
`1 01 La Sonora Matancera - Yerbero Moderno Sélectionné`    
Vous trouverez votre piste originale avec son nom en première position (sans aucune mention en particulier).    
Faire flèche bas pour trouver cette transcription en deuxième position suivi de la mention `Transcription(large-v1) Piste de marqueur` comme ceci:    
`2 Transcription(large-v1) Piste de marqueur`    
Où large-v1 c'est le modèle de transcription que nous avons sélectionné précédemment.    
Pour l'exporter dans un document texte nous devons faire ce qui suit:    
Placez le curseur sur cette piste de marqueur et appuyez sur Entrée pour sélectionner la piste.    
Cette piste de marqueur  maintenant sera affiché comme suit:    
`2 Transcription(large-v1) Piste de marqueur Sélectionné`   
Appuyez sur Alt+f pour ouvrir le menu appelé:    
`Fichier sous-Menu Alt+ f`    
Flèche bas jusqu'à l'élément appelé:    
`Export Other sous-Menu r`    
Flèche droite et appuyez sur Entrée sur le premier élément appelé:    
`Exporter les marqueurs… u`    
Une boîte de dialogue s'ouvre comme message:    
`Exporter les marqueurs sous : dialogue Nom du fichier :`    
`Nom du fichier : liste déroulante réduit`    
`édition Alt+ n sélectionné Transcription(large-v1).txt`    
`Type : liste déroulante Fichiers texte (*.txt) réduit Alt+ t`    
`Enregistrer bouton Alt+ e`    
Vous pouvez appuyer sur Entrée sur ce bouton ou appuyer sur Entrée lorsque le curseur est situé sur le champ d'édition sur le nom du fichier .txt.    
Par défaut, il est enregistré dans le dossier qui a été configuré comme nom: Audacity dans Documents utilisé pour enregistrer les projets d'Audacity.    
`Enregistrer dans : liste déroulante Audacity réduit Alt+ d`    
Une fois que le fichier .txt a été enregistré, vous pouvez l'ouvrir avec le Bloc-notes de Windows depuis l'Explorateur de fichiers par exemple.    
Comme je l'ai dit avant, vous trouverez le fichier appelé:
`Transcription(large-v1).txt`    
Dans le dossier: Audacity dans Documents utilisé pour enregistrer les projets d'Audacity.    
Une fois le fichier .txt ouvert, vous trouverez avant chaque phrase la durée de début et fin de chaque phrase.    
Dire que ceci est très important pour les personnes qui travaillent dans La création de sous-titres mais si cela ne vous intéresse pas vous pouvez sélectionner l'intégralité du texte en utilisant le raccourci Ctrl+a.    
Une fois le texte sélectionné, notre lecteur d'écran nous dira par exemple:    
`2467 caractères sélectionné`    
Ensuite faire le raccourci Ctrl+c pour copier le texte dans le presse-papiers.    
Maintenant ouvrez Excel:     
Une méthode simple pour ouvrir un fichier Excel existant consiste à localiser le fichier sur votre ordinateur (par exemple, dans l'explorateur de fichiers sous Windows.    

Pour créer une feuille de calcul:    
1. Sous l'onglet Insertion , choisissez Feuille de calcul > Nouvelle feuille de calcul Excel. Une icône Excel s'affiche sur la page, ainsi qu'une image statique vide de la feuille de calcul.
2. Pour modifier la feuille de calcul, double-cliquez sur l'icône.

Une fois ouverte votre nouvelle feuille de calcul…    
Faire le raccourci Ctrl+v pour coller le texte dans le nouveau classeur:    
`Classeur1 - Excel`    
Dans la première colonne, la durré initiale sera affichée (A1, A2, etc, etc).    
Si nous faisons une flèche droite:    
Dans la deuxième colonne, la durré finale sera affichée (B1, B2, etc, etc).    
Si nous faisons une fois de plus flèche droite:    
Dans mon cas, j'ai trouvé le mot `[Música]` dans la troisième colonne puisque le contenu vocal utilisé sur la piste est l'espagnol (C1).    
Si nous faisons flèche bas, nous trouverons dans chaque cellule liée à la troisième colonne, la lettre de cette chanson (le texte est dans les cellule  C2, C3, etc, etc).    
Ceci est la colonne où nous devons récupérer ce texte et vous devrez utiliser le raccourci Ctrl+Espace pour sélectionner la colonne actuelle.
Une fois La troisième colonne contenant le texte sélectionnée , notre lecteur d'écran nous dira par exemple:    
`de C1   [Música] à C1048576   sélectionné ligne 1 à 1048576 colonne 3`    
Ensuite faire le raccourci Ctrl+c pour copier le contenu de la troisième colonne dans le presse-papiers.    
Trouvez le fichier txt que vous avez laissé ouvert comme nom:
`Transcription(large-v1).txt`    
Puis faire le raccourci Ctrl+v pour coller le contenu de la troisième colonne Dans notre fichier texte.    
Si nous faisons le raccourci Ctrl+début nous trouverons le début de la cellule C1 avec le texte:    
`[Música]`    
Si nous explorons le texte avec flèche bas, nous trouverons le contenu intégral de la troisième colonne (C1, C2, etc, etc, contenant le texte de la chanson).    
À la fin du texte de cette chanson, vous retrouverez avant chaque phrase la durée de début et fin de chaque phrase.    
Vous pouvez effacer toute cette partie car elle ne vous servira pas du tout.
Vous devriez simplement conserver la partie contenant le texte de la chanson dans ce fichier txt.    
Faire le raccourci Ctrl+S Pour enregistrer les modifications du document texte.    
Je vous conseille également de le sauvegarder ailleurs car ce même fichier sera remplacé lors de l'utilisation du deuxième mode translate lors de l'importation des marqueurs.    
Au moment de la sauvegarde, il prendra le nom suivi de l'extension .bak par exemple:    
`Transcription(large-v1).txt.bak`    
Comme vous l'avez remarqué, la transcription vocale à texte est bluffant! 😃    
Maintenant que vous savez comment utiliser le mode transcribe, nous utiliserons le mode translate. Pour plus de détails, vous pouvez lire mes explications à ce sujet ci-dessous.    

Pour ce faire, nous retournons à Audacity.    
Une fois sur la `Vue de piste` vous trouverez les pistes précédentes comme noms:    
`1 01 La Sonora Matancera - Yerbero Moderno Sélectionné`    
`2 Transcription(large-v1) Piste de marqueur Sélectionné`   
Nous fermons le tout par Alt+F4, il n'est pas nécessaire de enregistrer les changements du projet actuel.    

Pour ce faire une fois le programme Audacity ouvert, ouvrez un fichier .mp3 en utilisant l'option: `Ouvrir… Ctrl+O`    
Appuyez sur la barre d'espace pour lire ou mettre en pause l'audio.    
Appuyez sur Ctrl+A pour sélectionner l'intégralité de l'audio.    
Dans notre cas nous allons ouvrir le même fichier d'origine utilisé ci-dessus utilisé dans notre exemple précédent appelé:    
`01 La Sonora Matancera - Yerbero Moderno.mp3`    
Dans le cas qui nous intéresse par exemple nous allons transcrire la partie  vocale à texte, pour cela, nous choisirons l'option que nous avons vue ci-dessus appelée:    
`OpenVINO Whisper Transcription… o`    
Appuyez sur "Entrée"  sur cet élément.    
Vous trouverez ceci dans le sous-menu Analyse Alt+igrèque    
Une boîte de dialogue s'ouvre comme nom:    
`OpenVINO Whisper Transcription`    
Ici, nous trouverons la même option que nous avons vue ci-dessus:    
`OpenVINO Inference Device: liste déroulante CPU réduit`    
Faire flèche bas pour trouver l'élément:    
`GPU`    
La première option nommée: "CPU" il s'agit d'un processeur (ou unité centrale de calcul, UCC ; en anglais central processing unit, CPU).    
Puis la deuxième option nommée: "GPU" il s'agit du processeur graphique.    
En principe avec l'option "CPU" pas de problème mais toutefois vous pourrez alors basculer vers la deuxième option "GPU"si vous trouvez un problème avec la première option.    
C'est question de tester, mais la première option pour moi est la bonne.    
Si vous tabulez une fois de plus vous trouverez un bouton appelé:    
`Device Details...`    
Par exemple lorsque vous appuyez sur ce bouton en utilisant la touche Entrée lorsque vous êtes sur CPU ou GPU vous obtiendrez des informations sur les détails de l'unité sélectionnée.    
Quand vous voulez retourner à la boîte de dialogue, appuyez simplement sur la touche Échap.    
Si vous tabulez une fois de plus vous trouverez une liste déroulante  appelée:    
`Whisper Model: liste déroulante base réduit`    
Ici, nous trouverons les modèles de transcription, le modèle appelé "base" est le plus rapide.    
Faire flèche bas pour trouver les autres modèles de transcription.    
Par exemple, vous trouverez les modèles de transcription comme noms:    
`small`    
`small.en-tdrz`    
`medium`    
`large-v1`    
`large-v2`    
`large-v3`    
C'est question de tester tous ces modèles de transcription…    
Pour ma part J'ai testé en sélectionnant le modèle de transcription appelé:    
`large-v1`    
Une fois ce modèle de transcription sélectionné faire Tabulation.    
Ici vous trouverez une liste déroulante appelée:    
`Mode : liste déroulante transcribe réduit`    
En bon français cela signifie "transcrire" et c'est le premier mode utilisé pour faire une transcription de vocale à texte.    
Faire flèche bas pour trouver le deuxième mode appelé:    
`translate`    
En bon français cela signifie "traduire" et c'est le deuxième  mode utilisé pour faire une traduction de vocale à texte.    
Comme nous allons faire une transcription de la traduction , nous utiliserons le deuxième mode appelé translate.    
Une fois ce deuxième mode appelé translate sélectionné faire Tabulation.    
Ici vous trouverez une liste déroulante appelée:    
`Source Language: liste déroulante auto réduit`    
Faire une flèche bas et c'est là que vous pouvez sélectionner la langue de traduction de la transcription, par exemple:
`english`    
Vous pouvez sélectionnez également notre belle langue:    
`french`    
Si vous le souhaitez, vous pouvez appuyer sur la touche f trois fois pour le trouver plus rapidement.    
Si vous tabulez une fois de plus vous trouverez une case à cocher appelée:    
`Advanced Options case à cocher non coché Alt+ a`    
Cette case à cocher, lorsqu'elle est cochée nous donnera plus d'options, mais quand je passe en revue celle-ci, je ne comprends rien à son contenu! :(    
Donc laissez-la telle quelle (celle-ci est non cochée par défaut).    
Et ensuite si vous tabulez une fois de plus vous trouverez  deux boutons appelés:    
`Annuler bouton Alt+ a`    
Pour annuler les modifications, appuyez sur le bouton "Annuler" en utilisant la touche Entrée.    
`Appliquer bouton Alt+ a`    
Appuyez sur le bouton Appliquer en utilisant la touche Entrée pour que les paramètres prennent effet immédiatement.    
Veuillez noter que une fois cette action faites nous indiquera toujours le nom de la piste suivi de la mention "Non disponible".    
S'il vous plaît, attendez jusqu'à ce que ce processus soit terminé.    
Notez que ce processus  de transcription de la partie vocale à texte de la transcription traduit en anglais/français peut demander un certain temps en fonction du contenu vocal trouvé sur ladite piste audio.    
Une fois sur la `Vue de piste` vous le trouverez affiché comme suit (le nom de cette piste n'est qu'un exemple utilisé pour créer ce tutoriel):    
`1 01 La Sonora Matancera - Yerbero Moderno Sélectionné`    
Vous trouverez votre piste originale avec son nom en première position (sans aucune mention en particulier).    
Faire flèche bas pour trouver cette transcription en deuxième position suivi de la mention `Transcription(large-v1) Piste de marqueur` comme ceci:    
`2 Transcription(large-v1) Piste de marqueur`    
Où large-v1 c'est le modèle de transcription que nous avons sélectionné précédemment.    
Pour l'exporter dans un document texte nous devons faire ce qui suit:    
Placez le curseur sur cette piste de marqueur et appuyez sur Entrée pour sélectionner la piste.    
Cette piste de marqueur  maintenant sera affiché comme suit:    
`2 Transcription(large-v1) Piste de marqueur Sélectionné`   
Appuyez sur Alt+f pour ouvrir le menu appelé:    
`Fichier sous-Menu Alt+ f`    
Flèche bas jusqu'à l'élément appelé:    
`Export Other sous-Menu r`    
Flèche droite et appuyez sur Entrée sur le premier élément appelé:    
`Exporter les marqueurs… u`    
Une boîte de dialogue s'ouvre comme message:    
`Exporter les marqueurs sous : dialogue Nom du fichier :`    
`Nom du fichier : liste déroulante réduit`    
`édition Alt+ n sélectionné Transcription(large-v1).txt`    
`Type : liste déroulante Fichiers texte (*.txt) réduit Alt+ t`    
`Enregistrer bouton Alt+ e`    
Vous pouvez appuyer sur Entrée sur ce bouton ou appuyer sur Entrée lorsque le curseur est situé sur le champ d'édition sur le nom du fichier .txt.    
Par défaut, il est enregistré dans le dossier qui a été configuré comme nom: Audacity dans Documents utilisé pour enregistrer les projets d'Audacity.    
`Enregistrer dans : liste déroulante Audacity réduit Alt+ d`    
Une fois que le fichier .txt a été enregistré, vous pouvez l'ouvrir avec le Bloc-notes de Windows depuis l'Explorateur de fichiers par exemple.    
Comme je l'ai dit avant, vous trouverez le fichier appelé:
`Transcription(large-v1).txt`    
ou votre fichier de sauvegarde précédent comme nom:    
Transcription(large-v1).txt.bak
Dans le dossier: Audacity dans Documents utilisé pour enregistrer les projets d'Audacity.    
Une fois le fichier .txt ouvert, vous trouverez avant chaque phrase la durée de début et fin de chaque phrase suivi de la traduction de la transcription  du texte de la chanson.    
Dans le cas où la transcription de la traduction a échoué, vous obtiendrez après la durée de début et fin de chaque phrase la mention en anglais:    
`(upbeat music)`    
Dans notre belle langue française, cela signifie:    
`(musique optimiste)`    
Vous trouverez aussi une autre mention en anglais:    
`(singing in foreign language)`    
Dans notre belle langue française, cela signifie:    
`(chant en langue étrangère)`    

Malheureusement, j'ai bien utilisé ce deuxième mode appelé translate , mais le résultat n'était pas satisfaisant pour moi. ☹    

En revanche, le premier mode appelé  transcribe il m'a donné une entière satisfaction. 😁    

Peut-être que j'ai fait quelque chose de mal, je ne le sais pas! 😔    

Merci de bien vouloir partager votre expérience positive à propos de l'utilisation de ce deuxième mode appelé translate sur le blog ou en privé. 🛟    

Pour votre information:    

Si vous obtenez la transcription de la traduction en texte De la chanson selon la langue choisi À la bonne heure! 😄    
Dans ce cas, vous pouvez sélectionner l'intégralité du texte en utilisant le raccourci Ctrl+a.    
Ensuite faire le raccourci Ctrl+c pour copier le texte dans le presse-papiers.    
Maintenant ouvrez Excel:     
Une fois ouverte votre nouvelle feuille de calcul…    
Faire le raccourci Ctrl+v pour coller le texte dans le nouveau classeur:    
`Classeur1 - Excel`    
Sélectionnez le contenu du texte de la chanson trouvée  dans la troisième colonne en utilisant le raccourci Ctrl+Espace pour sélectionner la colonne actuelle.    
Ensuite faire le raccourci Ctrl+c pour copier le contenu de la troisième colonne dans le presse-papiers (C1, C2, etc, etc).    
Trouvez le fichier txt que vous avez laissé ouvert comme nom:
`Transcription(large-v1).txt`    
Puis faire le raccourci Ctrl+v pour coller le contenu de la troisième colonne Dans notre fichier texte.    
Assurez-vous que l'intégralité de la transcription du texte de la chanson traduite est correcte!        
Vous devriez simplement conserver la partie contenant le texte de la chanson dans ce fichier txt.    
Faire le raccourci Ctrl+S Pour enregistrer les modifications du document texte.    
Je vous conseille également de le sauvegarder ailleurs car ce même fichier sera remplacé lors de l'utilisation du deuxième mode translate lors de l'importation des marqueurs.    
Au moment de la sauvegarde, il prendra le nom suivi de l'extension .bak par exemple:    
`Transcription(large-v1).txt.bak`    

Eh bien, je suppose que si tout s'est bien passé Pendant la transcription du texte de la chanson traduite, vous souhaitez maintenant fermer le programme Audacity et vous reposez un peu. 😪    
Avant cela, nous retournons à l'interface d'Audacity.    
Une fois sur la `Vue de piste` vous trouverez les pistes précédentes comme noms:    
`1 01 La Sonora Matancera - Yerbero Moderno Sélectionné`    
`2 Transcription(large-v1) Piste de marqueur Sélectionné`   
Nous fermons le tout par Alt+F4, il n'est pas nécessaire de enregistrer les changements du projet actuel.    

Voilà c'est fini, 🔐    
Donc, je pense en avoir fait le tour sur l'utilisation du Module OpenVINO pour Audacity que je voulais aborder sur ce post. ✍    
Profitez pleinement du module OpenVINO pour Audacity! :)    
@+    
Rémy Ruiz (BlindHelp 🇫🇷)    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouveau espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

--- 