---
title: Extension Dual Voice pour NVDA et le logiciel SAPI_Unifier
permalink: "/Dual-Voice/"
layout: post
author: BlindHelp
---

<footer>Publié le Samedi 31 Octobre 2020 - Dernière mise à jour le Samedi 19 Juin 2021</footer>

Coucou mes amis du blog de BlindHelp!    
Cette extension Dual Voice pour NVDA  afin de basculer d'une langue à une autre est en anglais pour le moment. Vous trouverez ci-dessous des informations pertinentes sur cette extension, y compris sur  le logiciel SAPI_Unifier, développé par le même auteur.    

Attention : Comme d’habitude, vous êtes seuls responsables de vos actes, le mode opératoire que je donne ici a fonctionné pour moi mais je ne saurais être tenu pour responsable en cas de pépins, vous êtes prévenus !    

### Dual Voice ###

* Auteur: Mahmood Taghavi.    
* Vous pouvez télécharger la dernière version de l'extension Dual Voice pour NVDA à partir de [Sourceforge](https://sourceforge.net/projects/dualvoice/files/latest/download) ou téléchargez-le à partir de  la [page d'accueil du projet] (en anglais)](https://mahmood-taghavi.github.io/dual_voice/)    

Cette extension vous permet d'utiliser deux synthétiseurs ou voix pour lire le texte dans votre langue vocale choisie. Pour plus d'informations sur cette extension, lire la documentation de l'extension [readme (en anglais)](https://mahmood-taghavi.github.io/dual_voice/)    

Mais plus bas, je vous donne un extrait traduit en français de ce que l'auteur de l'extension Dual Voice et du logiciel SAPI_Unifier nous dit:    

Dual Voice est une extension  qui  permet d'utiliser deux voix différentes (actuellement les deux voix doivent prendre en charge SAPI5 standard) pour la lecture de deux langues un avec un script latin et un autre avec un script d'écriture non latin. Par exemple, un utilisateur peut sélectionner une voix pour lire l'anglais comme langue avec le script d'écriture latin et sélectionner une voix pour lire le Persian (la langue de l'auteur de cette extension) en tant que langue avec le script d'écriture non latin. Certaines des langues avec le script d'écriture latin sont l'anglais, tchèque, croate, néerlandais, finnois, français, allemand, italien, polonais, portugais, slovène, espagnol et turc. D'autre part, certaines langues avec le script non latin sont arabes, biélorusses, bulgares, chinoises, grecques, hébreu, japonaises, coréennes, persan, russe et ukrainienne.

Vous pouvez télécharger la dernière version de [Dual Voice pour NVDA compatible avec la version 2021.1 via le dépôt de l'auteur sur GitHub](https://github.com/Mahmood-Taghavi/dual_voice/releases/download/v5.0/dual_voice-5.0.nvda-addon), qui est maintenant la version 5.0.

Note 1: Vous pouvez maintenant utiliser une boîte de dialogue personnalisée intitulée "Dual voice" dans le menu NVDA pour sélectionner la voix secondaire et faire le réglage de Dual voice.

N'oubliez pas que le dialogue est en anglais, mais je pense qu'il est facile de comprendre. De toute façon je vais essayer de l'expliquer ci-dessous.

Note 2: Un logiciel libre nommé: SAPI_Unifier est conçu pour ajouter   une prise en charge pour les voix oneCore installées sous Windows 10  et les voix Microsoft speech platform (speech server) pour Dual Voice pour NVDA. Donc, je suggère d'utiliser [SAPI_Unifier (page du dépôt en GitHub de l'auteur)](https://mahmood-taghavi.github.io/SAPI_Unifier/) pour étendre les capacités de Dual Voice.

Note 3: La dernière version de NVDA qui prend en charge Windows XP et Windows Vista est NVDA 2017.3 et la dernière version de Dual Voice  compatible avec NVDA 2017.3 est la version 3.1.

Ce paquet est distribué sous les termes de la Licence publique générale GNU, version 2. Veuillez consulter le fichier "COPYING.txt" pour plus de détails Voir ceci sur le [dépôt  GitHub de l'auteur](https://github.com/Mahmood-Taghavi/dual_voice).

Vous pouvez également consulter la page en français de l'extension [Dual Voice pour NVDA](https://addons.nvda-project.org/addons/dualvoice.fr.html) à partir du  site de la communauté internationale.    

Mais vous trouverez les mêmes informations décrites ci-dessus.    

### SAPI_Unifier ###

Outil libre pour unifier toutes les voix Microsoft installées (à l'exception du SAPI 4) sous Windows.

[Voir le projet via le dépôt de l'auteur  sur GitHub](https://github.com/Mahmood-Taghavi/SAPI_Unifier)

Logiciel libre pour unifier les voix Microsoft OneCore et les voix Microsoft Speech Server avec Microsoft Speech API version 5 (SAPI 5) sous Windows. Par conséquent, les utilisateurs peuvent employer toutes les voix susmentionnées tels  comme les voix  SAPI 5 standard sous Windows.

Vous pouvez télécharger la [dernière version de SAPI Unifier partir de ce lien via le dépôt de l'auteur sur GitHub qui est la version 1.1.](https://github.com/Mahmood-Taghavi/SAPI_Unifier/releases/download/v1.1/SAPI_Unifier_requires_dot_NET_4.exe)

Ce logiciel spécialement conçu pour être utilisé avec [Dual Voice pour NVDA via le dépôt de l'auteur  sur GitHub  (page en anglais)](https://mahmood-taghavi.github.io/dual_voice/) pour améliorer l'accessibilité des utilisateurs malvoyants visuellement aux médias numériques du monde. Cependant, les voix unifiées peuvent être utilisées avec tout logiciel de lecture de texte qui prend en charge le pilote SAPI 5.

Note 1: Cette application dépend de Dot Net Framework 4.0 Ainsi, une version  4.x  de dot net framework doit auparavant avoir été installée. En outre, Windows XP est pris en charge. Vous pouvez télécharger  [dot Net framework 4 à partir du site Web de Microsoft (page en anglais)](https://www.microsoft.com/en-us/download/details.aspx?id=17718).

Note 2: Je suggère d'installer les voix Microsoft Speech Platform en particulier si votre Windows n'est pas la version 10, ce qui signifie que vous n'avez pas accès à  les voix Windows oneCor. Les voix Microsoft Speech Platform (server voices) fonctionnent également correctement sous Windows XP. Vous pouvez télécharger [x86_SpeechPlatformRuntime](https://www.microsoft.com/en-us/download/details.aspx?id=27225) et aussi les voix [MSSpeech_TTS](https://www.microsoft.com/en-us/download/details.aspx?id=27224) à partir du site Web de Microsoft (pages en anglais).

Licence: Ce paquet est distribué sous les termes de la Licence publique générale GNU, version 3. Veuillez consulter le fichier de licence pour plus de détails. Voir ceci sur le [dépôt  GitHub de l'auteur](https://github.com/Mahmood-Taghavi/SAPI_Unifier/blob/master/LICENSE).

# Mise en route #

La première chose à faire est d'installer le pack de langue pour configurer une autre langue autre que le Français sous Windows 10.

# Installation de nouveaux langages de synthèse vocale dans Windows 10 #

Il est facile d'installer une nouvelle langue dans Windows 10 pour cela suivez les instructions:    

1. Utilisez le raccourci clavier Windows-I pour ouvrir l'application Paramètres. Ou sélectionnez Démarrer> Paramètres.    
2. Utilisez les touches fléchées, la touche Entrée puis la touche Tab pour se déplacer afin de sélectionnez Heure et langue> Région et langue dans la fenêtre qui s'ouvre.    
`Langue d’affichage de Windows Français (France)`    
Remarque Très Importante: Si vous modifiez l'affichage de la langue actuelle  de Windows de Français (France) par une autre langue choisie laquelle est déjà entièrement configuré  votre ordinateur redémarre avec ces nouvelles valeurs, puis l'interface affichera la nouvelle langue qui vient d'être sélectionné. Soyez très prudent!    
Ceci est affiché lorsque tous les composants de ladite langue sont installés, par exemple:    
`Français (France) - Module linguistique installé; Conversion de texte par synthèse vocale installée; Reconnaissance vocale installée; Écriture manuscrite installé; La saisie de base est installée avec les vérificateurs d’orthographe et les dictionnaires disponibles.`    
`Espagnol (Espagne) - Module linguistique installé; Conversion de texte par synthèse vocale installée; Reconnaissance vocale installée; Écriture manuscrite installé; La saisie de base est installée avec les vérificateurs d’orthographe et les dictionnaires disponibles.`    
`Anglais (États-Unis) - Module linguistique installé; Conversion de texte par synthèse vocale installée; Reconnaissance vocale installée; Écriture manuscrite installé; La saisie de base est installée avec les vérificateurs d’orthographe et les dictionnaires disponibles.`    
Si vous n'avez aucune langue configurée, cela est affiché comme suit:    
`Espagnol (Espagne) - Module linguistique disponible`    
`Anglais (États-Unis) - Module linguistique disponible`    
Bien sûr, je ne met pas la langue en français sur cette liste parce que  cela est déjà configuré par défaut avec mon PC.    
Voici une [page en français via Microsoft des langues et voix prises en charge sous Windows 10](https://support.microsoft.com/fr-fr/windows/annexe-a-langues-et-voix-prises-en-charge-4486e345-7730-53da-fcfe-55cc64300f01)    
Voici plus bas les voix supplémentaires ajoutées aux langues disponibles selon ma configuration sous un Windows 10:    
Français (France: Paul, Hortense et  Julie.    
Espagnol (Espagne): Pablo, Hélène, et Laura.    
Espagnol (Mexique): Raul et Sabina.    
Anglais (États-Unis): David,Mark et Zira.    
3. Faire Maj+Tab: Cliquez sur le bouton "ajouter une langue". Veuillez noter que les fonctionnalités de synthèse vocale sont limitées aux langues suivantes: chinois, anglais, américain, britannique, mondial, français, allemand, italien, japonais, coréen, polonais, portugais, russe, espagnol (Mexique et Espagne).    
4. Attendez que la langue sélectionnée soit installée.    
5. Revenez en arrière d'une page et ouvrez à nouveau la page Région et langue. Vous devriez voir une notification indiquant que Windows recherche des modules linguistiques sur Windows Update. Si un module linguistique est trouvé, il sera mis en évidence après un bref instant.    
6. Cliquez sur la langue et sélectionnez Options.    
7. Vous pouvez installer le pack de langue complet ou un seul composant tel que speech.    

Une fois que vous avez fini de configurer une autre langue autre que le français fermé ce dialogue de paramètres.    
Puis  utiliser l'outil "SAPI_Unifier" qui unifie les voix installées dans Windows 10.    

# SAPI_Unifier #

C'est vraiment facile, cet outil fait tout ... vous ne devez rien faire de plus que l'exécuter.    
Le programme est en anglais, mais ce que vous devez faire attention ne concerne que les messages affichés à l'écran, donnant ainsi le processus d'unification des langues déjà installées.    
Recherchez le fichier téléchargé comme nom:    
`SAPI_Unifier_requires_dot_NET_4.exe`    
Une boîte de dialogue s'ouvre avec le message:    
`Fichier ouvert - Avertissement de sécurité dialogue L'éditeur n'a pas pu être vérifié. Voulez-vous vraiment exécuter ce logiciel?`    
Ensuite, vous devez faire plusieurs fois Tab pour appuyer sur le bouton:     
`Exécuter`    
Ensuite une nouvelle boîte de dialogue s'ouvre avec le message:    
`SAPI Unifier`    
`This program unifies installed Microsoft OneCore voices and Microsoft Speech Server voices with Microsoft SAPI 5. édition en lecture seule multiligne sélectionné Microsoft David - English (United States) is added from OneCore Speech API to SAPI 5.Microsoft Mark - English (United States) is added from OneCore Speech API to SAPI 5.Microsoft Zira - English (United States) is added from OneCore Speech API to SAPI 5.Microsoft Raul - Spanish (Mexico) is added from OneCore Speech API to SAPI 5.Microsoft Sabina - Spanish (Mexico) is added from OneCore Speech API to SAPI 5.`    
Une fois le processus d'unification terminé, vous devez tabuler 3  fois.    
`About SAPI Unifier bouton`    
`Visit project website lien`    
`Exit bouton`    
Cliquez sur ce bouton pour quitter le programme SAPI Unifier.    
C'est fait!    
Maintenant que nos voix sont unifiées avec l'outil SAPI_Unifier, vient la dernière partie, en particulier pour les personnes qui ont installé  le lecteur d'écran NVDA, vous devez installer l'extension et la configurer, pour cela suivez les instructions ci-dessous.

# Installation et configuration de l'extension Dual Voice Pour NVDA #

Pour installer l'extension Dual Voice pour NVDA, vous devez rechercher et cliquez sur le fichier:    
`dual_voice-5.0.nvda-addon`    
afin de démarrer le processus d'installation puis suivez les instructions à l'écran.    
NVDA vous demandera de confirmer que vous souhaitez installer cette extension.    
Répondez par "Oui" afin d'installer cette extension Dual Voice.    
Dès que l'extension est installée, NVDA doit redémarrer pour qu'elle puisse s'activer.    
Répondez par "Oui" afin de redémarrer NVDA.    

Nous passons maintenant à la configuration, pour cela suivez les instructions suivantes:    
La première chose que vous devez faire est de changer le synthétiseur pour être utilisé par l'extension Dual Voice, ainsi que choisir la voix  primaire.    
Quand on parle de la voix primaire est la voix utilisée comme langue par défaut   dans NVDA.    
Pour nous sera la langue en Français.    
Pour configurer le synthétiseur aller dans la catégorie Parole (NVDA+contrôle+v)    
La catégorie "Parole" dans le dialogue Paramètres de NVDA, contient des options vous permettant de changer le synthétiseur vocal ainsi que les caractéristiques de la voix.    
La première option dans la catégorie Parole est le bouton Changer... Ce bouton active le dialogue Choisir le Synthétiseur qui vous permet de choisir le synthétiseur actif et le périphérique de sortie. Ce dialogue s'ouvre par-dessus le dialogue Paramètres. Sauvegarder ou annuler les paramètres dans le dialogue de choix du synthétiseur vous ramènera au dialogue Paramètres.     
Vous pouvez aussi ouvrir cette  boîte de dialogue appelée "Choisir le synthétiseur" en appuyant sur NVDA+contrôle+s.    
Donc, une fois ouverte vous devez appuyer sur:    
`Changer... bouton Alt+c`    
Dans notre cas, nous devons choisir le synthétiseur nommé:    
`Synthétiseur : Dual voice using Speech API version 5`    
Ceci se situe  presque au-dessus de la liste.    
Modifiez éventuellement les autres paramètres de la voix, ou tout simplement appuyez sur Entrée ou faire plusieurs fois Tab jusqu'au bouton OK puis appuyer sur lui.    
Après avoir appuyé sur le bouton OK la voix sera celle de la langue  utilisée par défaut dans NVDA, dans notre cas est la langue en Français puis la voix est Microsoft Paul Mobile - French (France).    
Une fois que cela est fait vous ramènera au dialogue Paramètres.    
Nous retrouvons le nom du synthétiseur puis le bouton que nous avons vu précédemment suivies d'autres options:    
`Synthétiseur édition en lecture seule multiligne Alt+s Dual voice using Speech API version 5`    
`Changer... bouton Alt+c`    
`Voix: liste déroulante Microsoft Paul Mobile - French (France) réduit Alt+v`    
Dans cette zone de liste déroulante est que vous devez définir la voix primaire la quelle sera utilisé par NVDA est sera affiché dans les paramètres de l'extension Dual Voice:    
Quand on parle de la voix primaire est la voix utilisée comme langue par défaut   dans NVDA.    
Pour nous sera la langue en Français puis la voix est Microsoft Paul Mobile - French (France) par défaut.    
`Débit: Potentiomètre 50 Alt+d`    
`Hauteur: Potentiomètre 50 Alt+h`    
`Volume: Potentiomètre 100 Alt+o`    
`Changement automatique de langue (si supporté par le synthétiseur) case à cocher coché Alt+l`    
`Changement automatique de dialecte (si supporté par le synthétiseur) case à cocher non coché Alt+d`    
`Niveau de ponctuations et symboles : liste déroulante quelques-uns réduit Alt+p`    
`Se baser sur la langue de la voix pour le traitement des caractères et symboles case à cocher coché Alt+t`    
`Inclure les données du Consortium Unicode (incluant les emoji) dans le traitement des caractères et symboles case à cocher coché Alt+u`    
`Pourcentage de changement de hauteur pour indiquer les majuscules édition Alt+m 30`    
`Dire majuscule après les majuscules case à cocher non coché Alt+m`    
`Émettre un bip pour signaler les majuscules case à cocher non coché Alt+b`    
Note: Vous devez cocher une de ces deux cases à cocher, qui ne sont pas cochées par défaut, afin de: Dire majuscule après les majuscules ou Émettre un bip pour signaler les majuscules.    
`Utiliser la fonction d'épellation si elle est supportée case à cocher coché Alt+é`    
`OK bouton`    
`Annuler bouton`    

Une fois terminé, faire plusieurs fois Tab jusqu'au bouton OK puis appuyer sur lui.    

Sans oubliez d'appuyez sur l'option "Sauvegarder la configuration", depuis le menu NVDA, ou plus rapidement, en appuyant sur NVDA+contrôle+c.    

Maintenant, vous devrez paramétrer la voix secondaire dans l'extension Dual Voice pour NVDA, pour cela, vous devez aller dans le menu NVDA ou appuyez sur NVDA+n, ensuite vous devez trouver l'élément intitulé:    
`Dual voice sous-menu v`    
Ou appuyez simplement sur NVDA +n et appuyez sur la lettre v.    
Ne pas oublier que l'interface de cette extension Dual Voice est en anglais. Quoi qu'il en soit, je vais vous expliquer étape par étape ces manipulations:    
Une fois ouvert le sous-menu choisir la première option intitulé:    
`Settings of the Dual voice... s`    
Une fois que vous avez entré dans cette option un dialogue apparaît affichant un message contenant le nom de la voix primaire que vous venez de configuré précédemment:    
`The Dual Voice settings dialogue You have selected Microsoft Paul Mobile - French (France) as the primaryvoice.`    
Ce qui veut dire:    
Vous avez sélectionné Microsoft Paul Mobile - French (France) comme voix  primaire.
`Secondary voice: liste déroulante`    
Dans cette liste déroulante vous devez choisir la voix secondaire à utiliser par cette extension.    
Quand on parle de la voix secondaire est la voix utilisée comme langue secondaire dans cette extension.    
Pour moi sera la langue en Espagnol puis la voix est Microsoft Pablo - Spanish (Spain) par défaut.    
`Secondary voice: Microsoft Pablo - Spanish (Spain)`    
`Use the secondary voice for reading Latin text instead of non-Latin. case à cocher non coché Alt+u`    
Utilisez la voix secondaire pour la lecture de texte latin au lieu de non-latin.    
Celle-ci n'est pas cochée par défaut.    
Quand elle est cochée,verbalise tout le texte latin au lieu de non-latin avec la voix secondaire configuré.    
Note: La voix primaire prend l'accent phonétique de la voix secondaire lors de la lecture de texte latin.    
C'est le cas de le dire!    
`Rate: Potentiomètre 50 Alt+r`    
Débit: Cette option vous permet de modifier le débit de la parole. C'est un potentiomètre qui va de 0 à 100, (0 étant la vitesse la plus lente et 100 la plus rapide).    
`Pitch: Potentiomètre 50 Alt+p`    
Hauteur: Cette option vous permet de modifier la hauteur de la voix. C'est un potentiomètre qui va de 0 à 100 - 0 étant le son le plus grave et 100 le plus aigu.    
`Volume: Potentiomètre 100 Alt+o`    
Volume: Cette option est un potentiomètre qui va de 0 à 100 - 0 étant le volume le plus bas et 100 le plus élevé.    
`Prioritize non-Latin text over Latin text. case à cocher non coché Alt+p`    
Prioriser texte non latin sur le texte latin.    
Celle-ci n'est pas cochée par défaut.    
Quand elle est cochée,la voix verbalise en priorité le texte non latin sur le texte latin.    
À moins que je me trompe, vous devez installer une voix qui prend en charge la langue avec le script non latin.    
Certaines des langues avec le script d'écriture latin sont l'anglais, tchèque, croate, néerlandais, finnois, français, allemand, italien, polonais, portugais, slovène, espagnol et turc. D'autre part, certaines langues avec le script non latins sont l'arabe, le biélorusse, le bulgare, le chinois, le grec, l'hébreu, le japonais, le coréen, le persan, le russe et l'ukrainien.    
`Read numbers and punctuations based on surrounding text. case à cocher non coché Alt+n`    
Lire les chiffres et ponctuations en fonction du texte environnant.    
Quand elle est cochée,verbalise tous les chiffres et ponctuations trouvés dans le texte avec la voix secondaire configuré, si supportée par la synthèse vocale.    
En tout cas selon mon test lorsque la suivante option n'est pas coché:    
`Use the secondary voice for reading Latin text instead of non-Latin. case à cocher non coché Alt+u`    
Utilisez la voix secondaire pour la lecture de texte latin au lieu de non-latin.    
La voix primaire verbalise seulement le texte puis la voix secondaire verbalise tous les chiffres et ponctuations trouvés dans le texte avec la voix secondaire configuré, si supportée par la synthèse vocale.    
Je pense qu'il faut seulement coché la case à cocher ci-dessus pour lire un texte en utilisant la voix secondaire.    
Une fois que vous avez terminé la lecture du texte à l'aide de la voix secondaire, désactivez l'option  en décochant cette case à cocher.    
Quand je parle du texte lu avec la voix secondaire implique tout le texte affiché à l'écran du système d'exploitation Windows.    
c'est-à-dire la voix secondaire prendra la main sur la voix primaire qui aura l'intonation de la voix secondaire selon la langue utilisée.    
`Typing area: édition Alt+t You can type here to check the voices`    
Zone de frappe: Vous pouvez taper ici pour vérifier les voix.
Dans cette zone d'édition tapez le texte afin de tester la voix secondaire de la langue que vous venez de configuré.    
`OK bouton`    
`Annuler bouton`    
Appuyez sur le bouton OK afin de valider vos modifications.    
Pour annuler les modifications, appuyez sur le bouton Annuler ou sur la touche Échap.    

Quand vous ouvrez le sous-menu  de l'extension Dual Voice qui se trouve dans le menu NVDA,  NVDA+n, et en appuyant sur la lettre v:    
`Dual voice sous-Menu v`    
L'extension Dual Voice une fois ouverte contient les options suivantes:    
 `Settings of the Dual voice... s`    
 Cette option contenant les paramètres de Dual voice a déjà été décrit ci-dessus.    
 `Visit the SAPI Unifier website! u`    
 Cliquez sur  cette option pour visiter le  site Web de SAPI Unifier (page en anglais), cela aura pour effet d'ouvrir la page dans votre navigateur Web par défaut.    
`Visit the Dual Voice website! d`    
Cliquez sur  cette option pour visiter le site Web de Dual Voice (page en anglais), cela aura pour effet d'ouvrir la page dans votre navigateur Web par défaut.    
 `About the Dual voice for NVDA a`    
En appuyant sur cette option s'ouvrira un dialogue qui vous permet de connaître tous les détails concernant l'extension de Dual Voice pour NVDA.    
Le contenu de ce dialogue est en anglais.    
Cliquez sur le bouton OK pour fermer ce dialogue.    

Je pense que j'ai fait le tour de l'utilisation de l'extension Dual Voice pour NVDA ainsi que l'utilisation de l'outil SAPI_Unifier et la façon de configurer les langues  sous Windows 10 pour être utilisé avec ladit extension par le lecteur d'écran NVDA.    

# Paramétrage du synthétiseur pour être utilisé par les voix SAPY 5 sans utiliser l'extension Dual Voice pour NVDA #

Si vous ne souhaitez pas utiliser l'extension Dual Voice pour  NVDA, vous pouvez toujours utiliser les voix que vous venez de configurées sous Windows 10 puis avoir unifiées les voix  en utilisant l'outil SAPI_Unifier, mais cette fois vous devrez utiliser le synthétiseur nommé:    
`Synthétiseur : Microsoft Speech API version 5`    
La première chose que vous devez faire est de changer le synthétiseur pour être utilisé par les voix SAPY 5 dans NVDA.     
Pour configurer le synthétiseur aller dans la catégorie Parole (NVDA+contrôle+v)    
La catégorie "Parole" dans le dialogue Paramètres de NVDA, contient des options vous permettant de changer le synthétiseur vocal ainsi que les caractéristiques de la voix.    
La première option dans la catégorie Parole est le bouton Changer... Ce bouton active le dialogue Choisir le Synthétiseur qui vous permet de choisir le synthétiseur actif et le périphérique de sortie. Ce dialogue s'ouvre par-dessus le dialogue Paramètres. Sauvegarder ou annuler les paramètres dans le dialogue de choix du synthétiseur vous ramènera au dialogue Paramètres.     
Vous pouvez aussi ouvrir cette  boîte de dialogue appelée "Choisir le synthétiseur" en appuyant sur NVDA+contrôle+s.    
Donc, une fois ouverte vous devez appuyer sur:    
`Changer... bouton Alt+c`    
Dans notre cas, nous devons choisir le synthétiseur nommé:    
`Synthétiseur : Microsoft Speech API version 5`    
Modifiez éventuellement les autres paramètres de la voix, ou tout simplement appuyez sur Entrée ou faire plusieurs fois Tab jusqu'au bouton OK puis appuyer sur lui.    
Après avoir appuyé sur le bouton OK la voix sera celle de la langue  utilisée par défaut dans NVDA, dans notre cas est la langue en Français puis la voix est Microsoft Hortense Desktop - French.    
Une fois que cela est fait vous ramènera au dialogue Paramètres.    
Nous retrouvons le nom du synthétiseur puis le bouton que nous avons vu précédemment suivies d'autres options:    
`Synthétiseur édition en lecture seule multiligne Alt+s Microsoft Speech API version 5`    
`Changer... bouton Alt+c`    
`Voix: liste déroulante Voix: Microsoft Hortense Desktop - French réduit Alt+v`    
Dans cette zone de liste déroulante est que vous devez définir la voix  la quelle sera utilisé par NVDA:    
Quand on parle de la voix est la voix utilisée comme langue par défaut   dans NVDA.    
Pour nous sera la langue en Français puis la voix est Microsoft Hortense Desktop - French par défaut.    
`Débit: Potentiomètre 50 Alt+d`    
`Hauteur: Potentiomètre 50 Alt+h`    
`Volume: Potentiomètre 100 Alt+o`    
`Changement automatique de langue (si supporté par le synthétiseur) case à cocher coché Alt+l`    
`Changement automatique de dialecte (si supporté par le synthétiseur) case à cocher non coché Alt+d`    
`Niveau de ponctuations et symboles : liste déroulante quelques-uns réduit Alt+p`    
`Se baser sur la langue de la voix pour le traitement des caractères et symboles case à cocher coché Alt+t`    
`Inclure les données du Consortium Unicode (incluant les emoji) dans le traitement des caractères et symboles case à cocher coché Alt+u`    
`Pourcentage de changement de hauteur pour indiquer les majuscules édition Alt+m 30`    
`Dire majuscule après les majuscules case à cocher non coché Alt+m`    
`Émettre un bip pour signaler les majuscules case à cocher non coché Alt+b`    
Note: Vous devez cocher une de ces deux cases à cocher, qui ne sont pas cochées par défaut, afin de: Dire majuscule après les majuscules ou Émettre un bip pour signaler les majuscules.    
`Utiliser la fonction d'épellation si elle est supportée case à cocher coché Alt+é`    
`OK bouton`    
`Annuler bouton`    

Une fois terminé, faire plusieurs fois Tab jusqu'au bouton OK puis appuyer sur lui.    

Sans oubliez d'appuyez sur l'option "Sauvegarder la configuration", depuis le menu NVDA, ou plus rapidement, en appuyant sur NVDA+contrôle+c.    

# Paramétrage de Balabolka pour être utilisé par les voix SAPY 5 #

Vous pouvez toujours utiliser les voix que vous venez de configurées sous Windows 10 puis avoir unifiées les voix  en utilisant l'outil SAPI_Unifier, mais cette fois vous devrez définir  les voix SAPY 5 dans le programme Balabolka, pour cela suivez les instructions ci-dessous:    
Vous devez d'abord ouvrir le programme Balabolka à partir de son raccourci sur le bureau.    
Ensuite aller dans Fichier sous-Menu Alt+f    
Puis dans Réouvrir sous-Menu    
Dans ce sous-menu  Vous devez ouvrir le document souhaité (Çça peut être un document en anglais, français, espagnol, etc.    
Par exemple, si j'ouvre un document en français, je voudrais que la lecture du document puisse être lu avec la voix SaPY 5  correspondante  à cette langue.    
 Pour cela vous allez dans Texte sous-Menu Alt+t    
 Puis ensuite vous cliquez sur:    
`Lecture Directe (SAPI 5)... Ctrl+Alt+D`    
Cela aura pour effet d'ouvrir un dialogue, puis se déplacer avec Ctrl+Tab jusqu'à l'onglet SAPI 5    
Vous trouverez une liste déroulante où vous pouvez choisir la voix SAPY 5 de la langue dans laquelle votre document est rédigé.    
Par exemple si le document est écrit en français vous pouvez choisir une autre voix SAPY 5 de celle utilisée par NVDA.    
`liste déroulante Microsoft Paul Mobile [Français (France)]  réduit`    
Et si la documentation est écrit  en espagnol  vous pouvez choisir par exemple la voix SAPY 5 en espagnol:    
`liste déroulante Microsoft Pablo [Espagnol (International)] réduit`    
Lorsque vous tabuler vous avez deux boutons:    
`Description bouton`    
Si vous cliquez sur ce bouton, vous obtiendrez des informations sur la voix SAPY 5 que vous venez de choisir dans la liste déroulante.    
`Par défaut bouton`    
Si vous cliquez sur ce bouton vous mettez par défaut la voix SAPY 5 que vous venez de choisir dans la liste déroulante.    
Lorsque vous tabuler vous trouver trois potentiomètres le premier est pour le débit, le deuxième est pour la hauteur et le troisième est pour le volume. Ceux-ci sont présentés comme suit ( avec leurs valeurs par défaut):    
`Potentiomètre 50`    
Débit: Cette option vous permet de modifier le débit de la parole. C'est un potentiomètre qui va de 0 à 100, (0 étant la vitesse la plus lente et 100 la plus rapide).    
Quand le focus est sur  ce potentiomètre:    
Vous pouvez utiliser les  touches fléchées pour augmenter ou diminuer la valeur par paliers  de 5%    
Vous pouvez utiliser touches début ou fin soit pour mettre la valeur à 0% ou 100%    
 Vous pouvez utiliser page précédente ou  page suivante pour augmenter ou diminuer la valeur par paliers  de 10%    
`Potentiomètre 50`    
Hauteur: Cette option vous permet de modifier la hauteur de la voix. C'est un potentiomètre qui va de 0 à 100 - 0 étant le son le plus grave et 100 le plus aigu. 
Quand le focus est sur  ce potentiomètre:    
Vous pouvez utiliser les  touches fléchées pour augmenter ou diminuer la valeur par paliers  de 5%    
Vous pouvez utiliser touches début ou fin soit pour mettre la valeur à 0% ou 100%    
 Vous pouvez utiliser page précédente ou  page suivante pour augmenter ou diminuer la valeur par paliers  de 10%    
`Potentiomètre 100`    
Volume: Cette option est un potentiomètre qui va de 0 à 100 - 0 étant le volume le plus bas et 100 le plus élevé. 
Quand le focus est sur  ce potentiomètre:    
Vous pouvez utiliser les  touches fléchées pour augmenter ou diminuer la valeur par paliers  de 1%    
Vous pouvez utiliser touches début ou fin soit pour mettre la valeur à 0% ou 100%    
 Vous pouvez utiliser page précédente ou  page suivante pour augmenter ou diminuer la valeur par paliers  de 5%    
 
Lorsque vous êtes dans la documentation ouverte vous Pouvez toujours faire majuscule+tab pour atteindre cette liste déroulante dans l'onglet SAPY 5 afin  de pouvoir modifier la voix SAPY 5 dans la langue souhaitée,  y compris dans le cas où la voix SAPY 5 utilisée est pas celle de la  langue utilisée dans la documentation.
 
À savoir qu'il y a deux onglets En dehors  de l'onglet SAPI 5. Ce sont:    
`SAPI 4`    
`Microsoft Speech Platform`    

Chacun de ces onglets contiendra leurs propres voix utilisées par Balabolka en fonction des voix installées sur le système d'exploitation Windows.    

Pour en savoir plus sur Balabolka veuillez consulter  la {[Page d'Accueil de Balabolka](http://www.cross-plus-a.com/fr/balabolka.htm)    
Ou étant ouvert Balabolka  appuyez sur F1 pour l'aide.    

Ci-dessous je vous donne des informations utiles fournies par notre ami Michel Such, je pense qu'ils sont encore d'actualité, et sont pour les personnes qui n'ont pas installé ces voix sur   leurs PC.    

# Harmonie et Hortense #

Vous pouvez utiliser la voix Harmonie et Hortense avec Windows 7.    

Les voix Harmonie et Hortense de Microsoft sont à l'origine prévues pour la réalisation de serveurs vocaux téléphonique.    
Pour cette raison, leur bande passante est assez étroite et elles donnent l'impression de sortir d'un téléphone.    
Cependant, la compréhension est excellente et on note peu d'erreurs dans la prononciation des mots.    
De plus, la bande passante étroite est bien adaptée à la reproduction sur les petits haut-parleurs intégrés aux ordinateurs portables.    

# Le Moteur de Synthèse Microsoft Speech #

Ces voix n'étant ni Sapi 4 ni Sapi 5, vous devrez, avant d'installer les voix, télécharger et installer le moteur de synthèse Microsoft Speech. Lien de téléchargement : [Télécharger le moteur Microsoft Speech version 11](http://download.microsoft.com/download/A/6/4/A64012D6-D56F-4E58-85E3-531E56ABC0E6/x86_SpeechPlatformRuntime/SpeechPlatformRuntime.msi)    

# La Voix Harmonie #

Harmonie est une voix francophone Canadienne. Une fois le moteur installé, vous pouvez la télécharger [ici : MSSpeech_TTS_fr-CA_Harmonie.msi](http://download.microsoft.com/download/4/0/D/40D6347A-AFA5-417D-A9BB-173D937BEED4/MSSpeech_TTS_fr-CA_Harmonie.msi)    

# La Voix Hortense #

Hortense est une voix francophone Française. Une fois le moteur installé, vous pouvez la télécharger [ici : MSSpeech_TTS_fr-FR_Hortense.msi](http://download.microsoft.com/download/4/0/D/40D6347A-AFA5-417D-A9BB-173D937BEED4/MSSpeech_TTS_fr-FR_Hortense.msi)    

# Autres Langues Disponibles #

De nombreuses autres langues sont disponible sur le site de Microsoft. Vous pouvez les télécharger [ici (site en Anglais) : Autres langues pour Microsoft Speech Platform](http://go.microsoft.com/fwlink/?LinkID=223569&clcid=0x409)    

Si vous n'avez pas modifier les paramètres avant dans votre système d'exploitation Windows 10, au moyen d'une modification de la base de registres, il est également possible d'utiliser les voix Paul et Julie comme des voix SAPY 5, parce que la langue en français est déjà installée.    
Pour que l'espagnol soit utilisable, il faut que la langue espagnole soit disponible sur votre système d'exploitation  Windows 10.    
Des langues additionnelles peuvent être installées en ouvrant le menu Démarrer, choisir Paramètres, Sélectionner Heure et Langue -> Région et Langue puis choisir Ajouter une langue.    
Bref, voici en téléchargement le fichier comportant toutes les langues disponibles pour Windows 10, fichier préparé par ce bon Ilya Morozov, auteur de Balabolka, [en cliquant ici](http://balabolka.site/mobile.windows10.zip)    
Une fois le fichier décompressé,  chercher le dossier nommé: French (France)   
Cliquer sur le fichier correspondant à son système d'exploitation Windows 10, soit: x64 pour un Windows 64 bits ou x86 pour un Windows  32 bits.    
Si vous appliquez  les modifications de registre pour chaque langue ajoutée, elles apparaîtront dans Balabolka, dans Jaws, et de manière générale dans tous les logiciels supportant le SAPY 5.    
Par exemple, si vous avez choisi la langue en français à partir d'un fichier d'extension .reg Une fois exécuté, cela aura pour effet de mettre à jour la base de registre vous donnant accès à Paul et Julie en SAPY 5.
Ceci sera affiché comme nom:    
`Microsoft Julie Mobile - French (France)`    
`Microsoft Paul Mobile - French (France)`   

---

Voilà,    
Sur ce, je vous souhaite une bonne utilisation de l'extension Dual Voice pour NVDA!    
@+    
BlindHelp!    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouveau espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---
