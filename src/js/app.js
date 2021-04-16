const one = document.querySelector(".main_square_page_one")
const t1 = new TimelineMax();


function snow(){
t1.fromTo(one,0,{width:"0px"},{width:"450px",ease: Power2.easeInOut})
  .fromTo(
    one,
    0,
    {height:"0px"},
    {height:"450px",ease: Power2.easeInOut}
  )
}

barba.init({
  transitions: [{
    name: 'opacity-transition',
    leave(data) {
      return gsap.to(data.current.container, {
        //opacity: 0,
        //delay: 0.2 
      });
    },
    enter(data) {
      
      return gsap.from(data.next.container, {
        //opacity: 0,
        //delay: 0.2 
      }),snow();
    }
  }]
});
