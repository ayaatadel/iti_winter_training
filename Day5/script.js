/**
 * Synchrouns , Asynchrouns function
 * destructure
 * restparams
 * BOM
 * storage
 */

// function Synchrouns  ==> line by line
//Asynchrouns function  ==> time ,event (action)==> Event , SetTimeOut , setInterval

// function test()
// {
//     console.log("one");
//     console.log("two");
//     console.log("three");

// }

// test()
// btn.addEventListener('click',()=>{
//     console.log("Hello");

// })

// setInterval(() => {  // execute code ==> every time limit
//     console.log("Hello");
// }, 4000);   // itertaion

// setTimeout(() => {  // execute code  after time limit ==> stop
//     console.log("Hello");
// }, 2000);

// function createChicken()
// {
//     let imgChicken=document.createElement('img')
//     imgChicken.src="./imgs/chickenBlue.png"
//     document.body.appendChild(imgChicken)
//     imgChicken.style=
//     `width:20px;
//     height:20px;
//     margine:3px
//     `
// }
// let interval=setInterval(()=>{
//     createChicken()

// },200)

// setTimeout(() => {
//     clearInterval(interval)
// }, 10000);

// spread operator==> ...
// reset params ==> reset parameters ==> ...w
// function sum(n1=0,n2=0,...w)
// {
//     console.log(n1+n2);
//     console.log(w);

// }
// sum(2,3,9,12,15,25,102,320)

// destructure

// let arr=[1,2,3]
// let x=arr[0]
// let y=arr[1]

// // let [w,z]=arr;
// // let [w,,z]=arr;
// let [,w,z]=arr;
// console.log(w,z);

// function useArr()
// {
//     return [1,"iti",2,true]
// }
// // let[x,y]=useArr(); //[1,"iti",2,true]
// function useArr(temp)
// {
//     return [temp,()=> {
//         console.log("Hello");

//     }]
// }

// let[x,y]=useArr(5);
// y()
// console.log(x,y); //5 "hello" , 5 undefined

//
// let person={name:"nada",age:25}
// let a=person.name
// let b=person.age
//      // key:variable
// let {name:x,age:y}=person
// // let {name:name,age:age}=person
// let {name,age}=person // react  ==> sugar syntax

// // console.log(x,y);
// console.log(name,age);

///////////////////////*********************************** */
// BOM   ==> Browser Object Model
// BOM ==> window (alert , confirm , prompt , open , close , scroll)

// alert("Enter your name")
// console.log(window.location);

// btn.addEventListener('click',()=>{
//     window.location.href='https://www.javascripttutorial.net/javascript-bom/javascript-window/'
// })

// let result=confirm("are you student") // true , false
// console.log(result);
// let result = confirm("can you fly");
// if (result) {
//   let wild = confirm("are you wild");
//   if (wild) {
//     alert("You are Eagle");
//   } else {
//     alert("You are parrot");
//   }
// } else {
//   let liveSea = confirm("do you live under the sea");
//   if (liveSea) {
//     let wild = confirm("are you wild");
//     if (wild) {
//       alert("You are shark");
//     } else {
//       alert("You are dolphine");
//     }
//   } else {
//     let wild = confirm("are you wild");
//     if (wild) {
//       alert("You are lion");
//     } else {
//       alert("You are cat");
//     }
//   }
// }
// let jsWindow =null;
// btnOpen.addEventListener('click',()=>{
//     window.open("about.html","_self",)
    
//      jsWindow = window.open(
//         'http://127.0.0.1:5500/Day5/about.html',
//         'about',
//         'height=600,width=600');
    
// })

// btnClose.addEventListener('click',()=>{
//     setTimeout(() => {
//         jsWindow.close();
//     }, 2000);
    
// })

// Reference to the buttons in the DOM
// const btnOpen = document.getElementById('btnOpen'); // Replace with your button's ID
// const btnClose = document.getElementById('btnClose'); // Replace with your button's ID

// // Variable to store the reference to the opened window
// let jsWindow = null;

// // Event listener for the "Open" button
// btnOpen.addEventListener('click', () => {
//     // Open a new window and store its reference
//     jsWindow = window.open(
//         'http://127.0.0.1:5500/Day5/about.html', // URL to open
//         'about', // Window name
//         'height=600,width=600' // Window features
//     );

//     // Check if the window was successfully opened
//     if (!jsWindow) {
//         console.error('The window could not be opened. Please check your popup blocker settings.');
//     }
// });

// // Event listener for the "Close" button
// btnClose.addEventListener('click', () => {
//     // Check if the window exists and is open
//     if (jsWindow && !jsWindow.closed) {
//         // Close the window after a 2-second delay
//         setTimeout(() => {
//             jsWindow.close();
//             console.log('Window closed.');
//         }, 2000);
//     } else {
//         console.warn('The window is already closed or was never opened.');
//     }
// });


// storage   ==> browser
// localStorage , cookies , session 

localStorage.setItem('track','UI')
console.log(localStorage.getItem('track'));

// JSON.parse()
// JSON.stringify()
// object products 
// function 
//setInterval ==> generate function ==> 10 product==> card
// add to cart ==>
