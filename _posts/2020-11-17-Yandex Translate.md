---
title: Yandex Translate extension pour NVDA
permalink: "/Yandex-Translate/"
layout: post
author: BlindHelp
---

<footer>Publié le Mardi 17 Novembre 2020 - Dernière mise à jour le Mercredi Ier Mars 2023</footer>


Coucou mes amis du blog de BlindHelp!    
Voici une nouvelle mouture de l'extension Yandex Translate  pour NVDA fait  par un gars Russe.    

# Informations sur l'extension Yandex Translate #

* Auteurs : Alekssamos
* Versions précédentes: 2020.09.04/2020.11.17/2020.12.18/2021.5.26, Etc.    
Les versions précédentes ne fonctionne plus, besoin de mettre à jour.    
* Version actuelle: 2023.02.19

* Langues: Anglais, Croate, Serbe, Russe, Turc et Ukrainien
* Compatibilité NVDA: 2019.3 à 2023.1
* Télécharger [version actuelle sur le dépôt de l'auteur sur GitHub [lien externe]](https://nvda.es/files/get.php?file=yandextranslate)
* [Voir code source sur le dépôt de l'auteur sur GitHub](https://github.com/alekssamos/YandexTranslate)

Cette extension traduit le texte sélectionné ou le texte du presse-papiers en utilisant le service Yandex Translate. Elle contient plusieurs gestes de commande prédéfinis qui peuvent être modifiés en fonction des préférences de l'utilisateur en accédant au Menu  NVDA, Préférences, Gestes de commandes. L'extension contient une boîte de dialogue de configuration, situé dans le menu Outils de NVDA, ce qui vous permet de configurer la langue sible, les langues de destination primaires et secondaires, quoi faire si les langues sible et de destination son les mêmes et si se copie le résultat  de la traduction dans le presse papier. Elle contient également un support complet pour l'utilisation d'un serveurs proxy.    

# Raccourcis clavier #

* NVDA+shift+t: traduit le texte sélectionné.
* NVDA+shift+y: traduit le texte précédemment copié dans le presse-papiers.
* NVDA+shift+u: intervertit les langues de destination primaires et secondaires.
* NVDA+shift+i: active ou désactive la traduction automatique.  Se traduit n'importe quel texte qui va dirigé au synthétiseur de la parole avant de que NVDA le verbalise. Il est important de tenir compte des risques de confidentialité qui peuvent venir découlant de l'utilisation de cette fonction, et l'utiliser avec prudence.

# Mode d'emploi rapide par BlindHelp #

Chercher le nom de l'extension dans Outils sous-menu, Yandex Translate Settings...    
Une fois fait Entrée s'ouvre la boîte de dialogue en anglais dans l'ordre suivant:    
Ce qui a fonctionné chez moi comme configuration dans la boîte de dialogue "Yandex Translate Settings":    
Laisser le premier élément sur automatique.    
`Source language: &Detect language automatically, auto`    
`Langue Source: & détecter la langue automatiquement, auto`    
(par défaut).    
La liste déroulante vous permet de sélectionner la langue automatiquement ou non.    
Tabulation:    
`Primary target language: English, en`    
`Langue cible primaire: English, en`    
(par défaut).    
La liste déroulante vous permet de sélectionner la langue cible primaire.    
Tabulation:    
`Secondary target language: Russian, ru`    
`Langue cible secondaire: Russian, ru`    
(par défaut).    
La liste déroulante vous permet de sélectionner la langue cible secondaire.    
Changer par:    
`Secondary target language: French, fr`    
`Langue cible secondaire: French, fr`    
Tabulation:    
Ensuite mettre français sur l'élément suivant et ça a fonctionné ici.    
`Language translation, if the language of the text coincides with the target: Russian, ru`    
`Traduction linguistique, si la langue du texte coïncide avec la cible: Russian, ru`    
(par défaut).    
La liste déroulante vous permet de sélectionner la langue du texte qui coïncide avec la cible.    
Changer par:    
`Language translation, if the language of the text coincides with the target: French, fr`    
`Traduction linguistique, si la langue du texte coïncide avec la cible: French, fr`    
Tabulation:    
`Copy translation to clipboard`    
`Copier la traduction dans le presse-papiers`    
(cases à cocher coché par défaut).    
Tabulation:    
`Play tones when translation waiting`    
`Jouer des tonalités lors de la traduction en attente`    
(cases à cocher non coché par défaut).    
Tabulation:    
`Generate new API key`    
`Générer une nouvelle clé API`    
(c'est un bouton) Ne pas toucher!    
Tabulation:    
`Use proxy server`    
`Utiliser le serveur proxy`    
(cases à cocher non coché par défaut).    
Tabulation:    
`Reset settings to the default valu`    
`Réinitialiser les paramètres à la valeur par défaut`    
(c'est un bouton) Ne pas toucher! Sauf si vous souhaitez revenir au valeurs par défaut de l'extension "Yandex Translate".    
`OK`    
Appuyez sur le bouton OK pour accepter les modifications.    
`Annuler`    
Appuyez sur le bouton Annuler pour  annuler  les présentes modifications.    
EnsuiteSi vous avez cliquez sur le bouton OK, dans le menu NVDA cliquez sur l'élément:    
`Sauvegarder la configuration s`    
ou utilisez la commande NVDA+contrôle+c    
pour enregistrer les modifications faites dans l'extension Yandex Translate .    
Dans le cas contraire c'est perdu!    
Voilà,    
Bonne traduction avec  l'extension Yandex Translate pour NVDA! :)    
@+    
BlindHelp!    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouvel espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---