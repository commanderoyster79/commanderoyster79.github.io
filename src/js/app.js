window.addEventListener('DOMContentLoaded', () => {
    const leftLine = document.querySelector('.yaga_box_left');


    window.addEventListener('scroll', function() {
        let scroll = window.pageYOffset || document.documentElement.scrollTop ||
                 document.body.scrollTop || 0;
        leftLine.style.transform = 'translate3d('+ (scroll-1100) +'px,0,0)';
        
        
        console.log(scroll);

        //400-1100

        //-362  0

        //0 -670


      });
      
    
});