---
title: Faire en sorte que NVDA traduise le texte parlé dans la langue souhaitée via une extension
layout: post
author: BlindHelp
---

<footer>Dernière modification Lundi 18 Mars 2019</footer>


Coucou mes amis du blog de BlindHelp!               
Voici une nouvelle extension nommée Translate qui fait son apparition pour les amoureux des traductions.                  

Si vous voulez en savoir plus sur ce fabuleux add-on, vous pouvez lire la description ci-dessous faite par son auteur:                
Merci à Yannick PLASSIARD! 😃                

# Translate

* Auteur: Yannick PLASSIARD

# Traduction

Utilise le service Google Traduction pour traduire à la volée le texte parlé dans la langue de votre choix.

Une connexion internet est requise.

# Télécharger l'extension Translate

Voici une extension rapide que notre ami Yannick PLASSIARD a créé pour traduire automatiquement tout texte parlé dans la langue définie par NVDA.

Il peut traduire n'importe quel texte, du contenu de la page Web aux jeux, à condition que NVDA soit utilisé pour parler le texte.

Dernière mise à jour: 18 Mars 2019:              
Compatible avec NVDA 2018.3 et  versions ultérieures      
Version actuelle: 2019.03.3          


[Télécharger l'extension Traduction v2019.03.3 via   la page  de l'auteur sur GitHub][1]


[1]: https://github.com/yplassiard/nvda-translate/releases/download/v2019.03.3/translate-2019.03.3.nvda-addon


# Plus d'informations sur l'extension Translate

# nvda-translate

Faire en sorte que NVDA traduise le texte parlé dans la langue souhaitée.

## Installation

Cette extension s’installe comme toute autre extension: Appuyez sur Entrée dans le fichier "translate-x.y.nvda-addon" et répondez "Oui" à toutes les questions posées.

## Utilisation

Une fois installé, l'extension détectera la langue de votre installation NVDA ou obtiendra la langue active de Windows comme solution de secours. Cette langue sera utilisée pour traduire tout texte parlé, lorsque la fonctionnalité est activée.
**Note:** Il n’est actuellement pas possible de le définir manuellement dans une boîte de dialogue Préférences. Toutefois, cela peut être implémenté dans une version ultérieure.

Ensuite, pour activer ou désactiver la traduction, appuyez sur NVDA + Maj + Ctrl + T. Ce geste peut être modifié dans le menu Préférences NVDA -> Boîte de dialogue Gestes de commande.

## Comment ça marche

Lorsqu'il est activé, l'extension  intercepte tout texte parlé et se connecte au système Google Translate pour le traduire dans la langue souhaitée. Cela signifie que n'importe quel texte peut être traduit, depuis n'importe quelle application ou jeu utilisant NVDA pour verbaliser le texte, vers des sites Web.

## Confidentialité

Veuillez noter que lorsque la fonctionnalité est activée, tout texte parlé est envoyé au service Google Translate. Cela signifie que toute information verbalisée sera envoyée, quelle qu’elle soit (phrase simple, noms de fichier dans votre Explorateur Windows, contenu du courrier, contacts, numéros de téléphone ou même numéros de carte de crédit). Il est donc important d'activer cette fonctionnalité uniquement lorsque vous êtes certain du texte que votre NVDA verbalisera. Cette extension a été principalement développé pour être utilisé dans les jeux, donc aucun problème de confidentialité n’est présent. Vous êtes libre de l'utiliser avec ce que vous voulez, mais à vos risques et périls.

## À propos des performances

Vous remarquerez peut-être que lorsque la fonction est active, il y a un délai entre chaque texte parlé. Cela est dû à l'API de traduction: étant donné que l'add-on n'utilise pas le kit de développement logiciel (SDK) non libre de Google Translate, une connexion HTTP est établie chaque fois qu'un texte doit être traduit. Par conséquent, une connexion Internet de 8 Mbps est recommandée pour que cette fonctionnalité fonctionne correctement.
Bien sûr, plus vous disposez de bande passante, plus la traduction sera rapide.

## Contact et rapports de bugs

- Si vous rencontrez un problème lors de l'utilisation de cette extension, veuillez créer une incidence sur GitHub afin qu'il soit facilement traçable.
- Bien entendu, les Pull Requests également son les bienvenues si vous souhaitez étendre l'extension ou résoudre un problème.
- Pour me contacter, vous pouvez utiliser l'adresse: [contacter l'auteur](mailto:podcastcecitek@gmail.com)

Soit en m'écrivant en français ou en anglais.

[Vous pouvez trouver la dernière release en date de l'extension Traduction via   la page  de l'auteur sur GitHub][2]


[2]: https://github.com/yplassiard/nvda-translate/releases


[Consulter le repository (référentiel) de l'extension Traduction via   la page  de l'auteur sur GitHub][3]


[3]: https://github.com/yplassiard/nvda-translate/


Voilà donc,  tout est dit au sujet de l'extension Translate!                
Je vous souhaite une bonne découverte!         
Bien amicalement,              
Rémy (BlindHelp).

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouveau espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---