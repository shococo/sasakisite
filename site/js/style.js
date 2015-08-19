// JavaScript DocumentjQuery(function($) {
  
jQuery(function($) {
  
var nav    = $('#mainNav'),
    offset = nav.offset();
  
$(window).scroll(function () {
  if($(window).scrollTop() > offset.top) {
    nav.addClass('fixed');
  } else {
    nav.removeClass('fixed');
  }
});
  
});


$(function($) {
	var tab = $('#sns_bt'),
    offset = tab.offset();

$(window).scroll(function () {
  if($(window).scrollTop() > offset.top) {
    tab.addClass('fixed');
  } else {
    tab.removeClass('fixed');
  }
});
});