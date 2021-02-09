---
title: Disponible NVDA 2020.4rc1
permalink: "/Disponible-NVDA-2020.4rc1"/
layout: post
author: BlindHelp
---

<footer>Lundi 8 Février 2021</footer>

Il y a quelques heures, NV Access a annoncé la publication de la première version candidate(rc1) de NVDA 2020.4. Celle-ci est maintenant disponible au téléchargement!                  

Si aucune erreur critique n'est détectée, la version stable 2020.4 sera presque identique à cette version.

Cette version est destinée aux utilisateurs qui souhaitent essayer NVDA 2020.4 avant sa publication officielle et qui souhaitent fournir des suggestions et des commentaires. Son utilisation dans les environnements de production est totalement déconseillée, tandis qu'ils devraient continuer à exécuter la version 2020.3 jusqu'à ce que la version 2020.4 soit déclaré stable.         

Les versions candidates (release candidate) devrait être testé (même installé) par le plus grand nombre possible de personnes, comme indiqué dans ce poste de [NV Access](https://www.nvaccess.org/post/in-process-16th-january/) (en anglais).

Si vous avez installé la version Beta, vous pouvez obtenir NVDA 2020.4rc1 à partir du menu d'aide de NVDA en sélectionnant l'option "Rechercher une mise à jour...". La boîte de dialogue de mise à jour peut même apparaître automatiquement à tout moment.

Si vous voulez l'installer et que vous avez une version stable, vous pouvez télécharger le fichier d'installation depuis le lien ci-dessous qui vous mènera à la page habituelle de téléchargement  de NV Access (en anglais) ou utilisez autrement le lien direct ci-dessous fourni par NV Access.             

Comme expliqué dans cet  [article de NV Access sur NVDA 2020.4rc1](https://www.nvaccess.org/post/nvda-2020-4rc1/) (en anglais), ceux-ci sont les changements par rapport à la version NVDA 2020.4beta4:

# 2020.4 #

Cette version inclut le support de nouvelles méthodes d'entrée chinoises, une mise à jour de Liblouis, et la liste d'éléments (NVDA+F7) fonctionne maintenant en mode formulaire. Une aide contextuelle est maintenant disponible lors de l'appui sur F1 dans les boîtes de dialogue NVDA. Améliorations pour les règles de prononciation, les dictionaires de parole, les messages Braille et la lecture continue. Correctifs et améliorations pour Courrier, Outlook, Teams, Visual Studio, Azure Data Studio et Foobar2000. Sur le Web, améliorations pour Google Docs, et meilleur support d'ARIA. Plus beaucoup d'autres correctifs et améliorations. 

# Nouvelles fonctionnalités #

* Appuyer sur F1 à l'intérieur d'un dialogue NVDA ouvrira maintenant le guide utilisateur à la section la plus appropriée. (#7757) 
* Support des suggestions d'autocomplétion (IntelliSense) dans Microsoft SQL Server Management console et Visual Studio 2017 et supérieur. (#7504) 
* Prononciation des symboles, prise en charge des regroupement de symboles dans une règle complexe, et prise en charge des références à un groupe dans une règle de remplacement. Cela les rend plus simples, et plus puissantes. (#11107) 
* Les utilisateurs sont maintenant avertis lorsqu'ils tentent de créer une entrée dans le dictionnaire de prononciation avec une expression régulière de remplacement invalide. (#11407) 
	* Plus particulièrement, les erreurs de groupe sont maintenant détectées. 
* Ajout du support des nouvelles méthodes de saisie rapide et pinyin pour le Chinois Traditionnel dans Windows 10. (#11562) 
* Les en-têtes d'onglet sont maintenant considérés comme des champs de formulaire avec la touche de navigation rapide f. (#10432) 
* Ajout d'une commande pour basculer l'annonce du texte marqué, surligné, sans geste de commande par défaut. (#11807) 
* Ajout du paramètre de ligne de commande --copy-portable-config qui vous permet de copier la configuration utilisateur lors de l'installation silencieuse de NVDA. (#9676) 
* Les routines Braille sont maintenant supportées dans la visionneuse Braille pour les utilisateurs de la souris, survoler pour se déplacer directement à une cellule Braille. (#11804) 
* NVDA détectera maintenant les afficheurs Braille HumanWare Brailliant BI 40X et 20X via USB et Bluetooth. (#11819) 

# Changements #

* Mise à jour du transcripteur Braille Liblouis à la version 3.16.1. 
	* Correction de beaucoup de plantages 
	* Ajout de la table Braille Bachkir grade 1 
	* Ajout de la table Braille Copte informatique 8 points 
	* Ajout des tables Braille Russe braille littéraire et Russe braille littéraire (détaillé). 
	* Ajout de la table Afrikaans abrégé 
	* Suppression de la table Braille Russe grade 1 
* Lors de la lecture en mode "Dire tout" en mode navigation, les commandes "Rechercher suivant" et "Rechercher précédent" n'arrêtent plus la lecture si l'option "Autoriser le survol en mode dire tout" est activée. À la place, la lecture reprend après le résultat précédent ou suivant trouvé. (#11563) 
* Pour les afficheurs Braille HIMS, F3 a été réassigné à espace + points 148. (#11710) 
* Améliorations des options du temps d'affichage et de l'affichage permanent des messages en Braille. (#11602) 
* Dans les navigateurs Web et autres applications supportant le mode navigation, la liste d'éléments (NVDA+F7) peut maintenant être invoquée en mode formulaire. (#10453) 
* Les mises à jour des régions ARIA-Live ne sont plus annoncées quand l'annonce du changement dynamique de contenu est désactivée. (#9077) 
* NVDA annoncera maintenant "Copier dans le presse-papiers" avant le texte copié. (#6757) 
* La présentation du mode tableau graphique dans le gestionnaire de disques a été améliorée. (#10048) 
* Les labels des contrôles sont maintenant désactivés (grisés) lorsque le contrôle est désactivé. (#11809) 
* Mise à jour de la base d'annotations emojis CLDR à la version 38. (#11817) 
* La fonction interne "Mise en Évidence du Focus" a été renommée "Mise en Évidence Visuelle". (#11700) 

# Corrections de bogues #

* NVDA fonctionne à nouveau correctement avec les champs d'édition de l'application Fast Log Entry. (#8996) 
* Report du temps écoulé dans Foobar2000 lorsque le temps total n'est pas disponible, par exemple lors de la lecture d'une diffusion en direct. (#11337) 
* NVDA interprète maintenant correctement l'attribut aria-roledescription sur les éléments éditables dans les pages Web. (#11607) 
* "Liste" n'est plus annoncé à toutes les lignes d'une liste dans Google Docs ou tout autre contenu éditable dans Google Chrome. (#7562) 
* Lors de la navigation par caractères ou mots avec les flèches entre plusieurs éléments de liste en mode navigation, l'arrivée sur un nouvel élément de liste est maintenant annoncée. (#11569) 
* NVDA lit désormais la ligne correcte lorsque le curseur est placé à la fin d'un lien à la fin d'un élément de liste dans Google Docs ou tout autre contenu éditable sur le Web. (#11606) 
* Sous Windows 7, ouvrir et refermer le menu démarrer depuis le bureau replace maintenant correctement le focus. (#10567) 
* Lorsque "Essayer de couper la parole pour les événements de focus expirés" est activé, les titres des tableaux sont maintenant à nouveau correctement annoncés dans Firefox. (#11397) 
* NVDA n'échoue plus à lire un élément de liste après qu'un caractère a été saisi dans une liste avec les voix SAPI5 de Ivona. (#11651) 
* Il est à nouveau possible d'utiliser le mode navigation pour lire un mail dans l'application Mail version 16005.13110 ou supérieure de Windows 10. (#11439) 
* Lors de l'utilisation des voix Ivona SAPI5 de harposoftware.com, NVDA est maintenant capable d'enregistrer sa configuration (changement de synthétiseur) et ne reste plus silencieux après redémarrage. (#11650) 
* Il est maintenant possible de saisir le chiffre 6 depuis le clavier Braille des afficheurs Braille Hims. (#11710) 
* Améliorations majeures de performances dans Azure Data Studio. (#11533, #11715) 
* Avec l'option "Essayer de couper la parole pour les événements de focus expirés" activée, le titre du dialogue de recherche de NVDA est à nouveau annoncé. (#11632) 
* NVDA ne devrait plus se figer lorsque l'ordinateur sort de veille et que le focus se trouve dans un document Microsoft Edge. (#11576) 
* Il n'est plus nécessaire d'appuyer sur tab ou de bouger le curseur après la fermeture du menu contextuel dans Microsoft Edge pour que le mode navigation fonctionne à nouveau. (#11202) 
* NVDA n'échoue plus à lire les éléments des listes dans les applications 64 bits comme Tortoise SVN. (#8175) 
* ARIA treegrids apparaît maintenant comme un tableau normal dans Chrome et Firefox. (#9715) 
* Une recherche en sens inverse peut maintenant être invoquée avec "Recherche précédent" et le raccourcis NVDA+Shift+F3.' (#11770) 
* Un script NVDA n'est plus traité comme répété si une touche sans rapport est pressée entre les deux exécutions du script. (#11388) 
* Les attributs gras et emphase peuvent à nouveau être ignorés dans Internet Explorer en désactivant l'option "Emphase" dans les paramètres de mise en forme des documents. (#11808) 
* Un plantage de quelques secondes rencontré par quelques utilisateurs lors de la navigation entre les cellules dans Excel ne devrait plus se produire. (#11818) 
* Dans Microsoft Teams avec des numéros de version tels que 1.3.00.28xxx, NVDA n'échouera plus à lire les messages dans le chat ou les canaux d'équipe à cause d'un élément de menu focalisé par erreur. (#11821) 
* Le texte marqué à la fois comme contenant des erreurs d'orthographe et de grammaire dans Google Chrome sera correctement annoncé comme tel par NVDA. (#11787) 
* Lors de l'utilisation d'Outlook (en français) le raccourcis pour "Répondre à tous" (CTRL+Maj+R) fonctionne à nouveau. (#11196) 
* Dans Visual Studio, les infos bulles IntelliSense, donnant des informations sur l'élément IntelliSense actuellement sélectionné sont maintenant à nouveau correctement annoncées. (#11611) 
* Dans la calculatrice de Windows 10, NVDA n'annoncera plus la progression du calcul si l'annonce des caractères saisis est désactivée. (#9428) 
* NVDA ne plante plus lors de l'utilisation de la table Anglais (États-Unis) abrégé, option "Afficher le mot sous le curseur en braille informatique" activée, lorsqu'un contenu telle qu'une URL est affiché. (#11754) 
* Il est à nouveau possible d'annoncer le formatage pour la cellule sélectionnée dans Excel en utilisant NVDA+F. (#11914) 
* La saisie Qwerty sur les afficheurs Braille Papenmeier est à nouveau supportée et ne cause plus le plantage aléatoire de NVDA. (

Remarque Très Importante: y a eu un grand changement dans la traduction en français, Si vous utilisez la version 2019.1 ou ultérieure vous constaterez que le mot "module complémentaire" ou "modules complémentaires" pour désigner le mot "add-on" ou "add-ons" a été modifié par le mot "extension".

NVDA 2020.4 étant encore seulement en version rc, certains auteurs d'extension ne les ont pas encore mises à jour avec Python 3 ou ne sont pas mis à jour les indicateurs de compatibilité et  y travaillent en ce moment.

Concernant plus spécifiquement NVDA remote qui préoccupe pas mal de monde, il a été annoncé  que l'extension est   maintenant compatible avec NVDA 2019.3. Il existe une version pour NVDA 2019.3 et ultérieure (dans lequel il a collaboré Reef Turner, de NV Access) et une autre pour les anciennes versions de NVDA.    

Voir sur [nvdaremote.com](https://nvdaremote.com/),  menu de navigation Download

Merci à Noelia pour cette info.

###  Pour télécharger NVDA 2020.4rc1 ###

La version rc1 de NVDA 2020.4 est maintenant disponible pour le téléchargement et les tests. Si vous êtes intéressé à essayer ce que NVDA 2020.4 a à offrir avant sa publication officielle, nous vous invitons à télécharger la version rc et à fournir vos commentaires.            

Pour télécharger la version de NVDA 2020.4rc1 :    

# Depuis la page du poste NV Access NVDA 2020.4rc1 #

1. Accédez à la [page du poste de NV Access pour télécharger NVDA 2020.4rc1](https://www.nvaccess.org/post/nvda-2020-4rc1/)    
2. chercher puis appuyez sur le lien "Download NVDA 2020.4rc1".               

# Depuis le lien directe de téléchargement de NV Access #
  
[Vous pouvez cliquer   sur ce lien directe de NV Access en toute confiance pour télécharger NVDA 2020.4rc1!](https://www.nvaccess.org/files/nvda/releases/2020.4rc1/nvda_2020.4rc1.exe)    

#### Notes ####

* Si vous souhaitez recevoir des nouvelles de NV Access, Entrez votre adresse email dans la boite d'édition Email address.                
* Comme indiqué dans la            
[page sur la confidentialité de NV Access](http://www.nvaccess.org/privacy/)           
(en anglais), parfois même des sites externes offrent des téléchargements de NVDA, et NV Access il est pas responsable du contenu ou des pratiques de confidentialité de ces sites.         
* Vous pouvez commenter les erreurs de cette version dans la liste de diffusion francophone dédié à NVDA sur [nvda-fr@groups.io](mailto:nvda-fr@groups.io), ou sur la [page d'incidences en GitHub](https://github.com/nvaccess/nvda/issues).              

Profitez de NVDA 2020.4rc1. Avec vos tests, vous aiderez à la prochaine version de NVDA 2020.4, la prochaine version stable de NVDA.        
@+                     
BlindHelp!                           