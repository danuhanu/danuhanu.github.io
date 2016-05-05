console.clear();

$(function() {

$('nav li a, .mobilenav li a').on('click touchstart',function(){
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


$("#button").click(function(){
    alert("Thanks for the message! Talk to you soon!");
 });
