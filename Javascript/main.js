const square1 = $('#sequare1')
const square2 = $('#sequare2')
const square3 = $('#sequare3')
const square4 = $('#sequare4')
const square5 = $('#sequare5')
const square6 = $('#sequare6')
const square7 = $('#sequare7')
const square8 = $('#sequare8')
const square9 = $('#sequare9')
const newGame =$('#new')
let scoureX = 0
let scoureO = 0
let scoureTie = 0
let scoureP = $('#result').text('X:'+scoureX+' | O: '+scoureO+' | Tie:'+scoureTie)
let winner =  $('h2')
let flag = true; // use to switch between X and O
const stop = $('#stop')
const start = $('#start')
let flag1 = 0; 
let mySound = new sound("audios/Ta Da.wav");
let click = new sound("audios/click.wav");
let tieSound = new sound("audios/tie.wav");
function sound(src) { 
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound); // create audio 
  this.play = function(){ // to play the audio when the call this function
    this.sound.play();
  }
 
}
newGame.click( function() { // If the user clicks the new game button will call this function
  click.play();
  $('.sequare').css('background-color','CadetBlue')
  if(flag1 == 1){    // to check if the game was started before or not
    $('.sequare').css('cursor','grab')
    $('.sequare').empty()
    game();
   }
  }
 );
 stop.click( function() {// If the user clicks the stop game button will call this function
   click.play();
   $('.sequare').css('background-color','CadetBlue')
   $('.sequare').empty()
   $('.sequare').unbind( 'click' );
   winner.empty()
   $('.sequare').css('cursor','not-allowed')
   scoureX = 0;
   scoureO = 0;
   scoureTie = 0;
   scoureP.text('X:'+scoureX+' | O: '+scoureO+' | Tie:'+scoureTie)
   flag1 = 0;
  }
 );
const win =  function(){ // to check who player is winning
     if(square1.text()=='X'  && square2.text() == 'X' && square3.text() == 'X'){
        square1.css('background-color','DarkCyan')
        square3.css('background-color','DarkCyan')
        square2.css('background-color','DarkCyan')
        mySound.play();       
        winner.css('color','red')
        winner.css('font-size','40px')
        winner.text('X is winner');
        scoureX++;
        scoureP.text('X:'+scoureX+' | O: '+scoureO+' | Tie:'+scoureTie)
        $('.sequare').unbind( 'click' );
        $('.sequare').css('cursor','not-allowed')

        return true;
     }
     else if(square1.text() == 'O'  && square2.text() == 'O' && square3.text() == 'O'){
        square1.css('background-color','DarkCyan')
        square3.css('background-color','DarkCyan')
        square2.css('background-color','DarkCyan')  
        mySound.play();       
        winner.css('color','green')
        winner.css('font-size','40px')
        winner.text('O is winner');
        scoureO++;
        scoureP.text('X:'+scoureX+' | O: '+scoureO+' | Tie:'+scoureTie)
        $('.sequare').unbind( 'click' );
        $('.sequare').css('cursor','not-allowed')

        return true;
    
    }
    else if(square4.text() == 'O'  && square5.text() == 'O' && square6.text() == 'O'){
        square4.css('background-color','DarkCyan')
        square5.css('background-color','DarkCyan')
        square6.css('background-color','DarkCyan')  
        mySound.play();
        winner.css('color','green')
        winner.css('font-size','40px')
        winner.text('O is winner');
        scoureO++;
        scoureP.text('X:'+scoureX+' | O: '+scoureO+' | Tie:'+scoureTie)
        $('.sequare').unbind( 'click' );
        $('.sequare').css('cursor','not-allowed')

        return true;
    }
    else if(square4.text() == 'X'  && square5.text() == 'X' && square6.text() =='X'){
        square4.css('background-color','DarkCyan')
        square5.css('background-color','DarkCyan')
        square6.css('background-color','DarkCyan')    
        mySound.play();       
        winner.css('color','red')
        winner.css('font-size','40px')
        winner.text('X is winner');
        scoureX++;
        scoureP.text('X:'+scoureX+' | O: '+scoureO+' | Tie:'+scoureTie)
        $('.sequare').unbind( 'click' );
        $('.sequare').css('cursor','not-allowed')

        return true;
    }
    else if(square7.text() == 'X'  && square8.text() == 'X' && square9.text() == 'X'){
        square7.css('background-color','DarkCyan')
        square8.css('background-color','DarkCyan')
        square9.css('background-color','DarkCyan')  
        mySound.play();       
        winner.css('color','red')
        winner.css('font-size','40px')
        winner.text('X is winner');
        scoureX++;
        scoureP.text('X:'+scoureX+' | O: '+scoureO+' | Tie:'+scoureTie)
        $('.sequare').unbind( 'click' );
        $('.sequare').css('cursor','not-allowed')

        return true;
    }
    else if(square7.text() == 'O'  && square8.text() == 'O' && square9.text() == 'O'){
        square7.css('background-color','DarkCyan')
        square8.css('background-color','DarkCyan')
        square9.css('background-color','DarkCyan')    
        mySound.play();       
        winner.css('color','green')
        winner.css('font-size','40px')
        winner.text('O is winner');
        scoureO++;
        scoureP.text('X:'+scoureX+' | O: '+scoureO+' | Tie:'+scoureTie)
        $('.sequare').unbind( 'click' );
        $('.sequare').css('cursor','not-allowed')
        return true;

    }
    else if(square1.text() == 'X' && square4.text()=='X' &&square7.text() == 'X'){
       square1.css('background-color','DarkCyan')
       square4.css('background-color','DarkCyan')
       square7.css('background-color','DarkCyan')   
       mySound.play();       
       winner.css('color','red')
       winner.css('font-size','40px')
       winner.text('X is winner');
       scoureX++;
       scoureP.text('X:'+scoureX+' | O: '+scoureO+' | Tie:'+scoureTie)
       $('.sequare').unbind( 'click' );
       $('.sequare').css('cursor','not-allowed')

       return true;
    }
    else if(square1.text() == 'O' && square4.text()=='O' &&square7.text() == 'O'){
      square1.css('background-color','DarkCyan')
      square4.css('background-color','DarkCyan')
      square7.css('background-color','DarkCyan')  
      mySound.play();       
      winner.css('color','green')
      winner.css('font-size','40px')
      winner.text('O is winner');
      scoureO++;
      scoureP.text('X:'+scoureX+' | O: '+scoureO+' | Tie:'+scoureTie)
      $('.sequare').unbind( 'click' );
      $('.sequare').css('cursor','not-allowed')

      return true;
    }
    else if(square2.text() == 'O' && square5.text()=='O' &&square8.text() == 'O'){
      square2.css('background-color','DarkCyan')
      square5.css('background-color','DarkCyan')
      square8.css('background-color','DarkCyan')  
      mySound.play();       
      winner.css('color','green')
      winner.css('font-size','40px')
      winner.text('O is winner');
      scoureO++;
      scoureP.text('X:'+scoureX+' | O: '+scoureO+' | Tie:'+scoureTie)
      $('.sequare').unbind( 'click' );
      $('.sequare').css('cursor','not-allowed')

      return true;
    }
    else if(square2.text() == 'X' && square5.text()=='X' &&square8.text() == 'X'){
      square2.css('background-color','DarkCyan')
      square5.css('background-color','DarkCyan')
      square8.css('background-color','DarkCyan')  
      mySound.play();       
      winner.css('color','red')
      winner.css('font-size','40px')
      winner.text('X is winner');
      scoureX++;
      scoureP.text('X:'+scoureX+' | O: '+scoureO+' | Tie:'+scoureTie)
      $('.sequare').unbind( 'click' );
      $('.sequare').css('cursor','not-allowed')

      return true;
    }
    else if(square3.text() == 'X' && square6.text()=='X' &&square9.text() == 'X'){
        square3.css('background-color','DarkCyan')
        square6.css('background-color','DarkCyan')
        square9.css('background-color','DarkCyan')  
        mySound.play();       
        winner.css('color','red')
        winner.css('font-size','40px')
        winner.text('X is winner');
        scoureX++;
        scoureP.text('X:'+scoureX+' | O: '+scoureO+' | Tie:'+scoureTie)
        $('.sequare').unbind( 'click' );
        $('.sequare').css('cursor','not-allowed')

        return true;
    }
    else if(square3.text() == 'O' && square6.text()=='O' &&square9.text() == 'O'){
      square3.css('background-color','DarkCyan')
      square6.css('background-color','DarkCyan')
      square9.css('background-color','DarkCyan')    
      mySound.play();       
      winner.css('color','green')
      winner.css('font-size','40px')
      winner.text('O is winner');
      scoureO++;
      scoureP.text('X:'+scoureX+' | O: '+scoureO+' | Tie:'+scoureTie)
      $('.sequare').unbind( 'click' );
      $('.sequare').css('cursor','not-allowed')

      return true;
    }
    else if(square1.text() == 'X' && square5.text()=='X' &&square9.text() == 'X'){
      square1.css('background-color','DarkCyan')
      square5.css('background-color','DarkCyan')
      square9.css('background-color','DarkCyan')  
      mySound.play();       
      winner.css('color','red')   
      winner.css('font-size','40px')
      winner.text('X is winner');
      scoureX++;
      scoureP.text('X:'+scoureX+' | O: '+scoureO+' | Tie:'+scoureTie)
      $('.sequare').unbind( 'click' );
      $('.sequare').css('cursor','not-allowed')

      return true;
    }
    else if(square1.text() == 'O' && square5.text()=='O' &&square9.text() == 'O'){
      square1.css('background-color','DarkCyan')
      square5.css('background-color','DarkCyan')
      square9.css('background-color','DarkCyan')  
      mySound.play();       
      winner.css('color','green')
      winner.css('font-size','40px')
      winner.text('O is winner');
      scoureO++;
      scoureP.text('X:'+scoureX+' | O: '+scoureO+' | Tie:'+scoureTie)
      $('.sequare').unbind( 'click' );
      $('.sequare').css('cursor','not-allowed')

      return true;
    }
    else if(square7.text() == 'X' && square5.text()=='X' &&square3.text() == 'X'){
      square7.css('background-color','DarkCyan')
      square5.css('background-color','DarkCyan')
      square3.css('background-color','DarkCyan')    
      mySound.play();       
      winner.css('color','red')
      winner.css('font-size','40px')
      winner.text('X is winner');
      scoureX++;
      scoureP.text('X:'+scoureX+' | O: '+scoureO+' | Tie:'+scoureTie)
      $('.sequare').unbind( 'click' );
      $('.sequare').css('cursor','not-allowed')

      return true;
    }
    else if(square7.text() == 'O' && square5.text()=='O' &&square3.text() == 'O'){
      square7.css('background-color','DarkCyan')
      square5.css('background-color','DarkCyan')
      square3.css('background-color','DarkCyan')    
      mySound.play();       
      winner.css('color','green')
      winner.css('font-size','40px')
      winner.text('O is winner');
      scoureO++;
      scoureP.text('X:'+scoureX+' | O: '+scoureO+' | Tie:'+scoureTie)
      $('.sequare').unbind( 'click' );
      $('.sequare').css('cursor','not-allowed')

      return true;
    }
    return false;    
};
const tie = function(){ // To check the game result is a tie 
    if(square1.is(':empty') || square2.is(':empty') || square3.is(':empty') || square4.is(':empty') || square5.is(':empty') || square6.is(':empty') || square7.is(':empty') || square8.is(':empty') || square9.is(':empty')){
       return;
    }else{
      tieSound.play();
      scoureTie++;
      winner.css('color','blue')
      winner.css('font-size','40px')
      winner.text('Tie');
      scoureP.text('X:'+scoureX+' | O: '+scoureO+' | Tie:'+scoureTie)
      $('.sequare').css('cursor','not-allowed')

    }
}
const game =function (){ // allow players to play
  
  if(flag == true){ 
    winner.css('color','red')
    winner.css('font-size','20px')
    winner.text('X turn')
  }
  else{
    winner.css('font-size','20px')
    winner.css('color','green')
    winner.text('O turn')
  }
    square1.click( function() {
      click.play();       
      if(square1.is(':empty')){     
         if(flag == true){
           square1.css('color','red')
           square1.text('X');
           square1.css('cursor','not-allowed')
           flag = false;
           winner.css('color','green')
           winner.text('O turn')
           if(win()){
            return;
           }else{
             tie();
           }
         }
       else{
        square1.css('color','green')
        square1.text('O');
        square1.css('cursor','not-allowed')
        flag = true;
        winner.css('color','red')
        winner.text('X turn')
        if(win()){
          return;
        }else{
          tie();

        }
       }
     }
    }   
)
square2.click( function() {
    click.play();       
    if(square2.is(':empty')){    
       if(flag == true){
           square2.css('color','red')
           square2.text('X');
           square2.css('cursor','not-allowed')
           flag = false;
           winner.css('color','green')
           winner.text('O turn')
           if(win()){
            return;
           }else{
            tie();
          }
       }
       else{
        square2.css('color','green')
        square2.text('O');
        square2.css('cursor','not-allowed')
        flag = true;
        winner.css('color','red')
        winner.text('X turn')
        if(win()){
          return;
        }else{
          tie();
        }
       }
    }
  }
)

square3.click( function() {
  click.play();       
  if(square3.is(':empty')){    
    if(flag == true){
        square3.css('color','red')
        square3.text('X');
        square3.css('cursor','not-allowed')
        flag = false;
        winner.css('color','green')
        winner.text('O turn')
        if(win()){
          return;
        }else{
          tie();
        }
    }
    else{
        square3.css('color','green')
        square3.text('O');
        square3.css('cursor','not-allowed')
        flag = true;
        winner.css('color','red')
        winner.text('X turn')
        if(win()){
          return;
        }else{
          tie();
      } 
     } 
    }
   }
);

square4.click( function() {
  click.play();       
  if(square4.is(':empty')){    
    if(flag == true){
      square4.css('color','red')
      square4.text('X');
      square4.css('cursor','not-allowed')
      flag = false;
      winner.css('color','green')
      winner.text('O turn')
      if(win()){
        return;
      }else{
        tie();
      }
    }
   else{
      square4.css('color','green')
      square4.text('O');
      flag = true;
      winner.css('color','red')
      square4.css('cursor','not-allowed')
      winner.text('X turn')
      if(win()){
         return;
      }else{
        tie();
      }
    }
  }
});
square5.click( function() {
  click.play();       
  if(square5.is(':empty')){    
    if(flag == true){
      square5.css('color','red')
      square5.text('X');
      flag = false;
      square5.css('cursor','not-allowed')
      winner.css('color','green')
      winner.text('O turn')
      if(win()){
        return;
      }else{
        tie();
      }
    }
    else{
      square5.css('color','green')
      square5.text('O');
      square5.css('cursor','not-allowed')
      flag = true;
      winner.css('color','red')
      winner.text('X turn')
      if(win()){
        return;
      }else{
        tie();
      }
    }
  }
})
square6.click( function() {
  click.play();       
  if(square6.is(':empty')){  
    if(flag == true){
      square6.css('color','red')  
      square6.text('X');
      square6.css('cursor','not-allowed')
      flag = false;
      winner.css('color','green')
      winner.text('O turn')
      if(win()){
        return;
      }else{
        tie();}
    }
    else{
      square6.css('color','green')
      square6.text('O');
      square6.css('cursor','not-allowed')
      flag = true;
      winner.css('color','red')
      winner.text('X turn')
      if(win()){
        return;
      }else{
        tie();
      }
    }
  }
})
square7.click( function() {
  click.play();       
  if(square7.is(':empty')){    
    if(flag == true){
      square7.css('color','red')
      square7.text('X');
      square7.css('cursor','not-allowed')
      flag = false;
      winner.css('color','green')
      winner.text('O turn')
      if(win()){
        return;
      }else{
        tie();
      }
    }
    else{
      square7.text('O');
      square7.css('color','green')
      flag = true;
      winner.text('X turn')
      winner.css('color','red')
      square7.css('cursor','not-allowed')
      if(win()){
        return;
      }else{
        tie();
      }
     }
    }
  })
square8.click( function() {
  click.play();       
  if(square8.is(':empty')){    
    if(flag == true){
      square8.css('color','red')
      square8.text('X');
      square8.css('cursor','not-allowed')
      flag = false;
      winner.css('color','green')
      winner.text('O turn')
      if(win()){
            return;
        }else{
          tie();
        }
      }
      else{
        square8.css('color','green')
        square8.text('O');
        square8.css('cursor','not-allowed')
        flag = true;
        winner.css('color','red')
        winner.text('X turn')
        if(win()){
            return;
        }else{
          tie();
        }
       }
    }
  }
)

square9.click( function() {
  click.play();       
  if(square9.is(':empty')){    
    if(flag == true){
      square9.css('color','red')
      square9.text('X');
      square9.css('cursor','not-allowed')
      flag = false;
      winner.css('color','green')
      winner.text('O turn')
      if(win()){
        return;
      }else{
        tie();
      }
    }
    else{
      square9.css('color','green')
      square9.text('O');
      square9.css('cursor','not-allowed')
      flag = true;
      winner.css('color','red')
      winner.text('X turn')
      if(win()){
        return;
      }else{
        tie();
      }
    }
  }
})
}
start.click( function() {   
  click.play();
  if(flag1 == 0){
    $('.sequare').css('cursor','grab')
    game();
    flag1 = 1;
  }
});
