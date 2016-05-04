console.clear();

$(function() {

$('nav li a, .mobilenav li a').click(function(){
  var headerHeight = $('header').height();

  var a = $(this).attr('href')

  var targetDistance = $(a).offset().top

  console.log(targetDistance);


  $('html, body').animate({
    scrollTop: targetDistance - headerHeight
  }, 1000);


  });

  $('.slider').slick();


});
