(function(){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  console.log("\n******** Part1 **********");

  for (var i = 0; i < names.length; i++) {

    var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }

  console.log("\n******** Part2 **********");

  var greetingsMaker = function(name){
    if(name.charAt(0).toLowerCase() === 'j'){
      console.log(byeSpeaker.speakSimple(name));
    } else {
      console.log(helloSpeaker.speakSimple(name));
    }
  }

  var mapGreetings = names.map(greetingsMaker)

  console.log("\n******** Part3 (Optional) **********");

  var initialValue = {hello: [], bye: []};
  var reducer = function(accumulator, currentValue){
      accumulator.hello.push(helloSpeaker.speakSimple(currentValue));
      accumulator.bye.push(byeSpeaker.speakSimple(currentValue));

      return accumulator;
  }

  const reduceGreetings = names.reduce(reducer, initialValue);

  for (var i = 0; i < reduceGreetings.hello.length; i++){
    console.log(reduceGreetings.hello[i]);
  }

  for (var i = 0; i < reduceGreetings.bye.length; i++){
    console.log(reduceGreetings.bye[i]);
  }
  
})();
