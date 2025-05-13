// //CLASSES (it is a blueprint for objects that share simmilar properties)
// class House{
//     constructor(color, rooms){
//         this.color = color;
//         this.rooms = rooms;
//     }
//     describe(){
//         return `This house is ${this.color} and has ${this.rooms} rooms`;
//     }
// }
// //creating object from the class 
// const myHouse = new House('Blue', 6);
// const myNeighbour = new House ('Red', 5)
// const myFriendHouse = new House('Purple', 7);
// //using the object
// console.log(myHouse.describe());
// console.log(myNeighbour.describe());
// console.log(myFriendHouse.describe());

//POLYMORPHISM
// // PARENT CLASS
// class House{
//     constructor(lightOn){
//         this.lightOn = lightOn;
    
//     }
//     turnOnLights(){
//         this.lightOn = true;
//         console.log("The lights in the house are now on.");
//     }
// }
// //Child class
// class SmartHouse extends House {
//     constructor(cameraOn){
//         super();
    
//     }
//     turnOnLights(){
//         this.turnOnLights = true;
//         console.log("The lights in the smart house are now on with remote controller.!")
//     }
// }
// function activateLights(house){
//     house.turnOnLights();
// }
// const myHouse = new House();
// const mySmartHouse = new SmartHouse();
// activateLights(myHouse);
// activateLights(mySmartHouse);

//COMPOSITION
// class Solarlights {
//     turnOn(){
//         console.log("The Solar lights are now on!")
//     }
// }
// class Gate {
//     lock(){
//         console.log("The Gate is now locked!")
//     }
// }
// class SecurityCamera {
//     activate(){
//         console.log("Security camera is now on!")
//     }
// }
// class House {
//     constructor(){
//         this.Solarlights = new Solarlights();
//         this.Gate = new Gate()
//         this.SecurityCamera = new SecurityCamera()
//     }
//     turnOnLights(){
//         this.Solarlights.turnOn();
//     }
// }
// const myHouse = new House();
// myHouse.turnOnLights();

//PROMPT
// let age = prompt("Enter your age!");
// let remainingYears = 100 - age;
// let days = remainingYears * 365;
// let weeks = remainingYears * 52;
// let months = remainingYears * 12;
// alert ("You have " + days + "days, " + weeks + " weeks, and"
//     + months + "months left!"
// );

//LOVE CALCULATOR
// let yourName = prompt("what is your name?");
// let yourPartName = prompt("what is your partner's name?");
// let loveScore = Math.random() * 100;
// loveScore = Math.floor (loveScore);
// alert("The love score for " + yourName + " and " + yourPartName + " is " + loveScore + " % ")

// lovescore 2
// let yourName = prompt("what is your name?");
// let yourPartName = prompt("what is your partner's name?");
// let loveScore = Math.random() * 100;
// loveScore = Math.floor (loveScore);
// if (loveScore <= 30){
//     alert("The love score for " + yourName + " and " + yourPartName +
//         " is " + loveScore + "% - you should rethink this relationship" 
//     );
// }
// else if (loveScore <= 30 && loveScore <= 50){
//     alert("The love score for " + yourName + " and " + yourPartName +
//         " is " + loveScore + "% - put more effort to grow the relationship" 
//     );
// }
// else if (loveScore <= 50 && loveScore <= 70){
//     alert("The love score for " + yourName + " and " + yourPartName +
//         " is " + loveScore + "% - wow! this is a serious relationship" 
//     );
// }
// else alert("The love score for " + yourName + " and " + yourPartName +
//         " is " + loveScore + "% - What a magnificient relationship" 
//     );

//NORMAL CALCULATOR
const calcScreen = document.getElementById("calc-screen");
const buttons = document.querySelector(".calc-buttons");

//Initialize the display value
calcScreen.value = "";

//Event delegation for all button clicks
buttons.addEventListener("click", (e) => {
    const button = e.target;
    const action = button.dataset.action;
    const value = button.dataset.value;

    //If the button is clicked, process the action or value
    if (action) {
        handleAction(action);
    }
    else if (value) {
        appendValue(value);
    }
});

function appendValue(value) {
    calcScreen.value += value;
}

function handleAction(action) {
    switch (action) {
        case "clear":
            calcScreen.value = "";
            break;
        case "delete":
            calcScreen.value =calcScreen.value.slice(0, -1);
            break;
        case "equals":
            try{
                calcScreen.value = eval(calcScreen.value.replace("+", "/").replace("x", "*"))
            } catch (e) {
                calcScreen.value = "Error";
            }
            break;
    }
}