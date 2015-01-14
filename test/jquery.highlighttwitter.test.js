var QUNIT = true;
$(document).ready(function(){
  var testfield = $('.txt')

  module('Simple Hihglight');
    test("Text to highlight", function(){
      testfield.focus();
      testfield.selectionStart = 10;
      testfield.selectionEnd = 100;
    });
});