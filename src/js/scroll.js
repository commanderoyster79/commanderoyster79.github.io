window.addEventListener('DOMContentLoaded', () => {
    const logofolio = document.querySelector('.logofolio');
    const moscow = document.querySelector('.moscow');
    const startool = document.querySelector('.startool');
    const litres = document.querySelector('.litres');

    function move (atribute,valueX,valueY,valueZ) {
        atribute.style.transform = `translate3d(${valueX}px,${valueY}px,${valueZ}px)`;
    }


    window.addEventListener('scroll', function() {
    let scroll = window.pageYOffset || document.documentElement.scrollTop ||
                 document.body.scrollTop || 0;

    move (logofolio,0,-scroll,0);
    move (moscow,0,scroll,0);
    move (startool,0,scroll,0);
    move (litres,0,scroll,0);

    if (scroll >= 500) {
        move (moscow,0,-scroll+1000,0);
    }

    if (scroll >= 1000) {
        move (startool,0,-scroll+2000,0);
    }

    if (scroll >= 1500) {
        move (litres,0,-scroll+3000,0);
    }
    

    console.log(scroll);
    });
});