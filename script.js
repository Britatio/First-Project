console.log("Howdy");


let userScore =0;
let comp_Score =0;
const userScore_span = document.getElementById("user-score");
const comp_Score_span = document.getElementById("comp_score");
const scoreBoard_div = document.querySelector(".score-board");
const rock_div= document.getElementById("r");
const paper_div= document.getElementById("p");
const scissors_div= document.getElementById("s");

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
	console.log("User Win");
}

function lose(){ 
	comp_Score++;
	userScore_span.innerHTML = userScore;
	comp_Score_span.innerHTML = comp_Score;

	
	console.log("Computer Win");
}

function draw(){
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