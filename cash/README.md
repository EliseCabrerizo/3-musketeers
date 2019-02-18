# cash

## Installation nécessaire 
 ```sh
❯ cd /path/to/workspace/3-musketeers/cash
❯ npm i
```

## Executer 
  
* Si lorsque l'on appelle la fontion index.js on ne met aucun paramètre, alors il convertit, par defaut 1 USD en EUR, JYP, GBP.
```sh
❯ node bin/index.js
```
* Si lorsque l'on appelle la fontion index.js on met des paramètres (nombre d'argent, devise de départ, devise d'arrivée), alors il nous affiche la somme convertit.

#### Exemple
```sh
❯ node bin/index.js 10 EUR USD
```


 
## Ce qu'il fait : convertir des devises
Il se connecte à internet afin de convertir la somme de la devise initiale en devise demandée.
#### Comment ?
Il a utilise npm pour les fonctions lié à la librairie money (convertir), got(connection à internet pour taux de change). Il a aussi besoin d'une librairie rajoutée qui convertit les abréviations des devises en leur noms entiers.



## Affichage 

Les valeurs converties sont en vertes et ce qui doit être convertit est en gris souligné. (utilisation de la librairie npm chalk et ora)
