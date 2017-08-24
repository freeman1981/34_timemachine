var TIMEOUT_IN_SECS = 5 * 60;
var ALERT_INTERVAL = 30;
var TEMPLATE = '<h1><span id="timer-minutes">00</span>:<span id="timer-seconds">00</span></h1>';

// adds HTML tag to current page
var timerContainer = document.createElement('div');
timerContainer.setAttribute("style",
    "left: 10px;" +
    "top: 10px;" +
    "position: fixed;" +
    "z-index: 1000;" +
    "opacity: 0.8;" +
    "width: auto;" +
    "height: auto;" +
    "padding: 3px;" +
    "margin: 3px;" +
    "background-color: #777;" +
    "color: orange;" +
    "border: black solid 2px;" +
    "border: black solid 2px;" +
    "font-size: smaller;" +
    "border-radius: 10px;" +
    "line-height: 0;"
);
var bodyTag = document.body;
bodyTag.insertBefore(timerContainer, bodyTag.firstChild);
timerContainer.innerHTML = TEMPLATE;

function getTimestampInSecs(){
  var timestampInMilliseconds = new Date().getTime();
  return Math.round(timestampInMilliseconds/1000)
}

function padZero(number){
  return ("00" + String(number)).slice(-2);
}

var timestampOnStart = getTimestampInSecs();

function displayTimer(){
  var currentTimestamp = getTimestampInSecs();
  var secsGone = currentTimestamp - timestampOnStart;
  var secsLeft = Math.max(TIMEOUT_IN_SECS - secsGone, 0);

  var minutes = Math.floor(secsLeft / 60);
  var seconds = secsLeft - minutes * 60;

  if (secsLeft === 0 && currentTimestamp % ALERT_INTERVAL === 0)  {
        window.alert('Пора закругляться!')
  }

  document.getElementById('timer-minutes').innerHTML = padZero(minutes);
  document.getElementById('timer-seconds').innerHTML = padZero(seconds)
}
setInterval(displayTimer, 300);
