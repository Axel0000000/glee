$(function(){

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
      rating: 3.6,
      starWidth: "12px",
      normalFill: "#d6d6d6",
      ratedFill: "#ffcc00",
      readOnly: true,
      fullStar: true,
      spacing: "4px",
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