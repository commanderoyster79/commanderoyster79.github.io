window.addEventListener('DOMContentLoaded', () => {
    const leftYagaLine = document.querySelector('.yaga_box_left');
    const rightYagaLine = document.querySelector('.yaga_box_right');
    const headerYagaBlack = document.querySelector('.yaga_box_header_black');
    const yagaImg = document.querySelector('.yaga_img_yaga');
    const yagaCache = document.querySelector('.yaga_cache_move');


    const leftMaresLine = document.querySelector('.mares_box_left');
    const rightMaresLine = document.querySelector('.mares_box_right');
    const headerMaresBlack = document.querySelector('.mares_box_header_black');
    const maresImg = document.querySelector('.mares_img_mares');
    const maresCache = document.querySelector('.mares_cache_move');



    const leftGoblinLine = document.querySelector('.goblin_box_left');
    const rightGoblinLine = document.querySelector('.goblin_box_right');
    const headerGoblinBlack = document.querySelector('.goblin_box_header_black');
    const goblinImg = document.querySelector('.goblin_img_goblin');
    const goblinCache = document.querySelector('.goblin_cache_move');
    

    


    function move (atribute,valueX,valueY,valueZ) {
        atribute.style.transform = `translate3d(${valueX}px,${valueY}px,${valueZ}px)`;
    }

    function hiddenHeader (atribute,height) {
        atribute.style.height = `${height}px`;
    }






    window.addEventListener('scroll', function() {
        let scroll = window.pageYOffset || document.documentElement.scrollTop ||
                 document.body.scrollTop || 0;
        
        //YAGA

        if (scroll < 700) {
            move(leftYagaLine,(scroll-700),0,0);
            move(rightYagaLine,(-scroll+700),0,0);
        }
        if (scroll >= 700) {
            move(leftYagaLine,0,0,0);
            move(rightYagaLine,0,0,0);
        }
        if (scroll >= 300 && scroll <= 700) {
            hiddenHeader(headerYagaBlack,80-scroll/10);
        } 

        if (scroll >= 700) {
            hiddenHeader(headerYagaBlack,0);
        }
        if (scroll >= 300 && scroll <= 2600 ) {
            
            move(yagaImg,(-1100+scroll/1.3),0,0);
        }

        if (scroll >= 1700 && scroll <= 2900) {
            move(yagaCache,(380-scroll/5),0,0);
        }




        // MARES

        if (scroll >= 2900 && scroll <= 3300 ) {
            move(leftMaresLine,(scroll - 3300),0,0);
            move(rightMaresLine,(-scroll + 3300),0,0);
        }

        if (scroll >= 3300) {
            move(leftMaresLine,0,0,0);
            move(rightMaresLine,0,0,0);
        }

        if (scroll >= 3000 && scroll <= 3500) {
            hiddenHeader(headerMaresBlack,(113-scroll/30)*3);
        } 

        if (scroll >= 3500) {
            hiddenHeader(headerMaresBlack,0);
        }

        if (scroll >= 2700 && scroll <= 5300 ) {
            move(maresImg,(3300-scroll/1.3),0,0);
        }

        if (scroll >= 2700 && scroll <= 5600) {
            move(maresCache,(-720+scroll/5),0,0);
        }



        //GOBLIN

        if (scroll >= 5700 && scroll <= 6200 ) {
            move(leftGoblinLine,(scroll - 6200),0,0);
            move(rightGoblinLine,(-scroll + 6200),0,0);
        }

        if (scroll >= 6200) {
            move(leftGoblinLine,0,0,0);
            move(rightGoblinLine,0,0,0);
        }

        if (scroll >= 5800 && scroll <= 6200) {
            hiddenHeader(headerGoblinBlack,(86-scroll/76)*4);
        } 

        if (scroll >= 6200) {
            hiddenHeader(headerGoblinBlack,0);
        }

        if (scroll >= 5900 && scroll <= 8000 ) {
            move(goblinImg,(-5300+scroll/1.3),0,0);
        }

        if (scroll >= 5900 && scroll <= 8300) {
            move(goblinCache,(1700-scroll/5),0,0);
        }

        
        
        console.log(scroll);
        

        //300-1100

        //-362  0

        //1700 - 2900




      });
      
    
});