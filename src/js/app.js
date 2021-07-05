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



    const leftBirdsLine = document.querySelector('.birds_box_left');
    const rightBirdsLine = document.querySelector('.birds_box_right');
    const headerBirdsBlack = document.querySelector('.birds_box_header_black');
    const birdsImg = document.querySelector('.birds_img_birds');
    const birdsCache = document.querySelector('.birds_cache_move');
    

    


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
        
        //************************YAGA********************\\

        if (scroll >= 200 && scroll <= 500) {
            hiddenHeader(headerYagaBlack,50);
            transitionHeader(headerYagaBlack,0.3);

            move(leftYagaLine,((scroll-500)*7),0,0);
            move(rightYagaLine,((-scroll+500)*7),0,0);
        } 

        if (scroll >= 500) {
            hiddenHeader(headerYagaBlack,0);

            move(leftYagaLine,0,0,0);
            move(rightYagaLine,0,0,0);
        }
        if (scroll >= 300 && scroll <= 2600 ) {
            
            move(yagaImg,(-1100+scroll/1.3),0,0);
        }

        if (scroll >= 1700 && scroll <= 2900) {
            move(yagaCache,(380-scroll/5),0,0);
        }




        //***********************MARES******************\\


        if (scroll >= 2800 && scroll <= 3300) {
            hiddenHeader(headerMaresBlack,50);
            transitionHeader(headerMaresBlack,0.3);

            move(leftMaresLine,((scroll - 3300)*7),0,0);
            move(rightMaresLine,((-scroll + 3300)*7),0,0);
        } 

        if (scroll >= 3300) {
            hiddenHeader(headerMaresBlack,0);

            move(leftMaresLine,0,0,0);
            move(rightMaresLine,0,0,0);
        }

        if (scroll >= 2700 && scroll <= 5300 ) {
            move(maresImg,(3300-scroll/1.3),0,0);
        }

        if (scroll >= 2700 && scroll <= 5600) {
            move(maresCache,(-720+scroll/5),0,0);
        }



        //*******************GOBLIN*********************\\

        if (scroll >= 5500 && scroll <= 6100) {
            hiddenHeader(headerGoblinBlack,50);
            transitionHeader(headerGoblinBlack,0.3);

            move(leftGoblinLine,((scroll - 6100)*7),0,0);
            move(rightGoblinLine,((-scroll + 6100)*7),0,0);
        } 

        if (scroll >= 6100) {
            hiddenHeader(headerGoblinBlack,0);

            move(leftGoblinLine,0,0,0);
            move(rightGoblinLine,0,0,0);
        }

        if (scroll >= 5800 && scroll <= 8000 ) {
            move(goblinImg,(-5300+scroll/1.3),0,0);
        }

        if (scroll >= 5800 && scroll <= 8300) {
            move(goblinCache,(1700-scroll/5),0,0);
        }

        

        //*****************BIRDS***********************\\


        if (scroll >= 8200 && scroll <= 8700) {
            hiddenHeader(headerBirdsBlack,50);
            transitionHeader(headerBirdsBlack,0.3);

            move(leftBirdsLine,((scroll - 8700)*7),0,0);
            move(rightBirdsLine,((-scroll + 8700)*7),0,0);
        } 

        if (scroll >= 8700) {
            hiddenHeader(headerBirdsBlack,0);

            move(leftBirdsLine,0,0,0);
            move(rightBirdsLine,0,0,0);
        }

        if (scroll >= 8400 && scroll <= 10600 ) {
            move(birdsImg,(8700-scroll/1.1),0,0);
        }

        if (scroll >= 8400 && scroll <= 11000) {
            move(birdsCache,(-2000+scroll/5),0,0);
        }

        console.log(scroll);
      });
      
    
});