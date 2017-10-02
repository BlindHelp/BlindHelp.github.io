---
title: Guide Passage de  JAWS à NVDA

layout: post
author: BlindHelp
---

<footer>Jeudi 25 août 2016</footer>

### Passage de  JAWS à NVDA ###
Traduit en Français Par Rémy Ruíz(BlindHelp). Si vous le souhaitez, vous pouvez consulter la version originale en anglais  
[Switching From JAWS To NVDA.](http://community.nvda-project.org/wiki/SwitchingFromJawsToNVDA#SwitchingFromJAWSToNVDA)         

# Passage de  JAWS à NVDA #

# Introduction. #
Le propos de ce guide  est d'aider à la personne   utilisateur de JAWS (Job AccessWith Speech), une solution comercial de lecture d'écran proportionnée par Freedom Scientific, pour  passer avec facilité au revue d'écran gratuite et open-source NVDA (Non Visual Desktop Access). Le guide présuppose des connaissances préalable de JAWS et que vous êtes   capable de l'utiliser efficacement.  

Ceci ne propose pas de remplacer le Guide utilisateur intégré, mais plutôt que NVDA ne puise pas intimider tant.  

# Forces et faiblesses. #
L'intention de ce guide est de ne pas faire une comparaison entre JAWS et NVDA, mais il est nécessaire de mentionner certaines choses que NVDA ne supporte pas actuellement ou qui ont besoin d'améliorations, afin que vous puissiez faire un choix éclairé.  

La prise en charge des fonctionnalités avancées de la suite Microsoft Office est un ajout relativement récent, c'est pour cela que vous ne pouvez pas trouver une expérience satisfaisante comme dans JAWS. Cependant, dire cela ne implique pas sous-estimer le travail  que font les développeurs dans ce domaine, qui est en amélioration continuelle.  

Cela dit, dans la plupart des situations quotidiennes, vous trouverez que NVDA fonctionne aussi bien que comme JAWS, si pas mieux dans certains cas.  

# Une note rapide à propos  de la Disposition du Clavier  Portable NVDA. #
Sélectionnez la disposition  du clavier portable ne défini pas automatiquement la touche Verrouillage majuscules comme touche modificatrice NVDA. Toutefois, il fournit  une case à cocher suivi d'une  liste déroulante qui permet de choisir  la Disposition du Clavier pour basculer vers cette option.  

# Remarque Sur la touche Insert. #
Comme vous le savez peut-être, JAWS et NVDA peuvent utiliser la touche insert comme  leurs touches modificatrices. Les deux lecteurs d'écran le traitent légèrement différemment, ce qui pourrait conduire à une certaine confusion si vous êtes habitué à l'un ou l'autre.       

Avec JAWS chargé, la touche insert est uniquement pour son utilisation. Cela signifie que, pour utiliser la fonction d'origine qui lui est assignée (par exemple, basculer entre les modes d'insertion et de réécriture dans un éditeur de texte ou d'un traitement de texte), vous devez d'abord activer la touche de JAWS à travers de commandes.        
NVDA d'autre part vous permet d'effectuer la fonction d'origine de la touche insert en appuyant deux fois rapidement. Gardez cela à l'esprit la prochaine fois que vous éditez du texte tout en utilisant NVDA et vous retrouver effacer ce que vous avez déjà écrit en tapant dessus.

# Alternatives à eSpeak #
eSpeak NG est le synthétiseur de parole qui est inclus avec NVDA. Comme NVDA lui-même, c'est aussi gratuit et open-source, qui est l'une des raisons de son inclusion. L'autre étant le nombre  de langues qu'il peut parler.           

Cependant, vous pouvez constater que, pour n'importe quelle raison, ce n'est pas pour vous. Si c'est le cas vous serez heureux de savoir qu'il y a des alternatives, qui seront discutées dans les sections suivantes.

# Eloquence. #
Une des questions plus fréquemment posées concerne l'utilisation du synthétiseur Eloquence avec NVDA. En un mot, il est actuellement illégal de le faire. Voici un lien vers un article de blog, où les développeurs de NVDA expliquent la situation dans son état actuel.  
[http://community.nvda-project.org/blog/NVDAAndEloquenceSituation.](http://community.nvda-project.org/blog/NVDAAndEloquenceSituation)  

Cependant, Code Factory a publié une version d'eloquence comme un module complémentaire NVDA qui peut être acheté à 
[http://codefactoryglobal.com/app-store/voices-for-nvda/.](http://codefactoryglobal.com/app-store/voices-for-nvda/.)       

Une licence d'utilisation du synthétiseur Vocalizer de Nuance est également incluse dans le prix.          

Consultez la section intitulée «Scripts» pour plus d'informations sur les modules complémentaires NVDA.         

# Voix Windows OneCore #
Si vous êtes sur Windows 10 et exécutez NVDA version 2017.3 ou ultérieure, vous avez encore une autre alternative sous la forme de voix Windows OneCore. Ces voix sont développés par Microsoft et sont inclus gratuitement avec Windows 10.                     

Il y a pas mal de disponible en différentes langues et dialectes, dont certains seront déjà installés. Cependant, ceux-ci varient selon les packs de langue que vous avez sur votre système. La seule façon pour l'instant d'obtenir de nouvelles voix est d'installer d'autres packs de langue dans les Paramètres. Une fois cela fait, vous pouvez ensuite télécharger les voix pour cette langue. À ce stade, vous pouvez supprimer le pack de langue. Ce n'aura pas d'effet sur la voix que vous venez d'installer.           
J'espère que cela va être plus simple dans l'avenir.                

Si vous trouvez que les voix Windows OneCore ne parlent pas assez rapide, même lorsque le débit de la voix de NVDA est plus élevé, régler le débit de la parole dans les Paramètres de Windows.

Leurs complications légères de côté, ces voix offrent une alternative viable à eSpeak NG comme ils sont réactifs et tout à fait naturel.                

# Encore plus de voix #

Si vous ne trouvez toujours pas la voix parfaite pour vous, cette page liste plusieurs autres synthétiseurs de voix (à la fois gratuit et payant, vous pouvez utiliser à la place).             
[http://community.nvda-project.org/wiki/ExtraVoices.](http://community.nvda-project.org/wiki/ExtraVoices)  

# Terminologie. #
La plupart du temps, JAWS et NVDA ils utilisent beaucoup de termes en commun pour décrire les contrôles, par exemple bouton radio , liste déroulante, case à cocher, etc.            

Une différence notable est que NVDA établit une distinction entre les zones d'édition simples et multiligne, et il vous indiquera également si un champ est "protégé" (tout ce que vous écrivez sera remplacés par des astérisques). Aussi vous avertira si le texte est sélectionné dans un champ lorsque vous y placez avec la touche de tabulation. Si c'est ainsi, Lorsque vous écrivez  le texte mis en évidence il sera remplacé.  

NVDA appel "voix" a les différentes langues qu'un synthétiseur peut   parler, et "variante" a les différentes voix pris en charge par votre synthétiseur.  

# Curseurs. #
NVDA Il a plusieurs curseurs pour aider à naviguer  dans Windows et ces applications, semblables a JAWS. La terminologie est légèrement différente, comme décrit ci-dessous.  

Le curseur PC, dans la documentation NVDA, il est mentionné comme "le focus système" et "le curseur système".  

L'équivalent au curseur JAWS est une combinaison pour la navigation par objet, le curseur de revue, Revue de document et revue de l'écran. La fonction "revue de l'écran" est peut-être le plus similaire au curseur JAWS, mais il est convenable de se familiariser avec les trois modes de revue. Vous trouverez des instructions pour cela, approfondis et plus facile à comprendre, dans le Guide de l'utilisateur.  

Contrairement à JAWS, vous n'avez pas besoin de passer entre le curseur PC et le curseur JAWS, donc le pavé numérique est réservé exclusivement pour travailler avec des fonctions correspondantes  au curseur JAWS.  

Il est intéressant de noter que lorsque vous utilisez la navigation par objet ou le curseur de revue, la souris ne se déplace pas en synchronisation. Vous devez appuyer sur une commande pour déplacer la souris vers l'emplacement du curseur de revue, qui ressemble à la façon dont le "curseur invisible" de JAWS fonctionne. Il existe également des commandes pour simuler le clic ou le verrouillage des deux boutons de la souris.                    

Cependant, si vous souhaitez simplement activer l'objet actuel sur lequel vous vous focalisez lorsque vous utilisez la navigation par objet, il est nécessaire de le faire sans avoir à déplacer le curseur de la souris en premier.               

# Curseur tactile #
Dans JAWS 15 ou ultérieur, vous pouvez utiliser les touches du pavé numérique pour naviguer dans les applications à l'aide d'une arborescence similaire à celle utilisée par les lecteurs d'écran de smartphone comme VoiceOver pour naviguer dans les écrans tactiles. Dans NVDA, les commandes de navigation par objet et le mode objet tactile peuvent être utilisées à cette fin         

# Curseur virtuel. #
Le curseur virtuel il est connu comme "mode navigation". Dans une grande partie il fonctionne comme dans JAWS, offrant l'accès aux touches de raccourci de navigation, ou dans la langue NVDA, "navigation avec une seule lettre".  

Voici quelques problèmes courants que vous pouvez rencontrer lors de la navigation sur le Web avec NVDA pour la première fois, et comment les résoudre.         

# Pourquoi est-tout sur une seule ligne ? #
Si vous n'êtes pas au courant, JAWS possède deux modes d'affichage des pages web ou autres documents en utilisant le curseur virtuel, Disposition simple et disposition à l'écran. La disposition simple il est définit  par défaut, et montre le contenu d'une forme linéaire -plaçant chaque lien ou contrôle dans sa propre ligne. La  disposition à l'écran distribue le contenu de forme similaire à la façon dont il apparaît à l'écran.  

L'option par défaut dans NVDA est "Disposition à l'écran", mais vous pouvez basculer facilement a sa version disposition simple en appuyant sur NVDA+v pendant que vous êtes en mode navigation. Cela désactivera la "disposition à l'écran". N'oubliez pas de sauvegarder la configuration avec NVDA+Contrôle+c après d'avoir apporté cette modification.  

# Il me Répète "Cliquable, Cliquable..." #
Lors de la lecture des pages web, vous avez peut-être remarqué que NVDA dit "Cliquable", parfois trop souvent, même plusieurs fois dans le même lien ou contrôle.                    

Cependant, ceci peut être corrigé facilement à partir de la version 2014.1 ou ultérieure. Aller à la boîte de dialogue  Mise en Forme des Documents, décochez la case "Annoncer si cliquable" et appuyez sur OK.  N'oubliez pas de sauvegarder la configuration.  

# Rechercher ne fonctionne pas sur le web. #
Lorsque JAWS est chargée, en appuyant sur Contrôle+f dans Internet Explorer ou Firefox  il s'ouvre la boîte de dialogue Rechercher de JAWS au lieu d'activer la commande de recherche natif au navigateur. Ceci pour vous permettre de rechercher du texte en utilisant le curseur virtuel. La commande rechercher classique permettra de Rechercher l'occurrence suivante du texte que vous avez saisi, mais ne bougera pas le curseur virtuel vers cet emplacement. Cela est dû à l'interaction des lecteurs d'écran  avec des pages web.  

NVDA a sa propre commande rechercher pour la recherche dans le mode navigation, mais il n'a pas été associé à Contrôle+f, donc en appuyant sur cette touche de  raccourci il appels  la commande rechercher du navigateur, donc la recherche ne fonctionnera pas comme prévu.  

Pour ouvrir la boîte de dialogue Rechercher NVDA Appuyez sur Contrôle+NVDA+F. Tapez ce que vous souhaitez rechercher puis appuyez sur entrée.  

# Pas de commandes pour afficher les formulaires et les titres ? #
Dans JAWS, vous pouvez appuyer sur JAWS+F5 pour lister les formulaires, JAWS+F6 pour lister les titres et JAWS+F7 pour lister les liens. Dans NVDA, les deux derniers ont été combinés dans un dialogue de liste d'éléments, et vous pouvez y accéder en appuyant sur NVDA+F7.

# Mode formulaire. #
L'équivalent aux Mode formulaire, dans NVDA, est le Mode focus et se comporte d'une manière très similaire à JAWS, même en changeant automatiquement entre le mode navigation pour se déplacer dans une page web. Il jouera un son pour vous informer sur le mode dans lequel vous vous trouvez.  

Les détails sur le "mode focus" sont expliqués dans le guide de l'utilisateur.  

# NVDA parle trop. #
Parfois, il peut sembler que NVDA est trop prolixe dans ces verbalisations, en particulier dans certaines listes d'éléments. Cela arrive parce que, en ce qui concerne NVDA, les listes d'éléments sont des tableaux. NVDA est configuré par défaut  pour annoncer  les titres de chaque ligne ou colonne.              

Pour désactiver cette option, décochez la case "annoncer le titre des lignes et colonnes d'un tableau" dans la boîte de dialogue "Mise en forme des documents".  

# Résoudre un comportement inattendu dans le Dictionnaires de prononciation. #
NVDA il a toujours inclus une fonction pour modifier le "Dictionnaires de prononciation", qui sont similaires aux fichiers de l'assistant du dictionnaire de JAWS.  
Toutefois, jusqu'à peu de temps, le résultat de l'ajout d'un mot pourrait  ne pas être ce que vous attendiez. Si vous voulez changer la prononciation d'un mot, tels que "mono", et vous l'ajoutez à un dictionnaire, n'importe quel mot qui a commencé ou y compris le mot mono pourrait être affecté. En ce qui concerne JAWS, ceci affectent uniquement le texte entré dans le champ "Mot réel", à moins que vous ajoutez un astérisque (*). Si comme dans mon exemple, mono serait considéré comme partie d'un mot.  

Il y avait un moyen de résoudre cela, mais il entraîné l'utilisation des expressions régulières, qui ne sont pas évident du tout pour l'utilisateur moyen. Cependant, à partir de 2014.4 ou version ultérieure, vous trouverez un groupe de cases à cocher dans Ajouter/Éditer entrée au dictionnaire, (avec l'étiquette Type), qui détermine comment il traitera le texte dans le champ "modèle" (comme NVDA lorsque il se réfère au mot réel).  

* N'importe où, qui est le comportement par défaut.  
* Mot entier, c'est comment JAWS gère les entrées au dictionnaire.  
* Expression régulière, ce qui est compliqué.  

Vous y trouverez également une case à cocher "Respecter la casse".  

Si avant il vous semblaient frustrant les dictionnaires de prononciation NVDA, n'oubliez pas de jeter un coup d'œil encore une fois.  

# Scripts #
Comme dans JAWS, il est possible d'ajouter des scripts pour améliorer l'expérience pour d'autres applications ou pour fournir de nouvelles fonctionnalités qui sont accessibles depuis n'importe où. Ces paquets de script sont appelés "modules complémentaires NVDA". Vous pouvez trouver plusieurs modules complémentaires par ici :           
[http://addons.nvda-project.org/.](http://addons.nvda-project.org/)        

Y compris quelques uns qui émulent les fonctionnalités de JAWS pas actuellement incorporée dans NVDA, tels que une liste d'icôns correspondant à la barre des tâches système, la fonction  "virtualiser fenêtre" ou la possibilité d'ajouter du texte dans le presse-papiers. Des scripts pour les applications populaires, tels que GoldWave sont également disponibles. Le guide de l'utilisateur contient des informations sur l'installation des modules complémentaires, et vous pouvez lire la documentation d'aide qui est fourni avec chaque module  complémentaire pour apprendre plus sur comment l'utiliser.  

Le lien suivant mène au guide du développeur avec des informations sur la création desmodules complémentaires.
[http://community.nvda-project.org/documentation/developerGuide.html](http://community.nvda-project.org/documentation/developerGuide.html)

# Accès Distant #
En 2015, Christopher Toth et Tyler Spivey ils ont publié un module complémentaire gratuit pour permettre aux utilisateurs de NVDA de fournir une prise en charge à distance, similaire au Tamdem de JAWS. Pour en savoir plus sur le module complémentaire, s'il vous plaît consulter :                
[http://www.nvdaremote.com.](http://www.nvdaremote.com)                

# Paramètres spécifiques à l'application #
Il y a peu de temps, les paramètres de NVDA étaient globaux (appliqués partout). À partir de NVDA 2013.3, il est possible de configurer certains paramètres à appliquer lors de l'utilisation d'un programme. Cela se fait en créant un profil de configuration spécifique à l'application. Pour créer un profil spécifique à l'application, ouvrez le dialogue Profils de configuration tout en utilisant l'application en question. Pour ouvrir le dialogue, appuyez sur NVDA, N, pour afficher le menu NVDA. flèche bas jusqu'à ce que vous entendiez Profils de configuration.                            

Lorsque le dialogue s'ouvre, sélectionner Nouveau et sélectionner "Application en cours" lorsque vous êtes invité à utiliser ce profil.                       

# Alterner Dire tout #
Dans les versions récentes de JAWS, vous pouvez configurer un synthétiseur de voix différent à utiliser lorsque  Dire tout est actif. Vous pouvez le faire dans NVDA en créant un profil Dire tout dans le menu Profils de configuration.                   

Voici les étapes.                     

1. Ouvrez le  Profils de configuration à partir du menu principal NVDA. Appuyez sur NVDA, N, puis  flèche bas jusqu'à atteindre Profils de configuration.                   
2. Créez un nouveau profil en faisant tabulation sur le bouton *Nouveau* ou appuyez sur alt, N.                  
3. Après avoir nommé votre profil, Tab jusqu'aux boutons radio pour utiliser ce profil. Flèche bas jusqu'à ce que vous entendiez Dire tout. Appuyer sur *OK*     

pendant que ce profil est actif, vous devez compléter le processus en configurant le synthétiseur quand le profil Dire tout est actif.              
