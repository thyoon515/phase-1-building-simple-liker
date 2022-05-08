// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
function hideError(){
  let div = document.querySelector('div')
  div.classList.add('hidden')
}
hideError()

const modal = document.querySelector('#modal')
const modalMessage = document.querySelector('#modal-message')

const hearts = document.querySelectorAll('.like-glyph');

hearts.forEach(hearts => hearts.addEventListener('click', heartClicked))

function heartClicked(hearts){
  mimicServerCall()
  .then(() => {
    if(hearts.target.innerText === EMPTY_HEART){
      hearts.target.innerText = FULL_HEART;
      hearts.target.classList.add('activated-heart')
    }
    else if(hearts.target.innerText === FULL_HEART){
      hearts.target.innerText = EMPTY_HEART
      hearts.target.classList.remove('activated-heart')
    }
  })
  .catch(() => {
    modal.classList.remove('hidden')
    modalMessage.innerHTML = serverErrorMessage
    setTimeout(() => {
      modal.classList.add('hidden')
    }, 3000)
  })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
