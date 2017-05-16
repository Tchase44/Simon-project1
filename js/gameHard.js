// Hard Mode

$(document).ready(function(){
//random number generator
  const randomHard = () => Math.floor(Math.random()*7)
//jquery selectors
  const gameReady = $('.gameReady');
  const gameArena = $('.gameArena');
  const gameOverMan = $('section');
  const highScreen = $('.highScoreScreen');
//overlay div for game prompt
  $('#hard').hide()
  gameArena.hide()
  gameOverMan.hide()
  highScreen.hide()
//user and computer
  const user = {
    touches : [],
    score : 0
  }
  const comp = {
    hardIndex :[],
    highScoreHard : 0
  }
// Hard mode
  $('#seven').on('click',function(){
    gameReady.hide('slow')
    gameArena.show('fast')
    $('#easy').hide()
    
    //starting color
    populateHard();

    // game will start 1sec after click
    startGameHard();
  })

// User click 
  $('.touch').on("click",function(){
    user.touches.push($(this).attr("id"))
    console.log("user= "+user.touches)

    if (user.touches.length===comp.hardIndex.length) {
      userCheckHard();
    }

  })



// fill the array with colors
  function populateHard() {
    let selection = randomHard();
    const colorHard = ['orng','teal','purp','grn','rd','blu','ylw']
    comp.hardIndex.push(colorHard[selection])
  }

//start game after delay
function startGameHard(){
  setTimeout(function(){showSequenceHard(0)},900)
}

//show the color sequence for Hard mode
	function showSequenceHard(i) {
      if (i > comp.hardIndex.length) return;
    		setTimeout(function () {
   				$('#'+comp.hardIndex[i]).removeClass('highlight');
       			showSequenceHard(++i);
    		}, 200);
    		setTimeout(function(){
				$('#'+comp.hardIndex[i]).addClass('highlight');
			},100)
    		
		}
//Check user answeres
  function userCheckHard() {
    //will return true if all are right
    let check = user.touches.every(function(element, index) {
      return element === comp.hardIndex[index]})
        
    if(check){
      populateHard()
      showSequenceHard(0)
      user.score++
      user.touches = [];
    }else{
      highScoreHard(user.score)
      comp.hardIndex = [];
      user.touches = [];
      user.score = 0
    }
  }
  //compare and set scores
  function highScoreHard(score) {
    if (score > comp.highScoreHard) {
      comp.highScoreHard = score
      $('.highScoreScreen h3').text(`${comp.highScoreHard} ...Good Work!`)
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
    $("#highScore").text(comp.highScoreHard)
    $("#userScore").text(user.score)
  }
})
	