/***
 * loops
 * arrray
 * object
 * functions
 */


// loops ==> iteration ==> reapt  ==> for while do-while ==>for each
// print numbers from 1 to 5
// document.writeln(1,"<br>")
// document.writeln(2,"<br>")
// document.writeln(3,"<br>")
// document.writeln(4,"<br>")
// document.writeln(5,"<br>")

// for(strat;condition;increment,decrement)
// {
//     body
// }
// // i=i+1 ===> i++

// for(var i=1;i<=5;i++)
// {
//   document.writeln(i,"<br>")
// }

// even numbers from 1 to 10

// for(var i=1;i<=10;i++)
// {
//     // document.writeln(i,"<br>")
//     if(i%2==0)
//     {
//         document.writeln(i,"<br>")  
//     }
// }


// odd numbers from 1 to 10
// for(var i=1;i<=10;i++)
// {
//         if(i%2!=0)
//     {
//         document.writeln(i,"<br>")  
//     }
// }


// while 

// while(condition)
// {
//     code
// }

// var i=1;
// while(i<=5)
// {
//     document.writeln(i,"<br>")  
//     i++;
// }
// even numbers from 1 to 10

// var i=1;
// while(i<=10)
// {
//     if(i%2==0)
//     {
//         document.writeln(i,"<br>")   //2  4 6 8 10
//     }
//     i++;
// }
// // odd numbers from 1 to 10

// var i=1
// while (i<=10) {
//     if(i%2==1)
//     {
//         document.writeln(i,"<br>")
     
//     }
//     i++
    
// }

// do while ==> do==> execute whlie(condition)  ==> 
// var i=1
//     do{
//       document.writeln(i,"<br>")   //1 2 3 4 5   ==> condition true
//       i++
//     }while(i<=5)   
// var i=1
//     do{
//       document.writeln(i,"<br>")   //1   ==> condition false
//       i++
//     }while(i>=5)   

// var i=1;
// do{
// if(i%2==0)
// {
//     document.writeln(i,"<br>")
// }
// i++;

// }while (i<=10) 


//     // odd numbers from 1 to 10

//     var i=1
//     do{
//         if(i%2!=0)
//         {
//             document.writeln(i,"<br>")
//         }
//         i++
//     }while(i<=10)



// array ==> any datatype===> var testArr=["ayaat","iti",1,2,true,[12,19]] 
  //==> index  (place each elemnt in array), value(value of each element) , length(size of array)
//   var testArr=["ayaat","iti",1,2,true] 
// // console.log(testArr);
// // console.log(testArr[0]);   // control of any elemeny in array ==> index
// // console.log(testArr[1]);
// // console.log(testArr[2]);

// // //============  over ride ==> value
// // testArr[0]="UI"
// // console.log(testArr[0]);
// // console.log(testArr);

// //==== add value (element ) in array
// testArr[5]="Winter training"
// // console.log(testArr);
// // funtion ==> add elemnt in array   ==> arrayName.push()==> at end of array
// testArr.push("Winter training","mohammed",22,"banana")
// console.log(testArr);

// // remeove elemt from array=>at end of array
// testArr.pop()
// console.log(testArr);
// // add elemnt in array   ==> arrayName.unshift()==> at end of array

// testArr.unshift("add","apple")
// console.log(testArr);

// //remeove elemt from array=>at start of array  ==> arrayName.shift()
// testArr.shift();
// console.log(testArr);

// testArr.unshift([1,2,18,65])
// console.log(testArr);
// testArr.push([66,99])
// console.log(testArr);

// get length of array

// console.log(testArr.length);


// slice , splice
        //0   1 2 3   4
// var arr=["ui","ahmed","mahoud",3,"iti"]
/**
 * slice ===> copy array==> doesn't affect on main array  ==>Returns a copy of a section of an array.
 * slice(start index , end index)==> return ==> strat index to end_index-1
 */

// console.log(arr);
// console.log(arr.slice(1,3));
// console.log(arr);

/**  
 * splice   ==> affect on main array
 * ==> remove  ==>(start index , count of element to remove)
 * ==> add  ==> (start index , 0,elements to add)
 */
// console.log(arr);
// arr.splice(0,2)
// console.log(arr);
// console.log(arr);
// arr.splice(0,0,"iti","winter","traning")
// console.log(arr);
// // ['iti', 'winter', 'traning', 'ui', 'ahmed', 'mahoud', 3, 'iti']

// arr.splice(4,1)   // remove specific elemnt from array
// console.log(arr);


// object ===> var data={key:value}   ==> function   ==> objectName.key  || objectName['key']
// var data={name:"ayaat",address:"cairo"}
// console.log(data['address']);
// console.log(data.address);
// // add element on object 
// data['job']="teaching Assistant"
// data['phone']="01025920741"
// data.age=25
// console.log(data);



var testArr=["ayaat","iti",1,2,true] // print elemnt of array using for , while , do while

// for(var i=0;i<testArr.length;i++)
// {
//     console.log(testArr[i]);
    
// }
// var i=0
// while(i<testArr.length)
// {
//  console.log(testArr[i]);
//  ++i
 
// }

// var i=0
// do{
//     console.log(testArr[i]);
//     i++
    
// }while(i<testArr.length)


//     testArr.forEach(element => {
//     console.log(element);
    
// });




// function ==> block of code  ==> can be used in any where in code 
// function printArr()  // prortype of function ==> functionName(parameters)
// {
//     body
// }
// funtion ==> user defined function ==> user write code , ==> 
// function defined ==> already in programming  ==> push , pop ,shift
//  ==> parametic ==>  function printArr(x,y)  , non parametic  ==> function printArr() 
// function return function printArr(x,y){ return }  
// function not return  ==> function printArr(x,y){ log } 
//==============> use function ==> call ==> sum()


// function summation numbers from 1 to 10
// var sum;
// function sum ()
// {
//     sum=0;
//     for (var i = 1; i < 10; i++) {
        
//         sum=sum+i
//     }
//     console.log(sum);
    
// }
// sum()

// function take number from user check even or odd

// var number =+prompt("Enter Number to Check Even Or Odd")
// function chekEvenOdd (num) //5  //4
// {

//     if(num%2==0)
//     {
//         console.log("Even Number");
        
//     }else{
//         console.log("Odd Number");
        
//     }
// }

// chekEvenOdd(number)


// function take three numbers from user and return summation and average

// var num1=+prompt("Enter Number 1");
// var num2=+prompt("Enter Number 2");
// var num3=+prompt("Enter Number 3");

// function cal(num1,num2,num3)
// {
//     var sum=num1+num2+num3;
//     var avg= sum/3
//     result = [sum ,avg]
//    return  result
// }
// var value=cal(num1,num2,num3);
// console.log(value);

// const let var


//                  var       let        const
  
// redecleration    accept     not         not
// reasign          accept      accept     not
// hoistiog          accept      no        not

// var x=5; // decleration  ==> var x   assign x=valu
// var x=10;  // redecleration
// x=15;  //reassign


// let x=5;
// // let x=15;
// x=12; 


// const ==> declare valriable constant ==> value not changed
// const PI=3.14
// PI=12.6;   xxxxxxxxxxxxxx error


////////////////// hoisting  ==> access variable before intialization ==> decleration

// ++x;
// console.log(x);
// var x=5

// console.log(x);
// ++x;
// console.log(x);
// let x=5
// // Cannot access 'x' before initialization
// console.log(x);

// sum()
// function sum() {
//     console.log("hoisting");
    
// }


// // string api ==> methods use with string
// let text="iti menofia branch"

// console.log(text.length);  // get length of text
// console.log(text.charAt(8));// take index to out charccter
// console.log(text.indexOf("m"));  // take char , string ==> out ==> first index 
// console.log(text.indexOf("fia"));
// // let Newstr=text.concat(" winter training");
// // console.log(Newstr);
// console.log(text.includes("b"));  // true false  ==> check if string exist or not
// console.log(text.includes("d"));  // true false
// console.log(text.repeat(2));  // repeat string concept to number
   
// let txt2="welcom"
// // let result=txt2+ " " +text;
// // console.log(result);

// result=`${txt2}  ${text}`  // backtech   ``
// console.log(result);



// sort ==> string , numbers
var arr=[1,15,4,12,3,2]
var arr2=["ayaat","Mohammed","mahmoud","Mona"]  // ascii code ==> a=97 A=65
console.log(arr.sort((a,b)=>a-b));  //  1 2 3 4 12 15
console.log(arr2.sort());


