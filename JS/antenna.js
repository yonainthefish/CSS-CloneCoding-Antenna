AOS.init();

// function fullResize(){
//   if ($(window).width() <= 1200) {
//      fullPageCreated = false;
//     control02 = true;
//      if(!resizeControl){
//       $.fn.fullpage.destroy('all');
//       resizeControl = true;
//       $(".section").removeClass("on");
//      }
//      $(window).scroll(function(){
//       var windowH = $(this).height();
//       var percentage = windowH * 60 / 100;
//       var windowS = $(this).scrollTop() + 750
//       $("#fullpage .section").each(function(){
//         var thisTop = $(this).offset().top;						
//         if (thisTop < windowS) {
//           $(this).addClass("on bg");
//         }
//       });
//     })
    
//   }else {
//     createFullpage();
//     resizeControl = false;
//     mNav.hide();
//     if ($(window).width() >= 1200 && control02){
//       control02 = false;
//       $.fn.fullpage.moveTo('page01', 0);	
//     }
//   }
// }






// <----------------상단 메뉴 이동----------------->
// $(function(){
//   $('#fullpage').fullpage({
//   //options here
//   anchors:['section2', 'section3', 'section4' , 'section5' , 'section6' ],
//   autoScrolling:true,
//   scrollHorizontally: true,
//   navigation:true,
//   navigationPosition:'right',
// });
// })

// 전체화면 세로 슬라이드

var swiper1 = undefined;
var swiperOption = {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
};
   

function slideMake() {
    
    var winWidth = $(window).width();
    console.log(winWidth);

    if (winWidth <= 768 && swiper1 !== undefined) {
        swiper1.destroy();
        swiper1 = undefined;
    }
    else if (winWidth > 768 && swiper1 === undefined) {
        swiper1 = new Swiper(".mySwiper", swiperOption);
    }
}

slideMake();

$(window).resize(function () {
    slideMake();
});
// <------------메인비주얼 슬라이드--------->

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".mySwiper2 .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".mySwiper2 .swiper-button-next",
    prevEl: ".mySwiper2 .swiper-button-prev",
  },
});

// <------------아티스트 슬라이드---------------->
var swiper = new Swiper(".mySwiper3", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    
    slideShadows: true,
  },
  pagination: {
    el: ".mySwiper3 .swiper-pagination",
  },
});

// <-------------------앨범 소개 ------------------->
var swiper = new Swiper('.mySwiper4', {
  slidesPerView: 3,
  loop: true,
  // direction: getDirection(),
  navigation: {
    nextEl: '.mySwiper4 .swiper-button-next',
    prevEl: '.mySwiper4 .swiper-button-prev',
  },
  // on: {
  //   resize: function () {
  //     '.mySwiper4'.changeDirection(getDirection());
  //   },
  // },
  breakpoints: {
    786:{
      slidesPerView: 3,
    },
    968:{
      slidesPerView: 3,
    },
    1024:{
      slidesPerView: 4,
    },
    1224: {
      slidesPerView: 5,
    },
  },
});



// function getDirection() {
//   var windowWidth = window.innerWidth;
//   var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

//   return direction;
// }

// <--------------------영상----------------->
var swiper = new Swiper(".mySwiper6", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    500:{
      slidesPerView: 3,
    },
    768:{
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1224: {
      slidesPerView: 5,
    },
  },
});
var swiper2 = new Swiper(".mySwiper5", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ":nth-child(5).section .swiper-button-next",
    prevEl: ":nth-child(5).section .swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});


// <-------------------모바일 메뉴---------------->

const toggleBtn = document.querySelector(".toggle_hamburger");
const menu = document.querySelector(".menulist");
const icon = document.querySelector(".top_right");

toggleBtn.addEventListener('click' , ()=>{
  menu.classList.toggle('active');
  icon.classList.toggle('active');

});
