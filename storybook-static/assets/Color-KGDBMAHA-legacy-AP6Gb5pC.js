!function(){var e=["value","style"];function r(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function t(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function n(e,r,t){return(r=function(e){var r=function(e,r){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:r+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,o,l,u=[],i=!0,c=!1;try{if(o=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;i=!1}else for(;!(i=(n=o.call(t)).done)&&(u.push(n.value),u.length!==r);i=!0);}catch(e){c=!0,a=e}finally{try{if(!i&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(c)throw a}}return u}}(e,r)||function(e,r){if(e){if("string"==typeof e)return o(e,r);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}System.register(["./DocsRenderer-PKQXORMH-legacy-D5VcmzBS.js","./iframe-legacy-g0thuuH5.js","../sb-preview/runtime.js","./index-legacy-C8AtUIAG.js","./index-legacy-Dvg014dY.js"],(function(r,n){"use strict";var o,l,u,i,c,s,f,h,v,d,g,b;return{setters:[e=>{o=e.ae,l=e.af,u=e.ag,i=e.ah,c=e.ai,s=e.aj,f=e.ak,h=e.a2,v=e.a0,d=e.w,g=e.al,b=e.am},null,null,null,null],execute:function(){function n(){return(n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function p(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r.indexOf(t=o[n])>=0||(a[t]=e[t]);return a}function m(e){var r=l.useRef(e),t=l.useRef((function(e){r.current&&r.current(e)}));return r.current=e,t.current}var y=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=1),e>t?t:e<r?r:e},w=function(e){return"touches"in e},x=function(e){return e&&e.ownerDocument.defaultView||self},M=function(e,r,t){var n=e.getBoundingClientRect(),a=w(r)?function(e,r){for(var t=0;t<e.length;t++)if(e[t].identifier===r)return e[t];return e[0]}(r.touches,t):r;return{left:y((a.pageX-(n.left+x(e).pageXOffset))/n.width),top:y((a.pageY-(n.top+x(e).pageYOffset))/n.height)}},k=function(e){!w(e)&&e.preventDefault()},_=o.memo((function(e){var r=e.onMove,t=e.onKey,a=p(e,["onMove","onKey"]),u=l.useRef(null),i=m(r),c=m(t),s=l.useRef(null),f=l.useRef(!1),h=l.useMemo((function(){var e=function(e){k(e),(w(e)?e.touches.length>0:e.buttons>0)&&u.current?i(M(u.current,e,s.current)):t(!1)},r=function(){return t(!1)};function t(t){var n=f.current,a=x(u.current),o=t?a.addEventListener:a.removeEventListener;o(n?"touchmove":"mousemove",e),o(n?"touchend":"mouseup",r)}return[function(e){var r=e.nativeEvent,n=u.current;if(n&&(k(r),!function(e,r){return r&&!w(e)}(r,f.current)&&n)){if(w(r)){f.current=!0;var a=r.changedTouches||[];a.length&&(s.current=a[0].identifier)}n.focus(),i(M(n,r,s.current)),t(!0)}},function(e){var r=e.which||e.keyCode;r<37||r>40||(e.preventDefault(),c({left:39===r?.05:37===r?-.05:0,top:40===r?.05:38===r?-.05:0}))},t]}),[c,i]),v=h[0],d=h[1],g=h[2];return l.useEffect((function(){return g}),[g]),o.createElement("div",n({},a,{onTouchStart:v,onMouseDown:v,className:"react-colorful__interactive",ref:u,onKeyDown:d,tabIndex:0,role:"slider"}))})),E=function(e){return e.filter(Boolean).join(" ")},O=function(e){var r=e.color,t=e.left,n=e.top,a=void 0===n?.5:n,l=E(["react-colorful__pointer",e.className]);return o.createElement("div",{className:l,style:{top:100*a+"%",left:100*t+"%"}},o.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:r}}))},C=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=Math.pow(10,r)),Math.round(t*e)/t},j={grad:.9,turn:360,rad:360/(2*Math.PI)},$=function(e){return"#"===e[0]&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:4===e.length?C(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:8===e.length?C(parseInt(e.substring(6,8),16)/255,2):1}},S=function(e,r){return void 0===r&&(r="deg"),Number(e)*(j[r]||1)},N=function(e){var r=e.s,t=e.l;return{h:e.h,s:(r*=(t<50?t:100-t)/100)>0?2*r/(t+r)*100:0,v:t+r,a:e.a}},P=function(e){var r=e.s,t=e.v,n=e.a,a=(200-r)*t/100;return{h:C(e.h),s:C(a>0&&a<200?r*t/100/(a<=100?a:200-a)*100:0),l:C(a/2),a:C(n,2)}},I=function(e){var r=P(e);return"hsl("+r.h+", "+r.s+"%, "+r.l+"%)"},z=function(e){var r=P(e);return"hsla("+r.h+", "+r.s+"%, "+r.l+"%, "+r.a+")"},H=function(e){var r=e.h,t=e.s,n=e.v,a=e.a;r=r/360*6,t/=100,n/=100;var o=Math.floor(r),l=n*(1-t),u=n*(1-(r-o)*t),i=n*(1-(1-r+o)*t),c=o%6;return{r:C(255*[n,u,l,l,i,n][c]),g:C(255*[i,n,n,u,l,l][c]),b:C(255*[l,l,i,n,n,u][c]),a:C(a,2)}},R=function(e){var r=e.toString(16);return r.length<2?"0"+r:r},q=function(e){var r=e.r,t=e.g,n=e.b,a=e.a,o=a<1?R(C(255*a)):"";return"#"+R(r)+R(t)+R(n)+o},T=function(e){var r=e.r,t=e.g,n=e.b,a=e.a,o=Math.max(r,t,n),l=o-Math.min(r,t,n),u=l?o===r?(t-n)/l:o===t?2+(n-r)/l:4+(r-t)/l:0;return{h:C(60*(u<0?u+6:u)),s:C(o?l/o*100:0),v:C(o/255*100),a:a}},D=o.memo((function(e){var r=e.hue,t=e.onChange,n=E(["react-colorful__hue",e.className]);return o.createElement("div",{className:n},o.createElement(_,{onMove:function(e){t({h:360*e.left})},onKey:function(e){t({h:y(r+360*e.left,0,360)})},"aria-label":"Hue","aria-valuenow":C(r),"aria-valuemax":"360","aria-valuemin":"0"},o.createElement(O,{className:"react-colorful__hue-pointer",left:r/360,color:I({h:r,s:100,v:100,a:1})})))})),L=o.memo((function(e){var r=e.hsva,t=e.onChange,n={backgroundColor:I({h:r.h,s:100,v:100,a:1})};return o.createElement("div",{className:"react-colorful__saturation",style:n},o.createElement(_,{onMove:function(e){t({s:100*e.left,v:100-100*e.top})},onKey:function(e){t({s:y(r.s+100*e.left,0,100),v:y(r.v-100*e.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+C(r.s)+"%, Brightness "+C(r.v)+"%"},o.createElement(O,{className:"react-colorful__saturation-pointer",top:1-r.v/100,left:r.s/100,color:I(r)})))})),B=function(e,r){if(e===r)return!0;for(var t in e)if(e[t]!==r[t])return!1;return!0},A=function(e,r){return e.replace(/\s/g,"")===r.replace(/\s/g,"")};function K(e,r,t){var n=m(t),a=l.useState((function(){return e.toHsva(r)})),o=a[0],u=a[1],i=l.useRef({color:r,hsva:o});l.useEffect((function(){if(!e.equal(r,i.current.color)){var t=e.toHsva(r);i.current={hsva:t,color:r},u(t)}}),[r,e]),l.useEffect((function(){var r;B(o,i.current.hsva)||e.equal(r=e.fromHsva(o),i.current.color)||(i.current={hsva:o,color:r},n(r))}),[o,e,n]);var c=l.useCallback((function(e){u((function(r){return Object.assign({},r,e)}))}),[]);return[o,c]}for(var V="undefined"!=typeof window?l.useLayoutEffect:l.useEffect,F=new Map,W=function(e){V((function(){var r=e.current?e.current.ownerDocument:document;if(void 0!==r&&!F.has(r)){var t=r.createElement("style");t.innerHTML='.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}',F.set(r,t);var n="undefined"!=typeof __webpack_nonce__?__webpack_nonce__:void 0;n&&t.setAttribute("nonce",n),r.head.appendChild(t)}}),[])},X=function(e){var r=e.className,t=e.colorModel,a=e.color,u=void 0===a?t.defaultColor:a,i=e.onChange,c=p(e,["className","colorModel","color","onChange"]),s=l.useRef(null);W(s);var f=K(t,u,i),h=f[0],v=f[1],d=E(["react-colorful",r]);return o.createElement("div",n({},c,{ref:s,className:d}),o.createElement(L,{hsva:h,onChange:v}),o.createElement(D,{hue:h.h,onChange:v,className:"react-colorful__last-control"}))},U={defaultColor:"000",toHsva:function(e){return T($(e))},fromHsva:function(e){return function(e){return q(H(e))}({h:e.h,s:e.s,v:e.v,a:1})},equal:function(e,r){return e.toLowerCase()===r.toLowerCase()||B($(e),$(r))}},Y=function(e){var r=e.className,t=e.hsva,n=e.onChange,a={backgroundImage:"linear-gradient(90deg, "+z(Object.assign({},t,{a:0}))+", "+z(Object.assign({},t,{a:1}))+")"},l=E(["react-colorful__alpha",r]),u=C(100*t.a);return o.createElement("div",{className:l},o.createElement("div",{className:"react-colorful__alpha-gradient",style:a}),o.createElement(_,{onMove:function(e){n({a:e.left})},onKey:function(e){n({a:y(t.a+e.left)})},"aria-label":"Alpha","aria-valuetext":u+"%","aria-valuenow":u,"aria-valuemin":"0","aria-valuemax":"100"},o.createElement(O,{className:"react-colorful__alpha-pointer",left:t.a,color:z(t)})))},G=function(e){var r=e.className,t=e.colorModel,a=e.color,u=void 0===a?t.defaultColor:a,i=e.onChange,c=p(e,["className","colorModel","color","onChange"]),s=l.useRef(null);W(s);var f=K(t,u,i),h=f[0],v=f[1],d=E(["react-colorful",r]);return o.createElement("div",n({},c,{ref:s,className:d}),o.createElement(L,{hsva:h,onChange:v}),o.createElement(D,{hue:h.h,onChange:v}),o.createElement(Y,{hsva:h,onChange:v,className:"react-colorful__last-control"}))},Q={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:function(e){var r=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?N({h:S(r[1],r[2]),s:Number(r[3]),l:Number(r[4]),a:void 0===r[5]?1:Number(r[5])/(r[6]?100:1)}):{h:0,s:0,v:0,a:1}},fromHsva:z,equal:A},J={defaultColor:"rgba(0, 0, 0, 1)",toHsva:function(e){var r=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?T({r:Number(r[1])/(r[2]?100/255:1),g:Number(r[3])/(r[4]?100/255:1),b:Number(r[5])/(r[6]?100/255:1),a:void 0===r[7]?1:Number(r[7])/(r[8]?100:1)}):{h:0,s:0,v:0,a:1}},fromHsva:function(e){var r=H(e);return"rgba("+r.r+", "+r.g+", "+r.b+", "+r.a+")"},equal:A},Z={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},ee={},re=0,te=Object.keys(Z);re<te.length;re++){var ne=te[re];ee[Z[ne]]=ne}for(var ae={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}},oe=ae,le=0,ue=Object.keys(ae);le<ue.length;le++){var ie=ue[le];if(!("channels"in ae[ie]))throw new Error("missing channels property: "+ie);if(!("labels"in ae[ie]))throw new Error("missing channel labels property: "+ie);if(ae[ie].labels.length!==ae[ie].channels)throw new Error("channel and label counts mismatch: "+ie);var ce=ae[ie],se=ce.channels,fe=ce.labels;delete ae[ie].channels,delete ae[ie].labels,Object.defineProperty(ae[ie],"channels",{value:se}),Object.defineProperty(ae[ie],"labels",{value:fe})}function he(e,r){return Math.pow(e[0]-r[0],2)+Math.pow(e[1]-r[1],2)+Math.pow(e[2]-r[2],2)}ae.rgb.hsl=function(e){var r,t=e[0]/255,n=e[1]/255,a=e[2]/255,o=Math.min(t,n,a),l=Math.max(t,n,a),u=l-o;l===o?r=0:t===l?r=(n-a)/u:n===l?r=2+(a-t)/u:a===l&&(r=4+(t-n)/u),(r=Math.min(60*r,360))<0&&(r+=360);var i=(o+l)/2;return[r,100*(l===o?0:i<=.5?u/(l+o):u/(2-l-o)),100*i]},ae.rgb.hsv=function(e){var r,t,n,a,o,l=e[0]/255,u=e[1]/255,i=e[2]/255,c=Math.max(l,u,i),s=c-Math.min(l,u,i),f=function(e){return(c-e)/6/s+.5};return 0===s?(a=0,o=0):(o=s/c,r=f(l),t=f(u),n=f(i),l===c?a=n-t:u===c?a=1/3+r-n:i===c&&(a=2/3+t-r),a<0?a+=1:a>1&&(a-=1)),[360*a,100*o,100*c]},ae.rgb.hwb=function(e){var r=e[0],t=e[1],n=e[2];return[ae.rgb.hsl(e)[0],100*(1/255*Math.min(r,Math.min(t,n))),100*(n=1-1/255*Math.max(r,Math.max(t,n)))]},ae.rgb.cmyk=function(e){var r=e[0]/255,t=e[1]/255,n=e[2]/255,a=Math.min(1-r,1-t,1-n);return[100*((1-r-a)/(1-a)||0),100*((1-t-a)/(1-a)||0),100*((1-n-a)/(1-a)||0),100*a]},ae.rgb.keyword=function(e){var r=ee[e];if(r)return r;for(var t,n=1/0,a=0,o=Object.keys(Z);a<o.length;a++){var l=o[a],u=he(e,Z[l]);u<n&&(n=u,t=l)}return t},ae.keyword.rgb=function(e){return Z[e]},ae.rgb.xyz=function(e){var r=e[0]/255,t=e[1]/255,n=e[2]/255;return[100*(.4124*(r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92)+.3576*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)+.1805*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)),100*(.2126*r+.7152*t+.0722*n),100*(.0193*r+.1192*t+.9505*n)]},ae.rgb.lab=function(e){var r=ae.rgb.xyz(e),t=r[0],n=r[1],a=r[2];return n/=100,a/=108.883,t=(t/=95.047)>.008856?Math.pow(t,1/3):7.787*t+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(t-n),200*(n-(a=a>.008856?Math.pow(a,1/3):7.787*a+16/116))]},ae.hsl.rgb=function(e){var r,t,n,a=e[0]/360,o=e[1]/100,l=e[2]/100;if(0===o)return[n=255*l,n,n];for(var u=2*l-(r=l<.5?l*(1+o):l+o-l*o),i=[0,0,0],c=0;c<3;c++)(t=a+1/3*-(c-1))<0&&t++,t>1&&t--,n=6*t<1?u+6*(r-u)*t:2*t<1?r:3*t<2?u+(r-u)*(2/3-t)*6:u,i[c]=255*n;return i},ae.hsl.hsv=function(e){var r=e[0],t=e[1]/100,n=e[2]/100,a=t,o=Math.max(n,.01);return t*=(n*=2)<=1?n:2-n,a*=o<=1?o:2-o,[r,100*(0===n?2*a/(o+a):2*t/(n+t)),100*((n+t)/2)]},ae.hsv.rgb=function(e){var r=e[0]/60,t=e[1]/100,n=e[2]/100,a=Math.floor(r)%6,o=r-Math.floor(r),l=255*n*(1-t),u=255*n*(1-t*o),i=255*n*(1-t*(1-o));switch(n*=255,a){case 0:return[n,i,l];case 1:return[u,n,l];case 2:return[l,n,i];case 3:return[l,u,n];case 4:return[i,l,n];case 5:return[n,l,u]}},ae.hsv.hsl=function(e){var r,t,n=e[0],a=e[1]/100,o=e[2]/100,l=Math.max(o,.01);t=(2-a)*o;var u=(2-a)*l;return r=a*l,[n,100*(r=(r/=u<=1?u:2-u)||0),100*(t/=2)]},ae.hwb.rgb=function(e){var r,t=e[0]/360,n=e[1]/100,a=e[2]/100,o=n+a;o>1&&(n/=o,a/=o);var l=Math.floor(6*t),u=1-a;r=6*t-l,1&l&&(r=1-r);var i,c,s,f=n+r*(u-n);switch(l){default:case 6:case 0:i=u,c=f,s=n;break;case 1:i=f,c=u,s=n;break;case 2:i=n,c=u,s=f;break;case 3:i=n,c=f,s=u;break;case 4:i=f,c=n,s=u;break;case 5:i=u,c=n,s=f}return[255*i,255*c,255*s]},ae.cmyk.rgb=function(e){var r=e[0]/100,t=e[1]/100,n=e[2]/100,a=e[3]/100;return[255*(1-Math.min(1,r*(1-a)+a)),255*(1-Math.min(1,t*(1-a)+a)),255*(1-Math.min(1,n*(1-a)+a))]},ae.xyz.rgb=function(e){var r,t,n,a=e[0]/100,o=e[1]/100,l=e[2]/100;return t=-.9689*a+1.8758*o+.0415*l,n=.0557*a+-.204*o+1.057*l,r=(r=3.2406*a+-1.5372*o+-.4986*l)>.0031308?1.055*Math.pow(r,1/2.4)-.055:12.92*r,t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,[255*(r=Math.min(Math.max(0,r),1)),255*(t=Math.min(Math.max(0,t),1)),255*(n=Math.min(Math.max(0,n),1))]},ae.xyz.lab=function(e){var r=e[0],t=e[1],n=e[2];return t/=100,n/=108.883,r=(r/=95.047)>.008856?Math.pow(r,1/3):7.787*r+16/116,[116*(t=t>.008856?Math.pow(t,1/3):7.787*t+16/116)-16,500*(r-t),200*(t-(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116))]},ae.lab.xyz=function(e){var r,t,n,a=e[0];r=e[1]/500+(t=(a+16)/116),n=t-e[2]/200;var o=Math.pow(t,3),l=Math.pow(r,3),u=Math.pow(n,3);return t=o>.008856?o:(t-16/116)/7.787,r=l>.008856?l:(r-16/116)/7.787,n=u>.008856?u:(n-16/116)/7.787,[r*=95.047,t*=100,n*=108.883]},ae.lab.lch=function(e){var r,t=e[0],n=e[1],a=e[2];return(r=360*Math.atan2(a,n)/2/Math.PI)<0&&(r+=360),[t,Math.sqrt(n*n+a*a),r]},ae.lch.lab=function(e){var r=e[0],t=e[1],n=e[2]/360*2*Math.PI;return[r,t*Math.cos(n),t*Math.sin(n)]},ae.rgb.ansi16=function(e,r=null){var t=a(e,3),n=t[0],o=t[1],l=t[2],u=null===r?ae.rgb.hsv(e)[2]:r;if(0===(u=Math.round(u/50)))return 30;var i=30+(Math.round(l/255)<<2|Math.round(o/255)<<1|Math.round(n/255));return 2===u&&(i+=60),i},ae.hsv.ansi16=function(e){return ae.rgb.ansi16(ae.hsv.rgb(e),e[2])},ae.rgb.ansi256=function(e){var r=e[0],t=e[1],n=e[2];return r===t&&t===n?r<8?16:r>248?231:Math.round((r-8)/247*24)+232:16+36*Math.round(r/255*5)+6*Math.round(t/255*5)+Math.round(n/255*5)},ae.ansi16.rgb=function(e){var r=e%10;if(0===r||7===r)return e>50&&(r+=3.5),[r=r/10.5*255,r,r];var t=.5*(1+~~(e>50));return[(1&r)*t*255,(r>>1&1)*t*255,(r>>2&1)*t*255]},ae.ansi256.rgb=function(e){if(e>=232){var r=10*(e-232)+8;return[r,r,r]}var t;return e-=16,[Math.floor(e/36)/5*255,Math.floor((t=e%36)/6)/5*255,t%6/5*255]},ae.rgb.hex=function(e){var r=(((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2]))).toString(16).toUpperCase();return"000000".substring(r.length)+r},ae.hex.rgb=function(e){var r=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!r)return[0,0,0];var t=r[0];3===r[0].length&&(t=t.split("").map((e=>e+e)).join(""));var n=parseInt(t,16);return[n>>16&255,n>>8&255,255&n]},ae.rgb.hcg=function(e){var r,t=e[0]/255,n=e[1]/255,a=e[2]/255,o=Math.max(Math.max(t,n),a),l=Math.min(Math.min(t,n),a),u=o-l;return r=u<=0?0:o===t?(n-a)/u%6:o===n?2+(a-t)/u:4+(t-n)/u,r/=6,[360*(r%=1),100*u,100*(u<1?l/(1-u):0)]},ae.hsl.hcg=function(e){var r=e[1]/100,t=e[2]/100,n=t<.5?2*r*t:2*r*(1-t),a=0;return n<1&&(a=(t-.5*n)/(1-n)),[e[0],100*n,100*a]},ae.hsv.hcg=function(e){var r=e[1]/100,t=e[2]/100,n=r*t,a=0;return n<1&&(a=(t-n)/(1-n)),[e[0],100*n,100*a]},ae.hcg.rgb=function(e){var r=e[0]/360,t=e[1]/100,n=e[2]/100;if(0===t)return[255*n,255*n,255*n];var a,o=[0,0,0],l=r%1*6,u=l%1,i=1-u;switch(Math.floor(l)){case 0:o[0]=1,o[1]=u,o[2]=0;break;case 1:o[0]=i,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=u;break;case 3:o[0]=0,o[1]=i,o[2]=1;break;case 4:o[0]=u,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=i}return a=(1-t)*n,[255*(t*o[0]+a),255*(t*o[1]+a),255*(t*o[2]+a)]},ae.hcg.hsv=function(e){var r=e[1]/100,t=r+e[2]/100*(1-r),n=0;return t>0&&(n=r/t),[e[0],100*n,100*t]},ae.hcg.hsl=function(e){var r=e[1]/100,t=e[2]/100*(1-r)+.5*r,n=0;return t>0&&t<.5?n=r/(2*t):t>=.5&&t<1&&(n=r/(2*(1-t))),[e[0],100*n,100*t]},ae.hcg.hwb=function(e){var r=e[1]/100,t=r+e[2]/100*(1-r);return[e[0],100*(t-r),100*(1-t)]},ae.hwb.hcg=function(e){var r=e[1]/100,t=1-e[2]/100,n=t-r,a=0;return n<1&&(a=(t-n)/(1-n)),[e[0],100*n,100*a]},ae.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},ae.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},ae.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},ae.gray.hsl=function(e){return[0,0,e[0]]},ae.gray.hsv=ae.gray.hsl,ae.gray.hwb=function(e){return[0,100,e[0]]},ae.gray.cmyk=function(e){return[0,0,0,e[0]]},ae.gray.lab=function(e){return[e[0],0,0]},ae.gray.hex=function(e){var r=255&Math.round(e[0]/100*255),t=((r<<16)+(r<<8)+r).toString(16).toUpperCase();return"000000".substring(t.length)+t},ae.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]};var ve=oe;function de(e){var r=function(){for(var e={},r=Object.keys(ve),t=r.length,n=0;n<t;n++)e[r[n]]={distance:-1,parent:null};return e}(),t=[e];for(r[e].distance=0;t.length;)for(var n=t.pop(),a=Object.keys(ve[n]),o=a.length,l=0;l<o;l++){var u=a[l],i=r[u];-1===i.distance&&(i.distance=r[n].distance+1,i.parent=n,t.unshift(u))}return r}function ge(e,r){return function(t){return r(e(t))}}function be(e,r){for(var t=[r[e].parent,e],n=ve[r[e].parent][e],a=r[e].parent;r[a].parent;)t.unshift(r[a].parent),n=ge(ve[r[a].parent][a],n),a=r[a].parent;return n.conversion=t,n}var pe=oe,me=function(e){for(var r=de(e),t={},n=Object.keys(r),a=n.length,o=0;o<a;o++){var l=n[o];null!==r[l].parent&&(t[l]=be(l,r))}return t},ye={};Object.keys(pe).forEach((e=>{ye[e]={},Object.defineProperty(ye[e],"channels",{value:pe[e].channels}),Object.defineProperty(ye[e],"labels",{value:pe[e].labels});var r=me(e);Object.keys(r).forEach((t=>{var n=r[t];ye[e][t]=function(e){var r=function(...r){var t=r[0];if(null==t)return t;t.length>1&&(r=t);var n=e(r);if("object"==typeof n)for(var a=n.length,o=0;o<a;o++)n[o]=Math.round(n[o]);return n};return"conversion"in e&&(r.conversion=e.conversion),r}(n),ye[e][t].raw=function(e){var r=function(...r){var t=r[0];return null==t?t:(t.length>1&&(r=t),e(r))};return"conversion"in e&&(r.conversion=e.conversion),r}(n)}))}));var we=u(ye),xe=i,Me=/\s/;var ke=function(e){for(var r=e.length;r--&&Me.test(e.charAt(r)););return r},_e=/^\s+/;var Ee=function(e){return e?e.slice(0,ke(e)+1).replace(_e,""):e},Oe=c,Ce=s,je=/^[-+]0x[0-9a-f]+$/i,$e=/^0b[01]+$/i,Se=/^0o[0-7]+$/i,Ne=parseInt;var Pe=c,Ie=function(){return xe.Date.now()},ze=function(e){if("number"==typeof e)return e;if(Ce(e))return NaN;if(Oe(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=Oe(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=Ee(e);var t=$e.test(e);return t||Se.test(e)?Ne(e.slice(2),t?2:8):je.test(e)?NaN:+e},He=Math.max,Re=Math.min;var qe,Te=function(e,r,t){var n,a,o,l,u,i,c=0,s=!1,f=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(r){var t=n,o=a;return n=a=void 0,c=r,l=e.apply(o,t)}function d(e){var t=e-i;return void 0===i||t>=r||t<0||f&&e-c>=o}function g(){var e=Ie();if(d(e))return b(e);u=setTimeout(g,function(e){var t=r-(e-i);return f?Re(t,o-(e-c)):t}(e))}function b(e){return u=void 0,h&&n?v(e):(n=a=void 0,l)}function p(){var e=Ie(),t=d(e);if(n=arguments,a=this,i=e,t){if(void 0===u)return function(e){return c=e,u=setTimeout(g,r),s?v(e):l}(i);if(f)return clearTimeout(u),u=setTimeout(g,r),v(i)}return void 0===u&&(u=setTimeout(g,r)),l}return r=ze(r)||0,Pe(t)&&(s=!!t.leading,o=(f="maxWait"in t)?He(ze(t.maxWait)||0,r):o,h="trailing"in t?!!t.trailing:h),p.cancel=function(){void 0!==u&&clearTimeout(u),c=0,n=i=a=u=void 0},p.flush=function(){return void 0===u?l:b(Ie())},p},De=u(Te),Le=f.div({position:"relative",maxWidth:250,'&[aria-readonly="true"]':{opacity:.5}}),Be=f(h)({position:"absolute",zIndex:1,top:4,left:4,"[aria-readonly=true] &":{cursor:"not-allowed"}}),Ae=f.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),Ke=f(v)((({theme:e})=>({fontFamily:e.typography.fonts.base}))),Ve=f.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),Fe=f.div((({theme:e,active:r})=>({width:16,height:16,boxShadow:r?`${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px`:`${e.appBorderColor} 0 0 0 1px inset`,borderRadius:e.appBorderRadius}))),We=r=>{var n=r.value,a=r.style,l=function(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(r.includes(n))continue;t[n]=e[n]}return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.includes(t)||{}.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}(r,e),u=`linear-gradient(${n}, ${n}), url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>'), linear-gradient(#fff, #fff)`;return o.createElement(Fe,t(t({},l),{},{style:t(t({},a),{},{backgroundImage:u})}))},Xe=f(d.Input)((({theme:e,readOnly:r})=>({width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:e.typography.fonts.base}))),Ue=f(g)((({theme:e})=>({position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:e.input.color}))),Ye=((qe=Ye||{}).RGB="rgb",qe.HSL="hsl",qe.HEX="hex",qe),Ge=Object.values(Ye),Qe=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,Je=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,Ze=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,er=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,rr=/^\s*#?([0-9a-f]{3})\s*$/i,tr={hex:function(e){return o.createElement(X,n({},e,{colorModel:U}))},rgb:function(e){return o.createElement(G,n({},e,{colorModel:J}))},hsl:function(e){return o.createElement(G,n({},e,{colorModel:Q}))}},nr={hex:"transparent",rgb:"rgba(0, 0, 0, 0)",hsl:"hsla(0, 0%, 0%, 0)"},ar=e=>{var r=null==e?void 0:e.match(Qe);if(!r)return[0,0,0,1];var t=a(r,5),n=t[1],o=t[2],l=t[3],u=t[4];return[n,o,l,void 0===u?1:u].map(Number)},or=e=>{if(e){var r=!0;if(Je.test(e)){var t=a(ar(e),4),n=t[0],o=t[1],l=t[2],u=t[3],i=a(we.rgb.hsl([n,o,l])||[0,0,0],3),c=i[0],s=i[1],f=i[2];return{valid:r,value:e,keyword:we.rgb.keyword([n,o,l]),colorSpace:"rgb",rgb:e,hsl:`hsla(${c}, ${s}%, ${f}%, ${u})`,hex:`#${we.rgb.hex([n,o,l]).toLowerCase()}`}}if(Ze.test(e)){var h=a(ar(e),4),v=h[0],d=h[1],g=h[2],b=h[3],p=a(we.hsl.rgb([v,d,g])||[0,0,0],3),m=p[0],y=p[1],w=p[2];return{valid:r,value:e,keyword:we.hsl.keyword([v,d,g]),colorSpace:"hsl",rgb:`rgba(${m}, ${y}, ${w}, ${b})`,hsl:e,hex:`#${we.hsl.hex([v,d,g]).toLowerCase()}`}}var x=e.replace("#",""),M=we.keyword.rgb(x)||we.hex.rgb(x),k=we.rgb.hsl(M),_=e;if(/[^#a-f0-9]/i.test(e)?_=x:er.test(e)&&(_=`#${x}`),_.startsWith("#"))r=er.test(_);else try{we.keyword.hex(_)}catch(E){r=!1}return{valid:r,value:_,keyword:we.rgb.keyword(M),colorSpace:"hex",rgb:`rgba(${M[0]}, ${M[1]}, ${M[2]}, 1)`,hsl:`hsla(${k[0]}, ${k[1]}%, ${k[2]}%, 1)`,hex:_}}},lr=(e,r)=>{var t=a(l.useState(e||""),2),n=t[0],o=t[1],u=a(l.useState((()=>or(n))),2),i=u[0],c=u[1],s=a(l.useState((null==i?void 0:i.colorSpace)||"hex"),2),f=s[0],h=s[1];l.useEffect((()=>{var r=e||"",t=or(r);o(r),c(t),h((null==t?void 0:t.colorSpace)||"hex")}),[e]);var v=l.useMemo((()=>((e,r,t)=>{if(!e||null==r||!r.valid)return nr[t];if("hex"!==t)return(null==r?void 0:r[t])||nr[t];if(!r.hex.startsWith("#"))try{return`#${we.keyword.hex(r.hex)}`}catch(c){return nr.hex}var n=r.hex.match(rr);if(!n)return er.test(r.hex)?r.hex:nr.hex;var o=a(n[1].split(""),3),l=o[0],u=o[1],i=o[2];return`#${l}${l}${u}${u}${i}${i}`})(n,i,f).toLowerCase()),[n,i,f]),d=l.useCallback((e=>{var t=or(e),n=(null==t?void 0:t.value)||e||"";o(n),""===n&&(c(void 0),r(void 0)),t&&(c(t),h(t.colorSpace),r(t.value))}),[r]),g=l.useCallback((()=>{var e=Ge.indexOf(f)+1;e>=Ge.length&&(e=0),h(Ge[e]);var t=(null==i?void 0:i[Ge[e]])||"";o(t),r(t)}),[i,f,r]);return{value:n,realValue:v,updateValue:d,color:i,colorSpace:f,cycleColorSpace:g}},ur=e=>e.replace(/\s*/,"").toLowerCase(),ir=({name:e,value:r,onChange:n,onFocus:u,onBlur:i,presetColors:c,startOpen:s=!1,argType:f})=>{var v,d=l.useCallback(De(n,200),[n]),g=lr(r,d),p=g.value,m=g.realValue,y=g.updateValue,w=g.color,x=g.colorSpace,M=g.cycleColorSpace,k=((e,r,n)=>{var o=a(l.useState(null!=r&&r.valid?[r]:[]),2),u=o[0],i=o[1];l.useEffect((()=>{void 0===r&&i([])}),[r]);var c=l.useMemo((()=>(e||[]).map((e=>"string"==typeof e?or(e):e.title?t(t({},or(e.color)),{},{keyword:e.title}):or(e.color))).concat(u).filter(Boolean).slice(-27)),[e,u]),s=l.useCallback((e=>{(null==e?void 0:e.valid)&&(c.some((r=>ur(r[n])===ur(e[n])))||i((r=>r.concat(e))))}),[n,c]);return{presets:c,addPreset:s}})(c,w,x),_=k.presets,E=k.addPreset,O=tr[x],C=!(null==f||null===(v=f.table)||void 0===v||!v.readonly);return o.createElement(Le,{"aria-readonly":C},o.createElement(Be,{startOpen:s,trigger:C?[null]:void 0,closeOnOutsideClick:!0,onVisibleChange:()=>E(w),tooltip:o.createElement(Ae,null,o.createElement(O,{color:"transparent"===m?"#000000":m,onChange:y,onFocus:u,onBlur:i}),_.length>0&&o.createElement(Ve,null,_.map(((e,r)=>o.createElement(h,{key:`${e.value}-${r}`,hasChrome:!1,tooltip:o.createElement(Ke,{note:e.keyword||e.value})},o.createElement(We,{value:e[x],active:w&&ur(e[x])===ur(w[x]),onClick:()=>y(e.value)}))))))},o.createElement(We,{value:m,style:{margin:4}})),o.createElement(Xe,{id:b(e),value:p,onChange:e=>y(e.target.value),onFocus:e=>e.target.select(),readOnly:C,placeholder:"Choose color..."}),p?o.createElement(Ue,{onClick:M}):null)};r({ColorControl:ir,default:ir})}}}))}();
