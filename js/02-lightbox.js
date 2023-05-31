import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

galleryItems.forEach(function (item) {
  
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = item.original;

  const galleryImg = document.createElement("img");
  galleryImg.classList.add("gallery__image");

  galleryImg.src = item.preview;
  galleryImg.alt = item.description;

  galleryLink.appendChild(galleryImg);
  galleryItem.appendChild(galleryLink);
  gallery.appendChild(galleryItem);
});

gallery.addEventListener("click", showImage);

function showImage(event) {
  event.preventDefault();
    if (event.target.tagName === "IMG") {

      //Использование using SimpleLightbox
      var lightbox = new SimpleLightbox(".gallery a", {
        captionsData: "alt",
        captionPosition: "bottom",
        captionDelay: "250",
      });
    }
}