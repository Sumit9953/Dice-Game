var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImgsource = "images/" + randomDiceImage;

document.querySelectorAll("img")[0].setAttribute("src",randomImgsource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);

var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImgsource2 = "images/" + randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src",randomImgsource2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins 🎉";
}else if( randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw 🐱‍🏍";
}
else{
    document.querySelector("h1").innerHTML = "Player 2 wins 🎉";
}
