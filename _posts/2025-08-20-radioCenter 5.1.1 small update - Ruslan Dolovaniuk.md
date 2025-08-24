---
title: Nouvelle petite mise à jour 5.1.1 de l'extension radioCenter pour NVDA, par Ruslan Dolovaniuk
permalink: "/radioCenter-5-1-1-small-update-by-Ruslan-Dolovaniuk/"
layout: post
author: BlindHelp
---

<footer>Publié le Mercredi 20 Août 2025</footer>


Coucou mes amis du blog de BlindHelp!    
Comment allez-vous ?    
Si vous vous souvenez bien nous traitons sur ce blog [BlindHelp.github.io](https://blindhelp.github.io) il y a quatre jours un article sur:    
[Nouvelle version 5.1.0 de l'extension radioCenter pour NVDA, par Ruslan Dolovaniuk](https://blindhelp.github.io/radioCenter-5-1-0-update-by-Ruslan-Dolovaniuk/)    
Publié le Samedi 16 Août 2025    
Et je vous informe que j'ai reçu un message en privé aujourd'hui de la part de l'auteur qui m'a dit ce qui suit sur cette nouvelle petite mise à jour 5.1.1 (voir le message traduit de l'anglais vers le français par mes soins ci-dessous):    

# Message de l'auteur traduit de l'anglais vers le français:
Petite mise à jour 5.1.1:    
Suppression de l'affichage du script de service pour le traitement des combinaisons d'utilisateurs de la liste des gestes NVDA.    
Cela éliminera les problèmes d'attribution ou de suppression des gestes de l'utilisateur pas dans l'extension.    
Vous pouvez le télécharger à partir de la chaîne Telegram ou via un lien direct:    
<https://elrus.ho.ua/downloads/nvda/radioCenter-5.1.1.nvda-addon>    
Profitez de l'utiliser.    
Chaîne Telegram: <https://t.me/elrusapps>    
Groupe Telegram: <https://t.me/elrus_apps>    

Faire un don.    
Transférer sur une carte bancaire:     
`€: 4441 1144 9720 3321`    
`$: 4441 1144 8905 4781`    
`₴: 4149 4993 7736 2866`    
PayPal: <https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=B3VG4L8B7CV3Y&source=url>    

--
Cordialement, Ruslan.     

# Message original de l'auteur en anglais:
<span lang="en">Small update 5.1.1:</span>    
<span lang="en">Removed display of service script for processing user combinations from NVDA gesture list.</span>    
<span lang="en">This will eliminate problems with assigning or deleting user gestures not in addon.</span>    
<span lang="en">You can download it from the telegram channel or via a direct link:</span>    
<span lang="en"><https://elrus.ho.ua/downloads/nvda/radioCenter-5.1.1.nvda-addon></span>    
<span lang="en">Enjoy using it.</span>    
<span lang="en">Telegram Channel: <https://t.me/elrusapps></span>    
<span lang="en">Telegram Group: <https://t.me/elrus_apps></span>    

<span lang="en">Donate.</span>    
<span lang="en">Transfer to a bank card:</span>    
<span lang="en">`€: 4441 1144 9720 3321`</span>    
<span lang="en">`$: 4441 1144 8905 4781`</span>    
<span lang="en">`₴: 4149 4993 7736 2866`</span>    
<span lang="en">PayPal: <https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=B3VG4L8B7CV3Y&source=url></span>

--
<span lang="en">Best regards, Ruslan.</span>    

## Quelques notes importantes par Rémy (BlindHelp). 🇫🇷
Traduction mise à jour en français pour le fichier d'interface inclus dans cette petite mise à jour 5.1.1.    
À savoir que  le dépôt sur GitHub pour l'extension radioCenter:    
<https://github.com/DollaR84/radioCenter>    
à l'heure actuelle il n'est plus répertorié sur GitHub.    
Voici une Piqûre de rappel de quelques conseils donné par l'auteur quand cette nouvelle version de l'extension est sortie.    
L'auteur de l'extension m'a également informé que:    
Le fichier radio_collections.dat n'est plus utilisé et peut être supprimé.    
Puisqu'il y avait des problèmes avec ce fichier et qu'il perdait périodiquement son contenu lors de la mise à jour et de l'enregistrement des données, c'est pourquoi l'auteur a déplacé les collections vers le serveur.    
Et chaque fois que vous entrez dans les collections, vous devez appuyer sur le bouton Mise à jour  c'est normal, , car les collections ne sont plus stockées localement.    
Sur le serveur, toutes les stations sont stockées dans une base de données à part entière, constamment mise à jour avec de nouvelles stations.    
De plus, l'état des stations est constamment vérifié et mis à jour.    
Pour ces raisons, vous devez demander les données au serveur à chaque fois. Mais cela se produit plus vite qu'auparavant.    
Ces stations se trouvent maintenant uniquement dans l'onglet Service une fois cette mise à jour faite.    
Cela comprend également les fichiers M3U qui ont été répertoriés dans l'onglet File System, c'est pourquoi vous devez appuyer sur le bouton Mise à jour  pour les voir à nouveau là dans le cas où vous l'avez configuré dans l'extension.    
Veuillez noter qu'une fois ouvert l'élément ouvrir la fenêtre Contrôle Radio Center et après avoir appuyé sur le bouton Collections dans le dialogue  Collections de Radio où la liste des stations est située soit dans l'un des onglets Service/  File System, Échap fonctionne de la même manière que le bouton Fermer.    
Si vous aviez appuyé sur Échap ou sur le bouton Fermer le contenu de la liste des stations dans le dialogue  Collections  il ne sera plus disponible et vous devrez appuyer à nouveau sur le bouton Mise à jour, lorsque la liste des stations  apparaît, vous pouvez utiliser les touches fléchées pour naviguer dans la liste des stations, et utilisez le bouton Lire  pour activer la station de radio à la position courante du curseur.    
Donc, n'oubliez pas de le faire chaque fois que vous souhaitez voir ces stations sur les deux onglets à chaque lancement de l'extension après le démarrage ou le redémarrage  de NVDA ou si vous avez appuyé sur Échap ou sur le bouton Fermer.    
Lorsque  le dialogue Contrôle Radio Center est ouvert, si vous avez ajouté une station de radio  à partir d'une des listes susmentionnées dans le dialogue  Collections après l'avoir mise à jour puis joué celle-ci, cette station de radio sera dans la liste des stations du dialogue Contrôle Radio Center    
Seules les stations de radio qui figurent sur cette liste peuvent être exécuté à partir des options du sous-menu Radio Center dans le menu Outils de NVDA, et elles sont les suivantes:    
Lire l, Arrêter a, Couper le son c, Enregistrer e, station suivante s, station précédente s, augmenter le volume a, réduire le volume r.    
Ce que l'auteur nous dit aussi à propos de l'affichage de l'indicateur des favoris    
L'affichage de l'indicateur des favoris sert à l'objectif suivant.    
Lorsqu'il est désactivé, toutes les stations du répertoire du serveur sont affichées dans la liste. C'est environ 50 000 stations.    
Lorsque vous définissez l'affichage de l'indicateur des favoris, seules les stations que vous avez ajoutées à vos favoris sur le site sont affichées dans la liste.    
Cela vous permet de rechercher des stations que vous aimez sur le site, de les enregistrer dans vos favoris, puis de les ajouter à l'extension.    
Voilà pour la petite mise au point fait par l'auteur de l'extension  à propos de la nouvelle version qui vient de sortir inclus quelques notes glissées par mes soins.    

Voici plus d'informations concernant les favoris par notre amie Isabelle Delarue    
Et voilà, j'ai le fin mot de l'histoire concernant les favoris ! Après échange avec le développeur, voici la marche à suivre pour utiliser la case « Afficher les favoris » :    
1. Cocher la case « Afficher les favoris ».
2. Cliquer ensuite sur le bouton « Mettre à jour » : l’extension va alors chercher la liste de vos favoris directement sur le serveur.
👉 À savoir :    
* Cette opération est à refaire à chaque démarrage de l’extension, car par défaut, elle charge toujours l’intégralité de l’annuaire (environ 50 000 stations).
* C’est la raison pour laquelle la case « Afficher les favoris » ne reste pas cochée.

Une fois qu’on a compris cette logique, l’extension se révèle très pratique. Le développeur est par ailleurs à l’écoute des utilisateurs et prévoit des améliorations pour rendre le fonctionnement plus intuitif.    

À suivre donc !    

Amitiés. Isabelle.    

Merci à elle d'avoir partagé ces nouvelles informations avec nous tous! 💏    

Vous pouvez également consulter le premier article dédié à l'extension radioCenter sur:    
[radioCenter, extension pour NVDA permettant d'écouter des stations de radio en ligne et d'enregistrer le flux audio dans un fichier](https://blindhelp.github.io/radioCenter/)    
Publié le Mercredi 3 Juillet 2024 - Dernière mise à jour le Dimanche 6 Octobre 2024    
Avertissement: 💀    
Le blog de BlindHelp n'est pas responsable des dommages causés par une mauvaise utilisation de l'extension radioCenter  pour NVDA téléchargé ni des informations ce trouvant sur la documentation dédié et l'utilisation de l'extension radioCenter téléchargé est à vos risques et périls. ☠   
Eh bien, je pense que c'est tout ce que je voulais vous informer via ce billet sur la nouvelle petite mise à jour existante de ladite extension.    
Mille merci à notre ami <span lang="uk">Ruslan Dolovaniuk</span> pour partagé ces informations avec nous tous! :)    
Voila, je vous souhaite une bbonne utilisation de cette nouvelle version radioCenter 5.1.1! :)    
Bien amicalement,    
Rémy (BlindHelp). 🇫🇷    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouvel espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---