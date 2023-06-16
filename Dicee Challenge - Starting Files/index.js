var n = Math.floor(Math.random() * 6) + 1;
var a = "/images/" + n + ".png";
console.log(a);

var b = Math.floor(Math.random() * 6) + 1;
var c = "/images/" + b + ".png";
console.log(c);
document.querySelector("#dice1 img").setAttribute("src", a);
document.querySelector("#dice2 img").setAttribute("src", c);

if (b === n) {
  document.querySelector("#dice1 p").innerHTML = "<p>Players 1 Draw</p>";
  document.querySelector("#dice2 p").innerHTML = "<p>Players 2 Draw</p>";
} else if (b > n) {
  document.querySelector("#dice2 p").innerHTML = "<p>Players 2 WON !!!</p>";
} else if (n > b) {
  document.querySelector("#dice1 p").innerHTML = "<p>Players 1 WON !!!</p>";
}
