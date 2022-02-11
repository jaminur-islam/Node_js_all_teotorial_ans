// module 3 dhoroner hoy
/* 
1. local module (ze gulu amara nijera toiri kori)
2. Built in modules (ze gulu node e build in thake)
3. Extranal module (ze gulu ke manage kore npm)
*/
// Random fruits name;
const getRandomFruitsName = require("random-fruits-name");
console.log(getRandomFruitsName("en"));

// world e maxam jaygay paoya zay emon fruits dekhte
console.log(getRandomFruitsName("en", { maxWords: 1 }));

// Random movie name
var moviesNames = require("movies-names");
const allmovie = moviesNames.all;
console.log(moviesNames.random(5));
