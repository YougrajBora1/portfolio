// Detecting mouse click
// Clicking the Button
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);

    })
}

// Detecting key press
document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});





// Sound making event

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio('DramAssets/sounds/tom-1.mp3')
            audio.play()
            break;
        case "a":
            var audio = new Audio('DramAssets/sounds/tom-2.mp3')
            audio.play()
            break;
        case "s":
            var audio = new Audio('DramAssets/sounds/tom-3.mp3')
            audio.play()
            break;
        case "d":
            var audio = new Audio('DramAssets/sounds/tom-4.mp3')
            audio.play()
            break;
        case "j":
            var audio = new Audio('DramAssets/sounds/snare.mp3')
            audio.play()
            break;
        case "k":
            var audio = new Audio('DramAssets/sounds/crash.mp3')
            audio.play()
            break;
        case "l":
            var audio = new Audio('DramAssets/sounds/kick-bass.mp3')
            audio.play()
            break;
        default:
            console.log(buttonInnerHtml)


    }
}



// Animation 
function buttonAnimation(currentkey) {
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100)
}