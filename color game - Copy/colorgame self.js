var numgenerated= 6;
var colors=generateNewColors(numgenerated);
var pickedcolor=pickRandom();
var squares=document.querySelectorAll(".squares");
var diplayPickedColor=document.querySelector("#displaypicked");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
// var easy=document.querySelector("#easy");
// var hard=document.querySelector("#hard");
var resetbtn=document.querySelector("#reset");
var mode=document.querySelectorAll(".mode");



// displaying the colors of the squares----------------
for(var i=0; i<squares.length;i++){
	squares[i].style.background=colors[i];
}
// displaying the picked color in h1
diplayPickedColor.textContent=pickRandom();



// the main logic --------------------------------------
for(var i=0;i<squares.length;i++){
	
	squares[i].addEventListener("click",function(){
		var clickedcolor=this.style.backgroundColor;

			if(clickedcolor===pickedcolor){
				h1.style.backgroundColor=pickedcolor;
				message.textContent="Correct!";
				message.style.color="green";
				winning();
				resetbtn.textContent="Play again?"



			}
			else{
				this.style.backgroundColor="#232323";
				message.style.color="red";
				message.textContent="Try again!";

			}

	});

}
// mode----------------------------------------------------
for(var i=0;i<mode.length;i++){
	mode[i].addEventListener("click",function(){

		mode[0].classList.remove("selected");
		mode[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent==="Easy"){
			numgenerated=3;
		}
		else{
			numgenerated=6;
		}
		reset();

	});


}

// // easy button ------------------------------------------
// easy.addEventListener("click",function(){
// 	easy.classList.add("selected");
// 	hard.classList.remove("selected");
	

// 	numgenerated=3;
// 	reset();
	
// 	for(var i=0;i<squares.length;i++){

// 			if(colors[i]){
// 			squares[i].style.background=colors[i];

// 			}
// 			else{
// 				squares[i].style.display="none";
// 			}
// 	}	
	



// })




// // hard button ------------------------------------------
// hard.addEventListener("click",function(){
// 	hard.classList.add("selected");
// 	easy.classList.remove("selected");
	

// 	numgenerated=6;
// 	reset();
	
// 	for(var i=0;i<squares.length;i++){
// 			squares[i].style.display="block";
// 			squares[i].style.background=colors[i];

			
		
			
// 	}	
	



// });


// reset button ------------------------------------------
resetbtn.addEventListener("click",function(){
	reset();
	
});


// All functions DOWNHERE---------------------------------


// generate new colors ------

function generateNewColors(num){
	// create an empty colors array
	var arr=[];
	// push is the created random colors in the array
	for(var i=0;i<num;i++){
	arr.push(randomColors());
	}
	// return the array
	return arr;



}
// generate random rgb color-------------------------------------------------
function randomColors(){
	// generate r
	var r=Math.floor(Math.random()*256);

	// generate g
	var g=Math.floor(Math.random()*256);
	// generate b
	var b=Math.floor(Math.random()*256);

	return "rgb("+r+", "+g+", "+b+")";


}
// pick random color of the array---------------------------------------------
function pickRandom(){
var random =Math.floor(Math.random()*numgenerated);
return colors[random];

}
// change the squares colors to the pickedcolor incase of winning--------------


function winning(){
	for(var i=0;i<colors.length;i++){
		squares[i].style.background=pickedcolor;
	}
}

// reset function of every button----------------------------------------------

function reset(){
	// generate new 3 colors 
	colors=generateNewColors(numgenerated);
	// pick new color
	pickedcolor=pickRandom();
	// display the pickedcolor
	diplayPickedColor.textContent=pickRandom();

	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";

		}
	}

	message.textContent="";
	resetbtn.textContent="New colors";
	h1.style.backgroundColor="steelblue";



}