

$(document).ready(function(){
	{
	const gameReady = $('.gameReady');
	const gameArena = $('.gameArena');
	const gameOverMan = $('section');
	const highScreen = $('.highScoreScreen');
//overlay div for game prompt
	$('#hard').hide()
	gameArena.hide()
	gameOverMan.hide()
	highScreen.hide()
//returns random number
	const randomEasy = () => Math.floor(Math.random()*4)


//user and computer
	const user = {
		touches : [],
		score : 0
	}
	const comp = {
		easyIndex : [],
		highScore : 0,
	}
// Ready to play??
// easy mode
	$('#four').on('click',function(){
		gameReady.hide('slow')
		gameArena.show('fast')
		$('#hard').hide()
		
		//starting color
		populateEasy();

		// game will start 1sec after click
		startGame();
	})

//reset
	$('h2').on("click",(e)=>{
		e.preventDefault();
		reset();
	})

// User click 
	$('.touch').on("click",function(){
		user.touches.push($(this).attr("id"))
		console.log("user= "+user.touches)

		if (user.touches.length===comp.easyIndex.length) {
			userCheck();
		}

	})
//start the game after delay
	function startGame(){
		user.touches = []
		setTimeout(function(){showSequence(0)},900)
	}


//show the color sequence
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
	
//fills the array with color
	function populateEasy() {
		let selection = randomEasy();
		const colorEasy = ['green','red','blue','yellow']
		comp.easyIndex.push(colorEasy[selection])
		console.log(comp.easyIndex)
	}

//Check user answeres
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
//compare and set scores
	function highScore(score) {
		if (score > comp.highScore) {
			comp.highScore = score
			localStorage.setItem("highScore",score)
			$('.highScoreScreen h3').text(`${comp.highScore} ...Good Work!`)
			highScreen.show()
			gameArena.hide()
		}else{
			gameOver()
			gameOverMan.show()
		}
	}
//shows game over sceen
	function gameOver(){
		gameArena.hide()
		scoring()
	};
	function scoring() {
		$("#highScore").text(localStorage.getItem("highScore"))
		$("#userScore").text(user.score)
	}
//reset switch
	function reset() {
		gameOverMan.hide()
		highScreen.hide()
		gameArena.hide()
		gameReady.show()
		console.log(`user score = ${user.score}/ high score = ${comp.highScore}`)
	}


}
});