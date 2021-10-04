//! все переробити


const pictureInnerContainer = document.querySelector('.picture__inner_container');

const img = [`<img class="gallery-img" src="assets/img/galery/galery1.jpg" alt="galery1">`, `<img class="gallery-img" src="assets/img/galery/galery2.jpg" alt="galery2">`, `<img class="gallery-img" src="assets/img/galery/galery3.jpg" alt="galery3">`, `<img class="gallery-img" src="assets/img/galery/galery4.jpg" alt="galery4">`, `<img class="gallery-img" src="assets/img/galery/galery5.jpg" alt="galery5">`, `<img class="gallery-img" src="assets/img/galery/galery6.jpg" alt="galery6">`, `<img class="gallery-img" src="assets/img/galery/galery7.jpg" alt="galery7">`, `<img class="gallery-img" src="assets/img/galery/galery8.jpg" alt="galery8">`, `<img class="gallery-img" src="assets/img/galery/galery9.jpg" alt="galery9">`, `<img class="gallery-img" src="assets/img/galery/galery10.jpg" alt="galery10">`, `<img class="gallery-img" src="assets/img/galery/galery11.jpg" alt="galery11">`, `<img class="gallery-img" src="assets/img/galery/galery12.jpg" alt="galery12">`, `<img class="gallery-img" src="assets/img/galery/galery13.jpg" alt="galery13">`, `<img class="gallery-img" src="assets/img/galery/galery14.jpg" alt="galery14">`, `<img class="gallery-img" src="assets/img/galery/galery15.jpg" alt="galery15">`];
pictureInnerContainer.innerHTML = img;


function shuffle(img) {
  for (let i = img.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [img[i], img[j]] = [img[j], img[i]];
  }
}

shuffle()
