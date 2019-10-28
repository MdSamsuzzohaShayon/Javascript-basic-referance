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




/*

class AnimationElements {
    constructor(id, duration, iterations, tXStart, tXStop, tYStart, tYStop) {
        this.id = id;
        this.duration = duration;
        this.iterations = iterations;
        this.tXStart = tXStart;
        this.tXStop = tXStop;
        this.tYStart = tYStart;
        this.tYStop = tYStop;

    }

    
    animationMade = () => {
        let element = document.getElementById(this.id);
        element.animate([
            {
                transform: 'translateX('+this.tXStart+'%)'
            },
            {
                transform: 'translateX('+this.tXStop+'%)'
            }
        ], {
            duration: this.duration,
            iterations: this.iterations
        })
    }
}

const carAnimation = new AnimationElements('car', 2000, Infinity, '0', '100', '0', '0');
carAnimation.animationMade();
*/





// document.getElementById("img-holder").animate([
//     // keyframes
//     { transform: 'translateX(0px)' }, 
//     { transform: 'translateX(100%)' }
//   ], { 
//     // timing options
//     duration: 2000,
//     iterations: Infinity
//   });





















// https://codepen.io/rachelnabors/pen/eJyWzm/?editors=0010
const car = document.getElementById("car");
const cloud_one = document.getElementById("cloud_one");
const cloud_two = document.getElementById("cloud_two");



// CAR ANIMATION
class CarAnimate {
    // car = document.getElementById("car");
    constructor(tXStart, tXStop, tYStart, tYStop, startOpacity, stopOpacity) {
        this.tXStart = tXStart;
        this.tXStop = tXStop;
        this.tYStart = tYStart;
        this.tYStop = tYStop;
        this.startOpacity = startOpacity;
        this.stopOpacity = stopOpacity;
    }






    start(id, dur, ite) {
        let carRightKeyframes = new KeyframeEffect(
            id,
            [{
                    // transform: 'translateY(' + this.tYStart + '%)',
                    transform: 'translateX(' + this.tXStart + '%)',
                    opacity: this.startOpacity
                },
                {
                    // transform: 'translateY(' + this.tYStop + '%)',
                    transform: 'translateX(' + this.tXStop+ '%)',
                    opacity: this.stopOpacity
                }
            ], {
                duration: dur,
                fill: 'forwards',
                iterations: ite
            },

        );



        let carRightAnimation = new Animation(carRightKeyframes, document.timeline);
        carRightAnimation.play(dur, ite);
    }

}

// CAR ANIMATION 
const carAnimate = new CarAnimate('0', '100', '0', '0', 0, 1);
carAnimate.start(car, 2000, Infinity);



// CLOUDS ANIMATION
const cloudAnimate = new CarAnimate('0', '100', '0', '100', 0.8, 1);
carAnimate.start(cloud_one, 10000, Infinity);
carAnimate.start(cloud_two, 15000, Infinity);




// const allAnimations = document.timeline.getAnimations();
// allAnimations.forEach((ani) => {
//   ani.pause();
//   console.log(ani.playState);
//   ani.reverse();
// });