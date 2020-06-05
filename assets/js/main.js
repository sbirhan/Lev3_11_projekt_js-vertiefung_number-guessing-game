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
document.getElementById("sun").addEventListener("click", flyingPigeon);

const sun = document.getElementById("sun");

const restart = document.getElementById("restart");
document.getElementById("restart").addEventListener("click", reset);

function walkingPigeon(){
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

    console.log(angle, Math.round(16 * Math.sin(angle/180)), Math.round(16 * Math.cos(angle/180)), left1, top1, left2, top2);

}

function flyingPigeon(){
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
    }
    else{
        if (estimation.value > secretNumber){
            sun.animate([{backgroundColor: "rgb(255, 255, 255)"}, {backgroundColor: "rgb(255, 153, 0)"}],{duration: 2000});
        }
        else{
            sun.animate([{color: "rgb(255, 153, 0)"}, {color: "rgb(255, 255, 255"}],{duration: 2000});
        }
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

    secretNumber = Math.floor(Math.random() * 101);
    estimation.value = 0;
}