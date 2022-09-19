const decreasingConstant= 10; // default is 1
const intervalConstant = 1; // default is 60

var feedProgress = document.getElementById("feed-progress");
var readyToFeed = true;
var feedButton = document.getElementById("feed-button");
feedButton.addEventListener("click", feedPet);
function feedPet(){
    if(readyToFeed) {
        feedProgress.value = feedProgress.value + 15;
        readyToFeed = false;
        setTimeout(function() { readyToFeed = true; }, 5000);
    }
}

const feedInterval = setInterval(function() {
    decreaseFullness();
}, 1000*intervalConstant);
function decreaseFullness(){
    feedProgress.value = feedProgress.value -(1* decreasingConstant);
    if (feedProgress.value <= 0){
        //alert("your pet has died");
    }
}




var cuddleProgress = document.getElementById("cuddle-progress");
var readyToCuddle = true;
var cuddleButton = document.getElementById("cuddle-button");
cuddleButton.addEventListener("click", cuddlePet);
function cuddlePet(){
    if (readyToCuddle){
        cuddleProgress.value = cuddleProgress.value + 15;
        readyToCuddle = false;
        setTimeout(function(){ readyToCuddle = true;}, 5000);
    }

}

const cuddleInterval = setInterval(function() {
    decreaseCuddleness();
}, 1000*intervalConstant);
function decreaseCuddleness(){
    cuddleProgress.value = cuddleProgress.value -(1* decreasingConstant);
}




var playProgress = document.getElementById("play-progress");
var readyToPlay = true;
var playButton = document.getElementById("play-button");
playButton.addEventListener("click", playPet);
function playPet(){
    if (readyToPlay){
       playProgress.value = playProgress.value + 15;
        readyToPlay = false;
        setTimeout(function(){ readyToPlay = true;}, 5000);
    }

}

const playInterval = setInterval(function() {
    decreasePlayness();
}, 1000*intervalConstant);
function decreasePlayness(){
   playProgress.value = playProgress.value -(1* decreasingConstant);
}




var sleepProgress = document.getElementById("sleep-progress");
var readyToSleep = true;
var sleepButton = document.getElementById("sleep-button");
sleepButton.addEventListener("click", sleepPet);
function sleepPet(){
    if (readyToSleep){
       sleepProgress.value = sleepProgress.value + 15;
        readyToSleep = false;
        setTimeout(function(){ readyToSleep = true;}, 5000);
    }

}

const sleepInterval = setInterval(function() {
    decreaseSleep();
}, 1000*intervalConstant);
function decreaseSleep(){
   sleepProgress.value = sleepProgress.value -(1* decreasingConstant);
}

// create save pet function
// kill pet
// name pet
// pet image to change
