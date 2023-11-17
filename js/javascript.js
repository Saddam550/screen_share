// Create Share function
function Share() {
  // Get screenFeed element from the DOM
  const screenFeed = document.getElementById('screen')

  // Get user's screen media stream using getDisplayMedia method
  navigator.mediaDevices
    .getDisplayMedia({ video: true })
    .then((screen) => {
      // Set screenFeed's source object to the screen media stream
      screenFeed.srcObject = screen
    })
    .catch((error) => {
      // Log error if any
      console.error('error:' + error)
    })
}
