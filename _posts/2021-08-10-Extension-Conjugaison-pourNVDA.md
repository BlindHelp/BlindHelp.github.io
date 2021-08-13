---
title: Extension NVDA permettant d'avoir une conjugaison d'un verbe quelconque
permalink: "/Extension-Conjugaison-pourNVDA/"
layout: post
author: BlindHelp
---

<footer>Publié le Mardi 10 Août 2021</footer>


Coucou mes amis du blog de BlindHelp!    
Voici une nouvelle Extension NVDA nommée Conjugaison fait par notre ami   Abdelkrim Bensaïd surnommé Abdel par la plupart de ces amis.    

Il nous souhaitait nous offrir une extension de ça création, donc Vous trouverez ci-dessous sa description et son lien de téléchargement fourni par ces soins.    

# Informations sur l'extension Conjugaison #

* Auteurs: Abdelkrim Bensaïd
* Version actuelle: 21.08
* Langue: Français
* Compatibilité NVDA: 2019.3 à 2021.3
* Télécharger [version actuelle sur l'espace de Abdel sur Free.FR [lien externe]](http://cyber25.free.fr/nvda-addons/conjugaison-21.08.nvda-addon)

## Présentation de l'extension Conjugaison pour NVDA par Abdel ##

Je souhaitais vous offrir une extension de ma création.    

Elle s'appelle "conjugaison" et n'apporte pas vraiment grand chose, rien qu'un support de conjugaison pour tous les verbes français en se connectant au site capeutservir.com.    

Vous voici son lien direct de téléchargement :    

<http://cyber25.free.fr/nvda-addons/conjugaison-21.08.nvda-addon>

Je l'ai créée pour un ami qui enseigne la langue française et qui en avais particulièrement besoin, pour afficher rapidement la conjugaison de n'importe quel verbe.    

Il est vrai que la fonction existe déjà dans le Localisateur de notre ami Philippe Léon, à la différence près qu'elle n'utilise pas le site capeutservir.com et qu'elle affiche les résultat dans des pages distinctes, alors que mon extension affiche tous les résultats dans une seule et même page formatée en HTML pour faciliter la circulation parmi les différents modes et temps.    

J'y ai introduit également une toute nouvelle fonctionnalité qui est apparue avec NVDA 2021.1 et supérieur, qui est la possibilité de pointer vers l'attribut ID d'un élément HTML figurant dans la documentation, pour  avoir une aide contextuelle sur un champ ou boîte de dialogue donnée.    

Pour avoir la conjugaison d'un verbe quelconque, le raccourci-clavier prévu par défaut est "Contrôle + F5", mais il peut être modifié dans les  gestes de commandes.    

Cette boîte de dialogue peut également être ouverte depuis le menu "Outils" de NVDA, item de menu "Conjugaison".    

Une fois dans le champ, si vous pressez la touche F1, vous obtiendrez un  accès direct à la documentation et plus précisément, au paragraphe qui décrit le contrôle ou champ courant.    

Ce sera le cas également pour les champs ou contrôles de la boîte de dialogue de configuration de l'extension, que vous trouverez dans le panneau des paramètres de NVDA.    

Voilà, je pense avoir tout dit.    

Ah j'oubliais, l'extension est compatible avec les versions de NVDA allant de 2019.3 jusqu'à 2021.3, j'ai mis la limite un peu loin, car je pense qu'elle restera compatible jusqu'à cette version de NVDA.    

Malheureusement, en ce qui concerne la rétro compatibilité, on ne peut pas descendre plus bas que 2019.3, car l'extension utilise un module externe très performant : "requests_html", qui est beaucoup plus efficace que le célèbre "BeautifulSoup" et ce module ne fonctionne bien qu'avec Python 3.    

Pour les amis développeurs d'extensions qui souhaiteraient s'inspirer du code pour réaliser des modules du même type, il n'y a aucun souci, je  les en autorise.    

J'ai du monkeypatcher la fonction `gui.contextHelp.showHelp` car pour le moment, l'aide contextuelle n'a été implémentée que pour les contrôles internes de NVDA, pas pour les extensions.    

Je vous souhaite une agréable journée.    

Cordialement,    
Abdel.    

---

Merci à notre ami Abdelkrim Bensaïd pour cette extension très sympas pour NVDA! (handshake)    

Voilà,    
Je vous souhaite une bonne utilisation de l'extension Conjugaison pour NVDA! :)    
@+    
BlindHelp!    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouveau espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---