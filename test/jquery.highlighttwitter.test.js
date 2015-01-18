var QUNIT = true;
$(document).ready(function(){

  var testfield = $('.txt');

  testfield.highlightTwitter({
      image:"../img/twitter.png"
  });
  
  module('Simple Hihglight');
    test("Text to highlight", function(){
        var imgTwitter = 0;

        testfield.focus();
        testfield.select(); 
        testfield.trigger($.Event( "mouseup"));
        imgTwitter = $(document).find('#img-share-twitter').length;

        equal( testfield.text(), $.getTextSend());
        equal( imgTwitter, "1");
    });
});

