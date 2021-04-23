const one = document.querySelector(".main_square")
const t1 = new TimelineMax();
var elements = document.getElementsByClassName('header_square')[0];
var element = document.getElementsByClassName('main_square_small_1')[0];
console.log(elements);
console.log(element);

elements.onclick = function() {
  element.style.border = 'red';
}

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
