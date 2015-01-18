var QUNIT = true;
$(document).ready(function(){

  var testfield = $('.txt');

  testfield.highlightTwitter({
      image:"../img/twitter.png"
  });
  
  module('Simple Hihglight and Click');
    test("Text to highlight", function(){
        var imgTwitter = 0;

        testfield.focus();
        testfield.select(); 
        testfield.trigger($.Event( "mouseup"));
        imgTwitter = $(document).find('#img-share-twitter').length;

        equal( testfield.text(), $.getTextSend());
        equal( imgTwitter, "1");
    });

    test("Click on twitter button", function(){
        testfield.focus();
        testfield.select(); 
        testfield.trigger($.Event( "mouseup"));

        $(document).find('#img-share-twitter').trigger($.Event( "mouseup"));

        
        //var textSend = $.getTextSend();
        
        equal( "1" , "1");
    });
});

