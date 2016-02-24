var currentCount;
var noteSequence = [];
var pressedSequence = [];
var gameStarted = false; 
var strictMode = false;


//click events
$('#green-button').on('mousedown' , function(){
  if ( gameStarted == true){
   buttonPressed("green");
   pressedSequence.push(1);
 //   alert(pressedSequence); 
    doesSequenceMatch();
}
});

$('#yellow-button').on('mousedown' , function(){
  if ( gameStarted == true){
   buttonPressed("yellow");
     pressedSequence.push(2);
  //  alert(pressedSequence);
 doesSequenceMatch();
}
});

$('#red-button').on('mousedown' , function(){
    if ( gameStarted == true){
   buttonPressed("red");
     pressedSequence.push(3);
   //   alert(pressedSequence);
doesSequenceMatch();
}
});

$('#blue-button').on('mousedown' , function(){
    if ( gameStarted == true){ 
  buttonPressed("blue");
     pressedSequence.push(4);
//   alert(pressedSequence);
doesSequenceMatch();
    }
});

$('html').on('mouseup' , function(){
   originalColor();
});

$('#start').on('click', function() {
  startGame();
});

$('#strict').on('click', function() {
  if (strictMode == false){
    strictMode = true;
  $('#strictLight').css('background-color','#93DBFF');
  }else{
    strictMode = false;
      $('#strictLight').css('background-color','black');
    }
});


// Count event


function startGame() {
   currentCount = 1;
  gameStarted = true;
  $('#startLight').css('background-color','red');
  resetNoteSequence();
  resetPressedSequence();
  $('#countInsideText').html(currentCount);
  addNote();
}




function addNote() {
  noteSequence.push(Math.floor(Math.random()*4+1));
  kewlFunction();
}
//  alert(noteSequence);
 function kewlFunction(){ 
 for (var i = 0; i < noteSequence.length; i++){ 
 //   alert(noteSequence[note]);
  
          if (noteSequence[i] == 1){
            setTimeout(function() {
            buttonPressed("green")
            },1700 * i)};
   
             if (noteSequence[i] == 2){
            setTimeout(function() {
            buttonPressed("yellow")
            },1700 * i)};
          if (noteSequence[i] == 3){
            setTimeout(function() {
            buttonPressed("red")
            },1700 * i)};
          if (noteSequence[i] == 4){
            setTimeout(function() {
            buttonPressed("blue")
            },1700 * i)};
   
 }
    
}





function doesSequenceMatch() {
//  alert(pressedSequence);
//  alert(noteSequence);
  
  if ((noteSequence[0] == pressedSequence[0])
     && (noteSequence[1] == pressedSequence[1])  
     && (noteSequence[2] == pressedSequence[2])
     && (noteSequence[3] == pressedSequence[3])
     && (noteSequence[4] == pressedSequence[4])
     && (noteSequence[5] == pressedSequence[5])
     && (noteSequence[6] == pressedSequence[6])
     && (noteSequence[7] == pressedSequence[7])
     && (noteSequence[8] == pressedSequence[8])
     && (noteSequence[9] == pressedSequence[9])
     && (noteSequence[10] == pressedSequence[10])
     && (noteSequence[11] == pressedSequence[11])
     && (noteSequence[12] == pressedSequence[12])
     && (noteSequence[13] == pressedSequence[13])
     && (noteSequence[14] == pressedSequence[14])
     && (noteSequence[15] == pressedSequence[15])
     && (noteSequence[16] == pressedSequence[16])
     && (noteSequence[17] == pressedSequence[17])
     && (noteSequence[18] == pressedSequence[18])
     && (noteSequence[19] == pressedSequence[19])){
  //  alert('sequenceMatched');
    setTimeout(function(){
    currentCount ++;
     $('#countInsideText').html(currentCount);
    resetPressedSequence();
    // playsequencearray
    addNote();
    }, 2000);
      }
    if 
       ( (pressedSequence.length == 1) && noteSequence[0] !== pressedSequence[0]
        || pressedSequence.length == 2 && (noteSequence[1] !== pressedSequence[1]) 
        || pressedSequence.length == 3 && (noteSequence[2] !== pressedSequence[2])
        || pressedSequence.length == 4 && (noteSequence[3] !== pressedSequence[3])
        || pressedSequence.length == 5 && (noteSequence[4] !== pressedSequence[4])
        || pressedSequence.length == 6 && (noteSequence[5] !== pressedSequence[5])
        || pressedSequence.length == 7 && (noteSequence[6] !== pressedSequence[6])
        || pressedSequence.length == 8 && (noteSequence[7] !== pressedSequence[7])
        || pressedSequence.length == 9 && (noteSequence[8] !== pressedSequence[8])
        || pressedSequence.length == 10 && (noteSequence[9] !== pressedSequence[9])
        || pressedSequence.length == 11 && (noteSequence[10] !== pressedSequence[10])
        || pressedSequence.length == 12 && (noteSequence[11] !== pressedSequence[11])
        || pressedSequence.length == 13 && (noteSequence[12] !== pressedSequence[12])
        || pressedSequence.length == 14 && (noteSequence[13] !== pressedSequence[13])
        || pressedSequence.length == 15 && (noteSequence[14] !== pressedSequence[14])
        || pressedSequence.length == 16 && (noteSequence[15] !== pressedSequence[15])
        || pressedSequence.length == 17 && (noteSequence[16] !== pressedSequence[16])
        || pressedSequence.length == 18 && (noteSequence[16] !== pressedSequence[17])
        || pressedSequence.length == 19 && (noteSequence[18] !== pressedSequence[18])
        || pressedSequence.length == 20 && (noteSequence[19] !== pressedSequence[19])         
){
   // alert('sequence doesnt Match');
   setTimeout(function(){
         yoshiSound.play();
     }, 500);
    
         
    if (strictMode == true){     
    currentCount = 0;
    $('#countInsideText').html('--');
    resetPressedSequence();
    resetNoteSequence();
         gameStarted = false;
      $('#startLight').css('background-color','black');
      $('#strictLight').css('background-color','black');
    }else{
      resetPressedSequence();
         setTimeout(function(){
         kewlFunction();
     }, 2200);
      
    }
  }
}


function resetPressedSequence(){
  pressedSequence = [];
}

function resetNoteSequence(){
  noteSequence = [];
}





//button is triggered, lights up, and makes sound

function buttonPressed(color){
  if (color == "green"){
  $('#green-button').css('background-color', 'lime');   
  greenSound.play();  
        setTimeout(function() {
             $('#green-button').css('background-color', '#34d491');
            },1400)};
  
    if (color == "yellow"){
  $('#yellow-button').css('background-color', 'yellow');   
  yellowSound.play();  
              setTimeout(function() {
             $('#yellow-button').css('background-color', ' #ffffa8');
            },1400)};
  
    if (color == "red"){
  $('#red-button').css('background-color', 'red');
      
  redSound.play();  
         setTimeout(function() {
             $('#red-button').css('background-color', 'coral');
            },1400)};
    if (color == "blue"){
  $('#blue-button').css('background-color', '#E0E0FF');
  blueSound.play();  
          setTimeout(function() {
             $('#blue-button').css('background-color', '#AEB7FF');
            },1400)};
}
 var greenSound = new Audio('http://noproblo.dayjo.org/ZeldaSounds/SSBB/SSBB_Zelda_Magic3.wav');
 var yellowSound = new Audio('http://noproblo.dayjo.org/ZeldaSounds/MM/MM_Link_Attack1.wav');
 var redSound = new Audio('http://noproblo.dayjo.org/ZeldaSounds/SSBB/SSBB_Sheik_Entrance.wav');
 var blueSound = new Audio('http://noproblo.dayjo.org/ZeldaSounds/SSBB/SSBB_Zelda_Magic2.wav')
 var yoshiSound = new Audio ('http://themushroomkingdom.net/sounds/wav/mparty8/mparty8_yoshi_03.wav')




//sets function back to its original color
function originalColor(color){
  $('#green-button').css('background-color', ' #34d491');
  greenSound.pause();
  greenSound.currentTime = 0
  $('#yellow-button').css('background-color', ' #ffffa8');
  yellowSound.pause();
  yellowSound.currentTime = 0
  $('#red-button').css('background-color', ' coral');
  redSound.pause();
  redSound.currentTime = 0
  $('#blue-button').css('background-color', ' #AEB7FF');
  blueSound.pause();
  blueSound.currentTime = 0
}