let name = prompt("Wie ist ihr Name?");
let dateTime = new Date();

dateTime = dateTime.getHours();

if (dateTime >= 6 && dateTime <= 11) {
    alert('Guten Morgen ' + name);
} 
else if (dateTime == 12) {
    alert('Guten Mittag ' + name);
} else if (dateTime >= 12 && dateTime <= 19) {
    alert('Guten Abend ' + name);
} else {
    alert('Gute Nacht ' + name);
}