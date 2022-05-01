var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

const recognition = new SpeechRecognition();
recognition.lang = 'en-US';

const textField = document.getElementById('test');
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  recognition.start();
  console.log('Ready for a voice command');
});

recognition.onresult = function(event) {
  var command = event.results[0][0].transcript;
  textField.value = command;
  console.log("Command: " + command);
}

recognition.onspeechend = function() {
  recognition.stop();
}
function voiceInputOver(val){
  alert("Voice input is complete");
  alert("Your input is " + val);
}
// recognition.onerror = function(event){
//   console.log('error?');
//   console.log(event);
// }
