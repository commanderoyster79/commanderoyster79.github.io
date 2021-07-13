window.addEventListener('DOMContentLoaded', () => {
    const leftMainsoapLine = document.querySelector('.soap_box_left');
    const rightMainsoapLine = document.querySelector('.soap_box_right');
    const headerMainsoapBlack = document.querySelector('.soap_box_header_black');
    const descr = document.querySelector('.descr');
    const logosoapDescr = document.querySelector('.logosoap_descr');
    const moodblockDescr = document.querySelector('.moodblock_descr');
    const craftPaperBlock = document.querySelectorAll('.craft_paper_block');
    const craftPaperBlockEight = document.querySelector('.craft_paper_block_8');


    console.log(craftPaperBlock);



        
        

    


    function swapCraftBlock() {
        setTimeout(function run() {
            setTimeout(() => {
                for (let i = 0; i <= craftPaperBlock.length - 1; i++) {
                    setTimeout(function () {
                        if (i == 5) {
                            allClose(craftPaperBlock[9]);
                        }
                        else if (i == 6) {
                            allClose(craftPaperBlock[8]);
                        }
                        else if (i == 7) {
                            allClose(craftPaperBlock[7]);
                        }
                        else if (i == 8) {
                            allClose(craftPaperBlock[6]);
                            craftPaperBlockEight.style.backgroundImage = 'url(../../img/soap/06_Raport_white.png)';
                        }
                        else if (i == 9) {
                            allClose(craftPaperBlock[5]);
                        } else {
                            allClose(craftPaperBlock[i]);
                        } 
                    }, 100 * i);
                } 
            }, 5000);
            setTimeout(() => {
                craftPaperBlockEight.style.backgroundImage = 'url(../../img/soap/07_Raport_brown.png)';
            }, 3000);
            for (let i = 0; i <= craftPaperBlock.length - 1; i++) {
                setTimeout(function () {
                    if (i == 5) {
                        allOpen(craftPaperBlock[9]);
                    }
                    else if (i == 6) {
                        allOpen(craftPaperBlock[8]);
                    }
                    else if (i == 7) {
                        allOpen(craftPaperBlock[7]);
                    }
                    else if (i == 8) {
                        allOpen(craftPaperBlock[6]);
                    }
                    else if (i == 9) {
                        allOpen(craftPaperBlock[5]);
                    } else {
                        allOpen(craftPaperBlock[i]);
                    } 
                }, 100 * i);
            }
            setTimeout(run, 7000);
        },7000);
    }

    


            

    
    function allClose(atribute) {
        atribute.style.opacity = '0';
    }

    function allOpen(atribute) {
        atribute.style.opacity = '1';
    }

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

        if (scroll <= 1300) {
            logosoapDescr.style.opacity = '0';
            logosoapDescr.classList.remove('slideUp');
            transitionHeader(descr, 0.5);
        } else {
            logosoapDescr.classList.add('slideUp');
            logosoapDescr.style.opacity = '1';
        }

        if (scroll <= 2400) {
            moodblockDescr.style.opacity = '0';
            moodblockDescr.classList.remove('slideUp');
            transitionHeader(descr, 0.5);
        } else {
            moodblockDescr.classList.add('slideUp');
            moodblockDescr.style.opacity = '1';
        }
        console.log(scroll);
        
    }); 
    
    
    swapCraftBlock();
    hiddenHeader(headerMainsoapBlack,0);
    transitionHeader(headerMainsoapBlack, 1.5);
    move(leftMainsoapLine,0,0,0);
    transitionHeader(leftMainsoapLine, 0.7);
    move(rightMainsoapLine,0,0,0);
    transitionHeader(rightMainsoapLine, 0.7);
    descr.style.opacity = '0';
    logosoapDescr.style.opacity = '0';
    moodblockDescr.style.opacity = '0';
}); 