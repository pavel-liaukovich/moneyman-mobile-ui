// Avoid `console` errors in browsers that lack a console.
(function() {
	var method;
	var noop = function () {};
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());
// Place any jQuery/helper plugins in here.

/*!
 * Bootstrap v3.1.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);var e=this.options.trigger.split(" ");for(var f=e.length;f--;){var g=e[f];if(g=="click")this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if(g!="manual"){var h=g=="hover"?"mouseenter":"focusin",i=g=="hover"?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&typeof b.delay=="number"&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);clearTimeout(c.timeout),c.hoverState="in";if(!c.options.delay||!c.options.delay.show)return c.show();c.timeout=setTimeout(function(){c.hoverState=="in"&&c.show()},c.options.delay.show)},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);clearTimeout(c.timeout),c.hoverState="out";if(!c.options.delay||!c.options.delay.hide)return c.hide();c.timeout=setTimeout(function(){c.hoverState=="out"&&c.hide()},c.options.delay.hide)},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);if(b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e=typeof this.options.placement=="function"?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n=this.options.container=="body"?window.innerWidth:k.outerWidth(),o=this.options.container=="body"?window.innerHeight:k.outerHeight(),p=this.options.container=="body"?0:k.offset().left;e=e=="bottom"&&h.top+h.height+j-m>o?"top":e=="top"&&h.top-m-j<0?"bottom":e=="right"&&h.right+i>n?"left":e=="left"&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;c=="top"&&k!=g&&(d=!0,b.top=b.top+g-k);if(/bottom|top/.test(c)){var l=0;b.left<0&&(l=b.left*-2,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function e(){b.hoverState!="in"&&c.detach(),b.$element.trigger("hidden.bs."+b.type)}var b=this,c=this.tip(),d=a.Event("hide.bs."+this.type);this.$element.trigger(d);if(d.isDefaultPrevented())return;return c.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?c.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),this.hoverState=null,this},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||typeof a.attr("data-original-title")!="string")&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},typeof b.getBoundingClientRect=="function"?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return a=="bottom"?{top:b.top+b.height,left:b.left+b.width/2-c/2}:a=="top"?{top:b.top-d,left:b.left+b.width/2-c/2}:a=="left"?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||(typeof c.title=="function"?c.title.call(b[0]):c.title),a},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f=typeof c=="object"&&c;if(!e&&c=="destroy")return;e||d.data("bs.tooltip",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?typeof c=="string"?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||(typeof b.content=="function"?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f=typeof c=="object"&&c;if(!e&&c=="destroy")return;e||d.data("bs.popover",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,""));if(b.parent("li").hasClass("active"))return;var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});b.trigger(f);if(f.isDefaultPrevented())return;var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})},b.prototype.activate=function(b,c,d){function g(){e.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),f?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var e=c.find("> .active"),f=d&&a.support.transition&&e.hasClass("fade");f?e.one(a.support.transition.end,g).emulateTransitionEnd(150):g(),e.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),typeof c=="string"&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery)


/*! jQuery UI - v1.10.4 - 2014-02-17
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.autocomplete.js, jquery.ui.menu.js, jquery.ui.slider.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

;(function(e,t){function i(t,i){var s,a,o,r=t.nodeName.toLowerCase();return"area"===r?(s=t.parentNode,a=s.name,t.href&&a&&"map"===s.nodeName.toLowerCase()?(o=e("img[usemap=#"+a+"]")[0],!!o&&n(o)):!1):(/input|select|textarea|button|object/.test(r)?!t.disabled:"a"===r?t.href||i:i)&&n(t)}function n(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var s=0,a=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,n){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),n&&n.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var n,s,a=e(this[0]);a.length&&a[0]!==document;){if(n=a.css("position"),("absolute"===n||"relative"===n||"fixed"===n)&&(s=parseInt(a.css("zIndex"),10),!isNaN(s)&&0!==s))return s;a=a.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++s)})},removeUniqueId:function(){return this.each(function(){a.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,n){return!!e.data(t,n[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),s=isNaN(n);return(s||n>=0)&&i(t,!s)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,n){function s(t,i,n,s){return e.each(a,function(){i-=parseFloat(e.css(t,"padding"+this))||0,n&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var a="Width"===n?["Left","Right"]:["Top","Bottom"],o=n.toLowerCase(),r={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+n]=function(i){return i===t?r["inner"+n].call(this):this.each(function(){e(this).css(o,s(this,i)+"px")})},e.fn["outer"+n]=function(t,i){return"number"!=typeof t?r["outer"+n].call(this,t):this.each(function(){e(this).css(o,s(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,n){var s,a=e.ui[t].prototype;for(s in n)a.plugins[s]=a.plugins[s]||[],a.plugins[s].push([i,n[s]])},call:function(e,t,i){var n,s=e.plugins[t];if(s&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(n=0;s.length>n;n++)e.options[s[n][0]]&&s[n][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var n=i&&"left"===i?"scrollLeft":"scrollTop",s=!1;return t[n]>0?!0:(t[n]=1,s=t[n]>0,t[n]=0,s)}})})(jQuery);(function(t,e){var i=0,s=Array.prototype.slice,n=t.cleanData;t.cleanData=function(e){for(var i,s=0;null!=(i=e[s]);s++)try{t(i).triggerHandler("remove")}catch(o){}n(e)},t.widget=function(i,s,n){var o,a,r,h,l={},c=i.split(".")[0];i=i.split(".")[1],o=c+"-"+i,n||(n=s,s=t.Widget),t.expr[":"][o.toLowerCase()]=function(e){return!!t.data(e,o)},t[c]=t[c]||{},a=t[c][i],r=t[c][i]=function(t,i){return this._createWidget?(arguments.length&&this._createWidget(t,i),e):new r(t,i)},t.extend(r,a,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),h=new s,h.options=t.widget.extend({},h.options),t.each(n,function(i,n){return t.isFunction(n)?(l[i]=function(){var t=function(){return s.prototype[i].apply(this,arguments)},e=function(t){return s.prototype[i].apply(this,t)};return function(){var i,s=this._super,o=this._superApply;return this._super=t,this._superApply=e,i=n.apply(this,arguments),this._super=s,this._superApply=o,i}}(),e):(l[i]=n,e)}),r.prototype=t.widget.extend(h,{widgetEventPrefix:a?h.widgetEventPrefix||i:i},l,{constructor:r,namespace:c,widgetName:i,widgetFullName:o}),a?(t.each(a._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,r,i._proto)}),delete a._childConstructors):s._childConstructors.push(r),t.widget.bridge(i,r)},t.widget.extend=function(i){for(var n,o,a=s.call(arguments,1),r=0,h=a.length;h>r;r++)for(n in a[r])o=a[r][n],a[r].hasOwnProperty(n)&&o!==e&&(i[n]=t.isPlainObject(o)?t.isPlainObject(i[n])?t.widget.extend({},i[n],o):t.widget.extend({},o):o);return i},t.widget.bridge=function(i,n){var o=n.prototype.widgetFullName||i;t.fn[i]=function(a){var r="string"==typeof a,h=s.call(arguments,1),l=this;return a=!r&&h.length?t.widget.extend.apply(null,[a].concat(h)):a,r?this.each(function(){var s,n=t.data(this,o);return n?t.isFunction(n[a])&&"_"!==a.charAt(0)?(s=n[a].apply(n,h),s!==n&&s!==e?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):e):t.error("no such method '"+a+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+a+"'")}):this.each(function(){var e=t.data(this,o);e?e.option(a||{})._init():t.data(this,o,new n(a,this))}),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,s){var n,o,a,r=i;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof i)if(r={},n=i.split("."),i=n.shift(),n.length){for(o=r[i]=t.widget.extend({},this.options[i]),a=0;n.length-1>a;a++)o[n[a]]=o[n[a]]||{},o=o[n[a]];if(i=n.pop(),1===arguments.length)return o[i]===e?null:o[i];o[i]=s}else{if(1===arguments.length)return this.options[i]===e?null:this.options[i];r[i]=s}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var o,a=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=o=t(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,o=this.widget()),t.each(n,function(n,r){function h(){return i||a.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?a[r]:r).apply(a,arguments):e}"string"!=typeof r&&(h.guid=r.guid=r.guid||h.guid||t.guid++);var l=n.match(/^(\w+)\s*(.*)$/),c=l[1]+a.eventNamespace,u=l[2];u?o.delegate(u,c,h):s.bind(c,h)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}})})(jQuery);(function(t){var e=!1;t(document).mouseup(function(){e=!1}),t.widget("ui.mouse",{version:"1.10.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.bind("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).bind("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!e){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,a="string"==typeof this.options.cancel&&i.target.nodeName?t(i.target).closest(this.options.cancel).length:!1;return n&&!a&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===t.data(i.target,this.widgetName+".preventClickEvent")&&t.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return s._mouseMove(t)},this._mouseUpDelegate=function(t){return s._mouseUp(t)},t(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),e=!0,!0)):!0}},_mouseMove:function(e){return t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button?this._mouseUp(e):this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){return t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),!1},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);(function(t,e){function i(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function s(e,i){return parseInt(t.css(e,i),10)||0}function n(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var a,o=Math.max,r=Math.abs,l=Math.round,h=/left|center|right/,c=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;t.position={scrollbarWidth:function(){if(a!==e)return a;var i,s,n=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=n.children()[0];return t("body").append(n),i=o.offsetWidth,n.css("overflow","scroll"),s=o.offsetWidth,i===s&&(s=n[0].clientWidth),n.remove(),a=i-s},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,a="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:a?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s?i.width():i.outerWidth(),height:s?i.height():i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return f.apply(this,arguments);e=t.extend({},e);var a,p,g,m,v,_,b=t(e.of),y=t.position.getWithinInfo(e.within),k=t.position.getScrollInfo(y),w=(e.collision||"flip").split(" "),D={};return _=n(b),b[0].preventDefault&&(e.at="left top"),p=_.width,g=_.height,m=_.offset,v=t.extend({},m),t.each(["my","at"],function(){var t,i,s=(e[this]||"").split(" ");1===s.length&&(s=h.test(s[0])?s.concat(["center"]):c.test(s[0])?["center"].concat(s):["center","center"]),s[0]=h.test(s[0])?s[0]:"center",s[1]=c.test(s[1])?s[1]:"center",t=u.exec(s[0]),i=u.exec(s[1]),D[this]=[t?t[0]:0,i?i[0]:0],e[this]=[d.exec(s[0])[0],d.exec(s[1])[0]]}),1===w.length&&(w[1]=w[0]),"right"===e.at[0]?v.left+=p:"center"===e.at[0]&&(v.left+=p/2),"bottom"===e.at[1]?v.top+=g:"center"===e.at[1]&&(v.top+=g/2),a=i(D.at,p,g),v.left+=a[0],v.top+=a[1],this.each(function(){var n,h,c=t(this),u=c.outerWidth(),d=c.outerHeight(),f=s(this,"marginLeft"),_=s(this,"marginTop"),x=u+f+s(this,"marginRight")+k.width,C=d+_+s(this,"marginBottom")+k.height,M=t.extend({},v),T=i(D.my,c.outerWidth(),c.outerHeight());"right"===e.my[0]?M.left-=u:"center"===e.my[0]&&(M.left-=u/2),"bottom"===e.my[1]?M.top-=d:"center"===e.my[1]&&(M.top-=d/2),M.left+=T[0],M.top+=T[1],t.support.offsetFractions||(M.left=l(M.left),M.top=l(M.top)),n={marginLeft:f,marginTop:_},t.each(["left","top"],function(i,s){t.ui.position[w[i]]&&t.ui.position[w[i]][s](M,{targetWidth:p,targetHeight:g,elemWidth:u,elemHeight:d,collisionPosition:n,collisionWidth:x,collisionHeight:C,offset:[a[0]+T[0],a[1]+T[1]],my:e.my,at:e.at,within:y,elem:c})}),e.using&&(h=function(t){var i=m.left-M.left,s=i+p-u,n=m.top-M.top,a=n+g-d,l={target:{element:b,left:m.left,top:m.top,width:p,height:g},element:{element:c,left:M.left,top:M.top,width:u,height:d},horizontal:0>s?"left":i>0?"right":"center",vertical:0>a?"top":n>0?"bottom":"middle"};u>p&&p>r(i+s)&&(l.horizontal="center"),d>g&&g>r(n+a)&&(l.vertical="middle"),l.important=o(r(i),r(s))>o(r(n),r(a))?"horizontal":"vertical",e.using.call(this,t,l)}),c.offset(t.extend(M,{using:h}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,l=n-r,h=r+e.collisionWidth-a-n;e.collisionWidth>a?l>0&&0>=h?(i=t.left+l+e.collisionWidth-a-n,t.left+=l-i):t.left=h>0&&0>=l?n:l>h?n+a-e.collisionWidth:n:l>0?t.left+=l:h>0?t.left-=h:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,l=n-r,h=r+e.collisionHeight-a-n;e.collisionHeight>a?l>0&&0>=h?(i=t.top+l+e.collisionHeight-a-n,t.top+=l-i):t.top=h>0&&0>=l?n:l>h?n+a-e.collisionHeight:n:l>0?t.top+=l:h>0?t.top-=h:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,a=n.offset.left+n.scrollLeft,o=n.width,l=n.isWindow?n.scrollLeft:n.offset.left,h=t.left-e.collisionPosition.marginLeft,c=h-l,u=h+e.collisionWidth-o-l,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-o-a,(0>i||r(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-l,(s>0||u>r(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,a=n.offset.top+n.scrollTop,o=n.height,l=n.isWindow?n.scrollTop:n.offset.top,h=t.top-e.collisionPosition.marginTop,c=h-l,u=h+e.collisionHeight-o-l,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-o-a,t.top+p+f+g>c&&(0>s||r(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-l,t.top+p+f+g>u&&(i>0||u>r(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,s,n,a,o=document.getElementsByTagName("body")[0],r=document.createElement("div");e=document.createElement(o?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&t.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(a in s)e.style[a]=s[a];e.appendChild(r),i=o||document.documentElement,i.insertBefore(e,i.firstChild),r.style.cssText="position: absolute; left: 10.7432222px;",n=t(r).offset().left,t.support.offsetFractions=n>10&&11>n,e.innerHTML="",i.removeChild(e)}()})(jQuery);(function(e){e.widget("ui.autocomplete",{version:"1.10.4",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var t,i,s,n=this.element[0].nodeName.toLowerCase(),a="textarea"===n,o="input"===n;this.isMultiLine=a?!0:o?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[a||o?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return t=!0,s=!0,i=!0,undefined;t=!1,s=!1,i=!1;var a=e.ui.keyCode;switch(n.keyCode){case a.PAGE_UP:t=!0,this._move("previousPage",n);break;case a.PAGE_DOWN:t=!0,this._move("nextPage",n);break;case a.UP:t=!0,this._keyEvent("previous",n);break;case a.DOWN:t=!0,this._keyEvent("next",n);break;case a.ENTER:case a.NUMPAD_ENTER:this.menu.active&&(t=!0,n.preventDefault(),this.menu.select(n));break;case a.TAB:this.menu.active&&this.menu.select(n);break;case a.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(t)return t=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),undefined;if(!i){var n=e.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(e){return s?(s=!1,e.preventDefault(),undefined):(this._searchTimeout(e),undefined)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,undefined):(clearTimeout(this.searching),this.close(e),this._change(e),undefined)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().data("ui-menu"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(s){s.target===t.element[0]||s.target===i||e.contains(i,s.target)||t.close()})})},menufocus:function(t,i){if(this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent&&/^mouse/.test(t.originalEvent.type)))return this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)}),undefined;var s=i.item.data("ui-autocomplete-item");!1!==this._trigger("focus",t,{item:s})?t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(s.value):this.liveRegion.text(s.value)},menuselect:function(e,t){var i=t.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger("select",e,{item:i})&&this._value(i.value),this.term=this._value(),this.close(e),this.selectedItem=i}}),this.liveRegion=e("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),"source"===e&&this._initSource(),"appendTo"===e&&this.menu.element.appendTo(this._appendTo()),"disabled"===e&&t&&this.xhr&&this.xhr.abort()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_initSource:function(){var t,i,s=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(i,s){s(e.ui.autocomplete.filter(t,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(t,n){s.xhr&&s.xhr.abort(),s.xhr=e.ajax({url:i,data:t,dataType:"json",success:function(e){n(e)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){return e=null!=e?e:this._value(),this.term=this._value(),e.length<this.options.minLength?this.close(t):this._trigger("search",t)!==!1?this._search(e):undefined},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var t=++this.requestIndex;return e.proxy(function(e){t===this.requestIndex&&this.__response(e),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")},this)},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return"string"==typeof t?{label:t,value:t}:e.extend({label:t.label||t.value,value:t.value||t.label},t)})},_suggest:function(t){var i=this.menu.element.empty();this._renderMenu(i,t),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,i){var s=this;e.each(i,function(e,i){s._renderItemData(t,i)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,i){return e("<li>").append(e("<a>").text(i.label)).appendTo(t)},_move:function(e,t){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)?(this._value(this.term),this.menu.blur(),undefined):(this.menu[e](t),undefined):(this.search(null,t),undefined)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(e,t),t.preventDefault())}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,i){var s=RegExp(e.ui.autocomplete.escapeRegex(i),"i");return e.grep(t,function(e){return s.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var t;this._superApply(arguments),this.options.disabled||this.cancelSearch||(t=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.text(t))}})})(jQuery);(function(t){t.widget("ui.menu",{version:"1.10.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,t.proxy(function(t){this.options.disabled&&t.preventDefault()},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(t){t.preventDefault()},"click .ui-state-disabled > a":function(t){t.preventDefault()},"click .ui-menu-item:has(a)":function(e){var i=t(e.target).closest(".ui-menu-item");!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(e),e.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(e):!this.element.is(":focus")&&t(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){var i=t(e.currentTarget);i.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(e,i)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.children(".ui-menu-item").eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){t.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){t(e.target).closest(".ui-menu").length||this.collapseAll(e),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var e=t(this);e.data("ui-menu-submenu-carat")&&e.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(e){function i(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var s,n,a,o,r,l=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:l=!1,n=this.previousFilter||"",a=String.fromCharCode(e.keyCode),o=!1,clearTimeout(this.filterTimer),a===n?o=!0:a=n+a,r=RegExp("^"+i(a),"i"),s=this.activeMenu.children(".ui-menu-item").filter(function(){return r.test(t(this).children("a").text())}),s=o&&-1!==s.index(this.active.next())?this.active.nextAll(".ui-menu-item"):s,s.length||(a=String.fromCharCode(e.keyCode),r=RegExp("^"+i(a),"i"),s=this.activeMenu.children(".ui-menu-item").filter(function(){return r.test(t(this).children("a").text())})),s.length?(this.focus(e,s),s.length>1?(this.previousFilter=a,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter):delete this.previousFilter}l&&e.preventDefault()},_activate:function(t){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var e,i=this.options.icons.submenu,s=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),s=e.prev("a"),n=t("<span>").addClass("ui-menu-icon ui-icon "+i).data("ui-menu-submenu-carat",!0);s.attr("aria-haspopup","true").prepend(n),e.attr("aria-labelledby",s.attr("id"))}),e=s.add(this.element),e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),e.children(":not(.ui-menu-item)").each(function(){var e=t(this);/[^\-\u2014\u2013\s]/.test(e.text())||e.addClass("ui-widget-content ui-menu-divider")}),e.children(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){"icons"===t&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu),this._super(t,e)},focus:function(t,e){var i,s;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),s=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=e.children(".ui-menu"),i.length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,s,n,a,o,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,n=e.offset().top-this.activeMenu.offset().top-i-s,a=this.activeMenu.scrollTop(),o=this.activeMenu.height(),r=e.height(),0>n?this.activeMenu.scrollTop(a+n):n+r>o&&this.activeMenu.scrollTop(a+n-o+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",t,{item:this.active}))},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(e),this.activeMenu=s},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var s;this.active&&(s="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.children(".ui-menu-item")[e]()),this.focus(i,s)},nextPage:function(e){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=t(this),0>i.offset().top-s-n}),this.focus(e,i)):this.focus(e,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]())),undefined):(this.next(e),undefined)},previousPage:function(e){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-s+n>0}),this.focus(e,i)):this.focus(e,this.activeMenu.children(".ui-menu-item").first())),undefined):(this.next(e),undefined)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)}})})(jQuery);(function(t){var e=5;t.widget("ui.slider",t.ui.mouse,{version:"1.10.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)o.push(a);this.handles=n.add(t(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e)})},_createRange:function(){var e=this.options,i="";e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=t("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===e.range||"max"===e.range?" ui-slider-range-"+e.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){var t=this.handles.add(this.range).filter("a");this._off(t),this._on(t,this._handleEvents),this._hoverable(t),this._focusable(t)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,a,o,r,l,h,u=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-u.values(e));(n>i||n===i&&(e===u._lastChangedValue||u.values(e)===c.min))&&(n=i,a=t(this),o=e)}),r=this._start(e,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),l=a.offset(),h=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=h?{left:0,top:0}:{left:e.pageX-l.left-a.width()/2,top:e.pageY-l.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,a;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(t,e){var i={handle:this.handles[e],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("start",t,i)},_slide:function(t,e,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(e?0:1),2===this.options.values.length&&this.options.range===!0&&(0===e&&i>s||1===e&&s>i)&&(i=s),i!==this.values(e)&&(n=this.values(),n[e]=i,a=this._trigger("slide",t,{handle:this.handles[e],value:i,values:n}),s=this.values(e?0:1),a!==!1&&this.values(e,i))):i!==this.value()&&(a=this._trigger("slide",t,{handle:this.handles[e],value:i}),a!==!1&&this.value(i))},_stop:function(t,e){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("stop",t,i)},_change:function(t,e){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._lastChangedValue=e,this._trigger("change",t,i)}},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),undefined):this._value()},values:function(e,i){var s,n,a;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),undefined;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(e):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),t.Widget.prototype._setOption.apply(this,arguments),e){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var e,i,s,n,a,o=this.options.range,r=this.options,l=this,h=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((l.values(s)-l._valueMin())/(l._valueMax()-l._valueMin())),u["horizontal"===l.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[h?"animate":"css"](u,r.animate),l.options.range===!0&&("horizontal"===l.orientation?(0===s&&l.range.stop(1,1)[h?"animate":"css"]({left:i+"%"},r.animate),1===s&&l.range[h?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&l.range.stop(1,1)[h?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&l.range[h?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[h?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[h?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[h?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(i){var s,n,a,o,r=t(i.target).data("ui-slider-handle-index");switch(i.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(i.preventDefault(),!this._keySliding&&(this._keySliding=!0,t(i.target).addClass("ui-state-active"),s=this._start(i,r),s===!1))return}switch(o=this.options.step,n=a=this.options.values&&this.options.values.length?this.values(r):this.value(),i.keyCode){case t.ui.keyCode.HOME:a=this._valueMin();break;case t.ui.keyCode.END:a=this._valueMax();break;case t.ui.keyCode.PAGE_UP:a=this._trimAlignValue(n+(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.PAGE_DOWN:a=this._trimAlignValue(n-(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(n===this._valueMax())return;a=this._trimAlignValue(n+o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(n===this._valueMin())return;a=this._trimAlignValue(n-o)}this._slide(i,r,a)},click:function(t){t.preventDefault()},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),t(e.target).removeClass("ui-state-active"))}}})})(jQuery);
/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
!function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);


/*!
 * jQuery Validation Plugin 1.11.1
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright 2013 Jörn Zaefferer
 * Released under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */

;(function(t){t.extend(t.fn,{validate:function(e){if(!this.length)return e&&e.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."),void 0;var i=t.data(this[0],"validator");return i?i:(this.attr("novalidate","novalidate"),i=new t.validator(e,this[0]),t.data(this[0],"validator",i),i.settings.onsubmit&&(this.validateDelegate(":submit","click",function(e){i.settings.submitHandler&&(i.submitButton=e.target),t(e.target).hasClass("cancel")&&(i.cancelSubmit=!0),void 0!==t(e.target).attr("formnovalidate")&&(i.cancelSubmit=!0)}),this.submit(function(e){function s(){var s;return i.settings.submitHandler?(i.submitButton&&(s=t("<input type='hidden'/>").attr("name",i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)),i.settings.submitHandler.call(i,i.currentForm,e),i.submitButton&&s.remove(),!1):!0}return i.settings.debug&&e.preventDefault(),i.cancelSubmit?(i.cancelSubmit=!1,s()):i.form()?i.pendingRequest?(i.formSubmitted=!0,!1):s():(i.focusInvalid(),!1)})),i)},valid:function(){if(t(this[0]).is("form"))return this.validate().form();var e=!0,i=t(this[0].form).validate();return this.each(function(){e=e&&i.element(this)}),e},removeAttrs:function(e){var i={},s=this;return t.each(e.split(/\s/),function(t,e){i[e]=s.attr(e),s.removeAttr(e)}),i},rules:function(e,i){var s=this[0];if(e){var r=t.data(s.form,"validator").settings,n=r.rules,a=t.validator.staticRules(s);switch(e){case"add":t.extend(a,t.validator.normalizeRule(i)),delete a.messages,n[s.name]=a,i.messages&&(r.messages[s.name]=t.extend(r.messages[s.name],i.messages));break;case"remove":if(!i)return delete n[s.name],a;var u={};return t.each(i.split(/\s/),function(t,e){u[e]=a[e],delete a[e]}),u}}var o=t.validator.normalizeRules(t.extend({},t.validator.classRules(s),t.validator.attributeRules(s),t.validator.dataRules(s),t.validator.staticRules(s)),s);if(o.required){var l=o.required;delete o.required,o=t.extend({required:l},o)}return o}}),t.extend(t.expr[":"],{blank:function(e){return!t.trim(""+t(e).val())},filled:function(e){return!!t.trim(""+t(e).val())},unchecked:function(e){return!t(e).prop("checked")}}),t.validator=function(e,i){this.settings=t.extend(!0,{},t.validator.defaults,e),this.currentForm=i,this.init()},t.validator.format=function(e,i){return 1===arguments.length?function(){var i=t.makeArray(arguments);return i.unshift(e),t.validator.format.apply(this,i)}:(arguments.length>2&&i.constructor!==Array&&(i=t.makeArray(arguments).slice(1)),i.constructor!==Array&&(i=[i]),t.each(i,function(t,i){e=e.replace(RegExp("\\{"+t+"\\}","g"),function(){return i})}),e)},t.extend(t.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:!0,errorContainer:t([]),errorLabelContainer:t([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(t){this.lastActive=t,this.settings.focusCleanup&&!this.blockFocusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,t,this.settings.errorClass,this.settings.validClass),this.addWrapper(this.errorsFor(t)).hide())},onfocusout:function(t){this.checkable(t)||!(t.name in this.submitted)&&this.optional(t)||this.element(t)},onkeyup:function(t,e){(9!==e.which||""!==this.elementValue(t))&&(t.name in this.submitted||t===this.lastElement)&&this.element(t)},onclick:function(t){t.name in this.submitted?this.element(t):t.parentNode.name in this.submitted&&this.element(t.parentNode)},highlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).addClass(i).removeClass(s):t(e).addClass(i).removeClass(s)},unhighlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).removeClass(i).addClass(s):t(e).removeClass(i).addClass(s)}},setDefaults:function(e){t.extend(t.validator.defaults,e)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:t.validator.format("Please enter no more than {0} characters."),minlength:t.validator.format("Please enter at least {0} characters."),rangelength:t.validator.format("Please enter a value between {0} and {1} characters long."),range:t.validator.format("Please enter a value between {0} and {1}."),max:t.validator.format("Please enter a value less than or equal to {0}."),min:t.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function e(e){var i=t.data(this[0].form,"validator"),s="on"+e.type.replace(/^validate/,"");i.settings[s]&&i.settings[s].call(i,this[0],e)}this.labelContainer=t(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||t(this.currentForm),this.containers=t(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var i=this.groups={};t.each(this.settings.groups,function(e,s){"string"==typeof s&&(s=s.split(/\s/)),t.each(s,function(t,s){i[s]=e})});var s=this.settings.rules;t.each(s,function(e,i){s[e]=t.validator.normalizeRule(i)}),t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",e).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",e),this.settings.invalidHandler&&t(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),t.extend(this.submitted,this.errorMap),this.invalid=t.extend({},this.errorMap),this.valid()||t(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var t=0,e=this.currentElements=this.elements();e[t];t++)this.check(e[t]);return this.valid()},element:function(e){e=this.validationTargetFor(this.clean(e)),this.lastElement=e,this.prepareElement(e),this.currentElements=t(e);var i=this.check(e)!==!1;return i?delete this.invalid[e.name]:this.invalid[e.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),i},showErrors:function(e){if(e){t.extend(this.errorMap,e),this.errorList=[];for(var i in e)this.errorList.push({message:e[i],element:this.findByName(i)[0]});this.successList=t.grep(this.successList,function(t){return!(t.name in e)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){t.fn.resetForm&&t(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(t){var e=0;for(var i in t)e++;return e},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{t(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(e){}},findLastActive:function(){var e=this.lastActive;return e&&1===t.grep(this.errorList,function(t){return t.element.name===e.name}).length&&e},elements:function(){var e=this,i={};return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){return!this.name&&e.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in i||!e.objectLength(t(this).rules())?!1:(i[this.name]=!0,!0)})},clean:function(e){return t(e)[0]},errors:function(){var e=this.settings.errorClass.replace(" ",".");return t(this.settings.errorElement+"."+e,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=t([]),this.toHide=t([]),this.currentElements=t([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(t){this.reset(),this.toHide=this.errorsFor(t)},elementValue:function(e){var i=t(e).attr("type"),s=t(e).val();return"radio"===i||"checkbox"===i?t("input[name='"+t(e).attr("name")+"']:checked").val():"string"==typeof s?s.replace(/\r/g,""):s},check:function(e){e=this.validationTargetFor(this.clean(e));var i,s=t(e).rules(),r=!1,n=this.elementValue(e);for(var a in s){var u={method:a,parameters:s[a]};try{if(i=t.validator.methods[a].call(this,n,e,u.parameters),"dependency-mismatch"===i){r=!0;continue}if(r=!1,"pending"===i)return this.toHide=this.toHide.not(this.errorsFor(e)),void 0;if(!i)return this.formatAndAdd(e,u),!1}catch(o){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+e.id+", check the '"+u.method+"' method.",o),o}}return r?void 0:(this.objectLength(s)&&this.successList.push(e),!0)},customDataMessage:function(e,i){return t(e).data("msg-"+i.toLowerCase())||e.attributes&&t(e).attr("data-msg-"+i.toLowerCase())},customMessage:function(t,e){var i=this.settings.messages[t];return i&&(i.constructor===String?i:i[e])},findDefined:function(){for(var t=0;arguments.length>t;t++)if(void 0!==arguments[t])return arguments[t];return void 0},defaultMessage:function(e,i){return this.findDefined(this.customMessage(e.name,i),this.customDataMessage(e,i),!this.settings.ignoreTitle&&e.title||void 0,t.validator.messages[i],"<strong>Warning: No message defined for "+e.name+"</strong>")},formatAndAdd:function(e,i){var s=this.defaultMessage(e,i.method),r=/\$?\{(\d+)\}/g;"function"==typeof s?s=s.call(this,i.parameters,e):r.test(s)&&(s=t.validator.format(s.replace(r,"{$1}"),i.parameters)),this.errorList.push({message:s,element:e}),this.errorMap[e.name]=s,this.submitted[e.name]=s},addWrapper:function(t){return this.settings.wrapper&&(t=t.add(t.parent(this.settings.wrapper))),t},defaultShowErrors:function(){var t,e;for(t=0;this.errorList[t];t++){var i=this.errorList[t];this.settings.highlight&&this.settings.highlight.call(this,i.element,this.settings.errorClass,this.settings.validClass),this.showLabel(i.element,i.message)}if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(t=0;this.successList[t];t++)this.showLabel(this.successList[t]);if(this.settings.unhighlight)for(t=0,e=this.validElements();e[t];t++)this.settings.unhighlight.call(this,e[t],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return t(this.errorList).map(function(){return this.element})},showLabel:function(e,i){var s=this.errorsFor(e);s.length?(s.removeClass(this.settings.validClass).addClass(this.settings.errorClass),s.html(i)):(s=t("<"+this.settings.errorElement+">").attr("for",this.idOrName(e)).addClass(this.settings.errorClass).html(i||""),this.settings.wrapper&&(s=s.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.append(s).length||(this.settings.errorPlacement?this.settings.errorPlacement(s,t(e)):s.insertAfter(e))),!i&&this.settings.success&&(s.text(""),"string"==typeof this.settings.success?s.addClass(this.settings.success):this.settings.success(s,e)),this.toShow=this.toShow.add(s)},errorsFor:function(e){var i=this.idOrName(e);return this.errors().filter(function(){return t(this).attr("for")===i})},idOrName:function(t){return this.groups[t.name]||(this.checkable(t)?t.name:t.id||t.name)},validationTargetFor:function(t){return this.checkable(t)&&(t=this.findByName(t.name).not(this.settings.ignore)[0]),t},checkable:function(t){return/radio|checkbox/i.test(t.type)},findByName:function(e){return t(this.currentForm).find("[name='"+e+"']")},getLength:function(e,i){switch(i.nodeName.toLowerCase()){case"select":return t("option:selected",i).length;case"input":if(this.checkable(i))return this.findByName(i.name).filter(":checked").length}return e.length},depend:function(t,e){return this.dependTypes[typeof t]?this.dependTypes[typeof t](t,e):!0},dependTypes:{"boolean":function(t){return t},string:function(e,i){return!!t(e,i.form).length},"function":function(t,e){return t(e)}},optional:function(e){var i=this.elementValue(e);return!t.validator.methods.required.call(this,i,e)&&"dependency-mismatch"},startRequest:function(t){this.pending[t.name]||(this.pendingRequest++,this.pending[t.name]=!0)},stopRequest:function(e,i){this.pendingRequest--,0>this.pendingRequest&&(this.pendingRequest=0),delete this.pending[e.name],i&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(t(this.currentForm).submit(),this.formSubmitted=!1):!i&&0===this.pendingRequest&&this.formSubmitted&&(t(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(e){return t.data(e,"previousValue")||t.data(e,"previousValue",{old:null,valid:!0,message:this.defaultMessage(e,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(e,i){e.constructor===String?this.classRuleSettings[e]=i:t.extend(this.classRuleSettings,e)},classRules:function(e){var i={},s=t(e).attr("class");return s&&t.each(s.split(" "),function(){this in t.validator.classRuleSettings&&t.extend(i,t.validator.classRuleSettings[this])}),i},attributeRules:function(e){var i={},s=t(e),r=s[0].getAttribute("type");for(var n in t.validator.methods){var a;"required"===n?(a=s.get(0).getAttribute(n),""===a&&(a=!0),a=!!a):a=s.attr(n),/min|max/.test(n)&&(null===r||/number|range|text/.test(r))&&(a=Number(a)),a?i[n]=a:r===n&&"range"!==r&&(i[n]=!0)}return i.maxlength&&/-1|2147483647|524288/.test(i.maxlength)&&delete i.maxlength,i},dataRules:function(e){var i,s,r={},n=t(e);for(i in t.validator.methods)s=n.data("rule-"+i.toLowerCase()),void 0!==s&&(r[i]=s);return r},staticRules:function(e){var i={},s=t.data(e.form,"validator");return s.settings.rules&&(i=t.validator.normalizeRule(s.settings.rules[e.name])||{}),i},normalizeRules:function(e,i){return t.each(e,function(s,r){if(r===!1)return delete e[s],void 0;if(r.param||r.depends){var n=!0;switch(typeof r.depends){case"string":n=!!t(r.depends,i.form).length;break;case"function":n=r.depends.call(i,i)}n?e[s]=void 0!==r.param?r.param:!0:delete e[s]}}),t.each(e,function(s,r){e[s]=t.isFunction(r)?r(i):r}),t.each(["minlength","maxlength"],function(){e[this]&&(e[this]=Number(e[this]))}),t.each(["rangelength","range"],function(){var i;e[this]&&(t.isArray(e[this])?e[this]=[Number(e[this][0]),Number(e[this][1])]:"string"==typeof e[this]&&(i=e[this].split(/[\s,]+/),e[this]=[Number(i[0]),Number(i[1])]))}),t.validator.autoCreateRanges&&(e.min&&e.max&&(e.range=[e.min,e.max],delete e.min,delete e.max),e.minlength&&e.maxlength&&(e.rangelength=[e.minlength,e.maxlength],delete e.minlength,delete e.maxlength)),e},normalizeRule:function(e){if("string"==typeof e){var i={};t.each(e.split(/\s/),function(){i[this]=!0}),e=i}return e},addMethod:function(e,i,s){t.validator.methods[e]=i,t.validator.messages[e]=void 0!==s?s:t.validator.messages[e],3>i.length&&t.validator.addClassRules(e,t.validator.normalizeRule(e))},methods:{required:function(e,i,s){if(!this.depend(s,i))return"dependency-mismatch";if("select"===i.nodeName.toLowerCase()){var r=t(i).val();return r&&r.length>0}return this.checkable(i)?this.getLength(e,i)>0:t.trim(e).length>0},email:function(t,e){return this.optional(e)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)},url:function(t,e){return this.optional(e)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)},date:function(t,e){return this.optional(e)||!/Invalid|NaN/.test(""+new Date(t))},dateISO:function(t,e){return this.optional(e)||/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)},number:function(t,e){return this.optional(e)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)},digits:function(t,e){return this.optional(e)||/^\d+$/.test(t)},creditcard:function(t,e){if(this.optional(e))return"dependency-mismatch";if(/[^0-9 \-]+/.test(t))return!1;var i=0,s=0,r=!1;t=t.replace(/\D/g,"");for(var n=t.length-1;n>=0;n--){var a=t.charAt(n);s=parseInt(a,10),r&&(s*=2)>9&&(s-=9),i+=s,r=!r}return 0===i%10},minlength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||r>=s},maxlength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||s>=r},rangelength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||r>=s[0]&&s[1]>=r},min:function(t,e,i){return this.optional(e)||t>=i},max:function(t,e,i){return this.optional(e)||i>=t},range:function(t,e,i){return this.optional(e)||t>=i[0]&&i[1]>=t},equalTo:function(e,i,s){var r=t(s);return this.settings.onfocusout&&r.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){t(i).valid()}),e===r.val()},remote:function(e,i,s){if(this.optional(i))return"dependency-mismatch";var r=this.previousValue(i);if(this.settings.messages[i.name]||(this.settings.messages[i.name]={}),r.originalMessage=this.settings.messages[i.name].remote,this.settings.messages[i.name].remote=r.message,s="string"==typeof s&&{url:s}||s,r.old===e)return r.valid;r.old=e;var n=this;this.startRequest(i);var a={};return a[i.name]=e,t.ajax(t.extend(!0,{url:s,mode:"abort",port:"validate"+i.name,dataType:"json",data:a,success:function(s){n.settings.messages[i.name].remote=r.originalMessage;var a=s===!0||"true"===s;if(a){var u=n.formSubmitted;n.prepareElement(i),n.formSubmitted=u,n.successList.push(i),delete n.invalid[i.name],n.showErrors()}else{var o={},l=s||n.defaultMessage(i,"remote");o[i.name]=r.message=t.isFunction(l)?l(e):l,n.invalid[i.name]=!0,n.showErrors(o)}r.valid=a,n.stopRequest(i,a)}},s)),"pending"}}}),t.format=t.validator.format})(jQuery),function(t){var e={};if(t.ajaxPrefilter)t.ajaxPrefilter(function(t,i,s){var r=t.port;"abort"===t.mode&&(e[r]&&e[r].abort(),e[r]=s)});else{var i=t.ajax;t.ajax=function(s){var r=("mode"in s?s:t.ajaxSettings).mode,n=("port"in s?s:t.ajaxSettings).port;return"abort"===r?(e[n]&&e[n].abort(),e[n]=i.apply(this,arguments),e[n]):i.apply(this,arguments)}}}(jQuery),function(t){t.extend(t.fn,{validateDelegate:function(e,i,s){return this.bind(i,function(i){var r=t(i.target);return r.is(e)?s.apply(r,arguments):void 0})}})}(jQuery);
/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: RU (Russian; русский язык)
 */
(function ($) {
	$.extend($.validator.messages, {
		required: "Это поле необходимо заполнить.",
		remote: "Пожалуйста, введите правильное значение.",
		email: "Пожалуйста, введите корректный адрес электронной почты.",
		url: "Пожалуйста, введите корректный URL.",
		date: "Пожалуйста, введите корректную дату.",
		dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
		number: "Пожалуйста, введите число.",
		digits: "Пожалуйста, вводите только цифры.",
		creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
		equalTo: "Пожалуйста, введите такое же значение ещё раз.",
		accept: "Пожалуйста, выберите файл с правильным расширением.",
		maxlength: $.validator.format("Пожалуйста, введите не больше {0} символов."),
		minlength: $.validator.format("Пожалуйста, введите не меньше {0} символов."),
		rangelength: $.validator.format("Пожалуйста, введите значение длиной от {0} до {1} символов."),
		range: $.validator.format("Пожалуйста, введите число от {0} до {1}."),
		max: $.validator.format("Пожалуйста, введите число, меньшее или равное {0}."),
		min: $.validator.format("Пожалуйста, введите число, большее или равное {0}.")
	});
}(jQuery));

/**
* @license Input Mask plugin for jquery
* http://github.com/RobinHerbots/jquery.inputmask
* Copyright (c) 2010 - 2014 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 0.0.0
*/
;(function($){if($.fn.inputmask===undefined){function isInputEventSupported(eventName){var el=document.createElement("input"),eventName="on"+eventName,isSupported=(eventName in el); if(!isSupported){el.setAttribute(eventName,"return;"); isSupported=typeof el[eventName]=="function"}el=null; return isSupported }function resolveAlias(aliasStr,options,opts){var aliasDefinition=opts.aliases[aliasStr]; if(aliasDefinition){if(aliasDefinition.alias){resolveAlias(aliasDefinition.alias,undefined,opts) }$.extend(true,opts,aliasDefinition); $.extend(true,opts,options); return true }return false }function generateMaskSets(opts){var ms=[]; var genmasks=[]; function getMaskTemplate(mask){if(opts.numericInput){mask=mask.split("").reverse().join("") }var escaped=false,outCount=0,greedy=opts.greedy,repeat=opts.repeat; if(repeat=="*"){greedy=false }if(mask.length==1&&greedy==false&&repeat!=0){opts.placeholder=""}var singleMask=$.map(mask.split(""),function(element,index){var outElem=[]; if(element==opts.escapeChar){escaped=true }else{if((element!=opts.optionalmarker.start&&element!=opts.optionalmarker.end)||escaped){var maskdef=opts.definitions[element]; if(maskdef&&!escaped){for(var i=0; i<maskdef.cardinality; i++){outElem.push(opts.placeholder.charAt((outCount+i)%opts.placeholder.length)) }}else{outElem.push(element); escaped=false }outCount+=outElem.length; return outElem }}});var repeatedMask=singleMask.slice(); for(var i=1; i<repeat&&greedy; i++){repeatedMask=repeatedMask.concat(singleMask.slice()) }return{mask:repeatedMask,repeat:repeat,greedy:greedy} }function getTestingChain(mask){if(opts.numericInput){mask=mask.split("").reverse().join("") }var isOptional=false,escaped=false; var newBlockMarker=false; return $.map(mask.split(""),function(element,index){var outElem=[]; if(element==opts.escapeChar){escaped=true }else{if(element==opts.optionalmarker.start&&!escaped){isOptional=true; newBlockMarker=true }else{if(element==opts.optionalmarker.end&&!escaped){isOptional=false; newBlockMarker=true }else{var maskdef=opts.definitions[element]; if(maskdef&&!escaped){var prevalidators=maskdef.prevalidator,prevalidatorsL=prevalidators?prevalidators.length:0; for(var i=1; i<maskdef.cardinality; i++){var prevalidator=prevalidatorsL>=i?prevalidators[i-1]:[],validator=prevalidator.validator,cardinality=prevalidator.cardinality; outElem.push({fn:validator?typeof validator=="string"?new RegExp(validator):new function(){this.test=validator }:new RegExp("."),cardinality:cardinality?cardinality:1,optionality:isOptional,newBlockMarker:isOptional==true?newBlockMarker:false,offset:0,casing:maskdef.casing,def:maskdef.definitionSymbol||element}); if(isOptional==true){newBlockMarker=false }}outElem.push({fn:maskdef.validator?typeof maskdef.validator=="string"?new RegExp(maskdef.validator):new function(){this.test=maskdef.validator }:new RegExp("."),cardinality:maskdef.cardinality,optionality:isOptional,newBlockMarker:newBlockMarker,offset:0,casing:maskdef.casing,def:maskdef.definitionSymbol||element}) }else{outElem.push({fn:null,cardinality:0,optionality:isOptional,newBlockMarker:newBlockMarker,offset:0,casing:null,def:element}); escaped=false }newBlockMarker=false; return outElem }}}})}function markOptional(maskPart){return opts.optionalmarker.start+maskPart+opts.optionalmarker.end }function splitFirstOptionalEndPart(maskPart){var optionalStartMarkers=0,optionalEndMarkers=0,mpl=maskPart.length; for(var i=0; i<mpl; i++){if(maskPart.charAt(i)==opts.optionalmarker.start){optionalStartMarkers++ }if(maskPart.charAt(i)==opts.optionalmarker.end){optionalEndMarkers++ }if(optionalStartMarkers>0&&optionalStartMarkers==optionalEndMarkers){break }}var maskParts=[maskPart.substring(0,i)]; if(i<mpl){maskParts.push(maskPart.substring(i+1,mpl)) }return maskParts }function splitFirstOptionalStartPart(maskPart){var mpl=maskPart.length; for(var i=0; i<mpl; i++){if(maskPart.charAt(i)==opts.optionalmarker.start){break }}var maskParts=[maskPart.substring(0,i)]; if(i<mpl){maskParts.push(maskPart.substring(i+1,mpl)) }return maskParts }function generateMask(maskPrefix,maskPart,metadata){var maskParts=splitFirstOptionalEndPart(maskPart); var newMask,maskTemplate; var masks=splitFirstOptionalStartPart(maskParts[0]); if(masks.length>1){newMask=maskPrefix+masks[0]+markOptional(masks[1])+(maskParts.length>1?maskParts[1]:""); if($.inArray(newMask,genmasks)==-1&&newMask!=""){genmasks.push(newMask); maskTemplate=getMaskTemplate(newMask); ms.push({mask:newMask,_buffer:maskTemplate.mask,buffer:maskTemplate.mask.slice(),tests:getTestingChain(newMask),lastValidPosition:-1,greedy:maskTemplate.greedy,repeat:maskTemplate.repeat,metadata:metadata}) }newMask=maskPrefix+masks[0]+(maskParts.length>1?maskParts[1]:""); if($.inArray(newMask,genmasks)==-1&&newMask!=""){genmasks.push(newMask); maskTemplate=getMaskTemplate(newMask); ms.push({mask:newMask,_buffer:maskTemplate.mask,buffer:maskTemplate.mask.slice(),tests:getTestingChain(newMask),lastValidPosition:-1,greedy:maskTemplate.greedy,repeat:maskTemplate.repeat,metadata:metadata}) }if(splitFirstOptionalStartPart(masks[1]).length>1){generateMask(maskPrefix+masks[0],masks[1]+maskParts[1],metadata) }if(maskParts.length>1&&splitFirstOptionalStartPart(maskParts[1]).length>1){generateMask(maskPrefix+masks[0]+markOptional(masks[1]),maskParts[1],metadata); generateMask(maskPrefix+masks[0],maskParts[1],metadata) }}else{newMask=maskPrefix+maskParts; if($.inArray(newMask,genmasks)==-1&&newMask!=""){genmasks.push(newMask); maskTemplate=getMaskTemplate(newMask); ms.push({mask:newMask,_buffer:maskTemplate.mask,buffer:maskTemplate.mask.slice(),tests:getTestingChain(newMask),lastValidPosition:-1,greedy:maskTemplate.greedy,repeat:maskTemplate.repeat,metadata:metadata}) }}}if($.isFunction(opts.mask)){opts.mask=opts.mask.call(this,opts) }if($.isArray(opts.mask)){$.each(opts.mask,function(ndx,msk){if(msk.mask!=undefined){generateMask("",msk.mask.toString(),msk) }else{generateMask("",msk.toString()) }})}else{generateMask("",opts.mask.toString()) }return opts.greedy?ms:ms.sort(function(a,b){return a.mask.length-b.mask.length })}var msie1x=typeof ScriptEngineMajorVersion==="function"?ScriptEngineMajorVersion():new Function("/*@cc_on return @_jscript_version; @*/")()>=10,iphone=navigator.userAgent.match(new RegExp("iphone","i"))!==null,android=navigator.userAgent.match(new RegExp("android.*safari.*","i"))!==null,androidchrome=navigator.userAgent.match(new RegExp("android.*chrome.*","i"))!==null,androidfirefox=navigator.userAgent.match(new RegExp("android.*firefox.*","i"))!==null,PasteEventType=isInputEventSupported("paste")?"paste":isInputEventSupported("input")?"input":"propertychange"; function maskScope(masksets,activeMasksetIndex,opts,actionObj){var isRTL=false,valueOnFocus=getActiveBuffer().join(""),$el,skipKeyPressEvent=false,skipInputEvent=false,ignorable=false; function getActiveMaskSet(){return masksets[activeMasksetIndex] }function getActiveTests(){return getActiveMaskSet()["tests"] }function getActiveBufferTemplate(){return getActiveMaskSet()["_buffer"] }function getActiveBuffer(){return getActiveMaskSet()["buffer"] }function isValid(pos,c,strict){strict=strict===true; function _isValid(position,activeMaskset,c,strict){var testPos=determineTestPosition(position),loopend=c?1:0,chrs="",buffer=activeMaskset.buffer; for(var i=activeMaskset.tests[testPos].cardinality; i>loopend; i--){chrs+=getBufferElement(buffer,testPos-(i-1)) }if(c){chrs+=c }return activeMaskset.tests[testPos].fn!=null?activeMaskset.tests[testPos].fn.test(chrs,buffer,position,strict,opts):(c==getBufferElement(activeMaskset._buffer.slice(),position,true)||c==opts.skipOptionalPartCharacter)?{refresh:true,c:getBufferElement(activeMaskset._buffer.slice(),position,true),pos:position}:false }function PostProcessResults(maskForwards,results){var hasValidActual=false; $.each(results,function(ndx,rslt){hasValidActual=$.inArray(rslt.activeMasksetIndex,maskForwards)==-1&&rslt.result!==false; if(hasValidActual){return false }});if(hasValidActual){results=$.map(results,function(rslt,ndx){if($.inArray(rslt.activeMasksetIndex,maskForwards)==-1){return rslt }else{masksets[rslt.activeMasksetIndex]["lastValidPosition"]=actualLVP }})}else{var lowestPos=-1,lowestIndex=-1,rsltValid; $.each(results,function(ndx,rslt){if($.inArray(rslt.activeMasksetIndex,maskForwards)!=-1&&rslt.result!==false&(lowestPos==-1||lowestPos>rslt.result.pos)){lowestPos=rslt.result.pos; lowestIndex=rslt.activeMasksetIndex }});results=$.map(results,function(rslt,ndx){if($.inArray(rslt.activeMasksetIndex,maskForwards)!=-1){if(rslt.result.pos==lowestPos){return rslt }else{if(rslt.result!==false){for(var i=pos; i<lowestPos; i++){rsltValid=_isValid(i,masksets[rslt.activeMasksetIndex],masksets[lowestIndex]["buffer"][i],true); if(rsltValid===false){masksets[rslt.activeMasksetIndex]["lastValidPosition"]=lowestPos-1; break}else{setBufferElement(masksets[rslt.activeMasksetIndex]["buffer"],i,masksets[lowestIndex]["buffer"][i],true); masksets[rslt.activeMasksetIndex]["lastValidPosition"]=i }}rsltValid=_isValid(lowestPos,masksets[rslt.activeMasksetIndex],c,true); if(rsltValid!==false){setBufferElement(masksets[rslt.activeMasksetIndex]["buffer"],lowestPos,c,true); masksets[rslt.activeMasksetIndex]["lastValidPosition"]=lowestPos }return rslt }}}})}return results }if(strict){var result=_isValid(pos,getActiveMaskSet(),c,strict); if(result===true){result={pos:pos} }return result }var results=[],result=false,currentActiveMasksetIndex=activeMasksetIndex,actualBuffer=getActiveBuffer().slice(),actualLVP=getActiveMaskSet()["lastValidPosition"],actualPrevious=seekPrevious(pos),maskForwards=[]; $.each(masksets,function(index,value){if(typeof(value)=="object"){activeMasksetIndex=index; var maskPos=pos; var lvp=getActiveMaskSet()["lastValidPosition"],rsltValid; if(lvp==actualLVP){if((maskPos-actualLVP)>1){for(var i=lvp==-1?0:lvp; i<maskPos; i++){rsltValid=_isValid(i,getActiveMaskSet(),actualBuffer[i],true); if(rsltValid===false){break }else{setBufferElement(getActiveBuffer(),i,actualBuffer[i],true); if(rsltValid===true){rsltValid={pos:i} }var newValidPosition=rsltValid.pos||i; if(getActiveMaskSet()["lastValidPosition"]<newValidPosition){getActiveMaskSet()["lastValidPosition"]=newValidPosition }}}}if(!isMask(maskPos)&&!_isValid(maskPos,getActiveMaskSet(),c,strict)){var maxForward=seekNext(maskPos)-maskPos; for(var fw=0; fw<maxForward; fw++){if(_isValid(++maskPos,getActiveMaskSet(),c,strict)!==false){break }}maskForwards.push(activeMasksetIndex) }}if(getActiveMaskSet()["lastValidPosition"]>=actualLVP||activeMasksetIndex==currentActiveMasksetIndex){if(maskPos>=0&&maskPos<getMaskLength()){result=_isValid(maskPos,getActiveMaskSet(),c,strict); if(result!==false){if(result===true){result={pos:maskPos} }var newValidPosition=result.pos||maskPos; if(getActiveMaskSet()["lastValidPosition"]<newValidPosition){getActiveMaskSet()["lastValidPosition"]=newValidPosition }}results.push({activeMasksetIndex:index,result:result}) }}}}); activeMasksetIndex=currentActiveMasksetIndex; return PostProcessResults(maskForwards,results) }function determineActiveMasksetIndex(){var currentMasksetIndex=activeMasksetIndex,highestValid={activeMasksetIndex:0,lastValidPosition:-1,next:-1}; $.each(masksets,function(index,value){if(typeof(value)=="object"){activeMasksetIndex=index; if(getActiveMaskSet()["lastValidPosition"]>highestValid.lastValidPosition){highestValid.activeMasksetIndex=index; highestValid.lastValidPosition=getActiveMaskSet()["lastValidPosition"]; highestValid.next=seekNext(getActiveMaskSet()["lastValidPosition"]) }else{if(getActiveMaskSet()["lastValidPosition"]==highestValid.lastValidPosition&&(highestValid.next==-1||highestValid.next>seekNext(getActiveMaskSet()["lastValidPosition"]))){highestValid.activeMasksetIndex=index; highestValid.lastValidPosition=getActiveMaskSet()["lastValidPosition"]; highestValid.next=seekNext(getActiveMaskSet()["lastValidPosition"]) }}}}); activeMasksetIndex=highestValid.lastValidPosition!=-1&&masksets[currentMasksetIndex]["lastValidPosition"]==highestValid.lastValidPosition?currentMasksetIndex:highestValid.activeMasksetIndex; if(currentMasksetIndex!=activeMasksetIndex){clearBuffer(getActiveBuffer(),seekNext(highestValid.lastValidPosition),getMaskLength()); getActiveMaskSet()["writeOutBuffer"]=true }$el.data("_inputmask")["activeMasksetIndex"]=activeMasksetIndex }function isMask(pos){var testPos=determineTestPosition(pos); var test=getActiveTests()[testPos]; return test!=undefined?test.fn:false }function determineTestPosition(pos){return pos%getActiveTests().length }function getMaskLength(){return opts.getMaskLength(getActiveBufferTemplate(),getActiveMaskSet()["greedy"],getActiveMaskSet()["repeat"],getActiveBuffer(),opts) }function seekNext(pos){var maskL=getMaskLength(); if(pos>=maskL){return maskL }var position=pos; while(++position<maskL&&!isMask(position)){}return position }function seekPrevious(pos){var position=pos; if(position<=0){return 0 }while(--position>0&&!isMask(position)){}return position }function setBufferElement(buffer,position,element,autoPrepare){if(autoPrepare){position=prepareBuffer(buffer,position) }var test=getActiveTests()[determineTestPosition(position)]; var elem=element; if(elem!=undefined&&test!=undefined){switch(test.casing){case"upper":elem=element.toUpperCase(); break; case"lower":elem=element.toLowerCase(); break}}buffer[position]=elem }function getBufferElement(buffer,position,autoPrepare){if(autoPrepare){position=prepareBuffer(buffer,position) }return buffer[position] }function prepareBuffer(buffer,position){var j; while(buffer[position]==undefined&&buffer.length<getMaskLength()){j=0; while(getActiveBufferTemplate()[j]!==undefined){buffer.push(getActiveBufferTemplate()[j++]) }}return position }function writeBuffer(input,buffer,caretPos){input._valueSet(buffer.join("")); if(caretPos!=undefined){caret(input,caretPos) }}function clearBuffer(buffer,start,end,stripNomasks){for(var i=start,maskL=getMaskLength(); i<end&&i<maskL; i++){if(stripNomasks===true){if(!isMask(i)){setBufferElement(buffer,i,"") }}else{setBufferElement(buffer,i,getBufferElement(getActiveBufferTemplate().slice(),i,true)) }}}function setReTargetPlaceHolder(buffer,pos){var testPos=determineTestPosition(pos); setBufferElement(buffer,pos,getBufferElement(getActiveBufferTemplate(),testPos)) }function getPlaceHolder(pos){return opts.placeholder.charAt(pos%opts.placeholder.length) }function checkVal(input,writeOut,strict,nptvl,intelliCheck){var inputValue=nptvl!=undefined?nptvl.slice():truncateInput(input._valueGet()).split(""); $.each(masksets,function(ndx,ms){if(typeof(ms)=="object"){ms.buffer=ms._buffer.slice(); ms.lastValidPosition=-1; ms.p=-1 }});if(strict!==true){activeMasksetIndex=0 }if(writeOut){input._valueSet("") }var ml=getMaskLength(); $.each(inputValue,function(ndx,charCode){if(intelliCheck===true){var p=getActiveMaskSet()["p"],lvp=p==-1?p:seekPrevious(p),pos=lvp==-1?ndx:seekNext(lvp); if($.inArray(charCode,getActiveBufferTemplate().slice(lvp+1,pos))==-1){keypressEvent.call(input,undefined,true,charCode.charCodeAt(0),writeOut,strict,ndx) }}else{keypressEvent.call(input,undefined,true,charCode.charCodeAt(0),writeOut,strict,ndx); strict=strict||(ndx>0&&ndx>getActiveMaskSet()["p"]) }});if(strict===true&&getActiveMaskSet()["p"]!=-1){getActiveMaskSet()["lastValidPosition"]=seekPrevious(getActiveMaskSet()["p"]) }}function escapeRegex(str){return $.inputmask.escapeRegex.call(this,str) }function truncateInput(inputValue){return inputValue.replace(new RegExp("("+escapeRegex(getActiveBufferTemplate().join(""))+")*$"),"") }function clearOptionalTail(input){var buffer=getActiveBuffer(),tmpBuffer=buffer.slice(),testPos,pos; for(var pos=tmpBuffer.length-1; pos>=0; pos--){var testPos=determineTestPosition(pos); if(getActiveTests()[testPos].optionality){if(!isMask(pos)||!isValid(pos,buffer[pos],true)){tmpBuffer.pop() }else{break }}else{break }}writeBuffer(input,tmpBuffer) }function unmaskedvalue($input,skipDatepickerCheck){if(getActiveTests()&&(skipDatepickerCheck===true||!$input.hasClass("hasDatepicker"))){var umValue=$.map(getActiveBuffer(),function(element,index){return isMask(index)&&isValid(index,element,true)?element:null });var unmaskedValue=(isRTL?umValue.reverse():umValue).join(""); return opts.onUnMask!=undefined?opts.onUnMask.call($input,getActiveBuffer().join(""),unmaskedValue,opts):unmaskedValue }else{return $input[0]._valueGet() }}function TranslatePosition(pos){if(isRTL&&typeof pos=="number"&&(!opts.greedy||opts.placeholder!="")){var bffrLght=getActiveBuffer().length; pos=bffrLght-pos }return pos }function caret(input,begin,end){var npt=input.jquery&&input.length>0?input[0]:input,range; if(typeof begin=="number"){begin=TranslatePosition(begin); end=TranslatePosition(end); if(!$(npt).is(":visible")){return }end=(typeof end=="number")?end:begin; npt.scrollLeft=npt.scrollWidth; if(opts.insertMode==false&&begin==end){end++ }if(npt.setSelectionRange){npt.selectionStart=begin; npt.selectionEnd=android?begin:end }else{if(npt.createTextRange){range=npt.createTextRange(); range.collapse(true); range.moveEnd("character",end); range.moveStart("character",begin); range.select() }}}else{if(!$(input).is(":visible")){return{begin:0,end:0} }if(npt.setSelectionRange){begin=npt.selectionStart; end=npt.selectionEnd }else{if(document.selection&&document.selection.createRange){range=document.selection.createRange(); begin=0-range.duplicate().moveStart("character",-100000); end=begin+range.text.length }}begin=TranslatePosition(begin); end=TranslatePosition(end); return{begin:begin,end:end} }}function isComplete(buffer){if(opts.repeat=="*"){return undefined }var complete=false,highestValidPosition=0,currentActiveMasksetIndex=activeMasksetIndex; $.each(masksets,function(ndx,ms){if(typeof(ms)=="object"){activeMasksetIndex=ndx; var aml=seekPrevious(getMaskLength()); if(ms.lastValidPosition>=highestValidPosition&&ms.lastValidPosition==aml){var msComplete=true; for(var i=0; i<=aml; i++){var mask=isMask(i),testPos=determineTestPosition(i); if((mask&&(buffer[i]==undefined||buffer[i]==getPlaceHolder(i)))||(!mask&&buffer[i]!=getActiveBufferTemplate()[testPos])){msComplete=false; break}}complete=complete||msComplete; if(complete){return false }}highestValidPosition=ms.lastValidPosition }});activeMasksetIndex=currentActiveMasksetIndex; return complete }function isSelection(begin,end){return isRTL?(begin-end)>1||((begin-end)==1&&opts.insertMode):(end-begin)>1||((end-begin)==1&&opts.insertMode) }function installEventRuler(npt){var events=$._data(npt).events; $.each(events,function(eventType,eventHandlers){$.each(eventHandlers,function(ndx,eventHandler){if(eventHandler.namespace=="inputmask"){if(eventHandler.type!="setvalue"){var handler=eventHandler.handler; eventHandler.handler=function(e){if(this.readOnly||this.disabled){e.preventDefault }else{return handler.apply(this,arguments) }}}}}) })}function patchValueProperty(npt){function PatchValhook(type){if($.valHooks[type]==undefined||$.valHooks[type].inputmaskpatch!=true){var valueGet=$.valHooks[type]&&$.valHooks[type].get?$.valHooks[type].get:function(elem){return elem.value };var valueSet=$.valHooks[type]&&$.valHooks[type].set?$.valHooks[type].set:function(elem,value){elem.value=value; return elem };$.valHooks[type]={get:function(elem){var $elem=$(elem); if($elem.data("_inputmask")){if($elem.data("_inputmask")["opts"].autoUnmask){return $elem.inputmask("unmaskedvalue") }else{var result=valueGet(elem),inputData=$elem.data("_inputmask"),masksets=inputData.masksets,activeMasksetIndex=inputData.activeMasksetIndex; return result!=masksets[activeMasksetIndex]["_buffer"].join("")?result:""}}else{return valueGet(elem) }},set:function(elem,value){var $elem=$(elem); var result=valueSet(elem,value); if($elem.data("_inputmask")){$elem.triggerHandler("setvalue.inputmask") }return result },inputmaskpatch:true} }}var valueProperty; if(Object.getOwnPropertyDescriptor){valueProperty=Object.getOwnPropertyDescriptor(npt,"value") }if(valueProperty&&valueProperty.get){if(!npt._valueGet){var valueGet=valueProperty.get; var valueSet=valueProperty.set; npt._valueGet=function(){return isRTL?valueGet.call(this).split("").reverse().join(""):valueGet.call(this) };npt._valueSet=function(value){valueSet.call(this,isRTL?value.split("").reverse().join(""):value) };Object.defineProperty(npt,"value",{get:function(){var $self=$(this),inputData=$(this).data("_inputmask"),masksets=inputData.masksets,activeMasksetIndex=inputData.activeMasksetIndex; return inputData&&inputData.opts.autoUnmask?$self.inputmask("unmaskedvalue"):valueGet.call(this)!=masksets[activeMasksetIndex]["_buffer"].join("")?valueGet.call(this):""},set:function(value){valueSet.call(this,value); $(this).triggerHandler("setvalue.inputmask") }})}}else{if(document.__lookupGetter__&&npt.__lookupGetter__("value")){if(!npt._valueGet){var valueGet=npt.__lookupGetter__("value"); var valueSet=npt.__lookupSetter__("value"); npt._valueGet=function(){return isRTL?valueGet.call(this).split("").reverse().join(""):valueGet.call(this) };npt._valueSet=function(value){valueSet.call(this,isRTL?value.split("").reverse().join(""):value) };npt.__defineGetter__("value",function(){var $self=$(this),inputData=$(this).data("_inputmask"),masksets=inputData.masksets,activeMasksetIndex=inputData.activeMasksetIndex; return inputData&&inputData.opts.autoUnmask?$self.inputmask("unmaskedvalue"):valueGet.call(this)!=masksets[activeMasksetIndex]["_buffer"].join("")?valueGet.call(this):""});npt.__defineSetter__("value",function(value){valueSet.call(this,value); $(this).triggerHandler("setvalue.inputmask") })}}else{if(!npt._valueGet){npt._valueGet=function(){return isRTL?this.value.split("").reverse().join(""):this.value };npt._valueSet=function(value){this.value=isRTL?value.split("").reverse().join(""):value }}PatchValhook(npt.type) }}}function shiftL(start,end,c,maskJumps){var buffer=getActiveBuffer(); if(maskJumps!==false){while(!isMask(start)&&start-1>=0){start-- }}for(var i=start; i<end&&i<getMaskLength(); i++){if(isMask(i)){setReTargetPlaceHolder(buffer,i); var j=seekNext(i); var p=getBufferElement(buffer,j); if(p!=getPlaceHolder(j)){if(j<getMaskLength()&&isValid(i,p,true)!==false&&getActiveTests()[determineTestPosition(i)].def==getActiveTests()[determineTestPosition(j)].def){setBufferElement(buffer,i,p,true) }else{if(isMask(i)){break }}}}else{setReTargetPlaceHolder(buffer,i) }}if(c!=undefined){setBufferElement(buffer,seekPrevious(end),c) }if(getActiveMaskSet()["greedy"]==false){var trbuffer=truncateInput(buffer.join("")).split(""); buffer.length=trbuffer.length; for(var i=0,bl=buffer.length; i<bl;i++){buffer[i]=trbuffer[i] }if(buffer.length==0){getActiveMaskSet()["buffer"]=getActiveBufferTemplate().slice() }}return start }function shiftR(start,end,c){var buffer=getActiveBuffer(); if(getBufferElement(buffer,start,true)!=getPlaceHolder(start)){for(var i=seekPrevious(end); i>start&&i>=0; i--){if(isMask(i)){var j=seekPrevious(i); var t=getBufferElement(buffer,j); if(t!=getPlaceHolder(j)){if(isValid(j,t,true)!==false&&getActiveTests()[determineTestPosition(i)].def==getActiveTests()[determineTestPosition(j)].def){setBufferElement(buffer,i,t,true); setReTargetPlaceHolder(buffer,j) }}}else{setReTargetPlaceHolder(buffer,i) }}}if(c!=undefined&&getBufferElement(buffer,start)==getPlaceHolder(start)){setBufferElement(buffer,start,c) }var lengthBefore=buffer.length; if(getActiveMaskSet()["greedy"]==false){var trbuffer=truncateInput(buffer.join("")).split(""); buffer.length=trbuffer.length; for(var i=0,bl=buffer.length; i<bl;i++){buffer[i]=trbuffer[i] }if(buffer.length==0){getActiveMaskSet()["buffer"]=getActiveBufferTemplate().slice() }}return end-(lengthBefore-buffer.length) }function HandleRemove(input,k,pos){if(opts.numericInput||isRTL){switch(k){case opts.keyCode.BACKSPACE:k=opts.keyCode.DELETE; break; case opts.keyCode.DELETE:k=opts.keyCode.BACKSPACE; break}if(isRTL){var pend=pos.end; pos.end=pos.begin; pos.begin=pend }}var isSelection=true; if(pos.begin==pos.end){var posBegin=k==opts.keyCode.BACKSPACE?pos.begin-1:pos.begin; if(opts.isNumeric&&opts.radixPoint!=""&&getActiveBuffer()[posBegin]==opts.radixPoint){pos.begin=(getActiveBuffer().length-1==posBegin)?pos.begin:k==opts.keyCode.BACKSPACE?posBegin:seekNext(posBegin); pos.end=pos.begin }isSelection=false; if(k==opts.keyCode.BACKSPACE){pos.begin-- }else{if(k==opts.keyCode.DELETE){pos.end++ }}}else{if(pos.end-pos.begin==1&&!opts.insertMode){isSelection=false; if(k==opts.keyCode.BACKSPACE){pos.begin-- }}}clearBuffer(getActiveBuffer(),pos.begin,pos.end); var ml=getMaskLength(); if(opts.greedy==false){shiftL(pos.begin,ml,undefined,!isRTL&&(k==opts.keyCode.BACKSPACE&&!isSelection)) }else{var newpos=pos.begin; for(var i=pos.begin; i<pos.end; i++){if(isMask(i)||!isSelection){newpos=shiftL(pos.begin,ml,undefined,!isRTL&&(k==opts.keyCode.BACKSPACE&&!isSelection)) }}if(!isSelection){pos.begin=newpos }}var firstMaskPos=seekNext(-1); clearBuffer(getActiveBuffer(),pos.begin,pos.end,true); checkVal(input,false,masksets[1]==undefined||firstMaskPos>=pos.end,getActiveBuffer()); if(getActiveMaskSet()["lastValidPosition"]<firstMaskPos){getActiveMaskSet()["lastValidPosition"]=-1; getActiveMaskSet()["p"]=firstMaskPos }else{getActiveMaskSet()["p"]=pos.begin }}function keydownEvent(e){skipKeyPressEvent=false; var input=this,$input=$(input),k=e.keyCode,pos=caret(input); if(k==opts.keyCode.BACKSPACE||k==opts.keyCode.DELETE||(iphone&&k==127)||e.ctrlKey&&k==88){e.preventDefault(); if(k==88){valueOnFocus=getActiveBuffer().join("") }HandleRemove(input,k,pos); determineActiveMasksetIndex(); writeBuffer(input,getActiveBuffer(),getActiveMaskSet()["p"]); if(input._valueGet()==getActiveBufferTemplate().join("")){$input.trigger("cleared") }if(opts.showTooltip){$input.prop("title",getActiveMaskSet()["mask"]) }}else{if(k==opts.keyCode.END||k==opts.keyCode.PAGE_DOWN){setTimeout(function(){var caretPos=seekNext(getActiveMaskSet()["lastValidPosition"]); if(!opts.insertMode&&caretPos==getMaskLength()&&!e.shiftKey){caretPos-- }caret(input,e.shiftKey?pos.begin:caretPos,caretPos) },0)}else{if((k==opts.keyCode.HOME&&!e.shiftKey)||k==opts.keyCode.PAGE_UP){caret(input,0,e.shiftKey?pos.begin:0) }else{if(k==opts.keyCode.ESCAPE||(k==90&&e.ctrlKey)){checkVal(input,true,false,valueOnFocus.split("")); $input.click() }else{if(k==opts.keyCode.INSERT&&!(e.shiftKey||e.ctrlKey)){opts.insertMode=!opts.insertMode; caret(input,!opts.insertMode&&pos.begin==getMaskLength()?pos.begin-1:pos.begin) }else{if(opts.insertMode==false&&!e.shiftKey){if(k==opts.keyCode.RIGHT){setTimeout(function(){var caretPos=caret(input); caret(input,caretPos.begin) },0)}else{if(k==opts.keyCode.LEFT){setTimeout(function(){var caretPos=caret(input); caret(input,caretPos.begin-1) },0)}}}}}}}}var currentCaretPos=caret(input); if(opts.onKeyDown.call(this,e,getActiveBuffer(),opts)===true){caret(input,currentCaretPos.begin,currentCaretPos.end) }ignorable=$.inArray(k,opts.ignorables)!=-1 }function keypressEvent(e,checkval,k,writeOut,strict,ndx){if(k==undefined&&skipKeyPressEvent){return false }skipKeyPressEvent=true; var input=this,$input=$(input); e=e||window.event; var k=checkval?k:(e.which||e.charCode||e.keyCode); if(checkval!==true&&(!(e.ctrlKey&&e.altKey)&&(e.ctrlKey||e.metaKey||ignorable))){return true }else{if(k){if(checkval!==true&&k==46&&e.shiftKey==false&&opts.radixPoint==","){k=44 }var pos,results,result,c=String.fromCharCode(k); if(checkval){var pcaret=strict?ndx:getActiveMaskSet()["lastValidPosition"]+1; pos={begin:pcaret,end:pcaret} }else{pos=caret(input) }var isSlctn=isSelection(pos.begin,pos.end),initialIndex=activeMasksetIndex; if(isSlctn){$.each(masksets,function(ndx,lmnt){if(typeof(lmnt)=="object"){activeMasksetIndex=ndx; getActiveMaskSet()["undoBuffer"]=getActiveBuffer().join("") }});activeMasksetIndex=initialIndex; HandleRemove(input,opts.keyCode.DELETE,pos); if(!opts.insertMode){$.each(masksets,function(ndx,lmnt){if(typeof(lmnt)=="object"){activeMasksetIndex=ndx; shiftR(pos.begin,getMaskLength()); getActiveMaskSet()["lastValidPosition"]=seekNext(getActiveMaskSet()["lastValidPosition"]) }})}activeMasksetIndex=initialIndex }var radixPosition=getActiveBuffer().join("").indexOf(opts.radixPoint); if(opts.isNumeric&&checkval!==true&&radixPosition!=-1){if(opts.greedy&&pos.begin<=radixPosition){pos.begin=seekPrevious(pos.begin); pos.end=pos.begin }else{if(c==opts.radixPoint){pos.begin=radixPosition; pos.end=pos.begin }}}var p=pos.begin; results=isValid(p,c,strict); if(strict===true){results=[{activeMasksetIndex:activeMasksetIndex,result:results}] }var minimalForwardPosition=-1; $.each(results,function(index,result){activeMasksetIndex=result.activeMasksetIndex; getActiveMaskSet()["writeOutBuffer"]=true; var np=result.result; if(np!==false){var refresh=false,buffer=getActiveBuffer(); if(np!==true){refresh=np.refresh; p=np.pos!=undefined?np.pos:p; c=np.c!=undefined?np.c:c }if(refresh!==true){if(opts.insertMode==true){var lastUnmaskedPosition=getMaskLength(); var bfrClone=buffer.slice(); while(getBufferElement(bfrClone,lastUnmaskedPosition,true)!=getPlaceHolder(lastUnmaskedPosition)&&lastUnmaskedPosition>=p){lastUnmaskedPosition=lastUnmaskedPosition==0?-1:seekPrevious(lastUnmaskedPosition) }if(lastUnmaskedPosition>=p){shiftR(p,getMaskLength(),c); var lvp=getActiveMaskSet()["lastValidPosition"],nlvp=seekNext(lvp); if(nlvp!=getMaskLength()&&lvp>=p&&(getBufferElement(getActiveBuffer().slice(),nlvp,true)!=getPlaceHolder(nlvp))){getActiveMaskSet()["lastValidPosition"]=nlvp }}else{getActiveMaskSet()["writeOutBuffer"]=false }}else{setBufferElement(buffer,p,c,true) }if(minimalForwardPosition==-1||minimalForwardPosition>seekNext(p)){minimalForwardPosition=seekNext(p) }}else{if(!strict){var nextPos=p<getMaskLength()?p+1:p; if(minimalForwardPosition==-1||minimalForwardPosition>nextPos){minimalForwardPosition=nextPos }}}if(minimalForwardPosition>getActiveMaskSet()["p"]){getActiveMaskSet()["p"]=minimalForwardPosition }}});if(strict!==true){activeMasksetIndex=initialIndex; determineActiveMasksetIndex() }if(writeOut!==false){$.each(results,function(ndx,rslt){if(rslt.activeMasksetIndex==activeMasksetIndex){result=rslt; return false }});if(result!=undefined){var self=this; setTimeout(function(){opts.onKeyValidation.call(self,result.result,opts) },0);if(getActiveMaskSet()["writeOutBuffer"]&&result.result!==false){var buffer=getActiveBuffer(); var newCaretPosition; if(checkval){newCaretPosition=undefined }else{if(opts.numericInput){if(p>radixPosition){newCaretPosition=seekPrevious(minimalForwardPosition) }else{if(c==opts.radixPoint){newCaretPosition=minimalForwardPosition-1 }else{newCaretPosition=seekPrevious(minimalForwardPosition-1) }}}else{newCaretPosition=minimalForwardPosition }}writeBuffer(input,buffer,newCaretPosition); if(checkval!==true){setTimeout(function(){if(isComplete(buffer)===true){$input.trigger("complete") }skipInputEvent=true; $input.trigger("input") },0)}}else{if(isSlctn){getActiveMaskSet()["buffer"]=getActiveMaskSet()["undoBuffer"].split("") }}}}if(opts.showTooltip){$input.prop("title",getActiveMaskSet()["mask"]) }if(e){e.preventDefault?e.preventDefault():e.returnValue=false }}}}function keyupEvent(e){var $input=$(this),input=this,k=e.keyCode,buffer=getActiveBuffer(); opts.onKeyUp.call(this,e,buffer,opts); if(k==opts.keyCode.TAB&&opts.showMaskOnFocus){if($input.hasClass("focus.inputmask")&&input._valueGet().length==0){buffer=getActiveBufferTemplate().slice(); writeBuffer(input,buffer); caret(input,0); valueOnFocus=getActiveBuffer().join("") }else{writeBuffer(input,buffer); if(buffer.join("")==getActiveBufferTemplate().join("")&&$.inArray(opts.radixPoint,buffer)!=-1){caret(input,TranslatePosition(0)); $input.click() }else{caret(input,TranslatePosition(0),TranslatePosition(getMaskLength())) }}}}function pasteEvent(e){if(skipInputEvent===true&&e.type=="input"){skipInputEvent=false; return true }var input=this,$input=$(input); if(e.type=="propertychange"&&input._valueGet().length<=getMaskLength()){return true }setTimeout(function(){var pasteValue=opts.onBeforePaste!=undefined?opts.onBeforePaste.call(input,input._valueGet(),opts):input._valueGet(); checkVal(input,false,false,pasteValue.split(""),true); writeBuffer(input,getActiveBuffer()); if(isComplete(getActiveBuffer())===true){$input.trigger("complete") }$input.click() },0)}function mobileInputEvent(e){var input=this,$input=$(input); var caretPos=caret(input),currentValue=input._valueGet(); if((getActiveBuffer().length-currentValue.length)==1&&currentValue.charAt(caretPos.begin)!=getActiveBuffer()[caretPos.begin]&&currentValue.charAt(caretPos.begin+1)!=getActiveBuffer()[caretPos.begin]&&!isMask(caretPos.begin)){e.keyCode=opts.keyCode.BACKSPACE; keydownEvent.call(input,e) }else{checkVal(input,false,false); writeBuffer(input,getActiveBuffer()); if(isComplete(getActiveBuffer())===true){$input.trigger("complete") }$input.click() }e.preventDefault() }function mask(el){$el=$(el); if($el.is(":input")){$el.data("_inputmask",{masksets:masksets,activeMasksetIndex:activeMasksetIndex,opts:opts,isRTL:false}); if(opts.showTooltip){$el.prop("title",getActiveMaskSet()["mask"]) }getActiveMaskSet()["greedy"]=getActiveMaskSet()["greedy"]?getActiveMaskSet()["greedy"]:getActiveMaskSet()["repeat"]==0; if($el.attr("maxLength")!=null){var maxLength=$el.prop("maxLength"); if(maxLength>-1){$.each(masksets,function(ndx,ms){if(typeof(ms)=="object"){if(ms.repeat=="*"){ms.repeat=maxLength }}})}if(getMaskLength()>=maxLength&&maxLength>-1){if(maxLength<getActiveBufferTemplate().length){getActiveBufferTemplate().length=maxLength }if(getActiveMaskSet()["greedy"]==false){getActiveMaskSet()["repeat"]=Math.round(maxLength/getActiveBufferTemplate().length) }$el.prop("maxLength",getMaskLength()*2) }}patchValueProperty(el); if(opts.numericInput){opts.isNumeric=opts.numericInput }if(el.dir=="rtl"||(opts.numericInput&&opts.rightAlignNumerics)||(opts.isNumeric&&opts.rightAlignNumerics)){$el.css("text-align","right") }if(el.dir=="rtl"||opts.numericInput){el.dir="ltr"; $el.removeAttr("dir"); var inputData=$el.data("_inputmask"); inputData.isRTL=true; $el.data("_inputmask",inputData); isRTL=true }$el.unbind(".inputmask"); $el.removeClass("focus.inputmask"); $el.closest("form").bind("submit",function(){if(valueOnFocus!=getActiveBuffer().join("")){$el.change() }}).bind("reset",function(){setTimeout(function(){$el.trigger("setvalue") },0)}); $el.bind("mouseenter.inputmask",function(){var $input=$(this),input=this; if(!$input.hasClass("focus.inputmask")&&opts.showMaskOnHover){if(input._valueGet()!=getActiveBuffer().join("")){writeBuffer(input,getActiveBuffer()) }}}).bind("blur.inputmask",function(){var $input=$(this),input=this,nptValue=input._valueGet(),buffer=getActiveBuffer(); $input.removeClass("focus.inputmask"); if(valueOnFocus!=getActiveBuffer().join("")){$input.change() }if(opts.clearMaskOnLostFocus&&nptValue!=""){if(nptValue==getActiveBufferTemplate().join("")){input._valueSet("") }else{clearOptionalTail(input) }}if(isComplete(buffer)===false){$input.trigger("incomplete"); if(opts.clearIncomplete){$.each(masksets,function(ndx,ms){if(typeof(ms)=="object"){ms.buffer=ms._buffer.slice(); ms.lastValidPosition=-1 }});activeMasksetIndex=0; if(opts.clearMaskOnLostFocus){input._valueSet("") }else{buffer=getActiveBufferTemplate().slice(); writeBuffer(input,buffer) }}}}).bind("focus.inputmask",function(){var $input=$(this),input=this,nptValue=input._valueGet(); if(opts.showMaskOnFocus&&!$input.hasClass("focus.inputmask")&&(!opts.showMaskOnHover||(opts.showMaskOnHover&&nptValue==""))){if(input._valueGet()!=getActiveBuffer().join("")){writeBuffer(input,getActiveBuffer(),seekNext(getActiveMaskSet()["lastValidPosition"])) }}$input.addClass("focus.inputmask"); valueOnFocus=getActiveBuffer().join("") }).bind("mouseleave.inputmask",function(){var $input=$(this),input=this; if(opts.clearMaskOnLostFocus){if(!$input.hasClass("focus.inputmask")&&input._valueGet()!=$input.attr("placeholder")){if(input._valueGet()==getActiveBufferTemplate().join("")||input._valueGet()==""){input._valueSet("") }else{clearOptionalTail(input) }}}}).bind("click.inputmask",function(){var input=this; setTimeout(function(){var selectedCaret=caret(input),buffer=getActiveBuffer(); if(selectedCaret.begin==selectedCaret.end){var clickPosition=isRTL?TranslatePosition(selectedCaret.begin):selectedCaret.begin,lvp=getActiveMaskSet()["lastValidPosition"],lastPosition; if(opts.isNumeric){lastPosition=opts.skipRadixDance===false&&opts.radixPoint!=""&&$.inArray(opts.radixPoint,buffer)!=-1?(opts.numericInput?seekNext($.inArray(opts.radixPoint,buffer)):$.inArray(opts.radixPoint,buffer)):seekNext(lvp) }else{lastPosition=seekNext(lvp) }if(clickPosition<lastPosition){if(isMask(clickPosition)){caret(input,clickPosition) }else{caret(input,seekNext(clickPosition)) }}else{caret(input,lastPosition) }}},0) }).bind("dblclick.inputmask",function(){var input=this; setTimeout(function(){caret(input,0,seekNext(getActiveMaskSet()["lastValidPosition"])) },0)}).bind(PasteEventType+".inputmask dragdrop.inputmask drop.inputmask",pasteEvent).bind("setvalue.inputmask",function(){var input=this; checkVal(input,true); valueOnFocus=getActiveBuffer().join(""); if(input._valueGet()==getActiveBufferTemplate().join("")){input._valueSet("") }}).bind("complete.inputmask",opts.oncomplete).bind("incomplete.inputmask",opts.onincomplete).bind("cleared.inputmask",opts.oncleared); $el.bind("keydown.inputmask",keydownEvent).bind("keypress.inputmask",keypressEvent).bind("keyup.inputmask",keyupEvent); if(android||androidfirefox||androidchrome){$el.unbind("keydown.inputmask",keydownEvent).unbind("keypress.inputmask",keypressEvent).unbind("keyup.inputmask",keyupEvent); if(PasteEventType=="input"){$el.unbind(PasteEventType+".inputmask") }$el.bind("input.inputmask",mobileInputEvent) }if(msie1x){$el.bind("input.inputmask",pasteEvent) }var initialValue=opts.onBeforeMask!=undefined?opts.onBeforeMask.call(el,el._valueGet(),opts):el._valueGet(); checkVal(el,true,false,initialValue.split("")); valueOnFocus=getActiveBuffer().join(""); var activeElement; try{activeElement=document.activeElement }catch(e){}if(activeElement===el){$el.addClass("focus.inputmask"); caret(el,seekNext(getActiveMaskSet()["lastValidPosition"])) }else{if(opts.clearMaskOnLostFocus){if(getActiveBuffer().join("")==getActiveBufferTemplate().join("")){el._valueSet("") }else{clearOptionalTail(el) }}else{writeBuffer(el,getActiveBuffer()) }}installEventRuler(el) }}if(actionObj!=undefined){switch(actionObj.action){case"isComplete":return isComplete(actionObj.buffer); case"unmaskedvalue":isRTL=actionObj["$input"].data("_inputmask")["isRTL"]; return unmaskedvalue(actionObj["$input"],actionObj.skipDatepickerCheck); case"mask":mask(actionObj.el); break; case"format":$el=$({}); $el.data("_inputmask",{masksets:masksets,activeMasksetIndex:activeMasksetIndex,opts:opts,isRTL:opts.numericInput}); if(opts.numericInput){opts.isNumeric=opts.numericInput; isRTL=true }checkVal($el,false,false,actionObj.value.split(""),true); return getActiveBuffer().join(""); case"isValid":$el=$({}); $el.data("_inputmask",{masksets:masksets,activeMasksetIndex:activeMasksetIndex,opts:opts,isRTL:opts.numericInput}); if(opts.numericInput){opts.isNumeric=opts.numericInput; isRTL=true }checkVal($el,false,true,actionObj.value.split("")); return isComplete(getActiveBuffer()) }}}$.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},escapeChar:"\\",mask:null,oncomplete:$.noop,onincomplete:$.noop,oncleared:$.noop,repeat:0,greedy:true,autoUnmask:false,clearMaskOnLostFocus:true,insertMode:true,clearIncomplete:false,aliases:{},onKeyUp:$.noop,onKeyDown:$.noop,onBeforeMask:undefined,onBeforePaste:undefined,onUnMask:undefined,showMaskOnFocus:true,showMaskOnHover:true,onKeyValidation:$.noop,skipOptionalPartCharacter:" ",showTooltip:false,numericInput:false,isNumeric:false,radixPoint:"",skipRadixDance:false,rightAlignNumerics:true,definitions:{"9":{validator:"[0-9]",cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044F\u0401\u0451]",cardinality:1,definitionSymbol:"*"},"*":{validator:"[A-Za-z\u0410-\u044F\u0401\u04510-9]",cardinality:1}},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],getMaskLength:function(buffer,greedy,repeat,currentBuffer,opts){var calculatedLength=buffer.length; if(!greedy){if(repeat=="*"){calculatedLength=currentBuffer.length+1 }else{if(repeat>1){calculatedLength+=(buffer.length*(repeat-1)) }}}return calculatedLength }},escapeRegex:function(str){var specials=["/",".","*","+","?","|","(",")","[","]","{","}","\\"]; return str.replace(new RegExp("(\\"+specials.join("|\\")+")","gim"),"\\$1") },format:function(value,options){var opts=$.extend(true,{},$.inputmask.defaults,options); resolveAlias(opts.alias,options,opts); return maskScope(generateMaskSets(opts),0,opts,{action:"format",value:value}) },isValid:function(value,options){var opts=$.extend(true,{},$.inputmask.defaults,options); resolveAlias(opts.alias,options,opts); return maskScope(generateMaskSets(opts),0,opts,{action:"isValid",value:value}) }};$.fn.inputmask=function(fn,options){var opts=$.extend(true,{},$.inputmask.defaults,options),masksets,activeMasksetIndex=0; if(typeof fn==="string"){switch(fn){case"mask":resolveAlias(opts.alias,options,opts); masksets=generateMaskSets(opts); if(masksets.length==0){return this }return this.each(function(){maskScope($.extend(true,{},masksets),0,opts,{action:"mask",el:this}) });case"unmaskedvalue":var $input=$(this),input=this; if($input.data("_inputmask")){masksets=$input.data("_inputmask")["masksets"]; activeMasksetIndex=$input.data("_inputmask")["activeMasksetIndex"]; opts=$input.data("_inputmask")["opts"]; return maskScope(masksets,activeMasksetIndex,opts,{action:"unmaskedvalue","$input":$input}) }else{return $input.val() }case"remove":return this.each(function(){var $input=$(this),input=this; if($input.data("_inputmask")){masksets=$input.data("_inputmask")["masksets"]; activeMasksetIndex=$input.data("_inputmask")["activeMasksetIndex"]; opts=$input.data("_inputmask")["opts"]; input._valueSet(maskScope(masksets,activeMasksetIndex,opts,{action:"unmaskedvalue","$input":$input,skipDatepickerCheck:true})); $input.removeData("_inputmask"); $input.unbind(".inputmask"); $input.removeClass("focus.inputmask"); var valueProperty; if(Object.getOwnPropertyDescriptor){valueProperty=Object.getOwnPropertyDescriptor(input,"value") }if(valueProperty&&valueProperty.get){if(input._valueGet){Object.defineProperty(input,"value",{get:input._valueGet,set:input._valueSet}) }}else{if(document.__lookupGetter__&&input.__lookupGetter__("value")){if(input._valueGet){input.__defineGetter__("value",input._valueGet); input.__defineSetter__("value",input._valueSet) }}}try{delete input._valueGet; delete input._valueSet }catch(e){input._valueGet=undefined; input._valueSet=undefined }}});break; case"getemptymask":if(this.data("_inputmask")){masksets=this.data("_inputmask")["masksets"]; activeMasksetIndex=this.data("_inputmask")["activeMasksetIndex"]; return masksets[activeMasksetIndex]["_buffer"].join("") }else{return""}case"hasMaskedValue":return this.data("_inputmask")?!this.data("_inputmask")["opts"].autoUnmask:false; case"isComplete":masksets=this.data("_inputmask")["masksets"]; activeMasksetIndex=this.data("_inputmask")["activeMasksetIndex"]; opts=this.data("_inputmask")["opts"]; return maskScope(masksets,activeMasksetIndex,opts,{action:"isComplete",buffer:this[0]._valueGet().split("")}); case"getmetadata":if(this.data("_inputmask")){masksets=this.data("_inputmask")["masksets"]; activeMasksetIndex=this.data("_inputmask")["activeMasksetIndex"]; return masksets[activeMasksetIndex]["metadata"] }else{return undefined }default:if(!resolveAlias(fn,options,opts)){opts.mask=fn }masksets=generateMaskSets(opts); if(masksets.length==0){return this }return this.each(function(){maskScope($.extend(true,{},masksets),activeMasksetIndex,opts,{action:"mask",el:this}) });break }}else{if(typeof fn=="object"){opts=$.extend(true,{},$.inputmask.defaults,fn); resolveAlias(opts.alias,fn,opts); masksets=generateMaskSets(opts); if(masksets.length==0){return this }return this.each(function(){maskScope($.extend(true,{},masksets),activeMasksetIndex,opts,{action:"mask",el:this}) })}else{if(fn==undefined){return this.each(function(){var attrOptions=$(this).attr("data-inputmask"); if(attrOptions&&attrOptions!=""){try{attrOptions=attrOptions.replace(new RegExp("'","g"),'"'); var dataoptions=$.parseJSON("{"+attrOptions+"}"); $.extend(true,dataoptions,options); opts=$.extend(true,{},$.inputmask.defaults,dataoptions); resolveAlias(opts.alias,dataoptions,opts); opts.alias=undefined; $(this).inputmask(opts) }catch(ex){}}}) }}}}}})(jQuery);


/*! A fix for the iOS orientationchange zoom bug. Script by @scottjehl, rebound by @wilto.MIT / GPLv2 License.*/
;(function(a){function m(){d.setAttribute("content",g),h=!0}function n(){d.setAttribute("content",f),h=!1}function o(b){l=b.accelerationIncludingGravity,i=Math.abs(l.x),j=Math.abs(l.y),k=Math.abs(l.z),(!a.orientation||a.orientation===180)&&(i>7||(k>6&&j<8||k<8&&j>6)&&i>5)?h&&n():h||m()}var b=navigator.userAgent;if(!(/iPhone|iPad|iPod/.test(navigator.platform)&&/OS [1-5]_[0-9_]* like Mac OS X/i.test(b)&&b.indexOf("AppleWebKit")>-1))return;var c=a.document;if(!c.querySelector)return;var d=c.querySelector("meta[name=viewport]"),e=d&&d.getAttribute("content"),f=e+",maximum-scale=1",g=e+",maximum-scale=10",h=!0,i,j,k,l;if(!d)return;a.addEventListener("orientationchange",m,!1),a.addEventListener("devicemotion",o,!1)})(this);




















$(function() {
	//validator custom types
	$.validator.addMethod("secret", function (value, element) {
			return /^[А-яЁёA-Za-z0-9]{1,32}$/.test(value);

	}, 'Пожалуйста, используйте: русские символы, английские символы, цифры. Максимум символов - 32.');

	$.validator.addMethod("tel", function (value, element) {
		var length = (value.length == 14) ? true : false,
			under = /_/.test(value);
			
		if(length && !under) {
			return true;
		}
	}, 'Пожалуйста, введите номер телефона.');

	$.validator.addMethod("names", function (value, element) {
			return /^[А-яЁё]{1,32}$/.test(value);

	}, 'Пожалуйста, используйте только русские символы. Максимум символов - 32.');

	$.validator.addMethod("birthplace2", function (value, element) {
			return /^[А-яЁё0-9.-]{1,150}$/.test(value);

	}, 'Пожалуйста, используйте: русские символы, цифры и символы: ".", "-". Максимум символов - 150.');

	$.validator.addMethod("digits", function (value, element) {
			return /^\d+$/.test(value);

	}, 'Пожалуйста, используйте только цифры.');

	$.validator.addMethod("address", function (value, element) {
			return /^[А-яЁё0-9-\/]+$/.test(value);

	}, 'Пожалуйста, используйте: русские символы, цифры и символы: "-", "/".');




	//validation
	;(function () {
		$('.form11').validate({
			submitHandler: function(form) {
				alert( 'go ajax 11' )
				// form.submit();
			}
		});
		$('.form12').validate({
			rules: {
				secret: {
					secret: true
				},
				mobile: {
					tel: true
				}
			},
			submitHandler: function(form,e) {
				alert( 'go ajax 12' )
				// form.submit();
			}
		});
		$('.form13').validate({
			rules: {
				lastName: {
					names: true
				},
				name: {
					names: true
				},
				patronymic: {
					names: true
				},
				birthplace: {
					birthplace2: true
				},
				pass_series: {
					tel: false,
					digits: true
				},
				pass_nomer: {
					tel: false,
					digits: true
				},
				reg6: {
					address: true,
				},
				reg7: {
					address: true,
				},
				reg8: {
					address: true,
				},
				reg9: {
					tel: false,
					digits: true,
				},
				phone_home: {
					tel: true
				}
			},
			submitHandler: function(form) {
				alert( 'go ajax 13' )
				// form.submit();
			}
		});
		$('.form14').validate({
			rules: {
				phone_home: {
					tel: true
				},
				reg6: {
					address: true,
				},
				reg7: {
					address: true,
				},
				reg8: {
					address: true,
				},
				reg9: {
					digits: true,
				},
			},
			submitHandler: function(form) {
				alert( 'go ajax 14' )
				// form.submit();
			}
		});
		$('.form21').validate({
			submitHandler: function(form) {
				//тут нужно делать проверки
				// alert( 'go ajax 21' )
				// form.submit();
			}
		});
		$('.form22').validate({
			rules: {
				bank_nomer: {
					digits: true,
					tel: false
				},
				bank_bik: {
					digits: true,
					tel: false
				},
				bank_no1: {
					digits: true
				},
				bank_no2: {
					digits: true
				},
				bank_no3: {
					digits: true
				},
				bank_no4: {
					digits: true
				},
				yaPocket: {
					tel: false,
					digits: true
				}
			},
			submitHandler: function(form) {
				// var s = $(form).serializeArray();
				// console.log(s)
				// alert( 'go ajax 22' )
				// form.submit();
			}
		});
		$('.form23').validate({
			rules: {
				zaimSumm: {
					digits: true,
					tel: false
				},
				zaimTime: {
					digits: true,
					tel: false
				}
			},
			submitHandler: function(form) {
				// var s = $(form).serializeArray();
				// console.log(s)
				// alert( 'go ajax 22' )
				// form.submit();
			}
		});
		$('.form24').validate({
			submitHandler: function(form) {
				// var s = $(form).serializeArray();
				// console.log(s)
				// alert( 'go ajax 22' )
				// form.submit();
			}
		});
		$('.form31').validate({
			rules: {
				zaimSumm: {
					digits: true,
					tel: false
				},
				zaimTime: {
					digits: true,
					tel: false
				}
			},
			submitHandler: function(form) {
				// var s = $(form).serializeArray();
				// console.log(s)
				// alert( 'go ajax 22' )
				// form.submit();
			}
		});
	})();
	//\validation	

	//input mask
	var masks = {
		tel: '(999)999-99-99'
	}
	if($('.tel').length) {
		$(".tel").inputmask({"mask": masks.tel});
	}
	//\input mask

	//14(not only 14) hide adress block
	$('#fact_adr, #emp').on('change', function () {
		$('.blockHide').slideToggle('fast');
	})

	//22 page
	if($('.sect').length) {
		var sects = $('.sect').hide(),
			radio = $('[name="obtaining"]');
		// $('.sect:first').slideToggle();

		radio.on('change', function () {
			sects.slideUp('fast');
			$(this).closest('.labelWrap').next('.sect').slideDown('fast');
		})
	}





	//popover
	$('.showPopover').on('click', function () {
		var el = $(this).closest('.row').find('input,select,textarea').filter(':visible');

		//show popover
		el.popover({
			html: true,
			content:'Пользователь с таким номером <br /> телефона уже зарегестрирован.<br />\
						Чтобы оформить заявку войдите в <br /><a href="#">личный кабинет</a>',
			placement: 'bottom',
			trigger: 'manual'
		}).popover('show');

		//hide popover
		$('body').on('click.popoverHide', function (e) {
			if(!$(e.target).is('.showPopover') && !$(e.target).closest('.popover').length) {
				el.popover('hide');
			}
		});
	});
	//\popover

	//autocomplete
	region = [
		  "ActionScript",
		  "AppleScript",
		  "Asp",
		  "BASIC",
		  "C",
		  "C++",
		  "Clojure",
		  "COBOL",
		  "ColdFusion",
		  "Erlang",
		  "Fortran",
		  "Groovy",
		  "Haskell",
		  "Java",
		  "JavaScript",
		  "Lisp",
		  "Perl",
		  "PHP",
		  "Python",
		  "Ruby",
		  "Scala",
		  "Scheme"
	];
	$( ".autocomplete" ).each(function () {
		$(this).autocomplete({
		  source: window[$(this).data('source')]
		});
	});
	//\autocomplete
	
	//23
	//sliders
	;(function () {
		if($('#slider1').length) {
			 $( "#slider1" ).slider({
				range: "min",
				value: 37,
				min: 1500,
				max: 15000,
				step: 100,
				slide: function( event, ui ) {
					$('.slider1').val(ui.value);
					if(!window.userLogin && ui.value > 8000) {
						$('.slider1').val(8000);
						$('#slider1').addClass('yellow');
					} else {
						$('#slider1').removeClass('yellow');
					}
					setZaim();
				}
			});

			 $('.slider1').on('input', function () {
				$( "#slider1" ).slider( "value", $(this).val() );
				setZaim();
			 })
			 $('.slider1').on('blur', function () {
				var val = $(this).val();
				if(val < 1500) {
					$(this).val(1500)
				} else if(val > 15000) {
					$(this).val(15000)
				}

				if(!window.userLogin && val > 8000) {
					$('.slider1').val(8000);
					$( "#slider1" ).slider( "value", 8000 );
					$('#slider1').addClass('yellow');
				} else {
					$('#slider1').removeClass('yellow');
				}
				setZaim();
			 });
		}
	})();


	function setZaim() {
		var span = $('.setZaim'),
			val = $('.slider1').val(),
			time = $('.slider2').val(),
			perc,
			itogo;

		if(time <=7) {
			perc = 2.5
		} else if(time == 8) {
			perc = 2.4
		} else if(time == 9) {
			perc = 2.3
		} else if(time == 10) {
			perc = 2.2
		} else if(time == 11) {
			perc = 2.1
		} else if(time >= 12) {
			perc = 2
		}

		var itogo = +val + Math.round(val*0.01*perc*time);
		span.text(itogo);
	}
	
	;(function () {
		var getFullYear = $('.getFullYear'),
			getMonth = $('.getMonth'),
			getDate = $('.getDate');

		var monthText = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];

		if($('#slider2').length) {
			 $( "#slider2" ).slider({
				range: "min",
				value: 31,
				min: 5,
				max: 31,
				slide: function( event, ui ) {
					$('.slider2').val(ui.value);
					setDate(ui.value);

					setZaim();
				}
			});


			$('.slider2').on('input', function () {
				$( "#slider2" ).slider( "value", $(this).val() );
				setDate(+$(this).val());
				setZaim();
			})

			 $('.slider2').on('blur', function () {
				var val = $(this).val();
				if(val < 5) {
					$(this).val(5)
				} else if(val > 31) {
					$(this).val(31)
				}
				setDate();
				setZaim();
			 });

			 
		}

		function setDate(val) {
			val = val || +$('.slider2').val();
			var d = new Date();
			d.setDate(d.getDate() + val);

			getFullYear.text(d.getFullYear());
			getMonth.text(monthText[d.getMonth()]);
			getDate.text(d.getDate());
		}

		//set defaults
		if($('.slider1').length) {
			$('.slider1').val(1500);

			$('#slider2').data('ui-slider').value(5);
			$('.slider2').val(5);
			setZaim();
			setDate();
		}
	})();
	//\sliders

	//button
	(function () {
		$('.btn23').on('click', function () {
			$('.sms23').slideToggle("fast");
		})
		$('.givemecode').on('click', function (e) {
			var timer = 59;
			$('.btn23, .sms23').slideUp();
			e.preventDefault();
			var timer23 = $('<p class="timer23"></p>');
			timer23.text('Код отправлен 59').insertBefore($('.btn23'));


			var interval = setInterval(function () {
				if(timer > 0) {
					timer--;
					timer23.text('Код отправлен '+timer)
				} else {
					timer23.text('Код отправлен '+timer)
					clearInterval(interval);
				}
			}, 1000);
		})
	})();
	//\button
	//24
	(function () {
		$('#credit1, #credit2').on('change', function () {
			$('.creditQuestions').slideToggle('fast');
		})
	})();

	//page 34, timer
	if($('.timerWrap').length) {
		var wrap = $('.timerWrap'),
			timerSec1 = $('.timerSec1'),
			timerSec2 = $('.timerSec2');
			
		timer(59, function () {
			console.log('callback')
		});
	}

	function timer(n, cb) {
		var timer = n,
			timertext;

		if(n < 10) {
			timerText = '0' + n;
		} else {
			timerText = '' + n;
		}

		timerSec1.text(timerText.slice(0,1)).data('num', timerText.slice(0,1));
		timerSec2.text(timerText.slice(1,2)).data('num', timerText.slice(1,2));

		timer--;

		var interval = setInterval(function () {
			if(timer > 0) {
				tick(timer)
				timer--;
			} else {
				tick(0)
				clearInterval(interval);
				cb();
			}
		}, 1000);

		function tick(n) {
			var timerText,
				oldNum1,
				oldNum2,
				num1,
				num2;

			if(n < 10) {
				timerText = '0' + n;
			} else {
				timerText = '' + n;
			}

			num1 = timerText.slice(0,1);
			num2 = timerText.slice(1,2);

			oldNum1 = timerSec1.data('num');
			oldNum2 = timerSec2.data('num');

			//num2
			if(oldNum2 != num2) {
				timerSec2.text(num2).data('num', num2);
				var fakeItem = $('<span class="timerSingle timerSec2">'+oldNum2+'</span>').appendTo(wrap)
				fakeItem[0].clientHeight;
				fakeItem.addClass('timerAway');
				setTimeout(function(){
					fakeItem.remove();
				}, 400)
			}

			//num1
			if(oldNum1 != num1) {
				timerSec1.text(num1).data('num', num1);
				var fakeItem1 = $('<span class="timerSingle timerSec1">'+oldNum1+'</span>').appendTo(wrap)
				fakeItem1[0].clientHeight;
				fakeItem1.addClass('timerAway');
				setTimeout(function(){
					fakeItem1.remove();
				}, 400)
			}
		}
	}

	//menu
	(function () {
		
	})();
	$('.menuButton').on('click', function () {
		var gl = $('.globalWrap'),
			wrap = $('#wrapper'),
			menu = $('.menuWrap');

		if(!gl.hasClass("open")) {
			openMenu();
		} else {
			closeMenu();
		}

		function openMenu() {
			gl.addClass("open");
			setTimeout(function(){
				wrap.on('click.menu touchmove.menu', function (e) {
					closeMenu();
					e.preventDefault();
					return false;
				})
			}, 300)
		}
		function closeMenu() {
			gl.removeClass("open");
			wrap.off('.menu');
		}
	})

	function menuSize() {
		$('.menuWrap nav').css({'maxHeight':$('.globalWrap').outerHeight() - 109})//109-footer height
	}
	menuSize();
	$(window).on('resize', function () {
		menuSize();
	})
	// function menuSize() {
	// 	var nav = $('.menuWrap nav'),
	// 		menuHeight = nav.outerHeight(),
	// 		winHeight = $(window).height();
	// 		//109 - footer height

	// 	nav.css({'height':''});
	// 	if(winHeight - 109 < menuHeight) {
	// 		nav.height(winHeight - 109);
	// 	}
		
	// 	// $('.menuWrap nav').height($(window).height() - $('#footer').outerHeight());
	// }
	// menuSize();
	// $(window).on('resize', function () {
	// 	menuSize();
	// })
	// $('.menuWrap').height($('.globalWrap').outerHeight() - $('#footer').outerHeight());
	// $('.menuWrap').css('minHeight',$('.globalWrap').outerHeight() - $('#footer').outerHeight());
	//\menu












});