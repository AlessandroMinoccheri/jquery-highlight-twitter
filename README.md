jquery-highlight-twitter
========================

This is jQuery plugin that allow to share highlighted text on twitter.
When you highlight a text with this plugin active on it automatically appear twitter logo to share the highlighted text

#Get started
You can apply this plugin to all elements of your page. 
To active the plugin to an element you can do this:

```
<p id="text-highlighted">My text</p>
```
and with jQuery call the plugin on this element (inside $(document).ready() function):

```
$('#text-highlighted').highlightTwitter();
```  

With this call every time you highlight the text inside the elemtn will appear the image of twitter and i you clickon it you can share your highlighted text.

If the container of your element isn't in position:relative automatically the plugin wrap the element on a div with position:relative to position wel the image of twitter.

#Customize
You can customize the image of twitter adding a parameter called image like this:
```
$('#txt').highlightTwitter({
	image:"img/your-twitter-image.png"
})
```

With the parameter image you can change the default to your custom image.

#License

The MIT License (MIT)

Copyright (c) 2014 Alessandro Minoccheri

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.