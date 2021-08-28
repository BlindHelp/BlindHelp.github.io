---
title: Python, le package requests_html (petite intro) partie-3
permalink: "/REQUESTS_HTML-Partie3/"
layout: post
author: BlindHelp
---

<footer>Publié le Samedi 28 Août 2021</footer>


Coucou mes amis du blog de BlindHelp!    
Voici un troisième message expliquant l'utilisation du package "requests_html" avec Python fait par @ abdel792.    
Ce message représente la troisième partie d'une série de 4 tutos, tous consacrés exclusivement à ce package.    
Je vous souhaite une bonne lecture.    


# Python, le package requests_html (petite-intro) partie-3 par Abdel

Resalut les scripteurs !

Alors, prêts pour un autre épisode de notre feuilleton sur la bibliothèque "requests_html" ?

Eh bien c'est parti !

On va maintenant créer nous même une page à explorer avec les méthodes find et xpath

Copiez-collez la page HTML suivante dans la console Python de NVDA :.

```
page="""<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset=\"UTF-8\">
<title>Exemple d'utilisation de requests_html</title>
</head>
<body>
<ul class="semaine">
<li>Lundi</li>
<li id="jour">Mardi</li>
<li>Mercredi</li>
<li>Jeudi</li>
<li>Vendredi</li>
<li>Samedi</li>
<li>Dimanche</li>
</ul>
</body>
</html>"""
```

Maintenant, saisissons les instructions suivantes :

```
html = requests_html.HTML (html=page) # On crée un objet html pointant sur la page que nous venons de créer.
title = html.find('title', first = True).text # On pointe sur le titre.
print (title) # nous affiche : "Exemple d'utilisation de requests_html".
```

Vous avez certainement remarqué la présence du paramètre "first = True" que j'ai utilisé dans les méthodes find et xpath précédentes.

Il permet de pointer sur le premier élément html répondant au critères demandés.

Si nous l'omettons, on obtient une liste d'éléments, tous répondant aux critères.

Même si un seul élément répond à ces critères, une liste parcourable par index est toujours retournée lorsque le paramètre "first = True" est absent.

Voici donc une autre manière de pointer sur le titre :

```
title = html.find('title')[0].text # On pointe sur le titre en utilisant son index dans la liste.
print (title) # nous affiche : "Exemple d'utilisation de requests_html".
```

On peut aussi pointer sur un élément possédant un attribut class donné ou id en utilisant un point ou un #.

```
semaine = html.find('.semaine') # Pointera sur l'élément HTML dont l'attribut class correspond à "semaine" et retournera une liste d'objets parcourable par index.
jour = html.find('#jour') # Pointera sur l'élément dont l'attribut ID correspond à "jour" et retournera une liste d'objets parcourable par index.
```

Maintenant, essayons de parler de la façon dont on va pouvoir parcourir les nœuds,  (nœud suivant/précédent/parent.

Voici une autre façon de pointer sur un élément comportant un attribut ID donné avec xpath.

Cette fois-ci, on va se passer du paramètre "first = True" comme décrit plus haut.

```
jour = html.xpath ("//*[@id='jour']")
print (jour[0].text) # Nous donne "Mardi".
print (jour[0].element.getnext().text) # Nous donne "Mercredi".
print (jour[0].element.getprevious().text) # Nous donne "Lundi".
```

Maintenant, on va pointer sur l'objet parent de l'élément comportant l'attribut ID dont la valeur est "jour", il s'agit donc de l'élément UL.

`parent = jour[0].element.getparent()`

Comme cet élément comporte des sous-éléments, c'est à dire les éléments LI, la propriété text ne pourra pas donner de résultat.

Dans ce cas, on doit utiliser la méthode "text_content()".

`print (parent.text_content())`

On obtient alors ceci :

`'\nLundi\nMardi\nMercredi\nJeudi\nVendredi\nSamedi\nDimanche\n'`

La méthode get_element_by_id peut aussi être utilisée pour pointer sur un élément dont l'attribut ID spécifié est présent.

`print (parent.get_element_by_id("jour").text) # Affichera "Mardi".`

@+    
BlindHelp!    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouvel espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---