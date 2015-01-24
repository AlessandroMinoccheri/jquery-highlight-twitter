/*
Alessandro Minoccheri
V 1.0.0
20-01-2015
*/

(function ($) {
	var textSendGlobal = 'START';

    $.fn.extend({      
        highlightTwitter: function (argumentOptions) {
            var defaults = {
				image: 'img/twitter.png',
			};

			var options = $.extend(defaults, argumentOptions);
			
			return this.each(function () {
                var o = options;
				var obj = $(this);
				var textSend = '';
				var textCut = '';

				getSelectedText = function(){
		    		if (window.getSelection) {
			            return window.getSelection().toString();
			        } else if (document.selection) {
			            return document.selection.createRange().text;
			        }

			        return '';
		    	}

				obj.mouseup(function(e) {
					if(($(e.target).closest('#img-share-twitter').length) && (textSend !== '')){
						var textTotal = textSend + window.location.href;
						if(textTotal.length > 140){
							textCut = 140 - window.location.href.length;
							textSend = textSend.substring(0, textCut);
						}

						textSendGlobal = textSend;

						window.open(
						  'http://twitter.com/share?text=' + textSend + '&url=' + window.location.href,
						  '_blank'
						);
					}
					else{
						var text = getSelectedText();
						if (text !== ''){
							textSend = text;
							textSendGlobal = textSend; 
							if($(e.target).closest('#img-share-twitter').length){
								window.location.href = 'http://twitter.com/share?text=' + text + '&url=' + window.location.href;
							}
							else{
								$(document).find('#img-share-twitter').remove();

								var offset = obj.offset();
								var mouseX = Math.min(e.pageX - offset.left - 30);
								var mouseY = Math.min(e.pageY - offset.top - 58);

								var img= '<img id="img-share-twitter" src="' + o.image + '" alt="share on twitter" title="Share on Twitter" style="position:absolute; top: ' + mouseY + 'px;  left: ' + mouseX + 'px;">';
								if(obj.parent().hasClass('wrapped-highlight')){
									obj.append(img);
								}
								else{
									obj.wrap('<div style="position:relative;" class="wrapped-highlight"></div>').append(img);
							    }
							}
						}
						else{
							$(document).find('#img-share-twitter').remove();
						}
					}
				});
            });
        }
    });

	$.extend({
        getTextSend: function() {
            return textSendGlobal;
        }
    })
})(jQuery);