(function(e){function t(t){for(var n,i,u=t[0],o=t[1],l=t[2],b=0,d=[];b<u.length;b++)i=u[b],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);s&&s(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,u=1;u<a.length;u++){var o=a[u];0!==r[o]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},c=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/memory-game/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var s=o;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"0b65":function(e,t,a){},"60f1":function(e,t,a){},6443:function(e,t,a){"use strict";a("b48f")},6549:function(e,t,a){"use strict";a("e997")},"80e6":function(e,t,a){"use strict";a("60f1")},8145:function(e,t,a){},"8eeb":function(e,t,a){"use strict";a("b332")},9511:function(e,t,a){},b332:function(e,t,a){},b48f:function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),r=a("6c02"),c={class:"main"},i=Object(n["h"])("div",{class:"modal-place"},null,-1);function u(e,t,a,r,u,o){var l=Object(n["B"])("AppBar"),s=Object(n["B"])("router-view");return Object(n["t"])(),Object(n["g"])("div",null,[Object(n["j"])(l,{class:"header"}),Object(n["h"])("div",c,[Object(n["j"])(s)]),i])}Object(n["w"])("data-v-deaf14f6");var o={class:"app-bar"},l=Object(n["i"])("game"),s=Object(n["i"])("leaderboard");function b(e,t,a,r,c,i){var u=Object(n["B"])("router-link");return Object(n["t"])(),Object(n["g"])("div",o,[Object(n["j"])(u,{class:"app-bar__nav-button app-button",to:{name:"game"}},{default:Object(n["H"])((function(){return[l]})),_:1}),Object(n["j"])(u,{class:"app-bar__nav-button app-button",to:{name:"leaderboard"}},{default:Object(n["H"])((function(){return[s]})),_:1})])}Object(n["u"])();var d={name:"AppBar"};a("ecc5");d.render=b,d.__scopeId="data-v-deaf14f6";var v=d,f={name:"App",components:{AppBar:v}};a("8eeb");f.render=u;var O=f,j=a("2909"),p=(a("99af"),a("a4d3"),a("e01a"),a("d3b7"),a("5502")),m=Object(p["a"])({state:{resultsList:[]},mutations:{newResult:function(e,t){e.resultsList=[].concat(Object(j["a"])(e.resultsList),[t])}},getters:{topRankScore:function(e){var t=e.resultsList.reduce((function(e,t){return-1===e?t.score:Math.min(e,t.score)}),-1);return-1!==t?t:null}}}),h=Symbol("store");function g(){return Object(p["b"])(h)}Object(n["w"])("data-v-5d6f5a4a");var y={class:"game"},k={class:"info"},w={key:0},_={class:"square-adaptive-container field"},S={class:"square-adaptive-container__inside"},D={class:"field__grid"},C={class:"messages"},x={key:0},G={key:1};function R(e,t,a,r,c,i){var u=Object(n["B"])("GameCard"),o=Object(n["B"])("GameOver"),l=Object(n["B"])("AppDialog");return Object(n["t"])(),Object(n["g"])("div",y,[Object(n["h"])("div",k,[Object(n["h"])("div",null," Elapsed time: "+Object(n["D"])(e.secondsPassedAfterStart),1),e.topRankScore?(Object(n["t"])(),Object(n["g"])("div",w," Top rank time: "+Object(n["D"])(e.topRankScore),1)):Object(n["f"])("",!0)]),Object(n["h"])("div",_,[Object(n["h"])("div",S,[Object(n["h"])("div",D,[e.gameStarted?(Object(n["t"])(!0),Object(n["g"])(n["a"],{key:0},Object(n["z"])(e.cards,(function(t,a){return Object(n["t"])(),Object(n["e"])(u,{class:Object(n["p"])({"found-card":e.isFound(a)}),key:t.value,selected:e.isSelected(a),onClick:function(t){return e.handleCardClick(a)}},{default:Object(n["H"])((function(){return[e.isSelected(a)||e.isMemorizing?(Object(n["t"])(),Object(n["g"])("i",{key:0,class:Object(n["p"])(t.value)},null,2)):Object(n["f"])("",!0)]})),_:2},1032,["class","selected","onClick"])})),128)):(Object(n["t"])(),Object(n["g"])("div",{key:1,class:"field__start-trigger",onClick:t[0]||(t[0]=function(){return e.handleStartClick&&e.handleStartClick.apply(e,arguments)})}," Start "))])])]),Object(n["h"])("div",C,[e.gameStarted&&e.isMemorizing?(Object(n["t"])(),Object(n["g"])("div",x," Get ready! ")):e.gameStarted?(Object(n["t"])(),Object(n["g"])("div",G," Go! ")):Object(n["f"])("",!0)]),(Object(n["t"])(),Object(n["e"])(n["b"],{to:".modal-place"},[Object(n["j"])(l,{active:e.isGameOverDialogOpen,"onUpdate:active":[t[1]||(t[1]=function(t){return e.isGameOverDialogOpen=t}),e.handleGameOverDialogUpdate]},{default:Object(n["H"])((function(){return[Object(n["j"])(o,{time:e.commonTime.value},null,8,["time"])]})),_:1},8,["active","onUpdate:active"])]))])}Object(n["u"])();var I=a("1da1"),T=(a("96cf"),a("a9e3"),a("caad"),a("2532"),a("5db7"),a("73d9"),a("d4ec")),M=a("bee2"),B=function(){function e(){Object(T["a"])(this,e),this.value=0}return Object(M["a"])(e,[{key:"start",value:function(){var e=this;this.value=0,this.timerID=setInterval((function(){return e.value++}),1e3)}},{key:"stop",value:function(){clearInterval(this.timerID),this.timerID=void 0}},{key:"clear",value:function(){this.value=0}}]),e}(),A=function(){function e(){Object(T["a"])(this,e),this.cancelTimerResolver=null,this.isStarted=!1}return Object(M["a"])(e,[{key:"start",value:function(e){var t,a,n,r=this;(this.isStarted&&this.stop(),"number"===typeof e)?t=1e3*e:t=1e3*(null!==(a=e.s)&&void 0!==a?a:0)+(null!==(n=e.ms)&&void 0!==n?n:0);return new Promise((function(e){r.cancelTimerResolver=e,r.isStarted=!0,r.timerID=setTimeout((function(){r.stop()}),t)}))}},{key:"stop",value:function(){clearInterval(this.timerID),this.cancelTimerResolver&&(this.cancelTimerResolver(null),this.cancelTimerResolver=null),this.timerID=void 0,this.isStarted=!1}}]),e}();function P(e){for(var t=Object(j["a"])(e),a=0;a<e.length;a++){var n=Math.floor(Math.random()*e.length),r=[t[n],t[a]];t[a]=r[0],t[n]=r[1]}return t}Object(n["w"])("data-v-5de6bd1c");var L={class:"dialog"},H={class:"footer"};function z(e,t,a,r,c,i){return e.active?(Object(n["t"])(),Object(n["g"])("div",{key:0,class:"overlay",onClick:t[1]||(t[1]=function(){return e.closeDialog&&e.closeDialog.apply(e,arguments)})},[Object(n["h"])("div",L,[Object(n["A"])(e.$slots,"default",{},void 0,!0),Object(n["h"])("div",H,[Object(n["h"])("button",{class:"app-button",onClick:t[0]||(t[0]=function(){return e.closeDialog&&e.closeDialog.apply(e,arguments)})}," ok ")])])])):Object(n["f"])("",!0)}Object(n["u"])();var N=Object(n["k"])({name:"AppDialog",props:{active:{type:Boolean,default:!0}},setup:function(e,t){var a=t.emit,r=Object(n["E"])(e),c=r.active;function i(){a("update:active",!1)}return Object(n["G"])(c,(function(e){window.document.body.style.overflow=e?"hidden":""})),{closeDialog:i}}});a("e3ec");N.render=z,N.__scopeId="data-v-5de6bd1c";var U=N,q=["bi-x-diamond-fill","bi-water","bi-watch","bi-vinyl-fill","bi-twitter","bi-tree","bi-terminal","bi-sun","bi-suit-spade-fill","bi-suit-club-fill","bi-suit-diamond","bi-suit-heart","bi-sunglasses","bi-star","bi-piggy-bank","bi-paint-bucket","bi-palette","bi-moon-stars"];function E(e,t,a,r,c,i){return Object(n["t"])(),Object(n["g"])("div",{class:Object(n["p"])(["card",{card_selected:a.selected}])},[Object(n["A"])(e.$slots,"default",{},void 0,!0)],2)}var F={name:"GameCard",props:{selected:{type:Boolean,default:!1},closeDelay:{type:Number,default:0}}};a("f5a7");F.render=E,F.__scopeId="data-v-1015be0a";var J=F;Object(n["w"])("data-v-70428c9a");var $={class:"game-over"},Y=Object(n["h"])("div",{class:"title"}," Nice job! ",-1),K={class:"content"},Q={class:"content__message"},V=Object(n["i"])("Check leaderboard");function W(e,t,a,r,c,i){var u=Object(n["B"])("router-link");return Object(n["t"])(),Object(n["g"])("div",$,[Y,Object(n["h"])("div",K,[Object(n["h"])("div",Q,"Your time: "+Object(n["D"])(e.time),1),Object(n["j"])(u,{to:{name:"leaderboard"}},{default:Object(n["H"])((function(){return[V]})),_:1})])])}Object(n["u"])();var X=Object(n["k"])({name:"GameOver",props:{time:{type:Number,required:!0}}});a("6549");X.render=W,X.__scopeId="data-v-70428c9a";var Z=X,ee=Object(n["k"])({name:"Game",components:{AppDialog:U,GameCard:J,GameOver:Z},setup:function(){var e=g(),t=Object(n["y"])(!1),a=Object(n["y"])([]),r=Object(n["y"])([]),c=Object(n["y"])(new A),i=Object(n["y"])(new A),u=Object(n["y"])(new A),o=Object(n["y"])(new B),l=Object(n["y"])([]),s=Object(n["y"])(!1),b=Object(n["c"])((function(){return u.value.isStarted})),d=Object(n["c"])((function(){return o.value.value})),v=Object(n["c"])((function(){return e.getters.topRankScore}));function f(e){return l.value.includes(e)}function O(e){return r.value.includes(e)}function p(e){l.value=[].concat(Object(j["a"])(l.value),[e])}function m(){l.value=[]}function h(){return y.apply(this,arguments)}function y(){return y=Object(I["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a.value=P(q.flatMap((function(e){return[{value:e},{value:e}]}))),t.value=!0,e.next=4,u.value.start(5);case 4:o.value.start();case 5:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}function k(){h()}function w(e){e||o.value.clear()}function _(e){return S.apply(this,arguments)}function S(){return S=Object(I["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i.value.isStarted&&!b.value){e.next=2;break}return e.abrupt("return");case 2:if(l.value.length){e.next=8;break}return p(t),e.next=6,c.value.start(5);case 6:return m(),e.abrupt("return");case 8:if(n=l.value[0],n!==t){e.next=13;break}return c.value.stop(),m(),e.abrupt("return");case 13:if(a.value[t].value!==a.value[n].value){e.next=17;break}r.value=[].concat(Object(j["a"])(r.value),[t,n]),e.next=20;break;case 17:return p(t),e.next=20,i.value.start({ms:500});case 20:m(),c.value.stop();case 22:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}return Object(n["G"])(r,(function(n){n.length===a.value.length&&(o.value.stop(),e.commit("newResult",{score:o.value.value,date:Number(new Date)}),t.value=!1,s.value=!0,r.value=[])})),{isGameOverDialogOpen:s,gameStarted:t,cards:a,foundCards:r,selectedTimer:c,debounceTimer:i,commonTime:o,selectedCards:l,secondsPassedAfterStart:d,isMemorizing:b,topRankScore:v,handleGameOverDialogUpdate:w,handleCardClick:_,handleStartClick:k,isFound:O,isSelected:f}}});a("6443");ee.render=R,ee.__scopeId="data-v-5d6f5a4a";var te=ee;Object(n["w"])("data-v-6a84cfae");var ae={class:"leaderboard"},ne=Object(n["h"])("thead",null,[Object(n["h"])("tr",null,[Object(n["h"])("th",null,"Time spent"),Object(n["h"])("th",null,"Date")])],-1);function re(e,t,a,r,c,i){return Object(n["t"])(),Object(n["g"])("table",ae,[ne,Object(n["h"])("tbody",null,[(Object(n["t"])(!0),Object(n["g"])(n["a"],null,Object(n["z"])(r.leadersList,(function(e){return Object(n["t"])(),Object(n["g"])("tr",{key:e.date},[Object(n["h"])("td",null,Object(n["D"])(e.score),1),Object(n["h"])("td",null,Object(n["D"])(e.date),1)])})),128))])])}Object(n["u"])();a("4e82"),a("d81d");var ce=a("b166"),ie={name:"Leaderboard",setup:function(){var e=g(),t=function(e){return{score:e.score,date:Object(ce["a"])(new Date(e.date),"dd.MM.yyyy HH:mm")}},a=Object(n["c"])((function(){return e.state.resultsList.map(t).sort((function(e,t){return e.score-t.score}))}));return{leadersList:a}}};a("80e6");ie.render=re,ie.__scopeId="data-v-6a84cfae";var ue=ie,oe=[{path:"/",name:"game",component:te},{path:"/leaderboard",name:"leaderboard",component:ue}],le=Object(r["a"])({history:Object(r["b"])("/memory-game/"),routes:oe});Object(n["d"])(O).use(le).use(m,h).mount("#app")},e3ec:function(e,t,a){"use strict";a("0b65")},e997:function(e,t,a){},ecc5:function(e,t,a){"use strict";a("8145")},f5a7:function(e,t,a){"use strict";a("9511")}});
//# sourceMappingURL=app.5e103c05.js.map