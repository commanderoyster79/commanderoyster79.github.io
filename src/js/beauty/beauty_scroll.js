window.addEventListener('DOMContentLoaded', () => {
    const leftMainbeautyLine = document.querySelector('.beauty_box_left');
    const rightMainbeautyLine = document.querySelector('.beauty_box_right');
    const headerMainbeautyBlack = document.querySelector('.beauty_box_header_black');
    const imgOrangeBox = document.querySelectorAll('.img_orange_box');
    const imgPurpleBox = document.querySelectorAll('.img_purple_box');
    const imgVioletBox = document.querySelectorAll('.img_violet_box');
    const imgBlueBox = document.querySelectorAll('.img_blue_box');
    const imgGreenBox = document.querySelectorAll('.img_green_box');
    const descr = document.querySelector('.descr');
    

    console.log(imgOrangeBox.item(0).childNodes[1]);
    // console.log(imgPurpleBox);
    // console.log(imgVioletBox);
    // console.log(imgBlueBox);
    // console.log(imgGreenBox);
    




        
        

    


    


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


        if (scroll <= 1100) {
                imgOrangeBox.item(0).childNodes[1].classList.remove('widthOpen');
                imgOrangeBox.item(0).childNodes[1].style.opacity = '0';    
                
                
                imgOrangeBox.item(0).childNodes[3].style.opacity = '0';


                imgOrangeBox.item(0).childNodes[5].classList.remove('widthOpen');
                imgOrangeBox.item(0).childNodes[5].style.opacity = '0';
                    
        } else {
            
                imgOrangeBox.item(0).childNodes[1].classList.add('widthOpen');
                imgOrangeBox.item(0).childNodes[1].style.opacity = '1';
                transitionHeader(imgOrangeBox.item(0).childNodes[1], 0.5);
                
                
                imgOrangeBox.item(0).childNodes[3].style.opacity = '1';
                transitionHeader(imgOrangeBox.item(0).childNodes[3], 0.5);

                imgOrangeBox.item(0).childNodes[5].classList.add('widthOpen');
                imgOrangeBox.item(0).childNodes[5].style.opacity = '1';
                transitionHeader(imgOrangeBox.item(0).childNodes[1], 0.5);
                
            }    

        console.log(scroll);

        
    }); 
    
    hiddenHeader(headerMainbeautyBlack,0);
    transitionHeader(headerMainbeautyBlack, 1.5);
    move(leftMainbeautyLine,0,0,0);
    transitionHeader(leftMainbeautyLine, 0.7);
    move(rightMainbeautyLine,0,0,0);
    transitionHeader(rightMainbeautyLine, 0.7);
    descr.style.opacity = '0';
}); 