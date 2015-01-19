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
        var check = false;
        var textSend = '';

        testfield.focus();
        testfield.select(); 
        testfield.trigger($.Event( "mouseup"));

        $(document).find('#img-share-twitter').trigger($.Event( "mouseup"));

        textSend = $.getTextSend();
            
        if(textSend.length < 140){
          check = true;
        }

        ok(check , true);
    });
});

