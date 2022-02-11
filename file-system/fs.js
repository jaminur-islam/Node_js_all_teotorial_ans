const fs = require("fs");

/* 
writeFile()
appendFile()
readFile()
rename()
Unlink()
Exists()

sobgulur sathe Sync dile seita asyncronus hoye jabe
writeFileSync()
*/
fs.appendFile("demo1.txt", " ekhon hoyeche 25", (err) => {
  if (err) {
    console.log("Error");
  } else {
    console.log("Successful");
  }
});

// text read korar khetre console.log Buffer hisebe asbe seita ke txt e ante hole [toString() / 'utf-8' utf 2number perameter hisebe dite hbe ]
fs.readFile("demo1.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error");
  } else {
    console.log(data);
  }
});

// file er name change korer jonno eivabe use korte hoy
fs.rename("demo1.txt", "demo2.txt", (err) => {
  if (err) {
    console.log("Error");
  } else {
    console.log("Successful");
  }
});

// file delete korar jonno
fs.unlink("demo3.txt", (err) => {
  if (err) {
    console.log("Errro");
  } else {
    console.log("successful");
  }
});

// file ase ki ne dekhte
fs.exists("demo0", (isExists) => {
  if (isExists) {
    console.log(isExists);
  } else {
    console.log(isExists);
  }
});

// fs.writeFileSync("demo5", "this is demo5");
// fs.appendFileSync("demo5", " my file is goods");
// fs.renameSync("demo5", "demo6");
// fs.unlinkSync("dm.txt");
/* const isExists = fs.existsSync("demo8");
console.log(isExists); */
