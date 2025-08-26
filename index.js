function makeSound(key){
    switch(key){
        case "w": 
        var kick = new Audio("./sounds/kick.mp3");
        kick.play();
        break;

        case "a": 
        var stand = new Audio("./sounds/stand.mp3");
        stand.play();
        break;

        case "s": 
        var tom1 = new Audio("./sounds/tom1.mp3");
        tom1.play();
        break;

        case "d": 
        var tom2 = new Audio("./sounds/tom2.mp3");
        tom2.play();
        break;

        case "f": 
        var tom3 = new Audio("./sounds/tom3.mp3");
        tom3.play();
        break;

        case "g": 
        var rideCymbal = new Audio("./sounds/ride.mp3");
        rideCymbal.play();
        break;

        case "h": 
        var crashCymbal = new Audio("./sounds/crash.mp3");
        crashCymbal.play();
        break;

        default: console.log(buttonHTML);

    }
}


for(var i=0; i<7;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonHTML = this.innerHTML;
        makeSound(buttonHTML);
        pressedAnimation(buttonHTML);
    } );
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    pressedAnimation(event.key);
})

function pressedAnimation(key){
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}