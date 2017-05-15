

$(document).ready(function(){
	const gameReady = $('.gameReady');
	const gameArena = $('.gameArena');
	
//overlay div for game prompt
	gameArena.hide()
	gameReady.on('click',function(){
		gameReady.hide('slow')
		gameArena.show('fast')
// game will start 1sec after click
		setTimeout(function(){showSequence(0)},1000)
	})	

	//init vars
	let userTouch = [];
	const comp = {
		easyIndex : [],
		hardIndex :[]
	}




//returns random number
	const randomEasy = () => Math.floor(Math.random()*4)
	const randomHard = () => Math.floor(Math.random()*7)
	populateEasy();
	
	console.log(comp.easyIndex)


// User click 
	$('.touch').on("click",function(){
		userTouch.push($(this).attr("id"))
		console.log("user= "+userTouch)

		if (userTouch.length===comp.easyIndex.length) {
			userCheck();
		}

	})



//show the color sequence
/* !!! needs to flash when same color is selected in a row !!! */
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
		let check = userTouch.every(function(element, index) {
    	return element === comp.easyIndex[index]})
    		
		if(check){
			populateEasy()
			showSequence(0)
			userTouch = [];
		}else{
			gameOver();
			comp.easyIndex = [];
			userTouch = [];
		}
	}
	/* !!!!  need a game over screen and reset !!!! */
	function gameOver(){console.log("game over man")};





});