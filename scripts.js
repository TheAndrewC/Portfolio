/* 
  IN THIS FILE YOU SHOULD DEFINE THREE FUNCTIONS:
  incr(), decr(), and dispMessage(). THEY WILL BE HOOKED 
  UP TO THE THREE CORRESPONDING BUTTONS IN YOUR 
  HTML FILE.
  
  incr() WILL TAKE THE CURRENT NUMBER IN YOUR counter
  ELEMENT AND INCREASE IT BY ONE. THERE IS NO LIMIT TO 
  HOW HIGH incr() CAN INCREASE THE NUMBER.
  
  decr() WILL DO THE SAME AS incr() EXCEPT IT WILL 
  DECREASE THE NUMBER. ALSO, YOU SHOULD UTILIZE 
  CONTROL FOLOW IN decr() TO ONLY ALLOW THE USER TO 
  DECREASE THE NUMBER TO 0. IF THEY TRY TO DECREASE 
  LOWER THAN 0, SHOW AN ALERT WARNING THE USER THAT 
  THEY CANNOT DO SO. YOU CAN WRITE WHATEVER YOU'D LIKE
  IN THE ERROR MESSAGE.
  
  dispMessage() WILL DISPLAY A MESSAGE THAT CONTAINS
  THE NAME INPUT BY THE USER (CONCATENATED).
*/

function incr() {
  console.log("pressed Increase");
  let counterNum = document.getElementById("counter");
  counterNum.innerHTML ++;
/*I realize that sometimes one must use the parseInt
 function to change the nummber from string to a 
 number. However, here, by using ++, it automatically
 does so.*/
}

function decr() {
    console.log("pressed Decrease");
  let counterNum = document.getElementById("counter");
  counterNum.innerHTML --;
  if (counterNum.innerHTML<0) {alert("You cannot go below 0!");
  counterNum.innerHTML ++;
}
}

function dispMessage() {

  let name = prompt("What is your name?", "Student 1");
  
  msgText.innerHTML = ('Hello ' + name + ", consider reading about Max Mathews below!");
}
 

 //Extra Credit section

 function changeImage () {
  let img = document.getElementById('img1');
  let mySrc = img.getAttribute('src');
    
      
      if (mySrc === 'images/Mathews picture.png') {
        img.setAttribute ('src','images/Digital Music.png');
      }   
      else {
        img.setAttribute ('src','images/Mathews picture.png');
      }
  }


