const wrapperVideo = document.querySelector('.wrapper-video-dininho')
const video = document.querySelector('.video-dininho')


wrapperVideo.addEventListener('click', () => {
  video.paused ? video.play() : video.pause()

  wrapperVideo.classList.toggle('-play');
})