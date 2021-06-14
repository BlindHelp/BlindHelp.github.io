---
title: Cricricri une extension pour NVDA
permalink: "/cricricri/"
layout: post
author: BlindHelp
---

<footer>Publié le Jeudi 27 Mai 2021</footer>


Coucou mes amis du blog de BlindHelp!    
Voici une nouvelle extension  pour NVDA accessible fait  par un ami hispanophone, il s'agit de cricri (Cri du grillon (onomatopée) cricri. Traduit en français par mes soins.    
Cricricri - Extension pour changer le maudit manifeste!    
Eh bien, à partir de NVDA 2021.1, il sera nécessaire que les développeurs adaptent les manifestes afin de  coïncider avec la version NVDA.    
Eh bien, cela peut entraîner la conséquence que le développeur ne publie pas la mise à jour à temps et s'il s'agit d'une extension que nous utilisons beaucoup, nous devons décider entre faire la mise à jour de NVDA ou rester à la version  2020.4 jusqu'à la  sortie de l'extension mise à jour par le développeur.    
Il se produira également que de nombreuses extensions qui restent valables et qui ne sont plus maintenues à moins que nous changeons la date à laquelle le manifeste ne fonctionnera pas.    
Eh bien dire que Cricricri nous aidera à changer la date de nos manifestes dans ces extensions que nous choisissons, dire aussi que ce n'est pas la panacée car déjà certaines extensions en dehors du changement dans le manifeste nécessitera aussi des changements internes. Cela dépend déjà de chaque extension et de son auteur.    
Je recommande que même si nous avons changé le manifeste avec Cricricri, si l'auteur d'une extension fait la mise à jour, nous mettons à jour cette extension car elle peut apporter en dehors de ce qui a été dit dans le manifeste des changements internes un pour un meilleur fonctionnement.    
Eh bien, Cricricri est orienté  pour les utilisateurs qui n'ont pas envie de s'enquiquiner avec les manifestes pour une raison quelconque. et Cricricri les aidera à ne pas rester laissé derrière et sans extensions.    
Dire que Cricricri doit être utilisé avant d'installer les nouvelles versions NVDA, que ce soit pour mettre à jour ou nettoyer, les extensions doivent avoir le manifeste changé avant de mettre à jour ou lors de l'installation de celle-ci.  
S'il s'agit d'une installation propre, je recommande que CRICRICRI soit utilisé dans la copie que nous avons nos extensions, puis effectuez une copie avec [l'Empaqueteuse d'extensions pour NVDA](https://blindhelp.github.io/addonPackager/) afin de sauvegarder une copie de vos extensions rapidement pour que vous puissiez les installer sans problème.    
Eh bien, Cricricri est très facile à utiliser, mais je recommande de lire l'aide de l'extension ci-dessous afin de vous familiariser avec elle.    
Note vous pouvez aussi appuyez sur le bouton Aide de cette extension, dans le Gestionnaire d'Extensions, afin de trouver la même aide.    

# Très important! #

Notre ami Cyrille de la liste nvda-fr insiste sur quelques points de vigilance sur l'usage de cricricri.  


> D’abord si vous utilisez l’extension cricricri, il faut que vous compreniez bien ce qu’elle fait. Si vous ne savez pas ce qu’est le manifeste d’une extension, pas la peine de l’utiliser.  
Si vous persistez à l’utiliser quand même, que vous vous retrouvez avec des comportements inattendus sous NVDA et que vous demandez de l’aide sur la liste (ou ailleurs), surtout précisez bien que vous avez utilisé cricricri. Sinon on ne comprendra plus rien.  
Par ailleurs, le soi-disant maudit manifeste est là justement pour éviter aux utilisateurs d’avoir des ennuis inattendus. Donc celui qui modifie un manifeste à la main ou grâce à cricricri doit bien être conscient que les extensions qu’il aura ainsi modifié pourront avoir un comportement inattendu.  


Avertissement: 💀  
Le blog de BlindHelp n'est pas responsable des dommages causés par une mauvaise utilisation de l'extension téléchargé ni des informations ce trouvant sur la documentation dédié et l'utilisation de l'extension téléchargé est à vos risques et périls. ☠  

# Informations sur l'extension  Cricricri: #

* Auteur: <span lang="es">Héctor J. Benítez Corredera</span>
* Version actuelle: 0.1
* Compatibilité avec NVDA: de 2019.3 à 2021.1
* Langues supportées: Espagnol et Français
* [Télécharger](https://nvda.es/files/get.php?file=cricricri)
* [Voir code source sur GitHub](https://github.com/hxebolax/cricricri-para-NVDA)

# Manuel de cricricri pour NVDA

Petite extension qui nous aidera à changer la date des manifestes.

Maintenant, selon la dernière politique de NVDA et jusqu'à nouveaux changements, chaque année dans la première version de NVDA, les programmeurs devront modifier la version pour correspondre à leur manifeste avec la version NVDA.

Eh bien, il y aura des programmeurs qui le font immédiatement, d'autres qui prennent son temps pour le faire et d'autres qui ne le feront tout simplement pour avoir abandonné leurs extensions ou pour une raison quelconque.

Dans ce dernier cas, nous devrons faire le changement de la propriété lastTestedNVDAVersion à la main et si nous avons de nombreuses extensions, nous devrons perdre du temps, en plus ce n'est pas une tâche facile pour tous les utilisateurs, car il existe de nombreux niveaux d'utilisateurs.

De plus, si nous voulons essayers les versions bêtas et les RC nous devrons modifier ce paramètre dans les manifestes sinon nous ne pouvons pas avoir l'extension installée.

Eh bien, cricricri nous aide dans cette tâche en faisant le processus pour nous et rapidement.

## Utilisation de cricricri

Cricricri peut être lancé à partir du menu Outils / Changeur de date pour les manifestes ou lui ajouter un raccourci allant dans le menu NVDA / Préférences / Gestes de commandes puis rechercher  la catégorie cricricri.

Une fois ouvert, la fenêtre est simple, nous aurons une liste avec nos extensions et sa version dans le manifeste.

Nous pouvons choisir celle que nous souhaitons.

Si nous faisons Tabulation nous avons deux boutons, Sélectionner tout ou Désélectionner tout, peu de choses à dire, cela agira sur la liste des extensions.

Si nous faisons Tabulation nous tomberons dans trois zones de liste déroulantes:

* Sélectionner la version Majeure: Cette zone de liste déroulante  doit correspondre à la date de la version que aura NVDA.

* Sélectionner la version Mineure: Ici en la laissant en 1 il suffit, cependant j'ai mis les quatre versions qui sortent annuellement s'il y avait des changements. (N'importe quoi peut arriver)

* Sélectionner une révision: Dans cette zone de liste déroulante en la laissant en 0 il suffit, cependant j'ai mis  jusqu'à 5 aussi au cas où.

Si nous faisons Tabulation nous tomberons sur le bouton Appliquer les changements aux manifestes, , ce qui commencera le processus  de modification des manifestes pour les extensions que nous avons sélectionnées dans la liste.

Si nous faisons Tabulation une fois de plus nous tombons sur le bouton Fermer, qui fermera la fenêtre sans faire aucune action.

## Raccourcis clavier

* Alt+L: Nous amènera rapidement à la liste des extensions.
* Alt+S: Nous sélectionnons toutes les extensions.
* Alt+D: Nous désélectionnons toutes les extensions qui sont cochées.
* Alt+A: Commencera la modification des manifestes de ces extensions que nous avons sélectionnées.
* Alt+F ou Échap: Fermera  la fenêtre sans effectuer aucune action.

## Observations de l'auteur

Eh bien, NVDA est un lecteur d'écran en évolution constante, il existe donc plusieurs fois de nombreuses extensions qui sont laissées en cours de route en raison du manque de développement et du fait de ne pas les adapter aux changements de NVDA dans son évolution.

Cela signifie que le changement de la date dans les manifestes résout un problème momentané pour continuer à utiliser ces extensions qui ne sont pas mises à jour ou que le développeur prend du temps pour les mettre à jour. Mais il y aura des extensions qui ne serviront pas seulement à changer le manifeste et nécessitent des changements internes  pour s'adapter aux nouvelles versions, dans ce cas, l'extension sera brisée et reste à contacter avec l'auteur de ladite extension.

Bien je conseille de mettre à jour les extensions présentant les changements dans les manifestes, bien que nous ayons changé avec cricricri la date étant possible que ces extensions apportent hormis l'adaptation du manifeste des autres modifications que le développeur a fait.

Dire également que je ne me responsabilise pas si quelque chose se brise pour changer les manifestes car il y a des centaines d'extensions et qu'il peut y avoir une exception non envisagée de ma part.

L'utilisation de cette extension et ses résultats sont exclusivement sous la responsabilité de l'utilisateur final.


---


Nous remercions à <span lang="es">Héctor J. Benítez Corredera</span>, développeur de cette extension fabuleuse d'avoir voulu la partagée  avec nous. 😉    
Profitez de Cricricri une extension pour NVDA!    
Amusez vous! 😃    
@+    
BlindHelp!    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouveau espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---