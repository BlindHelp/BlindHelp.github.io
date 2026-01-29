---
title: Passage de Window-eyes à NVDA

layout: post
author: BlindHelp
---

<footer>Lundi 30 mai 2016</footer>

### Guide Passage de Window-eyes à NVDA
Traduit en Français Par Rémy Ruíz(BlindHelp). Si vous le souhaitez, vous pouvez consulter la version originale en anglais                
[Switching from Window Eyes to NVDA.](https://github.com/nvaccess/nvda/wiki/Switching-from-Window-Eyes-to-NVDA)        

# Note de traduction :

A propos des deux liens qui sont dans la section "Informations complémentaires"                   

* Le premier lien ouvre une page en anglais pour un tutoriel populaire pour en savoir plus sur NVDA à partir du site de Joseph Lee.                
* Le deuxième lien est pour s'abonner à la liste anglophone dédiée à NVDA.                

### Passage de Window-eyes à NVDA

Un tutoriel très court qui vous dit ce que vous devez savoir pour faire ce que vous avez fait avant.          

 Auteur : Gene Asner          

## Quelques mots de l'auteur

Tout d'abord, un mot sur l'utilisation du tutoriel.  J'explique les concepts dans le tutoriel, mais une grande partie de ce que je fais est de donner les commandes qui sont différentes dans NVDA.  Comme je l'explique, une grande partie de ce que vous faites ne changera pas, mais certaines choses nécessiteront des commandes différentes.     

 Pour utiliser efficacement ce tutoriel, la pratique de nombreuses commandes que je vous donne pourrait être très utile.  Par exemple, quand je vous donne les commandes pour le mode revue de l'écran, arrêtez de lire et pratiquez dans ce document, cela pourrait vous aider à vous souvenir et à apprendre.  Lorsque je décris le mode aide à la saisie, activez-le et essayez différentes touches et combinaisons de touches, cela peut être utile.  Vous constaterez, par exemple, que les commandes pour le mode revue de l'écran que je vous donne sont annoncées lorsque vous avez activé le descripteur de touche et que vous invoquez les commandes.  Cela vous aidera à revoir rapidement et efficacement si vous oubliez l'un d'entre eux, ce qui est beaucoup plus susceptible de se produire dans la disposition ordinateur portable (Laptop) que dans la disposition ordinateur de bureau (Desktop).  Maintenant que j'ai suggéré des façons de l'utiliser efficacement, le tutoriel commence.            
 
## Introduction

Beaucoup de gens ont peur de passer à NVDA ou à tout autre lecteur d'écran à partir de Window-eyes.  Ce tutoriel vous expliquera et démontrera que de telles appréhensions sont largement basées sur des malentendus.        

Avant de discuter du malentendu qui cause la plus grande partie de cette appréhension, je parlerai brièvement de l'installation de NVDA et du changement du synthétiseur utilisé ainsi que les Paramètres de la Voix.         
 
## Installation

NVDA a un installateur parlant.  Exécutez le fichier comme vous le feriez pour n'importe quel fichier d'installation.  Vous pouvez obtenir une boîte de dialogue vous demandant si vous voulez exécuter le fichier.  Utilisez la commande alt r pour démarrer.  Si vous recevez un message de l'UAC, répondez avec alt y.         

Exécuter Narrator.  Ensuite, exécutez le programme d'installation de NVDA.  Lorsque l'installateur s'exécute, il y aura une pause et après un peu de musique sera jouée.  Peu de temps après, l'installateur parlera.  Décharger Narrator à ce moment-là.  Retournez à la boîte de dialogue d'installation.           

Tabulation à travers les options.  Acceptez le contrat de licence, puis Tab jusqu'à Installer.  Vous obtiendrez d'autres options, mais Installer  est celui que vous voulez.           

### À propos des voix

N'arrêtez pas d'utiliser NVDA à cause de la voix.  Beaucoup de gens n'essaient pas NVDA à cause de la voix. Dès que vous l'aurez configuré, je vous dirai comment changer le synthétiseur utilisé.                    
 
## La boîte de dialogue Accueil

Lorsque NVDA est installé et en cours d'exécution, une boîte de dialogue est fournie avec un texte explicatif et la possibilité de définir une ou deux options.  Bien que je sache que beaucoup de gens n'aiment pas vraiment la voix par défaut, cela vaut la peine d'écouter la boîte de dialogue et de regarder les options en faisons Tab à travers eux.                

Je vous recommande de cocher la case à cocher pour utiliser la touche verrouillage majuscules comme touche modificatrice NVDA. Vous verrez pourquoi je le recommande dans les discussions ultérieures.                  
 
## Changement de synthétiseurs et Paramètres de la Voix

Après avoir parcouru la boîte de dialogue d'Accueil initiale, il est temps d'apprendre à changer de synthétiseur.  Invoquez  la commande contrôle insert s.  Utilisez n'importe quel insert.  A partir de maintenant, supposons que vous pouvez utiliser n'importe quel insert sauf si vous l'indiquez différemment.  Une boîte de dialogue s'ouvrira pour la sélection d'un synthétiseur.            

Vous verrez une liste de différents synthétiseurs éventuellement disponibles.  Choisissez SAPI 5.  Je sais que tout le monde a au moins une voix SAPI 5 sur leur machine.  Flèche haut ou flèche bas dans la liste et arrêtez-vous à SAPI cinq.  Vous appuyez sur Entrée.  Maintenant, vous entendrez une autre voix.  C'est peut-être la même voix que vous entendez dans Narrator.           

Invoquez maintenant la commande contrôle insert v.  Vous êtes maintenant dans la boîte de dialogue pour sélectionner et  changer le son de la voix.  Flèche haut ou flèche bas pour voir quelles voix sont disponibles.  Arrêtez-vous sur la voix que vous avez choisi.  Maintenant tab à travers de la boîte de dialogue et modifiez les options de la voix.  Une fois que vous avez trouvé la voix que vous voulez et en faisons Tab à travers et configuré ce que vous voulez comme le débit et la ponctuation, appuyez sur le bouton OK.     
 
## À propos des commandes

Maintenant, continuons avec ce que j'ai dit au début de ce tutoriel.  Le malentendu qui rend déconcertant le changement vers NVDA à partir de Window-eyes ou à partir de tout autre lecteur d'écran est que l'utilisateur ne réalise pas que la plupart des commandes qu'il utilise sont des commandes de Windows et des commandes du programme et ils ne changeront pas.                       

Considérez les exemples suivants :           

* L'ouverture des menus était et est toujours alt.  C'est une commande de Windows pour ouvrir les menus dans les programmes.  C'est la même chose quel que soit le lecteur d'écran que vous utilisez.     
* Contrôle o ouvrir ne change pas.       
* En utilisant les touches fléchées pour se déplacer dans un document ne change pas.       
* Tabulation à travers des boîtes de dialogue ne change pas.  Ni comment vous vous déplacez dans une liste ou dans une vue en arborescence ou lorsque vous travaillez avec une zone de liste déroulante, et la liste continue.      

Les commandes clavier du lecteur d'écran, dont beaucoup peuvent changer, comme lire la barre de titre, donnent accès à des informations que vous ne pouvez pas obtenir ou que vous ne pouvez pas facilement obtenir en utilisant Windows ou par les commandes clavier du programme.                    

Par exemple, lire la barre de titre.  Dans Window-eyes, la commande clavier est contrôle shift t.  Dans NVDA, est insert t.  La barre de titre est quelque chose qu'une personne voyante regarde.  Vous ne pouvez pas y accéder avec le curseur pc ou le curseur de l'application, comme vous voulez l'appeler, car  cela n'est pas nécessaire.  Une personne voyante peut juste le voir.  Donc, le lecteur d'écran a une commande clavier, lire la barre de titre.  Cette commande n'est pas une commande Windows ni une commande du programme.                   

Voici les commandes du lecteur d'écran que vous devrez connaître pour vous permettre de faire ce que vous avez déjà fait avec Window-Eyes :            

* Pour quitter NVDA, insert q puis  entrée.         
* Lire la barre de titre, insert t.     
* Heure, insert f12.      
* Annoncer les informations de mise en forme, insert f.               
* Lire la fenêtre actuelle, insert b.  Dans Window-eyes la commende clavier est contrôle shift w.       
* Lire jusqu'à la fin, insert Fleche Bas.  Utilisez la Flèche Bas dans le clavier principal  de l'ordinateur de bureau (Desktop).  Dans la disposition ordinateur portable (Laptop), Lire jusqu'à la fin est touche NVDA a.        
* Arrêt parole avec contrôle, comme avec les lecteurs d'écran en général.       
 
## Revue de l'écran

Je suis sur le point de discuter des commandes pour le mode Revue de l'écran.  ceux-ci vous permettent d'examiner l'écran sans changer la position du curseur lors de l'édition d'un document, ou de changer où vous êtes dans une boîte de dialogue ou n'importe où ailleurs.  Mais d'abord, je ferai remarquer que les commandes telles que flèche gauche, flèche droite, contrôle début, contrôle fin, contrôle flèche gauche, et contrôle flèche droite sont des commandes de déplacement de Windows pour se déplacer dans n'importe quel champ d'édition standard, y compris les champs d'édition du traitement de texte.  Aucun d'entre eux ne changera.                             
 
### Commandes clavier pour le mode Revue de l'écran

Tenir compte du modèle pendant que je vous donne ces commendes :          

* Lire ligne précédente, pavnum7.       
* Lire ligne courante, pavnum8.         
* Lire ligne suivante, pavnum9.         

Vous vous déplacer  dans le mode Revue de l'écran à la ligne précédente ou suivante lorsque vous invoquez ces commandes.  Vous pouvez continuer à vous déplacer et à lire jusqu'à ce que vous atteigniez en haut ou en bas de l'écran.           

* Lire mot précédent, pavnum4.            
* Lire mot courant, pavnum5.             
* Lire mot suivant, pavnum6.               
* Lire caractère précédent, pavnum1.               
* Lire caractère courant, pavnum2.               
* Lire caractère suivant, pavnum3.                     

Tenir compte du modèle :            

* Lire courant est la touche au milieu de chacune de ces rangées.                
* Déplacer et lire précédent est la touche à gauche.                 
* Déplacer et lire suivant est la touche à droite.        

Plus les nombres sont petits, plus l'unité de mouvement est petite.  1 2 et 3  déplacer par caractère.      
4 5 et 6 déplacer par mot, etc.                

Maintenant, voici les commandes de revue dans la disposition ordinateur portable (Laptop):                   

* Lire ligne courante, NVDA maj point.          
* Déplacer et lire ligne suivante, NVDA flèche bas.               
* Déplacer et lire ligne précédente, NVDA flèche haut.               
* Lire mot courant, NVDA contrôle point-virgule.         
* Lire mot précédent, NVDA contrôle flèche gauche.           
* Lire mot suivant, NVDA contrôle flèche droite.              
* Annoncer le caractère courant, NVDA point-virgule.                  
* Déplacer et lire caractère précédent, NVDA flèche gauche.                         
* Déplacer et lire caractère suivant, NVDA flèche droite.                  

Après un peu plus de discussion, je vais vous dire comment changer la disposition clavier pour ordinateur portable (Laptop.                    

Pour en revenir aux touches de revue dans la disposition ordinateur portable (Laptop), il y a une espèce de modèles dans la disposition ordinateur portable (Laptop), mais pas le type de modèle uniforme comme dans la disposition ordinateur de bureau (Desktop). Si j'avais un ordinateur portable sans pavé numérique, j'achèterais un pavé numérique USB et je ne m'amuserais pas avec la disposition ordinateur portable (Laptop).  Mais vous pouvez décider cela pour vous-même.  Mais à part des  touches prévisibles, comme ce point qui est actuellement utilisé, et que les flèches gauche et droite étant utilisées avec  des modificatrices, vous ne pouvez pas généraliser davantage.  De tels modèles ne sont pas suivis dans chaque élément précédent et suivant.  Dans l'un des éléments précédents et suivants, les flèches haut et bas sont utilisées.  

## Plus de commandes de revue et Modes de revue

Voici deux autres commandes importantes :                 

* Aller en haut de la fenêtre, maj pavnum7. Commande disposition ordinateur portable (Laptop): contrôle touche NVDA début.         
* Aller au bas de la fenêtre, maj pavnum9. Commande disposition ordinateur portable (Laptop): contrôle touche NVDA fin.                     
 
J'ai dit en haut et au bas de la fenêtre mais c'est trop simpliste.  Cela dépend du type de mode de revue que vous utilisez.  Je n'entrerai pas dans ce détail dans ce très court tutoriel.                     
 
### Une brève introduction aux modes de revue.

Si vous examinez du matériel dans un traitement de texte, utilisez les commandes de revue que que j'ai données. Si vous êtes dans une boîte de dialogue ou d'autres structures, pour voir ce qui est à l'écran, vous passez en mode  Revue de l'écran. Pour ce faire, utilisez la commande insert du pavé numérique pavnum7 dans la disposition ordinateur de bureau (Desktop).  Dans la disposition ordinateur portable (Laptop), la commande est touche NVDA page précédente.  Invoquez la commande et répétez si nécessaire jusqu'à ce que vous entendiez Revue de l'écran. Ensuite, vous pouvez utiliser les commandes  de revue comme pavnum7, 8, 9, etc. pour examiner ce qui est sur l'écran.                   

Une fois que vous avez fini de travailler en mode   Revue de l'écran, il est très important de revenir en mode  Revue de l'objet.  Invoquez la commande insert du pavé numérique pavnum1 dans la disposition ordinateur de bureau (Desktop).  Dans la disposition ordinateur portable (Laptop), la commande est touche NVDA page suivante.  Répétez la commande si nécessaire jusqu'à ce que vous entendiez Revue de l'objet.  Si vous ne le faites pas, vous entendrez souvent des informations incorrectes sur  où que vous soyez lorsque vous effectuez plusieurs choses dans NVDA.                          

## Changement de la disposition clavier

Maintenant, je vais vous expliquer comment changer la disposition à partir de l'ordinateur de bureau (Desktop) vers la disposition de l'ordinateur portable (Laptop) 
et discuter de l'utilisation du verrouillage majuscules comme une touche NVDA.  Si vous ajoutez verrouillage majuscules, vous pouvez toujours utiliser insert ; il y a des moments où le verrouillage majuscules est très pratique.                 
 
Pour ouvrir les Paramètres du Clavier, invoquez la commande  contrôle insert k. Vous êtes maintenant dans une liste  de dispositions clavier. La disposition du clavier ordinateur de bureau (Desktop) est celle qui est par défaut et est la première dans la liste. Si vous souhaitez passer à la disposition ordinateur portable (Laptop), faire flèche bas une fois, puis Tab et activer le bouton OK.          

Au fur et à mesure que vous faites Tab, vous remarquerez les cases à cocher sur les touches qui servent de touche NVDA. Verrouillage majuscules  n'est pas cochée.  Cochez cette case avec la barre d'espace. Vous pouvez rester dans la  disposition du clavier ordinateur de bureau (Desktop) et toujours faire Tab et regarder ces cases à cocher.            

J'utilise souvent verrouillage majuscules  comme touche NVDA et j'utilise la disposition du clavier ordinateur de bureau (Desktop).  Je trouve beaucoup plus confortable de l'utiliser pour la commande Lire jusqu'à la fin.  Je maintien enfoncée  la touche verrouillage majuscules  et j'appui sur la flèche bas.  C'est-à-dire, pour moi, c'est beaucoup plus pratique que d'utiliser insert flèche bas, quel que soit l'insert que j'utilise.                   

Si vous voulez basculer entre activé et désactivé la touche verrouillage majuscules lorsque vous tapez, vous devrez appuyer deux fois rapidement sur la touche.  Si vous appuyez une fois sur cette touche et vous la maintenez enfoncée, elle sert comme touche NVDA.  Si vous l'appuyez deux fois rapidement, basculera la touche verrouillage majuscules entre activé et désactivé.                    
 
## Commandes clavier liées à la Souris et Modes de revue

Pour cliquer avec le bouton gauche de la souris, amènez  la souris  à la position  en mode revue avec la commande insert du pavé numérique pavnumDiviser.  C'est la même commande quand vous faites un clic avec le bouton gauche de la souris dans Window-eyes.  Si vous voulez cliquer avec le bouton droit de la souris, amènez  la souris avec la même commande (insert du pavé numérique pavnumDiviser), puis utilisez pavnumMultiplier, la touche située immédiatement à droite de pavnumDiviser.  En d'autres termes, vous faites un clic droit avec la même touche que vous utilisez dans Window-eyes.                     

La revue de l'écran, bien que les commandes soient différentes, elle est similaire dans le concept lors de l'utilisation du pointeur de la souris  dans Window-eyes.  La Navigation par objet est différente de n'importe quel mode de revue dans Window-eyes.  Je ne vais pas vous apprendre son utilisation ici, mais vous trouverez une discussion à ce sujet dans un tutoriel, donc je vais vous donner une adresse ultérieurement dans ce tutoriel. Selon la façon dont vous utilisez votre ordinateur, vous pouvez le trouver très utile.      
 
C'est tout ce que je vais enseigner dans ce bref tutoriel sur la revue de l'écran et la souris.  Comme je l'ai dit, son but est de vous permettre de faire une grande partie de ce que vous faites avec Window-eyes rapidement et facilement.  Mais je vais vous dire quelques autres choses.                 
 
## La navigation sur Internet :

Lorsque vous êtes sur une page Web, les commandes de navigation rapide sont presque identiques, que vous utilisiez NVDA ou Window-eyes :                   

* Déplacer par titres est h.            
* Ignorer les blocs de liens est n.              
* Déplacer au bouton suivant est b.            
* La zone de liste déroulante suivante est c.               
* La case à cocher suivante est x.               

## Mode aide à la saisie

NVDA dispose d'un mode aide à la saisie similaire à celui de Window-eyes.  Insert et 1 sur le clavier principal l'active. Lorsque vous appuyez sur une touche ou une combinaison de touches qui pourrait être une commande, vous entendrez quelle sont les touches et quelles sont les commandes exécutées.  Cela varie en fonction de l'endroit où vous êtes.                  

Lorsque vous naviguez dans un navigateur qui prend en charge le mode navigation, en tapant plusieurs lettres individuelles ceci vous donnera des informations sur ce que font les touches en mode navigation.  J'ai déjà donné beaucoup de ces informations ci-dessus, mais vous pouvez appuyer sur plusieurs touches en utilisant le mode aide à la saisie dans un navigateur. Pour désactiver le mode aide à la saisie utilisez la même commande que vous avez utilisée pour l'activer, insert 1.                
 
## Informations complémentaires

Pour en savoir plus sur NVDA, un tutoriel populaire est disponible à :

[http://www.josephsl.net/tutorials](http://www.josephsl.net/tutorials)                              

Sur cette page, vous verrez des liens pour télécharger différentes sections du tutoriel traitant de différents sujets.  Vous pouvez également télécharger l'ensemble du tutoriel sous forme de fichier zip.
 
Il existe également une liste de diffusion pour les utilisateurs de NVDA.  Pour vous abonner, envoyez un message vide à cette adresse :

[nvda+subscribe@nvda.groups.io](mailto:nvda+subscribe@nvda.groups.io)            
 
J'espère que ce tutoriel a éliminé une grande partie de votre appréhension à l'idée de passer à NVDA.  Maintenant, comme vous le souhaitez ou avez besoin, vous pouvez consulter le tutoriel auquel j'ai donné un lien. NVDA est un lecteur d'écran puissant et répondra à de nombreux besoins des utilisateurs ainsi qu'à ceux de JAWS ou de Window-eyes.  J'espère que ce bref tutoriel vous donne une bonne base sur laquelle bâtir la confiance que la transition devrait être beaucoup plus facile que vous pourriez l'avoir pensé et que cela vous aidera à le rendre beaucoup plus agréable.

Fin
