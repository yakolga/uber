window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu"),
    menuItem = document.querySelectorAll(".menu_item"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("menu_active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("menu_active");
    });
  });
});

(function($) {
$(function() {
  $('.subheader_btn').on('click', function() {
  $('.overlay, #phone').fadeIn('slow');
});
$('.modal__close').on('click', function() {
  $('.overlay, #phone').fadeOut('slow');
});
});
})(jQuery);

(function($) {
$(function() {
  $('.promo_btn').on('click', function() {
  $('.overlay, #application').fadeIn('slow');
});
$('.modal__close').on('click', function() {
  $('.overlay, #application').fadeOut('slow');
});
});
})(jQuery);

(function($) {
$(function() {
  $('.mobile_item_plus, .world_city').on('click', function() {
  $('.overlay, #demo').fadeIn('slow');
});
$('.modal__close').on('click', function() {
  $('.overlay, #demo').fadeOut('slow');
});
});
})(jQuery);

$(function(){
  $("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });
});