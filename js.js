const audio = document.querySelector('audio');
const btn = document.querySelector('.slider');
const H = document.querySelector('h3');
let btnState = true;
let segmentEnd=0;

btn.addEventListener( 'click',()=>{ switchAudio(btnState) } )

function switchAudio(state){
  
  segmentEnd = audio.currentTime 
  audio.pause();

  if(state){
    H.style.color = 'rgb(227, 11, 93)'
    H.innerText = 'version 1.5'
    audio.src = '/v15.mp3'
  }else{
    H.style.color = 'rgb(0, 0, 0)'
    H.innerText = 'version 1.0'
    audio.src = '/v10.mp3'
  }
  
  btnState = !btnState;

  audio.currentTime = segmentEnd;
  audio.play()

}
