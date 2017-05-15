

$(document).ready(function(){
	const gameReady = $('.gameReady');
	const gameArena = $('.gameArena');
	
//overlay div for game prompt
	gameArena.hide()
	gameReady.on('click',function(){
		gameReady.hide('slow')
		gameArena.show('fast')
		//time out does not work, need top delay start
		setTimeout(showSequence(0),2000)
	})	

	//init vars
	let userTouch = [];
	const comp = {
		easyIndex : [],
		hardIndex :[]
	}
	// const colorHard = ['orng','teal','purp','green','red','blue','yellow']




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



//time out function to show 
	function showSequence(i) {
    	if (i > comp.easyIndex.length) return;
    		setTimeout(function () {
   				$('#'+comp.easyIndex[i]).removeClass('highlight');
       			showSequence(++i);
    		}, 1000);
		$('#'+comp.easyIndex[i]).addClass('highlight');
		}
	
//fills the array with color
	function populateEasy() {
		let selection = randomEasy();
		const colorEasy = ['green','red','blue','yellow']
		comp.easyIndex.push(colorEasy[selection])
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
	
	function gameOver(){console.log("game over man")};





});