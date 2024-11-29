
//detecting button press
var drums = document.querySelectorAll(".drum");

for(var i=0;i<drums.length;i++){
    drums[i].addEventListener("click",function(){
        //button object that triggered click
        makeSound(this.innerHTML);
        animateButton(this.innerHTML);
    })
}

//detecting keyboard press;
document.addEventListener("keypress",function(event){
    // console.log(event.key);
    makeSound(event.key);
    animateButton(event.key);
});

function makeSound(key){
    var x = key;
    if(x == 'w'){
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
    }else if(x == 'a'){
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
    }else if(x == 's'){
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
    }else if(x == 'd'){
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }else if(x == 'j'){
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    }
    else if(x == 'k'){
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    }else if(x == 'l'){
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
    }
}

function animateButton(b){
    var activeButton = document.querySelector("."+b);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed");},100);
    
}