const one = document.querySelector(".main_square")
const t1 = new TimelineMax();
var elements = document.getElementsByClassName('header_square')[0];
var small_1 = document.getElementsByClassName('main_square_small_1')[0];
var small_2 = document.getElementsByClassName('main_square_small_2')[0];
var small_3 = document.getElementsByClassName('main_square_small_3')[0];
var small_4 = document.getElementsByClassName('main_square_small_4')[0];
var small_5 = document.getElementsByClassName('main_square_small_5')[0];
var small_6 = document.getElementsByClassName('main_square_small_6')[0];
var small_7 = document.getElementsByClassName('main_square_small_7')[0];
var small_8 = document.getElementsByClassName('main_square_small_8')[0];
var small_9 = document.getElementsByClassName('main_square_small_9')[0];





// for (let i = 0; i < 1; i++) {
//   elements.addEventListener('click', change_color);
// }












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


elements.onclick = function() {
  function small1_1() {
  small_1.style.borderImage = 'linear-gradient(to right top, rgb(102,45,148), 70%,rgb(232,2,140))'
  small_1.style.backgroundColor = 'black'
  small_1.style.borderImageSlice = '1'
  }
  setTimeout(small1_1,1000)
  function small_1_1(){
  small_1.style.borderImage = 'none'
  small_1.style.backgroundColor = 'white'
  }
  setTimeout(small_1_1,2000)
  
  function small_1_2(){    
    small_1.setAttribute('style', 'background-color:!important');
  }
  setTimeout(small_1_2,2010)
  return false
};