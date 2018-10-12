---
title: Microsoft annonce avoir identifié le bug dans la mise à jour d'octobre de Windows 10, qui l'a obligé à suspendre son déploiement
layout: post
author: BlindHelp
---

<footer>Mercredi 10 Octobre 2018</footer>

Coucou mes amis du blog de BlindHelp!  
Voici cet article  de [Numerama - TECH](https://www.numerama.com/tech/) où Microsoft annonce avoir identifié le bug dans la mise à jour d'octobre de Windows 10, qui l'a obligé à suspendre son déploiement...                

[Windows 10 : le bug a été réparé, mais que s’est-il passé ? - Tech - Numerama](https://www.numerama.com/tech/426667-windows-10-le-bug-a-ete-repare-mais-que-sest-il-passe.html)              
par: [Julien Lausson](https://www.numerama.com/author/julienl/)                     

Merci à lui pour cet article!         

# Windows 10 : le bug a été réparé, mais que s’est-il passé ? #

Microsoft annonce avoir identifié le bug dans la mise à jour d'octobre 
de Windows 10, qui l'a obligé à suspendre son déploiement. Celui-ci a 
causé la perte
de fichiers. Le bug est corrigé.        

Bonne nouvelle pour toutes les personnes qui attendaient avec impatience
[la mise à jour d’octobre](https://www.numerama.com/tech/425339-mise-a-jour-doctobre-de-windows-10-les-5-nouveautes-a-retenir.html)
de Windows 10. L’origine du bug qui a contraint Microsoft
[à suspendre son déploiement](https://www.numerama.com/tech/425771-windows-10-microsoft-suspend-le-deploiement-de-la-mise-a-jour-doctobre-a-cause-dun-bug.html)
au début du mois a été identifiée et un correctif a été mis au point 
dans la foulée. Celui-ci est actuellement déployé auprès des membres du 
programme
Windows Insider.                 

C’est John Cable, directeur de la gestion des programmes, de l’entretien 
et de la prestation des services Windows, qui s’est chargé de faire ce 
point d’étape :             
« Nous avons enquêté sur tous les rapports de perte de données, 
identifié et corrigé tous les problèmes connus dans la mise à jour, et 
effectué une validation
interne ». Dans son
[billet de blog,](https://blogs.windows.com/windowsexperience/2018/10/09/updated-version-of-windows-10-october-2018-update-released-to-windows-insiders/)         
des précisions ont été apportées sur la cause du bug.            

## QUEL ÉTAIT LE PROBLÈME ? ##

Le souci se situait dans le processus appelé KFR (Known Folder 
Redirection). Celui-ci sert à rediriger les dossiers connus de Windows, 
y compris le bureau,
les documents, les images, les captures d’écran, les vidéos, etc., de 
l’emplacement par défaut du dossier, c’est-à-dire par exemple             
`C :\users\username\<nom
du dossier>`, vers un nouvel emplacement choisi par l’utilisateur.           

Or, explique Microsoft, les fichiers eux-mêmes restaient dans 
l’emplacement d’origine du « vieux » dossier plutôt que d’être déplacés 
vers le nouvel emplacement.                  
Sauf qu’en parallèle, Microsoft s’était attaqué à un autre problème :                 
des utilisateurs avec KFR avaient signalé, lors de la mise à jour 
d’avril 2018, l’apparition
d’une copie supplémentaire, vide, des dossiers connus sur leur appareil.

Avec la mise à jour d’octobre, Microsoft entendait régler cette affaire.             
« Nous avons introduit du code pour supprimer ces dossiers vides et 
dupliqués »,
est-il expliqué. Mais cette modification, combinée à une retouche de la 
séquence de construction de la mise à jour, a entraîné la suppression 
des anciens
emplacements de dossiers et de leur contenu, ne laissant intacts que les 
nouveaux dossiers « actifs ».

C’est ce phénomène auquel ont été confrontés les usagers
[ayant signalé la perte de fichiers.](https://www.numerama.com/tech/425771-windows-10-microsoft-suspend-le-deploiement-de-la-mise-a-jour-doctobre-a-cause-dun-bug.html)                

## LE SAUVETAGE DES DONNÉES PAS GARANTI ##

La correction du bug n’implique toutefois pas la possibilité de 
récupérer les données perdues. Microsoft admet qu’il ne peut pas 
garantir leur sauvetage,
mais le groupe rappelle que son support et son personnel du service 
clientèle sont disponibles sans frais pour assister toute personne en 
difficulté.               

Le groupe affirme toutefois que l’incident aurait une ampleur 
relativement limitée. La firme dit avoir reçu, en nombre de rapports, 
l’équivalent d’un centième
d’un pourcent de toutes les installations recensées de la version 
fautive (Windows 10 October 2018 Update version 1809). Mais toutes les 
personnes affectées
n’ont pas nécessairement produit un compte rendu à Microsoft.                    

Pour l’heure, la version corrigée de la mise à jour d’octobre de Windows 
10 est poussée à une poignée d’individus, ceux qui sont membres du 
programme Windows
Insider. Cette première étape va permettre à Microsoft de vérifier 
ultimement que tout est en ordre. « Nous étudierons attentivement les 
résultats, les
commentaires et les données diagnostiques de nos membres avant de 
prendre d’autres mesures ».               

En clair, mettre à disposition du grand public la mise à jour d’octobre.                

# Source de l'article #
[Windows 10 : le bug a été réparé, mais que s’est-il passé ? - Tech - Numerama](https://www.numerama.com/tech/426667-windows-10-le-bug-a-ete-repare-mais-que-sest-il-passe.html)              
[Tech : Découvrez les dernières innovations technologiques avec les articles, dossiers, vidéos et la communauté Numerama](https://www.numerama.com/tech/)              

sur ce, je vous souhaite une bonne découverte des dernières innovations technologiques avec les articles, dossiers, vidéos et la communauté Numerama!                 
@+            
BlindHelp!                     

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouveau espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---