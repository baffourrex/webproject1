// console.log('Xeux' + ' network');

// document.write('Xeux' + ' network');

// alert('Xeux' + ' network');

//COMPARISON OPERATORS
//RELATIONAL <,>,<=,>=,
//EQUALITY ===, !==,
// let a = 6;
// document.write(a!==6);
// let a = 30;
// let b = 20;
// document.write(a>b);

// let votingAge = 5;
// if (votingAge >=18){
//     document.write('You are eligible to vote!');
// } 
// else document.write('You are not eligible to vote!');

// let productPrice = 50;
// if (productPrice <=10){
//     document.write('Cheap product');
// } 
// else if (productPrice >=10 && productPrice<50){
//     document.write('Medium price ')
// }
// else {document.write('Expensive product');}

//EQUALITY  OPERATOR == :LOOSE EQUALITY (checks if the values are equal ignoring the datatypes) the opposite of ===
//document.write('3'===3);

// document.write(true==1);

// document.write(0===true);
// document.write(0==false);
// document.write(null==undefined);
// document.write(0==1);
// document.write(''==0);

// let a = 0;
// let b = true;
// if(a==b){
//     document.write('a and b are equal with loose equality');
// }
// else{document.write('a and b are not equal with loose equality' );}

//CONDITIONAL or TERNARY OPERATOR
// let age =18
// let status;
// if (age>=18){
//     status ='Adult';
// }
// else{
//     status ='Minor';
// }
// document.write(status);

// let age = 18;

// let status = age >=18 ? 'Adult' : 'Minor';

// document.write(status);
 
// function checkNS(number){
//     return number > 0? 'the num is +':
//             number <0? 'the num is -':'the num is 0';

// }
// let number =-5;
// let status =checkNS(number)
// document.write(status)

//LOGICAL 
//TYPES OF LOGICAL OPERATOR
//LOGICAL AND(&&) {1 false= false}
//LOGICAL OR(||)   {1 true= true}
//LOGICAL NOT(!)   {opposite}

// let a = true;
// let b = false;
// document.write(a && b);


//  let a = true;
//  let b = false;
//  document.write(a || b);


//  let a = true;
// document.write(!(a))

// var a =6;
// var b =7;
// var c = 8;

//document.write(a<b && b<c);
// document.write(a<b || b<c);
//document.write(! (b<c));

//RULES OF AND (&&)
//true && true returns true
//true && false returns false
//false && false returns false

//RULES OF AND (||)
//true || true returns true
//true || false returns true
//false || false returns false

//RULES OF AND (!)
//!false returns true
//!true returns false

//LOGICAL OPERATOR WITH NO BOOLEAN
//FALSY: 0, '', NaN, FALSE and Undefined
//TRUTHY: true, 3,'xeux'

//RULES OF AND (&&)
//if the first operand is falsy it returns the first operand 
//Otherwise return truthy

// let a = 0;
// let b =5;
// document.write(a && b);
 
//RULES OF OR (||)
// if the first operand is truthy it returns the first operand
// let a = 6;//if 6 is changed to falsy it returns the 7
// let b = 7;//if 6 is changed to falsy and 7 is changed to as string, returns string 
// document.write(a || b);


//RULES OF AND (!)
// let z =0;
// document.write(!(z))

// function isEFDI(age, school, sex){
//     return age >=20 || school && sex && age >= 15;
// }

// const age =13;
// const school = false; 
// const sex = true;

// const eligible =isEFDI(age, school, sex);
// document.write(eligible ? 'user is eligible' : 'user is not eligible');

//Bitwise
// bit{0 and 1} and byte{1 to 256}
//0 = 00000000;
//1 = 00000001;
//2 = 00000010;
//3 = 00000011;

// let decimal =256;
// let binary = (decimal >>>0).toString(2);
// document.write(binary)

//bitwise &,|,^,~,<<,>>,>>>

//CONDITIONAL STATEMENT
//if else
//if, else if, else-if else-if and else
// let hour = 12;
// if (hour>=6 && hour< 8)
// document.write('Good Morning! start planning ');

// else if(hour>= 8 && hour <10)
//     document.write('Good Afternoon! lets get to work');

// else if(hour>= 12 && hour <13)
//     document.write('Good Afternoon! take a break');

// else if(hour>= 13 && hour <14)
//     document.write('Good Afternoon! get back to work');

// else document.write('Good Evening!')

//SWITCH CASE
//switch, expression, case, value, code, break and default.
// let day = 'monday' ;
// switch(day){
//     case'monday':
//         document.write('Be blessed');
//         break;

//     case 'tuesday':
//         document.write('Attend the meeting!');
//          break;

//      case 'wednessday':
//         document.write('Work on the mid-week project!');
//          break;

//     default:
//         document.write('Please enter a valid day ');

// }

// let cGPA = prompt('Please enter your cGPA');
// if (cGPA>=4.5 && cGPA<= 5)
// document.write('YOU ARE IN FIRST CLASS!');

// else if(cGPA>= 3.5 && cGPA <=4.9)
//     document.write('YOU ARE IN SECOND CLASS!');

// else if(cGPA>= 2.40 && cGPA<=3.49)
//     document.write('YOU ARE IN SECOND CLASS!');

// else if(cGPA>= 1.50 && cGPA <=2.39)
//     document.write('YOU ARE IN THIRD CLASS!');

// else if(cGPA>= 1.00 && cGPA <=1.49)
//     document.write('YOU MADE A CROSSING CGPA!');

// else document.write('FAILED...ASKED TO SPILL OVER')

//NB=check console!!!

        // if (num % 2 ==0 && num % 3==0){
        //     console.log('FizzBuzz');
        // }
        // else if (num % 2==0)
        // {
        //     console.log('Fizz');
        // }
        //  else if (num % 3==0)
        // {
        //     console.log('Buzz');
        // }
        // else{console.log('not a number')}  
            
        //DYNAMIC NATURE OF AN OBJECT
        // const student = {
        //     name: 'XeuX',
        //     class: 'SSS 3A',
        //     gender: 'Male',
        //     position: 'Senior Prefect',
        //     favouriteCourse: 'Mathematics'
        // };
        // //Adding new property 
        // student.favouriteCourseMate = 'Drake';
        // //Modifying existing property
        // student.favouriteCourse = 'Physics';
        // //Removing existing property
        // delete student.gender;
        // console.log(student)

        // //ENUMERATING AN OBJECT
        // const school = {
        //     name: 'KSTU',
        //     location: 'Asafo',
        //     principal: 'Mr Alfred',
        //     numberOfStudents: 6000,
        //     establishedYear: 1844
        // };
        //   function enumerateSchoolProperties() {
        //     let propertiesList = 'School Properties: \n \n';
        //     for (let key in school){
        //         propertiesList += `${key}: ${school[key]}\n \n`;
        //     }
        //     console.log(propertiesList);
        //  }
        //  enumerateSchoolProperties();

//Function representing the school
function school(task){
  return `The school is now ${task}.`;
}

//Adding properties to the function(like an object)
school.name = "Green Valley High School";
school.address = " Maple St, Springfield";
school.studentCount = 500;
school.showInfo = function() {
  return `School Name: ${this.name},
  Address: ${this.address},
  Student Count: ${this.studentCount}`;
};

//Function to simulate teaching students 
function teachStudents(){
  const result = school('teaching students');
  document.getElementById('schoolTask').innerText=result;
}
function showSchoolInfo(){
  const info = school.showInfo();
  document.getElementById('schoolInfo').innerText=info;
}