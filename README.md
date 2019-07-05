3 simple steps to follow:

1) Clone the repository.
2) `npm run dev` si on veut dev, sinon `npm run start`.
3)

![](https://media.giphy.com/media/14kdiJUblbWBXy/giphy.gif)

L'hébergement se fait sur Heroku -> https://heroku.com
Il suffira de vous créer un compte et je vous donnerai les permissions

pour le coté serveur -> https://github.com/greatskate/anoterservice-back

Fonctionalités:

- Naviguer en mode non connecté
- Procéder à une ouverture de compte
- Se connecter, se déconnecter
- Afficher mon profil et le pouvoir le modifier
- Naviguer dans les communeautés/rechercher une communauté
- Poster une annonce sur une communauté
- Créer et administrer une communeauté
- Voir les communautés que j'administre/celles auxquelles je participe
- Voir les annonces que j'ai postées/celles que j'ai conclues.


Points Techniques:
**Technologie utilisée: Anio**

__**Composants**__
_________

*Création:*

Vous pouvez créer de nouveaux composants dans le dossier **composants**
Ce sont de simples fichiers HTML

*Integration*

Pour intégrer un composant utilisé **{% "\<nom du fichier composant>" %}**
  
 **__Objects:__**
 _________
 
 *Creation:*
 
 Créer un object dans le dossier **composants/objects**
 Ce sont de simples fichiers HTML

Vous pouvez rajouter des tags de cette forme : **\[@name]**

*Utilisation:*

Vous pouvez créer votre object en intégrant la fonction **\<nom du fichier>(object)**

*Exemple:*

composants/objects/utilisateur.html

```html
<div>
  <span>[@name]</span>
</div>
```

index.js
```js
utilisateur({name:"Chris"});
```

**__Scripts:__**
_________________

Vous pouvez intégrer des scripts natifs JS dans le dossier **scripts** 
Ils seront intégrés automatiquement

**__CSS:__**
_____________

Vous pouvez intégrer vos feuilles de style CSS dans le dossier **styles** 
Ils seront intégrés automatiquement
