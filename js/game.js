




$(document).ready(function(){
	//overlay div for game prompt
	alert('are you ready')

	//init vars
	let userTouch = [];
	const comp = {
		easyIndex : [],
		hardIndex :[]
	}
	// const colorHard = ['orng','teal','purp','green','red','blue','yellow']

	//returns random number
	const randomEasy = () => Math.floor(Math.random()*4)
	populateEasy();
	showSequence(0);
	console.log(comp.easyIndex)

	$('.touch').on("click",function(){

		userTouch.push($(this).attr("id"))
		console.log("user= "+userTouch)
		userCheck();

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
		}else{
			gameOver();
			comp.easyIndex = [];
			userTouch = [];
		}

	}
	
	function gameOver(){console.log("game over man")};





});