console.log('Hello, unicorns!');
// Get the modal
const modal = document.getElementById('myModal');
const close = document.querySelector('.modal__close');
const prev = document.querySelector('.modal__button--prev');
const next = document.querySelector('.modal__button--next');
const img = ['bike-n-min.jpg','bridge-n-min.jpg','coffee-n-min.jpg','dog-n-min.jpg','geisha-n-min.jpg','girl-n-min.jpg','japan-n-min.jpg','laptop-n-min.jpg'];
// Get the image and insert it inside the modal - use its "alt" text as a caption
const links = document.querySelectorAll('.portfolio__link--zoom');
const modalImg = document.querySelector('#img01');
const captionText = document.querySelector('#caption');
const container = document.querySelectorAll('.portfolio__image-container');
for(let j=0; j<links.length; j++) {
    links[j].addEventListener('click', function(){
      var container = this.closest('.portfolio__image-container');
      var pickedImage = container.querySelector('.portfolio__image');
      modal.style.display = 'block';
      modalImg.dataset.Id = pickedImage.dataset.Id;
      modalImg.src = pickedImage.src;
      captionText.innerHTML = this.alt;
    });
}
// Get the <span> element that closes the modal


// When the user clicks on <span> (x), close the modal

close.addEventListener('click', closeModalHandler);
function closeModalHandler () {
    modal.style.display = 'none';
}
// Slideshow

next.addEventListener('click', nextClickHandler);
prev.addEventListener('click', previousClickHandler);
let maxImagesNumber = 8;
function nextClickHandler () {
 if(modalImg.dataset.Id < img.length -1) {
 modalImg.dataset.Id++;
} else {
  modalImg.dataset.Id=0;
}
  modalImg.src = '../Marvel/src/img/'+img[modalImg.dataset.Id];
}

function previousClickHandler () {
  if(modalImg.dataset.Id <= img.length -1 & modalImg.dataset.Id > 0) {
    modalImg.dataset.Id--;
   } else {
   modalImg.dataset.Id = maxImagesNumber;
   modalImg.dataset.Id--;
   }
   modalImg.src = '../Marvel/src/img/'+img[modalImg.dataset.Id];
}
