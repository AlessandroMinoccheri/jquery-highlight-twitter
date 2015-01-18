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

        $(document).find('#img-share-twitter').trigger('click');

        console.log($(document).find('#img-share-twitter').length);//trigger('click')
        //console.log($.getTextSend());
        console.log($.getN());
        equal( "1" , "1");
    });
});

