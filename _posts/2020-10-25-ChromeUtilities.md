---
title: Utilitaires Chrome une extension pour NVDA
permalink: "/ChromeUtilities/"
layout: post
author: BlindHelp
---

<footer>Publié le Dimanche 25 Octobre 2020 - Dernière mise à jour le Mercredi 22 Septembre 2021</footer>

Coucou mes amis du blog de BlindHelp!    
Voici une nouvelle mouture de l'extension appelée Utilitaires Chrome pour NVDA, une extension non officielle créée par le même auteur du programme[Simple FM TV](https://blindhelp.github.io/SimpleFM-TVPortable/)    

Je viens de le traduire en français et l'auteur m'a dit que je pouvais le partager avec vous tous, au-dessous je vous laisse le lien de téléchargement et sa description faite par le même auteur.    

# Nouvelle version de l'extension pour chrome (Seulement valable pour chrome 92 et 93

[Télécharger la version compatible  avec Chrome 92 et 93 par là: [lien externe via le dépôt de l'auteur sur GitHub]](https://github.com/hxebolax/Utilidades-Chrome/releases/download/0.92/ChromeUtilities-0.92.nvda-addon)

Bon entre le Mercredi 21 Juillet 2021 Chrome est mis à jour à la version 92 et par la suite vers la version 93  
Pour les personnes qui ont la version 92 la version se présentent de cette façon:  
`Application: chrome.exe, Google Chrome 92.0.4515.131`  
Pour les personnes qui ont la version 93 la version se présentent de cette façon:  
`Application: chrome.exe, Google Chrome 93.0.4577.82`  
Eh bien, la version de l'extension 0.8 cesse de fonctionner complètement car tout a changé.  
Bon entre hier et aujourd'hui Chrome est mis à jour à la version 94.  
À partir de maintenant, l'auteur nous a informé que l'extension prendra la version de Chrome. Dans ce cas, il sera la 0.94 (selon la dernière mise à jour).  
Bien à partir du lien:  
<https://nvda.es/files/get.php?file=chromeutils>  
vous aurez toujours la dernière version de l'extension comportant le numéro de version de la dernière version du navigateur sur la branche stable.  
Si quelqu'un veut une version pour une autre version de Chrome précédante, vous devrez la rechercher dans les Releases  du dépôt GitHub:  
<https://github.com/hxebolax/Utilidades-Chrome/releases>  
Eh bien, comme l'a dit déjà l'auteur afin  de bien identifier cette version il mettra sur l'extension le numéro de version correspondante à Chrome. Il est de supposer que la version suivante sera la 95, donc  l'extension prendra comme numéro de version 0.95 et ainsi de suite.  
De cette manière, des versions pour des versions précédentes ils seront trouvés plus rapidement.  
Donc, n'oubliez pas que ceux qui ont téléchargé et installé la version précédente 0.8  de l'extension ChromeUtilities pour NVDA lorsque Chrome est mis à jour à la version 92 ou plus, cette extension cessera de fonctionner avec les nouvelles versions de Chrome.    
Bon surf avec Google Chrome en utilisant la bonne version de l'extension Chrome pour NVDA!  

# Informations sur l'extension ChromeUtilities #

* Auteur: <span lang="es">Héctor J. Benítez Corredera</span>    
* Version actuelle: 0.94 (selon le numéro de version correspondante à Chrome 94)    
* Compatibilité avec NVDA: de 2019.3 à 2021.1    
* Langues: Arabe, Anglais, Espagnol, Français et Portugais-Brésil,  et Portugais-Portugal    
* Télécharger [version stable sur le dépôt de l'auteur sur GitHub [lien externe]](https://nvda.es/files/get.php?file=chromeutils)    
* [Voir code source sur le dépôt de l'auteur sur GitHub](https://github.com/hxebolax/Utilidades-Chrome)    

---

# Utilitaires Chrome

Petite extension qui va ajouter des améliorations au navigateur Chrome.

Cette extension ne fonctionne que dans les versions de NVDA 2019.3 et ultérieures.

Maintenant, il détient toutes ses fonctions dans les 3 variantes, Final, Beta et Canary.

## Commandes Clavier de l'extension:

Toutes les commandes clavier de l'extension peuvent être modifiées dans le dialogue NVDA Gestes de commandes.

Une fois dans ce dialogue, ils seront dans la catégorie Utilitaires Chrome.

Nous devons dire que pour que cette catégorie apparaisse doit être appelée le dialogue Gestes de commandes avec le navigateur Chrome ouvert et focalisé.

* Shift+F4: active et désactive la navigation cyclique.
* NVDA+F6: Ouvre le dialogue de la liste des onglets.
* F7: Affichera l'historique des pages visités en arrière.
* F8: Affichera l'historique des pages visités en avant.
* F9: Activera et désactivera le mode lecture.
* Shift+F9: Démarre la lecture continue en mode lecture.

### Navigation cyclique

Nous pouvons maintenant avoir une navigation cyclique en Chrome, bien connu dans d'autres lecteurs d'écran.

La navigation cyclique entraîne le lecteur d'écran d'accéder au haut de la page ou inversement lorsqu'il n'y a plus d'éléments du type approprié en fonction de la lettre de navigation rapide que vous utilisez. Par exemple, si vous appuyez sur h pour naviguer sur les titres et que vous n'aurez plus de titres disponibles, NVDA sautera au début de la page et vous placera à nouveau sur le premier.

Nous pouvons activer ou désactiver la navigation cyclique avec Shift+F4.

Une fois activé surfer sur le web en utilisant   Les touches de navigation d'une seule lettre.

Attention!

Si je m'arrête pour expliquer qu'il y a déjà une extension hébergée sur le site officiel de la communauté NVDA en espagnol qui est la suivante:

<https://nvda.es/2019/01/25/screen-Rapping-navegacion-ciclica/>

ou à partir du dépôt de l'auteur en GitHub:

<https://github.com/hamadatrichine/nvda-screen-rapping>

Eh bien, ladite extension est obsolète et nous devrions aller changer le manifeste afin que cela fonctionne en utilisant les indicateurs de compatibilité avec des versions récentes de NVDA et l'auteur me semble qui  ne suit plus avec son développement il y a 2 ans.

Par conséquent, je souhaite lancer l'avertissement selon lequel si nous allons utiliser cette fonction dans Chrome, il n'est recommandé que si nous avons installé l'extension Screen Rapping désactiver ou la désinstallez si nous ne l'utilisions pas ailleurs et utilisez la fonction qui arrive déjà dans mon extension.

Si nous allions utiliser la navigation cyclique dans d'autres documents ou navigateurs, alors je recommande d'utiliser l'extension Screen Rapping et oubliez la fonction qui vient dans mon extension.

Cela va  aux goûts de chacun mais bon comme Screen Rapping est une extension qui n'est pas mise à jour et qu'il est peu connu, je l'ai trouvé correct d'intégrer sa fonction à l'extension Utilitaires Chrome avec l'approbation de Hamada Trichine afin d'Utiliser son code.

Et enfin dans le cas où nous avons une autre extension qui effectue la même fonction s'il vous plaît je vous recommande d'utiliser votre extension et oubliez la fonction qui vient dans mon extension.

### Contrôle des onglets

Dans le navigateur Chrome nous pouvons changer de zones avec F6 puis  nous pouvons atteindre la zone des onglets      puis les parcourir avec les touches fléchées    ainssi  qu'au-dessus de l'onglet que nous souhaitons, si nous appuyons sur la touche applications le menu apparaît avec différentes options que nous pouvons effectuer sur l'onglet.

Nous pouvons également passer rapidement entre les onglets avec la combinaison de touches Ctrl+1 à 9, mais les choses se compliquent quand nous avons plus d'onglets.

Eh bien maintenant, lextension aura une combinaison que nous ouvrira  un dialogue avec tous les onglets ouverts  disposés en ordre comme ont été ouverts.

Pour ouvrir ce dialogue Nous devons appuyer sur NVDA+F6.

Dans ce dialogue il y a deux zones dont une avec la liste des onglets et une avec des boutons, on peut se déplacer entre les différentes zones  avec des tabulations ou avec les raccourcis clavier.

Quand vous êtes dans  la liste si vous appuyez sur la touche Entrée vous amènera sur l'onglet sélectionné à ce moment.

Nous avons 4 boutons qui sont:

* Cliquer sur le bouton  gauche, lequel nous laissera sur l'onglet que nous avons sélectionné dans la liste.
* Cliquer sur le bouton  droit, lequel nous affichera  les options de l'onglet sélectionné dans la liste.
* Nouvel onglet, ce bouton ouvrira un nouvel onglet où nous commençons à partir de zéro, lequel  nous laissera le focus sur la barre d'adresse afin de rechercher ou d'introduire l'adresse que nous souhaitons.
* Fermer, fermera le dialogue et  nous nous laissera sur la page où il a été appelé le dialogue.

Je dois dire que la fenêtre du dialogue des onglets peut être fermé à partir du bouton correspondant, en appuyant sur la touche Échap ou en perdant le focus.

Ce dernier signifie que avec la fenêtre ouverte du dialogue des onglets si nous devions revenir au navigateur, automatiquement se fermera le dialogue de la liste des onglets.

Cela garantit que lorsque vous appelez la boîte de dialogue celle-ci à nouveau reçoit les informations correctes à chaque  fois  qu'elle  a été appelée.

### Historique rapide des pages visitées

Ceci inclut l'option de pouvoir accéder rapidement à l'historique des pages que nous avons visités en avant ou en arrière.

Pour accéder à  l'historique nous utiliserons F7 et F8.

Je vais donner un exemple pour une meilleure compréhension.

Si nous ouvrons le navigateur et par défaut nous avons aucune page ouverte, nous irons à www.google.com.

Une fois chargée la page Maintenant, en appuyant sur  Ctrl+L et nous tapons www.nvda-fr.org, Maintenant, en appuyant sur F7 le menu apparaît avec la page de Google dans l'historique. Si nous choisissons cette page de Google se chargera cette page.

Maintenant, en appuyant sur F8 nous verrons  que nous avons dans l'historique en avant la page de NVDA-FR.

Bien que ces  historiques tantôt en arrière comme en avant son pour l'onglet qui a le focus  à ce moment, mettant à jour l'historique pour chaque onglet.

Ceci est utile lorsque Nous naviguons à travers de nombreuses pages dans la même session et sur le même onglet.

Avertissement, l'historique est supprimé lorsque vous fermez Chrome.

### Amélioration en mode lecture

Chrome par lui-même seul n'apporte  pas ce  mode comme les autres navigateurs.

Si nous voulons avoir cette fonction nous devons l'activer manuellement avant de pouvoir l'utiliser.

Pour activer cette fonction, nous nous positionnons dans la barre d'adresse et nous tapons ce qui suit:

chrome://flags

Nous appuyons  sur Entrée et sur l'écran qui nous laisse dans le champ de recherche Search flags nous tapons ce qui suit:

reader mode

Quand nous l'écrivons nous entendons qu'il y a un résultat alors nous allons donc faire plusieurs tabulations jusqu'à entendre ce qui suit:

-#enable-reader-mode

 Eh bien nous appuyons sur Tabulation une fois de plus et nous tombons dans une zone de liste déroulante et nous devons sélectionner l'option Enable.

Maintenant, nous appuyons sur Tabulation plusieurs fois jusqu'au bouton Relaunch, puis lorsque nous appuyons sur lui, et la prochaine fois que nous redémarrons le navigateur  nous aurons déjà activé  le mode lecture.

Eh bien, lorsque nous entrons dans une page qui permet le mode lecture, attention pas toutes le permettent. Nous pouvons activer ce mode pour supprimer tout ce qui dérange la page, c'est-à-dire, afficher uniquement le contenu d'une page, sans habillage ni publicités, ne conservant que le texte et les images pour un confort de lecture, ceci peut être fait de deux façons:

1º Depuis le menu Chrome nous parcourons le menu de haut en bas jusqu'à ce que nous entendons Activer/Désactiver mode lecture et nous passons en mode lecture, si dans le menu aucune option apparaît est parce que la page dans laquelle nous sommes ne le permet pas.

2º Une fois que nous sommes sur la page nous pouvons appuyer sur F6 et deux fois tabulation pour tomber dans un bouton qui indique Activer/Désactiver le mode lecture, si nous l'appuyons nous passons en ce mode. Si ce bouton n'apparaît pas est parce que la page dans laquelle nous sommes ne le permet pas.

Eh bien il peut sembler peu si nous sommes beaucoup à utiliser ce mode  de lecture, tout du moins  il manqué un raccourci rapide pour activer ou désactiver ce mode ou pour me alerter si la page ne le permet pas.

Eh bien maintenant, avec l'extension si nous appuyons sur F9 nous allons activer le mode lecture.

Eh bien, si la page dans laquelle nous sommes ne permet pas ce mode nous sommes avertis par un message.

Si la page le permet nous passons en mode lecture puis nous sommes avertis que on entre en ce mode par un message.

Si on appuie sur F9 et étant dedans du mode lecture nous nous sortira de celui-ci et nous nous avertira aussi  de que nous sortions de ce mode.

### Lecture continue en mode lecture

Si on appuie sur Shift+F9 lorsque le mode de lecture est activé, NVDA commencera à lire la page  d'où le curseur est positionné.

Si on appuie sur Ctrl nous arrêterons la lecture.

### Panneau de paramètres

À  partir de la version 0.7 de l'extension, nous aurons une nouvelle zone dans Préférences / Paramètres et rechercher Utilitaires Chrome.

Dans cette section de paramètres je vais ajouter des paramètres que je peux considérer intéressant pour le navigateur.

Afin de visualiser cette catégorie, nous devrons invoquer les paramètres de NVDA à partir du navigateur Chrome, sinon il ne sera pas visible.

Pour le moment, nous avons le paramètre suivant:

* Ouvrir les fenêtres de Chrome maximisées

Si nous activons cette case, toutes les fenêtres de Chrome s'ouvriront maximisées par défaut.

## Traducteurs et contributeurs:

* Français: Rémy Ruiz
* Portugais: Ângelo Miguel Abrantes
* Arabe: Wafiq Taher
# Journal des changements.
## Version 0.7.

* Ajouté la possibilité d'ouvrir chrome toujours maximisé.

## Version 0.6.

* Version initiale.

---

Mille merci à notre ami <span lang="es">Héctor J. Benítez Corredera</span> pour l'avoir partagé avec nous tous! :)    
Profitez de l'extension Utilitaires Chrome pour NVDA!    
@+    
BlindHelp!    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouvel espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---
