/* Constants */
const MENU = document.getElementById('menu');
const SLIDER = document.getElementById('slider');
const BUTTON_LEFT= document.getElementById('btn-left');
const BUTTON_RIGHT= document.getElementById('btn-right');
const PHONE_V = document.getElementById('phone-vertical');
const PHONE_H = document.getElementById('phone-horizontal');


/* Header */
MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('li > a').forEach(el => { el.classList.remove('active') });
    event.target.classList.add('active');
})


/* Slider */
function changeSlider(){
    offAllScreens();
    if(!PHONE_H.hidden) {
        PHONE_V.hidden = true;
        PHONE_H.hidden = true;
        SLIDER.classList.add('slider-panel-second');
    }
    else {
        PHONE_V.hidden = false;
        PHONE_H.hidden = false;
        SLIDER.classList.remove('slider-panel-second');
    }
}

BUTTON_LEFT.addEventListener('click', changeSlider);
BUTTON_RIGHT.addEventListener('click', changeSlider);

function offVerticalScreen() {
    const verticalScreen = document.querySelector('.off-vertical');
    if( verticalScreen.style.visibility !== "visible" ) {
        verticalScreen.style.visibility = "visible";
    } 
    else verticalScreen.style.visibility = "hidden";
}

function offHorizontalScreen() {
    const horizontalScreen = document.querySelector('.off-horizontal');
    if( horizontalScreen.style.visibility !== "visible" ) {
        horizontalScreen.style.visibility = "visible";
    } 
    else horizontalScreen.style.visibility = "hidden";
}

function offAllScreens(){
    const verticalScreen = document.querySelector('.off-vertical');
    const horizontalScreen = document.querySelector('.off-horizontal');
    verticalScreen.style.visibility = "hidden";
    horizontalScreen.style.visibility = "hidden";
}

PHONE_V.addEventListener('click', offVerticalScreen);
PHONE_H.addEventListener('click', offHorizontalScreen);