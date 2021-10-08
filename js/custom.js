
$('.slider').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10000,
  centerMode:false,
  infinite:true,
  dots: true,
  arrow:true,
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


$('.slick-one').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10000,
  centerMode:false,
  infinite:true,
  dots: true,
  arrow:true,
  
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







/*************/

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
	 autoplay: true
});
$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  centerPadding: '0px',
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        dots: true,
        arrow:false,
        centerPadding: '0',
        centerMode: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        dots: true,
        arrow:false,
        centerMode: true,
        centerPadding: '0',
      }
    }

  
  ]
});
		
/***********/

