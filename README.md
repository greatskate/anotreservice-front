3 simple steps to follow:

1) Clone the repository.
2) `npm run dev` si on veut dev, sinon `npm run start`.
3)

![](https://media.giphy.com/media/14kdiJUblbWBXy/giphy.gif)

L'hebergement se fait sur Heroku -> https://heroku.com
Il suffira de vous creez un compte et je vous donnerai les permissions

Points Techniques:
**Technologie utilisé: Anio**

Composants
_________

*Creation:*

Vous pouvez créer de nouveaux composants dans le dossier **composants**
Ce sont de simples fichiers HTML

*Integration*

Pour integrer un composant utilisé **{% "\<nom du fichier composant>" %}**
  
 Objects:
 _________
 
 *Creation:*
 
 Créer un object dans le dossier **composants/objects**
 Ce sont de simple fichiers HTML

Vous pouvez rajouter des tags de cette forme : **\[@name]**

*Utilisation:*

Vous pouvez créez votre object en intégrant la fonction **\<nom du fichier>(object)**

*Exemple:*

composants/objects/utilisateur.html

```
<div>
  <span>[@name]</span>
</div>
```

index.js
```
utilisateur({name:"Chris"});
```
