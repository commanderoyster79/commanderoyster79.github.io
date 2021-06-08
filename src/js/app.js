window.addEventListener('DOMContentLoaded', () => {
    const leftLine = document.querySelector('.yaga_box_left');
    const rightLine = document.querySelector('.yaga_box_right');
    const yagaImg = document.querySelector('.yaga_img_yaga');
    const yagaCache = document.querySelector('.yaga_cache_move');

    
    function move (atribute,valueX,valueY,valueZ) {
        atribute.style.transform = `translate3d(${valueX}px,${valueY}px,${valueZ}px)`;
    }


    window.addEventListener('scroll', function() {
        let scroll = window.pageYOffset || document.documentElement.scrollTop ||
                 document.body.scrollTop || 0;
        
        if (scroll < 700) {
            move(leftLine,(scroll-700),0,0);
            move(rightLine,(-scroll+700),0,0);
        }
        if (scroll == 1100) {
            move(leftLine,0,0,0);
            move(rightLine,0,0,0);
        }
        
        if (scroll >= 300 && scroll <= 2600 ) {
            move(yagaImg,(-1100+scroll),0,0);
        }

        if (scroll >= 1700 && scroll <= 2900) {
            move(yagaCache,(+380-scroll/5),0,0);
        }

        
        
        console.log(scroll);
        

        //300-1100

        //-362  0

        //1700 - 2900




      });
      
    
});