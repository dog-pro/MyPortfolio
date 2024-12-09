
$(function(){
  $('.p-mainScroll').addClass('active');
  var targets = [".mv-container",".works", ".skill",".about",".contact"];
    var flags = [true, true, true, true, true];

  $(window).on('load scroll', function() {
    var scroll = $(window).scrollTop();
    var height = $(window).height();
    var minusPadding = scroll + height - 96;

    targets.forEach(function(target, index) {
      var targetPosition = $(target).offset().top;
      if (minusPadding > targetPosition && flags[index]) {

				$(target).addClass('active');
        flags[index] = false;
      }
    });
  });
});