window.addEventListener('DOMContentLoaded', () => {
    const leftLine = document.querySelector('.yaga_box_left');
    const rightLine = document.querySelector('.yaga_box_right');


    function moveLine (atribute,valueX,valueY,valueZ) {
        atribute.style.transform = `translate3d(${valueX}px,${valueY}px,${valueZ}px)`;
    }


    window.addEventListener('scroll', function() {
        let scroll = window.pageYOffset || document.documentElement.scrollTop ||
                 document.body.scrollTop || 0;
        if (scroll < 1100) {
            moveLine(leftLine,(scroll-1100),0,0);
            moveLine(rightLine,(-scroll+1100),0,0);
        }
        if (scroll == 1100) {
            moveLine(leftLine,0,0,0);
            moveLine(rightLine,0,0,0);
        }
        
        
        console.log(scroll);

        //400-1100

        //-362  0

        //0 -670


      });
      
    
});