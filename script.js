(function () {
var names = ["Ali", "Javad", "Mina", "Sara", "Iman", "Amir", "Mmd", "Asma", "Bita", "Nili"];
for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}
})();
