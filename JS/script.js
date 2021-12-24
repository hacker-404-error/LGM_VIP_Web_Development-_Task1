// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}    
//   x[myIndex-1].style.display = "block";  
//   setTimeout(carousel, 9000);    
// }



var myVideo = document.getElementById("video1"); 

function playpause() { 
  if (myVideo.pause()) 
  myVideo.play(); 
  else 
  myVideo.pause(); 
} 

// function makeBig() { 
//     myVideo.width = 560; 
// } 

// function makeSmall() { 
//     myVideo.width = 320; 
// } 

// function makeNormal() { 
//     myVideo.width = 420; 
// }