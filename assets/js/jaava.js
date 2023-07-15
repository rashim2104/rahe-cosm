
function closeOffer() {
  var offer = document.querySelector(".offer");
  offer.style.display = "none";
}

const categoryH2 = document.querySelector('.props h2.catcls');
const slideContent = document.querySelector('.slidecontent');

categoryH2.addEventListener('mouseover', () => {
  slideContent.classList.add('active');
});

categoryH2.addEventListener('mouseout', () => {
  slideContent.classList.remove('active');
});

slideContent.addEventListener('mouseover', () => {
  slideContent.classList.add('active');
});

slideContent.addEventListener('mouseout', () => {
  slideContent.classList.remove('active');
});

var slides = document.getElementsByClassName("slide");
var slideIndex = 0;
var prevButton = document.querySelector(".prev-btn");
var nextButton = document.querySelector(".next-btn");
var dots = document.querySelectorAll(".dot");

function showSlide(index) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[index].style.display = "block";
  updateActiveDot(index);
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

function autoSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

setInterval(autoSlide, 4000);

showSlide(slideIndex);

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

function updateActiveDot(index) {
  for (var i = 0; i < dots.length; i++) {
    if (i === index) {
      dots[i].classList.add("active");
    } else {
      dots[i].classList.remove("active");
    }
  }
}

function handleDotClick(dotIndex) {
  showSlide(dotIndex);
  slideIndex = dotIndex;
}

for (var i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {
    var dotIndex = Array.from(dots).indexOf(this);
    handleDotClick(dotIndex);
  });
}


