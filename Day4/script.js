/***
 * type of functions
 * iterations on array (array api)
 * event
 */

// let arr=["saleh","mohammed","ahmed","bassant"]
// // for (let index = 0; index < arr.length; index++) {
// //     console.log(arr[index]);
    
    
// // }

let arr=['al',12]

let produncts = [
    {
      name: "pizza",
      image: "https://images.pexels.com/photos/13471546/pexels-photo-13471546.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      name: "folower",
      image: "https://images.pexels.com/photos/15295923/pexels-photo-15295923/free-photo-of-bouquet-of-flowers-in-clothing-with-feelings-written-on-it.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      name: "coffe",
      image:
        "https://images.pexels.com/photos/29781721/pexels-photo-29781721/free-photo-of-cozy-coffee-with-open-book-and-vintage-spoon.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];

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

(function ()
{
    console.log("self invoked");
    
})();


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
    let x=()=>{
        return 1
    }

    //  let x=()=>1;
   let z=_=>'hello';
   console.log(z());
   


    let y=(name,age)=>console.log(name,age);
    y("iti",30)
    let q=name=>console.log(name);
    q("iti")
