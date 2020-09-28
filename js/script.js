$(document).ready(function () {
  $(".header-burger,.menu").click(function (event) {
    $(".header-burger,.header-burger_menu").toggleClass("active");
    $(".body").toggleClass("lock");
    $(".header__nav").toggleClass("active");
    $(".scroll").toggleClass("active");
    $(".header-slider__inner_item").toggleClass("active");
  });

  $('a[href^="#"]').click(function () {
    let anchor = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(anchor).offset().top,
      },
      1500
    );
  });
});
