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
      fade: true
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
      spacing: "4px"
    });

    $(".product-detail__star").rateYo({
      starWidth: "20px",
      normalFill: "#d6d6d6",
      ratedFill: "#ffcc00",
      readOnly: true,
      fullStar: true,
      spacing: "10px"
    });

    $('.related__slider-inner').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: false
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
