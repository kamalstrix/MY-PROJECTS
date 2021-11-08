

$('.slick-one').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10000,
  centerMode:false,
  infinite:true,
  dots: false,
  arrow:true,
  prevArrow: '<div class="priv_arrow"> <i class="fas fa-chevron-left"></i></div>',
  nextArrow: '<div class="priv_arrow"> <i class="fas fa-chevron-right"></i></div>',
 
  
 
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        dots: true,
        arrow:false,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        dots: true,
        arrow:false,
      }
    }

  
  ]
});







