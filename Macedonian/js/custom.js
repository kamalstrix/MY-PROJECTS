$('.slick-two').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10000,
  centerMode:false,
  infinite:true,
  dots: true,
  arrow:true,
  prevArrow: '<div class="priv_arrow"> <i class="fas fa-chevron-left"></i></div>',
  nextArrow: '<div class="Next_arrow"> <i class="fas fa-chevron-right"></i></div>',
 
  
 
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        dots: false,
        arrow:false,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        dots: false,
        arrow:false,
      }
    }

  
  ]
});







