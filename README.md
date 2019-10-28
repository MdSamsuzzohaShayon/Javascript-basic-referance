# JS Animation 

[MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Element/animate)

 - [Keyframes format](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats)

 - [Properties, Events, Methods](https://developer.mozilla.org/en-US/docs/Web/API/Animation)

 - [Effect Timing](https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming)

 - [Keyframes effect](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect)



 ## Problem


 Hlw everyone, I am making a simple animation with javascript. I used Animation class from Web Animation API. I just want to create few more class want to animate different element with I can replace transform value of translateX by creating a new class. I have setup my constructor I just want to dynamically pass the value to translateX; [This is my full project ](https://codepen.io/mdsamsuzzohashayon/pen/XWWgRZg) And js code is here 

 
 ``` 
 // https://codepen.io/rachelnabors/pen/eJyWzm/?editors=0010 
 const car = document.getElementById("car"); 
 // CAR ANIMATION 
 class CarAnimate { 
     // car = document.getElementById("car"); 
     constructor(tFormXStart , tFormYStart, tFormXStop, tFormYStop, startOpacity, stopOpacity) { 
         this.tFormXStart = tFormXStart; 
         this.tFormYStart = tFormYStart; 
         this.tFormXStop = tFormXStop; 
         this.tFormYStop = tFormYStop; 
         this.startOpacity = startOpacity; 
         this.stopOpacity = stopOpacity; 
         } 
         carRightKeyframes = new KeyframeEffect( 
             car, 
             [ 
                 { 
                     // WANT TO SET THE VALUE OF TRANSLATE X DYNAMICALLY
                      //HELP IF YOU CAN 
                    transform:'translateX(0%)', 
                }, 
                { 
                    transform: 'translateX(100%)',
                } 
            ], 
            { 
                duration: 3000, 
                fill: 'forwards', 
                iterations: Infinity 
            }, 
            ); 
            
            carRightAnimation = new Animation(this.carRightKeyframes, document.timeline); 
            start(){ 
                console.log(this.carRightAnimation.getTiming); 
                this.carRightAnimation.play(); }
    }
    
     
            const carAnimate =new CarAnimate('translateX(0%)', 'translateY(0%)', 'translateX(100%)', 'translateY(0%)',0, 1); 
            const time = carAnimate.getTiming console.log(time); 
            carAnimate.start(); 
 ``` 

 thank you
