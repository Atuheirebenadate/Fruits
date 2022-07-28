let back=document.querySelector("body");
back.style.backgroundColor='silver'
let text=document.querySelector("#title");
text.style.color="green";
let subtitle=document.querySelectorAll("h3").forEach(item=>item.innerHTML=item.textContent.toLocaleUpperCase())
let addition=document.createElement("li")
addition.appendChild(document.createTextNode("apple"))
let apple=document.getElementById("fruList").appendChild(addition)
// let add=document.createComment("li")
// add.appendChild(document.createTextNode("redpaper"))
// let add=getElementById("vegList").appendChild(add)
// let redpaper=createComment("li")
