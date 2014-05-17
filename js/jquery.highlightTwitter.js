/*
Alessandro Minoccheri
V 1.0.0
15-02-2014
*/

(function ($) {
    $.fn.extend({      
        highlightTwitter: function (argumentOptions) {
            var defaults = {
				image: "img/twitter.png",
			}
			var options = $.extend(defaults, argumentOptions);
			
			return this.each(function () {
                var o = options;
				var obj = $(this);
				var textSend

				getSelectedText = function(){
		    		if (window.getSelection) {
			            return window.getSelection().toString();
			        } else if (document.selection) {
			            return document.selection.createRange().text;
			        }
			        return '';
		    	}

				obj.mouseup(function(e) {
					if($(event.target).closest('#img-share-twitter').length){
						console.log("http://twitter.com/share?text=" + textSend + "&url=" + window.location.href)
						window.location.href = "http://twitter.com/share?text=" + textSend + "&url=" + window.location.href;
					}
					else{
						var text = getSelectedText();
						if (text != ''){
							textSend = text;
							if($(event.target).closest('#img-share-twitter').length){
								window.location.href = "http://twitter.com/share?text=" + text + "&url=" + window.location.href;
							}
							else{
								var offset = obj.offset();
								mouseX = Math.min(e.pageX - offset.left - 30);
								mouseY = Math.min(e.pageY - offset.top - 58);

								$(document).find('#img-share-twitter').remove();

								var img= '<img id="img-share-twitter" src="' + o.image + '" alt="share on twitter" title="Share on Twitter" style="position:absolute; top: ' + mouseY + 'px;  left: ' + mouseX + 'px;">';
								
								if(obj.parent().css('position') == 'relative')
									obj.append(img);
								else
									obj.wrap('<div style="position:relative;"></div>').append(img);
							    
							}
						}
						else
							$(document).find('#img-share-twitter').remove();
					}
				});

				$(document).click(function(event) { 
				    if((!$(event.target).closest(obj).length) && (!$(event.target).closest('#img-share-twitter').length)){
				        $(document).find('#img-share-twitter').remove();
				    }        
				});
            });
        }
    });     
})(jQuery);