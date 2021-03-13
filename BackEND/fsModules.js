// here I'm requiring this file to use those methods
const fs = require('fs');




// create folder
fs.mkdirSync("myFolder");
// rename folder
fs.renameSync("myFolder", "myNewFolder")
// delete folder
// fs.rmdirSync("myNewFolder");



// read file
const theTextThatComputerRead = fs.readFileSync("readThisFile.html", "utf8");
// write file
fs.writeFileSync('writeThisFile.js', theTextThatComputerRead);
// rename file
fs.renameSync('writeThisFile.js','deleteThisFile.js');
// delete file
// fs.unlinkSync('deleteThisFile.js');
// move file
fs.renameSync('./deleteThisFile.js', './myNewFolder/deleteThisFile.js');


