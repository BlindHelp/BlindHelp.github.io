---
title: Add-on Updater 19.07.3 Experimental un nouveau moyen d'être averti des mises à jour des extensions via les toasts de Windows 10
layout: post
author: BlindHelp
---

<footer>Lundi 22 Juillet 2019</footer>


Coucou mes amis du blog de BlindHelp!               
Nous avons commencé la semaine en parlant d'une mise à jour diffusée peu de temps après notre précédent billet dédié à l'extension [Add-on Updater](https://addons.nvda-project.org/addons/addonUpdater.fr.html)                     
qui atteint la version  19.07.3.    
Expérimental: afficher le toast de notification de mise à jour des extensions.    

Jusqu'à présent, chaque fois que des mises à jour étaient détectées, Add-on Updater(Rechercher les mises à jour des extensions) affichait une boîte de dialogue avec une liste d'entre elles, offrant des options pour les installer. En d'autres termes: le même comportement que lorsque nous effectuons une recherche manuelle. Cette fenêtre distrait l'utilisateur en supprimant brutalement le focus de l'application active à ce moment. La version 19.07.1 ajoute une fonctionnalité expérimentale qui ne fonctionne que sous Windows 10 et doit être activée à partir des options de l'extension:    
Par défaut, la case à cocher:    
`Experimental: show add-on update notification toast`    
est décochée.     
Note:Si vous avez téléchargé la dernière version 19.07.3, cette option est maintenant cochée par défaut.     
Ce comportement, apparemment, ne se produit que dans les nouvelles installations.    
Les utilisateurs qui mettent à niveau à partir de versions précédentes ne percevront pas le changement. Si vous souhaitez tester le fonctionnement aller sur:    
`NVDA / Préférences sous-menu/ Paramètres... dans la catégorie "Mise à Jour des Extensions":`    
et cochez la dernière case à cocher:    
`Experimental: show add-on update notification toast`    
Lorsque cette case est cochée vous aurez la possibilité de recevoir une notification émergente du système lorsque des mises à jour sont trouvées. Cette notification se comportera comme toutes les autres, offrant même la possibilité de la déplacer vers le Centre de notifications. Si vous ne savez pas comment afficher les notifications émergentes dans Windows 10, voici un petit rappel:    

* Windows 10 build 1803 et versions antérieures: appuyez sur windows + v lorsque la notification est affichée pour déplacer le focus sur celle-ci.
* Windows 10 October Update (1809) et versions ultérieures: appuyez sur Windows + Maj + v. Maintenant, windows + v est utilisé pour coller du presse-papiers dans le nuage, ne l'oubliez pas!
* Une fois dans la notification, appuyez sur la touche de tabulation  pour faire défiler vos options.
* Si vous avez manqué la notification et que vous n'arrivez pas à l'heure, appuyez sur windows + a pour ouvrir le Centre de notifications et le voir à cet endroit.


Pour le moment, cette notification vous indiquera d’aller dans le menu NVDA, Outils, Rechercher les mises à jour des extensions    
C'est simplement informatif et vous ne pouvez pas invoquer des actions à partir du Centre de notifications    
WXPython commence à intégrer la prise en charge des actions dans les notifications de la version 4.1.0, qui est toujours en développement et qu'il faudra du temps pour atteindre NVDA. Si l'expérience réussit, Joseph Lee activera cette fonction par défaut dans la prochaine version de Add-on Updater.    

# Quelques informations utiles données par son auteur Joseph Lee  en anglais #


Quelques points à noter:             

* Même s'il s'agit désormais d'une extension stable, le Add-on Updater est toujours étiqueté comme preuve de concept. Une fois que la mise à jour de l'extension est livrée à NVDA, le Add-on Updater sera abandonné.            
* Tous les extensions que vous avez obtenus ne seront pas mise à jour. Pour le moment, seuls les extensions répertoriées sur le site Web comunautaire des modules complémentaires NVDA (addons.nvda-project.org), ainsi que le Remote Support add-on, pourront faire l'objet de vérifications de mise à jour par le Add-on Updater.            
* Vous pouvez demander à NVDA de ne jamais vérifier les mises à jour des extensions à la base par extension, ainsi que demander à NVDA de rechercher les snapshots en développement.            
* Si vous désactivez une extension, le Add-on Updater  ne recherchera pas de mises à jour pour ces extensions. Si vous désactivez le  Add-on Updater, vous ne pourrez pas rechercher les mises à jour des extensions via NVDA. Plusieurs extensions sont fournis avec leur propre fonction autonome de vérification de mise à jour. Si cette option est désactivée, ces fonctions de vérification des mises à jour autonomes seront activées (à moins que vous ne désactiviez cette option à partir des extensions eux-mêmes).

Exigences:

* NVDA 2018.4 ou ultérieure          
* Windows 7 Service Pack 1 ou ultérieur             

[Extension sur la page principale du site comunautaire des extensions NVDA:](https://addons.nvda-project.org/addons/addonUpdater.fr.html)            

[Code source sur GitHub:](https://github.com/josephsl/addonupdater)                 

Pour les personnes souhaitant fournir des pull requests: n'hésitez pas à fournir des pull requests pour des problèmes (issues), excepté: demander des vérifications de mise à jour pour des extensions non hébergées sur le site comunautaire des extensions. Si vous le demandez dans votre pull request (ou en tant qu'une nouvelle incidence (issue) pour cette extension), en particulier si vous ajoutez des packages provenant d'un site Web donné (oui, je suis sûr que vous connaissez le site dont je parle), je ' Je les ferme sans commentaire. Cette restriction concerne principalement le contrôle de la qualité.         
Profitez donc.    
Amitiés,             
Joseph               
 
Merci à son auteur Joseph Lee pour cette information très importante.           

---

[Add-on Updater sur la page principale du site comunautaire des extensions NVDA:](https://addons.nvda-project.org/addons/addonUpdater.fr.html)            
Télécharger [version stable](https://addons.nvda-project.org/files/get.php?file=nvda3208)               

Add-on Updater peut être mis à jour de forme autonome, afin que vous puissiez suivre le processus de vérification habituel pour le mettre à jour. Quoi qu'il en soit, si cela ne fonctionne pas ou si vous ne disposez toujours pas de cette extension vous pouvez le télécharger à partir du lien ci-dessus.               

Si une ancienne version de cette extension était déjà installée, sa mise à jour est aussi simple que d'aller dans le menu NVDA, Outils, Check for add-on updates (traduit par Rechercher les mises à jour des extensions... Sinon, il peut être téléchargé manuellement à partir du lien ci-dessus.

 Maintenant l'interface de cette extension  est entièrement traduite en français, merci à Michel Such pour son temps et son dévouement.😉             
 
Voilà donc,  tout est dit au sujet de la nouvelle mise à jour de Add-on Updater 19.07.3 disponible en français!                
Je vous souhaite une bonne installation!         
Bien amicalement,              
Rémy (BlindHelp).

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouveau espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---