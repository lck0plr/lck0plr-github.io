const images = document.querySelectorAll('.grid img');
const modal = document.querySelector('.modal');
const videoContainer = document.querySelector('.video-container');
const closeButton = document.querySelector('.close-button');

images.forEach(image => {
  image.addEventListener('click', () => {
    const videoSrc = image.dataset.video;
    const video = videoContainer.querySelector('video');
    video.src = videoSrc;
    video.load();  // Добавьте эту строку, чтобы перезагрузить видео после обновления источника
    modal.classList.add('active');
  });
});

closeButton.addEventListener('click', () => {
  const video = videoContainer.querySelector('video');
  video.pause();  // Добавьте эту строку, чтобы остановить воспроизведение видео
  modal.classList.remove('active');
});
