# cash

## Installation nécessaire 
  npm i 

## Executer 
  node ./bin/index.js
 
## Ce qu'il fait
Il a besoin de npm afin d'utiliser les fonctions lié à la librairie money. Il a aussi besoin d'une librairie rajoutée qui convertit les abréviations des devises en leur noms entiers.

Si lorsque l'on appelle la fontion index.js on ne met aucun paramètre, alors il convertit, par defaut 1 USD en EUR, JYP, GBP.
Si lorsque l'on appelle la fontion index.js on met des paramètres (nombre d'argent, devise de départ, devise d'arrivée), alors il nous affiche la somme convertit.

Les valeurs converties sont en vertes et ce qui doit être convertit est en gris souligné. (utilisation de la librairie npm chalk et ora)
