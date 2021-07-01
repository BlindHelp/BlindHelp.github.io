---
title: Faire en sorte que NVDA traduise le texte parlé dans la langue souhaitée via une extension
permalink: "/nvda-translate/"
layout: post
author: BlindHelp
---

<footer>Publié le Jeudi 20 Décembre 2018 - Dernière mise à jour le Samedi 19 Juin 2021</footer>


Coucou mes amis du blog de BlindHelp!    
Voici une nouvelle extension nommée Translate fait à la base par Yannick PLASSIARD, modifié ensuite par Héctor J. Benítez Corredera @hxebolax qui fait son apparition pour les amoureux des traductions.    

Aujourd'hui, je vous apporte la dernière modification de l'extension  Translate comme version 2021.06.13 (non officiel) avec de nouvelles fonction y compris  l'ajout de la traduction Espagnole et Portugaise, puis la mise à jour de la traduction Française. Et sans mises à jour silencieuse de l'extension Translate fait par @hxebolax. 😃    

Je recommande vivement de lire la documentation de l'extension depuis que cette extension apporte à ses options normales et à ses combinaisons de touches normales, de nouveaux services pour obtenir des traductions.

Il est recommandé lors de l'installation de cette nouvelle extension Supprimer le cache de ladite extension en appuyant sur NVDA + Maj + Ctrl + F deux fois jusqu'à ce qu'il vous indique que toutes les traductions ont été supprimées.    

En effet, cette modification enregistre les chaînes traduites normalisées et si nous ne faisons pas ce qui précède peut donner une erreur.    

Par conséquent, suivez ce qui a été dit puis n'oubliez pas de lire la documentation ci-dessous ou pour avoir les mêmes informations sur son utilisation, consultez la documentation depuis le menu Outils/Gérer les extensions...    
Chercher le nom de l'extension "Traduction".  
Puis appuyez sur le bouton "Aide de cette extension"    

---

# Changer le raccourci NVDA pour l'extension Translate by @BlindHelp #

Je ne trouve pas le nom de l'extension comme: Translate?    
C'est normal, l'auteur  de l'extension a traduit cela en français par:    
`Traduction`    
faire flèche de droite.    
`Active la traduction automatique.`    
encore une flèche de droite.    
`NVDA+contrôle+majuscule+t (clavier, toutes les dispositions)`    
il y a bien:    
`Ajouter`    
puis     
`Supprimer`    
Appuyez sur ajouter pour attribuer une nouvelle valeur (racourcis)    
Fait attention ici.    
puis OK    

---

Si vous voulez en savoir plus sur ce fabuleux add-on, vous pouvez lire la première description ci-dessous  faite par son auteur original puis lire ensuite la deuxième partie sur les modifications faite par @hxebolax. Merci à lui! 😃    

---

# nvda-translate (Documentation originale)
Faire en sorte que NVDA traduise le texte parlé dans la langue souhaitée.
## Télécharger

* Stable (NVDA 2019.3+): [translate-2021.01.3](http://www.mtyp.fr/nvda/translate/translate-2021.01.3.nvda-addon).

## Installation

Cette extension s’installe comme toute autre extension: Appuyez sur Entrée dans le fichier "translate-x.y.nvda-addon" et répondez "Oui" à toutes les questions posées.

## Utilisation
Une fois installé, l'extension détectera la langue de votre installation NVDA ou obtiendra la langue active de Windows comme solution de secours. Cette langue sera utilisée pour traduire tout texte parlé, lorsque la fonctionnalité est activée.
**Note:** Il n’est actuellement pas possible de le définir manuellement dans une boîte de dialogue Préférences. Toutefois, cela peut être implémenté dans une version ultérieure.

Ensuite, pour activer ou désactiver la traduction, appuyez sur NVDA + Maj + Ctrl + T. Ce geste peut être modifié dans le menu Préférences NVDA -> Boîte de dialogue Gestes de commande.

### Gestes de commande
Les gestes de commande suivants sont définis (et peuvent être modifiés dans la Boîte de dialogue Gestes de commande):

* NVDA+Maj+Control+T: Active / désactive la traduction.
* NVDA+Maj+F (Deux fois rapidement): Supprim le cache de l'application actuelle.
* NVDA+Maj+Control+F (Deux fois rapidement): Supprime toutes les caches de toutes les traductions de toutes les applications.
* NVDA+Maj+Control+C: Copie le dernier texte traduit dans le presse-papiers.

## À propos du cache
Pour augmenter les performances (voir ci-dessous), chaque texte traduit est stocké dans un fichier cache. Un fichier cache est créé pour chaque application dans laquelle la traduction a été activée et se trouve dans le répertoire "translation-cache" dans le répertoire de configuration utilisateur de votre NVDA.

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


## Contributeurs
Merci à tous ceux qui ont fait cette extension une réalité, y compris tous ceux qui ont passé du temps à tester et à signaler des erreurs.

Entre autres, j'aimerais donner un merci spécial à Hxebolax, qui a trouvé et corrigé l'erreur qui empêchait l'extension de fonctionner pendant des mois en 2020.

---

# nvda-translate Modification faite par @hxebolax (Documentation pour cette modification)

Modification désintéressée de l'extension TRANSLATE.

## Télécharger

* Modification faite par @hxebolax (NVDA 2019.3+): [translate-2021.06.13](https://www.dropbox.com/s/bv57up29ompqg9a/translate-2021.06.13.nvda-addon?dl=1).

## Informations

Dans cette version, les gestes de commande d'origine sont maintenus.

Un nouveau geste de commande décrit ci-dessous est ajouté et une boîte de dialogue de configuration est ajoutée dans Préférences  / Paramètres / Traduction.

De plus, les langues en espagnol, français et portugais sont ajoutées (avec leurs traductions mises à jour).

Cette version augmente en poids à 850 Ko puisque une librairie a été introduite que, à son tour, nécessite d'autres et ce qui se prétends est d'avoir une extension dans laquelle nous ne restons jamais sans pouvoir traduire.

Dans cette version,  il a été supprimé toutes les traces de la mise à jour silencieuse apporté par la version originale évitant ainsi chaque fois que nous redémarrons NVDA, que l'extension se connecte au serveur du créateur de l'extension. Il est également évité qu'elle soit mis à jour sans notre permission, évitant ce qui s'est passé avec la dernière version de l'auteur, en chargeant une compatibilité avec des versions inférieures à NVDA 2021.1, laissant beaucoup de monde en rade.

### Écran de paramètres

Nous pouvons accéder à l'écran de paramètres de NVDA en allant à Préférences  / Paramètres et chercher la catégorie Traduction.

Sur cet écran, nous avons les options suivantes:

* Activer ou désactiver le cache: Ceci est une case à cocher qui est activée par défaut et nous permettra d'avoir un cache pour augmenter la vitesse des traductions. Si la case est activée, le cache s'enregistrera.

* Choisissez un serveur pour les traductions: Ceci est une liste déroulante qui nous permettra de choisir différents services d'où obtenir des traductions.

Les services sont les suivants:

* DeepL (API): Ce service nécessite une clé API qui nous permettra de disposer de 500 000 caractères gratuitement. Cette extension ne fonctionne que avec l'API gratuite ne supporte pas la Pro.

Au fait, le service DeepL  pour obtenir la clé n'est pas en Amérique du Sud donc, ce service n'est pas disponible.

Nous pouvons obtenir une clé API gratuite à l'adresse suivante:

<https://www.deepl.com/pro#developer>

Une fois la clé obtenue et dans la liste déroulante étant sélectionnée DeepL (API) si nous faisons Tabulation sera activé un bouton appelé  Enregistrer la clé pour l'API si nous appuyons sur lui , une boîte de dialogue sera ouverte où nous pouvons entrer la clé API et à partir de là commencer à utiliser ce service.

Si nous n'avons pas  une clé  introduite et nous avons ce service sélectionné lorsque nous essayons de traduire directement cela ne fera rien.

* Google Translate (WEB 1) et Google Translate (WEB 2): Ces deux options nous permettront de traduire directement à partir de  la page Google Translate.

Ces deux options n'ont aucune limite de traduction. La première est la original de l'extension   TRANSLATE et la deuxième les traductions sont obtenues différemment de l'original, une librairie est utilisée pour  un râpage Web qui nous donnera une sécurité d'utilisation en ayant 2 façons différentes pour faire cela.

Avec cela nous essayons que si une façon se  casse parce que Google change quelque chose comment cela s'est passé les 6 derniers mois de l'année 2020 nous aurons une autre façon d'essayer d'obtenir les traductions.

* LibreTranslate (WEB): Ce service est également totalement gratuit et est via le Web donc, il n'a aucune limite.

Ce service apprend constamment afin que les traductions s'améliorent, c'est un service qui apprend que les créateurs s'entraînent à travers l'apprentissage neuronal. C'est actuellement bon mais cela n'atteint pas la qualité de Google, mais elle peut être utilisée sans problème.

Il est basé sur la technologie de Argos Translate.

* Microsoft Translate (API): Ce service est de Microsoft et utilise la dernière API qui est la traduction à travers de IA. Nous avons besoin d'une clé API gratuite qui nous donnera 2.000.000 de caractères par mois.

Cette clé nous pouvons l'obtenir à partir de la suivante Web:

<https://ms.portal.azure.com/#create/Microsoft.CognitiveServicesTextTranslation>

Eh bien, je recommande de rechercher un manuel de Comment créer la clé API car ce service est un peu compliqué. Je vous laisse un mais ce qui est dit qu'il y en a beaucoup dans Google:

<https://docs.microsoft.com/fr-fr/azure/cognitive-services/translator/translator-how-to-signup>

Eh bien, une fois que la clé API est obtenue et ayant sélectionné dans la liste déroulante Microsoft Translate (API) sera activé un bouton appelé  Enregistrer la clé pour l'API. Si nous appuyons sur ce bouton, un dialogue ouvrira l'emplacement où vous entrez la clé et à partir de là commencer à utiliser ce service.

Si nous n'avons pas de clé introduite cela ne traduira rien si nous choisissons ce service.

* Yandex (API): Ce service utilise la librairie de l'extension Yandex translator for NVDA de l'auteur alekssamos.

Il tire parti de la puissance de ladite librairie pour offrir ce service sans les ajouts de l'extension et adapté à la traduction simultanée de TRANSLATE. Eh bien, ce service a besoin d'une clé API, mais contrairement aux précédentes ce service si nous le choisissons s'activera un bouton appelé  Générer une nouvelle clé API, si nous appuyions sur ce bouton se nous générera une clé API et nous pouvons utiliser déjà ce service.

Si ce service cesse de fonctionner, il est recommandé de générer une clé API.

*** AVERTISSEMENT, il est conseillé de ne pas abuser de ce bouton de génération d'API car nous pouvons être bloqués par le service et nous devrons attendre quelques heures pour générer une clé ***

### Gestes de commande

En plus des gestes de commande d'origine de l'extension, un nouveau geste de commande a été ajouté. Ce geste de commande peut être modifié dans la boîte de dialogue Gestes de commande.

* NVDA+Alt+E: Obtenir l'état d'utilisation des API, Si nous appuyons sur cette combinaison, on nous dit l'état des API.

Il n'y a actuellement que l'état de DeepL, qui nous informera des caractères utilisés et de la limite de notre API.

Cela ne  fonctionnera que si nous avons une clé API introduite dans le service de DeepL sinon, nous serons informés d'un message qu'il n'a pas été possible d'obtenir les informations.

## Confidentialité

Je répète ce que l'auteur de l'extension commente à l'origine, toutes les informations à la fin finissent à être envoyer aux serveurs qui traitent ce que nous demandons pour cela nous devons donc prendre en compte que nous traduisons au cas où nous ne voulions pas envoyer de telles informations.

Dans les différentes conditions de chaque service, il est spécifié si les informations sont enregistrées ou non ceci reste déjà  au critère  de l'utilisateur de choisir le service qui lui convient le plus et que l'utilisateur est seul responsable des informations envoyées.

Cette modification de l'extension crée deux fichiers contenant les clés API, ces fichiers sont créés dans C:\Users\[nom de l'utilisateur de notre Windows]\ et les noms des fichiers sont:

* .YandexFreeTranslate.key et .ztrans.key, La première contient la clé de Yandex qui s'auto-génère et la seconde contient les informations des clés API de DeepL et Microsoft. Je conseille de ne pas modifier ces fichiers car si cela est fait un quelconque caractère peut être effacé et ceux-ci laisseront de fonctionner.

Ces fichiers peuvent être cachés dépend de la manière dont nous avons notre Explorateur de fichiers configuré.

## Contact et rapports de bugs

Si vous trouvez une erreur de cette modification, veuillez ne pas contacter l'auteur d'origine.

Prenez contact avec moi  à travers de Twitter, mon nom d'utilisateur est @hxebolax.

Je vais vous répondre seulement là-bas ou sur le forum [Le Salon](https://www.qcsalon.net/fr/) sur cette modification.

## Remerciements

Je remercie à Rui Fontes de la communauté portugaise pour son aide afin d'obtenir la compatibilité avec NVDA 2021.1 étant celle-ci qui a été partagée  à l'auteur  pour l'extension d'origine.

Aussi  remercier à Ângelo Miguel Abrantes pour sa traduction en portugais.

Sans oublier aussi de remercier à Rémy Ruiz (@blindhelp) pour la reprise de la traduction en français.

Je vous souhaite une bonne traduction avec cette nouvelle extension TRANSLATE pour NVDA modifiée !

---

Voilà donc,  tout est dit au sujet de l'extension Translate pour NVDA modifiée!                 
Je vous souhaite une bonne découverte!         
Bien amicalement,              
Rémy (BlindHelp).

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouveau espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---