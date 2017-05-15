




$(document).ready(function(){
	let userTouch = [];
	const comp = {
		easyIndex : [],
		hardIndex :[]
	}
	const colorEasy = ['green','red','blue','yellow']

	$('.touch').on("click",function(){
		populate()
		userTouch.push($(this).attr("id"))
		// console.log(`cpu ${comp.easyIndex}`)
		console.log(userTouch)
	})


	function populate() {
		let selection = randomEasy();
		comp.easyIndex.push(colorEasy[selection])
	}

	//returns random number fo easy
	const randomEasy = () => Math.floor(Math.random()*4)

/*
comp array based off random numbers

display num/color to user

userTouch recorded && compared

must be exact match

keep track of high scores

*/
//Bounus = Hard Mode

});