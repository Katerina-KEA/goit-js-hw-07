import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

/*Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
Реализация делегирования на ul.gallery и получение url большого изображения.
Подключение скрипта и стилей библиотеки модального окна basicLightbox.
Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
Замена значения атрибута src элемента <img> в модальном окне перед открытием.
Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе <img>, и указываться в href ссылки.
Не добавляй другие HTML теги или CSS классы кроме тех, что есть в этом шаблоне.
Обрати внимание на то, что изображение обернуто в ссылку, а значит при клике по умолчанию пользователь будет перенаправлен на другую страницу.
Запрети это поведение по умолчанию.*/

const galleryList = document.querySelector(".gallery");
const galleryMarkup = galleryItems
  .map(
    (item) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
  <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`
  )
  .join("");

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);
galleryList.addEventListener("click", showOriginalImage);

let imgModal;

function showOriginalImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  document.addEventListener("keydown", closeModalOnEscape);

  const imgOriginal = event.target.dataset.source;
  imgModal = basicLightbox.create(`
        <img width="1200" height="800" src="${imgOriginal}">
      `);
  imgModal.show();
}
/*Добавь закрытие модального окна по нажатию клавиши Escape. Сделай так, чтобы прослушивание клавиатуры было только пока открыто модальное окно.
 У библиотеки basicLightbox есть метод для программного закрытия модального окна.*/
 
function closeModalOnEscape(e) {
  e.preventDefault();
  if (e.code === "Escape") {
    imgModal.close();
    document.removeEventListener("keydown", closeModalOnEscape);
  }
}





// const gallery = document.querySelector('.gallery');

// // console.log(galleryItems);
// galleryItems.forEach(function (item) {
//     // add описания(description)
//     // console.log(item.description);
//     const galleryItem = document.createElement('li');
//     galleryItem.classList.add('gallery__item');

//     const galleryLink = document.createElement("a");
//     galleryLink.classList.add('gallery__link');
//     galleryLink.href = item.original;

//     const galleryImg = document.createElement('img');
//     galleryImg.classList.add("gallery__image");

//     galleryImg.src = item.preview;
//     galleryImg.setAttribute("data-source", item.original);
//     galleryImg.alt = item.description;

//     galleryLink.appendChild(galleryImg);
//     galleryItem.appendChild(galleryLink);
//     gallery.appendChild(galleryItem);

// })

// gallery.addEventListener('click', showOriginalImage);

// function showOriginalImage(event) {
//     event.preventDefault();
//     console.log(event.target.tagName);
//     if (event.target.tagName === 'IMG') {

//       //модальное окнo  basicLightbox. срабатывает тогда, когда кликаем по картинке
//      <img src="${event.target.dataset.source}" width="800" height="600"></img>
//         <img src="" width="800" height="600">
//       `);
//       console.log(instance);
//         instance.show();

//         // закрывает окошко при нажиме на Esc
//   gallery.addEventListener("keydown", function (e) {
//     if (e.code === "Escape") {
//       instance.close();
//     }
//   });

//     }
// }
