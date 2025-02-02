/**
 * DOM
 * build html
 * change elements in  html
 * change style
 */

// DOM ==> Documnet Object Model

// select elemnts in js
/**
 * id
 * class
 * name
 * tagName
 * document==> elements in it
 *
 * query Selector
 * querySelectorAll
 *
 * ==> id direct
 */
// // id ==> one element
// let pag=document.getElementById('pg');
// pag.style.color='red'
// // console.log(pag);
// // class ==> collection ==> array ==> index
// let pagClass=document.getElementsByClassName('text')
// // console.log(pagClass);
// pagClass[1].style.color="blue";

// // tag name ==> collection ==> index
// let pTgName=document.getElementsByTagName('p')
// console.log(pTgName);
// pagClass[2].style.color="green";

//////////// documnet
// console.log(document);
// // links
// let links=document.links; // collection
// links[0].style.color='red'
// console.log(links);
// // body
// let body=document.body;
// body.style.backgroundColor="#eedddd"

// // title
// let title=document.title="DOM";

// // images // collection
// let imgs=document.images
// console.log(imgs);

// // forms // collection
// console.log(document.forms);

// querySelector ==>, querySelectorAll ==> id, tagName class
// querySelAttributeector
// let pag=document.querySelector("p")
// let pagQSID=document.querySelector("#pg")
// pagQSID.style.color="yellow"
// console.log(pagQSID);
// let pagQSClass=document.querySelector(".text")
// pag.style.color='brown'
// console.log(pag);

// querySelectorAll ==> NodeList ==> index
// let pag=document.querySelectorAll("p")
// let pagID=document.querySelectorAll("#pg2")
// let pagClass=document.querySelectorAll(".text")
// pag[0].style.color='brown'
// console.log(pagID);
// pagID[0].style.color='red'
// pagClass[2].style.color='blue'

// select by id direct
// pg.style.color='red'

/////////////////////// chage on elements attributes
/**
 * tag ==> id class name attributes
 * <img src='' alt='' title=''>
 *
 * 1- select element ==>
 *  get Element  Attribute ===>getAttribute('src')
 *   set Element  Attribute===> setAttribute('src')
 *    ==> element.attrbuteName='value'
 */
// let imgs=document.images;
// // console.log(imgs);

// // get attribute
// let imgSrc=imgs[1].getAttribute('src')
// let imgAlt=imgs[1].getAttribute('alt')
// // console.log(imgSrc);
// // console.log(imgAlt);

// let links=document.links;
// console.log(links[0].getAttribute('href'));

// /////////////// set attributes  ==> overRide , add
// imgs[0].src='imag1Src'
// imgs[1].src='imag2Src'
// imgs[1].alt='imag2Alt'
// imgs[1].title='imag2Title'
// imgs[0].setAttribute('title','img1Title')
// imgs[2].setAttribute('src','img3Src')
// imgs[2].setAttribute('alt','img3Alt')
// imgs[2].setAttribute('title','img3title')
// console.log(imgs[2].getAttribute('src'));

// // remove attibute
// imgs[2].removeAttribute('title')
// attribute ==> already exist ==> remove
// not exist ==> add ================> toggle
// imgs[2].toggleAttribute('title')
// imgs[2].title='img3Title'

// check if attribute already exist or not

// console.log(imgs[2].hasAttribute('title'));

// class  ==> class list ==> add , remove
// select element==> class
// let pag=document.getElementById('pg')
// pag.classList.add('hidden','p1')
// pag.classList.remove('p1')
// console.log(pag.classList);
// pag.classList.toggle('p1')
// pag.classList.toggle('hidden')
// console.log(pag.classList);

/// ******  content in element  ===> innerhtml , innertext
// let cont=document.getElementById('container')

// console.log(cont.innerText);  // text in elemet <>text</>
// console.log(cont.innerHTML); //html in elemet <>html</>

// cont.innerText="iti"
// cont.innerHTML=`
// <p>ITI <p>
// <a href='add Link'>link</a>
// <h2 >header</h2>

// `
/*************************  style */
// let cont=document.getElementById('container')

// // Element.style.properity='value'
// // cont.style.backgroundColor='yellow';
// cont.style=`
// background-color: gray;
// color:brown;
// border:1px solid black;
// border-radius:3px

// `;

//////////// create card in html
// img , p

// var card = document.createElement("div");
// card.style = `
// width:70px;
// text-align:center;
// border:1px solid #b2afaf;
// background-color:#f3eeee;
// padding:2px;
// border-radius:3px
// `;

// var text = document.createElement("p");
// text.innerText = "New Card";
// text.style = `
//  padding:2px;
//  color:blue;
//  text-align:center
// `;
// var img = document.createElement("img");
// img.src =
//   "https://images.pexels.com/photos/13471546/pexels-photo-13471546.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
// img.style = `
// width:50px;
// height:50px;
// border-radius:3px;
// `;
// // add created element on body
// document.body.appendChild(card);
// // add elements img , p ==> card
// card.append(img, text); // append all items

/////////////// handle code with function

function createCard(imgSrc, pgText) {
  var card = document.createElement("div");
  card.classList.add("cardStyle");
  var text = document.createElement("p");
  text.innerText = `${pgText}`;
  text.classList.add("textStyle");
  // text.style=`
  //  padding:2px;
  //  color:blue;
  //  text-align:center
  // `
  var img = document.createElement("img");
  img.src = `${imgSrc}`;
  img.classList.add("imgStyle");

  // append childs
  document.body.appendChild(card);
  card.append(img, text);
}

// createCard(
//   "https://images.pexels.com/photos/13471546/pexels-photo-13471546.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//   "Hello create card From Function"
// );

// createCard(
//   "https://images.pexels.com/photos/15295923/pexels-photo-15295923/free-photo-of-bouquet-of-flowers-in-clothing-with-feelings-written-on-it.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//   "Hello create 2"
// );
// createCard(
//   "https://images.pexels.com/photos/13471546/pexels-photo-13471546.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//   "Hello create 3"
// );

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

// array api ==> methods use array

for (let index = 0; index < produncts.length; index++) {
//console.log(produncts[index]); // object==>objectName.properity
createCard(produncts[index].image,produncts[index].name)
// createCard()
   
    
}



let studentsData=[
    {
    id:1,
    name:"mohammed",
    img:"https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600",    
    gmail:"mohammed@gmail.com"
},
    {
    id:1,
    name:"mohammed",
        img:"https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600",
    gmail:"mohammed@gmail.com"
},
    {
    id:1,
    name:"mohammed",
        img:"https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600",
    gmail:"mohammed@gmail.com"
},
    {
    id:1,
    name:"mohammed",
        img:"https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600",
    gmail:"mohammed@gmail.com"
},
    {
    id:1,
    name:"mohammed",
        img:"https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600",
    gmail:"mohammed@gmail.com"
},

]
