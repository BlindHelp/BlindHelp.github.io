---
title: Mon extension préférée pour NVDA n'est pas compatible. Que dois-je faire ? 🤔 🆘
permalink: "/comment-rendre-mes-extensions-compatibles-avec-nvda/"
layout: post
author: BlindHelp
---

<footer>Publié le Lundi 27 Mars 2023</footer>


Coucou mes amis du blog de BlindHelp!    
De nombreux utilisateurs ont pris une surprise désagréable lors de la mise à jour de NVDA et découvrant que certaines de leurs extensions n'étaient pas compatibles. 🙎

Pour cette raison, nous pensons qu'il est approprié de leur donner des conseils, c'est pourquoi j'ai écrit ce post ✍, car beaucoup de gens disent "Mon extension préférée pour NVDA n'est pas compatible. Que dois-je faire ?" 🤔 🆘

Habituellement, le problème est toujours le même: l'utilisateur n'a pas [l'Outil de mise à jour des extensions installée (appelé en anglais Add-on Updater)](https://addons.nvda-project.org/files/get.php?file=addonUpdater); (Extension officielle). Comme si cela ne suffisait pas, la croyance est étendue pour modifier le manifeste (manifest.ini) est suffisant pour que l'extension fonctionne à nouveau. Et la vérité est que parfois c'est vrai, mais parfois pas. Cela dépend de la façon dont l'extension est faite à l'intérieur. Dans tous les cas, les mauvaises pratiques génèrent de l'inconfort chez ces utilisateurs moins experts, et enfin, le rejet de NVDA en faveur d'autres solutions commerciales. :(

Si vous avez une extension qui ne fonctionne pas après la mise à jour, suivez ces étapes dans l'ordre:

1. Installez [TiendaNVDA extension pour NVDA (Boutique pour NVDA.ES)](https://nvda.es/files/get.php?file=tienda) ; (Extension non officielle). Vous pouvez consulter un article dédié à cette extension via BlindHelp.github.io en cliquant [ici](https://blindhelp.github.io/TiendaNVDA/) Bien que cela s'appelle Tienda (Boutique en français), vous ne vous coûtera pas d'argent. C'est gratuit, et tout ce qui y est offert aussi ! ; Pour d'autres instructions, appuyez sur le bouton Aide de cette extension, dans le Gestionnaire d'Extensions.
2. Installez [l'Outil de mise à jour des extensions (appelé en anglais Add-on Updater)](https://addons.nvda-project.org/files/get.php?file=addonUpdater) (Extension officielle). Vous pouvez consulter un article dédié à cette extension via le site Comunautaire des Extensions NVDA en cliquant [ici](https://addons.nvda-project.org/addons/addonUpdater.fr.html) Pourquoi un seul installer d'extension pour faire la mise à jour de vos extensions pour NVDA, Quand nous pouvons en avoir deux ? ; Pour d'autres instructions, appuyez sur le bouton Aide de cette extension, dans le Gestionnaire d'Extensions.     
Pour nous dans cette extension, il y a deux sources principales disponibles qui peut nous intéresser pour faire la mise à jour:    
    * Site Web des extensions de la communauté (défaut)
    * Catalogue des extensions de la communauté espagnole
3. Allez dans le menu NVDA / Outils / Rechercher les mises à jour des extensions avec l'extension Outil de mise à jour des extensions (appelé en anglais Add-on Updater). Faire de même depuis le sous-menu Boutique NVDA.ES. Par défaut, ils utilisent deux sources d'informations différentes.
4. Mettez à jour toutes les extensions que vous pouvez et répétez le processus périodiquement.
5. Si votre extension n'est pas mise à jour et a déjà passé du temps, installez [l'Empaqueteuse d'extensions pour NVDA, appelé maintenant Utilitaires pour les extensions de NVDA](https://nvda.es/files/get.php?file=addonpackager) (Extension non officielle). Il s'agit de l'anciennes extension  Empaqueteuse d'extensions pour NVDA (addonPackager), mais améliorées. Il comprend des fonctions pour installer, désinstaller et activer / désactiver les extensions en masse, voir sa documentation et modifier les manifestes, maintenant également traite les extensions déjà empaquetées (extension.nvda-addon). [L'extension cricricri](https://blindhelp.github.io/cricricri/) (Extension non officielle) est donc laissée sans support, puisque cette extension contient cette fonctionnalité. Cette extension a été créée par notre ami <span lang="es">Héctor J. Benítez Corredera</span> ; Donc, Une fois cette extension installée, vous pouvez modifier sans problème les manifestes. Vous pouvez consulter un article dédié à cette extension 
via BlindHelp.github.io en cliquant [ici](https://blindhelp.github.io/addonPackager/) ; Pour d'autres instructions, appuyez sur le bouton Aide de cette extension, dans le Gestionnaire d'Extensions.    
Pour nos amis moins chevronnés Il y a aussi une Extension NVDA permettant de mettre à jour la valeur de la clé lastTestedNVDAVersion dans le fichier manifeste de chacune des extensions installées afin qu'elles soient compatibles avec une année choisie dans une liste. ; Vous pouvez consulter un article dédié à cette extension addonCompatibilityUpdate (Extension non officielle) via BlindHelp.github.io en cliquant [ici](https://blindhelp.github.io/addonCompatibilityUpdate/) fait par notre ami Abdelkrim Bensaïd surnommé Abdel par la plupart de ces amis. Celle-ci est moins complète que la précédente, mais il est plus simple à utiliser si vous êtes une personne novice. Pour d'autres instructions, appuyez sur le bouton Aide de cette extension, dans le Gestionnaire d'Extensions.    
Une autre possibilité est de modifier un manifeste à la main pour chaque extension installée, donc, veuillez consulter la section ci-après pour plus d'informations sur la façon de modifier les manifestes par vous-même.    
Avant d'utiliser ces extensions qui modifient les manifestes, veuillez vous assurer que les extensions que vous mettez à jour sont compatibles avec l'année que vous choisissez, en consultant leurs auteurs, y compris si vous modifiez à la main ledit manifeste !    
Cela parce qu'il est possible que de nouvelles routines soient utilisées dans la version mise à jour, ou que certaines anciennes soient obsolètes ou non prises en charge.    
6. Si votre extension ne fonctionne toujours pas, c'est à ce moment que vous devez demander de l'aide sur la liste destinée aux utilisateurs francophones de NVDA. Si vous êtes déjà  abonné à cette liste, envoyez votre message à [nvda-fr@groups.io](mailto:nvda-fr@groups.io) en expliquant comment vous avez modifié le manifeste Et dire aussi de quelle extension il s'agit, y compris la version NVDA que vous utilisez et toutes autres informations utiles afin  d'être en mesure de vous aider d'une meilleure manière possible. 🤔 🆘    

## Comment modifier mes manifestes pour les extensions de NVDA manuellement ? ##

Pour mettre les fichiers manifest.ini  à jour pour chaque extension manuellement, veuillez procéder comme suit :    
1. Appuyez simultanément sur la touche "Windows + r"
2. Dans la zone de saisie du dialogue "Exécuter", collez la ligne:    
`%appdata%\nvda\addons\`    
puis appuyez sur  "Entrée"    
Celui-ci est le chemin à partir de la version installée.    
Si vous avez une version portable, rendez-vous dans le dossier où NVDA a été décompressé, et appuyez sur "Entrée" pour aller dans la configuration utilisateur de votre copie portable laquelle inclut également les extensions installées par vos soins dans le dossier `addons`    
C'est-à-dire dans les répertoires `userConfig puis addons`    
3. Une fois le dossier `addons` ouvert, tous les dossiers seront affichés contenant le nom de l'extension installée dans l'Explorateur de fichiers.
4. Sélectionnez le nom du dossier qui contient votre extension installée et appuyez sur "Entrée" pour l'ouvrir.
5. Une fois le dossier contenant le nom de votre extension ouverte, recherchez le fichier appelé:    
`manifest.ini`    
Appuyez sur la lettre "m" ou la touche "fin", puis appuyez sur "Entrée" pour l'ouvrir.    
Nous ouvrirons l'éditeur de texte, par exemple le "Bloc-notes" sous Windows.    
6. Une fois ouvert, recherchez la ligne:    
`lastTestedNVDAVersion = l'année`    
C'est-à-dire, vous trouverez l'année où le test a été effectué avec l'extension en utilisant l'année comme version NVDA, par exemple:    
`lastTestedNVDAVersion = 2022.2`    
etc, etc...    
7. Veuillez supprimer l'année affichée et taper l'année utilisée dans la version actuelle de NVDA, par exemple:    
`lastTestedNVDAVersion = 2023.1`    
8. Appuyez sur "Ctrl + s" pour enregistrer vos modifications, puis appuyez sur "Alt + F4" pour fermer le fichier que vous venez d'enregistrer et si vous avez fini avec toutes les modifications de vos fichiers manifestes appuyez à nouveau sur "Alt + F4" pour fermer l'Explorateur de fichiers.
9. Après avoir terminé, vous devez redémarrer NVDA pour que les changements prennent effet.
10. Et enfin, testez votre extension pour savoir si fonctionne bien avec la dernière version de NVDA ! (yn)    
Si celle-ci fonctionne bien, je suis très content pour vous ! 😅    
Sinon, quel dommage ! ☹ ; Dans ce cas là, vous n'aurez qu'à demander de l'aide sur la liste comme expliqué ci-dessus. 🤔 🆘    

## Comment modifier mes manifestes pour les extensions empaquetées sous forme d'extension .nvda-addon manuellement ? ##

Vous pouvez également modifier le manifeste à l'intérieur d'une extension .nvda-addon manuellement, pour cela veuillez procéder comme suit :    
1. Si vous avez téléchargé une extension récemment et ce n'est pas compatible avec la version NVDA actuelle, vous devrez mettre l'extension .zip à la fin de l'extension .nvda-addon en utilisant la touche "F2", puis ouvrir ledit fichier .zip et rechercher puis modifier manuellement le fichier appelé:    
`manifest.ini`    
Appuyez sur la lettre "m" ou la touche "fin", puis appuyez sur "Entrée" pour l'ouvrir.    
Nous ouvrirons l'éditeur de texte, par exemple le "Bloc-notes" sous Windows.    
2. Une fois ouvert, recherchez la ligne:    
`lastTestedNVDAVersion = l'année`    
C'est-à-dire, vous trouverez l'année où le test a été effectué avec l'extension en utilisant l'année comme version NVDA, par exemple:    
`lastTestedNVDAVersion = 2022.2`    
etc, etc...    
3 Veuillez supprimer l'année affichée et taper l'année utilisée dans la version actuelle de NVDA, par exemple:    
`lastTestedNVDAVersion = 2023.1`
4. Appuyez sur "Ctrl + s" pour enregistrer et confirmer l'action et appuyez sur "F2" pour supprimer l'extension .zip que vous avez mis à la fin de l'extension `.nvda-addon`    
5. Ensuite, une fois terminé Vous devrez installer votre extension comme d'habitude.
6. Et enfin, testez votre extension pour savoir si fonctionne bien avec la dernière version de NVDA ! (yn)    
Si celle-ci fonctionne bien, je suis très content pour vous ! 😅    
Sinon, quel dommage ! ☹ ; Dans ce cas là, vous n'aurez qu'à demander de l'aide sur la liste comme expliqué ci-dessus. 🤔 🆘    

# Très important! #

Notre ami Cyrille de la liste nvda-fr insiste sur quelques points de vigilance sur l'usage de l'extension Utilitaires pour les extensions de NVDA ou l'ancienne extension cricricri ou l'extension addonCompatibilityUpdate.  


> D’abord si vous utilisez l’extension Utilitaires pour les extensions de NVDA, ou l'ancienne extension cricricri ou l'extension addonCompatibilityUpdate, il faut que vous compreniez bien ce qu’elle fait. Si vous ne savez pas ce qu’est le manifeste d’une extension, pas la peine de l’utiliser pour changer les manifestes.  
Si vous persistez à l’utiliser quand même, que vous vous retrouvez avec des comportements inattendus sous NVDA et que vous demandez de l’aide sur la liste (ou ailleurs), surtout précisez bien que vous avez utilisé l'extension Utilitaires pour les extensions de NVDA ou l'ancienne extension cricricri, ou l'extension addonCompatibilityUpdate. Sinon on ne comprendra plus rien.  
Par ailleurs, le soi-disant maudit manifeste est là justement pour éviter aux utilisateurs d’avoir des ennuis inattendus. Donc celui qui modifie un manifeste à la main ou grâce à l'extension Utilitaires pour les extensions de NVDA ou l'ancienne extension cricricri ou avec l'extension addonCompatibilityUpdate, doit bien être conscient que les extensions qu’il aura ainsi modifié pourront avoir un comportement inattendu.  


Avertissement: 💀  
Le blog de BlindHelp n'est pas responsable des dommages causés par une mauvaise utilisation de l'extension téléchargé ni des informations ce trouvant sur la documentation dédié et l'utilisation de l'extension téléchargé est à vos risques et périls. ☠  


Certaines extensions anciennes risquent de ne plus être compatibles avec la version de NVDA que vous avez. Quand on utilise une version ancienne de NVDA, Certaines extensions récentes peuvent aussi ne pas être compatibles. Tenter d'installer une extension incompatible résultera en une erreur expliquant pourquoi l'extension est considérée comme incompatible. Pour inspecter ces extensions incompatibles, vous pouvez utiliser le bouton "Voir les extensions incompatibles" qui lance le gestionnaire d'extensions incompatibles.

Pour activer le gestionnaire d'extensions de n'importe où, Veuillez assigner un geste personnalisé en utilisant le dialogue Gestes de Commandes.

Veuillez consulter la section [Le Gestionnaire d'Extensions Incompatibles](https://www.nvaccess.org/files/nvda/releases/stable/documentation/fr/userGuide.html#incompatibleAddonsManager) pour plus de détails.

Veuillez consulter aussi la section [Avertissement d'extensions incompatibles](https://www.nvaccess.org/files/nvda/releases/stable/documentation/fr/userGuide.html#InstallWithIncompatibleAddons) pour plus de détails.

Pour un suivi de la mise à jour des extensions, n'oubliez pas la page [Extensions et versions de rupture de compatibilité de NVDA.](https://addons.nvda-project.org/addons/nvdacompat.fr.html)

D'un autre côté, je vous apporte de bonnes nouvelles, si vous ne le saviez pas, [NV Access](https://www.nvaccess.org/) a continué à travailler sur son  [add-on store](https://github.com/nvaccess/addon-datastore), que nous pouvons voir intégrés dans NVDA à un moment donné de cette année.

### Quelques liens utiles en bric-à-brac à consulter liées au extensions ###
[NVDA - Site francophone](http://www.nvda-fr.org/)

[Extensions sur le site Comunautaire NVDA](http://addons.nvda-project.org/)

## Le coffre des Extensions pour NVDA via BlindHelp.github.io ##
[Pour accéder cliquez ici !](https://blindhelp.github.io/Le%20coffre%20des%20Modules%20Complementaires%20pour%20NVDA.html)    

Voilà, je pense avoir fait le tour de la question de comment rendre ces extensions compatibles avecNVDA ! 🧠    
Sur ce, je vous souhaite une très bonne utilisation de vos  extensions préférées compatibles avec la dernière version du  lecteur d'écran NVDA gratuit et Open-source pour Microsoft Windows! :)    
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