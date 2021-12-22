$(function(){

   $('.product__filters-btn').on('click', function(){
      $('.product__filters').toggleClass('product__filters--active');
   });
   $('.product-list__filters-btn').on('click', function(){
      $('.product-list__filters').toggleClass('product-list__filters--active');
   });

   $('.footer-top__title-account').on('click', function(){
      $(this).toggleClass('footer-top__title--active');
      $(this).next().slideToggle();
   });
   $('.footer-top__title-services').on('click', function(){
      $(this).toggleClass('footer-top__title--active');
      $(this).next().slideToggle();
   });

   $('.header__burger-btn').on('click', function(){
      $('.menu').toggleClass('menu--active');
   });

   $('.product-tabs__top-link').on('click', function(e){
      e.preventDefault();
      $('.product-tabs__top-link').removeClass('product-tabs__top-link--active');
      $(this).addClass('product-tabs__top-link--active');
      $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
      $($(this).attr('href')).addClass('product-tabs__content-item--active');
   });

   $('.product-slide__vertical').slick({
      asNavFor: '.product-slide__big',
      focusOnSelect: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false, 
      vertical: true,
      draggable: false  
   });
   $('.product-slide__big').slick({
      asNavFor: '.product-slide__vertical',
      arrows: false,
      draggable: false,
      fade: true,
      responsive: [
         {
            breakpoint: 831,
            settings: {
               draggable: true
            }
         }
      ]
   });

   $('.product-detail__item-btn').on('click', function(evt){
      evt.preventDefault();
      $(this).addClass('product-detail__item-btn--active');
      $(this).next().addClass('product-detail__item-buttons--active');
   });

   $('.icon-buttons__cart').on('click', function(evt){
      evt.preventDefault();
      $(this).toggleClass('icon-buttons__cart--active');
   });

   $('.icon-buttons__like').on('click', function(evt){
      evt.preventDefault();
      $(this).toggleClass('icon-buttons__like--active');
   });

   $('.product-detail__input').styler();


   $('.intro-slider__inner').slick({
      dots: true,
      arrows: false,
      fade: true,
      autoplay: true
   });

   $(".filter-price__input").ionRangeSlider({
      type: 'double',
      onStart: function (data) {
         $('.filter-price__from').text(data.from);
         $('.filter-price__to').text(data.to);
      },
      onChange: function (data) {
         $('.filter-price__from').text(data.from);
         $('.filter-price__to').text(data.to);
     }
   });

   $(".star").rateYo({
      starWidth: "12px",
      normalFill: "#d6d6d6",
      ratedFill: "#ffcc00",
      readOnly: true,
      fullStar: true,
      spacing: "4px",
      starSvg:'<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="18px" viewBox="0 0 20 18" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill-opacity:1;" d="M 9.003906 0.625 L 6.734375 5.28125 L 1.664062 6.03125 C 0.753906 6.164062 0.390625 7.296875 1.046875 7.949219 L 4.71875 11.570312 L 3.851562 16.683594 C 3.695312 17.609375 4.65625 18.300781 5.460938 17.871094 L 10 15.453125 L 14.539062 17.871094 C 15.34375 18.296875 16.304688 17.609375 16.148438 16.683594 L 15.28125 11.570312 L 18.953125 7.949219 C 19.609375 7.296875 19.246094 6.164062 18.335938 6.03125 L 13.265625 5.28125 L 10.996094 0.625 C 10.589844 -0.203125 9.414062 -0.214844 9.003906 0.625 Z M 9.003906 0.625 "/></g></svg>',
    });

    $(".product-detail__star").rateYo({
      starWidth: "20px",
      normalFill: "#d6d6d6",
      ratedFill: "#ffcc00",
      readOnly: true,
      fullStar: true,
      spacing: "10px",
      starSvg:'<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="18px" viewBox="0 0 20 18" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill-opacity:1;" d="M 9.003906 0.625 L 6.734375 5.28125 L 1.664062 6.03125 C 0.753906 6.164062 0.390625 7.296875 1.046875 7.949219 L 4.71875 11.570312 L 3.851562 16.683594 C 3.695312 17.609375 4.65625 18.300781 5.460938 17.871094 L 10 15.453125 L 14.539062 17.871094 C 15.34375 18.296875 16.304688 17.609375 16.148438 16.683594 L 15.28125 11.570312 L 18.953125 7.949219 C 19.609375 7.296875 19.246094 6.164062 18.335938 6.03125 L 13.265625 5.28125 L 10.996094 0.625 C 10.589844 -0.203125 9.414062 -0.214844 9.003906 0.625 Z M 9.003906 0.625 "/></g></svg>',
    });

    $('.related__slider-inner').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: false,
      responsive: [
         {
            breakpoint: 1201,
            settings: {
               slidesToShow: 3
            }
         },
         {
            breakpoint: 921,
            settings: {
               slidesToShow: 2
            }
         },
         {
            breakpoint: 621,
            settings: {
               slidesToShow: 1
            }
         },
      ]
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
