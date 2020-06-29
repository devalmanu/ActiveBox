$(document).ready(function () {
   // fixed header
   let header = $("#header");
   let offer = $("#offer");
   let offerH = offer.innerHeight();
   // scroll 
   let scrollPos = $(window).scrollTop();
   checkScroll(scrollPos, offerH);
   // nav burger
   let nav = $("#nav");
   let navToggle = $("#navToggle");

   $(window).on("scroll resize", function () {
      offerH = offer.innerHeight();
      scrollPos = $(this).scrollTop();
      checkScroll(scrollPos, offerH);

   });

   function checkScroll(scrollPos, offerH) {
      if (scrollPos > offerH - 55) {
         header.addClass("fixed");
      } else {
         header.removeClass("fixed");
      }
   }

   // smooth scroll
   $("[data-scroll]").on("click", function (event) {
      event.preventDefault();

      let elementId = $(this).data('scroll');
      let elementOffset = $(elementId).offset().top;

      nav.removeClass("show");

      $("html:not(:animated),body:not(:animated)").animate({ scrollTop: elementOffset - 30 }, 800);
      return false;
   });

   // nav toggle

   navToggle.on("click", function (event) {
      event.preventDefault();
      nav.toggleClass("show");
   });

   // reviews: https://kenwheeler.github.io/slick/
   let slider = $("#reviewsSlider");
   slider.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: false,
      dots: true
   });

});