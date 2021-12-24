



var myVideo = document.getElementById("video1"); 
var ispaused = myVideo.paused

function playpause() { 
  if (ispaused) 
  {
  myVideo.play(); 
  }
  else 
  myVideo.pause(); 
} 