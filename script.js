var nameInput = document.getElementById("name-input");
var petName = document.getElementById("pet-name");
var saveButton = document.getElementById("save-button");
var editButton = document.getElementById("edit-button");
var inputDiv = document.getElementById("input-div");

saveButton.addEventListener("click",function(){
    // get text from nameInput and set it on petName.
    const newName = nameInput.value;
    petName.innerHTML = newName;

    inputDiv.style.height = "0px";
    
    nameInput.style.visibility = "hidden";
    saveButton.style.visibility ="hidden";

    petName.style.visibility = "visible";
    editButton.style.visibility = "visible";
    // Hide nameInput and saveButton. 
    // Show petName and editButton
})

editButton.addEventListener("click", function (){
    // make petName and editButton disappear. 
    // Make nameInput and saveButton appear
    petName.style.visibility = "hidden";
    editButton.style.visibility = "hidden";

    nameInput.style.visibility = "visible";
    saveButton.style.visibility = "visible";
    
    inputDiv.style.height = null;
})


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

const feedIntervalId = setInterval(function() {
    decreaseFullness();
}, 600*intervalConstant);
function decreaseFullness(){
    feedProgress.value = feedProgress.value -(1* decreasingConstant);
    if (feedProgress.value <= 0){
        deadPet();
        clearInterval(feedIntervalId);
    }
}

// when each pet bar gets to zero, use if statement - stop whole app. where value of bar is. console log something. then show alert. 
// create restart button



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

const cuddleIntervalId = setInterval(function() {
    decreaseCuddleness();
}, 1000*intervalConstant);
function decreaseCuddleness(){
    cuddleProgress.value = cuddleProgress.value -(1* decreasingConstant);
    if (cuddleProgress.value<=0){
       deadPet();
        clearInterval(cuddleIntervalId);
    }
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

const playIntervalId = setInterval(function() {
    decreasePlayness();
}, 800*intervalConstant);
function decreasePlayness(){
   playProgress.value = playProgress.value -(1* decreasingConstant);
   if (playProgress.value<=0){
    deadPet();
    clearInterval(playIntervalId);
   }
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

const sleepIntervalId = setInterval(function() {
    decreaseSleep();
}, 550*intervalConstant);
function decreaseSleep(){
   sleepProgress.value = sleepProgress.value -(1* decreasingConstant);
   if (sleepProgress.value<=0){
    deadPet();
    clearInterval(sleepIntervalId);
   }
}

var isDead= false;

function deadPet(){
    if (isDead){
        
    }
    console.log("dead pet function");
    isDead = true;
}

// create save pet function - kill pet - pet image to change
// create function that runs when pet dies, run this function in each if statement where the progress bar is zero