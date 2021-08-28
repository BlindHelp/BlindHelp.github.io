---
title: Python, le package requests_html (petite intro) partie-2
permalink: "/REQUESTS_HTML-Partie2/"
layout: post
author: BlindHelp
---

<footer>Publié le Samedi 28 Août 2021</footer>


Coucou mes amis du blog de BlindHelp!    
Voici un second message expliquant l'utilisation du package "requests_html" avec Python fait par @ abdel792.    
Ce message représente la seconde partie d'une série de 4 tutos, tous consacrés exclusivement à ce package.    
Je vous souhaite une bonne lecture.    


# Python, le package requests_html (petite-intro) partie-2 par Abdel

Resalut les scripteurs !

On va continuer de parler un peu de la bibliothèque "requests_html".

Maintenant, on va faire des requêtes asynchrones.

Cela signifie que l'on va essayer d'afficher le groupes de plusieurs verbes mais les uns après les autres, pas de manière concurrentes, comme on le ferait avec un thread.

Attention, à la fin de chaque bloc indenté, comme le contenu d'une boucle for, d'une condition if ou du contenu d'une fonction, il faudra presser 2 fois entrée dans la console pour que le code indenté soit bien reconnu et interprété.

Ajoutons donc ce qui suit.

`asession = requests_html.AsyncHTMLSession () # On initialise un objet AsyncHTMLSession.`

Maintenant, on va définir une fonction asynchrone, cette syntaxe n'est disponible que depuis Python 3.5.

```
async def getLink (url):
	r = await asession.get (url) # Le mot clé await signifie que la récupération de la page suivante devra attendre que la précédente soit bien récupérée.
	return r # Ceci est le retour de notre fonction bien entendu.
```

Dressons maintenant la liste des verbes dont on recherche les groupes respectifs.

`verbs = ('prendre', 'penser', 'finir', 'jouer', 'voir', 'moudre')`

Nous allons maintenant générer une liste de requêtes pour chaque verbe.

On pourrait utiliser une syntaxe comme `responses = asession.run (lambda : getLink(première URL), lambda : getLink (seconde URL)` etc...) mais il est préférable d'itérer en utilisant une seule lambda comme suit :

`responses = asession.run (*(lambda v=v: getLink(f"https://www.capeutservir.com/verbes/{v}.html") for v in verbs))`

Maintenant, affichons la liste de nos groupes.

```
for resp in responses:
	group = resp.html.xpath ('//div[@class="fleft verb-meta-info"]', first = True) # On pointe sur l'objet div comportant l'attribut class indiqué.
	print (group.text)
```

On obtient alors ce qui suit :

```
Infinitif : prendre Groupe: 3e
Infinitif : penser Groupe: 1er
Infinitif : finir Groupe: 2e
Infinitif : jouer Groupe: 1er
Infinitif : voir Groupe: 3e
Infinitif : moudre Groupe: 3e
```

@+    
BlindHelp!    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouvel espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---