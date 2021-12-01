var p = document.getElementById("text");
var textList = [
    "Program language",
    "Open source",
    "Property",
    "Procedural language",
    "Encryption",
    "Computer Hardware Maintenance",
    "Database Administrator system"
];

var checkText = [];
checkText = textList[0].split('');

co

p.textContent = textList[0];

document.addEventListener('keydown', keyDown);
 function keyDown(e) {
     console.log(e.key);

 }