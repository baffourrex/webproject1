// // // // //array
// // // // let country = ['America','Ireland', 'Jamaca',   ]

// // // // let selectedcountry = [country[0], country[2]]

// // // // document.write(selectedcountry)

// // // let country = [];

// // // country[0] ='America';
// // // country[1] ='Ireland';
// // // country[2] ='Jamaca';

// // // document.write(country[0])
 
// // //FUNCTION

// // //performing task

// // function lgtech(surname, firstName, lastName){
// // document.write('Dear', + surname + firstName + lastName + ' Congratulations, ' + 'YOU WON' + 'Claim your reward')
// // }

// // lgtech('Drake', 'Xeux' );

// //CALCULATE

// //COMPOUND INTEREST

// function calci(P, R, timesC, Y ){
//     const deciRate = R/100;
//     const amount =  P* Math.pow((1 + deciRate/timesC), timesC + Y);
//     return amount.toFixed(2)
// }

// const P = 1000;
// const R =7;
// const timesC =8;
// const Y = 12;

// const accAmount = calci(P, R, timesC, Y);
// console.log(accAmount);

// // ARITHMETIC OPERATOR
// var a = 2;
// var b = 6;
// let c = 6;
// let result = (a*b)**c; 
// document.write(result);
  
//ASSIGNMENT OPERATOR
// let y = 10;
// y *=6;// 10*6
// document.write(y)
// let y = 10;
// y <<=6;// 20,40,80,160,320,640
// document.write(y)
// let y = 640;
// y >>=6;// 10*6
// document.write(y)

//(USING ARROW FUNCTIONS)
let cart = [];
//Arrow function to add an item to the cart 
const addItem = (price) => {
    cart.push(price);
    updateCartDisplay();
};
//Arrow function to calculate total price
const calculateTotal = () => {
    const total = cart.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    document.getElementById('total').innerText = 'Total: $' + total;
};
//Arrow function to update cart display
const updateCartDisplay = () => {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Clear previous items
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerText = ' Gadget ' + (index + 1) + ': $' + item;
        cartItems.appendChild(li);

    });
};
//Arrow function to place order
const placeOrder = () => {
    if (cart.length === 0){
        document.getElementById('order-status').innerText = 'Your cart is empty!';
    } else {
        document.getElementById('order-status').innerText = 'Your cart is successfully picked! Total: $' + cart.reduce((a, b) => a + b, 0);
        cart = []; //clear the cart
        updateCartDisplay();
        document.getElementById('Total').innerText = ''; // clear the total

   
    }
};
//Event listeners
document.getElementById('gadget1').addEventListener('click', () => addItem(300));
document.getElementById('gadget2').addEventListener('click', () => addItem(800));
document.getElementById('gadget3').addEventListener('click', () => addItem(400));
document.getElementById('calculate-total').addEventListener('click', calculateTotal);
document.getElementById('place-order').addEventListener('click', placeOrder);

