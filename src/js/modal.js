console.log('Hello, unicorns!');
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var links = document.querySelectorAll('.portfolio__link--zoom');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var container = document.querySelectorAll('.portfolio__image-container');
for(let j=0; j<links.length; j++) {
    links[j].addEventListener("click", function(){
      var container = this.closest('.portfolio__image-container');
      var pickedImage = container.querySelector('.portfolio__image');
      modal.style.display = "block";
      modalImg.dataset.Id = pickedImage.dataset.Id;
      modalImg.src = pickedImage.src;
      captionText.innerHTML = this.alt;
    });
}
// Get the <span> element that closes the modal
var span = document.querySelector('.modal__close');

// When the user clicks on <span> (x), close the modal

span.addEventListener('click', closeModalHandler);
function closeModalHandler () {
    modal.style.display = "none";
}
// Slideshow
var prev = document.querySelector('.modal__button--prev');
var next = document.querySelector('.modal__button--next');
next.addEventListener('click', nextClickHandler);
prev.addEventListener('click', previousClickHandler);
var img = ['bike-n-min.jpg','bridge-n-min.jpg','coffee-n-min.jpg','dog-n-min.jpg','geisha-n-min.jpg','girl-n-min.jpg','japan-n-min.jpg','laptop-n-min.jpg'];
var maxImagesNumber = 8;
function nextClickHandler () {
  console.log(modalImg.dataset.Id);
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
