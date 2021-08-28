---
title: Python, le package requests_html (petite intro) partie-3
permalink: "/REQUESTS_HTML-Partie4/"
layout: post
author: BlindHelp
---

<footer>Publié le Samedi 28 Août 2021</footer>


Coucou mes amis du blog de BlindHelp!    
Voici un quatrième message expliquant l'utilisation du package "requests_html" avec Python fait par @ abdel792.    
Ce message représente la quatrième et dernière partie d'une série de 4 tutos, tous consacrés exclusivement à ce package.    
Je vous souhaite une bonne lecture.    


# Python, le package requests_html (petite-intro) partie-4 par Abdel

Resalut les scripteurs !

Aujourd'hui, on va parler de quelque chose qui va certainement vous plaire, il s'agit de l'injection d'un code Javascript dans une page Web en utilisant requests_html.

Oui, vous avez bien entendu, requests_html est aussi capable de faire cela !

Le résultat de l'exécution du code Javascript pourra être récupéré dans une variable Python et utilisé au besoin.

Avant cela, je vous invite à consulter la [page suivante](http://cyber25.free.fr/test-jquery-ajax/) avec votre navigateur :

Vous atterrissez alors dans une page intitulée "Test de la méthode ajax du jQuery.".

Si vous cliquez ou validez sur le bouton de validation, vous remarquerez que le paragraphe va changer de contenu.

Contenu avant validation :

`Modifions donc ce texte.`

Contenu après validation :

`Voici le texte modifié.`

Nous allons refaire tout cela sans ouvrir le navigateur mais uniquement avec "requests_html" et la méthode "render".

Dans notre console Python de NVDA, ajoutons ce qui suit :

```
session = requests_html.HTMLSession()
resp = session.get('http://cyber25.free.fr/test-jquery-ajax')
print (resp.html.find('#divamodifier', first = True).text) # Nous affiche : 'Modifions donc ce texte.'
```

Pour pouvoir avoir le texte modifié, vous êtes d'accord avec moi qu'il faut cliquer sur le bouton de validation !

Comment le faire sans même ouvrir la page avec notre navigateur ?

C'est ce que l'on va faire ensemble.

La page sera ouverte aussi, mais programmatiquement parlant avec le navigateur Chromium intégré dans les dépendances de "requests_html".

Nous allons injecter un script jQuery dans la page qui va tout simplement cliquer sur le bouton et récupérer le résultat du clic.

Dans le script injecté, j'utilise jQuery mais vous pouvez bien sûr utiliser aussi du Javascript.

D'ailleurs, le jQuery lui-même n'est rien d'autre que du Javascript simplifié.

Voici le code du script à injecter :

```
script = """
() => {
if (jQuery.isReady) {
$("#validation").click();
}
}
"""
```

Maintenant, on va utiliser la fameuse méthode "render" qui va nous permettre d'injecter le script et de récupérer le texte du paragraphe modifié.

`resp.html.render(sleep=1, script=script)`

Je suppose que vous avez compris que le paramètre sleep permet d'observer un petit délai avant de récupérer la page modifiée et que le paramètre script permet d'introduire le script à injecter.

Affichons maintenant le contenu de notre paragraphe après la validation sur le bouton de validation.

`print (resp.html.find('#divamodifier', first = True).text) # Nous affiche : 'Voici le texte modifié.'`

@+    
BlindHelp!    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouvel espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---