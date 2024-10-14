(function ($) {
  "use strict";
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var box = $(".header-text").height();
    var header = $("header").height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });

  $(".owl-banner").owlCarousel({
    center: true,
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    margin: 30,
    responsive: {
      992: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  });

  var width = $(window).width();
  $(window).resize(function () {
    if (width > 767 && $(window).width() < 767) {
      location.reload();
    } else if (width < 767 && $(window).width() > 767) {
      location.reload();
    }
  });

  // Menu Dropdown Toggle
  if ($(".menu-trigger").length) {
    $(".menu-trigger").on("click", function () {
      $(this).toggleClass("active");
      $(".header-area .nav").slideToggle(200);
    });
  }

  // Menu elevator animation
  $(".scroll-to-section a[href*=\\#]:not([href=\\#])").on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        var width = $(window).width();
        if (width < 991) {
          $(".menu-trigger").removeClass("active");
          $(".header-area .nav").slideUp(200);
        }
        $("html,body").animate(
          {
            scrollTop: target.offset().top - 80,
          },
          700
        );
        return false;
      }
    }
  });

  // Page loading animation
  $(window).on("load", function () {
    if ($(".cover").length) {
      $(".cover").parallax({
        imageSrc: $(".cover").data("image"),
        zIndex: "1",
      });
    }

    $("#preloader").animate(
      {
        opacity: "0",
      },
      600,
      function () {
        setTimeout(function () {
          $("#preloader").css("visibility", "hidden").fadeOut();
        }, 300);
      }
    );
  });
})(window.jQuery);
$(document).ready(function () {
  $("#testimonial-slider").owlCarousel({
    items: 1,
    itemsDesktop: [1000, 1],
    itemsDesktopSmall: [979, 1],
    itemsTablet: [768, 1],
    pagination: true,
    transitionStyle: "backSlide",
    autoPlay: true,
  });
  $("#owl-demo").owlCarousel({
    navigation: false, // Show next and prev buttons

    slideSpeed: 300,
    paginationSpeed: 400,

    items: 1,
    itemsDesktop: false,
    itemsDesktopSmall: false,
    itemsTablet: false,
    itemsMobile: false,
  });
  $("#owl-demo1").owlCarousel({
    navigation: false, // Show next and prev buttons

    slideSpeed: 300,
    paginationSpeed: 400,

    items: 1,
    itemsDesktop: false,
    itemsDesktopSmall: false,
    itemsTablet: false,
    itemsMobile: false,
  });
  $("#owl-demo2").owlCarousel({
    navigation: false, // Show next and prev buttons

    slideSpeed: 300,
    paginationSpeed: 400,

    items: 1,
    itemsDesktop: false,
    itemsDesktopSmall: false,
    itemsTablet: false,
    itemsMobile: false,
  });
  $("#exampleModal").on("hidden.bs.modal", function () {
    $(window).trigger("resize");
  });
  $("#exampleModal").on("show", function () {
    //$(window).trigger("resize");
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.height = "100vh";
    document.body.style.height = "100vh";
    document.querySelector(".modal").style.display = "block";
  });
  $("#exampleModal").on("hidden.bs.modal", function () {
    document.body.classList.remove("modal-open");
    document.querySelector(".modal").style.display = "none";
    $("body").css({
      "padding-right": "0",
      overflow: "auto",
    });
  });

  /*$(".cta-button").on("click", function () {
    document.documentElement.style.height = "100vh";
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    document.querySelector(".modal").style.display = "block";

    // Remove hidden attribute before setting display to block
    $(".modal").removeClass("hidden").css("display", "block");
  });*/

  $(".modal-close").on("click", function () {
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
    document.documentElement.style.height = "auto";
    document.body.style.height = "auto";
    document.querySelector(".modal").style.display = "none";
  });
});
