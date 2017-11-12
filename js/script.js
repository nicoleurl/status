var main = function() {
  $('.but').click(function() {
    var post = $('.status-box').val();
    $('<li>').text(post).prependTo('.posts');
    $('.status-box').val('');
    $('.counter').text('140');
    $('.but').addClass('disabled'); 
  });
  
  $('.status-box').keyup(function() {
    var postLength = $(this).val().length;
    var charactersLeft = 140 - postLength;
    $('.counter').text(charactersLeft);
  
    if(charactersLeft < 0) {
      $('.but').addClass('disabled'); 
    }
    else if(charactersLeft == 140) {
      $('.but').addClass('disabled');
    }
    else {
      $('.but').removeClass('disabled');
    }
  });
  
  $('.but').addClass('disabled');
}

$(document).ready(main);