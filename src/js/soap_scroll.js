window.addEventListener('DOMContentLoaded', () => {
    const leftMainsoapLine = document.querySelector('.soap_box_left');
    const rightMainsoapLine = document.querySelector('.soap_box_right');
    const headerMainsoapBlack = document.querySelector('.soap_box_header_black');
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


    hiddenHeader(headerMainsoapBlack,0);
    transitionHeader(headerMainsoapBlack, 1.5);
    move(leftMainsoapLine,0,0,0);
    transitionHeader(leftMainsoapLine, 0.7);
    move(rightMainsoapLine,0,0,0);
    transitionHeader(rightMainsoapLine, 0.7);
    descr.style.opacity = '0';



    


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
        console.log(scroll);
    });  
}); 