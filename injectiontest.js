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

    reqwest({
      url: 'http://127.0.0.1:3003/endpoint',
      method: 'post',
      data: {"text": window.getSelection().toString()},
      success: function(resp){
        console.log(resp);
      }
    })


  };

})(jQuery);