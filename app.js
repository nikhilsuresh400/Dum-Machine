
var numberOfButtons = document.querySelectorAll(".drum").length;

for( var i = 0; i < numberOfButtons; i++ ) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var buttonInner = this.innerHTML;

        switch (buttonInner) {
            case '<img src="images/kick.png" alt="Kick Button">Kick':
                var kick = new Audio("sounds/kick.mp3");
                kick.play();
                break;

            case '<img src="images/snare.png" alt="Snare Button">Snare':
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;

            case '<img src="images/cymbal.png" alt="Crash Button">Crash':
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;

            case '<img src="images/tom-1.png" alt="Tom 3 Button">Tom 1':
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;

            case '<img src="images/tom-2.png" alt="Tom 2 Button">Tom 2':
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;

            case '<img src="images/tom-3.png" alt="Tom 3 Button">Tom 3':
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
        
            default:
                break;
        }
    });
}