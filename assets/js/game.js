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
/* check if player guess is correct */
    if (playersGuess === secretgameNumber) {
        $(".result").text("Woooww! you guessed the number you win the game.");
        gameisOver = true;
    } else {
        attempts--;
        $('#attempts').text(`Attempts: ${attempts}`);
        if (attempts === 0) {
            $(".result").text("Game Over! try again");
            gameisOver = true;
        } else if (playersGuess < secretgameNumber) {
            $(".result").text("Try guess higher! try again.");
        } else {
            $(".result").text("Try guess lower! try again.");
        }               
    }
    });
});