$(function () {
  $('.hamburger').click(function () {
    $('.bar1, .bar2, .bar3').toggleClass('open');
    $('.menuSP').slideToggle(400);
  });
});