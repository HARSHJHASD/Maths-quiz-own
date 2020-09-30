var x = 30;
var score = 0;


document.getElementById("startButton").onclick = function() {
  if (x === 30) {
    document.getElementById("value").innerText = "0";
    document.getElementById("startButton").innerText = "Reset";
    // function timer for setting timer from 30 to 1 and game over and timer paused when =0.
    timer();
    nextqns();
  } else if (x !== 30) {
    window.location.reload();
  }
};


// function timer for stopwatch
function timer(){
  x=30;
  var t = setInterval(function() {
    x--;
    document.getElementById("stopwatch").innerText = x;
  }, 1000);
  var delayedwelcomemessage = setTimeout(function() {
    document.getElementById("score").innerText = score;
    document.getElementById("effect").style.visibility = "visible";
    clearInterval(t);
  }, 30000);
}

// function to restart timer


// function for getting next question
function nextqns(){
  document.getElementById("rightans").style.display = "none";
  var m = Math.round(Math.random() * 10);
  var n = Math.round(Math.random() * 10);
  document.getElementById("qns").innerText = m + "*" + n;
  var ans = m * n;
  var o = Math.round((Math.random()) * 3) + 1;
  var op = "option" + o;
  document.getElementById(op).innerText = ans;
  var n = 30;
  while (n > 0) {
    var ot = Math.round((Math.random()) * 3) + 1;
    var opt = "option" + ot;
    if (document.getElementById(opt).innerText == ans) {
      continue;
    } else {
      document.getElementById(opt).innerText = ans + Math.round((Math.random()) * 9) + 1;
    }
    n--;
  }

  document.getElementById("option2").onclick = function() {
    if (document.getElementById("option2").innerText == ans) {
      score++;
      document.getElementById("value").innerText = score;
      document.getElementById("rightans").style.display = "block";
      document.getElementById("tryagain").style.display = "none";
      nextqns();
    } else {
      document.getElementById("tryagain").style.display = "block";
    }
  };

  document.getElementById("option1").onclick = function() {
    if (document.getElementById("option1").innerText == ans) {
      score++;
      document.getElementById("value").innerText = score;
      document.getElementById("rightans").style.display = "block";
      document.getElementById("tryagain").style.display = "none";
      nextqns();
    } else {
      document.getElementById("tryagain").style.display = "block";
    }
  };


  document.getElementById("option3").onclick = function() {
    if (document.getElementById("option3").innerText == ans) {
      score++;
      document.getElementById("value").innerText = score;
      document.getElementById("rightans").style.display = "block";
      document.getElementById("tryagain").style.display = "none";
      nextqns();
    } else {
      document.getElementById("tryagain").style.display = "block";
    }
  };

  document.getElementById("option4").onclick = function() {
    if (document.getElementById("option4").innerText == ans) {
      score++;
      document.getElementById("value").innerText = score;
      document.getElementById("rightans").style.display = "block";
      document.getElementById("tryagain").style.display = "none";
      nextqns();
    } else {
      document.getElementById("tryagain").style.display = "block";
    }
  };
}
