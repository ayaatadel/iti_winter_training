/***
 * type of functions
 * iterations on array (array api)
 * event
 */

// let arr=["saleh","mohammed","ahmed","bassant"]
// // for (let index = 0; index < arr.length; index++) {
// //     console.log(arr[index]);
    
    
// // }

// let arr=['al',12]

// let produncts = [
//     {
//       name: "pizza",
//       image: "https://images.pexels.com/photos/13471546/pexels-photo-13471546.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//     },
//     {
//       name: "folower",
//       image: "https://images.pexels.com/photos/15295923/pexels-photo-15295923/free-photo-of-bouquet-of-flowers-in-clothing-with-feelings-written-on-it.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//     },
//     {
//       name: "coffe",
//       image:
//         "https://images.pexels.com/photos/29781721/pexels-photo-29781721/free-photo-of-cozy-coffee-with-open-book-and-vintage-spoon.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//     },
//   ];

//   for (let index = 0; index < produncts.length; index++) {
//    console.log( produncts[index]['name']);
//    console.log( produncts[index].image);
   
    
//   }


  // for of ==>key  ==> for in===> index

  

//   for (const element of produncts) {  // object ==> value
//     //   console.log(element['name']);
//     //   console.log(element['image']);
//     console.log(element);
    
//     for (const key in element) {
//     //  console.log(key);
//     console.log(element[key]);
    
       
//     }
      
//   }
//   console.log("***************************************");
  
// //     for (let index = 0; index < produncts.length; index++) {
// //             console.log(produncts[index]);
            
   
    
// //   }
  

// let arr=["saleh","mohammed","ahmed","bassant"]

// // for (const element of arr) {
// //  console.log(element);
    
// // }
// for (const element in arr) {  /// key ==> object ==> index
//  console.log(element);
    
// }


// array of object ==> values 
// for of ========> object ===> obj[proprity]
// obj ========> key===> for in ===> obj[key]

// let obj= {
//     name: "coffe",
//     image:
//       "https://images.pexels.com/photos/29781721/pexels-photo-29781721/free-photo-of-cozy-coffee-with-open-book-and-vintage-spoon.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//   }

//   for (const element of obj) {
//  console.log(element);  // value  // array// error
 
//   }
//   for (const element in obj) {
//  console.log(element);   // key  ===> work
 
//   }


// functions ==> retrun ==> void
// function ==> regular function

// function test()
// {
//     // console.log("Hello");
//     return "hello"
    
// }
// let result=test();
// console.log(result);
// function expression==> 

// let result=function test(x="test")
// {
//     console.log(x);
//     return "hello"
    
// }

// console.log(result("abd ALrahman"));

// arrow function ==> expression function without function and name of function

// let result=(x="test")=>{
//     console.log(x);
//     return "hello"
    
// }
// console.log(result("abd ALrahman"));


// function callback function  ==> function ==> call ==> funtion

// function result(num)
// {
//     // console.log(num);
    

// }


// // 5   3
// function sum(num1,num2,fun)
// {           // 1+3
//    let value=num1+num2;  // 3
//    console.log(value);
   
// }

// sum(1,2,result(5))

// function result(num1,num2)
// {

//     test= num1+num2;
//    console.log(test);
  
// }
// let value=(fun)=>{
//     result(5,2);
//     console.log("hello");
    
// }
// console.log(value(result(5,3)));




// let value=()=>{
//     console.log("hello");
    
// }
// function tasst() {
   
// }
// value();
// tasst();


// self invoked function  ==> call by it self

// (function ()
// {
//     console.log("self invoked");
    
// })();


// 
// console.log(x()); // hoisting
// function x()
// {
//     function y() {
//         return 1;
//     }
//     return y();  //hoisting
//     function y() {
//         return 0;
//     }
// }
// (console.log(x()));
// error 
// 1
//0===================>

    // arrow function
//     let x=()=>{
//         return 1
//     }

//     //  let x=()=>1;
//    let z=_=>'hello';
//    console.log(z());
   


//     let y=(name,age)=>console.log(name,age);
//     y("iti",30)
//     let q=name=>console.log(name);
//     q("iti")


// array api ==> iterations on array

// for , for of , for in
// for each

// let produncts = [
//     {
//       name: "pizza",
//       image: "https://images.pexels.com/photos/13471546/pexels-photo-13471546.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//     },
//     {
//       name: "folower",
//       image: "https://images.pexels.com/photos/15295923/pexels-photo-15295923/free-photo-of-bouquet-of-flowers-in-clothing-with-feelings-written-on-it.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//     },
//     {
//       name: "coffe",
//       image:
//         "https://images.pexels.com/photos/29781721/pexels-photo-29781721/free-photo-of-cozy-coffee-with-open-book-and-vintage-spoon.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//     },
//   ];


let arr=["iti","ui","php"]

// for (let index = 0; index < arr.length; index++) {
//   console.log(arr[index]);
  
// }

// for(let ele of arr) {
//     console.log(ele);
    
// }

// // for each===> arrName.forEach((element){})==> call back function
// arr.forEach(element => {
//     console.log(element);
// });

// arr.forEach(function(item , index)
// {
//    console.log(index,":",item);
   
// })

// map ==> return array ==> length ==> main arry

// let result=arr.map(function(item,index){
//     // console.log(index,':',item);
//     if(item=="iti")
//     {
//     return (item);
     
//     }
    
// }) 

// filter ==> iteration array ==>return =>array=> values run condition 

// let res=arr.filter(function(item,index){
//     // console.log(index,':',item);
//     if(item=="iti")
//     {
//     return (item);
     
//     }
    
// }) 
// console.log(res);


// 
// let arr1=[1,2,3]
// let arr2=arr1
// arr1.push(5)
// arr1.push("iti")
// console.log(arr2); 
// console.log(arr1); 

// arr2.push(12)
// arr2.push("tracks")
// console.log(arr1); 
// console.log(arr2); 

//*************************   array , object ==> refrence data type ==>  */
// spread operator  ==> ... ==> values

// let arr1=[1,2,3]
// let arr2=[...arr1]
// arr1.push(5)
// arr1.push("iti")
// console.log(arr2); // 1,2,3
// console.log(arr1); // 1,2,3,5,iti

// arr2.push(12)
// arr2.push("tracks")
// console.log(arr1); // 1,2,3,5,iti
// console.log(arr2); // 1,2,3,12,tracks

// let person1={name:"mohammed",age:22}
// let person2={...person1}
// person2.address="cairo"
// person1.faculty="CS"

// console.log(person1);
// console.log(person2);

// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget
// Event ==> action ==> elemnt in html

// function clickMe()
// {
//     console.log("Track Ui");
    
// }


// onEvent ==> elemnt.onclick=function(){}
// let btn=document.getElementById("btn")
// btn.onclick=function()
// {
//     console.log("hello");
    
// }
// btn.onmouseover=function()
// {
//     console.log("event");
    
// }

// btn.onclick=clickMe

// btn.onclick=()=>
// {
//     console.log("iti");
    
// }
// btn.onclick=_=>
// {
//     console.log("hello");
    
// }
// btn.onclick=_=>console.log("hello");


// addEventListender

// btn.addEventListener('click',function(){
//     console.log("hello"); 
// })
// btn.addEventListener('click',function(){
//     console.log("iti");
// })
// btn.addEventListener('click',()=>{
//     console.log("iti");
// })
// btn.addEventListener('click',_=>console.log("iti"))


/**
 * btn.onclick
 * onEvent ==> if has more than same event on same elemnt ==>execute last event
 *btn.addEventListener('eventName',funtion(){
 })
* addEventListener==>if has more than same event on same elemnt ==>execute all events
 */

// btn.addEventListener('click',(e)=>{
//     console.log(e.target);
//     console.log(e);
// })
// btn.addEventListener('mouseover',(e)=>{
//     console.log(e.target);
//     console.log(e);
// })

// btn.removeEventListener('click',clickHandler)


// document.body.addEventListener('mouseover',(e)=>{
//     // console.log("hello");
//     console.log(e.target);
    
// })

// mouse ======> mousein , mouseup , mouseover, mousemove
// focus , blur
//keyboard===>keyup  keydown
// browser==> onload

// window.addEventListener('load',(e)=>{
//     alert('welcome')
//     btn.style=`color:red`
//     console.log(e.target);
    

// })


// btn.addEventListener('mouseover',(e)=>{
//     // console.log(e.target);
//     // console.log(e);
//     alert('welcome')
// })
let nameInput=document.getElementById('name')


nameInput.addEventListener('change',(e)=>{
    // console.log(nameInput.value);
 console.log(   e.target.value);
 
})
