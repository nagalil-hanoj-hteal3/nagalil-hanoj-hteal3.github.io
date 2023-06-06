function toggleFullscreen() {
    var container = document.querySelector('.pdf-container');

    if (container.requestFullscreen) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        container.requestFullscreen();
      }
    } else if (container.mozRequestFullScreen) {
      if (document.mozFullScreenElement) {
        document.mozCancelFullScreen();
      } else {
        container.mozRequestFullScreen();
      }
    } else if (container.webkitRequestFullscreen) {
      if (document.webkitFullscreenElement) {
        document.webkitExitFullscreen();
      } else {
        container.webkitRequestFullscreen();
      }
    } else if (container.msRequestFullscreen) {
      if (document.msFullscreenElement) {
        document.msExitFullscreen();
      } else {
        container.msRequestFullscreen();
      }
    }
  }