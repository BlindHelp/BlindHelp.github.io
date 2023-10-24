---
title: Les versions rc de NVDA 2023.3 sont maintenant disponibles pour le téléchargement et le test
permalink: "/nvda-2023-3rc/"
layout: post
author: BlindHelp
---

<footer>Publié le Lundi 23 Octobre 2023</footer>


Coucou mes amis du blog de BlindHelp!    

NVDA 2023.3rc1 a été publié par [NV Access sur ce poste (en anglais)](https://www.nvaccess.org/post/nvda-2023-3rc1/), le Lundi 23 Octobre 2023 pour tester des fonctionnalités qui seront incluses dans la prochaine version stable (2023.3). Tout le monde est encouragé à télécharger cette version et à faire part de ses commentaires. Si aucun bug critique n'est trouvé, cette version sera identique à NVDA 2023.3.

Lorsque vous utilisez la version rc, vous choisirez le canal bêta / RC et vous ne recevrez que des notifications sur les mises à jour disponibles pour ces types de versions.

Pour revenir au canal stable, mettre à jour manuellement NVDA à la dernière version stable.

# Points forts

Cette version inclue des améliorations pour les performances, la réactivité et la fiabilité de la sortie audio.    
Des options ont été ajoutées pour contrôler le volume des sons et des bips de NVDA, ou pour qu'ils suivent le volume de la voix utilisée.    

NVDA peut maintenant rafraîchir périodiquement le résultat de l'OCR, en annonçant le texte lorsqu'il apparaît.    
Cela peut être configuré dans la catégorie Reconnaissance Optique de Caractères de Windows du dialogue de paramètres de NVDA.    

Plusieurs corrections pour le Braille ont été apportées, améliorant la détection des appareils et le mouvement du curseur.    
Il est maintenant possible d'exclure les pilotes non désirés de la détection automatique, pour en améliorer les performances.    
De nouvelles commandes BRLTTY sont également présentes.    

Sont également présents des correctifs pour l'Add-on Store, Microsoft Office, les menus contextuels de Microsoft Edge, et la calculatrice de Windows.    

## Nouvelles Fonctionnalités
- Amélioration de la gestion du son :
- Un nouveau dialogue Paramètres Audio :
     - Il peut être ouvert avec ``NVDA+contrôle+u``. (#15497)
     - Une option dans les paramètres audio pour que le volume des sons et des bips NVDA suive le réglage du volume de la voix que vous utilisez. (#1409)
     - Une option dans les paramètres Audio pour configurer séparément le volume des sons NVDA. (#1409, #15038)
     - Les paramètres permettant de modifier le périphérique de sortie audio et d'activer l'atténuation audio ont été déplacés du dialogue Sélectionner un synthétiseur vers le nouveau dialogue de paramètres audio . (#8711)
     Ces options seront supprimées du dialogue "Sélectionner un synthétiseur" en 2024.1. (#15486, #8711)
  - NVDA sort désormais l'audio via l'API Windows Audio Session (WASAPI), ce qui peut améliorer la réactivité, les performances et la stabilité de la parole et des sons de NVDA. (#14697, #11169, #11615, #5096, #10185, #11061)
  - Note : WASAPI est incompatible avec certaines extensions.
  Des mises à jour compatibles sont disponibles pour ces extensions, veuillez les mettre à jour avant NVDA.
  Les versions incompatibles de ces extensions seront désactivées lors de la mise à jour de NVDA.
    - Tony's Enhancements version 1.15 ou plus ancien. (#15402)
    - Extension des commandes de base de NVDA 12.0.8 ou plus ancien. (#15443)
- NVDA est maintenant capable d'actualiser continuellement le résultat lors de l'exécution de la reconnaissance optique des caractères (OCR), en annonçant le texte lorsqu'il apparaît. (#2797)
  - Pour activer cette fonctionnalité, activez l'option "Actualiser périodiquement le contenu reconnu" dans la catégorie Reconnaissance Optique de Caractères de Windows du dialogue des paramètres de NVDA.
  - Une fois activé, vous pouvez basculer l'annonce du nouveau texte en basculant l'annonce des changements dynamiques de contenu (en pressant ``NVDA+5``).
- Lors de l'utilisation de la détection automatique des afficheurs Braille, il est maintenant possible d'exclure des afficheurs de la détection automatique depuis le dialogue de sélection de l'afficheur Braille. (#15196)
- Nouvelle option dans les paramètres de mise en forme des documents, "Ignorer les lignes vides pour l'annonce d'indentation de ligne". (#13394)
- Ajout d'un geste non assigné pour naviguer par groupe d'onglets en mode navigation. (#15046)

## Changements
- Braille :
  - Lorsque le texte dans un terminal change sans rafraîchir le curseur, le texte sur l'afficheur Braille sera maintenant correctement mis à jour lorsque positionné sur une ligne modifiée.
  Cela inclut les situations où le Braille suit la revue. (#15115)
  - Plus de gestes de commandes BRLTTY sont désormais assignées à des commandes NVDA (#6483) :
    - ``learn`` : Bascule l'aide d'entrée NVDA
    - ``prefmenu`` : Ouvrir le menu NVDA
    - ``prefload``/``prefsave`` : Charger/sauvegarder la configuration NVDA
    - ``time`` : Afficher l'heure
    - ``say_line`` : Annoncer la ligne actuelle où est positionné le curseur de revue
    - ``say_below`` : Dire tout en utilisant le curseur de revue
  - Le pilote BRLTTY est uniquement disponible lorsqu'une instance de BRLTTY avec BrlAPI activé est en cours d'exécution. (#15335)
  - Le paramètre avancé pour activer le support du Braille HID a été remplacé en faveur d'une nouvelle option.
  Vous pouvez maintenant exclure certains pilotes de la détection automatique dans le dialogue de sélection de l'afficheur Braille. (#15196)
- Add-on Store : Les extensions installées apparaitront désormais dans l'onglet extensions disponibles si elles sont disponibles dans le store. (#15374)
- Certaines touches d'accès ont été modifiées dans le menu NVDA. (#15364)

## Corrections de Bogues
- Microsoft Office :
  - Correction d'un crash dans Microsoft Word quand les options de mise en forme des documents "annoncer les titres" et "annoncer les notes et commentaires" ne sont pas activées. (#15019)
  - Dans Word et Excel, l'alignement du texte sera correctement annoncé dans d'avantage de situations. (#15206, #15220)
  - Correction de l'annonce de quelques raccourcis de mise en forme dans Excel. (#15527)
- Microsoft Edge :
  - NVDA ne reviendra plus à la dernière position du mode navigation lors de l'ouverture du menu contextuel dans Microsoft Edge. (#15309)
  - NVDA peut à nouveau lire le menu contextuel des téléchargements dans Microsoft Edge. (#14916)
- Braille :
  - Le curseur et l'indicateur de sélection Braille seront désormais toujours correctement actualisés après avoir affiché ou masqué leurs indicateurs respectifs via un geste de commande. (#15115)
  - Correction d'un problème où les afficheurs Braille Albatross essayaient de s'initialiser alors qu'un autre afficheur Braille était connecté. (#15226)
- Add-on Store :
  - Correction d'un problème où décocher "inclure les extensions incompatibles" continuait malgré tout de lister les extensions incompatibles dans le store. (#15411)
  - Les extensions bloquées pour des raisons d'incompatibilité devraient maintenant être correctement filtrées lors de la bascule du filtre sur le statut activée/désactivée. (#15416)
  - Correction d'un problème empêchant la mise à jour ou le remplacement des extensions incompatibles installées et activées via l'outil d'installation externe. (#15417)
  - Correction d'un problème où NVDA ne parlait plus jusqu'à son redémarrage après l'installation d'une extension. (#14525)
  - Correction d'un problème où une extension ne pouvait pas être installée si un téléchargement précédent avait échoué ou était annulé. (#15469)
  - Correction de problèmes avec la gestion des extensions incompatibles lors de la mise à jour de NVDA. (#15414, #15412, #15437)
- NVDA annonce à nouveau les résultats des calculs dans la calculatrice 32 bits de Windows Server, versions de Windows LTSC et LTSB. (#15230)
- NVDA n'ignore plus les changements de focus lorsqu'une fenêtre imbriquée (fenêtre petit-enfant) obtient le focus. (#15432)
- Correction d'une cause de plantage potentielle au démarrage de NVDA. (#15517)

## Changements pour les Développeurs
Veuillez vous référer au [guide de développement](https://www.nvaccess.org/files/nvda/documentation/developerGuide.html#API) pour plus d'informations sur le processus de dépréciation et de suppression de l'API de NVDA.    
- ``braille.handler.handleUpdate`` et ``braille.handler.handleReviewMove`` ont été modifiés afin de ne pas effectuer de mise à jour instantanée.
Avant ce changement, lorsque l’une ou l’autre de ces méthodes était appelée très souvent, cela consommait beaucoup de ressources.
Ces méthodes mettent désormais en file d’attente une mise à jour à la fin de chaque cycle principal.
Elles doivent également être thread-safe, ce qui permet de les appeler à partir de threads en arrière-plan. (#15163)
- Ajout d'un support officiel pour enregistrer les pilotes d'afficheur braille personnalisés dans le processus de détection automatique de l'afficheur braille.
Veuillez consulter la documentation de la classe ``braille.BrailleDisplayDriver`` pour plus de détails.
Plus particulièrement, l'attribut ``supportsAutomaticDetection`` doit être défini sur ``True`` et la ``classmethod`` ``registerAutomaticDetection`` doit être implémentée. (#15196)

### Dépréciations
- ``braille.BrailleHandler.handlePendingCaretUpdate`` est désormais obsolète sans remplacement public.
Elle sera supprimé en 2024.1. (#15163)
- Importer les constantes ``xlCenter``, ``xlJustify``, ``xlLeft``, ``xlRight``, ``xlDistributed``, ``xlBottom``, ``xlTop`` depuis ``NVDAObjects.window .excel`` est obsolète.
Utilisez les énumérations ``XlHAlign`` ou ``XlVAlign`` à la place. (#15205)
- Le mapping ``NVDAObjects.window.excel.alignmentLabels`` est obsolète.
Utilisez les méthodes ``displayString`` des énumérations ``XlHAlign`` ou ``XlVAlign`` à la place. (#15205)
- ``bdDetect.addUsbDevices`` et ``bdDetect.addBluetoothDevices`` sont obsolètes.
Les pilotes d'afficheurs braille doivent implémenter la méthode de classe ``registerAutomaticDetection`` à la place.
Cette méthode reçoit un objet ``DriverRegistrar`` sur lequel les méthodes ``addUsbDevices`` et ``addBluetoothDevices`` peuvent être utilisées. (#15200)
- L'implémentation par défaut de la méthode check sur ``BrailleDisplayDriver`` utilise ``bdDetect.driverHasPossibleDevices`` pour les périphériques marqués comme thread-safe.
À partir de NVDA 2024.1, pour que la méthode de base utilise ``bdDetect.driverHasPossibleDevices``, l'attribut ``supportsAutomaticDetection`` doit également être défini sur ``True``. (#15200)

# Liens utiles pour télécharger et consulter les dernières changements et informer d'une erreur dans NVDA

- [Télécharger NVDA 2023.3rc1.](https://www.nvaccess.org/files/nvda/releases/2023.3rc1/nvda_2023.3rc1.exe)
  - ```SHA256 sum: e5a2380fc7b9dfd37deab5781e62f7bacfaa5a951a494ada5a6936213f53a5e1```    
Pour vérifier que le fichier téléchargé n'a pas été modifié, c'est-à-dire pour vérifier son intégrité, vous pouvez confirmer que le SHA256 correspond au précédent. Depuis l'invite de commande Windows, vous pouvez connaître le SHA256 d'un fichier téléchargé à l'aide de la commande suivante :    
```cmd
certutil -hashfile <PathToDownloadedFile> SHA256
```
- [Quoi de Neuf.](https://www.nvaccess.org/files/nvda/releases/2023.3rc1/documentation/fr/changes.html)
- Veuillez ouvrir un [problème via GitHub.](https://github.com/nvaccess/nvda/issues)

Veuillez noter que toutes les versions rc ou béta de NVDA 2023.3 doivent être testées en version portable ou installée dans un environnement expérimental. Elle n'est pas destinée à une utilisation de tous les jours.

Bon téléchargement, bon test et bonne journée !    
Sur ce, je vous souhaite une très bonne utilisation DE votre lecteur d'écran NVDA gratuit et Open-source pour Microsoft Windows! :)    
@+    
BlindHelp!    

---

# Liens utiles de la liste NVDA-fr #

Pour publier un message sur la liste :    
[nvda-fr@groups.io](mailto:nvda-fr@groups.io)    
<br>
Pour s'abonner, envoyer un message vide à :    
[nvda-fr+subscribe@groups.io](mailto:nvda-fr+subscribe@groups.io)    
<br>
Pour écrire au Propriétaire :    
[nvda-fr+owner@groups.io](mailto:nvda-fr+owner@groups.io)    
<br>
Pour se désinscrire (dommage !), envoyer un message vide à :    
[nvda-fr+unsubscribe@groups.io](mailto:nvda-fr+unsubscribe@groups.io)    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouvel espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---