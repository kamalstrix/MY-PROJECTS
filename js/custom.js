
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






var $st = $('.pagination');
var $slickEl = $('.rotation-slider');

$slickEl.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  var i = (currentSlide ? currentSlide : 0) + 1;
  $st.text(i + ' of ' + slick.slideCount);
});

$slickEl.slick({
  centerMode: true,
  centerPadding: '200px',
  slidesToShow: 1,
  focusOnSelect: true,
  dots: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
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
 
});
		
/***********/

