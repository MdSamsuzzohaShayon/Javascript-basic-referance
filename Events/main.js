// https://developer.mozilla.org/en-US/docs/Web/Events
/*
const log = document.querySelector('.event-log-contents');

const badImg = document.querySelector('.bad-img');
badImg.addEventListener('error', (event) => {
    log.textContent = log.textContent + `${event.type}: Loading image\n`;
    console.log(event)
});

const imgError = document.querySelector('#img-error');
imgError.addEventListener('click', () => {
    badImg.setAttribute('src', 'i-dont-exist');
});
*/


//WORKING BUT NOT PERFECTLY
/*
const menu = document.getElementById('menu');
let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  console.log(scroll_pos);
  menu.style.backgroundColor = "red";
  menu.style.textTransform = "uppercase";
  menu.style.visibility = "0.1";

}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});
*/


/*
window.addEventListener('pagehide', (e)=>{
  console.log(e);
  if(e.persisted){
    console.log(e.target);
  }
}, false);

window.addEventListener('pageshow', (e)=>{
  console.log(e);
  if(e.defaultPrevented){
    console.log(e.target);
  }
}, false);
*/




/*
// ANIMATION
// SELECTING BUTTON FOR ANIMATION
const animated = document.querySelector('.animated');
const btn = document.getElementById('btn');
let iterationCount = 0;

// STARTING THE ANIMATION
animated.addEventListener('animationstart', () => {
  console.log(`Animation iteration count: ${iterationCount}`);
});
// ITERATION COUNT THAT MEANS HOW MANY TIMES ANIMATED
animated.addEventListener('animationiteration', () => {
  iterationCount++;
});
// ANIMATION ENDING
animated.addEventListener('animationend', () => {
  animated.classList.remove('active');
});

// console.log(animated.classList);
// ADDING CLICK EVENT SO WHEN WE CLICK WE CAN SEE THE ANIMATION
btn.addEventListener('click', () => {
  animated.classList.toggle('active');
});
*/