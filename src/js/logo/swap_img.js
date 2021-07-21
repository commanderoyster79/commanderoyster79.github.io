const imgLinksLitres = [
    'url(../../icons/logo/04_LITRES_01.svg)',
    'url(../../icons/logo/07_LITRES_04.webp)'
];



const whiteblack = document.querySelector('.whiteblack');
const whiteblackImg = document.querySelector('.whiteblack_box_img');
const whiteblackDescr = document.querySelector('.whiteblack_descr');
const whiteblackDescrLine = document.querySelector('.whiteblack_descr_box_line');
const whiteblackDescrNumeretion = document.querySelector('.whiteblack_descr_box_numeration');


const victoryImg = document.querySelector('.victory_box_img');



const delay = 2000;
let currentIndex = 0;
let indexWB = 0;

    setInterval(function() {
        document.querySelector('.litres_box_img').style.backgroundImage = imgLinksLitres[currentIndex];
        currentIndex++;
        if(currentIndex >= imgLinksLitres.length) {
            currentIndex = 0;
        }
        if (indexWB == 0) {
            whiteblack.style.backgroundColor = 'white';
            whiteblackDescr.style.color = 'black';
            whiteblackDescrLine.style.backgroundColor = 'black';
            whiteblackDescrNumeretion.style.color = 'black';
            whiteblackImg.style.backgroundImage = 'url(../../icons/logo/17_CHERNOE.webp)';
            victoryImg.style.backgroundImage = 'url(../../icons/logo/19_75_let_01.webp)';
            indexWB++;
        } else {
            whiteblack.style.backgroundColor = 'black';
            whiteblackDescr.style.color = 'white';
            whiteblackDescrLine.style.backgroundColor = 'white';
            whiteblackDescrNumeretion.style.color = 'white';
            whiteblackImg.style.backgroundImage = 'url(../../icons/logo/16_BELOE.webp)';
            victoryImg.style.backgroundImage = 'url(../../icons/logo/20_75_let_02.webp)';
            indexWB--;
        }
        
    }, delay);



    
