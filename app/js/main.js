$(function(){

   $('.intro-slider__inner').slick({
      dots: true,
      arrows: false,
      fade: true,
      autoplay: true
   });

   $('.insights__slider').slick({
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 2,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 2000
   });

   var containerEl1 = document.querySelector('[data-ref="container-1"]');
   var containerEl2 = document.querySelector('[data-ref="container-2"]');
  
   var config = {
     controls: {
       scope: 'local'
     }
   };
  
   var mixer1 = mixitup(containerEl1, config);
   var mixer2 = mixitup(containerEl2, config);

});