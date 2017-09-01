# Diacritic-helper

A small node.js module that helps to find strings containing diacritics with regular expressions.
Useful for accentued search in MongoDB.

#### Installation

`$ npm install diacritic-helper`

#### Usage

JS :
```js
var diacriticHelper = require("diacritic-helper");

var toFind = "noel";
var txt = "Vive le Père-Noël !";

// Without diactric-helper
var result1 = txt.replace(new RegExp(toFind,"gi"), "Fouettard")
console.log(result1);

// With diactric-helper
var result2 = txt.replace(new RegExp(diacriticHelper(toFind),"gi"), "Fouettard")
console.log(result2);
```

Console output :
```
Vive le Père-Noël !
Vive le Père-Fouettard !
```

## [MIT Licensed](LICENSE)
