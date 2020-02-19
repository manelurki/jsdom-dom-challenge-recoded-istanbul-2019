let counter=0
let num=document.getElementById('counter')
let time=setInterval(myTimer,1000)
function timer(){
  counter++
  num.innerText=counter
}
document.getElementById("minus").addEventListener("click",decrease);
document.getElementById("plus").addEventListener("click",increase);
document.getElementById("heart").addEventListener("click",heart);
document.getElementById("pause").addEventListener("click",pause);
document.getElementById("submit").addEventListener("click",addComment);
function decrease(){
  let result=parseInt(num.innerText)
  num.innerText=result-1;
}function increase(){
  let result1=parseInt(num.innerText)
  num.innerText=result+1;
}function heart(){
  let ul=document.querySelector('ul')
 
}