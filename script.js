function openReg(){
    document.getElementsByClassName(".container").className = "container2";
}
let button = document.querySelector('.profileBtn')
button.addEventListener('click', openReg)


$(document).ready(function() {
    $('.slider').bxSlider({
        infiniteLoop: true
    });
});


let btn = document.querySelector('.BUY')
btn.addEventListener('click', move)

function move() {
    
}
