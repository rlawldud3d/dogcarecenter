// main .js

$(function(){

  $('header nav > ul > li').hover(
    function(){
      $(this)
        .find('.depth2')
        .stop()
        .show();
    },
    function(){
      $(this)
        .find('.depth2')
        .stop()
        .hide();
    }
  );

});