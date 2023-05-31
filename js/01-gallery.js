import { galleryItems } from './gallery-items.js';
// Change code below this line
 
const gallery = document.querySelector('.gallery');

// console.log(galleryItems);
galleryItems.forEach(function (item) {
    // add описания(description)
    // console.log(item.description); 
    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery__item');

    const galleryLink = document.createElement("a");
    galleryLink.classList.add('gallery__link');
    galleryLink.href = item.original;

    const galleryImg = document.createElement('img');
    galleryImg.classList.add("gallery__image");
    
    galleryImg.src = item.preview;
    galleryImg.setAttribute("data-source", item.original);
    galleryImg.alt = item.description;
    
    galleryLink.appendChild(galleryImg);
    galleryItem.appendChild(galleryLink);
    gallery.appendChild(galleryItem);

})


gallery.addEventListener('click', showOriginalImage);

function showOriginalImage(event) {
    event.preventDefault();
    console.log(event.target.tagName);
    if (event.target.tagName === 'IMG') {
      //модальное окнo  basicLightbox. срабатывает тогда, когда кликаем по картинке
      const instance = basicLightbox.create(`
          <img src="${event.target.dataset.source}" width="800" height="600">
      `);
        instance.show();
        // закрывает окошко при нажиме на Esc
      gallery.addEventListener("keydown", function (e) {
        if (e.code === "Escape") {
          instance.close();
        }
      });
    }
}
