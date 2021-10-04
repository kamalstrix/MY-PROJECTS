
$('.slider').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10000,
  centerMode:false,
  infinite:true,
  dots: false,
  arrow:true,
  
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        centerPadding: '0'
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
      }
    }

  
  ]
});


$('.slick-one').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10000,
  centerMode:false,
  infinite:true,
  dots: false,
  arrow:true,
  
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        centerPadding: '0'
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      }
    }

  
  ]
});




