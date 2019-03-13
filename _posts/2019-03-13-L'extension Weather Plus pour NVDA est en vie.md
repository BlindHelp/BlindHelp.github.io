---
title: L'extension Weather Plus pour NVDA est en vie

layout: post
author: BlindHelp
---

<footer>Mercredi 13 Mars 2019</footer>


Coucou mes amis du blog de BlindHelp!               
Je vous apporte de bonnes nouvelles concernant l'extension Weather Plus pour NVDA...             
Weather Plus est en vie!             

Cette extension nommée [Weather Plus](#Weather Plus5.0.nvda-addon) peut être mis à jour de manière autonome et, par conséquent, n'est pas inclus dans Add-on Updater. Lui-même nous  avertira de cette mise à jour, bien que nous puissions également forcer la vérification à partir du sous-menu Paramètres Weather Plus dans le menu Préférences. Si vous n'avez même pas cette extension pour consulter la météo, ou si vous avez des problèmes de mise à jour, vous pouvez la télécharger à partir du lien ci-dessous.

Également vous trouver ci-dessous le changelog (journal des changements) pour cette dernière version en date, ainsi que une bref description de l'extension Weather Plus.

Voici les nouveaux changements fait par son auteur:               

# Version 5.0 #
* Weather Plus utilise maintenant l'API APIXU, à mon avis mieux que la précédente;  
Pour fonctionner nécessite une clé API, lisez le fichier Weather Plus First Settings.html pour obtenir des instructions.

`#`Changements dans la fenêtre des Paramètres Weather Plus:

* Supprimée l'ancienne case à cocher "État de la pression barométrique".  
* Remplacé par la nouvelle case à cocher "Ajouter la valeur de nébulosité";  
Cela vous donne le pourcentage de nébulosité.
* Ajout d'une nouvelle case à cocher "Ajouter la valeur de précipitation";  
Il vous donne la quantité de précipitation en millimètres.
* Supprimée l'ancienne case à cocher "Indiquer l'attente avec un bip pendant la recherche du dernier bulletin";  
Il est laissé actif par défaut.
* Ajouté à les informations astronomiques;  
Heure du lever et du coucher de la lune.
* Ajout d'un nouveau bouton "Renommer";  
Pour renommer les villes plus facilement.
* Amélioration de la fonction du bouton "Tester";  
Maintenant acceptent certaines commandes pour faciliter la recherche de villes;  
Ces nouvelles commandes sont décrites dans la fonction aide pouvant être  invoquée  avec F1.
* Ajout du bouton pour la gestion de votre clé API.

Ci-dessous je copie les informations tiret de la documentation du fichier Weather Plus First Settings.html pour obtenir la clé API APIXU permettant d’utiliser l'extension Weather Plus.

# Weather Plus nécessite une clé API APIXU, Pour ce faire, il vous suffit de créer un compte en cliquant sur le lien ci-dessous: #

[https://www.apixu.com/signup.aspx](https://www.apixu.com/signup.aspx)

# La page vous demande de saisir les données suivantes: #

* Votre nom complet;
* Votre adresse e-mail (celle-ci sera votre nom d'utilisateur);
* Retaper votre adresse e-mail;
* Votre mot de passe;
* Retaper votre mot de passe;

Sur la page Sign up Apixu, vous verrez un message en anglais, suivi des champs d'édition correspondants.

Voici ce que vous verrez:

---

Note: All the fields are required!

* `Full Name`    
`e.g.: Jane Doe`
* `Email (Your email is your username)`    
`e.g.: Jane@Doe.com`
* `Retype Email`    
`e.g.: Jane@Doe.com`
* Password
* Retype Password

Une fois tous les champs remplis:

* Cochez la case: Are you human?
* Cochez la case: I have read and agree to T&C's and Privacy Policy.
* Enfin, cliquez sur le bouton Sign up.

---

# Vous pouvez également vous inscrire via Facebook, Google+ ou Github: #

Les boutons correspondants se trouvent sur la page d'accueil Signup Apixu.

Sur la page  Sign up Apixu, vous verrez un message en anglais, suivi des boutons correspondants.

Voici ce que vous verrez:

---

Choose on of the following sign up methods  
Facebook  
Google+  
Github  

---

Remarque: une fois que vous avez accepté Apixu dans l’un des trois comptes, vous serez automatiquement redirigé vers votre page Dashboard.

# Une fois connecté: #

* Apixu peut vous envoyer une demande de confirmation de votre courrier électronique à l'adresse que vous avez indiquée lors de votre inscription, puis vérifier et confirmer le lien que vous avez reçu.
* À l'avenir, pour vous connecter après votre inscription, utilisez le lien suivant:

[https://www.apixu.com/login.aspx](https://www.apixu.com/login.aspx)

Sur la page Dashboard Apixu.com, vous verrez des informations en anglais telles que votre nom d'utilisateur, votre clé API Apixu, la page contiendra également plusieurs liens, une case à cocher, un bouton, etc.

Vous devez uniquement copier votre clé API sans les espaces qui se trouvent à la fin et ne rien changer.

Voici ce que vous verrez:

---

Dashboard    
Welcome Adrianobarb@yahoo.it    
API Key    
Key: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx    
`[`Get Started `]`

Current Plan: Free   `[`Change Plan`]`    
Status: LIVE    
Fields: Change Response Fields

Regenerate key   
Has your key been compromised? You can generate a new key.

Before you proceed?

* You will need to change your apps to use the new key.
* Your statistics will be reset.
* This action cannot be undone.

 `I would like to regenerate api key.`    
case à cocher non cochée    
Si coché, ce bouton devient disponible:    
`Regenerate Key`    

---

Remarque: Il est préférable d'éviter de régénérer votre clé API APIXU!

Au bas de la page, vous trouverez le titre en anglais appelé "Log", suivi de la date de création de votre compte.
 
 Voici ce que vous verrez:
 
--- 

Log

* 05-Mar-2019: Account created.

---

Pour votre information: Le forfait gratuit autorise jusqu'à 10 000 appels d'API par mois, mais si vous souhaitez modifier le forfait, vous devrez évidemment le payer, consulter:

[https://www.apixu.com/pricing.aspx](https://www.apixu.com/pricing.aspx)

* N'essayez pas de changer les champs, Weather Plus les prend tels quels.

Maintenant vous devez configurer l'extension Weather Plus avant sa première utilisation!  

Pour cela, vous devez lire le fichier:      
Weather Plus First Settings.html          
pour obtenir des informations pour sa mise en route.           

Merci beaucoup à Adriano pour tout le travail effectué    sur l'extension Weather Plus!           

# Pour un petit descriptif de l'extension  Weather Plus suivez le guide! #

# Weather Plus <a id="Weather Plus5.0.nvda-addon"></a>
    Type: Extensions
    Cette extension ajoute la température locale et les prévisions météo à 24 heures actuelles et les prévisions jusqu'à 9 jours supplémentaires à NVDA.
	    Appuyez sur NVDA + w pour la température actuelle et les conditions météo.
    Appuyez sur NVDA + maj + W pour les prévisions à 24 heures et les prévisions à 9 jours.
    Appuyez sur NVDA + maj + contrôle + w pour définir une ville temporaire.
    Appuyez sur NVDA + maj + contrôle + alt + w pour ouvrir la boîte de dialogue Paramètres Weather Plus.
    Appuyez sur NVDA + alt + w pour connaître la dernière mise à jour du bulletin météo.
    Appuyez sur Contrôle + maj + w pour basculer entre Fahrenheit, Celsius ou Kelvin.

# Pour configurer l'extension Weather Plus suivez le guide! #

Lire le fichier : Weather Plus First Settings.html.    

Attention !    
Lisez la documentation disponible dans le menu Préférences
Paramètres Weather Plus pour obtenir des instructions sur la façon
de configurer l'extension Weather Plus    
Lire le fichier : Weather Plus First Settings.html.    
Une fois ouvert l'élément: Documentation     
Le dossier fr s'ouvre.    
Rechercher la documentation souhaitez en utilisant les flèches bas ou haut.    
Ici vous trouverez les 3 fichiers suivants:    

* changes.html    
Lisez ce fichier pour voir les dernières modifications apportées à cette extension.    
* readme.html    
Lisez ce fichier pour d'autres instructions sur le fonctionnement de l'extension Weather Plus.    
* Weather Plus First Settings.html    
Lisez ce fichier pour configurer l'extension Weather Plus.    

# Pour télécharger l'extension Weather Plus suivez le guide! #

Nom de l'auteur : Adriano Barbieri    
Traduit et mis à jour par Adriano Barbieri 
[Adriano Barbieri](mailto:adrianobarb@yahoo.it)    
Localisé en : Allemand, Anglais, Arabe, Espagnol, Français, Galicien, Italien, Polonais, Portugais-Brésil, Portugais-Portugal, Roumain, Russe, Serbe, Slovaque, Tchèque, Ukrainien.   
Publié sous la GNU GPL (General Public License)    
Version: 5.0      
Traduit en français par Rémy Ruiz, Michel Such et Corentin Bacqué-cazenave    
Dernière mise à jour: 13 Mars 2019    
Si vous avez installé une version antérieure de Weather Plus, celui-ci peut se mettre à jour seul, cependant, il est possible de télécharger
manuellement à partir des liens suivants:    
[Télécharger l'extension Weather Plus5.0.nvda-addon par ici: [lien
    externe]](http://www.nvda.it/files/plugin/weather_plus5.0.nvda-addon)
    [ou à partir de la page Web en Italien de l'extension Weather Plus:](http://www.nvda.it/weather-plus)
[ou à partir de la page de Weather Plus qui se trouve sur le site comunautaire des extensions NVDA](https://addons.nvda-project.org/addons/weatherPlus.fr.html)

Assurez-vous que l'extension du fichier téléchargé est correcte, sinon
Renommez-le en .nvda-addon.
Merci.

Voilà donc, nous sommes heureux que l'extension Weather Plus pour NVDA soit  en vie! !                
Bien amicalement,              
Rémy (BlindHelp).

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouveau espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---