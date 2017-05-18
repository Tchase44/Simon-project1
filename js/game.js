//Easy Mode

$(document).ready(function(){
	{
	//JQuery Targets
	const gameReady = $('.gameReady');
	const gameArena = $('.gameArena');
	const gameOverMan = $('section');
	const highScreen = $('.highScoreScreen');
//Force Overly for Game Start Prompt
	$('#hard').hide()
	gameArena.hide()
	gameOverMan.hide()
	highScreen.hide()
//returns random number
	const randomEasy = () => Math.floor(Math.random()*4)

//User and Computer
	const user = {
		touches : [],
		score : 0
	}
	const comp = {
		easyIndex : [],
		// cpuHighScore : 0,
	}
//Set up Score Saving
setupSaving();

/*           Ready to Play??          */

//the clicks
	$('#four').on('click',function(){
		gameReady.hide('slow')
		gameArena.show('fast')
		$('#hard').hide()
		
		//starting color
		populateEasy();

		// game will start 1sec after click
		startGame();
	})

//Reset
	$('h2').on("click",(e)=>{
		e.preventDefault();
		reset();
	})

// User click 
	$('.touch').on("click",function(){
		user.touches.push($(this).attr("id"))
		// console.log("user= "+user.touches)

		if (user.touches.length===comp.easyIndex.length) {
			userCheck();
		}

	})
///////////////////////////////////////
//Start the Game After Delay
	function startGame(){
		user.touches = []
		setTimeout(function(){showSequence(0)},900)
	}
//Setup localStorage in Browser
function setupSaving() {

	if ( localStorage.highScore > 0 ) { return }
	else { localStorage.setItem("highScore",0) }
}

//Show the Color Sequence
	function showSequence(i) {
    	if (i > comp.easyIndex.length) return;

    		setTimeout(function () {
   				$('#'+comp.easyIndex[i]).removeClass('highlight');
       			showSequence(++i);
    		}, 500);
    		setTimeout(function(){
				$('#'+comp.easyIndex[i]).addClass('highlight');
			},100)
    		
		}
	
//Fills the Array with Color
	function populateEasy() {
		let selection = randomEasy();
		const colorEasy = ['green','red','blue','yellow']
		comp.easyIndex.push(colorEasy[selection])
		// console.log(comp.easyIndex)
	}

//Check User Answeres
	function userCheck() {
		//will return true if all are right
		let check = user.touches.every(function(element, index) {
    	return element === comp.easyIndex[index]})
    		
		if(check){
			populateEasy()
			showSequence(0)
			user.score++
			user.touches = [];
		}else{
			highScore(user.score)
			comp.easyIndex = [];
			user.touches = [];
			user.score = 0
		}
	}
//Compare and Set Scores
	function highScore(score) {
		if (score > localStorage.highScore) {
			// comp.cpuHighScore = score
			localStorage.setItem("highScore",score)
			$('.highScoreScreen h3').text(`${localStorage.highScore} ...Good Work!`)
			highScreen.show()
			gameArena.hide()
		}else{
			gameOver()
			gameOverMan.show()
		}
	}
//Shows Game Over Sceen
	function gameOver(){
		gameArena.hide()
		scoring()
	};
	function scoring() {
		$("#highScore").text(localStorage.getItem("highScore"))
		$("#userScore").text(user.score)
	}
//Reset Switch
	function reset() {
		gameOverMan.hide()
		highScreen.hide()
		gameArena.hide()
		gameReady.show()
		// console.log(`user score = ${user.score}/ high score = ${localStorage.highScore}`)
	}

}
});