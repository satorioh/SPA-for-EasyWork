// Gallery slider
$('.carousel-slider-content').each(function() {
  $(this).slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          draggable: true
        }
      },
      {
        breakpoint: 400,
        settings: {
          arrows: true,
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
}).on('afterChange', function() {
  $(window).trigger('resize.px.parallax');
});

$(window).resize(function() {
  setTimeout(function() {
    $(window).trigger('resize.px.parallax');
  }, 100);
});