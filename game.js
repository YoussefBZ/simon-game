var userClickedPattern = [];
var firstTime = true;
var level = 0;
var gamePatt = [];
var buttonColors = ["red", "blue", "yellow", "green"];
function checkAnswer(currentLevel) {
    if(userClickedPattern == gamePatt ){
        console.log("success ! ")
    }else {
        console.log("Wrong :(")
    }
}
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
