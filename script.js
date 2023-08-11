const darkmodeBtn = document.querySelector(".dark-mode-btn");
darkmodeBtn.onclick = function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    darkmodeBtn.className = "fa-solid fa-sun fa-sm";
  }else {
    darkmodeBtn.className = "fa-solid fa-moon fa-sm";
  }
}

const menuBtn = document.querySelector(".menu-btn");

menuBtn.onclick = function() {
const navList = document.querySelector(".nav-list");
menuBtn.classList.toggle("open");
navList.classList.toggle("open");
}

const nav = document.querySelector(".nav");
window.onscroll = function () { 
  if (window.scrollY >= 50 ) {
      nav.classList.add("nav-colored");
  } 
  else {
      nav.classList.remove("nav-colored");
  }
};

const selectElement = document.getElementById('gallerySelect');
const portraitGallery = document.getElementById('portrait');
const eventsGallery = document.getElementById('events');
const commercialGallery = document.getElementById('commercial');
const lifestyleGallery = document.getElementById('lifestyle');

portraitGallery.style.display = 'grid';
eventsGallery.style.display = 'none';
commercialGallery.style.display = 'none';
lifestyleGallery.style.display = 'none';

selectElement.addEventListener('change', function() {
  const selectedValue = selectElement.value;

  if (selectedValue === 'portrait') {
    portraitGallery.style.display = 'grid';
    eventsGallery.style.display = 'none';
    commercialGallery.style.display = 'none';
    lifestyleGallery.style.display = 'none';
} else if (selectedValue === 'events') {
    portraitGallery.style.display = 'none';
    eventsGallery.style.display = 'grid';
    commercialGallery.style.display = 'none';
    lifestyleGallery.style.display = 'none';
} else if (selectedValue === 'commercial') {
    portraitGallery.style.display = 'none';
    eventsGallery.style.display = 'none';
    commercialGallery.style.display = 'grid';
    lifestyleGallery.style.display = 'none';
} else if (selectedValue === 'lifestyle') {
    portraitGallery.style.display = 'none';
    eventsGallery.style.display = 'none';
    commercialGallery.style.display = 'none';
    lifestyleGallery.style.display = 'grid';
}
});