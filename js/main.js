$(document).ready(function() {
    $('#countdown').countdown('2023/07/21', function(event) {
        $('#days').text(event.strftime('%D'));
        $('#hours').text(event.strftime('%H'));
        $('#minutes').text(event.strftime('%M'));
        $('#seconds').text(event.strftime('%S'));
    });
});

//

//header-setting

$(document).ready(function () {
  $('.setting').click(function (e) { 
    e.stopPropagation();
    $('.site-menu-setting').slideToggle();
  });

  $('.site-menu-setting form').click(function (e) { 
    e.stopPropagation();
  });
});

//login

$(document).ready(function () {
  $('#site-login-click').click(function(e) {
    e.preventDefault();
    $('.main-login').show();
    $('.overlay').show();
    $('html, body').scrollTop(0);
    $('body').css('overflow', 'hidden');
  });
  $('#close').click(function() {
    $('.main-login').hide();
    $('.overlay').hide();
    $('body').css('overflow', 'auto');
  });
});

//register

$(document).ready(function () {
  $('.site-register').click(function(e) {
    e.preventDefault();
    $('.main-login').hide();
    $('.main-register').show();
    $('.overlay').show();
    $('html, body').scrollTop(0);
    $('body').css('overflow', 'hidden');
  });
  $('#close-2').click(function() {
    $('.main-register').hide();
    $('.overlay').hide();
    $('body').css('overflow', 'auto');
  });
});

//login trở về
$(document).ready(function () {
  $('.site-login').click(function(e) {
    e.preventDefault();
    $('.main-login').show();
    $('.main-register').hide();
    $('.overlay').show();
    $('html, body').scrollTop(0);
    $('body').css('overflow', 'hidden');
  });
  $('#close').click(function() {
    $('.main-login').hide();
    $('.overlay').hide();
    $('body').css('overflow', 'auto');
  });
});

//tìm kiếm

$(document).ready(function () {
  $('.site-search-categories').hide();
  $('#site-search-click').click(function(e) {
    e.preventDefault();
    $('.site-search-categories').show();
    $('.overlay').show();
    $('html, body').scrollTop(0);
    $('body').css('overflow', 'hidden');
  });
  $('#search-close').click(function() {
    $('.site-search-categories').hide();
    $('.overlay').hide();
    $('body').css('overflow', 'auto');
  });
});


//giỏ hàng
$(document).ready(function () {
  $('.shop-buy').hide();
  $('#site-user-buy').click(function (e) { 
    e.preventDefault();
    $('.shop-buy').slideToggle();
  });
});