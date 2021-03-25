//Global Variables
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var patternLength = 8;
var diffSelected = false;

//Global Constants
var clueHoldTime = 1000; // how long to play the clue for
var cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function startGame(){
    if (!diffSelected) {
      alert("Select your difficulty before starting the game!");
      return;
    }
    //initialize game variables
    progress = 0;
    gamePlaying = true;
  
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("introText").classList.add("hidden");
    document.getElementById("difficultyButtonArea").classList.add("hidden");
    document.getElementById("endBtn").classList.remove("hidden");
    document.getElementById("gameButtonArea").classList.remove("hidden");
  
    for (let i = 0; i < patternLength; i++) {
      pattern[i] = getRandomNum(1, 4);
    }
  
    playClueSequence();
}

function setDiff(level){
  diffSelected = true;
  if (level == 1) {
    document.getElementById("medium").classList.remove("lit")
    document.getElementById("hard").classList.remove("lit")
    document.getElementById("easy").classList.add("lit")
    patternLength = 3;
    clueHoldTime = 1000;
    cluePauseTime = 333;
  }
  else if (level == 2) {
    document.getElementById("easy").classList.remove("lit")
    document.getElementById("hard").classList.remove("lit")
    document.getElementById("medium").classList.add("lit")
    patternLength = 5;
    clueHoldTime = 800;
    cluePauseTime = 222;
  }
  else if (level == 3) {
    document.getElementById("easy").classList.remove("lit")
    document.getElementById("medium").classList.remove("lit")
    document.getElementById("hard").classList.add("lit")
    patternLength = 8;
    clueHoldTime = 600;
    cluePauseTime = 111;
  }
}

function endGame(){
  gamePlaying = false;
  
  document.getElementById("endBtn").classList.add("hidden");
  document.getElementById("gameButtonArea").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("introText").classList.remove("hidden");
  document.getElementById("difficultyButtonArea").classList.remove("hidden");
}

function lightButton(btn){
  document.getElementById("btn"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("btn"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  let delay = nextClueWaitTime; //set delay to initial wait time
  guessCounter = 0;
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime
    delay += cluePauseTime;
  }
}

function guess(btn)
{
  console.log("user guessed: " + btn);
  if(!gamePlaying)
  {
    return;
  }
  
  // guess wrong
  if(btn != pattern[guessCounter])
  {
    loseGame();
  }
  else 
  { // guess right
    if(guessCounter == progress)
    { // if end of the segment
      if(progress == pattern.length - 1)
      { // end of the pattern
        winGame();
      }
      else
      { // more pattern to go, onto the next level
        progress++;
        playClueSequence();
      }
    }
    else
    { // not at the end of the segment
      guessCounter++;
    }
  }
}

function loseGame(){
  endGame();
  alert("Game Over. You lost.");
}

function winGame(){
  endGame();
  alert("Congrats, you won!!");
}
// Inserting given sound code snippet:
// Sound Synthesis Functions
const freqMap = {
  1: 260,
  2: 330,
  3: 390,
  4: 430
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)