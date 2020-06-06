const Pigeon = document.getElementById("pigeonOnRoof");
var topDefault = 14;
var leftDefault = 16;
var top1 = 14;
var left1 = 16;
var top2 = 0;
var left2 = 0;
var movingPigeon = setInterval(walkingPigeon, 2500);

var secretNumber = Math.floor(Math.random() * 101);
const estimation = document.getElementById("cloud");

const sun = document.getElementById("sun");
sun.addEventListener("click", flyingPigeon);

const restart = document.getElementById("restart");
restart.addEventListener("click", reset);
restart.style.visibility = "hidden";

const gameNumberLimit = document.getElementById("rangeSlider");
var gameNumber = gameNumberLimit.value;


function walkingPigeon(){    
    document.getElementById("restart").style.visibility = "hidden";
    if (Math.floor(Math.random() * 2) == 0){
        angle = Math.floor(Math.random() * 91);
    }
    else{
        angle = -1 * Math.floor(Math.random() * 91);
    }
    left2 = leftDefault + Math.round(16 * Math.sin(angle*(Math.PI/180)));
    top2 =  topDefault - Math.round(16 * Math.cos(angle*(Math.PI/180)));
    Pigeon.animate([{left: left1 + "vw"}, {left: left2 + "vw"}],{duration: 2000,direction: "normal"});
    Pigeon.animate([{top: top1 + "vw"}, {top: top2 + "vw"}],{duration: 2000, direction: "normal"});
    Pigeon.style.top = top2 + "vw";
    Pigeon.style.left = left2 + "vw";
    top1 = top2;
    left1 = left2;
}

function flyingPigeon(){
    if (gameNumber != 0) {
        gameNumberLimit.value = gameNumber;
        if (estimation.value == secretNumber){
            clearInterval(movingPigeon);
            estimation.style.visibility = "hidden";
            document.getElementById("blackCloud").style.visibility = "hidden";
            left2 = 60;
            top2 = -15;
            document.getElementById("pigeonOnRoofImage").src = "../assets/img/pigeonFlying.png"
            Pigeon.animate([{left: left1 + "vw"}, {left: left2 + "vw"}],{duration: 6000,direction: "normal"});
            Pigeon.animate([{top: top1 + "vw"}, {top: top2 + "vw"}],{duration: 6000, direction: "normal"});
            Pigeon.animate([{opacity: "1"}, {opacity: "0"}],{duration: 6000, direction: "normal"});
            Pigeon.animate([{width: "10%"}, {width: "5%"}],{duration: 6000, direction: "normal"});
            Pigeon.style.top = top2 + "vw";
            Pigeon.style.left = left2 + "vw";
            Pigeon.style.opacity = "0";
            sun.disabled = "true";
            document.getElementById("restart").style.visibility = "visible";
        }
        else{
            if (estimation.value > secretNumber){
                sun.animate([{backgroundColor: "rgb(255, 255, 255)"}, {backgroundColor: "rgb(255, 153, 0)"}],{duration: 2000});
            }
            else{
                sun.animate([{color: "rgb(255, 153, 0)"}, {color: "rgb(255, 255, 255"}],{duration: 2000});
            }
        }
        gameNumber--;
    }
    else {
        sun.removeEventListener("click", flyingPigeon);
        sun.disabled = "true";
    }
}

function reset(){
    topDefault = 14;
    leftDefault = 16;
    top1 = 14;
    left1 = 16;
    top2 = 0;
    left2 = 0;
    document.getElementById("pigeonOnRoofImage").src = "../assets/img/pigeonWalking.png"
    Pigeon.style.opacity = "1";
    Pigeon.style.top = topDefault + "vw";
    Pigeon.style.left = leftDefault + "vw";
    clearInterval(movingPigeon);
    setInterval(walkingPigeon, 2500);
    estimation.style.visibility = "visible";
    document.getElementById("blackCloud").style.visibility = "visible";
    sun.disabled = "false";

    secretNumber = Math.floor(Math.random() * 101);
    estimation.value = 0;
}