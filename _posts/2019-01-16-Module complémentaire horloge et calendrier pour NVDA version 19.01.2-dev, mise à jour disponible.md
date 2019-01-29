---
title: Module complémentaire horloge et calendrier pour NVDA version 19.01.2-dev, mise à jour disponible
layout: post
author: BlindHelp
---

<footer>Dernière modification Lundi 28 Janvier 2019</footer>


Coucou mes amis du blog de BlindHelp!               
Ce module complémentaire nommé [Clock](#clock-19.01.1.nvda-addon) actuellement peut être mis à jour à partir du module complémentaire [Add-on Updater](https://addons.nvda-project.org/addons/addonUpdater.fr.html) qui a été mis à jour à la nouvelle version stable 19.01.1A récemment. Lui-même nous  avertira de cette mise à jour, bien que nous puissions également le télécharger manuellement. Si vous n'avez même pas ce module complémentaire horloge et calendrier  pour NVDA également connu sous le nom de Clock, vous pouvez le télécharger à partir du lien ci-dessous.

Note: Vous pouvez télécharger les dernières versions du module complémentaire horloge et calendrier pour NVDA (Clock) version stable 19.01.1 et  version en développement 19.01.2-dev, via les liens du site communautaire NVDA se trouvant sur cette page.                       
 
Également vous trouver ci-dessous un petit  changelog (journal des changements) fait maison pour cette dernière version en date, ainsi que une bref description du module complémentaire Clock.

---

# Clock <a id="clock-19.01.1.nvda-addon"></a>

# 19.01.2-dev #

# Mise à jour du Lundi 28 Janvier 2019  par Abdel #

Après la révision faite par notre ami Paul, voici la dernière mise à jour de la pré-version du module complementaire Clock, y compris les ajouts suivants:             

* Ajout d'un message d'erreur pour informer l'utilisateur quand une valeur erronée a été entrée pour les heures silencieuses;                      
* Déplacé la catégorie  script_reportTimeAndDate vers la catégorie État du système;                
* Correction de la désactivation du module complémentaire Clock dans un écran sécurisé.                   
* Correction de l'expression régulière pour vérifier le format des heures silencieuses;                 
En fait, la correspondance ne s'est pas terminée par un $, raison pour laquelle il pourrait inclure des caractères supplémentaires.                     
Merci beaucoup Paul pour cette remarque importante.               

Cette version sera publiée avant la fin de la semaine. J'ai pratiquement fait tous les tests de stabilité, mais j'attends votre confirmation.               

Si quelqu'un veut faire une autre révision, il sera le bienvenu.           

[Lien de téléchargement:](https://addons.nvda-project.org/files/get.php?file=cac-dev)                       

Merci beaucoup pour vos retours.             

Cordialement,            
Abdel.             

# Mise à jour du Samedi 26 Janvier 2019  par Abdel #

La pré-version 19.01.2-dev du module complémentaire Clock est disponible.                

Cette version qui sera bientôt disponible inclut les ajouts suivants:                     

* Ajout du module skipTranslation.py implémenté par Alberto BUFFOLINO          
pour échapper à certains messages déjà traduits dans NVDA;                 
* Ajout de commentaires citant les auteurs originaux sur certaines fonctionnalités,             
y compris le décorateur Finally mis en œuvre par Tyler SPIVEY.                      
* Maintenance simplifiée pour l'environnement des commandes  en couche de Clock.                
 Maintenant, si nous ajoutons un nouveau script, nous devons simplement le déclarer dans le
constructeur et il sera automatiquement reconnu et ajouté à la            
aide obtenue avec la lettre H dans les commandes en couches.                   
* Ajout de la vérification de la syntaxe de l'heure entrée pour les heures silencieuses.              
* Mise à jour de la documentation, elle inclut maintenant la description de la             
syntaxe à saisir pour les heures silencieuses.               
* Désactivation du chargement du module  complémentaire dans l'écran sécurisé, ainsi que si NVDA           
s'exécute en tant qu'application Windows Store Desktop Bridge.                  

Concernant cette dernière caractéristique, telle qu’elle est apparue depuis Nvda-2018.1 et          
le module complémentaire Clock est compatible avec les versions précédentes de NVDA, voici
comment j'ai implémenté la condition:                    

if globalVars.appArgs.secure or (hasattr (config, "isAppX") et           
config.isAppX): return          

Si aucun bug n'est signalé, je publierai la version stable la semaine prochaine.                  

Avant cette publication, si quelqu'un pouvait passer une dernière révision, je serais        
reconnaissant.                  

Ce que je voudrais surtout revoir, c’est la conformité des           
Code avec les règles des lignes directrices.               

[Lien de téléchargement :](https://addons.nvda-project.org/files/get.php?file=cac-dev)                
Merci pour vos tests et retours.             

Amitiés.            
Abdel              

# Mise à jour du Mercredi 23 Janvier 2019  par Abdel #
Dans sa configuration actuelle, le module complémentaire Horloge (Clock) ne vérifie pas encore les entrées saisies par l'utilisateur pendant les heures silencieuses.

Cependant, j'avais déjà intégré ce contrôle pour le temps d'attente de l'alarme.

Cela peut être problématique, car si l'utilisateur écrit «Bonjour», par exemple dans le champ Début de la durée des heures silencieuses et «Au revoir» dans le champ Fin de la durée des heures silencieuses,  l'entrée sera enregistrée dans le fichier de configuration et peut provoquer des erreurs.

En principe, le module complémentaire devrait pouvoir vérifier la validité des entrées saisies par l'utilisateur.

De plus, si l'utilisateur coche la case Heures silencieuses et n'écrit rien dans les champs de début et de fin, la case à cocher Heures silencieuses doit être décochée automatiquement pour éviter les erreurs.

Je viens d'ajouter une expression régulière pour vérifier les champs d'heure de début et de fin des des heures silencieuses dans la dernière version de développement du module complémentaire Clock.

Le module complémentaire restera dans la version de développement jusqu'à ce que cette nouvelle fonctionnalité soit testée à grande échelle.

[Lien de téléchargement:](https://addons.nvda-project.org/files/get.php?file=cac-dev)                 

Merci pour vos retours.               

Amitiés.            

Abdel              

# Mise à jour du Mercredi 16 Janvier 2019 par Abdel #
La version de développement 19.01.2-dev du module complémentaire Clock vient d'être mise à jour.

Cette mise à jour inclut les modifications suivantes:

1. Réduit la durée de chaque alarme dans le dossier "Alarms".

Chacune de ces alarmes a maintenant une durée de 15 secondes, ce qui a réduit la taille du module complémentaire de plus de 20 Mo.

2. Lorsque l'heure est automatiquement annoncée par Intervales, si un son a été choisi, le message d'annonce de l'heure est prononcé après le son et non au même moment, comme demandé par Ikrami.

3 Modifications dans les traductions de 2 messages.

4. Correction d'une expression conditionnelle dans le fichier addon/globalPlugins/clock/__init__.py file.

Le module complémentaire  restera dans la version de développement jusqu'à ce que tous les bugs ont été corrigés.

[Lien de téléchargement:](https://addons.nvda-project.org/files/get.php?file=cac-dev)

# Version 19.01.1 #

* Création de la version stable 19.01.1.

# Version 19.01.1-dev #

Clock 19.01.1-dev est disponible.

Cette version de développement inclut les modifications suivantes:

1. Ajout de la conservation du délai d’alarme, même après le redémarrage de NVDA ou de l’ordinateur.

Merci à Dejan pour la suggestion ainsi qu’à Robert pour la procédure.

2. Dans cette version, j'ai essayé de m'assurer que l'add-on est compatible avec Python 3, certaines choses peuvent ne pas encore être prêtes, merci à Joseph s'il peut le tester avec Python 3.

[Cette version de développement est téléchargeable à partir du référentiel GitHub de l'auteur en cliquant ici.](https://github.com/hkatic/clock/releases/download/v19.01.1-dev/clock-19.01.1-dev.nvda-addon)                    

# Version 19.01 #

* Création de la version stable 19.01.

# Version 19.01-dev #

Clock 19.01-dev est disponible.            

Cette version de développement inclut les nouvelles traductions reçues par le système de traduction, ainsi que les modifications suivantes:                    

1. Ajout d'un bouton Stop (Arrêter) dans la boîte de dialogue Réglage de l'alarme pour arrêter les longues alarmes lors de la navigation dans la liste des alarmes.
2. Ajout d'un bouton Pause / Resume (Pause/ Reprendre) pour mettre en pause / reprendre pendant l'écoute d'une alarme.
3. Ajout d'un script pour arrêter l'alarme si elle est trop longue.
Ce script n'a pas de geste de commande défini.
4. Suppression du geste de commande Contrôle+F12, le script de vérification / annulation d’une alarme n’a pas de geste de commande défini.
5. Correction du bug rapporté par Paul.
6. Correction du bug concernant la sauvegarde de la configuration lors de l'installation.
7. Correction d'un bug pour l'année en cours si la semaine en cours est la première de l'année suivante.
Par exemple, le 31 décembre 2018, c'était la première semaine de l'année 2019, il était donc nécessaire d'incrémenter l'année.

[Cette version de développement est téléchargeable à partir du référentiel GitHub de l'auteur en cliquant ici.](https://github.com/hkatic/clock/releases/download/v19.01-dev/clock-19.01-dev.nvda-addon)                    

# Version 18.12 #

* Module complémentaire horloge et calendrier pour NVDA version 18.12.1 est rétrogradé en raison d'un bogue de mise à niveau par Josephe Lee.

Toutes nos excuses aux utilisateurs pour la gêne occasionnée.


# Version 18.12.1  (ancienne version) #

* Création de la version 18.12.1, y compris des dernières mises à jour de L10N.

# Version 18.12 (version rétrogradé) #

* Corrections de Bogues.

* Nouvelles alarmes sonores ajoutés par Hrvoje Katic.

* Corrections de Bogues.

* En effet, les nouvelles alarmes sonores sont longues et doivent être arrêtées à volonté;
Nous allons le corriger bientôt.

* Ajout d'un module installTasks.py qui gère le cas où une ancienne configuration incompatible avec la date et l'heure serait détectée et le corrige.

* Mise à jour de la documentation en anglais.

* Ajout du format de l'heure que Cyrille avait demandé à Abdel en privé.

* Le repo sur Bitbucket est également à jour pour les traductions futures.

* Corrections de bogues.

* Repo créé sur Bitbucket par Noelia.

* Le référentiel de l'auteur a été mis à jour pour inclure les nouvelles mises à jour des traductions ainsi que la correction de la phrase que vous avez indiquée dans le fichier readme.md.

* À propos des correctifs fait dans le fichier  readme, nous les appliquerons à la version officielle du module complémentaire.

* Une  faute de frappe détectée a été corrigée dans le fichier source.

* Les liens de téléchargement des versions stable / dev ont été mis à jour dans le fichier de documentation en anglais.

* La documentation en anglais a été mise à jour à la demande pour révision.

* Mis à jour manuellement plusieurs traductions;               
Ce sera bientôt plus facile lorsque le module complémentaire sera déclaré stable et proposé au système de traduction de NVDA.

* Corrigé le problème de la mémorisation du temps d'attente de l'alarme.

* Maintenant, le module complémentaire Clock est compatible avec les versions de NVDA allant de 2014.3 à 2018.4.

* Avec les versions de NVDA antérieures à 2018.2, le sous-menu Configuration du module complémentaire est disponible dans le menu Outils.

* Isolement de la boîte de dialogue Alarm Setup.

* Ajout de certains formats de date et d’heure comprenant un seul chiffre pour chaque champ.

* Ajout d'un compte à rebours avec alarme pouvant être configuré en heures, minutes ou secondes pour déclencher une alarme.

* Correction des messages à traduire pour les traducteurs afin qu'ils ne soient pas ennuyés par le nouveau format.


Bravo Hrvoje et Abdel! 😊              

# Plus d'informations sur le module complémentaire horloge et calendrier pour NVDA (Clock) #

    Type: Extensions
	Ce module complémentaire est compatible avec les versions de NVDA allant de 2014.3 à 2019.1.
	(Y compris les versions de NVDA antérieures à 2018.2).
	Avec les versions de NVDA antérieures à 2018.2, le sous-menu Configuration du module complémentaire est disponible dans le menu Outils.
	Ce module complémentaire active les fonctions avancées de l'horloge, de minuterie d'alarme et du calendrier pour NVDA.

Au lieu de toujours obtenir la date et l'heure depuis Windows, vous pouvez personnaliser comment les dates et les heures doivent être annoncées et affichées en braille par NVDA.

En outre, vous pouvez obtenir le jour actuel, le numéro de la semaine, ainsi que les jours restants avant la fin de l'année en cours, et vous pouvez également définir une annonce automatique de l'heure sur un intervalle spécifié.

Il existe également des fonctionnalités pour le chronomètre et minuterie d'alarme intégrés au module complémentaire qui vous permettent de chronométrer vos tâches, telles que la copie de fichiers, l'installation de programmes ou la préparation de repas.

Note:              
Si vous installez le module complémentaire en tant que mise à jour, lors du processus d'installation, l'assistant détecte si l'ancienne configuration est compatible avec la nouvelle et vous propose de la corriger avant l'installation. Il vous suffira alors de valider le bouton OK pour confirmer cela.


* NVDA+F12, pour obtenir l'heure actuelle;            
* NVDA+F12 pressé deux fois rapidement, pour obtenir la date actuelle;           
* NVDA+F12 pressé trois fois rapidement, pour annoncer le jour actuel, le numéro de la semaine, l'année en cours et les jours qui restent avant la fin de l'année.               
* Contrôle+F12, donne le temps restant et écoulé avant la prochaine alarme;                    
* Contrôle+F12 pressé deux fois rapidement, annule la prochaine alarme.


	Pour d'autres instructions, appuyez sur le bouton Aide de ce module complémentaire, dans le Gestionnaire de modules complémentaires.

Auteurs: Hrvoje Katić, 
[Hrvoje Katić](mailto:hrvojekatic@gmail.com)           
Abdel,  
[Abdel](mailto:abdelkrim.bensaid@gmail.com)           
et contributeurs de NVDA.

[Consultez la page  du référentiel (repository) sur JitHub](https://github.com/hkatic/clock)      

Il suffit de mentionner qu'appVeyor génère automatiquement  un nouveau fichiers pot avec la commande scons à chaque fois que  un nouveau commit est publié, ce qui est fantastique. Ainsi, le dernier fichier pot sera toujours sur le lien suivant ainsi que l'addon:                 

Note: Actuellement  sur la page d'appVeyor il se trouve seulement le dernier module complémentaire en date, il n'y a pas le fichier pot.                  

<https://ci.appveyor.com/project/HrvojeKati/clock/build/artifacts>

Ce module complémentaire  Clock-19.01.1 est mis à jour avec les nouvelles sources puis retraduit en français et en espagnol par Rémy Ruiz et d'autres contributeurs.    
Langues supportés: Allemand, Anglais, Arabe, Bulgare, Chinois Traditionnel, Croate, Français, Espagnol, Italien, Persan, Polonais, Portugais-Brésil, Portugais-Portugal, Roumain, Russe, Serbe, Slovaque et Turc   
Traduit en français par: Michel Such, Abdel et Rémy Ruiz           
Traduit en espagnol par: Iván Novegil Cancelas, Juan C. Buno, José Manuel Delicado Alcolea et Rémy Ruiz           
Version: Clock-19.01.1           
Dernière mise à jour: 6 Janvier 2019           

---

# Consulter la documentation du module complémentaire horloge et calendrier pour NVDA (Clock) #

[via  la page du site communautaire NVDA](https://addons.nvda-project.org/addons/clock.fr.html)

---

# Télecharger le module complémentaire horloge et calendrier pour NVDA (Clock) via les liens du site communautaire NVDA #

* Télécharger [version stable](http://addons.nvda-project.org/files/get.php?file=cac);              

* Télécharger [version de développement](https://addons.nvda-project.org/files/get.php?file=cac-dev).              

---

Merci aux auteurs: Hrvoje Katic, Abdel et contributeurs de NVDA!😃              

Voilà donc,  tout est dit au sujet de la nouvelle mise à jour disponible pour le module complémentaire horloge et calendrier pour NVDA version stable 19.01.1 et la version en développement 19.01.2-dev!                
Je vous souhaite une bonne découverte!         
Bien amicalement,              
Rémy (BlindHelp).

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouveau espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---