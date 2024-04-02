## Привет! Мне нужен html прототип со следующим принципом работы: есть сетка изображений. При клике на изображения должно появляться всплывающее окно, в котором автоматически начинается проигрывание видео. Видео играет зацикленно бесконечно, пока пользователь не закроет окно.

## HTML-прототип с сеткой изображений и всплывающим видео

**HTML:**

```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Сетка изображений с видео</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>Сетка изображений</h1>
    <div class="grid">
      <img src="image1.jpg" alt="Image 1" data-video="video1.mp4">
      <img src="image2.jpg" alt="Image 2" data-video="video2.mp4">
      <img src="image3.jpg" alt="Image 3" data-video="video3.mp4">
      <img src="image4.jpg" alt="Image 4" data-video="video4.mp4">
    </div>
    <div class="modal">
      <div class="video-container">
        <video controls autoplay loop>
          <source src="video1.mp4" type="video/mp4">
        </video>
      </div>
      <button class="close-button">Закрыть</button>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

**CSS:**

```css
.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  pointer-events: none;
  z-index: 100;
}

.modal.active {
  opacity: 1;
  pointer-events: auto;
}

.video-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 800px;
  max-height: 600px;
}

video {
  width: 100%;
  height: 100%;
}

.close-button {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px 15px;
  background-color: #ccc;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
```

**JavaScript:**

```javascript
const images = document.querySelectorAll('.grid img');
const modal = document.querySelector('.modal');
const videoContainer = document.querySelector('.video-container');
const closeButton = document.querySelector('.close-button');

images.forEach(image => {
  image.addEventListener('click', () => {
    const videoSrc = image.dataset.video;
    const video = document.querySelector('.video-container video source');
    video.src = videoSrc;
    modal.classList.add('active');
  });
});

closeButton.addEventListener('click', () => {
  modal.classList.remove('active');
});
```

**Объяснение:**

* HTML-код содержит сетку изображений (`<img>`) с data-атрибутом `data-video`, который содержит URL-адрес видео, 
* CSS-код определяет стилизацию сетки изображений, модального окна и видео.
* JavaScript-код добавляет функциональность:
    * При клике на изображение:
        * URL-адрес видео извлекается из data-атрибута
        * Источник видео (`<source>`) в модальном окне обновляется
        * Модальное окно становится видимым
    * При клике на кнопку "