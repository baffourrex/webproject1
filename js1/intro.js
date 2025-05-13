    //variables
    //let

    // let name = 'xeux';

    // var age ='30';

    // const city ='llorin'

    // console.log(name);

    // document.write(age)

    // alert(city)

    // //data types

    // // primitive

    // let a = 'XEUX'; //string

    // let b = 45 //number

    // let c = true; // boolean 

    // let d = undefined // undefined data type

    // let e = null // object

    // let f = Symbol; // function

    // document.write(f)

    //non primitive 
    //object, array and function
    // const person = {
    //     name: 'XeuX',
    //     age: 30,
    // };

    // console.log(person)

    // const demon = {
    //     surname: 'Burner',
    //     firstName:'XeuX',
    //     age: 2024-1880,
    //     job:'gamer',
    //     friends:['hu','she','wee',]
    // }

    // console.log(demon)

    //for loop: initializing, condition and increment
    // for (i = 0; i <5; i++){
    //     console.log('XeuX', i);
    // }

    //EVEN AND ODD (NB=check console!!!)
    // for (let num =1; num <= 20; num++){
    //     if (num % 2 ==0){
    //         console.log('Even');
    //     }
    //     else if (num % 1==0)
    //     {
    //         console.log('Odd');
    //     }
    //     else{console.log(num);}
    // }

    //while loop
    // let num = 1;
    // while (num <= 20){
    //        if (num % 2 ==0){
    //              console.log('Even');
    //          }
    //         else if (num % 1==0)
    //          {
    //              console.log('Odd');
    //          }
    //          else{console.log(num);}
    //          num++
    //     }
     
    //DO WHILE LOOP
    // let count = 0;
    // do {
    //     console.log('XeuX' + count)
    //     count++
    // }
    // while (count < 5);

    // for in 
    // let student ={
    //     XeuX: 60,
    //     Burner: 70,
    //     Drake : 80,
    //     Xed :90
    // };
    // for (let key in student)
    //     console.log(key, student[key]);


    //for of
    // let student =[
    //     'XeuX: 60',
    //     'Burner:70',
    //     'Drake: 80',
    //     'Xed :90'
    // ];
    // for (let key of student)
    //     console.log(key, student[key]);

    // let bookShelf = ['Math Books', 'English Books', 'History Books'];
//Adding element at the beginning
    // bookShelf.unshift(' Language Books')

//Adding element at the end
    // bookShelf.push(' Religion Books')
    

//Removing element/Replace
// bookShelf[1] = 'Chemistry Books';

//Removing element at the end 
// bookShelf.pop(3)
// document.write(bookShelf)

//Combination of array
// let bookShelf = ['Math Books', 'English Books', 'History Books'];
// let bookShelf2 = ['Html Books', 'CSS Books', 'Javascript Books'];
// const combined = bookShelf.concat(bookShelf)
// //document.write(combined)

// //slicing an array
// const slice = combined.slice(2)
// document.write(slice)

// let tweet = prompt('Compose your tweet');
// let tweetlength = tweet.length;
// alert('you have written ' + tweetlength + ' characters, you have ' + (20 - tweetlength) + ' characters remaining');

// let tweetUnder30 = tweet.slice(0, 30);
// alert (tweetUnder30); 

// let myName = prompt("Hello! what is your name ?");
// let firstChar = myName.slice(0, 5);
// let firstCharUppercase = firstChar.toUpperCase();
// let otherNames = myName.slice(5, myName.length);
// let otherNamesToLowercase = otherNames.toLowerCase();
// alert("Hi! my name is: " + firstCharUppercase + otherNamesToLowercase);

//ANOTHER SOLUTION
// let fullName = prompt("Hello! what is your name?");
// //split names by spacing
// let nameParts = fullName.trim().split(" ");
// //separate the surname and convert to uppercase 
// let surname = nameParts.shift().toUpperCase();
// //convert the othernames to lowercase
// let otherNames = nameParts.map(name => name.toLowerCase());
// //join the surname and othernames
// let joinedName = [surname].concat(otherNames).join(" ");
// alert("Hi! my name is: " + joinedName);

//FUNCTION DECLARATION
// function myHobby(){
    // document.write('Teaching')
// }
// myHobby();
//FUNCTION EXPRESSION
// let myName= function() {
//     document.write('XeuX');
// }
// myName();

//FUNCTION TO MAKE ROASTED CHICKEN BASED ON SIZE
function makeRoastedChicken(size){
    //preparation time based on chicken size
    let time;
    if (size==="Half of"){
        time=10;
    } else if (size === "Full"){
        time=15;
    } else if (size === "Complete"){
        time=20;
}
return time;
}
//main function to handle chicken order
function orderChicken(){
    let chickenSize = document.getElementById('size').value;
    let preparationTime = makeRoastedChicken(chickenSize);
    //display result
document.getElementById('result').innerText = `Your ${chickenSize} Roasted chicken will take ${preparationTime} minutes to prepare.`;
}