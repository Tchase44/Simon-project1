// Hard Mode

$(document).ready(function(){
  {
//random number generator
  const randomHard = () => Math.floor(Math.random()*7)

highScoreSetup();


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
  const player2 = {
    pushes : [],
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

    player2.pushes.push($(this).attr("id"))

    if (player2.pushes.length===comp.hardIndex.length) {
      userCheckHard();
    }

  })

//highScore setup
function highScoreSetup() {


  if (localStorage.highScoreHard > 0) {
    return
  }else{
    localStorage.setItem("highScoreHard",0)
  }
}

// fill the array with colors
  function populateHard() {
    let selection = randomHard();
    const colorHard = ['orng','teal','purp','grn','rd','blu','ylw']
    comp.hardIndex.push(colorHard[selection])
    // console.log(comp.hardIndex)
  }

//start game after delay
function startGameHard(){
  player2.pushes = [];
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
    let check = player2.pushes.every(function(element, index) {
      return element === comp.hardIndex[index]})
        
    if(check){
      populateHard()
      showSequenceHard(0)
      player2.score++
      player2.pushes = [];
    }else{
      highScoreHard(player2.score)
      comp.hardIndex = [];
      player2.pushes = [];
      player2.score = 0
    }
  }
  //compare and set scores
  function highScoreHard(score) {
    if (score > localStorage.highScoreHard) {
      localStorage.highScoreHard = score
      $('.highScoreScreen h3').text(`${localStorage.highScoreHard} ...Good Work!`)
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
    $("#highScore").text(localStorage.highScoreHard)
    $("#userScore").text(player2.score)
  }
}
})
	