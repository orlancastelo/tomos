//FOR NAVIGATION
const sideMenu = document.getElementById('sideMenu');

function openMenu() {
  sideMenu.style.right = "0";
}

function closeMenu() {
  sideMenu.style.right = "-200px";
}

$(window).scroll(function() {
  if($(window).scrollTop()) {
    $(".container").addClass("black");
    $("nav ul li a").addClass("white");
    $("nav ul li a.white::after").addClass("white");
  }
  else {
    $(".container").removeClass("black");
    $("nav ul li a").removeClass("white");
  }

  if ($(this).scrollTop() > 800) {
    $("#go-up").fadeIn(400);
  } else {
    $('#go-up').fadeOut(400);
  }    
});

//FOR LOGO
$('#logo').click(function(){
  window.location = 'http://127.0.0.1:5500/index.html';
});


$(document).ready(function(){

  //HERO BANNER CAROUSEL
  $("#hero .owl-carousel").owlCarousel({
      loop:true,
      nav:true,
      dots:false,
      autoplay:true,
      autoplayTimeout:3000,
      smartSpeed:3000,
      autoplayHoverPause:true,
      navText : ["<i class='fa fa-circle-arrow-left'></i>","<i class='fa fa-circle-arrow-right'></i>"],
      lazyLoad:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          768:{
              items:1
          },
          1024:{
              items:1
          },
      }
  });

  $(".location .owl-carousel").owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    smartSpeed:3000,
    autoplayHoverPause:true,
    navText : ["<i class='fa fa-circle-arrow-left'></i>","<i class='fa fa-circle-arrow-right'></i>"],
    lazyLoad:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        820:{
            items:2
        },
        1024:{
            items:1
        },
    }
});
});

//REVEAL ANIMATION
window.addEventListener('scroll', reveal);
function reveal() {
  let reveals = document.querySelectorAll('.reveal');
  for(let i = 0; i < reveals.length; i++){
    const windowheight = window.innerHeight;
    const revealtop = reveals[i].getBoundingClientRect().top;
    const revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}

//SCROLL TO DIV
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior : "smooth"
    });
  });
});

//MENU IMAGE VIEW FUNCTION
let modal = document.getElementById("imgModal");

let img = document.getElementById("menu1");
let img2 = document.getElementById("menu2");
let img3 = document.getElementById("menu3");
let img4 = document.getElementById("menu4");
let img5 = document.getElementById("menu5");
let img6 = document.getElementById("menu6");
let img7 = document.getElementById("menu7");
let img8 = document.getElementById("menu8");
let modalImg = document.getElementById("menu-1");
let modalImg2 = document.getElementById("menu-2");
let modalImg3 = document.getElementById("menu-3");
let modalImg4 = document.getElementById("menu-4");
let modalImg5 = document.getElementById("menu-5");
let modalImg6 = document.getElementById("menu-6");
let modalImg7 = document.getElementById("menu-7");
let modalImg8 = document.getElementById("menu-8");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img4.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img5.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img6.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}


img7.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img8.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

let span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

//CALENDAR
let dateToday = new Date();
  $( function() {
    $( "#datepicker" ).datepicker({
      minDate: dateToday
  });
} );