(function(){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i = 0; i < names.length; i++) {

    var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }

  names.map(name => {
    if(name.charAt(0).toLowerCase() == 'j'){
      console.log(byeSpeaker.speakSimple(name));
    } else {
      console.log(helloSpeaker.speakSimple(name));
    }
  })
})();
