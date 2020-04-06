document
  .querySelector(".menu-btn")
  .addEventListener("click", () =>
    document.querySelector(".main-menu").classList.toggle("show")
  );

let slideIndex = 1;

let interval;

interval = setInterval(() => {
  runAutomatically(1);
}, 5000);

function showSlides(n) {
  if (interval) clearInterval(interval);
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  interval = setInterval(() => {
    runAutomatically(1);
  }, 5000);
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function runAutomatically(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

showSlides(slideIndex);

window.onscroll = function () {
  myFunction();
};

const header = document.querySelector("nav");
const sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
