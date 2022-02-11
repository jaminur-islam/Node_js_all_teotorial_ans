/* const os = require("os");
console.log(os.userInfo());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.totalmem());
console.log(os.freemem()); */

// zodi os theke ami kichu jinis use korte cai tahole poro os ke require korar kono manei hoy na er theke ami destructure kore niye aste pari
/* const { userInfo, homedir } = require("os");
console.log(userInfo());
console.log(homedir()); */

// ze folder e kaj korchi ta dekhte
// console.log(__dirname);
// ze file e korchi ta dekhte
// console.log(__filename);

//======================Start Path===============================//
const path = require("path");
/*
const dir2 = __dirname;
console.log(dir2);
console.log(path.basename(dir2));
console.log(path.dirname(dir2));
 */
// Path zevabe join dite hoy
const joinPath = path.join(__dirname + "/../views/news/tv");
console.log(joinPath);
