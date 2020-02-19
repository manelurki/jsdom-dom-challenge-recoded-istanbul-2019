let counter=0
let num=document.getElementById('counter')
let time=setInterval(myTimer,1000)
function timer(){
  counter++
  num.innerText=counter
}
document.getElementById("minus").addEventListener("click",decrease);
document.getElementById("plus").addEventListener("click",increase);
document.getElementById("minus").addEventListener("click",heart);
document.getElementById("minus").addEventListener("click",pause);