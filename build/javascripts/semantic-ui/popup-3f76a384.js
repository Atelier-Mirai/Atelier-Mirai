/*!
 * # Fomantic-UI - Popup
 * http://github.com/fomantic/Fomantic-UI/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(t,e,o,n){"use strict";t.isFunction=t.isFunction||function(t){return"function"==typeof t&&"number"!=typeof t.nodeType},e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),t.fn.popup=function(i){var r,a=t(this),s=t(o),p=t(e),l=t("body"),u=a.selector||"",c="ontouchstart"in o.documentElement?"touchstart":"click",d=(new Date).getTime(),f=[],h=arguments[0],g="string"==typeof h,m=[].slice.call(arguments,1);return a.each(function(){var a,v,b,w,y,P,C=t.isPlainObject(i)?t.extend(!0,{},t.fn.popup.settings,i):t.extend({},t.fn.popup.settings),T=C.selector,x=C.className,E=C.error,k=C.metadata,S=C.namespace,A="."+C.namespace,F="module-"+S,O=t(this),D=t(C.context),j=t(C.scrollContext),R=t(C.boundary),H=C.target?t(C.target):O,N=0,V=!1,W=!1,M=this,z=O.data(F);P={initialize:function(){P.debug("Initializing",O),P.createID(),P.bind.events(),!P.exists()&&C.preserve&&P.create(),C.observeChanges&&P.observeChanges(),P.instantiate()},instantiate:function(){P.verbose("Storing instance",P),z=P,O.data(F,z)},observeChanges:function(){"MutationObserver"in e&&(b=new MutationObserver(P.event.documentChanged),b.observe(o,{childList:!0,subtree:!0}),P.debug("Setting up mutation observer",b))},refresh:function(){C.popup?a=t(C.popup).eq(0):C.inline&&(a=H.nextAll(T.popup).eq(0),C.popup=a),C.popup?(a.addClass(x.loading),v=P.get.offsetParent(),a.removeClass(x.loading),C.movePopup&&P.has.popup()&&P.get.offsetParent(a)[0]!==v[0]&&(P.debug("Moving popup to the same offset parent as target"),a.detach().appendTo(v))):v=C.inline?P.get.offsetParent(H):P.has.popup()?P.get.offsetParent(a):l,v.is("html")&&v[0]!==l[0]&&(P.debug("Setting page as offset parent"),v=l),P.get.variation()&&P.set.variation()},reposition:function(){P.refresh(),P.set.position()},destroy:function(){P.debug("Destroying previous module"),b&&b.disconnect(),a&&!C.preserve&&P.removePopup(),clearTimeout(P.hideTimer),clearTimeout(P.showTimer),P.unbind.close(),P.unbind.events(),O.removeData(F)},event:{start:function(){var e=t.isPlainObject(C.delay)?C.delay.show:C.delay;clearTimeout(P.hideTimer),(!W||W&&C.addTouchEvents)&&(P.showTimer=setTimeout(P.show,e))},end:function(){var e=t.isPlainObject(C.delay)?C.delay.hide:C.delay;clearTimeout(P.showTimer),P.hideTimer=setTimeout(P.hide,e)},touchstart:function(){W=!0,C.addTouchEvents&&P.show()},resize:function(){P.is.visible()&&P.set.position()},documentChanged:function(e){[].forEach.call(e,function(e){e.removedNodes&&[].forEach.call(e.removedNodes,function(e){(e==M||t(e).find(M).length>0)&&(P.debug("Element removed from DOM, tearing down events"),P.destroy())})})},hideGracefully:function(e){var n=t(e.target),i=t.contains(o.documentElement,e.target),r=n.closest(T.popup).length>0;e&&!r&&i?(P.debug("Click occurred outside popup hiding popup"),P.hide()):P.debug("Click was inside popup, keeping popup open")}},create:function(){var e=P.get.html(),o=P.get.title(),n=P.get.content();e||n||o?(P.debug("Creating pop-up html"),e||(e=C.templates.popup({title:o,content:n})),a=t("<div/>").addClass(x.popup).data(k.activator,O).html(e),C.inline?(P.verbose("Inserting popup element inline",a),a.insertAfter(O)):(P.verbose("Appending popup element to body",a),a.appendTo(D)),P.refresh(),P.set.variation(),C.hoverable&&P.bind.popup(),C.onCreate.call(a,M)):C.popup?(t(C.popup).data(k.activator,O),P.verbose("Used popup specified in settings"),P.refresh(),C.hoverable&&P.bind.popup()):0!==H.next(T.popup).length?(P.verbose("Pre-existing popup found"),C.inline=!0,C.popup=H.next(T.popup).data(k.activator,O),P.refresh(),C.hoverable&&P.bind.popup()):P.debug("No content specified skipping display",M)},createID:function(){y=(Math.random().toString(16)+"000000000").substr(2,8),w="."+y,P.verbose("Creating unique id for element",y)},toggle:function(){P.debug("Toggling pop-up"),P.is.hidden()?(P.debug("Popup is hidden, showing pop-up"),P.unbind.close(),P.show()):(P.debug("Popup is visible, hiding pop-up"),P.hide())},show:function(t){if(t=t||function(){},P.debug("Showing pop-up",C.transition),P.is.hidden()&&(!P.is.active()||!P.is.dropdown())){if(P.exists()||P.create(),!1===C.onShow.call(a,M))return void P.debug("onShow callback returned false, cancelling popup animation");C.preserve||C.popup||P.refresh(),a&&P.set.position()&&(P.save.conditions(),C.exclusive&&P.hideAll(),P.animate.show(t))}},hide:function(t){if(t=t||function(){},P.is.visible()||P.is.animating()){if(!1===C.onHide.call(a,M))return void P.debug("onHide callback returned false, cancelling popup animation");P.remove.visible(),P.unbind.close(),P.restore.conditions(),P.animate.hide(t)}},hideAll:function(){t(T.popup).filter("."+x.popupVisible).each(function(){t(this).data(k.activator).popup("hide")})},exists:function(){return!!a&&(C.inline||C.popup?P.has.popup():a.closest(D).length>=1)},removePopup:function(){P.has.popup()&&!C.popup&&(P.debug("Removing popup",a),a.remove(),a=n,C.onRemove.call(a,M))},save:{conditions:function(){P.cache={title:O.attr("title")},P.cache.title&&O.removeAttr("title"),P.verbose("Saving original attributes",P.cache.title)}},restore:{conditions:function(){return P.cache&&P.cache.title&&(O.attr("title",P.cache.title),P.verbose("Restoring original attributes",P.cache.title)),!0}},supports:{svg:function(){return"undefined"!=typeof SVGGraphicsElement}},animate:{show:function(e){e=t.isFunction(e)?e:function(){},C.transition&&t.fn.transition!==n&&O.transition("is supported")?(P.set.visible(),a.transition({animation:C.transition+" in",queue:!1,debug:C.debug,verbose:C.verbose,duration:C.duration,onComplete:function(){P.bind.close(),e.call(a,M),C.onVisible.call(a,M)}})):P.error(E.noTransition)},hide:function(e){e=t.isFunction(e)?e:function(){},P.debug("Hiding pop-up"),C.transition&&t.fn.transition!==n&&O.transition("is supported")?a.transition({animation:C.transition+" out",queue:!1,duration:C.duration,debug:C.debug,verbose:C.verbose,onComplete:function(){P.reset(),e.call(a,M),C.onHidden.call(a,M)}}):P.error(E.noTransition)}},change:{content:function(t){a.html(t)}},get:{html:function(){return O.removeData(k.html),O.data(k.html)||C.html},title:function(){return O.removeData(k.title),O.data(k.title)||C.title},content:function(){return O.removeData(k.content),O.data(k.content)||C.content||O.attr("title")},variation:function(){return O.removeData(k.variation),O.data(k.variation)||C.variation},popup:function(){return a},popupOffset:function(){return a.offset()},calculations:function(){var t,o=P.get.offsetParent(a),n=H[0],i=R[0]==e,r=C.inline||C.popup&&C.movePopup?H.position():H.offset(),s=i?{top:0,left:0}:R.offset(),l={},u=i?{top:p.scrollTop(),left:p.scrollLeft()}:{top:0,left:0};if(l={target:{element:H[0],width:H.outerWidth(),height:H.outerHeight(),top:r.top,left:r.left,margin:{}},popup:{width:a.outerWidth(),height:a.outerHeight()},parent:{width:v.outerWidth(),height:v.outerHeight()},screen:{top:s.top,left:s.left,scroll:{top:u.top,left:u.left},width:R.width(),height:R.height()}},o.get(0)!==v.get(0)){var c=o.offset();l.target.top-=c.top,l.target.left-=c.left,l.parent.width=o.outerWidth(),l.parent.height=o.outerHeight()}return C.setFluidWidth&&P.is.fluid()&&(l.container={width:a.parent().outerWidth()},l.popup.width=l.container.width),l.target.margin.top=C.inline?parseInt(e.getComputedStyle(n).getPropertyValue("margin-top"),10):0,l.target.margin.left=C.inline?P.is.rtl()?parseInt(e.getComputedStyle(n).getPropertyValue("margin-right"),10):parseInt(e.getComputedStyle(n).getPropertyValue("margin-left"),10):0,t=l.screen,l.boundary={top:t.top+t.scroll.top,bottom:t.top+t.scroll.top+t.height,left:t.left+t.scroll.left,right:t.left+t.scroll.left+t.width},l},id:function(){return y},startEvent:function(){return"hover"==C.on?"mouseenter":"focus"==C.on&&"focus"},scrollEvent:function(){return"scroll"},endEvent:function(){return"hover"==C.on?"mouseleave":"focus"==C.on&&"blur"},distanceFromBoundary:function(t,e){var o,n,i={};return e=e||P.get.calculations(),o=e.popup,n=e.boundary,t&&(i={top:t.top-n.top,left:t.left-n.left,right:n.right-(t.left+o.width),bottom:n.bottom-(t.top+o.height)},P.verbose("Distance from boundaries determined",t,i)),i},offsetParent:function(e){var o=e!==n?e[0]:H[0],i=o.parentNode,r=t(i);if(i)for(var a="none"===r.css("transform"),s="static"===r.css("position"),p=r.is("body");i&&!p&&s&&a;)i=i.parentNode,r=t(i),a="none"===r.css("transform"),s="static"===r.css("position"),p=r.is("body");return r&&r.length>0?r:t()},positions:function(){return{"top left":!1,"top center":!1,"top right":!1,"bottom left":!1,"bottom center":!1,"bottom right":!1,"left center":!1,"right center":!1}},nextPosition:function(t){var e=t.split(" "),o=e[0],n=e[1],i={top:"bottom",bottom:"top",left:"right",right:"left"},r={left:"center",center:"right",right:"left"},a={"top left":"top center","top center":"top right","top right":"right center","right center":"bottom right","bottom right":"bottom center","bottom center":"bottom left","bottom left":"left center","left center":"top left"},s="top"==o||"bottom"==o,p=!1,l=!1,u=!1;return V||(P.verbose("All available positions available"),V=P.get.positions()),P.debug("Recording last position tried",t),V[t]=!0,"opposite"===C.prefer&&(u=[i[o],n],u=u.join(" "),p=!0===V[u],P.debug("Trying opposite strategy",u)),"adjacent"===C.prefer&&s&&(u=[o,r[n]],u=u.join(" "),l=!0===V[u],P.debug("Trying adjacent strategy",u)),(l||p)&&(P.debug("Using backup position",u),u=a[t]),u}},set:{position:function(t,e){if(0===H.length||0===a.length)return void P.error(E.notFound);var o,i,r,s,p,l,u,c;if(e=e||P.get.calculations(),t=t||O.data(k.position)||C.position,o=O.data(k.offset)||C.offset,i=C.distanceAway,r=e.target,s=e.popup,p=e.parent,P.should.centerArrow(e)&&(P.verbose("Adjusting offset to center arrow on small target element"),"top left"!=t&&"bottom left"!=t||(o+=r.width/2,o-=C.arrowPixelsFromEdge),"top right"!=t&&"bottom right"!=t||(o-=r.width/2,o+=C.arrowPixelsFromEdge)),0===r.width&&0===r.height&&!P.is.svg(r.element))return P.debug("Popup target is hidden, no action taken"),!1;switch(C.inline&&(P.debug("Adding margin to calculation",r.margin),"left center"==t||"right center"==t?(o+=r.margin.top,i+=-r.margin.left):"top left"==t||"top center"==t||"top right"==t?(o+=r.margin.left,i-=r.margin.top):(o+=r.margin.left,i+=r.margin.top)),P.debug("Determining popup position from calculations",t,e),P.is.rtl()&&(t=t.replace(/left|right/g,function(t){return"left"==t?"right":"left"}),P.debug("RTL: Popup position updated",t)),N==C.maxSearchDepth&&"string"==typeof C.lastResort&&(t=C.lastResort),t){case"top left":l={top:"auto",bottom:p.height-r.top+i,left:r.left+o,right:"auto"};break;case"top center":l={bottom:p.height-r.top+i,left:r.left+r.width/2-s.width/2+o,top:"auto",right:"auto"};break;case"top right":l={bottom:p.height-r.top+i,right:p.width-r.left-r.width-o,top:"auto",left:"auto"};break;case"left center":l={top:r.top+r.height/2-s.height/2+o,right:p.width-r.left+i,left:"auto",bottom:"auto"};break;case"right center":l={top:r.top+r.height/2-s.height/2+o,left:r.left+r.width+i,bottom:"auto",right:"auto"};break;case"bottom left":l={top:r.top+r.height+i,left:r.left+o,bottom:"auto",right:"auto"};break;case"bottom center":l={top:r.top+r.height+i,left:r.left+r.width/2-s.width/2+o,bottom:"auto",right:"auto"};break;case"bottom right":l={top:r.top+r.height+i,right:p.width-r.left-r.width-o,left:"auto",bottom:"auto"}}if(l===n&&P.error(E.invalidPosition,t),P.debug("Calculated popup positioning values",l),a.css(l).removeClass(x.position).addClass(t).addClass(x.loading),u=P.get.popupOffset(),c=P.get.distanceFromBoundary(u,e),!C.forcePosition&&P.is.offstage(c,t)){if(P.debug("Position is outside viewport",t),N<C.maxSearchDepth)return N++,t=P.get.nextPosition(t),P.debug("Trying new position",t),!!a&&P.set.position(t,e);if(!C.lastResort)return P.debug("Popup could not find a position to display",a),P.error(E.cannotPlace,M),P.remove.attempts(),P.remove.loading(),P.reset(),C.onUnplaceable.call(a,M),!1;P.debug("No position found, showing with last position")}return P.debug("Position is on stage",t),P.remove.attempts(),P.remove.loading(),C.setFluidWidth&&P.is.fluid()&&P.set.fluidWidth(e),!0},fluidWidth:function(t){t=t||P.get.calculations(),P.debug("Automatically setting element width to parent width",t.parent.width),a.css("width",t.container.width)},variation:function(t){(t=t||P.get.variation())&&P.has.popup()&&(P.verbose("Adding variation to popup",t),a.addClass(t))},visible:function(){O.addClass(x.visible)}},remove:{loading:function(){a.removeClass(x.loading)},variation:function(t){(t=t||P.get.variation())&&(P.verbose("Removing variation",t),a.removeClass(t))},visible:function(){O.removeClass(x.visible)},attempts:function(){P.verbose("Resetting all searched positions"),N=0,V=!1}},bind:{events:function(){P.debug("Binding popup events to module"),"click"==C.on&&O.on(c+A,P.toggle),"hover"==C.on&&O.on("touchstart"+A,P.event.touchstart),P.get.startEvent()&&O.on(P.get.startEvent()+A,P.event.start).on(P.get.endEvent()+A,P.event.end),C.target&&P.debug("Target set to element",H),p.on("resize"+w,P.event.resize)},popup:function(){P.verbose("Allowing hover events on popup to prevent closing"),a&&P.has.popup()&&a.on("mouseenter"+A,P.event.start).on("mouseleave"+A,P.event.end)},close:function(){(!0===C.hideOnScroll||"auto"==C.hideOnScroll&&"click"!=C.on)&&P.bind.closeOnScroll(),P.is.closable()?P.bind.clickaway():"hover"==C.on&&W&&P.bind.touchClose()},closeOnScroll:function(){P.verbose("Binding scroll close event to document"),j.one(P.get.scrollEvent()+w,P.event.hideGracefully)},touchClose:function(){P.verbose("Binding popup touchclose event to document"),s.on("touchstart"+w,function(t){P.verbose("Touched away from popup"),P.event.hideGracefully.call(M,t)})},clickaway:function(){P.verbose("Binding popup close event to document"),s.on(c+w,function(t){P.verbose("Clicked away from popup"),P.event.hideGracefully.call(M,t)})}},unbind:{events:function(){p.off(w),O.off(A)},close:function(){s.off(w),j.off(w)}},has:{popup:function(){return a&&a.length>0}},should:{centerArrow:function(t){return!P.is.basic()&&t.target.width<=2*C.arrowPixelsFromEdge}},is:{closable:function(){return"auto"==C.closable?"hover"!=C.on:C.closable},offstage:function(e,o){var n=[];return t.each(e,function(t,e){e<-C.jitter&&(P.debug("Position exceeds allowable distance from edge",t,e,o),n.push(t))}),n.length>0},svg:function(t){return P.supports.svg()&&t instanceof SVGGraphicsElement},basic:function(){return O.hasClass(x.basic)},active:function(){return O.hasClass(x.active)},animating:function(){return a!==n&&a.hasClass(x.animating)},fluid:function(){return a!==n&&a.hasClass(x.fluid)},visible:function(){return a!==n&&a.hasClass(x.popupVisible)},dropdown:function(){return O.hasClass(x.dropdown)},hidden:function(){return!P.is.visible()},rtl:function(){return"rtl"===O.attr("dir")||"rtl"===O.css("direction")}},reset:function(){P.remove.visible(),C.preserve?t.fn.transition!==n&&a.transition("remove transition"):P.removePopup()},setting:function(e,o){if(t.isPlainObject(e))t.extend(!0,C,e);else{if(o===n)return C[e];C[e]=o}},internal:function(e,o){if(t.isPlainObject(e))t.extend(!0,P,e);else{if(o===n)return P[e];P[e]=o}},debug:function(){!C.silent&&C.debug&&(C.performance?P.performance.log(arguments):(P.debug=Function.prototype.bind.call(console.info,console,C.name+":"),P.debug.apply(console,arguments)))},verbose:function(){!C.silent&&C.verbose&&C.debug&&(C.performance?P.performance.log(arguments):(P.verbose=Function.prototype.bind.call(console.info,console,C.name+":"),P.verbose.apply(console,arguments)))},error:function(){C.silent||(P.error=Function.prototype.bind.call(console.error,console,C.name+":"),P.error.apply(console,arguments))},performance:{log:function(t){var e,o,n;C.performance&&(e=(new Date).getTime(),n=d||e,o=e-n,d=e,f.push({Name:t[0],Arguments:[].slice.call(t,1)||"",Element:M,"Execution Time":o})),clearTimeout(P.performance.timer),P.performance.timer=setTimeout(P.performance.display,500)},display:function(){var e=C.name+":",o=0;d=!1,clearTimeout(P.performance.timer),t.each(f,function(t,e){o+=e["Execution Time"]}),e+=" "+o+"ms",u&&(e+=" '"+u+"'"),(console.group!==n||console.table!==n)&&f.length>0&&(console.groupCollapsed(e),console.table?console.table(f):t.each(f,function(t,e){console.log(e.Name+": "+e["Execution Time"]+"ms")}),console.groupEnd()),f=[]}},invoke:function(e,o,i){var a,s,p,l=z;return o=o||m,i=M||i,"string"==typeof e&&l!==n&&(e=e.split(/[\. ]/),a=e.length-1,t.each(e,function(o,i){var r=o!=a?i+e[o+1].charAt(0).toUpperCase()+e[o+1].slice(1):e;if(t.isPlainObject(l[r])&&o!=a)l=l[r];else{if(l[r]!==n)return s=l[r],!1;if(!t.isPlainObject(l[i])||o==a)return l[i]!==n&&(s=l[i],!1);l=l[i]}})),t.isFunction(s)?p=s.apply(i,o):s!==n&&(p=s),Array.isArray(r)?r.push(p):r!==n?r=[r,p]:p!==n&&(r=p),s}},g?(z===n&&P.initialize(),P.invoke(h)):(z!==n&&z.invoke("destroy"),P.initialize())}),r!==n?r:this},t.fn.popup.settings={name:"Popup",silent:!1,debug:!1,verbose:!1,performance:!0,namespace:"popup",observeChanges:!0,onCreate:function(){},onRemove:function(){},onShow:function(){},onVisible:function(){},onHide:function(){},onUnplaceable:function(){},onHidden:function(){},on:"hover",boundary:e,addTouchEvents:!0,position:"top left",forcePosition:!1,variation:"",movePopup:!0,target:!1,popup:!1,inline:!1,preserve:!1,hoverable:!1,content:!1,html:!1,title:!1,closable:!0,hideOnScroll:"auto",exclusive:!1,context:"body",scrollContext:e,prefer:"opposite",lastResort:!1,arrowPixelsFromEdge:20,delay:{show:50,hide:70},setFluidWidth:!0,duration:200,transition:"scale",distanceAway:0,jitter:2,offset:0,maxSearchDepth:15,error:{invalidPosition:"The position you specified is not a valid position",cannotPlace:"Popup does not fit within the boundaries of the viewport",method:"The method you called is not defined.",noTransition:"This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>",notFound:"The target or popup you specified does not exist on the page"},metadata:{activator:"activator",content:"content",html:"html",offset:"offset",position:"position",title:"title",variation:"variation"},className:{active:"active",basic:"basic",animating:"animating",dropdown:"dropdown",fluid:"fluid",loading:"loading",popup:"ui popup",position:"top left center bottom right",visible:"visible",popupVisible:"visible"},selector:{popup:".ui.popup"},templates:{escape:function(t){var e=/[<>"'`]/g,o=/[&<>"'`]/,n={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},i=function(t){return n[t]};return o.test(t)?(t=t.replace(/&(?![a-z0-9#]{1,6};)/,"&amp;"),t.replace(e,i)):t},popup:function(e){var o="",i=t.fn.popup.settings.templates.escape;return typeof e!==n&&(typeof e.title!==n&&e.title&&(e.title=i(e.title),o+='<div class="header">'+e.title+"</div>"),typeof e.content!==n&&e.content&&(e.content=i(e.content),o+='<div class="content">'+e.content+"</div>")),o}}}}(jQuery,window,document);