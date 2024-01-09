let buyEl = document.getElementById("container")

buyEl.innerHTML='<button id="btn">Buy</button>'

let btnEl = document.getElementById("btn")

btnEl.addEventListener("click",function(){
    buyEl.innerHTML+= "Thank you for shopping"
})