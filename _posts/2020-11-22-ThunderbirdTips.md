---
title: Astuces en bric-à-brac pour Thunderbird pour nous les miro 
layout: post
author: BlindHelp
---

<footer>Publié le Dimanche 22 Novembre 2020</footer>


Coucou mes amis du blog de BlindHelp!    
Voici à continuation quelques astuces en bric-à-brac pour Thunderbird pour nous les miro .    

Pour une bonne configuration de Thinderbirt, il faut d'abord choisir dans le menu affichage de décocher dans le sous menu disposition, le panneau latéral des dossiers, de cocher l'affichage classique. Il faudra également comprendre que les messages peuvent s'afficher en onglet ou dans une nouvelle fenêtre. Si on opte pour la dernière option, on doit aller dans outils, menus option et choisir dans la liste affichage. Dans ce menu, avec la touche tab, on trouve après l'onglet avancer on a des choix d'affichage. on peut choisir d'ouvrir les messages dans une nouvelle fenêtre. On valide par ok.    
Note: Pas la peine de toucher au panneau d'affichage des messages. Au contraire, même, il vaudra mieux qu'il soit coché si on veut utiliser un script Jaws ou une extension pour NVDA...    
Si vous voulez en savoir plus sur une configuration appropriée pour le client de messagerie Thunderbird, veuillez consulter  les incontournables fiches    de Daniel Poiraud pour le lecteur d'écran Jaws OU NVDA en consultant les liens respectifs situés ci-dessous.    

La première astuce  est pour éviter les MAJ du logiciel Thunderbird, la  deuxième astuce est pour se placez automatiquement sur "dossier entrant" et non sur le dossier laissé ouvert à la fermeture puis la troisième astuce est pour accéder dans l'arborescence des dossiers pour faire son choix de la destination des messages lors de la création des règles de filtrages.     

Et enfin, je vous donne un bonus afin que vous puissiez configurer votre compte gmail avec le logiciel de messagerie Thunderbird.     

# Quelques paramètrages dans Thunderbird: #

1- Est-ce que les mises à jour se font automatiquement, si oui, y a-t'il un moyen de les bloquer?    
Aller sur Outils, puis Options    
aller sur Avancé 8 sur 8 il dis cocher    
faire tab puis aller sur Mise à jour  4 sur 5.    
tab    
chercher;    
Installer automatiquement les mises à jour (recommandé pour votre sécurité) il est coché par défaut.    
décendre jusqu'à    
Ne jamais vérifier les mises à jour (déconseillé, cela représente un risque de sécurité) il doit être coché.    
Puis tab jusqu'à OK     

2- Est-il possible qu'à chaque ouverture du programme, on se place automatiquement sur "dossier entrant" et non sur le dossier laissé ouvert à la fermeture.     
Oui. il suffit de le définir comme dossier de démarrage. quand on se trouve dans l'arborescence, il suffit de faire application sur courier entrant puis valider l'option dossier de démarrage, et quand on ouvrira thunderbird, il s'ouvrira sur le dossier positionné comme dossié de démarrage :)    
Merci à Jerem. 😉    

3- Dans les filtres de messages, comment fait-on pour accéder dans l'arborescence des dossiers pour faire son choix de la destination des messages?    
Tu crées ton dossier où tu veux, par Fichier / Nouveau. Ce n'est qu'un mix entre une boîte Windows et une boîte à la Outlook Express, tu prends garde au champ: créer comme sous-dossier de", et ça devrait rouler sans complication.    
Ouvre le menu Outils>Filtres de message (Alt-o-t);    
tabule vers le 2e bouton Nouveau et valide;    
là, peu de choses à dire si ce n'est nommer le filtre, et sélectionner les diverses options qui semblent répondre à tes attentes;    
arrivé à la validation des conditions, sélectionner celle qui te convient (moi, c'est la 1re);    
2 tabulations plus loin, sélectionne le type de condition (Sujet, De,etc.);    
1 tabulation plus loin, sélectionne le contenu de la condition que tu taperas dans le champ d'édition situé 1 tabulation plus loin;    
2 tabulations plus loin, en sautant à pieds joints par-dessus Plus,     
sélectionne l'action que tu veux: par exemple, "Déplacer vers";    
1 tabulation plus loin, sélectionne le dossier, c'est là que certains buttent parfois: descends avec Flb jusqu'au compte voulu, une fois arrivé, frappe Alt+Flb pour le sélectionner, puis Fld pour l'ouvrir, Flb pour en parcourir le contenu et finalement valide-le;    
tabule jusqu'à OK.    
De retour dans la page d'accueil du dialogue, tu trouveras ton filtre.     
Lorsque tu en auras plusieurs, tu pourras décider de l'ordre de leur exécution avec les boutons "Descendre" et "Monter".    
Diverses tabulations te permettront d'explorer ce dialogue-là et, surtout, de valider sur Exécuter, sans quoi ton filtre sera inutile.      
Voilà, je ne peux faire mieux.       
Merci à mes amis J.-F et Richard de Winaide. 😉    

# Configuration du logiciel de messagerie Thunderbird avec une compte  gmail #

Voir cette page pour plus d'informations:    
[Thunderbird et Gmail | Assistance de Thunderbird](https://support.mozilla.org/fr/kb/thunderbird-et-gmail)    


# À titre d'exemple, un compte Gmail se configure comme suit: #

* Serveur: smtp.gmail.com (ou smtp.googlemail.com)     
* Port : 465 (ou 587)    
* Méthode d'authentification : Mot de passe normal    
* Nom d'utilisateur : votre identifiant gmail avec ou sans l'extension "@gmail.com".    
	* Par exemple si votre adresse électronique est "tristan.durand@gmail.com", votre nom d'utilisateur est "tristan.durand" ou "tristan.durand@gmail.com". 
* Si vous utilisez "Google Apps pour votre Domaine", saisissez votre adresse électronique complète (par exemple, "tristan.durand@mondomaine.com"). 
* Sécurité de la connexion : SSL/TLS (ou STARTTLS) 

Après avoir enregistré les informations concernant le nouveau serveur sortant, sélectionnez votre nouveau compte de courrier dans la liste. Dans la zone Serveur sortant (SMTP), choisissez le serveur SMTP dans la liste déroulante. Les autres éléments de cette page ont été créés automatiquement lors de l'entrée des détails du compte - modifiez-les et complétez-les si nécessaire.    
Depuis le menu "Paramètres des comptes" cliquez sur l'option Paramètres serveur sous votre nouveau compte. Assurez-vous que les entrées des différents champs correspondent bien aux informations données par votre fournisseur de messagerie.    
Exemple pour Gmail (serveur POP)    
`pop 995`    
Après avoir enregistré ces modifications, vous devriez pouvoir envoyer et recevoir des messages électroniques. Les autres informations relatives à la configuration du compte sont optionnelles et peuvent se faire de manière intuitive.    

Voir cette page pour plus d'informations:    
[Configurer un compte manuellement | Assistance de Thunderbird](https://support.mozilla.org/fr/kb/configurer-un-compte-manuellement)    

# Fiches de Daniel Poiraud pour le paramètrage du logiciel de messagerie Thunderbird  avec JAWS/NVDA #

Suivez le lien ci-dessous pour consulter les fiches de Daniel Poiraud pour le  logiciel de messagerie Thunderbird:    

# Pour le lecteur d'écran JAWS: #

<http://angouleme.avh.asso.fr/fichesinfo/fiches_jaws/thunderbird/index.htm>

# Pour le lecteur d'écran NVDA: #

<http://angouleme.avh.asso.fr/fichesinfo/fiches_nvda/thunderbird/index.htm>

Merci à Daniel Poiraud. 😉    

# Autres liens utiles à consulter: #

# Page Web officielle en français pour le logiciel de messagerie Thunderbird: #

<https://www.mozilla.org/fr/thunderbird/>

---

Profitez de ces quelques trucs et astuces pour Thunderbird pour nous les miro! 😼    
Voilà,    
Bonne utilisation  du logiciel de messagerie Thunderbird! :)    
@+    
BlindHelp!    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouvel espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---