// MOUSE CLICK EVENT

let button = document.getElementById('button').addEventListener(
    'click',
    buttonClick
);
function buttonClick(e){
    /*console.log('button clicked');
    document.getElementById('header-title').textContent = 'Changed';
    document.querySelector('#main').style.backgroundColor = '#f4f4f4';*/
    
    
    //console.log(e);
   
   
    /* console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);
    console.log(e.target.tagName);
    

    let output = document.getElementById('output');
    output.innerHTML = '<h3>'+e.target.id+'</h3>' ;

    console.log(e.type);*/

    // THIS IS DIMENSION OF THE WINDOW
    /*console.log(e.clientX);
    console.log(e.clientY);

    //THIS IS FOR ONLY BUTTON
    console.log(e.offsetX);
    console.log(e.offsetY);
    console.log(e.altKey);
    console.log(e.ctrlKey);
    console.log(e.shiftKey);*/
    
    

}


//RUN EVENT
/*
button.addEventListener('mousedown', runEvent);
button.addEventListener('mouseup', runEvent);
function runEvent(e){
    console.log(`Event Type: ${e.type}`);
    
}*/


/*let box = document.getElementById('box');
box.addEventListener('mouseenter', runThatEvent);
box.addEventListener('mouseleave', runThatEvent);
box.addEventListener('mouseover', runThatEvent);
box.addEventListener('mouseout', runThatEvent);
box.addEventListener('mousemove', runThatEvent);
function runThatEvent(e){
    console.log(`Event Type: ${e.type}`);
    output.innerHTML = `<h3>MouseX: ${e.offsetX} MouseX: ${e.offsetY}</h3>`;
    box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
}*/

let itemInput = document.querySelector('input[type="text"]') ;
let form = document.querySelector('form') ;
//itemInput.addEventListener('keydown', seeMoreEvent);
itemInput.addEventListener('keyup', seeMoreEvent);
itemInput.addEventListener('keypress', seeMoreEvent);
function seeMoreEvent(e){
    console.log(`Event Type: ${e.type}`);
    //console.log(e.target.value);
    //document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';   

}