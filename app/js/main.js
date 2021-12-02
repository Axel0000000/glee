$(function(){

   $('.product-tabs__top-link').on('click', function(e){
      e.preventDefault();
      $('.product-tabs__top-link').removeClass('product-tabs__top-link--active');
      $(this).addClass('product-tabs__top-link--active');
      $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
      $($(this).attr('href')).addClass('product-tabs__content-item--active')
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
      fade: true
   });

   $('.product-detail__item-btn').on('click', function(evt){
      evt.preventDefault();
      $(this).addClass('product-detail__item-btn--active');
      $('.product-detail__item-buttons').addClass('product-detail__item-buttons--active');
      $('.button-cart').addClass('icon-buttons__item--active')
   });

   $('.button-cart').on('click', function(evt){
      evt.preventDefault();
      $('.product-detail__item-btn').removeClass('product-detail__item-btn--active');
      $('.product-detail__item-buttons').removeClass('product-detail__item-buttons--active')
   });

   $('.icon-buttons__item').on('click', function(evt){
      evt.preventDefault();
      $(this).toggleClass('icon-buttons__item--active')
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
    });

    $(".product-detail__star").rateYo({
      starWidth: "20px",
      normalFill: "#d6d6d6",
      ratedFill: "#ffcc00",
      readOnly: true,
      fullStar: true,
      spacing: "10px",
    });

    $('.related__slider-inner').slick({
      slidesToShow: 4,
      slidesToScroll: 1
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
