import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel';

$(function() {
  let header = $("#header"),
      introHeight = $("#intro").innerHeight(),
      scrollOffset = $(window).scrollTop();

  /* Fixed Header */

  checkScroll(scrollOffset);
  
  $(window).on("scroll", function() {
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);


  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= introHeight) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  /* Smoothed Scrool */

  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let $this = $(this),
        elementId = $this.data('scroll'),
        elementOffset = $(elementId).offset().top;
    
    $('#nav a').removeClass('active');
    $this.addClass('active');

    $("html, body").animate({
      scrollTop: elementOffset
    }, 500)

    $('#nav').removeClass('active'); 
  })

  /* Menu Nav Toggle */

  $("#nav-toggle").on("click", function(event) {
    event.preventDefault();
    
    $(this).toggleClass("active"); 
    $("#nav").toggleClass("active"); 

    $(window).on("scroll", function() {
      $('#nav').removeClass('active');
      $("#nav-toggle").removeClass("active");
    });
  })

  /* Collapse */

  $("[data-collapse]").on("click", function(event) {
    event.preventDefault()

    let $this = $(this),
        elementId = $this.data('collapse');
    $this.toggleClass("active");

  })

  /* Slider */
  $("[data-slider]").slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1
  })



});

