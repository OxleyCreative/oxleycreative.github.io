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
var closedModalHashStateId = "#modalClosed";
var openModalHashStateId = "#modalOpen";
window.location.hash = closedModalHashStateId;

  $('.workImg a').on('click', function(event) {
    event.preventDefault();
    var imgPath = $(this).attr('href');
    var imgCaption = $(this).attr('alt');
    $('.overlay').css('background-image','url(' + imgPath + ')');
    $('.caption').html(imgCaption + ' ( <a href="' + imgPath + '">Full Size</a> )');    
    $('.overlay').addClass('show');
	window.location.hash = openModalHashStateId;
  });
  $('.close').on('click', function() {
    $('.overlay').removeClass('show');
	window.history.back();
  });
  window.onhashchange = function () { if(window.location.hash != "#modalOpen") { $('.overlay').removeClass('show'); } }
});