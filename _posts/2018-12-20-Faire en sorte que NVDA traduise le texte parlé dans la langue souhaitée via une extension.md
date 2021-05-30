---
title: Faire en sorte que NVDA traduise le texte parlé dans la langue souhaitée via une extension
permalink: "/nvda-translate/"
layout: post
author: BlindHelp
---

<footer>Publié le Jeudi 20 Décembre 2018 - Dernière mise à jour le Vendredi 28 Mai 2021</footer>


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


Compatible avec NVDA 2018.3 et  versions ultérieures      
Version actuelle: 2020.05          


[Télécharger l'extension Traduction v2020.05 via   la page  de l'auteur sur GitHub][1]


[1]: https://github.com/yplassiard/nvda-translate/releases/download/v2020.05/translate-2020.05.nvda-addon

Veuillez noter que cette extension ne fonctionne plus depuis plusieurs semaines, avant de publier ce correctif.    

Actuellement, la version de cette extension est la 2020.5 mais l'auteur sur GitHub dans son code celle-ci apparaît comme la 2020.6.    

# Télécharger l'extension Translate version non officielle fait le Vendredi 28 Mai 2021  par @hxebolax

Voici une bonne nouvelle, mon ami hispanophone qui est l'auteur de cricri, zradio, etc... (Héctor J. Benítez Corredera) à l'aide d'un autre développeur très actif dans la communauté des extensions pour NVDA en anglais (Rui Fontes) vient de mettre l'extension de nvda translate en ajoutant l'indicateur de compatibilité avec la future version de NVDA2021.1 et Des erreurs ont également été corrigées dans le code interne car il y avait des ruptures lors de l'utilisation de cette extension dans la version bêta de NVDA2021.1.    
La traduction des messages source à l'espagnol est ajoutée par Héctor J. Benítez Corredera.    
Ajout également  de la traduction Portugaise (Portugal / Brésil) des messages sources par Ângelo Miguel Abrantes.    
La traduction des messages fait par l'auteur original Yannick Plassiard  de ladite extension reste inchangé.    

Donc, voici  la même extension  modifié pour cette version non officielle fait le Vendredi 28 Mai 2021 compatible avec NVDA 2021.1 vous pouvez le télécharger en suivant le lien depuis mon espace sur [BlindHelp.github.io][5]


[5]: https://blindhelp.github.io/translate-2021.01.3-NVDA_2021.1_mod_by_@hxebolax.nvda-addon


Il a envoyé aussi ces modifications à l'auteur afin quelles soit priss en compte...    

Très important!  
Compatiblité NVDA 2019.3 à 2021.1  
Cette extension a sa propre mise à jour et il est préférable d'enregistrer une copie de l'extension non officielle au cas où!  
À la fin Héctor a fait en sorte que la compatibilité soit rétroactif mais attention car lui dis que cette version est de test puis peut donc donner des erreurs.  
En espérant qu'il n'y a pas de bugs, mais si telle est le cas STP envoyez le log de NVDA en: Niveau de journalisation : débogage à:  


[hebolah@gmail.com](mailto:hebolah@gmail.com)


Vous pouvez l'écrire en espagnol ou anglais...  
Voilà,  
En espérant que je n'oublie pas d'annoncer quelque chose en relation avec cette nouvelle version modifiée par nos amis développeurs...  

Merci à @hxebolax pour partager cette extension modifiée avec nous! 😹    

# Télécharger l'extension Translate version non officielle fait le Mardi 8 Décembre 2020 par @hxebolax

Voici  la même extension  translate-dans sa version précédente non officielle 2020.06 fait le Mardi 8 Décembre 2020 modifié à partir de son  dernier code pour qui fonctionne avec le service Google Translate fait par un ami hispanophone, vous pouvez le télécharger en suivant le lien depuis mon espace sur [BlindHelp.github.io][4]

[4]: https://blindhelp.github.io/translate-2020.06_mod_by_@hxebolax.nvda-addon

Voici les explications en anglais donné par mon ami <span  lang="es">Héctor Javier Benítez Corredera</span> sur la liste des extensions en anglais  le Mardi 08/12/2020 à 13:01:    

<span  lang="en">[nvda-addons] I provide a solution to the Translate add-on</span>    
<span  lang="en">Hi, the Translate plugin has not worked well for a while.</span>    
<span  lang="en">Currently the version is 2020.5 but the author on Github in its code is 2020.6.</span>    
<span  lang="en">I was looking at the code and it left how to solve the problem that it does not translate. It is to change a single line in the complement.</span>    
<span  lang="en">A few months ago Google changed the way to deliver the result and how Translate does the translation by extracting the result directly from the web without using an API, since at that moment it stopped working.</span>    
<span  lang="en">Well you have to change the following line in / translate / globalPlugins / translate / mtranslate / core.py exactly line 82:</span>    

`expr = r'class="t0">(.*?)<'`    

<span  lang="en">For this other line:</span>    

`expr = r'class="result-container">(.*?)<'`    

<span  lang="en">That way the plugin will work properly.</span>    
<span  lang="en">Greetings.</span>    

Merci à @hxebolax pour partager cette extension modifiée avec nous! 😹    

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