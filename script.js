/*let div = document.querySelector("div");
console.log(div);

let id=div.getAttribute("id");
console.log("id");

let name=div.getAttribute("name");
console.log("name");

let para=document.querySelector("p");
console.log(para.settAttribute("newclass"));

let div=document.querySelector("div");
div.style.backgroundColor="green";
div.style.fontSize="25px";
div.innerText="hello";

let newBtn=document.createElement("button");
newBtn.innerText="click me!";
console.log(newBtn);

let div= document.querySelector("div");
div.after(newBtn);*/

//q1
let newBtn=document.createElement("button");
newBtn.innerText="click me!";

newBtn.style.color="white";
newBtn.style.background="purple";

document.querySelector("body").prepend(newBtn);

//q2
let para = document.querySelector("p");



