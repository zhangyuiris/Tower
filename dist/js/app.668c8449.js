(function(t){function e(e){for(var o,i,a=e[0],c=e[1],u=e[2],f=0,d=[];f<a.length;f++)i=a[f],r[i]&&d.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);h&&h(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(o=!1)}o&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},s=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var h=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},"0799":function(t,e,n){t.exports="img/monster.63357584.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Box")],1)},s=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticStyle:{display:"none"}},[o("img",{ref:"hero",attrs:{src:n("915f")}}),o("img",{ref:"monster",attrs:{src:n("0799")}}),o("img",{ref:"attackR",attrs:{src:n("dbbc")}}),o("img",{ref:"attackU",attrs:{src:n("84dc")}})]),t._m(0),o("div",{staticClass:"container"},[o("div",{staticClass:"side"},[o("h4",[t._v("英雄属性")]),o("p",[t._v("血量："+t._s(t.heroProperty.blood))]),o("p",[t._v("攻击："+t._s(t.heroProperty.attack))]),o("p",[t._v("防御："+t._s(t.heroProperty.defence))])]),o("div",{staticClass:"ground"},[o("canvas",{ref:"canvas",attrs:{height:"440px",width:"670px"}})]),o("div",{staticClass:"side"},[o("h4",[t._v("怪物属性")]),o("p",[t._v("血量："+t._s(t.monsterProperty.blood))]),o("p",[t._v("攻击："+t._s(t.monsterProperty.attack))]),o("p",[t._v("防御："+t._s(t.monsterProperty.defence))])])]),o("div",{staticClass:"intro"},[o("h4",{on:{click:t.github}},[t._v("GITHUB")])])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"intro"},[n("h3",[t._v("玩法")]),n("span",[t._v("w、a、s、d控制方向，空格攻击")])])}],c=n("d225"),u=n("b0b4"),h=n("308d"),f=n("6bb5"),d=n("4e2b"),l=function(){function t(){Object(c["a"])(this,t),this.x=0,this.y=0,this.attackVolumn=0,this.bloodVolumn=0,this.defenceVolumn=0,this.lastMove="right"}return Object(u["a"])(t,[{key:"right",value:function(){this.x=this.x<8?this.x+1:8,this.lastMove="right"}},{key:"left",value:function(){this.x=this.x>0?this.x-1:0,this.lastMove="left"}},{key:"up",value:function(){this.y=this.y>0?this.y-1:0,this.lastMove="up"}},{key:"down",value:function(){this.y=this.y<5?this.y+1:5,this.lastMove="down"}},{key:"setPos",value:function(t,e){this.x=t,this.y=e}},{key:"setProperty",value:function(t,e,n){this.attackVolumn=t,this.bloodVolumn=e,this.defenceVolumn=n}},{key:"pos",get:function(){return{x:this.x,y:this.y}}},{key:"property",get:function(){return{attack:this.attackVolumn,blood:this.bloodVolumn,defence:this.defenceVolumn}}},{key:"direction",get:function(){return this.lastMove}}]),t}(),p=l,v=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(h["a"])(this,Object(f["a"])(e).call(this)),t.setProperty(50,200,80),t.setPos(1,2),t}return Object(d["a"])(e,t),Object(u["a"])(e,[{key:"attacked",value:function(t){this.bloodVolumn-=t.attack()-this.defenceVolumn}}]),e}(p),y=v,b=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(h["a"])(this,Object(f["a"])(e).call(this)),t.setProperty(100,100,0),t.setPos(7,4),t}return Object(d["a"])(e,t),Object(u["a"])(e,[{key:"attacked",value:function(){this.bloodVolumn-=10}}]),e}(p),m=b,g=74,k={name:"Box",data:function(){return{hero:void 0,monster:void 0,heroLastMove:"right"}},created:function(){this.hero=new y,this.monster=new m},mounted:function(){var t=this;document.onkeyup=function(e){switch(e.code){case"KeyA":t.left();break;case"KeyD":t.right();break;case"KeyW":t.up();break;case"KeyS":t.down();break;case"Space":t.attack();break;default:break}};var e=this.$refs.canvas.getContext("2d"),n=this.$refs,o=n.hero,r=n.monster;o.onload=function(){e.drawImage(o,t.heroPos.x*g,t.heroPos.y*g,g,g)},r.onload=function(){e.drawImage(r,t.monsterPos.x*g,t.monsterPos.y*g,g,g)}},computed:{heroPos:function(){return this.hero.pos},heroProperty:function(){return this.hero.property},monsterPos:function(){return this.monster.pos},monsterProperty:function(){return this.monster.property}},methods:{drawRound:function(){var t=this.$refs.canvas.getContext("2d");t.clearRect(0,0,670,440);var e=this.$refs,n=e.hero,o=e.monster;t.drawImage(n,this.heroPos.x*g,this.heroPos.y*g,g,g),t.drawImage(o,this.monsterPos.x*g,this.monsterPos.y*g,g,g)},drawAttack:function(){var t=this,e=this.$refs.canvas.getContext("2d"),n=this.$refs,o=n.attackR,r=n.attackU,s=this.hero.direction;switch(s){case"left":e.drawImage(o,(this.heroPos.x-1)*g,this.heroPos.y*g,g,g);break;case"right":e.drawImage(o,(this.heroPos.x+1)*g,this.heroPos.y*g,g,g);break;case"up":e.drawImage(r,this.heroPos.x*g,(this.heroPos.y-1)*g,g,g);break;case"down":e.drawImage(r,this.heroPos.x*g,(this.heroPos.y+1)*g,g,g);break;default:break}setTimeout(function(){t.drawRound()},100)},left:function(){this.hero.left(),this.drawRound()},right:function(){this.hero.right(),this.drawRound()},up:function(){this.hero.up(),this.drawRound()},down:function(){this.hero.down(),this.drawRound()},attack:function(){this.drawAttack()},github:function(){window.location.href="https://github.com/zhangyuiris/Tower"}}},w=k,x=(n("ccc4"),n("2877")),P=Object(x["a"])(w,i,a,!1,null,"35ce3f96",null),_=P.exports,O={name:"app",components:{Box:_}},j=O,V=(n("034f"),Object(x["a"])(j,r,s,!1,null,null,null)),M=V.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(M)}}).$mount("#app")},"64a9":function(t,e,n){},"84dc":function(t,e,n){t.exports="img/attack-up.cfa3bd62.png"},"914f":function(t,e,n){},"915f":function(t,e,n){t.exports="img/hero.d2b03334.png"},ccc4:function(t,e,n){"use strict";var o=n("914f"),r=n.n(o);r.a},dbbc:function(t,e,n){t.exports="img/attack-right.a3998178.png"}});
//# sourceMappingURL=app.668c8449.js.map
