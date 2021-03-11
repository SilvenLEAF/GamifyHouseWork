// here I'm requiring this file to use those methods
const fs = require('fs');


// read file
const theTextThatComputerRead = fs.readFileSync("readThisFile.html", "utf8");
// write file
fs.writeFileSync('writeThisFile.js', theTextThatComputerRead)
// delete file
fs.unlinkSync('writeThisFile.js')


// create folder
fs.mkdirSync("myFolder");
// rename folder
fs.renameSync("myFolder", "myNewFolder")
// delete folder
fs.rmdirSync("myNewFolder");

