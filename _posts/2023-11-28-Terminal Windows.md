---
title: 💡 Astuce Terminal Windows - Quelques manipulations à faire dans Windows 11 pour nous les miro
permalink: "/Terminal-Windows/"
layout: post
author: BlindHelp
---

<footer>Publié le Mardi 28 Novembre 2023</footer>


Coucou mes amis du blog de BlindHelp!

J'espère que vous allez tous bien, et que vous êtes en pleine forme.

Aujourd'hui, j'écris ce post suivant pour vous dire que j'ai acquis à la mi-septembre de cette année mon nouvel ordinateur avec Windows 11 Pro et que je voulais utiliser le fameux "Terminal Windows".

Cependant, j'ai réalisé que ledit "Terminal Windows" ne m'annonçait pas complètement l'information à l'aide de mon lecteur d'écran NVDA, ce qui signifiait qu'il fonctionnait de manière aléatoire.

Et j'ai dû modifier les paramètres dudit "Terminal Windows" pour qu'il me communique toujours les informations affichées à l'écran à l'aide de mon lecteur d'écran NVDA lors de l'exécution de l'invite de commandes.

L'invite de commandes permet de réaliser des commandes et d'effectuer toutes sortes d'opérations sur le système de votre ordinateur comme paramétrer ou réparer Windows. On peut lancer l'invite de commande comme utilisateur standard ou en tant qu'administrateur.

Lisez aussi sur votre nouvel espace via GitHub [BlindHelp.github.io](https://blindhelp.github.io/) deux posts, un  Sur l'invite de commandes, et l'autre pour utiliser un programme lié à celui-ci :

[Voici un récap des commande CMD pour Windows](https://blindhelp.github.io/Commande-CMD/)

[ContextPlus programme pour ouvrir une ligne de commande directement](https://blindhelp.github.io/ContextPlus/)

# Un terminal amélioré #

Pour rappel, le Terminal Windows vient avec de nombreuses améliorations par rapport au terminal actuel, comme un moteur de rendu de texte accéléré par GPU, un affichage multi-onglets, des volets et une prise en charge des caractères Unicode et UTF-8. Il possède également de nombreuses options de personnalisation, aussi bien pour les raccourcis que pour le thème. Il peut exécuter toute application dotée d'une interface en ligne de commande et donne la possibilité de créer des profils pour chacune d'entre elles.

# Invite de commandes et Windows PowerShell pour Windows 11 #

Dans Windows 11 22H2, l'application par défaut utilisée pour héberger les fenêtres de console a été remplacée par Terminal Windows. Après la mise à jour d'octobre 2022, l'invite de commandes, Windows PowerShell et d'autres applications console s'affichent dans une instance de Terminal Windows.

Vous pouvez rencontrer des problèmes de compatibilité avec les applications, en particulier celles qui tentent de fusionner des éléments graphiques avec des éléments en mode texte.

## Solutions pour la résolution des problèmes ##

Vous pouvez refuser l'expérience Terminal Windows moderne de plusieurs façons.

### Solution 1 : Paramètres système ###

1. Sélectionnez Démarrer les paramètres >> confidentialité & sécurité > Pour les développeurs.
2. Dans Terminal, sélectionnez Hôte de console Windows.

### Solution 2 : paramètres Terminal Windows ###

Ouvrez Terminal Windows, puis sélectionnez l'onglet Démarrage > Application de terminal par défaut >'hôte de console Windows.

### Solution 3 : paramètres de la console Windows ###

Si vous avez déjà une application en ligne de commande ouverte dans un hôte de console Windows et que vous souhaitez modifier le paramètre par défaut :

Cliquez avec le bouton droit sur la barre de titre, puis sélectionnez Propriétés >'hôte de console Windows.

## Pour les professionnels de l'informatique et les administrateurs informatiques ##

Si vous êtes administrateur informatique ou personne du support technique pour votre organisation, voici d'autres étapes de résolution des problèmes que vous pouvez essayer.

### stratégie de groupe et paramètres du Registre ###

Remarque: Cette modification peut être appliquée aux stations de travail utilisateur avec stratégie de groupe.

Après avoir installé Windows 11 22H2, les clés de Registre suivantes deviennent disponibles.    



<table>
<thead>
<tbody>
<tr>
<td>
<p>
<b>Clé de Registre</b>
                      </p>
</td>
<td>
<p>
HKCU\Console\%Startup 
</p>
</td>
</tr>
<tr>
<td>
<p>
<b>Valeurs de Registre</b>
</p>
</td>
<td>
<p>
DelegationConsole 
</p>
<p>
DelegationTerminal 
</p>
</td>
</tr>
<tr>
<td>
<p>
<b>Type de données</b>
</p>
</td>
<td>
<p>
REG_SZ contenant un GUID
</p>
</td>
</tr>
</tbody>
</table>



Les valeurs suivantes sont proposées pour la sélection de l’hôte de console par défaut.   

 

<table>
<thead>
<tr>
<th>
<p>
<b>Hôte de console</b>
</p>
</th>
<th>
<p>Valeurs</p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>Sélection automatique (Terminal Windows, si disponible)</p>
</td>
<td>
<p>
<b>DelegationConsole </b>
</p>
<p>
{00000000-0000-0000-0000-000000000000} 
</p>
<p>
<b>DelegationTerminal </b>
</p>
<p>
{00000000-0000-0000-0000-000000000000} 
</p>
</td>
</tr>
<tr>
<td>
<p>
Hôte de console Windows (hérité)
</p>
</td>
<td>
<p>
<b>DelegationConsole </b>
</p>
<p>
{B23D10C0-E52E-411E-9D5B-C09FDF709C7D} 
</p>
<p>
<b>DelegationTerminal </b>
</p>
<p>
{B23D10C0-E52E-411E-9D5B-C09FDF709C7D} 
</p>
</td>
</tr>
<tr>
<td>
<p>Terminal Windows</p>
</td>
<td>
<p>
<b>DelegationConsole </b>
</p>
<p>
{2EACA947-7F5F-4CFA-BA87-8F7FBEEFBE69} 
</p>
<p>
<b>DelegationTerminal </b>
</p>
<p>
{E12CFF52-A866-4C77-9A90-F570A7AA2C6B} 
</p>
</td>
</tr>
</tbody>
</table>



Source de cette information:    

[Invite de commandes et Windows PowerShell pour Windows 11 - Support Microsoft](https://support.microsoft.com/fr-fr/windows/invite-de-commandes-et-windows-powershell-pour-windows-11-6453ce98-da91-476f-8651-5c14d5777c20)

Pour en savoir plus sur le Terminal Windows, vous pouvez consulter la documentation en ligne (PDF), à partir du lien ci-dessous :    

[windows terminal - Microsoft Learn](https://learn.microsoft.com/pdf?url=https%3A%2F%2Flearn.microsoft.com%2Ffr-fr%2Fwindows%2Fterminal%2Ftoc.json)

Vous pouvez utiliser le bouton appelé "Télécharger" sur ladite page pour télécharger cette documentation en PDF  à l'aide de votre navigateur par défaut pour l'enregistrer sous votre disque dur pour une future consultation hors ligne.    

# 💡 Astuce Terminal Windows - Quelques manipulations à faire dans Windows 11 pour nous les miro par BlindHelp #

# Définition de l'invite de commande par défaut dans le terminal Windows #

Cliquez sur la touche Applications ou faire menu contextuel et recherchez l'élément appelé:    
`Afficher d'autres options`    
Appuyez sur la touche  Entrée pour l'ouvrir.    
`¤ Invite de commande`    
Dans le cas que vous avez le programme ContextPlus installé.    

Sinon vous pouvez consulter sa fiche et son lien de téléchargement à partir du lien ci-dessous sur  votre nouvel espace via GitHub

[ContextPlus programme pour ouvrir une ligne de commande directement](https://blindhelp.github.io/ContextPlus/)

Cette petite merveille est compatible  avec Windows 7 et 10 (y compris Windows 11)    

Une fois ouvert  via le `¤ Invite de commande`    
Recherchez l'option de paramètres. Appuyez dessus.    
Pour les personnes qui possèdent un lecteur d'écran vous devrez faire: Alt+Espace puis choisir Paramètres. Appuyez dessus, c'est-à-dire appuyez sur la touche Entrée pour l'ouvrir.    
Cliquez sur l'option de l'application et sélectionnez l'invite de commande par défaut à utiliser.    
Laisser Windows décider (option par défaut)    
Faire flèche bas et choisissez:    
`Hôte de la console Windows`    
Plus bas nous aurons:    
`Terminal Windows`    

En principe vous devrais choisir ceci:    
`Application Terminal par défaut Hôte de la console Windows`    

Remplacer aussi PowerShell par Terminal Windows (ou Invite de commande selon votre version de Windows)    
Une fois sélectionné, cliquez sur le bouton Enregistrer.    
Puis cliquez sur Fermer.    
C'est tout.    

Maintenant, lorsque nous lançons via le ¤ Invite de commande sous Windows 11 notre lecteur d'écran nous dit bien:    
`C:\windows\system32\cmd.exe fenêtre`    
ensuite le mot: `terminal`    
puis ensuite il nous dit:    
`(c) Microsoft Corporation. Tous droits réservés.`    

Cette modification fait que notre lecteur d'écran verbalise toutes les informations qui sont saisies dans le terminal en invite de commande, et nous retrouverons également l'interface de l'invite de commande précédente de Windows 10 en faisant la combinaison de touches Alt+Espace, puis trouvez les options avec les flèches directionnelles.
Voilà, donc...    
Profitez   de cette astuce pour rendre le Terminal Windows accessible pour ouvrir une ligne de commande avec notre lecteur d'écran préféré sous Windows 11! 😄    
@+    
BlindHelp    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouvel espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---