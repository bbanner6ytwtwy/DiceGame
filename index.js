document.querySelectorAll("button")[0].addEventListener("click", dice);
function dice(){
var x = ["img1/1.svg", "img1/2.svg", "img1/3.svg", "img1/4.svg", "img1/5.svg", "img1/6.svg"];
var y = Math.floor(Math.random() * 6);
var z = Math.floor(Math.random() * 6);
var s = x[y];
var t = x[z];
document.getElementById("one").setAttribute("src", s);
document.getElementById("two").setAttribute("src", t);

if(y > z){
    document.querySelector("h1").innerText = "🚩 Player one wins!!!";
    document.querySelector("h1").classList.add("smaller");
}
else if(y === z){
    document.querySelector("h1").innerText = "Draw!!! 🚩";
}
else if(z > y){
    document.querySelector("h1").innerText = "Player two wins!!! 🚩";
    document.querySelector("h1").classList.add("smaller");
}
}