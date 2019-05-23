// https://www.youtube.com/watch?v=fa4a-3JMTu4&t=9s

const output = document.getElementById('output');




// which js class represents regular expressions?
// RegExp
// var re = new RegExp('ab+c');
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions




// let str = "Finding foo in Foo and Bar";
// let n1 = str.search("Foo");
// let n2 = str.search(/Foo/i);
// output.textContent = `n1 = ${n1}, n2 = ${n2}`;  // OUTPUT n1= 15, n2= 8
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search




// let arr = [1,2,3];
// for(i=0; i<arr.length; arr[i++] = 0);
// output.textContent = arr; // OUTPUT 0,0,0






// SELECTING ALL WHAT WILL RETURN true
// let a = {a:1};
// output.textContent = delete a.a;  // OUTPUT true
// output.textContent = delete a.b;  // OUTPUT true
// output.textContent = 1 != Boolean('-1');  // OUTPUT false
// output.textContent = Boolean(1) == Boolean('-1');  // OUTPUT true
// output.textContent = Boolean(null) != Boolean('0');  // OUTPUT true








// let result = ((a)=>a*a);
// output.textContent = result(5.5);  // OUTPUT 30.25    






// let a ={
//     ['foo_' + (()=>1)()]: 2
// };
// output.textContent = a;
// console.log(a);  // OUTPUT Object Object



// let date = new Date();
// output.textContent = date;



// cookies are a plain test data with wich of the following variabe-length fields ?
// secure
// domain




// Arrow function expression has a shorter syntex than a function expression and does not blind its own as follow aruments, class




// let a = [1,2,3,4];
// output.textContent = a.length;
// output.textContent = a;





// const b = [1,2,3];
// const f = (a, ...b) => a+b;
// output.textContent = f(1);   //OUTPUT 1




// const f= (...f)=> f;
// const f = (...f)=> f.reduce(f=>f);
// const f = f => f;
// output.textContent = f(10);   //OUTPUT 10





// let a = -1 ? 'foo' ? null : -1 : 1;
// output.textContent = a;   //OUTPUT null




// let x = 50 / "Apple";
// output.textContent = x;   //OUTPUT NaN




// var a = true;
// b = false;
// console.log(delete a); // OUTPUT false



// let a = [1,2,3,4,5];
// let b = [1,2, ...a];
// console.log(b);  // OUTPUT [1, 2, 1, 2, 3, 4, 5]



// HOW TO REMOVE PROPERTY a
// let a = {a:1, b:2};
// delete a.a // THIS IS ANSWER
// console.log(a);





// let func = new Function('x', 'y', 'return x + y');
// let num = func(5,4);
// output.textContent = num;   //OUTPUT 9





// let foo = 10;
// bar =3;
// (function(){
//     var foo = 2;
//     bar =1;
// }())

// bar =bar+foo;
// output.textContent = bar;   //OUTPUT 11





// const data = [{a:true, b:false}, {a:false, b:true}];
// let result = false;
// let sample;
// while (sample = data.pop()){
//     result = sample.a;
// }
// output.textContent = result;
// console.log(result); // OUTPUT true




// HOW TO CHANGE FONT SIZE
// output.style.fontSize = "25px";




//  what is TypeError?
// Answer : A TypeError is thrown when an operand or argument passed to a function is incompatible with the type expected by that operator or function.




// let a = 'a';
// let b = 'b';
// a = [a, , b] = [1, 2, 3];
// output.textContent = a;  



// output.textContent = ~-(2+"2");


output.textContent = [0,0,0].fill(1,1);  






















