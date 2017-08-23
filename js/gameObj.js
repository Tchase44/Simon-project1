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

	const theGame = {
		user : {
			touches : [],
			pushes : [],
			score : 0,
			hardScore : 0
		},
		comp : {
			easyIndex : [],
			hardIndex : []
		},
		hardMode : false,
		easyColors : ['green','red','blue','yellow'],
		hardColors : ['orng','teal','purp','grn','rd','blu','ylw'],
		randomItemPicker(ary){return Math.floor(Math.random()*ary.length)},
//Fills the Array with Color
		populateEasy() {
			this.comp.easyIndex.push(this.randomItemPicker(this.easyColors))
			// console.log(comp.easyIndex)
		},
		populateHard(){
			this.comp.hardIndex.push(this.randomItemPicker(this.hardColors))
		},
//Show Color Sequence
		showSequence(i) {
    		if (i > this.comp.easyIndex.length) {return};

    		setTimeout(function () {
   				$('#'+this.comp.easyIndex[i]).removeClass('highlight');
       			showSequence(++i);
    		}, 500);
    		setTimeout(function(){
				$('#'+this.comp.easyIndex[i]).addClass('highlight');
			},100)
    		
		},
//Check users input
		userCheck() {
			//will return true if all are right
			let check = this.user.touches.every(function(element, index) {
    			return element === comp.easyIndex[index]
    		})
    		
			if(check){
				this.populateEasy()
				this.showSequence(0)
				this.user.score++
				this.user.touches = [];
			}else{
				this.highScore(this.user.score)
				this.comp.easyIndex = [];
				this.user.touches = [];
				this.user.score = 0
			}
		},
		startGame(){
			this.user.touches = []
			setTimeout(function(){this.showSequence(0)},900)
		},
// Set and update high scores
		highScore(score) {
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
		theGame.populateEasy();
		// game will start 1sec after click
		theGame.startGame();
	})
//Reset
	$('h2').on("click",(e)=>{
		e.preventDefault();
		reset();
	})

// User click 
	$('.touch').on("click",function(){
		theGame.user.touches.push($(this).attr("id"))
		// console.log("user= "+user.touches)
		if (theGame.user.touches.length===theGame.comp.easyIndex.length) {
			theGame.userCheck();
		}
	})
///////////////////////////////////////

//Setup localStorage in Browser
	function setupSaving() {
		localStorage.highScore > 0 ? true : localStorage.setItem("highScore",0)
	}
//Shows Game Over Sceen
	function gameOver(){
		gameArena.hide()
		scoring()
	};
	function scoring() {
		$("#highScore").text(localStorage.getItem("highScore"))
		$("#userScore").text(theGame.user.score)
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