---
title: Weather Plus - Extension pour consulter la météo avec NVDA
permalink: "/Weather-Plus/"
layout: post
author: BlindHelp
---

<footer>Publié le Vendredi 9 Avril 2021 - Dernière modification le Mercredi 14 Mai 2025</footer>


Coucou mes amis du blog de BlindHelp!               
Je vous apporte de bonnes nouvelles concernant l'extension Weather Plus pour NVDA...             
Weather Plus est maintenant compatible avec NVDA2021.1 et plus!             
Après sa dernière version 7.7, Weather Plus fait peau neuve et il vient de sortir en version 10.1    

Voir son descriptive ci-dessous.    

# Weather Plus #

* Auteur : Adriano Barbieri
* Compatibilité NVDA : 2017.3 au-delà

# À propos de Weather Plus : #

* Cette extension ajoute à NVDA la température locale, les prévisions météo
  à 24 heures et les prévisions jusqu'à 2 jours supplémentaires et les prévisions horaires.
* Copyright (C) [Adriano Barbieri](mailto:adrianobarb@yahoo.it)
* Publié sous la GNU GPL (General Public License) v2
* Weather Plus fonctionne grâce à l'utilisation et la présence des services
  suivants :
* [https://www.weatherapi.com/](https://www.weatherapi.com/)
* [http://www.geonames.org/](http://www.geonames.org/)
* [https://api.open-meteo.com/v1/elevation/](https://api.open-meteo.com/v1/elevation/)
* [https://www.nvda.it/](https://www.nvda.it/)

# UTILISATION : #

* Appuyez sur NVDA+w pour obtenir les informations sur la température
  actuelle et les conditions météo.
* Appuyez sur NVDA +maj+W pour obtenir les prévisions à 24 heures et à 2
  jours au-delà.
* Appuyez sur NVDA +maj+W deux fois pour obtenir la température horaire et les conditions atmosphériques.
* Appuyez sur NVDA+maj+contrôle+w pour définir une ville temporaire.
* Appuyez sur NVDA+maj+contrôle+alt+w pour ouvrir le dialogue Paramètres
  Weather Plus.
* Appuyez sur NVDA+alt+w pour obtenir la date et l'heure de la dernière mise
  à jour du bulletin météo.
* Appuyez sur Contrôle+maj+w pour basculer entre les échelles de température
  Fahrenheit, Celsius ou Kelvin.

# Configuration de Weather Plus : #

* Vous devez configurer l'extension Weather Plus avant sa première utilisation ! Allez dans le sous-menu Préférences, sous-menu Paramètres Weather Plus et choisissez l'une des options suivantes :
 * Définir et gérer vos villes... - Afficher ou définir la ville courante depuis une liste.
 * Définir une ville temporaire... - Affiche et permet de définir une ville temporaire depuis une liste si disponible.
 * Documentation - Ouvrir le fichier d'aide pour la langue en cours.
 * Rechercher une mise à jour... - Signaler si une nouvelle version est disponible.

Pour ajouter une nouvelle ville : appuyer sur l'élément suivant :

* Définir et gérer vos villes... - Afficher ou définir la ville en cours
  depuis une liste.
* Le message suivant est affiché seulement la première fois ! Paramètres
  Prédéfinis Aucun F1: aide à la localisation, F2: dernière sélection avec
  TAB, F3: liste et zone d'édition, F4: contrôle de la durée des Prévisions
  Météo, F5: contrôles du volume.
* Dans la zone d'édition, saisissez une ville ou choisissez-en une
  dans la liste, si disponible. Remarque : La touche f5 est disponible si
  les effets sonores sont activés.
* Une fois appuyé sur Entrée sur l'élément "Définir et Gérer Vos Villes...",
  vous trouverez d'autres boutons comme suit :
* Tester - Testez la validité de la ville et trouvez les données de celle-ci.
* Ajouter - Ajoute la ville en cours dans votre liste. Ce bouton est activé
  si vous sélectionnez une ville dans la liste, et qu'elle a passé le test.
* Détails - Affiche les informations sur la ville en cours. Ce bouton est
  activé si vous sélectionnez une ville dans la liste, et qu'elle a passé le
  test.
* Définir - Vous permet de définir la région, afin d'adapter les effets
  sonores. Ce bouton est activé si les effets sonores sont installés et
  activés, et si vous sélectionnez une ville dans la liste.
* Prédéfini - Définit une ville par défaut, qui sera utilisée à chaque
  redémarrage de l'extension. Ce bouton est activé si vous sélectionnez une
  ville préalablement insérée dans la liste et non prédéfinie, ou si elle a
  passé le test.
* Supprimer - Supprimer la ville courante de votre liste. Ce bouton est
  activé si vous sélectionnez une ville préalablement insérée dans votre
  liste.
* Renommer - Renommer la vile en cours. Ce bouton est activé si vous
  sélectionnez une ville préalablement insérée dans votre liste.
* Importer de nouvelles villes... - Ce bouton vous permet d'importer des
  villes d'une autre liste de viles avec l'extension *.zipcodes ; vous
  pouvez choisir la ville que vous souhaitez importer, en activant la case à
  cocher associée.
* Exporter vos villes... - Vous permet d'enregistrer des villes dans le
  fichier spécifié avec l'extension * .zipcodes. Ce bouton est activé si
  vous avez ajouté et enregistré au moins une ville dans la liste.
* Réglage des prévisions horaires... - Ce bouton vous permet de choisir le contenu du bulletin des prévisions horaires.
* Échelle de mesure de la température : Utiliser le bouton radio pour
  choisir entre Celsius (par défaut), Fahrenheit et Kelvin.
* Degrés affichés comme : Utiliser le bouton radio pour choisir entre :
  Celsius `-` Fahrenheit `-` Kelvin (par défaut) C `-` F `-` K ou Non
  spécifié.
* Liste déroulante : Prévisions Météo jusqu'à jours : 1; choisissez une
  valeur entre 1 et 3 (1 jours par défaut)
* Liste déroulante : Langue de réponse de l'API : English, en; Vous pouvez choisir la langue du texte des conditions météorologiques.
* Pour effectuer les actions suivantes, activer ou désactiver les cases à
  cocher suivantes :
* Copier le Bulletin météo et les prévisions météo, ainsi que les détails de
  la ville dans le presse-papiers; case à cocher non cochée (par défaut)
* Activer les effets sonores (seulement pour les conditions météo en cours);
  cette case à cocher vous permet également de gérer l'installation des
  effets sonores; si les effets sonores sont installés et que la case à
  cocher est activée, la touche F5 et les paramètres de volume deviennent
  disponibles.
* Une case à cocher supplémentaire sera également disponible : "N'utiliser
  que des effets météo".
* Vous pouvez modifier le volume général ou modifier le dernier effet sonore
  entendu et filtrer les autres sons de votre environnement. Cette case à
  cocher est non cochée par défaut.
* N'utiliser que des effets météo - Cette option est disponible si les
  effets sonores sont activés; s'il est activé, permet de n'entendre que les
  effets tels que pluie, vent, tonnerre, etc., filtrant tous les effets
  environnementaux. (non cochée par défaut)
* Activer la lecture de l'heure au format 24-heures. - Si cette case à
  cocher est désactivée, l'heure est annoncée au format 12-heures, exemple :
  12 AM - 12 PM. Cette case à cocher est cochée (par défaut)
* Activer le bouton aide dans la fenêtre de paramètres; case à cocher cochée
  (par défaut)
* Lire les informations sur le vent; case à cocher non cochée (par
  défaut). Si activée, vous pouvez également cocher les cases à cocher
  suivantes :
* Ajouter la direction du vent; indique la provenance du vent. Case à cocher
  cochée (par défaut)
* Ajouter la vitesse du vent; indique la vitesse en kilomètres ou milles par
  heure. Case à cocher cochée (par défaut)
* Ajouter la vitesse du vent en mètres par seconde; case à cocher cochée
  (par défaut)
* Ajouter la vitesse rafale de vent\"; case à cocher cochée (par défaut)
* Ajouter la température ressentie; case à cocher cochée (par défaut)
* Lire les informations atmosphériques; case à cocher non cochée (par
  défaut). Si activée, vous pouvez également cocher les cases à cocher
  suivantes :
* Ajouter le taux d'humidité; indique le taux d'humidité. Case à cocher
  cochée (par défaut)
* Ajouter la valeur de visibilité; indique en kilomètres ou milles la
  distance de visibilité. Case à cocher cochée (par défaut)
* Ajouter la valeur de la pression atmosphérique; indique la valeur de la
  pression atmosphérique en millibars ou pouces de mercure. Si cochée,
  ajoute une case à cocher qui vous permet d'indiquer la pression
  atmosphériques en millimètres de mercure. Case à cocher cochée (par
  défaut)
* Ajouter la valeur de nébulosité\"; case à cocher cochée (par défaut)
* Ajouter la valeur de précipitation; case à cocher cochée (par défaut)
* Ajouter la valeur du rayonnement ultraviolet; case à cocher cochée (par défaut)
* Lire les informations astronomiques; indique les heures de lever et de "
"coucher du soleil et les heures de lever et de coucher de la lune. Case à cocher non cochée (par défaut)
* Utiliser la virgule pour séparer les décimales; si activée, utilise la
  virgule pour séparer les décimales, sinon utilise le point. Case à cocher
  non cochée (par défaut)
  * Affiche la sortie dans une fenêtre; si activée, cela affiche les prévisions dans une fenêtre.
  Case à cocher non cochée (par défaut)
* Recherche d'une mise à jour; si activée, alerte en cas de mise à jour de
  l'extension. Case à cocher cochée (par défaut)
* Presser le bouton OK pour confirmer l'action ou le bouton Annuler pour
  l'annuler.
* Si vous avez modifié la liste des villes, en pressant "Annuler", vous
  serez averti et vous pourrez quand-même sauvegarder la liste. Note : Vos
  paramètres seront sauvegardés dans le fichier nommé :
* "Weather.ini" : paramètres de démarrage de Weather Plus.
* "Weather.volumes" : niveaux de volume audio personnalisés, indépendant du
  volume général.
* "Weather.zipcodes" : liste des villes avec leur zip code et leur
  définition.
* "Weather.default": Votre ville par défaut.
* "Weather_searchkey": mots-clés de recherche enregistrées.

---

Remarque:     
Si vous avez installé une version antérieure de Weather Plus, celui-ci peut se mettre à jour seul jusqu'à la version 9.9, cependant, Vous devrez télécharger impérativement  la version 10.1 manuellement  en raison d'un bogue corrigé dans cette dernière version:    
Lien de téléchargement supprimé du fichier readme, le lien de téléchargement pour les futures mises à jour ne sera désormais disponible que dans l'add-on store.    
Mise en garde:    
Si vous n'utilisez pas la mise à jour automatique, vous devez d'abord désinstaller chaque ancienne version de Weather_Plus!    

J'ajoute seulement pour ceux qui ont encore des problèmes, comme déjà suggéré par quelqu'un pour le résoudre:

1. Appuyez sur la touche gauche de Windows+r.
2. Collez la ligne:    
`%appdata%\nvda\`
3. Supprimez le fichier weather.ini.
4. Appuyez sur nvda+ctrl+f3 et reconfigurez l'extension normalement.

# Note importante de l'auteur:

* Sur les écrans sécurisés, WP avec cette version ne vous permettra pas d'ouvrir les boîtes de dialogue des fichiers de quelque nature que ce soit, c'est-à-dire qu'il ne sera pas possible d'importer ni d'exporters la liste des villes, d'installer des effets sonores ou des mises à jour.

[Télécharger l'extension Weather_Plus10.1.nvda-addon par ici: [lien externe]][1]    
Faire menu contextuel et choisir `Enregistrer le lien sous…`    
`weather_plus10.1.nvda-addon`    
puis faire Entrée.    
et enfin le téléchargement commence…    

[1]: https://www.nvda.it/sites/default/files/plugin/weather_plus10.1.nvda-addon

Vous pouvez également télécharger les futures versions de l'extension Weather_Plus [à partir de la page Web en Italien de l'extension dédié à Weather Plus:](http://www.nvda.it/weather-plus)

Une fois que vous êtes situé sur le lien de téléchargement, n'oubliez pas de faire menu contextuel et choisir :    
`Enregistrer le lien sous…`    
puis faire Entrée.
et enfin le téléchargement commence…    

Assurez-vous que l'extension du fichier téléchargé est correcte, sinon    
renommez-le en .nvda-addon.    
Merci    

Pour plus d'informations vous pouvez consulter la documentation pour    
    la version 10.1 depuis le Gestionnaire d'Extensions    
    (dans Gérer les extensions)    
    Chercher le nom de l'extension nommé:    
    Weather_Plus    
    Faire Tab, pour rechercher le bouton Aide, puis appuyer sur celuici,    
    puis la documentation s'ouvre.    

Merci beaucoup à Adriano pour tout le travail effectué    sur l'extension Weather Plus!           

Voilà donc, nous sommes heureux que l'extension Weather Plus pour NVDA soit de nouveau compatible avec NVDA2021.1 et plus! !                
Bien amicalement,              
Rémy (BlindHelp).

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouvel espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---