var QUNIT = true;
$(document).ready(function(){

  var testfield = $('.txt');

  $('.txt').highlightTwitter({
      image:"../img/twitter.png"
  });
  
  //var pluginData = testfield.data('highlightTwitter');

  module('Simple Hihglight');
    test("Text to highlight", function(){
        var imgTwitter = 0;

        testfield.focus();
        testfield.select(); 
        testfield.trigger($.Event( "mouseup"));
        //obj.data('highlightTwitter',{defaults: defaults, textToSend{textSend : textSend })
        //console.log(pluginData.otherData.textSend);
        //console.log(pluginData);

        imgTwitter = $(document).find('#img-share-twitter').length;

        equal( imgTwitter, "1");
    });
});

