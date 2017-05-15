




$(document).ready(function(){
	let userTouch = [];
	const comp = {
		easyIndex : [],
		hardIndex :[]
	}
	
	// const colorHard = ['','','','','',''];

		//returns random number to easy
	const randomEasy = () => Math.floor(Math.random()*4)
	populate();

	console.log(comp.easyIndex)

	$('.touch').on("click",function(){

		userTouch.push($(this).attr("id"))
		// console.log(userTouch)
		userCheck();
	})



	function populate() {
		let selection = randomEasy();
		const colorEasy = ['green','red','blue','yellow']
		comp.easyIndex.push(colorEasy[selection])
	}

	function userCheck() {
		let i = 0
		for (i; i < userTouch.length; i++) {

			if(userTouch[i] === comp.easyIndex[i]){
				populate();
			}else{
				gameOver();
				comp.easyIndex = [];
				userTouch = [];
			}

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