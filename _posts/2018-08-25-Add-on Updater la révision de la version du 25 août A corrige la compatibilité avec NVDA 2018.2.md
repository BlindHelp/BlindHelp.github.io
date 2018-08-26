---
title: Add-on Updater la révision de la version du 25 août A corrige la compatibilité avec NVDA 2018.2
layout: post
author: BlindHelp
---

<footer>Samedi 25 Août 2018</footer>


Coucou mes amis du blog de BlindHelp!               
Plusieurs utilisateurs ont signalé d'une régression où                
[Add-on Updater](https://addons.nvda-project.org/addons/addonUpdater.fr.html)                   
le 25 août lequel n'a pas fonctionné avec NVDA 2018.2. Cela correspond à un attribut qui n'existe pas dans wxPython Classic. Cette régression a été corrigé avec la version A (20180825A), et en fonction de la version de NVDA que vous avez, vous pouvez appliquer via Add-on Updater (versions alpha et bêta) ou installez-le manuellement à partir du site Web des modules complémentaires (NVDA 2018.2).                  

Ou en utilisant ce lien direct:           

[Télécharger version de développement](https://addons.nvda-project.org/files/get.php?file=nvda3208)                     
 
Merci à son auteur Joseph Lee pour cette information très importante.           

Commentaire by BlindHelp!                 
Quelques heures après que l'auteur de Add-on Updater a publié  la Version 20180325 a été trouvé une régression introduite dans la dernière  version 23 Août donc, la 20180823, ce qui rend impossible d'appuyer sur le bouton Update dans NVDA 2018.2.1 et précédent même s'il y avait des cases à cocher cochés, en raison d'un problème de compatibilité entre les versions WX. Donc, pour résoudre ce problème, l'Add-on Updater 20180825A est maintenant disponible. Pour mettre à jour ce module complémentaire, nous avons deux options, et selon notre version de NVDA, nous devrons choisir l'un ou l'autre:                          
1. Les utilisateurs des versions de développement de NVDA 2018.3 avant de passer à la version 4 WX (début Juin 2018) et la version finale de NVDA 2018.2.1 et versions antérieures doivent télécharger manuellement le module complémentaire (voir lien en haut de la page) car le bouton de mise à jour n'apparaîtra pas même si les cases à cocher sont cochés dans la boîte de dialogue de mise à jour.                     
2. Tous les autres utilisateurs (avec les versions de développement alpha après la mise à jour WX ou les versions bêta de NVDA 2018.3) peuvent choisir la méthode précédente ou mettre à jour le module complémentaire depuis leur propre boîte de dialogue pour vérifier les mises à jour.                 
Pour le reste, la principale nouveauté est la possibilité de choisir les modules complémentaires pour lesquels nous souhaitons recevoir des mises à jour de développement, à partir du panneau de Paramètres Add-on Updater.             

J'ai oublié de vous dire que l'interface de ce module complémentaire  est en anglais, mais que c'est facile à comprendre.             
 
Voilà donc,  tout est dit au sujet de la mise à jour importante de Add-on Updater!                
Je vous souhaite une bonne installation!         
Bien amicalement,              
Rémy (BlindHelp).

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouveau espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---