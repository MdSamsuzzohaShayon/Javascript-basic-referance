const result = document.getElementById('result');
const message = document.getElementById('message');


const breadcrumb = document.createElement('div');
breadcrumb.setAttribute('class', "ui breadcrumb");


const addElement = (sec) =>{
  const selection = document.createElement('a')
  selection.setAttribute('class', 'selection');
  selection.textContent = sec;
  const angleIcon = document.createElement('i')
  angleIcon.className = "right angle icon divider";
  breadcrumb.append(selection, angleIcon);
}


setTimeout(() => {
  console.log("Waited one second");
  result.textContent = "Waited one second";
  message.append(breadcrumb);
  addElement("1sec");

  setTimeout(()=>{
    addElement('2sec');
    setTimeout(()=>{
      addElement('3sec');
    }, 1000);
  }, 1000);
}, 1000);


setTimeout(() => {
  console.log("Waited one second");
  result.textContent = "Waited one second";

}, 1000);


console.log("Run without three second delay");
result.textContent = "Run without three second delay";


/*
function greeting(name) {
  alert('Hello ' + name);
}



function processUserInput(callback) {
  const name = prompt('Please enter your name.');
  callback(name); // THIS IS A FUNCTION PARAMETERS
}

processUserInput(greeting);
*/
