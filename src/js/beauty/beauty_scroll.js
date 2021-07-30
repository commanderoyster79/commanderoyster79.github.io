window.addEventListener('DOMContentLoaded', () => {
    const leftMainbeautyLine = document.querySelector('.beauty_box_left');
    const rightMainbeautyLine = document.querySelector('.beauty_box_right');
    const headerMainbeautyBlack = document.querySelector('.beauty_box_header_black');
    const imgOrangeBox = document.querySelectorAll('.img_orange_box');
    const imgPurpleBox = document.querySelectorAll('.img_purple_box');
    const imgVioletBox = document.querySelectorAll('.img_violet_box');
    const imgBlueBox = document.querySelectorAll('.img_blue_box');
    const imgGreenBox = document.querySelectorAll('.img_green_box');
    const mainbeautyHeaderLogo = document.querySelector('.mainbeauty_header_logo');
    const descr = document.querySelector('.descr');

    const positionOne = 1;
    const positionTwo = 3;
    const positionThree = 5;
    
       
        

    


    


    function move (atribute,valueX,valueY,valueZ) {
        atribute.style.transform = `translate3d(${valueX}px,${valueY}px,${valueZ}px)`;
    }

    function hiddenHeader (atribute,height) {
        atribute.style.height = `${height}px`;
    }

    function transitionHeader (atribute,time) {
        atribute.style.transition = `${time}s all`;
    }


    function closeAll (atribute,positionOne,positionTwo,positionThree,addClass) {
        atribute.item(0).childNodes[positionOne].classList.remove(addClass);
        atribute.item(0).childNodes[positionOne].style.opacity = '0';

        atribute.item(0).childNodes[positionTwo].style.opacity = '0';

        atribute.item(0).childNodes[positionThree].classList.remove(addClass);
        atribute.item(0).childNodes[positionThree].style.opacity = '0';
    }

    function openAll (atribute,positionOne,positionTwo,positionThree,addClass) {
        atribute.item(0).childNodes[positionOne].classList.add(addClass);
        atribute.item(0).childNodes[positionOne].style.opacity = '1';
        transitionHeader(atribute.item(0).childNodes[positionOne], 1.5);

        atribute.item(0).childNodes[positionTwo].style.opacity = '1';
        transitionHeader(atribute.item(0).childNodes[positionTwo], 1.5);

        atribute.item(0).childNodes[positionThree].classList.add(addClass);
        atribute.item(0).childNodes[positionThree].style.opacity = '1';
        transitionHeader(atribute.item(0).childNodes[positionThree], 1.5);
    }



    
    





    window.addEventListener('scroll', function() {
        let scroll = window.pageYOffset || document.documentElement.scrollTop ||
                 document.body.scrollTop || 0;
        if (scroll <= 100) {
            descr.style.opacity = '0';
            descr.classList.remove('slideUpSmall');
            transitionHeader(descr, 0.5);
        } else {
            descr.classList.add('slideUpSmall');
            descr.style.opacity = '1';
        }


        if (scroll <= 1100) {
            closeAll(imgOrangeBox,positionOne,positionTwo,positionThree,'widthOpen');
        } else {
            openAll(imgOrangeBox,positionOne,positionTwo,positionThree,'widthOpen');
        }
        
        
        if (scroll <= 1700) {
            closeAll(imgPurpleBox,positionOne,positionTwo,positionThree,'widthOpenBig');
        } else {
            openAll(imgPurpleBox,positionOne,positionTwo,positionThree,'widthOpenBig');
        }


        if (scroll <= 2300) {
            closeAll(imgVioletBox,positionOne,positionTwo,positionThree,'widthOpen');
        } else {
            openAll(imgVioletBox,positionOne,positionTwo,positionThree,'widthOpen');
        }

        if (scroll <= 3100) {
            closeAll(imgBlueBox,positionOne,positionTwo,positionThree,'widthOpen');
        } else {
            openAll(imgBlueBox,positionOne,positionTwo,positionThree,'widthOpen');
        }


        if (scroll <= 3800) {
            closeAll(imgGreenBox,positionOne,positionTwo,positionThree,'widthOpen');
        } else {
            openAll(imgGreenBox,positionOne,positionTwo,positionThree,'widthOpen');
        }

        console.log(scroll);

        
    }); 
    
    hiddenHeader(headerMainbeautyBlack,0);
    transitionHeader(headerMainbeautyBlack, 1.5);
    move(leftMainbeautyLine,0,0,0);
    transitionHeader(leftMainbeautyLine, 0.7);
    move(rightMainbeautyLine,0,0,0);
    transitionHeader(rightMainbeautyLine, 0.7);
    descr.style.opacity = '0';
    mainbeautyHeaderLogo.classList.add('slideUpLogoBeauty');
    transitionHeader(mainbeautyHeaderLogo, 0.5);
}); 