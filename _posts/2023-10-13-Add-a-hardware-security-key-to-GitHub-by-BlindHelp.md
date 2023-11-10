---
title: Ajouter une clé de sécurité matérielle à GitHub par BlindHelp
permalink: "/Add-a-hardware-security-key-to-GitHub-by-BlindHelp/"
layout: post
author: BlindHelp
---

<footer>Publié le Vendredi 13 Octobre 2023</footer>


Coucou mes amis du blog de BlindHelp!    
Vous avez certainement déjà entendu parler de double authentification (ou 2FA, pour 2 Factor Authentication), et nous allons vous expliquer ici en quoi ça consiste et ce que ça peut vous apporter.    

Tout d'abord, qu'est-ce que la double authentification ? Il s'agit d'une vérification en 2 étapes de l'identité de la personne qui essaye de se connecter à un système informatique. En complément du mot de passe habituel, un code est généralement demandé à l'utilisateur, et celui-ci peut-être soit reçu par mail ou SMS, ou bien généré aléatoirement par une application gérant le protocole TOTP (Time-base One-Time Password). En français, cela signifie : "Mot de passe à usage unique basé sur le temps". Si ce code n'est pas correct, l'authentification échoue même si le mot de passe renseigné à la première étape est correct.    

Il existe également le MFA, Multi-Factor Authentication, qui combine plusieurs méthodes d'authentification pour certifier que l'utilisateur est légitime.    

Prenez l'habitude d'activer la double authentification sur tous les sites où vous le pouvez, cela ne pourra que vous aider à protéger vos comptes et données personnelles.    

## Déballage et présentation de la YubiKey 5 NFC ##

La YubiKey 5 NFC a été livrée en quelques jours seulement, dans une enveloppe cartonnée au logo de la marque. La clé USB est emballée dans une petite pochette scellée.    

[Voir le produit YubiKey 5 NFC sur le site officiel de Yubico](https://amzn.to/2YLjzUE?ref=domopi.eu)

Comme écrit sur le carton, vous êtes invités à vous rendre sur la page de démarrage de Yubico.    

[Get started with YubiKey 5 Series    
Learn how you can set up your YubiKey 5 Series security key. Get started using your YubiKey 5 to protect your favorite services today!    
Yubico](https://www.yubico.com/fr/setup/yubikey-5-series/?ref=domopi.eu)

Pour les personnes voyantes :    

Vous trouverez sur cette même page une vidéo de présentation et les liens vers les procédures d'activation et configuration pour un grand nombre de sites Internet, de Facebook à GitHub en passant par Google ou Coinbase.    

La YubiKey 5 NFC est petite, ne mesurant que 45mm, et est très légère avec seulement 3 grammes. De couleur noire, elle dispose d'un orifice pour la glisser sur un porte-clés. La partie qui se remarque est le rond doré au centre, avec le igrèque "Y" de YubiKey, un bouton sensitif qui vous permettra de vous authentifier en le touchant. Comme indiqué plus haut, il s'agit de la version NFC, ce qui vous permettra de l'utiliser avec un smartphone disposant de cette technologie. La clé est vendue par Yubico comme étant résistante à l'eau et aux chocs et pourra donc vous accompagner dans tous vos déplacements sans crainte de l'abîmer.    

Cela dit, je viens d'ajouter ma clé USB de sécurité Yubico YubiKey 5 NFC sur gitHub avec succès avec l'aide des yeux 👁 de ma femme, puisque je suis aveugle. 🧑‍🦯

Lors de sa première insertion dans la prise USB, Windows détecte cette clé de sécurité.

Une fois ceci terminé, suivez la procédure suivante :

# Ajouter une clé de sécurité matérielle à GitHub #

* Se rendre sur la page :    
<https://github.com/settings/security#two-factor-summary>    
Se connecter si nécessaire.
* Utiliser le chiffre 3 pour se positionner sur le titre :    
```
Two-factor methods
```    
* Descendre avec la flèche bas jusqu'à entendre :    
```
Security keys 
Security keys are hardware devices that can be used as your second factor of authentication.
Edit bouton
```    
* Presser sur le bouton Edit.    
Apparaît alors le bouton :    
```
Register new security key  
```    
Presser entrée dessus.    
* On entend alors :    
```
Enter a nickname for this security key édition obligatoire entrée invalide Autocomplétion vide
Tapez un petit nom de votre choix, le nom de la clé comme YubiKey par exemple.    
```    
Après avoir entré le nickname et validé sur le bbouton Add, alors sur cette nouvelle page qui s'ouvre dans notre navigateur Web (pour moi c'est Google Chrome) vous êtes invité à entrer un code PIN, donc, il faudra saisir le code PIN dans les deux champs d'édition prévus à cet effet.    

Dans le premier champ d'édition copiez le code PIN  et recopiez celui-ci dans le deuxième champ d'édition de confirmation pour valider la configuration.    

Cela doit être fait le plus rapidement possible, sinon cela nous donnera un message d'erreur et nous devrons appuyer sur un bouton pour réessayer.    

De nombreux services suggèrent ou exigent l'utilisation d'un code PIN. Il est recommandé de configurer un code PIN avant d'ajouter des services à votre YubiKey. La meilleure façon de procéder est d'utiliser YubiKey Manager.    

Gérez les codes PIN, configurez les fonctionnalités FIDO2 (Fast Identity Online), OTP et PIV, consultez la version du firmware et plus encore. Fonctionne avec n'importe quelle YubiKey actuellement prise en charge.    

Vous pouvez télécharger YubiKey Manager en cliquant sur le lien suivant :    

<https://www.yubico.com/support/download/yubikey-manager/>

Source :    
[YubiKey Software Downloads / Yubico](https://www.yubico.com/support/download/)

Sur cette page vous trouverez d'autres logiciels à télécharger utiles pour votre clé de sécurité YoubiKey !

Une fois téléchargé et installé, il ne reste plus qu'à brancher la YubiKey sur un port USB de l'ordinateur et à démarrer l'application.

## Configuration du PIN YubiKey ##

Dans cette partie, nous détaillerons le processus de configuration du code PIN pour une YubiKey (ici la YubiKey 5 NFC).

À savoir que par défaut le code PIN est "123456", Pour moi, ce code PIN est trop simple pour obtenir une bonne sécurité sur internet et ne permet pas de bien sécuriser les accès Web, c'est mon avis personnelle. 😔

Pour configurer le PIN de la YubiKey, il faut la connecter et ouvrir l'application YubiKey Manager.

```
interface yubikey manager
onglet yubikey manager
Dans l'interface, sélectionner «PIV » dans l'onglet Applications.
Sélectionner ensuite « Configure PINs ».
Puis « Change PIN ».
ecran configuration PIN
ecran change PIN
Cocher ensuite la case "Use default" puis remplir les deux champs du dessous avec le nouveau code PIN.
Cocher ensuite la case "Use default" puis remplir les deux champs du dessous avec le nouveau code PIN.
```    
Important : Le code PIN de la YubiKey doit faire entre 6 et 8 caractères alphanumériques.

💡 Le code PIN n'est pas restreint aux chiffres, il peut contenir des lettres et caractères spéciaux.

🗒 Petite astuce :    

Puisque je n'ai pas utilisé cette application YubiKey Manager comme je ne sais pas s'il est accessible ou non avec notre lecteur d'écran NVDA, j'ai préféré créer mon propre code PIN manuellement. 😏

Pour cela gardez cette nouvelle page de votre navigateur Web ouverte (pour moi c'est Google Chrome) et continuez avec les étapes suivantes.

Nous utiliserons le Bloc-notes de Windows afin de saisir le code PIN.

Vous pouvez enregistrer ce fichier .txt contenant le code PIN que vous avez créé dans un endroit sûr de votre ordinateur après avoir terminé la configuration de la clé de sécurité matérielle "YoubiKey" à GitHub

Ensuite nous allons sélectionner toute cette ligne et la copier avec Ctrl+C puis la coller avec Ctrl+V dans les deux champs d'édition prévu à cet effet dans la nouvelle page de notre navigateur Web (pour moi c'est Google Chrome) que nous avons laissée ouverte précédemment.

Cela fait, vous devez appuyer sur le bouton qui vous sera proposé après avoir rempli les deux champs d'édition prévu à cet effet avec le code PIN et puis Windows annonce qu'il configure la clé de sécurité puis qu'elle a été configurée.    Il faut donc attendre cette confirmation.

Donc, on entend plusieurs choses jusqu'à ce qu'on vous demande de toucher la clé, celle-ci est munie d'un bouton sensitif.

Pour les personnes voyantes : Attendez que votre YubiKey commence à clignoter, puis appuyez sur le bouton sensitif ou le bord doré.

A partir de là,  il faut parcourir le texte affiché avec flèche bas.

On vous demande de vous connecter  avec le deuxième facteur déjà configuré.

Nous devrons nous authentifier sur GitHub (j'ai utilisé mon mot de passe habituel), car j'ai vu la possibilité d'entrer le mot de passe habituel via le bouton situé plus bas.    
* ```
Use your password
```    
c'est un bouton    

C'est le moyen le plus simple après la clé de sécurité en tout cas pour moi. 😏

Ensuite, l'ajout de la clé de sécurité est terminée. :)

Ensuite, nous verrons de nouvelles informations lié à l'intégration de cette nouvelle clé de sécurité sur la page:    
[GitHub - Account security](https://github.com/settings/security#webauthn)

Rechercher la partie :    
```
Security keys
Configured
1 key
Security keys are hardware devices that can be used as your second factor of authentication.
bouton  Hide
YubiKey — registered on  Oct 12, 2023
lien  Upgrade `YubiKey` to passkey
bouton  Delete `YubiKey` security key
séparateur 
```    
Bien entendu, le nom de la clé de sécurité est à titre d'exemple, ledit nom et cette date d'enregistrement sur GitHub peuvent varier en fonction du nom que vous avez donné à ladite clé de sécurité et de la date à laquelle vous l'avez fait.

Vous recevrez également un e-mail de confirmation de la part de GitHub comme sujet.    
```
GitHub :   A security key was added to your account, suivi de la date de réception du courriel.
```    
C'est tout ! Vous avez maintenant ajouté une clé de sécurité de Yubico à votre compte GitHub. Vous pouvez désormais vous connecter facilement à votre compte GitHub, protégé en toute sécurité par une authentification à deux facteurs.    Pour vous connecter, il vous suffit de saisir votre nom d'utilisateur et votre mot de passe, puis d'appuyer sur le bouton ou le bord doré de votre YubiKey.    

Enjoy ! ✌

# À titre d'information #

Pour en savoir plus sur la clé de sécurité YubiKey  vous pouvez visiter le lien ci-dessous  à partir du site officiel de Yubico :

[La clé YubiKey - Yubico](https://www.yubico.com/la-cle-yubikey/?lang=fr)

Voilà,    
Sur ceux je vous souhaite une bonne  installation et configuration de la YubiKey 5 NFC !    

Et je tiens à remercier encore à mon ami Pierre-Louis pour  m'avoir aidé comme d'habitude en coulisse ! (handshake)    
@+    
BlindHelp    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouvel espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---