'use strict';

//img preload
$(window).on('load', function() {
  $('img.preload').imgpreload({
    all: function () {
      $('img.preload').addClass('loaded');
    }
  });
});
//smooth scrool function
var smoothScrollTo = function(anchor) {
  var offsetTop	= '';
  var elemHeight	= parseInt($('#navigation-affix').height() - 1, 0);

  if (window.Response.band(768)) {
    offsetTop = parseInt($(anchor).offset().top - elemHeight, 0);
  } else {
    offsetTop = parseInt($(anchor).offset().top, 0);
  }

  $('html, body').stop().animate({
    scrollTop: offsetTop
  }, 1500,'easeInOutExpo');
};

$('a.smooth-scroll').on('click', function(event) {
  var $anchor	= $(this);
  smoothScrollTo($anchor.attr('href'));
  event.preventDefault();
});

//navigation-affix show/hidden
$('#header').waypoint(function() {
  $('#navigation-affix').toggleClass('show');
}, {
  offset: -85
});

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

//manually refresh the parallax effect
$(window).resize(function() {
  setTimeout(function() {
    $(window).trigger('resize.px.parallax');
  }, 100);
});

//panel title click and icon change
$('.panel-title').on('click', function () {
  var $icon = $(this).children('i');
  if ($(this).attr("aria-expanded") === "true") {
    $icon.attr("class","fa fa-plus");
  } else {
    $icon.attr("class","fa fa-minus");
    setTimeout(function () {
      $(window).trigger('resize').trigger('scroll');
    },500);
  }
});

//use waypoints.js to active animation when scroll to element
$('.animation').each(function() {
  var $element = $(this);
  $element.waypoint(function() {
    var delay = 0;
    if ($element.attr('data-delay')) delay = parseInt($element.attr('data-delay'), 0);
    if (!$element.hasClass('animated')) {
      setTimeout(function() {
        $element.addClass('animated ' + $element.attr('data-animation'));
      }, delay);
    }
    delay = 0;
  }, {
    offset: '90%'
  });
});