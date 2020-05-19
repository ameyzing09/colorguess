var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var mode = document.querySelectorAll(".mode");

init();

function changeColor(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*numSquares);
	return colors[random];
}

function generateRandomColor(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset(){
	//Reset the array with new random color
	colors = generateRandomColor(numSquares);
	//Pick a color from the array for guessing and to display at message
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Game";
	message.textContent = "";
	//Set the square with the colors from array
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}	 else{
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}
function init(){
	for (var i = 0; i < mode.length; i++) {
	mode[i].addEventListener("click",function(){
		mode[0].classList.remove("selected");
		mode[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3:numSquares = 6;
		reset();
	});
}
resetButton.addEventListener("click",function(){
	reset();	
});

for(var i = 0; i < squares.length; i++)
	{	
		squares[i].addEventListener("click",function(){
	
			var clickedColor = this.style.background;
			if(clickedColor === pickedColor){
				resetButton.textContent = "Play Again?";
				h1.style.background = clickedColor;
				changeColor(clickedColor);
				message.textContent = "Correct";
			}
			else{
				message.textContent = "Wrong!"
				this.style.background = "#232323";
			}
		});
	}
	reset();
}
