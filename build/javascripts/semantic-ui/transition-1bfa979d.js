/*!
 * # Fomantic-UI - Transition
 * http://github.com/fomantic/Fomantic-UI/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(n,e,i,t){"use strict";n.isFunction=n.isFunction||function(n){return"function"==typeof n&&"number"!=typeof n.nodeType},e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),n.fn.transition=function(){var e,a=n(this),o=a.selector||"",r=(new Date).getTime(),s=[],l=arguments,d=l[0],u=[].slice.call(arguments,1),c="string"==typeof d;return a.each(function(m){var f,p,g,v,b,y,h,w,C,S=n(this),T=this;C={initialize:function(){f=C.get.settings.apply(T,l),v=f.className,g=f.error,b=f.metadata,w="."+f.namespace,h="module-"+f.namespace,p=S.data(h)||C,y=C.get.animationEndEvent(),c&&(c=C.invoke(d)),!1===c&&(C.verbose("Converted arguments into settings object",f),f.interval?C.delay(f.animate):C.animate(),C.instantiate())},instantiate:function(){C.verbose("Storing instance of module",C),p=C,S.data(h,p)},destroy:function(){C.verbose("Destroying previous module for",T),S.removeData(h)},refresh:function(){C.verbose("Refreshing display type on next animation"),delete C.displayType},forceRepaint:function(){C.verbose("Forcing element repaint");var n=S.parent(),e=S.next();0===e.length?S.detach().appendTo(n):S.detach().insertBefore(e)},repaint:function(){C.verbose("Repainting element");T.offsetWidth},delay:function(n){var e,i,o=C.get.animationDirection();o||(o=C.can.transition()?C.get.direction():"static"),n=n!==t?n:f.interval,e="auto"==f.reverse&&o==v.outward,i=e||1==f.reverse?(a.length-m)*f.interval:m*f.interval,C.debug("Delaying animation by",i),setTimeout(C.animate,i)},animate:function(n){if(f=n||f,!C.is.supported())return C.error(g.support),!1;if(C.debug("Preparing animation",f.animation),C.is.animating()){if(f.queue)return!f.allowRepeats&&C.has.direction()&&C.is.occurring()&&!0!==C.queuing?C.debug("Animation is currently occurring, preventing queueing same animation",f.animation):C.queue(f.animation),!1;if(!f.allowRepeats&&C.is.occurring())return C.debug("Animation is already occurring, will not execute repeated animation",f.animation),!1;C.debug("New animation started, completing previous early",f.animation),p.complete()}C.can.animate()?C.set.animating(f.animation):C.error(g.noAnimation,f.animation,T)},reset:function(){C.debug("Resetting animation to beginning conditions"),C.remove.animationCallbacks(),C.restore.conditions(),C.remove.animating()},queue:function(n){C.debug("Queueing animation of",n),C.queuing=!0,S.one(y+".queue"+w,function(){C.queuing=!1,C.repaint(),C.animate.apply(this,f)})},complete:function(n){n&&n.target===T&&n.stopPropagation(),C.debug("Animation complete",f.animation),C.remove.completeCallback(),C.remove.failSafe(),C.is.looping()||(C.is.outward()?(C.verbose("Animation is outward, hiding element"),C.restore.conditions(),C.hide()):C.is.inward()?(C.verbose("Animation is outward, showing element"),C.restore.conditions(),C.show()):(C.verbose("Static animation completed"),C.restore.conditions(),f.onComplete.call(T)))},force:{visible:function(){var n=S.attr("style"),e=C.get.userStyle(n),i=C.get.displayType(),t=e+"display: "+i+" !important;",a=S[0].style.display;return!i||"none"===a&&f.skipInlineHidden||S[0].tagName.match(/(script|link|style)/i)?(C.remove.transition(),!1):(C.verbose("Overriding default display to show element",i),S.attr("style",t),!0)},hidden:function(){var n=S.attr("style"),e=S.css("display"),i=n===t||""===n;"none"===e||C.is.hidden()?i&&S.removeAttr("style"):(C.verbose("Overriding default display to hide element"),S.css("display","none"))}},has:{direction:function(e){var i=!1;return e=e||f.animation,"string"==typeof e&&(e=e.split(" "),n.each(e,function(n,e){e!==v.inward&&e!==v.outward||(i=!0)})),i},inlineDisplay:function(){var n=S.attr("style")||"";return Array.isArray(n.match(/display.*?;/,""))}},set:{animating:function(n){C.remove.completeCallback(),n=n||f.animation;var e=C.get.animationClass(n);C.save.animation(e),C.force.visible()&&(C.remove.hidden(),C.remove.direction(),C.start.animation(e))},duration:function(n,e){e=e||f.duration,((e="number"==typeof e?e+"ms":e)||0===e)&&(C.verbose("Setting animation duration",e),S.css({"animation-duration":e}))},direction:function(n){n=n||C.get.direction(),n==v.inward?C.set.inward():C.set.outward()},looping:function(){C.debug("Transition set to loop"),S.addClass(v.looping)},hidden:function(){S.addClass(v.transition).addClass(v.hidden)},inward:function(){C.debug("Setting direction to inward"),S.removeClass(v.outward).addClass(v.inward)},outward:function(){C.debug("Setting direction to outward"),S.removeClass(v.inward).addClass(v.outward)},visible:function(){S.addClass(v.transition).addClass(v.visible)}},start:{animation:function(n){n=n||C.get.animationClass(),C.debug("Starting tween",n),S.addClass(n).one(y+".complete"+w,C.complete),f.useFailSafe&&C.add.failSafe(),C.set.duration(f.duration),f.onStart.call(T)}},save:{animation:function(n){C.cache||(C.cache={}),C.cache.animation=n},displayType:function(n){"none"!==n&&S.data(b.displayType,n)},transitionExists:function(e,i){n.fn.transition.exists[e]=i,C.verbose("Saving existence of transition",e,i)}},restore:{conditions:function(){var n=C.get.currentAnimation();n&&(S.removeClass(n),C.verbose("Removing animation class",C.cache)),C.remove.duration()}},add:{failSafe:function(){var n=C.get.duration();C.timer=setTimeout(function(){S.triggerHandler(y)},n+f.failSafeDelay),C.verbose("Adding fail safe timer",C.timer)}},remove:{animating:function(){S.removeClass(v.animating)},animationCallbacks:function(){C.remove.queueCallback(),C.remove.completeCallback()},queueCallback:function(){S.off(".queue"+w)},completeCallback:function(){S.off(".complete"+w)},display:function(){S.css("display","")},direction:function(){S.removeClass(v.inward).removeClass(v.outward)},duration:function(){S.css("animation-duration","")},failSafe:function(){C.verbose("Removing fail safe timer",C.timer),C.timer&&clearTimeout(C.timer)},hidden:function(){S.removeClass(v.hidden)},visible:function(){S.removeClass(v.visible)},looping:function(){C.debug("Transitions are no longer looping"),C.is.looping()&&(C.reset(),S.removeClass(v.looping))},transition:function(){S.removeClass(v.transition).removeClass(v.visible).removeClass(v.hidden)}},get:{settings:function(e,i,t){return"object"==typeof e?n.extend(!0,{},n.fn.transition.settings,e):"function"==typeof t?n.extend({},n.fn.transition.settings,{animation:e,onComplete:t,duration:i}):"string"==typeof i||"number"==typeof i?n.extend({},n.fn.transition.settings,{animation:e,duration:i}):"object"==typeof i?n.extend({},n.fn.transition.settings,i,{animation:e}):"function"==typeof i?n.extend({},n.fn.transition.settings,{animation:e,onComplete:i}):n.extend({},n.fn.transition.settings,{animation:e})},animationClass:function(n){var e=n||f.animation,i=C.can.transition()&&!C.has.direction()?C.get.direction()+" ":"";return v.animating+" "+v.transition+" "+i+e},currentAnimation:function(){return!(!C.cache||C.cache.animation===t)&&C.cache.animation},currentDirection:function(){return C.is.inward()?v.inward:v.outward},direction:function(){return C.is.hidden()||!C.is.visible()?v.inward:v.outward},animationDirection:function(e){var i;return e=e||f.animation,"string"==typeof e&&(e=e.split(" "),n.each(e,function(n,e){e===v.inward?i=v.inward:e===v.outward&&(i=v.outward)})),i||!1},duration:function(n){return n=n||f.duration,!1===n&&(n=S.css("animation-duration")||0),"string"==typeof n?n.indexOf("ms")>-1?parseFloat(n):1e3*parseFloat(n):n},displayType:function(n){if(n=n===t||n,f.displayType)return f.displayType;if(n&&S.data(b.displayType)===t){var e=S.css("display");""===e||"none"===e?C.can.transition(!0):C.save.displayType(e)}return S.data(b.displayType)},userStyle:function(n){return n=n||S.attr("style")||"",n.replace(/display.*?;/,"")},transitionExists:function(e){return n.fn.transition.exists[e]},animationStartEvent:function(){var n,e=i.createElement("div"),a={animation:"animationstart",OAnimation:"oAnimationStart",MozAnimation:"mozAnimationStart",WebkitAnimation:"webkitAnimationStart"};for(n in a)if(e.style[n]!==t)return a[n];return!1},animationEndEvent:function(){var n,e=i.createElement("div"),a={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"mozAnimationEnd",WebkitAnimation:"webkitAnimationEnd"};for(n in a)if(e.style[n]!==t)return a[n];return!1}},can:{transition:function(e){var i,a,o,r,s,l,d=f.animation,u=C.get.transitionExists(d),c=C.get.displayType(!1);if(u===t||e){if(C.verbose("Determining whether animation exists"),i=S.attr("class"),a=S.prop("tagName"),o=n("<"+a+" />").addClass(i).insertAfter(S),r=o.addClass(d).removeClass(v.inward).removeClass(v.outward).addClass(v.animating).addClass(v.transition).css("animationName"),s=o.addClass(v.inward).css("animationName"),c||(c=o.attr("class",i).removeAttr("style").removeClass(v.hidden).removeClass(v.visible).show().css("display"),C.verbose("Determining final display state",c),C.save.displayType(c)),o.remove(),r!=s)C.debug("Direction exists for animation",d),l=!0;else{if("none"==r||!r)return void C.debug("No animation defined in css",d);C.debug("Static animation found",d,c),l=!1}C.save.transitionExists(d,l)}return u!==t?u:l},animate:function(){return C.can.transition()!==t}},is:{animating:function(){return S.hasClass(v.animating)},inward:function(){return S.hasClass(v.inward)},outward:function(){return S.hasClass(v.outward)},looping:function(){return S.hasClass(v.looping)},occurring:function(n){return n=n||f.animation,n="."+n.replace(" ","."),S.filter(n).length>0},visible:function(){return S.is(":visible")},hidden:function(){return"hidden"===S.css("visibility")},supported:function(){return!1!==y}},hide:function(){C.verbose("Hiding element"),C.is.animating()&&C.reset(),T.blur(),C.remove.display(),C.remove.visible(),n.isFunction(f.onBeforeHide)?f.onBeforeHide.call(T,function(){C.hideNow()}):C.hideNow()},hideNow:function(){C.set.hidden(),C.force.hidden(),f.onHide.call(T),f.onComplete.call(T)},show:function(n){C.verbose("Showing element",n),C.force.visible()&&(C.remove.hidden(),C.set.visible(),f.onShow.call(T),f.onComplete.call(T))},toggle:function(){C.is.visible()?C.hide():C.show()},stop:function(){C.debug("Stopping current animation"),S.triggerHandler(y)},stopAll:function(){C.debug("Stopping all animation"),C.remove.queueCallback(),S.triggerHandler(y)},clear:{queue:function(){C.debug("Clearing animation queue"),C.remove.queueCallback()}},enable:function(){C.verbose("Starting animation"),S.removeClass(v.disabled)},disable:function(){C.debug("Stopping animation"),S.addClass(v.disabled)},setting:function(e,i){if(C.debug("Changing setting",e,i),n.isPlainObject(e))n.extend(!0,f,e);else{if(i===t)return f[e];n.isPlainObject(f[e])?n.extend(!0,f[e],i):f[e]=i}},internal:function(e,i){if(n.isPlainObject(e))n.extend(!0,C,e);else{if(i===t)return C[e];C[e]=i}},debug:function(){!f.silent&&f.debug&&(f.performance?C.performance.log(arguments):(C.debug=Function.prototype.bind.call(console.info,console,f.name+":"),C.debug.apply(console,arguments)))},verbose:function(){!f.silent&&f.verbose&&f.debug&&(f.performance?C.performance.log(arguments):(C.verbose=Function.prototype.bind.call(console.info,console,f.name+":"),C.verbose.apply(console,arguments)))},error:function(){f.silent||(C.error=Function.prototype.bind.call(console.error,console,f.name+":"),C.error.apply(console,arguments))},performance:{log:function(n){var e,i,t;f.performance&&(e=(new Date).getTime(),t=r||e,i=e-t,r=e,s.push({Name:n[0],Arguments:[].slice.call(n,1)||"",Element:T,"Execution Time":i})),clearTimeout(C.performance.timer),C.performance.timer=setTimeout(C.performance.display,500)},display:function(){var e=f.name+":",i=0;r=!1,clearTimeout(C.performance.timer),n.each(s,function(n,e){i+=e["Execution Time"]}),e+=" "+i+"ms",o&&(e+=" '"+o+"'"),a.length>1&&(e+=" ("+a.length+")"),(console.group!==t||console.table!==t)&&s.length>0&&(console.groupCollapsed(e),console.table?console.table(s):n.each(s,function(n,e){console.log(e.Name+": "+e["Execution Time"]+"ms")}),console.groupEnd()),s=[]}},invoke:function(i,a,o){var r,s,l,d=p;return a=a||u,o=T||o,"string"==typeof i&&d!==t&&(i=i.split(/[\. ]/),r=i.length-1,n.each(i,function(e,a){var o=e!=r?a+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(n.isPlainObject(d[o])&&e!=r)d=d[o];else{if(d[o]!==t)return s=d[o],!1;if(!n.isPlainObject(d[a])||e==r)return d[a]!==t&&(s=d[a],!1);d=d[a]}})),n.isFunction(s)?l=s.apply(o,a):s!==t&&(l=s),Array.isArray(e)?e.push(l):e!==t?e=[e,l]:l!==t&&(e=l),s!==t&&s}},C.initialize()}),e!==t?e:this},n.fn.transition.exists={},n.fn.transition.settings={name:"Transition",silent:!1,debug:!1,verbose:!1,performance:!0,namespace:"transition",interval:0,reverse:"auto",onStart:function(){},onComplete:function(){},onShow:function(){},onHide:function(){},useFailSafe:!0,failSafeDelay:100,allowRepeats:!1,displayType:!1,animation:"fade",duration:!1,queue:!0,skipInlineHidden:!1,metadata:{displayType:"display"},className:{animating:"animating",disabled:"disabled",hidden:"hidden",inward:"in",loading:"loading",looping:"looping",outward:"out",transition:"transition",visible:"visible"},error:{noAnimation:"Element is no longer attached to DOM. Unable to animate.  Use silent setting to surpress this warning in production.",repeated:"That animation is already occurring, cancelling repeated animation",method:"The method you called is not defined",support:"This browser does not support CSS animations"}}}(jQuery,window,document);