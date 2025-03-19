--- 
title: Application de rappel accessible pour Windows par Adriano Barbieri 🇮🇹

permalink: "/Accessible-ReminderApp-for-Windows/"
layout: post
author: BlindHelp
---

<footer> Publié le Vendredi 15 Novembre 2024 - Dernière mise à jour le Mercredi 19 Mars 2025</footer>


# ReminderApp (Application de Rappel) par Adriano Barbieri 🇮🇹 :

Oui oui, encore un programme d'application de rappel diront certains !    
C'est un peu spécial et totalement accessible avec NVDA.    
Au départ, je l'ai fait spécialement pour ma femme et moi, mais j'ai ensuite pensé que je le partagerais avec tous ceux qui pourraient en avoir besoin, également pour sa facilité d'utilisation.    
Alors, sur les conseils d'un cher ami international, je l'ai transmis aux traducteurs qui ont contribué au projet WeatherPlus, que je remercie et qui ont volontiers traduit ReminderApp, afin que le programme soit localisé en 11 langues pour l'instant.    
Avec une variété d'alarmes et de courtes mélodies dédiées aux  anniversaires et célébrations.    
Il comprend également un carnet d'adresses pratique.    
Il peut être masqué et rappelé selon les besoins grâce à des raccourcis clavier configurables.    
Et mieux encore, c'est gratuit.    
Mais je ne peux pas entrer plus dans les détails ici, lisez le manuel d'utilisation que vous pouvez ouvrir depuis le menu "Aide" après avoir défini votre langue si disponible.    
Le programme est portable et ne nécessite aucune installation.    
Merci de votre attention et bonne journée.    

## Lien du dépôt ReminderApp sur GitHub

<https://github.com/Adriano-Barbieri62/ReminderApp>

La mise à jour est automatique Si vous avez téléchargé l'application portable  pour Windows à partir du dépôt sur GitHub, cependant voici le lien pour la dernière version en date :

<https://raw.githubusercontent.com/Adriano-Barbieri62/ReminderApp/main/ReminderApp-1.9.zip>

# Antivirus Microsoft Defender, restaurer le fichier en quarantaine Par Adriano Barbieri 🇮🇹

Adapté en français par Rémy Ruiz (BlindHelp). 🇫🇷    

# Dans le cas du téléchargement de l'archive .ZIP

J'ai le message suivant qui apparaît lorsque je télécharge un fichier .exe d'une personne en qui j'ai confiance:    
`Nouvelle notification de Sécurité Windows, Menaces détectées, L'antivirus Microsoft Defender a détecté des menaces. Obtenir des détails... .`    

Vous devez dire à l'antivirus Microsoft Defender  de restaurer le fichier en quarantaine, je vais essayer de vous expliquer étape par étape :    
1. Appuyez sur Windows+b.    
2. Déplacez-vous vers l'icône "Sécurité Windows - Actions recommandées".    
3. utilisez le menu contextuel puis faites Entrée sur "Afficher le tableau de bord de sécurité".    
4. Entrée sur Protection contre les virus et menaces, Action recommandée.".    
5. Faites défiler vers le bas avec les flèches jusqu'à "Historique de protection".     
6. Faites défiler vers le bas avec les flèches jusqu'à ce que vous trouviez "Menace mise en quarantaine" ou "Menace bloquée", c'est-à-dire vous pouvez trouver par exemple     :    
Menace mise en quarantaine,  suivi de la date et de l'heure, Grave,    
ou :    
Menace bloquée, suivi de la date et de l'heure, Grave,    
7. un par un, faites  Entrée pour voir à quel fichier ces entrées font référence ;    
et déplacez-vous avec les flèches vers le bas d'une ligne, où vous pourrez lire de quel fichier il s'agit.    
Si vous trouvez par exemple: ReminderApp-1.2.zip, ou un autre fichier de ReminderApp dont vous savez qu'il ne constitue pas une menace, vous devez leur dire :    
Pour le signaler, vous devez faire Entrée sur le fichier concerné, puis :    
vous descendez toujours avec les flèches jusqu'à ce que vous trouviez un bouton "Actions".    
Appuyez dessus et dites-lui quoi faire, vous pouvez faire Entrée soit sur "Restaurer", "Supprimer" ou autre.    
C'est fait, souvenez-vous de ces étapes car je pense que vous aurez souvent ces problèmes avec l'antivirus Microsoft Defender.     
Bon courage.    
Adriano    

# Dans le cas de l'extraction de l'archive .ZIP après le téléchargement de celui-ci pendant la mise à jour automatique du programme

Je pense que l'antivirus Microsoft Defender l'a mis en quarantaine pour vous, le fichier a définitivement été téléchargé.

Faites-moi  confiance, faites-le de cette manière :

1. Appuyez sur Windows+b et appuyez sur le menu contextuel sur l'icône de "Sécurité Windows - Actions recommandées".    
2. Faites Entrée sur "Afficher le tableau de bord de sécurité".    
3. Faites Entrée sur "Protection contre les virus et menaces, Action recommandée.".    
4. Faites Entrée sur "Historique de protection".    
5. Avec TAB déplacez-vous jusqu'à ce que vous trouviez la menace d'aujourd'hui qui a été bloquée, appuyez sur Entrée pour la développer.    
`Menace bloquée, 01/12/2024 15:28 , Grave,`    
ou :    
`Menace mise en quarantaine, 01/12/2024 15:28 , Grave,`    
6. Appuyez à nouveau  sur Tab et vous verrez ReminderApp-1.2.zip qui serait l'élément concerné.    
vous descendez toujours avec les flèches jusqu'à ce que vous trouviez un bouton "Actions".    
7. Appuyez sur TAB sur le bouton "Restaurer" et appuyez dessus.    
À ce stade, vous trouverez ReminderApp-1.2.zip dans le chemin où vous l'avez téléchargé.    
Non seulement cela, je jetterais un œil dans `%temp%`, vous devriez y trouver le dossier `"update\ReminderApp"`, c'est-à-dire le dossier extrait du programme.    
Note : Si vous ne trouvez pas l'option "Restaurer"après avoir appuyé sur le bouton "Actions", Vous avez probablement les éléments suivants affichés:    
`Quarantaine 1 sur 3`    
`Supprimer 2 sur 3`    
`Autoriser sur l’appareil  3 sur 3`    
J'ai fait Entrée sur cet élément:    
`Autoriser sur l’appareil  3 sur 3`    
Ce choix c'est quand l'archive est bloqué lors de l'extraction du programme lors de la mise à jour automatique.    
Cependant, lorsque j'ai essayé de l'extraire après l'avoir téléchargé, il l'a mis en quarantaine pour moi ; Je lui ai dit de le restaurer et il l'a fait ; puis quand j'ai essayé de lancer l'exécutable, il m'a ennuyé du fait que l'auteur est inconnu, etc.    

# Avertissement

Le fichier ReminderApp-1.2.zip ou plus, une fois extrait, contiendra son exécutable appelé ReminderApp.exe, qui sera déclaré faux positif par votre antivirus lors de son exécution pour la première fois !    

Cela se produit avec l'antivirus Windows Defender par exemple.    

Comment autoriser l’antivirus Windows Defender à exécuter le programme quand même ?    

Pour permettre au programme de s'exécuter quand même avec Windows Defender, il faut cliquer sur "Informations complémentaires". Un bouton "Exécuter quand même" apparaît alors, il suffit de cliquer dessus pour lancer l'exécution du programme sur Windows.    

Cela doit être fait chaque fois que le nouveau fichier exécutable ReminderApp.exe est installé dans le dossier ReminderApp.    

# Quelques tests complémentaires pour savoir si je suis à jour avec le dernier fichier téléchargé

pour savoir si vous avez obtenu la dernière version en date du programme, allez dans le menu "Aide" et sélectionnez l'élément :    
`Rechercher des mises à jour...	Ctrl+Shift+U`    
Puis cliquez Entrée sur lui.    
Une boîte de dialogue apparaît avec le message suivant :    
`Rechercher des mises à jour dialogue Désolé, mais aucune mise à jour n'est disponible pour le moment.`    
`OK bouton`    
En cliquant sur le bouton OK, vous fermez cette boîte de dialogue.    
 
Pour vérifier que vous disposez de la dernière version en date, allez dans le menu "Aide" et sélectionnez l'élément :    
`Informations sur le programme...	F1 i`    
Puis cliquez Entrée sur lui.    
Une boîte de dialogue apparaît avec le message suivant :    
`Informations sur le programme: Rappel dialogue Programme de gestion de différents types de rappels,complet avec un carnet de contacts.Version: 1.2Copyright (c) 2024 par Adriano Barbieridernière_modification: Dimanche Décembre 1, 2024Dédié à Miriam, le grand amour de ma vie.`    
Appuyez sur le bouton Fermer ou appuyez sur la touche Échap pour fermer cette boîte de dialogue.    

# Description et affichage the la documentation et premier démarrage  de ReminderApp

Avec ReminderApp (Rappel), plus d'oubli !    
Rassurez-vous, ce programme est là pour vous rappeler tout ce qui est important grâce aux rappels telles que (ex : prendre ses médicaments, ne pas oublier un rendez-vous ou la visite de quelqu'un, avec la baby-sitter, l'aide ménagère, l'infirmière, etc.).    
Même des rappels d'un anniversaire !    
Nous avons tous vécu ce moment embarrassant au moins une fois dans notre vie : oublier l'anniversaire d'un proche ! Il faut dire qu'il n'est pas toujours évident de se souvenir des dates d'anniversaire de toutes les personnes que l'on a l'habitude de côtoyer (surtout lorsqu'on est issu d'une famille nombreuse ou qu'on fait partie d'une grande bande de copains).    
C'est vous qui entrez les dates d'anniversaire de toute la famille et le programme se charge de vous les rappeler tous les ans avec une alarme, y compris des rappels d'une  célébration !    
Ce programme contient aussi un carnet d'adresses !    

Pour en savoir plus et configurer ce programme Veuillez lire cette documentation dans son intégralité. Merci.    

Vous pouvez trouver celle-ci dans le menu "Aide" en cliquant sur l'élément :    
`Manuel d'utilisation...	Shift+F1`    
Cette documentation s'affichera par défaut dans votre navigateur en langue française y compris l'interface dans la même langue, s'il a été configuré comme expliqué ci-dessous.    

À savoir qu'au premier démarrage du programme, la langue est l'anglais, vous devez la configurer en français pour avoir l'interface et la documentation dans cette langue.    

Pour cela vous devez vous rendre dans l'élément : `Settings sous-Menu Alt+ s`    
Puis en cliquant sur l'élément: `Set language	Ctrl+Shift+L`    
Une boîte de dialogue apparaît en anglais comme titre :    
`Select a language: dialogue`    
`Available languages ​​(requires reboot to take effect): liste`    
Appuyez sur la lettre f pour obtenir la langue :    
`French, fr`    
Appuyez sur Entrée    
Une boîte de dialogue apparaît avec le message suivant en anglais :    
`Language setting dialogue It is necessary to restart the program.`    
`OK bouton`    
En cliquant sur le bouton OK, vous redémarrerez le programme avec l'interface et la documentation dans notre belle langue, le français. 🇫🇷    

---

Merci à tous pour votre soutien.    
Cordialement,    
Adriano    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouveau espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---