// console.log('Welcome track UI' );

// var number1=5;
//=== varible :  place in memory store value
//==(var number1)=> declare varible = (5)assign value in variable
// 1 * ==> _ $
// decriptive ==> var userName  , userPassword , userEmailWork , user_name
// reserved keyword  ==>xxx=> log, var , console ,if ,while

/*** comment ==> note to me , another developer
 *
 * // single line
 * multi line
 */

// print ==> console   ==> test code ==> console.log
// window ==> browser  ==> document.writeln()

// document.writeln("Hello Track UI")
// document.write(": Day 1 Js")

// data types of variables
/** loosely typed language ==> programming language ==> not take data type before declare variable   ==> know datatype of variable from value */

// var name ="ayaat"   // string
// var age =24        // number
// var accept= true  // boolean
// var undefinedValue;    // undefied    // declare varible , not assigned
// var nullValue=null;    // declare varible ,  assigned null
// var num=0;
// know datatype of variable ==> typeof

// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof accept)
// console.log(typeof undefinedValue)
// console.log(typeof nullValue)
// console.log(typeof num)

//  var
/** resign variable   ==> change value
 * redeclare ==> datatype
 */
// name ="mariam";
// name =10;
// console.log(name)

//============================= take values from user
/** prompt ('message')===> string */
// var num1=prompt("Enter Number 1")
//  casting ==> covert from datatype to another datatype
// var num1=Number(prompt("Enter Number 1"))
// var num2=+prompt("Enter Number 2")  // only with prompt

// var sum=num1+num2
// console.log(sum);
// console.log(typeof num1);
// console.log(typeof num2);

// operators
/**
 * arethmatic operator  (+,-,*,/,%,**)
 * logical operator (&& , || , !)
 * assignment operators (=)
 * comparison operators (> , < ,>= ,<= ,!= , == , ===, !==)
 */

// var num1=10
// var num2=3

// arethmatic operator
// var sum=num1+num2  // 13
// var dif=num1-num2  // 7
// var dev=(num1)/(num2)  //  3.3333
// var mod=num1%num2  //  1
// var mult=num1*num2  //  30   10%3  ==>
// var power=num1**num2 //1000  10^3
// console.log(sum);
// console.log(dif);
// console.log(parseInt(dev));
// console.log(~~(dev));   // ==> parse to intger
// console.log(mod);
// console.log(mult);
// console.log(power);

// comparison operators (> , < ,>= ,<= ,!= , == (value) , === (value , datatype), !==)

// var num1='3'  // string
// var num2=3    // number

// // console.log(num1>num2)  //  t  10>3 ==>t
// // console.log(num1<num2)  // f   10<3  ==f
// // console.log(num1==num2); // f
// // console.log(num1!=num2); //  t
// // // (10=3)   => error
// // console.log(num1=num2);  //  3    num1 =3  ===> assign
// console.log(num1==num2);  // t   ==>
// console.log(num1===num2);  // f
// console.log(num1!==num2);   // t => value , datatype
// console.log(num1!=num2);   // f   => valu

// logical operator (&& , || , !)==> conditions
/**
 * &&   =========<true>  ==> all conditions are true
 * &&   =========<false>  ==> any one of all conditions are false
 *  true true ==> true
 *  true false ==> false
 *  false true ==> false
 *  false false ==> false
 */
/**
 * ||  =========<true>  ==> any one of all conditions are true
 * ||  =========<false>  ==> all conditions are false
 *  true true ==> true
 *  true false ==> true
 *  false true ==> true
 *  false false ==> false
 */
/**
 * ! =========<true>  ==>if condition false
 * !  =========<false>  ==> if condition true
 *  true =>false
 *  false ==> true
 */
// console.log((3>5)&&(7>4));   // f && t ==> f
// console.log((3>5)&&(7<4));   // f  && f ==> f
// console.log((3<5)&&(7>4));   // t && t  ==> t
// console.log((3<5)&&(7<4));   // t && f ==> f
// //========================================================
// console.log((3>5)||(7>4));   // f || t ==>  t
// console.log((3>5)||(7<4));   // f  || f ==>  f
// console.log((3<5)||(7>4));   // t || t  ==>  t
// console.log((3<5)||(7<4));   // t || f ==>  t

// //=============================================
// console.log(!(3>5));   // !f => true
// console.log(!(3<5));   // !t => f

//===================================================

// var x=5
// var y=10
// // x=y  // x=10 asssign
// x=x+y  //==>  15 => 5+10   ==========> x+=y
// x=x-y  //==>  -5 => 5-10   ===========> x-=y
// x=x*y  //==>  50 => 5*10   ==========> x*=y
// y=y/x  //==>  2 => 10/5    ==========> y/=x
// y=y%x  //==>  0 => 10 %5   ==========> y%=x
// x=x**y  // ==> x=x**y  ==> x=x^y   ==> x**=y

// var x=5
// // x=x+1;   //===> x=+1    => x++
// // x=x-1;   //===> x=--1    => x--

// // console.log(x++);  //5     ==> 6
// // console.log(++x);   //7   => 7

// console.log(x--);  // 5     ==> 4
// console.log(--x);   // 3   ==> 3

// document.writeln("<h2 style='text-align:center; color:red'>Welcome track UI </h2>")

// =======================   conditional statement

// if==> condition   if else==> true{} , false {}   if elseif else==> more than condition
// switch

// var x=4;
// if(x==5)
// {
//     document.writeln("<p style='text-align:center; color:red'>x = 5</p>")
// }else if (x>5){
//     document.writeln("<p style='text-align:center; color:red'> x > 5</p>")
// }else{
//     document.writeln("<p style='text-align:center; color:red'> x < 5</p>")

// }

// var grade = +prompt("Enter your Exam grade");
// if(grade >=85)
// {
//     document.writeln("<p style='text-align:center; color:red'> grade A</p></p>")
// }else if (grade>=75){
//     document.writeln("<p style='text-align:center; color:red'>  grade B</p>")
// }else if (grade>=65){
//     document.writeln("<p style='text-align:center; color:red'> c </p>")

// }else if (grade>=50){
//     document.writeln("<p style='text-align:center; color:red'> D </p>")

// }else{
//     document.writeln("<p style='text-align:center; color:red'> Sorry you failed</p>")
// }

// if ((grade <= 100) && (grade > 85)) {
//   document.writeln("<p style='text-align:center; color:red'> grade A</p></p>");
// } else if ((grade <= 85) && (grade > 75)) {
//   document.writeln("<p style='text-align:center; color:red'> grade B</p></p>");
// } else {
//   document.writeln("<p style='text-align:center; color:red'> grade C</p></p>");
// }

// // switch ==> case

// var x=10;
// switch (x) {
//     case 10:
//         document.writeln("<p style='text-align:center; color:red'> 10</p></p>")
//         break;   // stop
//     case 12:
//         document.writeln("<p style='text-align:center; color:red'> 12</p></p>")
//         break;
//     case 15:
//         document.writeln("<p style='text-align:center; color:red'> 15</p></p>")
//         break;
//     default:
//         // document.writeln("<p style='text-align:center; color:red'>".{x}."</p>")
//         document.writeln("<p style='text-align:center; color:red'> default</p></p>")
//         break;
// }

// ternary operator  (condition)?true:false
// var x=10;
// (x < 5) ? console.log(4) : console.log(3);
// var x = 3;
// // (x < 5) ? document.writeln(`<p style='text-align:center; color:red'>less</p>`) :  document.writeln("<p style='text-align:center; color:red'> equal</p>");

// x == 3
//   ? document.writeln("<p style='text-align:center; color:red'> equal</p>")
//   : x < 3
//   ? document.writeln(`<p style='text-align:center; color:red'>less</p>`)
//   : document.writeln(`<p style='text-align:center; color:red'>more</p>`);



// array  []  ==> index (place of value) , value , length (number of values==> 4 )
     // 0 , 1 , 2 ,3
// var x=[5 ,10,'m',15];   //  any type of valuse

// x[0]=15;// reasign


//===
// console.log(x)


// loop ==> iteration

var data=[];
for(var i=0;i<4;i++)
{
    // console.log(x[i]);
   var userData= prompt('Enter value');
   data[i]=userData;
    
}
console.log(data);








