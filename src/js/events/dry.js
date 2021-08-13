'use strict';
window.addEventListener('DOMContentLoaded', () => {
    const leftMaindryLine = document.querySelector('.dry_box_left');
    const rightMaindryLine = document.querySelector('.dry_box_right');
    const headerMaindryBlack = document.querySelector('.dry_box_header_black');
    const descr = document.querySelector('.descr');

    console.log(headerMaindryBlack);

    function move (atribute,valueX,valueY,valueZ) {
        atribute.style.transform = `translate3d(${valueX}px,${valueY}px,${valueZ}px)`;
    }

    function hiddenHeader (atribute,height) {
        atribute.style.height = `${height}px`;
    }

    function transitionHeader (atribute,time) {
        atribute.style.transition = `${time}s all`;
    }



    window.addEventListener('scroll', function() {
        let scroll = window.pageYOffset || document.documentElement.scrollTop ||
                 document.body.scrollTop || 0;
        if (scroll <= 100) {
            descr.style.opacity = '0';
            descr.classList.remove('slideUp');
            transitionHeader(descr, 0.5);
        } else {
            descr.classList.add('slideUp');
            descr.style.opacity = '1';
        }

    }); 




    hiddenHeader(headerMaindryBlack,0);
    transitionHeader(headerMaindryBlack, 1.5);
    move(leftMaindryLine,0,0,0);
    transitionHeader(leftMaindryLine, 0.7);
    move(rightMaindryLine,0,0,0);
    transitionHeader(rightMaindryLine, 0.7);
    descr.style.opacity = '0';
}); 