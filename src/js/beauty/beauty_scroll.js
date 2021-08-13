'use strict';
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

    const aboutPackageOrange = document.querySelectorAll('.about_package_orange');
    const aboutPackagePurple = document.querySelectorAll('.about_package_purple');
    const aboutPackageViolet = document.querySelectorAll('.about_package_violet');
    const aboutPackageBlue = document.querySelectorAll('.about_package_blue');
    const aboutPackageGreen = document.querySelectorAll('.about_package_green');

    
    
       
        

    


    


    function move (atribute,valueX,valueY,valueZ) {
        atribute.style.transform = `translate3d(${valueX}px,${valueY}px,${valueZ}px)`;
    }

    function moveX (atribute,position,valueX,valueY,valueZ,time) {
        atribute.item(0).childNodes[position].style.transform = `translate3d(${valueX}px,${valueY}px,${valueZ}px)`;
        atribute.item(0).childNodes[position].style.transition = `${time}s all`;
    }

    function hiddenHeader (atribute,height) {
        atribute.style.height = `${height}px`;
    }

    function transitionHeader (atribute,time) {
        atribute.style.transition = `${time}s all`;
    }


    function closeAll (atribute,addClass) {
        atribute.item(0).childNodes[positionOne].classList.remove(addClass);
        atribute.item(0).childNodes[positionOne].style.opacity = '0';

        atribute.item(0).childNodes[positionTwo].style.opacity = '0';

        atribute.item(0).childNodes[positionThree].classList.remove(addClass);
        atribute.item(0).childNodes[positionThree].style.opacity = '0';
    }

    function openAll (atribute,addClass) {
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
            closeAll(imgOrangeBox,'widthOpen');
        } else {
            openAll(imgOrangeBox,'widthOpen');
        }
        
        
        if (scroll <= 1700) {
            closeAll(imgPurpleBox,'widthOpenBig');
        } else {
            openAll(imgPurpleBox,'widthOpenBig');
        }


        if (scroll <= 2300) {
            closeAll(imgVioletBox,'widthOpen');
        } else {
            openAll(imgVioletBox,'widthOpen');
        }

        if (scroll <= 3100) {
            closeAll(imgBlueBox,'widthOpen');
        } else {
            openAll(imgBlueBox,'widthOpen');
        }


        if (scroll <= 3800) {
            closeAll(imgGreenBox,'widthOpen');
        } else {
            openAll(imgGreenBox,'widthOpen');
        }


        if (scroll <= 5700) {
            moveX(aboutPackageOrange,positionOne,-570,0,0);
            moveX(aboutPackageOrange,positionTwo,760,0,0);
            moveX(aboutPackageOrange,positionThree,680,0,0);
        } else {
            moveX(aboutPackageOrange,positionOne,0,0,0,1);
            moveX(aboutPackageOrange,positionTwo,0,0,0,2);
            moveX(aboutPackageOrange,positionThree,0,0,0,2.5);
        }

        if (scroll <= 6500) {
            moveX(aboutPackagePurple,positionOne,-570,0,0);
            moveX(aboutPackagePurple,positionTwo,760,0,0);
            moveX(aboutPackagePurple,positionThree,680,0,0);
        } else {
            moveX(aboutPackagePurple,positionOne,0,0,0,1);
            moveX(aboutPackagePurple,positionTwo,0,0,0,2);
            moveX(aboutPackagePurple,positionThree,0,0,0,2.5);
        }

        if (scroll <= 7300) {
            moveX(aboutPackageViolet,positionOne,-630,0,0);
            moveX(aboutPackageViolet,positionTwo,760,0,0);
            moveX(aboutPackageViolet,positionThree,680,0,0);
        } else {
            moveX(aboutPackageViolet,positionOne,0,0,0,1);
            moveX(aboutPackageViolet,positionTwo,0,0,0,2);
            moveX(aboutPackageViolet,positionThree,0,0,0,2.5);
        }

        if (scroll <= 8000) {
            moveX(aboutPackageBlue,positionOne,-570,0,0);
            moveX(aboutPackageBlue,positionTwo,760,0,0);
            moveX(aboutPackageBlue,positionThree,680,0,0);
        } else {
            moveX(aboutPackageBlue,positionOne,0,0,0,1);
            moveX(aboutPackageBlue,positionTwo,0,0,0,2);
            moveX(aboutPackageBlue,positionThree,0,0,0,2.5);
        }

        if (scroll <= 8800) {
            moveX(aboutPackageGreen,positionOne,-630,0,0);
            moveX(aboutPackageGreen,positionTwo,760,0,0);
            moveX(aboutPackageGreen,positionThree,680,0,0);
        } else {
            moveX(aboutPackageGreen,positionOne,0,0,0,1);
            moveX(aboutPackageGreen,positionTwo,0,0,0,2);
            moveX(aboutPackageGreen,positionThree,0,0,0,2.5);
        }       
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