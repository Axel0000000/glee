$(function(){

   $('.product-list__item-btn').on('click', function(){
      $('.product-list__item-btn').addClass('product-list__item-btn--active')
   });

   $('.product-list__item-btn').on('click', function(){
      $('.product-list__item-buttons').addClass('product-list__item-buttons--active')
   });
   $('.button-cart').on('click', function(){
      $('.product-list__item-btn').removeClass('product-list__item-btn--active'),
      $('.product-list__item-buttons').removeClass('product-list__item-buttons--active')
   });

   $('.intro-slider__inner').slick({
      dots: true,
      arrows: false,
      fade: true,
      autoplay: true
   });

   $(".filter-price__input").ionRangeSlider({
      type: 'double',
      prefix: '$',
      
      onStart: function (data) {
         $('.filter-price__from').text(data.from);
         $('.filter-price__to').text(data.to);
      },
      onChange: function (data) {
         $('.filter-price__from').text(data.from);
         $('.filter-price__to').text(data.to);
     },

   });

   $(".star").rateYo({
      starWidth: "12px",
      normalFill: "#d6d6d6",
      ratedFill: "#ffcc00",
      readOnly: true,
      fullStar: true,
      spacing: "4px",
    });

    $(".product-list__star").rateYo({
      starWidth: "20px",
      normalFill: "#d6d6d6",
      ratedFill: "#ffcc00",
      readOnly: true,
      fullStar: true,
      spacing: "10px",
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