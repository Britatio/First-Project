console.log("Howdy");


let userScore =0;
let comp_Score =0;
const userScore_span = document.getElementById("user-score");
const comp_Score_span = document.getElementById("comp_score");
const scoreBoard_div = document.querySelector(".score-board");
const rock_div= document.getElementById("r");
const paper_div= document.getElementById("p");
const scissors_div= document.getElementById("s");
const result_p = document.querySelector(".result")


function getComputerChoice() {
	const choices =['r','p','s'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber]
}

function convertToWord(letter){
	if (letter === "r") return "Rock";
	if ( letter === "p") return "paper";
	return "Scissors";
}

function win(userChoice, computerChoice){
	userScore++;
	userScore_span.innerHTML = userScore;
	comp_Score_span.innerHTML = comp_Score;
	result_p.innerHTML = "User Wins by using " + convertToWord(userChoice);
	document.getElementById(userChoice).classList.add('blue');
	document.getElementById(computerChoice).classList.add('grey');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('blue') }, 1500);
	setTimeout(function(){document.getElementById(computerChoice).classList.remove('grey') }, 1500);
	document.querySelector(".score-board").classList.add('blue');
	setTimeout(function(){document.querySelector(".score-board").classList.remove('blue') }, 1800);

	console.log("User Win");
}


function lose(userChoice, computerChoice){ 
	comp_Score++;
	userScore_span.innerHTML = userScore;
	comp_Score_span.innerHTML = comp_Score;
	result_p.innerHTML = "Computer Wins by using " + convertToWord(computerChoice);
	document.getElementById(computerChoice).classList.add('yellow');
	document.getElementById(userChoice).classList.add('grey');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('grey') }, 1500);
	setTimeout(function(){document.getElementById(computerChoice).classList.remove('yellow') }, 1500);
	document.querySelector(".score-board").classList.add('yellow');
	setTimeout(function(){document.querySelector(".score-board").classList.remove('yellow') }, 1800);
	console.log("Computer Win");
}

function draw(userChoice, computerChoice){
	result_p.innerHTML = "It's a Draw"
	document.getElementById(computerChoice).classList.add('grey');
	document.getElementById(userChoice).classList.add('grey');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('grey') }, 1500);
	setTimeout(function(){document.getElementById(computerChoice).classList.remove('grey') }, 1500);
		document.querySelector(".score-board").classList.add('grey');
	setTimeout(function(){document.querySelector(".score-board").classList.remove('grey') }, 1800);
	console.log("Draw");
	
}



function game(userChoice){
	const computerChoice = getComputerChoice();
	switch(userChoice + computerChoice){
	case "rs":
	case "pr":
	case "sp":
		win(userChoice, computerChoice);
		break;
	case "rp":
	case "ps":
	case "sr":
		lose(userChoice, computerChoice);
		break;
	case "rr":
	case "pp":
	case "ss":
		draw(userChoice, computerChoice);
		break;

	}
	
}

 
function main(){
	rock_div.addEventListener('click', function(){
		game("r");

	})

	paper_div.addEventListener('click', function(){
		game("p");
	})

	scissors_div.addEventListener('click', function(){
		game("s");
	})
}


main();