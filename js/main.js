document.getElementById("img-holder").animate([
    // keyframes
    { transform: 'translateX(0px)' }, 
    { transform: 'translateX(500px)' }
  ], { 
    // timing options
    duration: 1000,
    iterations: Infinity
  });