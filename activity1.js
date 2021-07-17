 var score = 0;

 function updateScore()
 {
     score = score + 1000;
     document.getElementById("score").innerHTML = "score: " + score;
 }

 function saveScore()
 {
     localStorage.setItem("score", score);
 }

 function nextPage()
 {
     window.location = "activity_2.html";
 }
