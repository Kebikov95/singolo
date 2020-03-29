/* Constants */
const MENU = document.getElementById('menu');

const SLIDER = document.getElementById('home');
const BUTTON_LEFT= document.getElementById('btn-left');
const BUTTON_RIGHT= document.getElementById('btn-right');
const PHONE_V = document.getElementById('phone-vertical');
const PHONE_H = document.getElementById('phone-horizontal');

const PORTFOLIO_MENU = document.getElementById('portfolio-btn');
const PHOTOS = document.getElementById("photo");

const SUBMIT = document.getElementById('submit');
const CLOSE_BUTTON = document.getElementById('close-btn');

/* Scroll menu on page */
document.addEventListener('scroll', onScroll);

function onScroll(event){
  const curPos = window.scrollY;
  const divs = document.querySelectorAll('.wrapper > div');
  const links = document.querySelectorAll('#menu a');

  divs.forEach( el => {
    if(el.offsetTop - 80 <= curPos 
        &&
      (el.offsetTop + el.offsetHeight) > curPos){
          links.forEach( a => {
          a.classList.remove('active');
          if(el.getAttribute('id') === a.getAttribute('href').substring(1)){
            a.classList.add('active');
          }
        });
    }
  });
}


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


/* Portfolio */
PORTFOLIO_MENU.addEventListener('click', (event) => {
    PORTFOLIO_MENU.querySelectorAll('.btn').forEach(el => { el.classList.remove('active') });
    event.target.classList.add('active');
    let photosArray = document.querySelectorAll('div.photos > img');
    let point = event.target.innerText;
    switch(point){
        case 'All':
            photosArray[0].style.order="0";
            photosArray[1].style.order="10";
            photosArray[2].style.order="2";
            photosArray[3].style.order="3";
            photosArray[4].style.order="4";
            photosArray[5].style.order="5";
            photosArray[6].style.order="6";
            photosArray[7].style.order="7";
            photosArray[8].style.order="8";
            photosArray[9].style.order="9";
            photosArray[10].style.order="1";
            photosArray[11].style.order="11";
            break;
        case 'Web Design':
            photosArray[0].style.order="8";
            photosArray[1].style.order="2";
            photosArray[2].style.order="1";
            photosArray[3].style.order="9";
            photosArray[4].style.order="4";
            photosArray[5].style.order="3";
            photosArray[6].style.order="11";
            photosArray[7].style.order="7";
            photosArray[8].style.order="0";
            photosArray[9].style.order="5";
            photosArray[10].style.order="10";
            photosArray[11].style.order="6";
            break;
        case 'Graphic Design':
            photosArray[0].style.order="4";
            photosArray[1].style.order="7";
            photosArray[2].style.order="1";
            photosArray[3].style.order="5";
            photosArray[4].style.order="0";
            photosArray[5].style.order="2";
            photosArray[6].style.order="6";
            photosArray[7].style.order="3";
            photosArray[8].style.order="8";
            photosArray[9].style.order="9";
            photosArray[10].style.order="10";
            photosArray[11].style.order="11";
            break;
        case 'Artwork':
            photosArray[0].style.order="4";
            photosArray[1].style.order="2";
            photosArray[2].style.order="6";
            photosArray[3].style.order="9";
            photosArray[4].style.order="8";
            photosArray[5].style.order="3";
            photosArray[6].style.order="11";
            photosArray[7].style.order="7";
            photosArray[8].style.order="0";
            photosArray[9].style.order="5";
            photosArray[10].style.order="10";
            photosArray[11].style.order="1";
            break;
    }
});

PHOTOS.addEventListener('click', (event) => {
    if(event.target.classList.contains('active')) {
        event.target.classList.remove('active');
    }
    else {
        PHOTOS.querySelectorAll('img').forEach( el => el.classList.remove('active') );
        event.target.classList.add('active');
    }
})


/* Contact */
SUBMIT.addEventListener('click', (event) => {
     const subject = document.getElementById('subject').value.toString();
     const description = document.getElementById('desc').value.toString();
     document.getElementById('mes-query').innerHTML = 'The letter was sent';

     if(subject){
        document.getElementById('mes-about').innerHTML = subject;
     }
     else {
        document.getElementById('mes-about').innerHTML = 'without subject';
     }

     if(description){
        document.getElementById('mes-desc').innerHTML = description;
     }
     else {
        document.getElementById('mes-desc').innerHTML = 'without description';
     }

     document.getElementById('message-block').classList.remove('hidden');
})

CLOSE_BUTTON.addEventListener('click', () => {
     document.getElementById('form').reset();
     document.getElementById('message-block').classList.add('hidden');
});


/* Menu for mobile devices */
const SM_MENU = document.getElementById('header-menu');
const NAV = document.querySelector('.header .nav');
const BG_OPACITY = document.querySelector('.black-opacity');
const LOGO = document.querySelector('.header-panel .logo');
const HEADER_MENU = document.getElementById('header-menu');

const getHiddenMenu = SM_MENU.addEventListener('click', () => {
    if(HEADER_MENU.classList.contains('vertical-menu')){
        LOGO.style.margin = '0 20vw';
        NAV.style.display = 'none';
        BG_OPACITY.style.display = 'none';
        HEADER_MENU.classList.remove('vertical-menu');
    }
    else{
        LOGO.style.margin = 0;
        NAV.style.display = 'block';
        BG_OPACITY.style.display = 'block';
        HEADER_MENU.classList.add('vertical-menu');
    }
})

const getPreviousForm = MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('li > a').forEach(el => { el.classList.remove('active') });
    event.target.classList.add('active');
    if(HEADER_MENU.classList.contains('vertical-menu')){
        BG_OPACITY.style.display = 'none';
        NAV.style.display = 'none';
        HEADER_MENU.classList.remove('vertical-menu');
        LOGO.style.margin = '0 20vw';
    }
})