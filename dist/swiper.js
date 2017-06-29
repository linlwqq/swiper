!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var i=e();for(var s in i)("object"==typeof exports?exports:t)[s]=i[s]}}(this,function(){return function(t){function e(s){if(i[s])return i[s].exports;var n=i[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=2)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(){}return t.register=function(e,i){t._renders[e]=i},t.getRenderInstance=function(e){var i=t._renders[e];if(!i)throw new Error("Missing render : "+e);return new i},t.prototype.sign=function(t){return t=+t,0===t||isNaN(t)?0:t>0?1:-1},t}();s._renders={},e.default=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(){}return t.register=function(e,i){t._easings[e]=i},t.getEasingInstance=function(e){var i=t._easings[e];if(!i)throw new Error("Missing easing : "+e);return new i},t}();s._easings={},e.default=s},function(t,e,i){"use strict";var s=this&&this.__assign||Object.assign||function(t){for(var e,i=1,s=arguments.length;i<s;i++){e=arguments[i];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t};Object.defineProperty(e,"__esModule",{value:!0}),i(3);var n=i(4),r=i(0),o=i(5),a=i(6),h=i(7),c=i(8),u=i(9),f=i(1),d=i(10);r.default.register("slide",o.default),r.default.register("rotate",a.default),r.default.register("flip",h.default),r.default.register("card",c.default),r.default.register("fade",u.default),f.default.register("rubberBand",d.default);var p,l=function(){},v=document.createElement("div"),g={X:"Y",Y:"X"};!function(t){t[t.Forward=-1]="Forward",t[t.Nonward=0]="Nonward",t[t.Backward=1]="Backward"}(p||(p={}));var w=function(){function t(e){e=s({},t.DefaultOptions,e),e.transition=s({},t.DefaultOptions.transition,e.transition),this.$container=e.container,this.debug=e.debug,this.data=e.data,this.axis=e.isVertical?"Y":"X",this.isLoop=e.isLoop,this.initIndex=e.initIndex,this.frr=e.frr,this.keepDefaultClasses=e.keepDefaultClass,this.sideLength="X"===this.axis?this.$container.clientWidth:this.$container.clientHeight,this.transition=e.transition,this._listeners={},this.sliding=!1,this.moving=!1,this.pageChange=!1,this.moveDirection=p.Nonward,this.lastDirection=p.Nonward,this.activePage=v,this.start={X:0,Y:0},this.end={X:0,Y:0},this.offset={X:0,Y:0},this.sideOffset=0,this.easingInstance=f.default.getEasingInstance("rubberBand"),this.log=this.debug?console.log.bind(window.console):l,this.bindEvents(),this.initRender()}return t.prototype.bindEvents=function(){this.$container.addEventListener(t.Device.startEvent,this,{passive:!1}),this.$container.addEventListener(t.Device.moveEvent,this,{passive:!1}),window.addEventListener(t.Device.endEvent,this,{passive:!1}),window.addEventListener(t.Device.resizeEvent,this,!1)},t.prototype.unbindEvents=function(){this.$container.removeEventListener(t.Device.startEvent,this,{passive:!1}),this.$container.removeEventListener(t.Device.moveEvent,this,{passive:!1}),window.removeEventListener(t.Device.endEvent,this,{passive:!1}),window.removeEventListener(t.Device.resizeEvent,this,!1)},t.prototype.handleEvent=function(e){switch(e.type){case"mousedown":if(0!==e.button)break;case"touchstart":this.keepDefaultHandler(e),this.startHandler(e);break;case t.Device.moveEvent:this.keepDefaultHandler(e),this.moveHandler(e);break;case t.Device.endEvent:case t.Device.cancelEvent:this.endHandler(e);break;case t.Device.resizeEvent:this.resizeHandler(e)}},t.prototype.keepDefaultHandler=function(t){if(!t.target||!/^(input|textarea|a|select)$/i.test(t.target.tagName)){for(var e=this.keepDefaultClasses,i=0,s=e;i<s.length;i++){var n=s[i];if(t.target.classList.contains(n))return}t.preventDefault()}},t.prototype.startHandler=function(e){this.sliding||(this.moving=!0,this.log("start"),this.startTime=(new Date).getTime(),this.start.X=t.Device.hasTouch?e.targetTouches[0].pageX:e.pageX,this.start.Y=t.Device.hasTouch?e.targetTouches[0].pageY:e.pageY,this.transition=s({},this.transition,this.currentPage.transition),this.renderInstance=r.default.getRenderInstance(this.transition.name),this.fire("swipeBeforeStart"))},t.prototype.moveHandler=function(e){if(!this.sliding&&this.moving&&(this.log("moving"),this.end.X=t.Device.hasTouch?e.targetTouches[0].pageX:e.pageX,this.end.Y=t.Device.hasTouch?e.targetTouches[0].pageY:e.pageY,this.offset={X:this.end.X-this.start.X,Y:this.end.Y-this.start.Y},!(Math.abs(this.offset[this.axis])<this.frr)&&(this.offset[this.axis]<0?(this.moveDirection=p.Forward,this.activePage=this.currentPage.next):this.offset[this.axis]>0?(this.moveDirection=p.Backward,this.activePage=this.currentPage.prev):(this.moveDirection=p.Nonward,this.activePage=v),this.fire("swipeChange"),this.lastDirection===p.Nonward&&this.fire("swipeStart"),(this.lastDirection===p.Nonward||this.moveDirection*this.lastDirection<0)&&this.fire("activePageChanged"),this.lastDirection=this.moveDirection,this.offset[this.axis]=this.offset[this.axis]-this.moveDirection*this.frr,void 0===this.transition.direction||this.transition.direction===this.moveDirection))){this.pageChange=this.activePage!==v;var i={Forward:20,Backward:this.sideLength-20},s=p[this.moveDirection];if(this.moveDirection*this.end[this.axis]>this.moveDirection*i[s]){var n=this.moveDirection===p.Forward?"<--- near edge":"near edge ---\x3e";this.log(n),this.endHandler()}0!==this.transition.duration&&this.render()}},t.prototype.endHandler=function(t){if(!this.sliding&&this.moving&&(this.moving=!1,this.log("end"),!(this.transition.direction&&this.transition.direction!==this.moveDirection||this.transition.direction===p.Nonward))){this.endTime=(new Date).getTime();var e=this.endTime-this.startTime,i=e>300?this.sideLength/3:14,s=(this.offset[this.axis],Math.abs(this.offset[this.axis])),n=Math.abs(this.offset[g[this.axis]]),r=n<s;s>=i&&r&&this.activePage!==v?(this.pageChange=!0,this._swipeTo()):(this.moveDirection=-1*this.moveDirection,this.pageChange=!1,this._swipeTo(),this.fire("swipeRestore"))}},t.prototype.resizeHandler=function(t){},t.prototype.swipeTo=function(t,e){var i=this.currentPage.index;this.moveDirection=p.Nonward,this.pageChange=!0,t>i?this.moveDirection=p.Forward:t<i&&(this.moveDirection=p.Backward);var n=this.isLoop?(t+this.data.length)%this.data.length:t;this.activePage=this.$pages[n]||v,n!==i&&this.activePage!==v||(this.pageChange=!1),this.offset[this.axis]=1*this.moveDirection,this.transition=s({},this.transition,e),this.renderInstance=r.default.getRenderInstance(this.transition.name),this.fire("activePageChanged"),this._swipeTo()},t.prototype._swipeTo=function(){function t(r){null===i&&(i=r),this.offset[this.axis]=s+(r-i)*this.moveDirection*n,this.moveDirection*this.offset[this.axis]<this.moveDirection*a?(this.log(o+" rendering..."),this.render(),e(t.bind(this))):(this.offset[this.axis]=a,this.render())}if(!this.sliding){this.sliding=!0;var e=window.requestAnimationFrame||window.webkitRequestAnimationFrame,i=null,s=this.offset[this.axis],n=this.sideLength/this.transition.duration,r={Forward:{unSwipe:0,swipe:-this.sideLength},Backward:{unSwipe:0,swipe:this.sideLength},Nonward:0},o=this.pageChange?"swipe":"unSwipe",a=r[p[this.moveDirection]][o]||0;e(t.bind(this))}},t.prototype.initRender=function(){var t=this;this.$swiper=document.createElement("div"),this.$swiper.classList.add("lg-swiper"),this.$pages=this.data.map(function(e,i){var s=document.createElement("div");return s.classList.add("lg-swiper-page"),"string"==typeof e.content?s.innerHTML=e.content:s.appendChild(e.content),s.index=i,s.transition=e.transition,t.initIndex===i&&(s.classList.add("current"),t.currentPage=s),t.$swiper.appendChild(s),s}),this.$pages.forEach(function(e,i,s){var n=t.isLoop?(s.length+i-1)%s.length:i-1,r=t.isLoop?(s.length+i+1)%s.length:i+1;e.prev=t.$pages[n]||v,e.next=t.$pages[r]||v}),this.$container.style.overflow="hidden",this.$container.appendChild(this.$swiper)},t.prototype.on=function(t,e){for(var i=t.split(" "),s=0,n=i;s<n.length;s++){var r=n[s];this._listeners[r]||(this._listeners[r]=[]),this._listeners[r].push(e)}return this},t.prototype.off=function(t,e){if(this._listeners[t]){var i=this._listeners[t].indexOf(e);i>-1&&this._listeners[t].splice(i,1)}return this},t.prototype.fire=function(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];if(this._listeners[t])for(var n=0,r=this._listeners[t];n<r.length;n++){var o=r[n],a=s({},e,{name:t});o.call(this,a)}return this},t.prototype.destroy=function(){this.unbindEvents(),this._listeners={},this.$container.parentElement.removeChild(this.$container),this.fire("destroy",{name:"destroy"})},t.prototype.sign=function(t){return t=+t,0===t||isNaN(t)?0:t>0?1:-1},t.prototype.easing=function(t){var e=Math.abs(t),i=this.sign(this.offset[this.axis]);return this.isLoop||this.activePage===v&&!1===this.pageChange&&(e=i*this.moveDirection>0?this.easingInstance.ACompute(t):this.easingInstance.BCompute(t)),i*e},t.prototype.render=function(){var t=this.axis;this.sideOffset=this.sideLength*this.easing(this.offset[t]/this.sideLength);var e=document.querySelector(".active");e&&(e.classList.remove("active"),e.style.cssText=""),this.currentPage.style.cssText="",this.activePage.style.cssText="";var i=this.renderInstance.doRender(this);this.$swiper.style.cssText=i.swiper,this.currentPage.style.cssText=i.currentPage,this.activePage!==v&&(this.activePage.classList.add("active"),this.activePage.style.cssText=i.activePage),!1===this.pageChange&&0===this.offset[t]&&(this.$container.style.cssText="",this.$swiper.style.cssText="",this.currentPage.style.cssText="",this.activePage.style.cssText="",this.activePage.classList.remove("active"),this.activePage=v,this.sliding=!1,this.pageChange=!1,this.lastDirection=p.Nonward,this.sideOffset=0,this.easingInstance.reset(),this.fire("swipeRestored")),!0===this.pageChange&&this.offset[t]===this.moveDirection*this.sideLength&&(this.$container.style.cssText="",this.$swiper.style.cssText="",this.currentPage.style.cssText="",this.activePage.style.cssText="",this.currentPage.classList.remove("current"),this.activePage.classList.remove("active"),this.activePage.classList.add("current"),this.currentPage=this.activePage,this.activePage=v,this.offset.X=0,this.offset.Y=0,this.sliding=!1,this.pageChange=!1,this.lastDirection=p.Nonward,this.sideOffset=0,this.easingInstance.reset(),this.fire("swipeChanged"))},t}();w.Events=["swipeBeforeStart","swipeStart","swipeChange","swipeChanged","swipeRestore","swipeRestored","activePageChanged","destroy"],w.Device=new n.Device(window),w.DefaultOptions={container:document.body,data:[],debug:!1,isVertical:!0,isLoop:!1,initIndex:0,frr:10,keepDefaultClass:[],transition:{name:"slide",duration:800}},e.Swiper=w},function(t,e){},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t){this.hasTouch=!!("ontouchstart"in t&&!/Mac OS X /.test(t.navigator.userAgent)||t.DocumentTouch&&document instanceof t.DocumentTouch),this.startEvent=this.hasTouch?"touchstart":"mousedown",this.moveEvent=this.hasTouch?"touchmove":"mousemove",this.endEvent=this.hasTouch?"touchend":"mouseup",this.cancelEvent=this.hasTouch?"touchcancel":"mouseout",this.resizeEvent="onorientationchange"in t?"orientationchange":"resize"}return t}();e.Device=s},function(t,e,i){"use strict";var s=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function s(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(s.prototype=i.prototype,new s)}}();Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),r=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.doRender=function(t){var e=t.axis,i=t.sideOffset,s=t.sideLength;return{currentPage:"-webkit-transform: translateZ(0) translate"+e+"("+i+"px)",activePage:"-webkit-transform: translateZ(0) translate"+e+"("+(i-this.sign(i)*s)+"px)"}},e}(n.default);e.default=r},function(t,e,i){"use strict";var s=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function s(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(s.prototype=i.prototype,new s)}}();Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),r={X:"Y",Y:"X"},o=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.doRender=function(t){var e=t.axis,i=t.sideOffset,s=t.sideLength,n=r[e],o=this.sign(i),a="Y"===e?-1:1;return{swiper:"-webkit-perspective:"+4*s+"px;-webkit-transform-style:preserve-3d",currentPage:"-webkit-transform: rotate"+n+"("+90*a*i/s+"deg) translateZ("+.889*s/2+"px) scale(0.889)",activePage:"-webkit-transform: rotate"+n+"("+90*a*(i/s-o)+"deg) translateZ("+.889*s/2+"px) scale(0.889)"}},e}(n.default);e.default=o},function(t,e,i){"use strict";var s=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function s(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(s.prototype=i.prototype,new s)}}();Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),r={X:"Y",Y:"X"},o=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.doRender=function(t){var e=t.axis,i=t.sideOffset,s=t.sideLength,n=(t.moveDirection,r[e]),o=(t.pageChange,"Y"===e?-1:1),a="-webkit-backface-visibility:hidden;";return{swiper:"-webkit-perspective:"+4*s+"px;-webkit-transform-style:flat",currentPage:a+"-webkit-transform: translateZ("+s/2+"px) rotate"+n+"("+180*o*i/s+"deg) scale(0.875)",activePage:a+"-webkit-transform: translateZ("+s/2+"px) rotate"+n+"("+180*o*(i/s+1)+"deg) scale(0.875);z-index: 7;"}},e}(n.default);e.default=o},function(t,e,i){"use strict";var s=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function s(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(s.prototype=i.prototype,new s)}}();Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),r={X:"Y",Y:"X"},o=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.doRender=function(t){var e=t.axis,i=t.sideOffset,s=t.sideLength;t.pageChange;return{currentPage:"-webkit-transform: translateZ(0) scale"+r[e]+"("+(1-.2*Math.abs(i/s))+") translate"+e+"("+i+"px)",activePage:"-webkit-transform: translateZ(0) translate"+e+"("+(i-this.sign(i)*s)+"px)"}},e}(n.default);e.default=o},function(t,e,i){"use strict";var s=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function s(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(s.prototype=i.prototype,new s)}}();Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),r=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.doRender=function(t){var e=(t.axis,t.sideOffset),i=t.sideLength;return{currentPage:"opacity: "+(1-Math.abs(e/i)),activePage:"opacity: "+Math.abs(e/i)}},e}(n.default);e.default=r},function(t,e,i){"use strict";var s=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function s(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(s.prototype=i.prototype,new s)}}();Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),r=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._isB=!1,e}return s(e,t),e.prototype.ACompute=function(t){return-.2*(t=Math.abs(t))*(t-2)},e.prototype.BCompute=function(t){return this._isB||(this._x=Math.abs(t),this.coeff=this.ACompute(this._x)/(this._x*this._x),this._isB=!0),this.coeff*t*t*t},e.prototype.reset=function(){this._isB=!1},e}(n.default);e.default=r}])});