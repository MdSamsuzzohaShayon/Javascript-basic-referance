// https://developer.mozilla.org/en-US/docs/Web/API/Element/animate
// document.getElementById("img-holder").animate([
//     // keyframes
//     { transform: 'translateX(0px)' }, 
//     { transform: 'translateX(100%)' }
//   ], { 
//     // timing options
//     duration: 2000,
//     iterations: Infinity
//   });


// document.body.style.height= "100vh";
// document.body.style.width= "100vw";
// document.body.style.overflow= "hidden";


// const car = document.getElementById("car");



// CAR ANIMATION
class CarAnimate {
    car = document.getElementById("car");
    constructor(){
        carRightKeyframes = new KeyframeEffect(
            car,
            [{
                    transform: 'translateX(0%)'
                },
                {
                    transform: 'translateX(100%)'
                }
            ], {
                duration: 3000,
                fill: 'forwards',
                iterations: Infinity
            }
        );
    }
    carRightAnimation = new Animation(carRightKeyframes, document.timeline);
    start(){
        carRightAnimation.play();
    }
}


const CarAnimate = new CarAnimate()
CarAnimate.start();