$(document).ready(function () {
  $("header nav ul li:first-child").addClass("active");
  $("header nav ul li").click(function () {
    //alert();
    $("header nav ul li").removeClass("active");
    $(this).addClass("active");
  });

  $("#navigation nav").slimNav_sk78();
  $("#nav-icon0").click(function () {
    $(this).toggleClass("open");
  });

  $(".partner-cara.owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var headerHeight = $("body>header").outerHeight();

    //>=, not <=
    if (scroll >= headerHeight) {
      //clearHeader, not clearheader - caps H
      $("body").addClass("active");
    } else {
      $("body").removeClass("active");
    }
  }); //missing );

  var owl = $(".tab-cara.owl-carousel");
  owl.owlCarousel({
    items: 1,
    loop: false,
    autoplay: false,
    nav: false,
    dots: true,
    // dotsContainer: '#custom-owl-dots',
    animateIn: "fadeIn", // add this
    animateOut: "fadeOut", // and this
    //   navText: [
    //     '<img src="images/prev.svg" alt="">',
    //     '<img src="images/next.svg" alt="">'
    // ],

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },

      1000: {
        items: 1,
      },
    },
  });
});

//! Calculate header height and apply it to scroll-margin-top of elements with class "content-inner"
// Calculate header height and apply it to scroll-margin-top of elements with class "content-inner"
document.addEventListener("DOMContentLoaded", function () {
  // Wait for the header to be fully loaded
  window.addEventListener("load", function () {
    const headerHeight = document.querySelector("header").offsetHeight;
    const contentInnerElements = document.querySelectorAll(".content-inner");

    contentInnerElements.forEach(function (element) {
      element.style.setProperty("scroll-margin-top", headerHeight + "px");
    });
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   var sections = document.querySelectorAll('div[id^=""]');

//   window.addEventListener("scroll", function () {
//     var current = "";

//     sections.forEach(function (section) {
//       var sectionTop = section.offsetTop;
//       var sectionHeight = section.clientHeight;
//       if (pageYOffset >= sectionTop - sectionHeight / 3) {
//         current = section.getAttribute("id");
//       }
//     });

//     var menuItems = document.querySelectorAll("ul li");
//     menuItems.forEach(function (menuItem) {
//       menuItem.classList.remove("active");
//       var link = menuItem.querySelector("a");
//       if (link && link.getAttribute("href").slice(1) === current) {
//         menuItem.classList.add("active");
//       }
//     });
//   });
// });
