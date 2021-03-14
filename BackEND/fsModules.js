// here I'm requiring this file to use those methods
const fs = require('fs');




// create folder
fs.mkdirSync("myFolder");
fs.mkdirSync("myParentFolder");

// rename folder
fs.renameSync("myFolder", "myNewFolder")
// move folder
fs.renameSync('./myNewFolder', './myParentFolder/myNewFolder')
// delete folder
// fs.rmdirSync("myNewFolder");


// read file
const theTextThatComputerRead = fs.readFileSync("readThisFile.html", "utf8");
// write file
fs.writeFileSync('writeThisFile.js', theTextThatComputerRead);
// rename file
fs.renameSync('writeThisFile.js','deleteThisFile.js');
// move file
// fs.renameSync('./deleteThisFile.js', './myNewFolder/deleteThisFile.js');
// delete file
// fs.unlinkSync('deleteThisFile.js');


