// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const createListGallery = galleryItems.map(elem => 
    `<a class="gallery__item" href="${elem.original}" data-caption="${elem.description}" onclick="return false;">
    <img class="gallery__image" src="${elem.preview}" alt="${elem.description}" />
    </a>`
    ).join("")


const list = document.querySelector(".gallery");
list.insertAdjacentHTML("beforeend", createListGallery)

new SimpleLightbox('.gallery a', 
{ 
captions: true, 
captionsData: "alt", 
captionDelay: 250, 
}
); 

