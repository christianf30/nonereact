function PlaySound() {
  var myAudio= document.getElementById('cherry');
  if(myAudio.paused){
  	myAudio.Play();
  }
  else
  {
  	myAudio.pause();
  }
}