/*
Alessandro Minoccheri
V 1.0.0
15-02-2014
*/

(function ($) {
    $.fn.extend({      
        highlightTwitter: function (argumentOptions) {
            var defaults = {
				image: "select.jpg",
			}
			var options = $.extend(defaults, argumentOptions);
			
			return this.each(function () {
                var o = options;
				var obj = $(this);

				getSelectedText = function(){
		    		if (window.getSelection) {
			            return window.getSelection().toString();
			        } else if (document.selection) {
			            return document.selection.createRange().text;
			        }
			        return '';
		    	}

				obj.mouseup(function() {
				    var text = getSelectedText();
				    if (text != '')
				    	window.location.href = "http://twitter.com/share?text=" + text + "&url=http://www.google.it'"
				});
            });
        }
    });     
})(jQuery);