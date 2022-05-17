const speech = new webkitSpeechRecognition();
speech.lang = 'ja-JP';
//連続した結果(true)か単一の結果だけをキャプチャするか(false)
speech.continuous = false;


const start_btn = document.getElementById('start_btn');
const end_btn = document.getElementById('end_btn');
const content = document.getElementById('content');

speech.onresult = function (event) {
  speech.stop();
  console.log(event.results[0][0].transcript);
  if (event.results[0].isFinal) {
    var getText = event.results[0][0].transcript
    content.innerHTML += '<div>' + getText + '</div>';
  }
}

speech.onend = () =>
{
  speech.start()
};

start_btn.addEventListener('click', function () {
  speech.start();
});

end_btn.addEventListener('click', function () {
  speech.stop()
});