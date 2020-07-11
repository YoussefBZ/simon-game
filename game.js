var userClickedPattern = [];
var firstTime = true;
var level = 0;
var gamePatt = [];
var buttonColors = ["red", "blue", "yellow", "green"];

function playSound(sound) {
    soundEff = new Audio("sounds/" + sound + ".mp3");
    soundEff.play()
}
function animatePress(currColor) {
    $("#" + currColor).addClass("pressed");
    setTimeout(() => { $("#" + currColor).removeClass("pressed"); }, 100)
}
function nextSeq() {
    var randNum = Math.floor(Math.random() * 4);
    var randChosenColor = buttonColors[randNum];
    gamePatt.push(randChosenColor);
    $("#" + randChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randChosenColor);
    level++;
    $("#level-title").text("Level " + level);

}
let i = 0;
function checkAnswer(currentLevel) {
    if(JSON.stringify(gamePatt) === JSON.stringify(userClickedPattern) ){
        setTimeout(() => { userClickedPattern = []; nextSeq() }, 500)
        
    } else {
       var promise =  new Promise(r => setTimeout(r, 1000));
       playSound("wrong")

    }
    i++;
}
$(document).keypress(function start() {
    if (firstTime == true) {
        firstTime = false;
        nextSeq();
        $("#level-title").text("Level " + level);
        $(".btn").click(function(){
            var userChosenColour = event.target.id;
            userClickedPattern.push(userChosenColour);
            console.log(userClickedPattern);
            console.log(gamePatt)
            playSound(userChosenColour);
            animatePress(userChosenColour);
            checkAnswer(level)
        });
        
    }

});
