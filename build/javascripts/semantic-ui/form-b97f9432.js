/*!
 * # Fomantic-UI - Form Validation
 * http://github.com/fomantic/Fomantic-UI/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(e,t,n,r){"use strict";e.isFunction=e.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},t=void 0!==t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.form=function(i){var a,o=e(this),l=o.selector||"",s=(new Date).getTime(),u=[],c=arguments[0],d=arguments[1],f="string"==typeof c,m=[].slice.call(arguments,1);return o.each(function(){var p,g,h,v,b,y,x,k,E,w,C,D,V,F,A,R,S,T,j,I=e(this),$=this,O=[],L=!1,z=!1,P=!1,M=["clean","clean"];j={initialize:function(){j.get.settings(),f?(T===r&&j.instantiate(),j.invoke(c)):(T!==r&&T.invoke("destroy"),j.verbose("Initializing form validation",I,k),j.bindEvents(),j.set.defaults(),j.instantiate())},instantiate:function(){j.verbose("Storing instance of module",j),T=j,I.data(R,j)},destroy:function(){j.verbose("Destroying previous module",T),j.removeEvents(),I.removeData(R)},refresh:function(){j.verbose("Refreshing selector cache"),p=I.find(C.field),g=I.find(C.group),h=I.find(C.message),v=I.find(C.prompt),b=I.find(C.submit),y=I.find(C.clear),x=I.find(C.reset)},submit:function(){j.verbose("Submitting form",I),z=!0,I.submit()},attachEvents:function(t,n){n=n||"submit",e(t).on("click"+S,function(e){j[n](),e.preventDefault()})},bindEvents:function(){j.verbose("Attaching form events"),I.on("submit"+S,j.validate.form).on("blur"+S,C.field,j.event.field.blur).on("click"+S,C.submit,j.submit).on("click"+S,C.reset,j.reset).on("click"+S,C.clear,j.clear),k.keyboardShortcuts&&I.on("keydown"+S,C.field,j.event.field.keydown),p.each(function(t,n){var r=e(n),i=r.prop("type"),a=j.get.changeEvent(i,r);r.on(a+S,j.event.field.change)}),k.preventLeaving&&e(t).on("beforeunload"+S,j.event.beforeUnload),p.on("change click keyup keydown blur",function(t){e(this).triggerHandler(t.type+".dirty")}),p.on("change.dirty click.dirty keyup.dirty keydown.dirty blur.dirty",j.determine.isDirty),I.on("dirty"+S,function(){k.onDirty.call()}),I.on("clean"+S,function(){k.onClean.call()})},clear:function(){p.each(function(t,n){var r=e(n),i=r.parent(),a=r.closest(g),o=a.find(C.prompt),l=r.closest(C.uiCalendar),s=r.data(w.defaultValue)||"",u=i.is(C.uiCheckbox),c=i.is(C.uiDropdown)&&j.can.useElement("dropdown"),d=l.length>0&&j.can.useElement("calendar");a.hasClass(D.error)&&(j.verbose("Resetting error on field",a),a.removeClass(D.error),o.remove()),c?(j.verbose("Resetting dropdown value",i,s),i.dropdown("clear",!0)):u?r.prop("checked",!1):d?l.calendar("clear"):(j.verbose("Resetting field value",r,s),r.val(""))})},reset:function(){p.each(function(t,n){var i=e(n),a=i.parent(),o=i.closest(g),l=i.closest(C.uiCalendar),s=o.find(C.prompt),u=i.data(w.defaultValue),c=a.is(C.uiCheckbox),d=a.is(C.uiDropdown)&&j.can.useElement("dropdown"),f=l.length>0&&j.can.useElement("calendar"),m=o.hasClass(D.error);u!==r&&(m&&(j.verbose("Resetting error on field",o),o.removeClass(D.error),s.remove()),d?(j.verbose("Resetting dropdown value",a,u),a.dropdown("restore defaults",!0)):c?(j.verbose("Resetting checkbox value",a,u),i.prop("checked",u)):f?l.calendar("set date",u):(j.verbose("Resetting field value",i,u),i.val(u)))}),j.determine.isDirty()},determine:{isValid:function(){var t=!0;return e.each(E,function(e,n){j.validate.field(n,e,!0)||(t=!1)}),t},isDirty:function(t){var n=!1;p.each(function(t,r){var i,a=e(r),o=a.filter(C.checkbox).length>0;i=o?j.is.checkboxDirty(a):j.is.fieldDirty(a),a.data(k.metadata.isDirty,i),n|=i}),n?j.set.dirty():j.set.clean(),t&&"dirty"===t.namespace&&(t.stopImmediatePropagation(),t.preventDefault())}},is:{bracketedRule:function(e){return e.type&&e.type.match(k.regExp.bracket)},shorthandFields:function(e){var t=Object.keys(e),n=e[t[0]];return j.is.shorthandRules(n)},shorthandRules:function(e){return"string"==typeof e||Array.isArray(e)},empty:function(e){return!e||0===e.length||(e.is(C.checkbox)?!e.is(":checked"):j.is.blank(e))},blank:function(t){return""===e.trim(t.val())},valid:function(t){var n=!0;return t?(j.verbose("Checking if field is valid",t),j.validate.field(E[t],t,!1)):(j.verbose("Checking if form is valid"),e.each(E,function(e){j.is.valid(e)||(n=!1)}),n)},dirty:function(){return P},clean:function(){return!P},fieldDirty:function(e){var t=e.data(w.defaultValue);null==t&&(t="");var n=e.val();null==n&&(n="");var r=/^(true|false)$/i;if(r.test(t)&&r.test(n))return!new RegExp("^"+t+"$","i").test(n);return n!==t},checkboxDirty:function(e){return e.data(w.defaultValue)!==e.is(":checked")},justDirty:function(){return"dirty"===M[0]},justClean:function(){return"clean"===M[0]}},removeEvents:function(){I.off(S),p.off(S),b.off(S),p.off(S)},event:{field:{keydown:function(t){var n=e(this),r=t.which,i=n.is(C.input),a=n.is(C.checkbox),o=n.closest(C.uiDropdown).length>0,l={enter:13,escape:27};r==l.escape&&(j.verbose("Escape key pressed blurring field"),n.blur()),t.ctrlKey||r!=l.enter||!i||o||a||(L||(n.one("keyup"+S,j.event.field.keyup),j.submit(),j.debug("Enter pressed on input submitting form")),L=!0)},keyup:function(){L=!1},blur:function(){var t=e(this),n=t.closest(g),r=j.get.validation(t);n.hasClass(D.error)?(j.debug("Revalidating field",t,r),r&&j.validate.field(r)):"blur"==k.on&&r&&j.validate.field(r)},change:function(){var t=e(this),n=t.closest(g),r=j.get.validation(t);r&&("change"==k.on||n.hasClass(D.error)&&k.revalidate)&&(clearTimeout(j.timer),j.timer=setTimeout(function(){j.debug("Revalidating field",t,j.get.validation(t)),j.validate.field(r)},k.delay))}},beforeUnload:function(e){if(j.is.dirty()&&!z){var e=e||t.event;return e&&(e.returnValue=k.text.leavingMessage),k.text.leavingMessage}}},get:{ancillaryValue:function(e){return!(!e.type||!e.value&&!j.is.bracketedRule(e))&&(e.value!==r?e.value:e.type.match(k.regExp.bracket)[1]+"")},ruleName:function(e){return j.is.bracketedRule(e)?e.type.replace(e.type.match(k.regExp.bracket)[0],""):e.type},changeEvent:function(e,t){return"checkbox"==e||"radio"==e||"hidden"==e||t.is("select")?"change":j.get.inputEvent()},inputEvent:function(){return n.createElement("input").oninput!==r?"input":n.createElement("input").onpropertychange!==r?"propertychange":"keyup"},fieldsFromShorthand:function(t){var n={};return e.each(t,function(t,r){"string"==typeof r&&(r=[r]),n[t]={rules:[]},e.each(r,function(e,r){n[t].rules.push({type:r})})}),n},prompt:function(t,n){var r,i,a=j.get.ruleName(t),o=j.get.ancillaryValue(t),l=j.get.field(n.identifier),s=l.val(),u=e.isFunction(t.prompt)?t.prompt(s):t.prompt||k.prompt[a]||k.text.unspecifiedRule,c=-1!==u.search("{value}"),d=-1!==u.search("{name}");return c&&(u=u.replace("{value}",l.val())),d&&(r=l.closest(C.group).find("label").eq(0),i=1==r.length?r.text():l.prop("placeholder")||k.text.unspecifiedField,u=u.replace("{name}",i)),u=u.replace("{identifier}",n.identifier),u=u.replace("{ruleValue}",o),t.prompt||j.verbose("Using default validation prompt for type",u,a),u},settings:function(){if(e.isPlainObject(i)){var t=Object.keys(i);t.length>0&&(i[t[0]].identifier!==r&&i[t[0]].rules!==r)?(k=e.extend(!0,{},e.fn.form.settings,d),E=e.extend({},e.fn.form.settings.defaults,i),j.error(k.error.oldSyntax,$),j.verbose("Extending settings from legacy parameters",E,k)):(i.fields&&j.is.shorthandFields(i.fields)&&(i.fields=j.get.fieldsFromShorthand(i.fields)),k=e.extend(!0,{},e.fn.form.settings,i),E=e.extend({},e.fn.form.settings.defaults,k.fields),j.verbose("Extending settings",E,k))}else k=e.fn.form.settings,E=e.fn.form.settings.defaults,j.verbose("Using default form validation",E,k);A=k.namespace,w=k.metadata,C=k.selector,D=k.className,V=k.regExp,F=k.error,R="module-"+A,S="."+A,T=I.data(R),j.refresh()},field:function(t){j.verbose("Finding field with identifier",t),t=j.escape.string(t);var n;return(n=p.filter("#"+t)).length>0?n:(n=p.filter('[name="'+t+'"]')).length>0?n:(n=p.filter('[name="'+t+'[]"]')).length>0?n:(n=p.filter("[data-"+w.validate+'="'+t+'"]')).length>0?n:e("<input/>")},fields:function(t){var n=e();return e.each(t,function(e,t){n=n.add(j.get.field(t))}),n},validation:function(t){var n,r;return!!E&&(e.each(E,function(i,a){r=a.identifier||i,e.each(j.get.field(r),function(e,i){if(i==t[0])return a.identifier=r,n=a,!1})}),n||!1)},value:function(e){var t,n=[];return n.push(e),t=j.get.values.call($,n),t[e]},values:function(t){var n=Array.isArray(t)?j.get.fields(t):p,i={};return n.each(function(t,n){var a=e(n),o=a.closest(C.uiCalendar),l=a.prop("name"),s=a.val(),u=a.is(C.checkbox),c=a.is(C.radio),d=-1!==l.indexOf("[]"),f=o.length>0&&j.can.useElement("calendar"),m=!!u&&a.is(":checked");if(l)if(d)l=l.replace("[]",""),i[l]||(i[l]=[]),u?m?i[l].push(s||!0):i[l].push(!1):i[l].push(s);else if(c)i[l]!==r&&0!=i[l]||(i[l]=!!m&&(s||!0));else if(u)i[l]=!!m&&(s||!0);else if(f){var p=o.calendar("get date");if(null!==p){if("date"==k.dateHandling)i[l]=p;else if("input"==k.dateHandling)i[l]=o.calendar("get input date");else if("formatter"==k.dateHandling){var g=o.calendar("setting","type");switch(g){case"date":i[l]=k.formatter.date(p);break;case"datetime":i[l]=k.formatter.datetime(p);break;case"time":i[l]=k.formatter.time(p);break;case"month":i[l]=k.formatter.month(p);break;case"year":i[l]=k.formatter.year(p);break;default:j.debug("Wrong calendar mode",o,g),i[l]=""}}}else i[l]=""}else i[l]=s}),i},dirtyFields:function(){return p.filter(function(t,n){return e(n).data(w.isDirty)})}},has:{field:function(e){return j.verbose("Checking for existence of a field with identifier",e),e=j.escape.string(e),"string"!=typeof e&&j.error(F.identifier,e),p.filter("#"+e).length>0||(p.filter('[name="'+e+'"]').length>0||p.filter("[data-"+w.validate+'="'+e+'"]').length>0)}},can:{useElement:function(t){return e.fn[t]!==r||(j.error(F.noElement.replace("{element}",t)),!1)}},escape:{string:function(e){return e=String(e),e.replace(V.escape,"\\$&")}},add:{rule:function(e,t){j.add.field(e,t)},field:function(t,n){E[t]!==r&&E[t].rules!==r||(E[t]={rules:[]});var i={rules:[]};j.is.shorthandRules(n)?(n=Array.isArray(n)?n:[n],e.each(n,function(e,t){i.rules.push({type:t})})):i.rules=n.rules,e.each(i.rules,function(n,r){0==e.grep(E[t].rules,function(e){return e.type==r.type}).length&&E[t].rules.push(r)}),j.debug("Adding rules",i.rules,E)},fields:function(t){var n;n=t&&j.is.shorthandFields(t)?j.get.fieldsFromShorthand(t):t,E=e.extend({},E,n)},prompt:function(e,t,n){var r=j.get.field(e),i=r.closest(g),a=i.children(C.prompt),o=0!==a.length;t="string"==typeof t?[t]:t,j.verbose("Adding field error state",e),n||i.addClass(D.error),k.inline&&(o||(a=k.templates.prompt(t,D.label),a.appendTo(i)),a.html(t[0]),o?j.verbose("Inline errors are disabled, no inline error added",e):k.transition&&j.can.useElement("transition")&&I.transition("is supported")?(j.verbose("Displaying error with css transition",k.transition),a.transition(k.transition+" in",k.duration)):(j.verbose("Displaying error with fallback javascript animation"),a.fadeIn(k.duration)))},errors:function(e){j.debug("Adding form error messages",e),j.set.error(),h.html(k.templates.error(e))}},remove:{rule:function(t,n){var i=Array.isArray(n)?n:[n];if(E[t]!==r&&Array.isArray(E[t].rules))return n===r?(j.debug("Removed all rules"),void(E[t].rules=[])):void e.each(E[t].rules,function(e,n){n&&-1!==i.indexOf(n.type)&&(j.debug("Removed rule",n.type),E[t].rules.splice(e,1))})},field:function(t){var n=Array.isArray(t)?t:[t];e.each(n,function(e,t){j.remove.rule(t)})},rules:function(t,n){Array.isArray(t)?e.each(t,function(e,t){j.remove.rule(t,n)}):j.remove.rule(t,n)},fields:function(e){j.remove.field(e)},prompt:function(e){var t=j.get.field(e),n=t.closest(g),r=n.children(C.prompt);n.removeClass(D.error),k.inline&&r.is(":visible")&&(j.verbose("Removing prompt for field",e),k.transition&&j.can.useElement("transition")&&I.transition("is supported")?r.transition(k.transition+" out",k.duration,function(){r.remove()}):r.fadeOut(k.duration,function(){r.remove()}))}},set:{success:function(){I.removeClass(D.error).addClass(D.success)},defaults:function(){p.each(function(t,n){var r=e(n),i=r.parent(),a=r.filter(C.checkbox).length>0,o=i.is(C.uiDropdown)&&j.can.useElement("dropdown"),l=r.closest(C.uiCalendar),s=l.length>0&&j.can.useElement("calendar"),u=a?r.is(":checked"):r.val();o?i.dropdown("save defaults"):s&&l.calendar("refresh"),r.data(w.defaultValue,u),r.data(w.isDirty,!1)})},error:function(){I.removeClass(D.success).addClass(D.error)},value:function(e,t){var n={};return n[e]=t,j.set.values.call($,n)},values:function(t){e.isEmptyObject(t)||e.each(t,function(t,n){var r,i=j.get.field(t),a=i.parent(),o=i.closest(C.uiCalendar),l=Array.isArray(n),s=a.is(C.uiCheckbox)&&j.can.useElement("checkbox"),u=a.is(C.uiDropdown)&&j.can.useElement("dropdown"),c=i.is(C.radio)&&s,d=o.length>0&&j.can.useElement("calendar"),f=i.length>0;f&&(l&&s?(j.verbose("Selecting multiple",n,i),a.checkbox("uncheck"),e.each(n,function(e,t){r=i.filter('[value="'+t+'"]'),a=r.parent(),r.length>0&&a.checkbox("check")})):c?(j.verbose("Selecting radio value",n,i),i.filter('[value="'+n+'"]').parent(C.uiCheckbox).checkbox("check")):s?(j.verbose("Setting checkbox value",n,a),!0===n||1===n?a.checkbox("check"):a.checkbox("uncheck")):u?(j.verbose("Setting dropdown value",n,a),a.dropdown("set selected",n)):d?o.calendar("set date",n):(j.verbose("Setting field value",n,i),i.val(n)))})},dirty:function(){j.verbose("Setting state dirty"),P=!0,M[0]=M[1],M[1]="dirty",j.is.justClean()&&I.trigger("dirty")},clean:function(){j.verbose("Setting state clean"),P=!1,M[0]=M[1],M[1]="clean",j.is.justDirty()&&I.trigger("clean")},asClean:function(){j.set.defaults(),j.set.clean()},asDirty:function(){j.set.defaults(),j.set.dirty()}},validate:{form:function(e,t){var n=j.get.values();if(L)return!1;if(O=[],j.determine.isValid()){if(j.debug("Form has no validation errors, submitting"),j.set.success(),!0!==t)return k.onSuccess.call($,e,n)}else if(j.debug("Form has errors"),j.set.error(),k.inline||j.add.errors(O),e&&I.data("moduleApi")!==r&&e.stopImmediatePropagation(),!0!==t)return k.onFailure.call($,O,n)},field:function(t,n,i){i=i===r||i,"string"==typeof t&&(j.verbose("Validating field",t),n=t,t=E[t]);var a=t.identifier||n,o=j.get.field(a),l=!!t.depends&&j.get.field(t.depends),s=!0,u=[];t.identifier||(j.debug("Using field name as identifier",a),t.identifier=a);var c=!0;return e.each(o,function(){if(!e(this).prop("disabled"))return c=!1,!1}),c?j.debug("Field is disabled. Skipping",a):t.optional&&j.is.blank(o)?j.debug("Field is optional and blank. Skipping",a):t.depends&&j.is.empty(l)?j.debug("Field depends on another value that is not present or empty. Skipping",l):t.rules!==r&&(o.closest(g).removeClass(D.error),e.each(t.rules,function(n,r){if(j.has.field(a)){var o=j.validate.rule(t,r,!0)||[];o.length>0&&(j.debug("Field is invalid",a,r.type),u.push(j.get.prompt(r,t)),s=!1,i&&e(o).closest(g).addClass(D.error))}})),s?(i&&(j.remove.prompt(a,u),k.onValid.call(o)),!0):(i&&(O=O.concat(u),j.add.prompt(a,u,!0),k.onInvalid.call(o,u)),!1)},rule:function(t,n,i){var a=j.get.field(t.identifier),o=j.get.ancillaryValue(n),l=j.get.ruleName(n),s=k.rules[l],u=[],c=a.is(C.checkbox),d=function(t){var n=c?e(t).filter(":checked").val():e(t).val();return n=n===r||""===n||null===n?"":k.shouldTrim?e.trim(n+""):String(n+""),s.call(t,n,o,I)};return e.isFunction(s)?(c?d(a)||(u=a):e.each(a,function(e,t){d(t)||u.push(t)}),i?u:!(u.length>0)):void j.error(F.noRule,l)}},setting:function(t,n){if(e.isPlainObject(t))e.extend(!0,k,t);else{if(n===r)return k[t];k[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,j,t);else{if(n===r)return j[t];j[t]=n}},debug:function(){!k.silent&&k.debug&&(k.performance?j.performance.log(arguments):(j.debug=Function.prototype.bind.call(console.info,console,k.name+":"),j.debug.apply(console,arguments)))},verbose:function(){!k.silent&&k.verbose&&k.debug&&(k.performance?j.performance.log(arguments):(j.verbose=Function.prototype.bind.call(console.info,console,k.name+":"),j.verbose.apply(console,arguments)))},error:function(){k.silent||(j.error=Function.prototype.bind.call(console.error,console,k.name+":"),j.error.apply(console,arguments))},performance:{log:function(e){var t,n,r;k.performance&&(t=(new Date).getTime(),r=s||t,n=t-r,s=t,u.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:$,"Execution Time":n})),clearTimeout(j.performance.timer),j.performance.timer=setTimeout(j.performance.display,500)},display:function(){var t=k.name+":",n=0;s=!1,clearTimeout(j.performance.timer),e.each(u,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",l&&(t+=" '"+l+"'"),o.length>1&&(t+=" ("+o.length+")"),(console.group!==r||console.table!==r)&&u.length>0&&(console.groupCollapsed(t),console.table?console.table(u):e.each(u,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),u=[]}},invoke:function(t,n,i){var o,l,s,u=T;return n=n||m,i=$||i,"string"==typeof t&&u!==r&&(t=t.split(/[\. ]/),o=t.length-1,e.each(t,function(n,i){var a=n!=o?i+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(u[a])&&n!=o)u=u[a];else{if(u[a]!==r)return l=u[a],!1;if(!e.isPlainObject(u[i])||n==o)return u[i]!==r&&(l=u[i],!1);u=u[i]}})),e.isFunction(l)?s=l.apply(i,n):l!==r&&(s=l),Array.isArray(a)?a.push(s):a!==r?a=[a,s]:s!==r&&(a=s),l}},j.initialize()}),a!==r?a:this},e.fn.form.settings={name:"Form",namespace:"form",debug:!1,verbose:!1,performance:!0,fields:!1,keyboardShortcuts:!0,on:"submit",inline:!1,delay:200,revalidate:!0,shouldTrim:!0,transition:"scale",duration:200,preventLeaving:!1,dateHandling:"date",onValid:function(){},onInvalid:function(){},onSuccess:function(){return!0},onFailure:function(){return!1},onDirty:function(){},onClean:function(){},metadata:{defaultValue:"default",validate:"validate",isDirty:"isDirty"},regExp:{htmlID:/^[a-zA-Z][\w:.-]*$/g,bracket:/\[(.*)\]/i,decimal:/^\d+\.?\d*$/,email:/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,escape:/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|:,=@]/g,flags:/^\/(.*)\/(.*)?/,integer:/^\-?\d+$/,number:/^\-?\d*(\.\d+)?$/,url:/(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/i},text:{unspecifiedRule:"Please enter a valid value",unspecifiedField:"This field",leavingMessage:"There are unsaved changes on this page which will be discarded if you continue."},prompt:{empty:"{name} must have a value",checked:"{name} must be checked",email:"{name} must be a valid e-mail",url:"{name} must be a valid url",regExp:"{name} is not formatted correctly",integer:"{name} must be an integer",decimal:"{name} must be a decimal number",number:"{name} must be set to a number",is:'{name} must be "{ruleValue}"',isExactly:'{name} must be exactly "{ruleValue}"',not:'{name} cannot be set to "{ruleValue}"',notExactly:'{name} cannot be set to exactly "{ruleValue}"',contain:'{name} must contain "{ruleValue}"',containExactly:'{name} must contain exactly "{ruleValue}"',doesntContain:'{name} cannot contain  "{ruleValue}"',doesntContainExactly:'{name} cannot contain exactly "{ruleValue}"',minLength:"{name} must be at least {ruleValue} characters",length:"{name} must be at least {ruleValue} characters",exactLength:"{name} must be exactly {ruleValue} characters",maxLength:"{name} cannot be longer than {ruleValue} characters",match:"{name} must match {ruleValue} field",different:"{name} must have a different value than {ruleValue} field",creditCard:"{name} must be a valid credit card number",minCount:"{name} must have at least {ruleValue} choices",exactCount:"{name} must have exactly {ruleValue} choices",maxCount:"{name} must have {ruleValue} or less choices"},selector:{checkbox:'input[type="checkbox"], input[type="radio"]',clear:".clear",field:"input, textarea, select",group:".field",input:"input",message:".error.message",prompt:".prompt.label",radio:'input[type="radio"]',reset:'.reset:not([type="reset"])',submit:'.submit:not([type="submit"])',uiCheckbox:".ui.checkbox",uiDropdown:".ui.dropdown",uiCalendar:".ui.calendar"},className:{error:"error",label:"ui basic red pointing prompt label",pressed:"down",success:"success"},error:{identifier:"You must specify a string identifier for each field",method:"The method you called is not defined.",noRule:"There is no rule matching the one you specified",oldSyntax:"Starting in 2.0 forms now only take a single settings object. Validation settings converted to new syntax automatically.",noElement:"This module requires ui {element}"},templates:{error:function(t){var n='<ul class="list">';return e.each(t,function(e,t){n+="<li>"+t+"</li>"}),n+="</ul>",e(n)},prompt:function(t,n){return e("<div/>").addClass(n).html(t[0])}},formatter:{date:function(e){return Intl.DateTimeFormat("en-GB").format(e)},datetime:function(e){return Intl.DateTimeFormat("en-GB",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e)},time:function(e){return Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e)},month:function(e){return Intl.DateTimeFormat("en-GB",{month:"2-digit",year:"numeric"}).format(e)},year:function(e){return Intl.DateTimeFormat("en-GB",{year:"numeric"}).format(e)}},rules:{empty:function(e){return!(e===r||""===e||Array.isArray(e)&&0===e.length)},checked:function(){return e(this).filter(":checked").length>0},email:function(t){return e.fn.form.settings.regExp.email.test(t)},url:function(t){return e.fn.form.settings.regExp.url.test(t)},regExp:function(t,n){if(n instanceof RegExp)return t.match(n);var r,i=n.match(e.fn.form.settings.regExp.flags);return i&&(n=i.length>=2?i[1]:n,r=i.length>=3?i[2]:""),t.match(new RegExp(n,r))},integer:function(t,n){var i,a,o,l=e.fn.form.settings.regExp.integer;return n&&-1===["",".."].indexOf(n)&&(-1==n.indexOf("..")?l.test(n)&&(i=a=n-0):(o=n.split("..",2),l.test(o[0])&&(i=o[0]-0),l.test(o[1])&&(a=o[1]-0))),l.test(t)&&(i===r||t>=i)&&(a===r||t<=a)},decimal:function(t){return e.fn.form.settings.regExp.decimal.test(t)},number:function(t){return e.fn.form.settings.regExp.number.test(t)},is:function(e,t){return t="string"==typeof t?t.toLowerCase():t,(e="string"==typeof e?e.toLowerCase():e)==t},isExactly:function(e,t){return e==t},not:function(e,t){return e="string"==typeof e?e.toLowerCase():e,t="string"==typeof t?t.toLowerCase():t,e!=t},notExactly:function(e,t){return e!=t},contains:function(t,n){return n=n.replace(e.fn.form.settings.regExp.escape,"\\$&"),-1!==t.search(new RegExp(n,"i"))},containsExactly:function(t,n){return n=n.replace(e.fn.form.settings.regExp.escape,"\\$&"),-1!==t.search(new RegExp(n))},doesntContain:function(t,n){return n=n.replace(e.fn.form.settings.regExp.escape,"\\$&"),-1===t.search(new RegExp(n,"i"))},doesntContainExactly:function(t,n){return n=n.replace(e.fn.form.settings.regExp.escape,"\\$&"),-1===t.search(new RegExp(n))},minLength:function(e,t){return e!==r&&e.length>=t},length:function(e,t){return e!==r&&e.length>=t},exactLength:function(e,t){return e!==r&&e.length==t},maxLength:function(e,t){return e!==r&&e.length<=t},match:function(e,t,n){var i,a;return(a=n.find('[data-validate="'+t+'"]')).length>0?i=a.val():(a=n.find("#"+t)).length>0?i=a.val():(a=n.find('[name="'+t+'"]')).length>0?i=a.val():(a=n.find('[name="'+t+'[]"]')).length>0&&(i=a),i!==r&&e.toString()==i.toString()},different:function(e,t,n){var i,a;return(a=n.find('[data-validate="'+t+'"]')).length>0?i=a.val():(a=n.find("#"+t)).length>0?i=a.val():(a=n.find('[name="'+t+'"]')).length>0?i=a.val():(a=n.find('[name="'+t+'[]"]')).length>0&&(i=a),i!==r&&e.toString()!==i.toString()},creditCard:function(t,n){var r,i,a={visa:{pattern:/^4/,length:[16]},amex:{pattern:/^3[47]/,length:[15]},mastercard:{pattern:/^5[1-5]/,length:[16]},discover:{pattern:/^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,length:[16]},unionPay:{pattern:/^(62|88)/,length:[16,17,18,19]},jcb:{pattern:/^35(2[89]|[3-8][0-9])/,length:[16]},maestro:{pattern:/^(5018|5020|5038|6304|6759|676[1-3])/,length:[12,13,14,15,16,17,18,19]},dinersClub:{pattern:/^(30[0-5]|^36)/,length:[14]},laser:{pattern:/^(6304|670[69]|6771)/,length:[16,17,18,19]},visaElectron:{pattern:/^(4026|417500|4508|4844|491(3|7))/,length:[16]}},o={},l=!1,s="string"==typeof n&&n.split(",");if("string"==typeof t&&0!==t.length){if(t=t.replace(/[\-]/g,""),s&&(e.each(s,function(n,r){(i=a[r])&&(o={length:-1!==e.inArray(t.length,i.length),pattern:-1!==t.search(i.pattern)},o.length&&o.pattern&&(l=!0))}),!l))return!1;if(r={number:-1!==e.inArray(t.length,a.unionPay.length),pattern:-1!==t.search(a.unionPay.pattern)},r.number&&r.pattern)return!0;for(var u=t.length,c=0,d=[[0,1,2,3,4,5,6,7,8,9],[0,2,4,6,8,1,3,5,7,9]],f=0;u--;)f+=d[c][parseInt(t.charAt(u),10)],c^=1;return f%10==0&&f>0}},minCount:function(e,t){return 0==t||(1==t?""!==e:e.split(",").length>=t)},exactCount:function(e,t){return 0==t?""===e:1==t?""!==e&&-1===e.search(","):e.split(",").length==t},maxCount:function(e,t){return 0!=t&&(1==t?-1===e.search(","):e.split(",").length<=t)}}}}(jQuery,window,document);