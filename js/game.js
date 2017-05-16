

$(document).ready(function(){
	const gameReady = $('.gameReady');
	const gameArena = $('.gameArena');
	
//overlay div for game prompt
	gameArena.hide()
	gameReady.on('click',function(){
		gameReady.hide('slow')
		gameArena.show('fast')
// game will start 1sec after click
		setTimeout(function(){showSequence(0)},900)
	})	

	//init vars
	// let user.touches = [];
	const user = {
		touches : [],
		score : 0
	}
	const comp = {
		easyIndex : [],
		hardIndex :[],
		highScore : 0,
	}




//returns random number
	const randomEasy = () => Math.floor(Math.random()*4)
	const randomHard = () => Math.floor(Math.random()*7)
	populateEasy();
	
	console.log(comp.easyIndex)


// User click 
	$('.touch').on("click",function(){
		user.touches.push($(this).attr("id"))
		console.log("user= "+user.touches)

		if (user.touches.length===comp.easyIndex.length) {
			userCheck();
		}

	})



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
	}
	function populateHard() {
		let selection = randomHard();
		const colorHard = ['orng','teal','purp','green','red','blue','yellow']
		comp.hardIndex.push(colorHard[selection])
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
			gameOver();
			highScore(user.score)
			comp.easyIndex = [];
			user.touches = [];
		}
	}
/* !!! needs score counter !!! */
	function highScore(score) {
		if (score > comp.highScore) {
			console.log(`new High Score!! ${user.score}`)
			comp.highScore = score
		}
	}
	/* !!!!  need a game over screen and reset !!!! */
	function gameOver(){console.log("game over man")};





});