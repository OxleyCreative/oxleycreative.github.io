$(document).on('ready', function() {
//  $('.workHeader').on('click', function() {
//    if ($(this).parent().hasClass('expanded')) {
//      $(this).parent().removeClass('expanded');
//      $(this).parent().find($('.workContent')).slideUp(3000);
//    } else {
//      $('.workBlock').removeClass('expanded');
//      $('.workContent').slideUp(3000);
//      $(this).parent().addClass('expanded');
//      $(this).parent().find($('.workContent')).slideDown(3000);
//    }
//  });
  $('.workImg a').on('click', function(event) {
    event.preventDefault();
    var imgPath = $(this).attr('href');
    var imgCaption = $(this).attr('alt');
    $('.overlay').css('background-image','url(' + imgPath + ')');
    $('.caption').html(imgCaption);    
    $('.overlay').addClass('show');
  });
  $('.close').on('click', function() {
    $('.overlay').removeClass('show');
  });
});