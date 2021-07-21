window.addEventListener('DOMContentLoaded', () => {
    const leftMainbeautyLine = document.querySelector('.beauty_box_left');
    const rightMainbeautyLine = document.querySelector('.beauty_box_right');
    const headerMainbeautyBlack = document.querySelector('.beauty_box_header_black');
    const descr = document.querySelector('.descr');
    




        
        

    


    


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
    
    hiddenHeader(headerMainbeautyBlack,0);
    transitionHeader(headerMainbeautyBlack, 1.5);
    move(leftMainbeautyLine,0,0,0);
    transitionHeader(leftMainbeautyLine, 0.7);
    move(rightMainbeautyLine,0,0,0);
    transitionHeader(rightMainbeautyLine, 0.7);
    descr.style.opacity = '0';
}); 