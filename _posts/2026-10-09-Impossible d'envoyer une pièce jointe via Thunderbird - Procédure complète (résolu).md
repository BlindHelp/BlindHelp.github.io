---
title: Impossible d'envoyer une pièce jointe via Thunderbird - Procédure complète (résolu)
permalink: "/unable-to-send-an-attachment-via-thunderbird-complete-procedure-resolved/"
layout: post
author: BlindHelp

---


<footer>Publié le Vendredi 9 Octobre 2026</footer>


Coucou mes amis du blog de BlindHelp!    
Il y a quelques jours, je ne pouvais plus envoyer de pièces jointes avec Thunderbird sous Windows 11 ☹    

`Joindre sous-menu, Fichier(s)…    Ctrl+Maj+A`    

Je tombé toujours sur le corps du message.    

Pour moi le raccourci `Ctrl+Maj+A` est devenu inopérant.    

Ce problème a persisté pendant plusieurs jours, mais une solution a été trouvée et je la partage ici.    

Avertissement: 💀    
Le blog de BlindHelp n'est pas responsable des dommages causés par une mauvaise utilisation de la solution de contournement au clavier trouvée sur ce post dédié ni des informations ce trouvant sur la réponse de l'IA 🤖 Gemini que vous utilisez est à vos risques et périls. ☠

## Impossible d'envoyer une pièce jointe via Thunderbird - Procédure complète (résolu)

Si vous avez la version    
de l'Application : `thunderbird.exe, Thunderbird 157.0.1`    

Ce dysfonctionnement survient généralement lorsque Thunderbird cherche un dossier qui a été déplacé, supprimé ou déconnecté (comme une clé USB, un disque externe ou un dossier temporaire) lors de votre dernière pièce jointe. Le sélecteur de fichiers tente de s'ouvrir sur cet emplacement inexistant et bloque silencieusement.    

Mais ce dysfonctionnement il semble que cela soit dû à un bug dans la version de Thunderbird 157.    

Remarque :     
L'Extension active : `Thunderbird+ G5.1 (TB >= 140), version : 2609.07.0` ou versions précédentes   pour notre lecteur d'écran NVDA n'est pas mise en cause.    

C'est pourquoi  Notre ami Pierre-Louis a demandé à l'IA 🤖 Gemini s'il existait un bug dans la version Thunderbird 157 empêchant l'envoi de pièces jointes.    

Voici sa réponse de l'IA 🤖 Gemini et quelques explications que j'ai fournies en plus avec une solution qui conviendra peut-être :    

Ce dysfonctionnement est causé par un bug connu de Thunderbird 157 (référencé sous les tickets Bugzilla 2077590 et 2077526).    

Voici les liens directs menant aux rapports de bug de la plateforme Bugzilla de Mozilla :    

* Ticket [Bugzilla 2077590](https://bugzilla.mozilla.org/show_bug.cgi?id=2077590) : Concerne le dysfonctionnement silencieux du bouton d'ajout de pièce jointe dans Thunderbird lorsque le dernier répertoire mémorisé n'existe plus.    
* Ticket [Bugzilla 2077526](https://bugzilla.mozilla.org/show_bug.cgi?id=2077526) : Rapport initial décrivant l'inactivité du menu "Joindre", classé comme doublon du premier ticket.    

Bugzilla@Mozilla (Page en anglais)    

<https://bugzilla.mozilla.org/>

## Origine du problème

Le bug survient lorsque Thunderbird cherche à réouvrir le dernier dossier utilisé pour joindre un fichier. Si ce dossier (sur un disque externe, un lecteur réseau ou une clé USB) n'est plus accessible ou a été supprimé, la boîte de dialogue d'ouverture de fichier échoue silencieusement et ne s'affiche pas à l'écran.    

## Solution de contournement au clavier

1. Ouvrez Thunderbird    
2. Appuyez sur Alt pour afficher la barre de menus, puis naviguez dans Outils > Paramètres (ou Édition > Paramètres selon le système).    
3. Dans l'onglet Général, descendez jusqu'aubouton appelé :    
`Éditeur de configuration… bouton  Alt+Maj+ d`    
puis faire Entrée sur ce bouton.    
4. `Préférences avancées - Mozilla Thunderbird`    
N’utilisez ni le champ de saisie suivant, ni le bouton qui le suit :    
`Rechercher édition obligatoire entrée invalide autocomplétion vide`    
`Rechercher bouton`    
Le champ de saisie mentionné ci-dessus et son bouton servent uniquement à rechercher vos e-mails à l'aide d'un terme spécifique.    
Utilisez la flèche bas pour rechercher quelque chose comme :    
`Préférences avancées document`    
Ensuite, trouvez le champ d'édition appelé :    
`Rechercher un nom de préférence édition autocomplétion vide`    
Dans le champ Appelé  Rechercher un nom de préférence , tapez exactement :    
`mail.compose.attach.dir`    
5. Atteignez la ligne de la préférence avec Tabulation ou les flèches directionnelles, puis appuyez sur Entrée (ou utilisez l'un des boutons ci-dessous) :    
`cliquable Afficher uniquement les préférences modifiées case à cocher non coché`    
`cliquable Modifier bouton`    
Cliquer sur ce bouton vous permettra de remplacer la valeur par un dossier local valide (par exemple C:\ sous Windows).    
`Supprimer bouton`     
Cliquer sur ce bouton vous permettra de supprimer la valeur qui n'est actuellement pas valide.    
Exemple:    
`C:\Users\VotreNomUtilisateur\Documents\suivi du nom du dossier que vous avez supprimé ou déplacé\`    
6. Fermez l'onglet des paramètres et redémarrez Thunderbird pour appliquer le changement.    
Une fois Thunderbird rouvert :    
`Chargement en cours… - Mozilla Thunderbird occupé`    
Ouvrez une fenêtre de rédaction  (raccourci Ctrl+N) et activez le bouton « Joindre » (ou le raccourci Ctrl + Shift + A). Le dialogue système d'exploration de fichiers doit de nouveau s'ouvrir et prendre le focus.    

Ensuite, pour joindre un fichier au message en cours de rédaction de manière classique, rendez-vous à :    
`Fichier sous-Menu Alt+ F 1 sur 8`    
`Nouveau sous-Menu N 1 sur 2`    
`Joindre sous-Menu J 2 sur 2`    
`Fichier(s)…	Ctrl+Maj+A F 1 sur 2 niveau 1`    
Les champs suivants apparaîtront alors et vous devrez les remplir :    
`Rédaction : (pas de sujet) - Thunderbird`    
`Pour édition vide`    
`Joindre les fichiers dialogue Nom du fichier :`    
`Nom du fichier : liste déroulante réduit`    
`édition Alt+ n ligne 1 vide`    
`Types de fichiers : liste déroulante Tous les fichiers (*.*) réduit Alt+ t`    
`Ouvrir bouton partagé sous-Menu Alt+ v`    
`Annuler bouton`    

Le chemin d'insertion d'une pièce jointe s'affiche désormais correctement, comme auparavant, tout comme l'utilisation du raccourci `Ctrl+Maj+A`    

Tout fonctionne parfaitement maintenant, grâce à Pierre-Louis et au bot Gemini ! 😄    
À la prochaine sur un autre post!    
Bien amicalement,    
Rémy (BlindHelp). 🇫🇷 👨‍🦯    

> Il est plus facile de manger les frites que de se baisser pour ramasser les patates

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouvel espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---