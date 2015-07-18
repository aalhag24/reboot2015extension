console.log('START injectiontest.js');


(function ($){
  console.log('START injectiontest.js: self initializing function');

  console.log('$ is');
  console.log($);

  document.onmouseup = function(){
    console.log('test document.onmouseup');

    console.log('window.getSelection.toString()');
    console.log(window.getSelection().toString());

    //!!TODO WHEN THIS AJAX IS UNCOMMENTED, IT BREAKS THE ABOVE document.onmouseup = function() { //stuff }
    //!!TODO WHEN THIS AJAX IS UNCOMMENTED, IT BREAKS THE ABOVE document.onmouseup = function() { //stuff }
    //!!TODO WHEN THIS AJAX IS UNCOMMENTED, IT BREAKS THE ABOVE document.onmouseup = function() { //stuff }

    // $.ajax({
    //   url: 'freedom-hack-app.herokuapp.com'
    //   type: 'post',
    //   content: {
    //     text: ''
    //   }
    // }).done(function (body){
    //   console.log('ajax done');
    // }).fail(function (body){
    //   console.log('ajax fail');
    // }).always(function (body){
    //   console.log('ajax always');
    // });



  };

})(jQuery);