$(document).ready(function() {
    /* create a random numbers between 1 and 100 */
 let secretgameNumber = Math.floor(Math.random() * 100) + 1;
 /* tries number */
 let attempts = 5;
 /* game is over or not */
 let gameisOver = false;
 /* show the attempts number */
    $('#attempts').text(`Attempts: ${attempts}`);
    /* when button is clicked */
    $("#checkBtn").click(function() {
     if (gameisOver) return; 
      /* get player guess */
     let playersGuess = Number($("#guessInput").val()); 
     /* check if player guess is valid */
        if (playersGuess < 1 || playersGuess > 100 || isNaN(playersGuess)) {
            $(".result").text("Enter your number between 1 and 100.");
            return;
        }
        