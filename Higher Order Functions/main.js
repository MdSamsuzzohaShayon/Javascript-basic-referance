const companies = [{
        name: 'Microsoft',
        catagory: "IT",
        start: 1960,
        end: 2018
    },
    {
        name: 'Apple',
        catagory: "IT",
        start: 1962,
        end: 2018
    },
    {
        name: 'IBM',
        catagory: "IT",
        start: 1940,
        end: 2018
    },
    {
        name: 'Disney',
        catagory: "Media",
        start: 1970,
        end: 2018
    },
    {
        name: 'Marvel',
        catagory: "Film",
        start: 2006,
        end: 2018
    },
    {
        name: 'DC',
        catagory: "Film",
        start: 2008,
        end: 2018
    },
    {
        name: 'Lenovo',
        catagory: "Laptop",
        start: 1960,
        end: 2013
    },
    {
        name: 'Google',
        catagory: "Search Engin",
        start: 2004,
        end: 2018
    },
    {
        name: 'Twitter',
        catagory: "Communication",
        start: 2006,
        end: 2018
    }
];

const ages = [33, 12, 45, 43, 24, 43, 11, 24, 23, 25, 26];

/*companies.forEach(function(company){
    console.log(company)
});*/






//FILTER
//GETTING 21 AND OLDER PEOPLE BY FILTERING
/*
let canDrink =[];
for (let i =0; i< ages.length;i++){
    if(ages[i] >= 21){
        canDrink.push(ages[i]);
    }
}
console.log(`ages to drink: ${canDrink}`);*/

/*
const canDrink = ages.filter(function(age){
    if(age >= 21){
        return true;
    }
});

console.log(`ages to drink: ${canDrink}`);*/

/*
const canDrink = ages.filter(age => age >= 21 );
console.log(`ages to drink: ${canDrink}`);
*/




//FILTER IT COMPANIES
/*
const itCom = companies.filter(function(c){
    if (c.catagory === "Film"){
        return true;
    }
})*/
// const itCom = companies.filter(it => it.catagory === "IT");
//  console.log(itCom);







//MAP
// WE CAN CREATE NEW ARRAY FROM CURRENT ARRAY
// CREATE ARRAY OF COMPANY NAME
/*const test = companies.map(function (company){
   return company.name;
});*/

// const test = companies.map(company => company.name); 
//     console.log(test);


/*
const test = companies.map(company => company.name); 
const age = ages.map(age => Math.sqrt(age)).map(age => age*2);
    console.log(age);*/


//SORT
// COMPARE MULTIPLE OBJECT
//SORT COMPANIES BY START YEARS
/*const sortedCompanies = companies.sort((com1, com2)=>{
    if(com1.start > com2.start){
        return 1;
    }else{
        return -1;
    }
});*/

//const sortedCompanies= companies.sort((com1, com2) => com1.start > com2.start ? 1 :-1);
//console.log(sortedCompanies);

//const sortAges =  ages.sort((a, b) => a-b);
// const sortAges =  ages.sort((a, b) => b-a);
//console.log(sortAges);



//REDUCE
/*
let ageSum =0;
for (let i = 0; i<ages.length; i++){
    ageSum += ages[i];
}*/
// const ageSum = ages.reduce (function (total, age){
//     return total + age;
// }, 0);

//const ageSum = ages.reduce ((total, age)=>total + age , 0)
//GET TOTAL YEARS

console.log(ageSum);

