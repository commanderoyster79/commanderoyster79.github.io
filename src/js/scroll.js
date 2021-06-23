window.addEventListener('DOMContentLoaded', () => {
    const logofolio = document.querySelector('.logofolio');
    const moscow = document.querySelector('.moscow');
    const startool = document.querySelector('.startool');
    const litres = document.querySelector('.litres');
    const breesal = document.querySelector('.breesal');
    const trueMagazine = document.querySelector('.trueMagazine');
    const ligetdukat = document.querySelector('.ligetdukat');
    const pskov = document.querySelector('.pskov');
    const whiteblack = document.querySelector('.whiteblack');
    const weaving = document.querySelector('.weaving');
    const victory = document.querySelector('.victory');
    const kargopol = document.querySelector('.kargopol');
    const dunskaya = document.querySelector('.dunskaya');
    const almatel = document.querySelector('.almatel');
    

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
    move (breesal,0,scroll,0);
    move (trueMagazine,0,scroll,0);
    move (ligetdukat,0,scroll,0);
    move (pskov,0,scroll,0);
    move (whiteblack,0,scroll,0);
    move (weaving,0,scroll,0);
    move (victory,0,scroll,0);
    move (kargopol,0,scroll,0);
    move (dunskaya,0,scroll,0);
    move (almatel,0,scroll,0);

    if (scroll >= 500) {
        move (moscow,0,-scroll+1000,0);
    }

    if (scroll >= 1000) {
        move (startool,0,-scroll+2000,0);
    }

    if (scroll >= 1500) {
        move (litres,0,-scroll+3000,0);
    }

    if (scroll >= 2000) {
        move (breesal,0,-scroll+4000,0);
    }

    if (scroll >= 2500) {
        move (trueMagazine,0,-scroll+5000,0);
    }

    if (scroll >= 3000) {
        move (ligetdukat,0,-scroll+6000,0);
    }

    if (scroll >= 3500) {
        move (pskov,0,-scroll+7000,0);
    }

    if (scroll >= 4000) {
        move (whiteblack,0,-scroll+8000,0);
    }

    if (scroll >= 4500) {
        move (weaving,0,-scroll+9000,0);
    }

    if (scroll >= 5000) {
        move (victory,0,-scroll+10000,0);
    }

    if (scroll >= 5500) {
        move (kargopol,0,-scroll+11000,0);
    }

    if (scroll >= 6000) {
        move (dunskaya,0,-scroll+12000,0);
    }

    if (scroll >= 6500) {
        move (almatel,0,-scroll+13000,0);
    }
    

    console.log(scroll);
    });
});