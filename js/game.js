




$(document).ready(function(){
	//overlay div for game prompt
	alert('are you ready')

	//init vars
	let userTouch = [];
	const comp = {
		easyIndex : [],
		hardIndex :[]
	}
	
	// const colorHard = ['','','','','',''];

	//returns random number
	const randomEasy = () => Math.floor(Math.random()*4)
	populate();

	console.log(comp.easyIndex)

	$('.touch').on("click",function(){

		$(this).toggleClass("highlight")
		
		userTouch.push($(this).attr("id"))
		console.log("user= "+userTouch)
		userCheck();
	})



	function populate() {
		let selection = randomEasy();
		const colorEasy = ['green','red','blue','yellow']
		comp.easyIndex.push(colorEasy[selection])
	}
///Check user answeres
	function userCheck() {

		if( userTouch.every(function(element, index) {
    		return element === comp.easyIndex[index]})
    		){
			populate()
			console.log(comp.easyIndex)

		}else{
			gameOver();
			comp.easyIndex = [];
			userTouch = [];
		}

	}
	
	function gameOver(){console.log("game over man")};
/*
	function populateEasy(){
		for (let i = 0; i < 500; i++) {
			populate();
		}
	}
*/




});