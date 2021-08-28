---
title: Python, le package requests_html (petite intro) partie-1
permalink: "/REQUESTS_HTML-Partie1/"
layout: post
author: BlindHelp
---

<footer>Publié le Samedi 28 Août 2021</footer>


Coucou mes amis du blog de BlindHelp!    
Voici un message expliquant l'utilisation du package "requests_html" avec Python fait par @ abdel792.    
Ce message représente la première partie d'une série de 4 tutos, tous consacrés exclusivement à ce package.    
Je vous souhaite une bonne lecture.    


# Python, le package requests_html (petite-intro) partie-1 par Abdel

Salut les scripteurs !

Alors, c'est la forme ?

Je souhaitais dans ce présent message, vous parler de la bibliothèque Python "requests_html", qui est fort utile pour ceux qui souhaiteraient récupérer du contenu Web.

Pour pouvoir s'en servir, nous allons d'abord définir notre environnement.

Je propose la console Python de NVDA.

Si vous utilisez mon extension conjugaison, vous pouvez passer l'étape suivante, car elle y est installée et est parfaitement utilisable depuis la console Python de NVDA.

Cependant, si vous n'avez pas cette extension, je vous propose de télécharger le package "requests_html" ainsi que ses dépendances depuis [ce lien](https://drive.google.com/uc?export=download&id=1G_ADsC54UJN0rh72NxzGHxGsmVLm6KL7).

Une fois le package téléchargé, décompressez le à la racine de votre disque dur principal.

Dans cet exemple, on va supposer que votre volume principal est "C".

Utilisez la commande "Extraire ici" au lieu de "Extraire vers", si vous utilisez winrar ou 7zip.

Cela vous permettra d'avoir un dossier lib directement à la racine, comportant le contenu du package.

Ceci fait, ouvrez la console Python de NVDA avec le raccourci clavier NVDA + Contrôle + Z.

Dans la console, si vous n'avez pas installé l'extension conjugaison, saisissez ce qui suit :

```
lib = "C:\\lib"
sys.path.append (lib) # le module sys est préinstallé dans la console Python de NVDA.
import requests_html
sys.path.remove (lib) # On retire le chemin du répertoire du package de la liste sys.path.
```

Si vous avez l'extension "conjugaison", saisissez uniquement ce qui suit :

`import requests_html`

Nous allons maintenant scraper un peu le Web.

Ajoutez donc ce qui suit :

```
url = 'https://www.capeutservir.com/verbes/manger.html'
session = requests_html.HTMLSession () # on instancie un objet HTMLSession.
response = session.get(url) # On récupère la page ciblée par l'URL.
title = response.html.find('title', first = True) # On pointe sur l'objet title, représentant le titre de notre page.
print (title.text) # Nous affiche : 'Conjuguer le verbe manger - Ca peut servir'.
```

Maintenant, on va essayer d'utiliser xpath.

```
group = response.html.xpath ('//div[@class="fleft verb-meta-info"]', first = True) # On pointe sur l'objet div comportant l'attribut class indiqué.
print (group.text) # Nous affiche : 'Infinitif : manger Groupe: 1er'
```

Voili voilou, j'espère que cette petite intro aidera ceux ou celles qui souhaitent débuter avec le package "requests_html" en Python.

@+    
BlindHelp!    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouvel espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---