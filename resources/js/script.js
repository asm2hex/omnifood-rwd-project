$(document).ready(function() {
  // For sticky navigation
  $('.js--section-features').waypoint({
    offset: '30px',
    handler: function(direction) {
      if(direction === 'down') {
        $('nav').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
      }
    }
  });

  /* Scroll on button */
  $('.js--scroll-to-plans').click(function() {
    $('html,body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
  });

  $('.js--scroll-to-start').click(function() {
    $('html,body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
  });

    /* Smooth Scrolling */
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 500);
          return false;
        }
      }
    });
  });

//$('a').smoothScrollTop();

  /* Animation on Scroll */
  $('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated fadeIn');
  }, {
    offset: '70%'
  });
  $('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animated fadeInUp');
  }, {
    offset: '70%'
  });
  $('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animated fadeIn');
  }, {
    offset: '70%'
  });
  $('.js--wp-4').waypoint(function(direction) {
    $('.js--wp-4').addClass('animated pulse');
  }, {
    offset: '70%'
  });
  $('.js--wp-5').waypoint(function(direction) {
    $('.js--wp-5').addClass('animated fadeIn');
  }, {
    offset: '70%'
  });

/* Mobile Navigation */
  $('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');
    nav.toggleClass('showNav');
    if(icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }
  });

  /* Map */
  var map = new GMaps({
    div: '.map',
    lat: 18.4,
    lng: -76.8,
    zoom: 11
  });
  map.addMarker({
    lat: 18.4149939,
    lng: -77.0710121,
    title: 'Exchange',
    infoWindow: { content:'<p>Omnifood HQ</p>'}
  });

}); /*end document.ready*/

