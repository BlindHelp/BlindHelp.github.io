---
title: Nouvelle version 5.0.0 de l'extension radioCenter pour NVDA, par Ruslan Dolovaniuk
permalink: "/radioCenter-5-0-0-update-by-Ruslan-Dolovaniuk/"
layout: post
author: BlindHelp
---

<footer>Publié le Lundi 11 Août 2025</footer>


Coucou mes amis du blog de BlindHelp!    
Comment allez-vous ?    
Si vous vous souvenez bien nous traitons sur ce blog [BlindHelp.github.io](https://blindhelp.github.io) il y a presque 10 mois un article sur:    
[radioCenter, extension pour NVDA permettant d'écouter des stations de radio en ligne et d'enregistrer le flux audio dans un fichier](https://blindhelp.github.io/radioCenter/)    
Publié le Mercredi 3 Juillet 2024 - Dernière mise à jour le Dimanche 6 Octobre 2024    
Et je vous informe que j'ai reçu un message en privé aujourd'hui de la part de l'auteur qui m'a dit ce qui suit sur cette nouvelle version 5.0.0 (voir le message traduit de l'anglais vers le français par mes soins ci-dessous):    

# Message de l'auteur traduit de l'anglais vers le français:
Voici la mise à jour de l'extension radioCenter enfin terminée.    
Il existe plusieurs nouvelles fonctionnalités et plusieurs améliorations.    
Vous pouvez maintenant sélectionner le périphérique de sortie audio pour la lecture de la radio.    
Il est très pratique d'activer sur un haut-parleur en arrière-plan et de continuer à travailler sur les écouteurs.    
Vous pouvez également attribuer une touche rapide pour un accès rapide à n'importe quelle station à partir de la liste.    
La combinaison doit inclure la touche NVDA et l'un des chiffres de 0 à 9.    
Et vous pouvez choisir tous les modificateurs pratiques pour eux: CTRL, Shift, Win, Alt et toute combinaison d'entre eux.    
Eh bien, et surtout, le fonctionnement avec les collections est déplacé vers un serveur séparé: <https://elrus.pp.ua>.    
Vous devez vous inscrire sur ce site et spécifier votre ID de connexion et votre mot de passe pour la connexion dans les paramètres, après quoi tous les services des stations seront disponibles dans les collections de l'extension.    
À l'avenir, il est prévu d'ajouter plus de fonctionnalités pour l'interaction entre l'extension et le service.    
Fichier sur ma chaîne télégramme et mon groupe    
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
<span lang="en">Here is the radioCenter addon update finally done.</span>    
<span lang="en">There are several new features and several improvements.</span>    
<span lang="en">Now you can select the audio output device for radio playback.</span>    
<span lang="en">It is very convenient to turn on the background on some speaker and continue working in headphones.</span>    
<span lang="en">You can also assign a hot key for quick access to any station from the list.</span>    
<span lang="en">The combination should include the NVDA key and one of the numbers from 0 to 9.</span>    
<span lang="en">And you can choose any convenient modifiers for them: ctrl, shift, win, alt, and any combinations of them.</span>    
<span lang="en">Well, and most importantly, work with collections is moved to a separate server: <https://elrus.pp.ua>.</span>    
<span lang="en">You need to register on this site and specify the login and password for connection in the settings, after which all service stations will be available in the addon collections.</span>    
<span lang="en">In the future, it is planned to add more functionality for interaction between the addon and the service.</span>    
<span lang="en">file on my telegram channel and group</span>    
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
L'auteur de l'extension m'a également informé que:    
Le fichier radio_collections.dat n'est plus utilisé et peut être supprimé.    
Puisqu'il y avait des problèmes avec ce fichier et qu'il perdait périodiquement son contenu lors de la mise à jour et de l'enregistrement des données, c'est pourquoi l'auteur a déplacé les collections vers le serveur.    
Et chaque fois que vous entrez dans les collections, vous devez appuyer sur le bouton Mise à jour  c'est normal, , car les collections ne sont plus stockées localement.    
Sur le serveur, toutes les stations sont stockées dans une base de données à part entière, constamment mise à jour avec de nouvelles stations.    
De plus, l'état des stations est constamment vérifié et mis à jour.    
Pour ces raisons, vous devez demander les données au serveur à chaque fois. Mais cela se produit plus vite qu'auparavant.    
Ces stations se trouvent maintenant uniquement dans l'onglet Service une fois cette mise à jour faite.    
Cela comprend également les fichiers M3U qui ont été répertoriés dans l'onglet File System c'est pourquoi vous devez appuyer sur le bouton Mise à jour  pour les voir à nouveau là dans le cas où vous l'avez configuré dans l'extension.    
N'oubliez pas de le faire chaque fois que vous souhaitez voir ces stations sur les deux onglets à chaque lancement de l'extension.
Ce que l'auteur nous dit aussi à propos de l'affichage de l'indicateur des favoris    
L'affichage de l'indicateur des favoris sert à l'objectif suivant.    
Lorsqu'il est désactivé, toutes les stations du répertoire du serveur sont affichées dans la liste. C'est environ 50 000 stations.    
Lorsque vous définissez l'affichage de l'indicateur des favoris, seules les stations que vous avez ajoutées à vos favoris sur le site sont affichées dans la liste.    
Cela vous permet de rechercher des stations que vous aimez sur le site, de les enregistrer dans vos favoris, puis de les ajouter à l'extension.    
Voilà pour la petite mise au point fait par l'auteur de l'extension  à propos de la nouvelle version qui vient de sortir inclus quelques notes glissées par mes soins.    
Pour ma part, je n'ai pas encore Fait la mise à jour de cette nouvelle version de l'extension radioCenter 5.0.0, je vous en informe simplement pour que vous sachiez que celle-ci est maintenant disponible sur la chaîne télégramme et le groupe de l'auteur.    
Mais ne vous inquiétez pas, je ne vais pas tarder à le faire pour l'essayer et vous donnez ainsi plus de conseils...    
Notez également que les liens cités ci-dessus pointent vers les pages en anglais fourni également par l'auteur.    
À savoir que  le dépôt sur GitHub pour l'extension radioCenter:    
<https://github.com/DollaR84/radioCenter>    
à l'heure actuelle il n'est plus répertorié sur GitHub.    
Si vous pensez  que l'ancienne version de l'extension radioCenter ne fonctionne pas correctement avec votre version NVDA actuelle et ne parvient pas à mettre à jour les services pour les stations de radio et que vous avez un compte Telegram vous pouvez mettre à jour vers la nouvelle version, puis vous inscrire sur la page comme indiqué ci-dessus par l'auteur, à la bonne heure, mais sinon si vous ne voulez pas le faire, vous pouvez toujours la désinstallée (Quel dommage :(), peut-être la désactivée si vous n'en avez tout simplement pas besoin pendant une période prolongée ou si vous allez la mettre à jour plus tard, si vous voulez vraiment désactiver/supprimer cette extension, vous pouvez le faire en passant par l'Add-on Store laquelle est accessible depuis le sous-menu Outils du menu NVDA.    
C'est à vous de voir cela, je ne vous donne qu'un simple conseil.    
Avertissement: 💀    
Le blog de BlindHelp n'est pas responsable des dommages causés par une mauvaise utilisation de l'extension radioCenter  pour NVDA téléchargé ni des informations ce trouvant sur la documentation dédié et l'utilisation de l'extension radioCenter téléchargé est à vos risques et périls. ☠    
Eh bien, je pense que c'est tout ce que je voulais vous informer via ce billet sur la nouvelle mise à jour existante de ladite extension.    
Mille merci à notre ami <span lang="uk">Ruslan Dolovaniuk</span> pour partagé ces informations avec nous tous! :)    
Voila, je vous souhaite une bbonne utilisation de cette nouvelle version radioCenter 5.0.0! :)    
Bien amicalement,    
Rémy (BlindHelp). 🇫🇷    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouvel espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---