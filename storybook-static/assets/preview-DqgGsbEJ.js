import{g as v,o as l,D as y,b as E,d as k,e as f,f as w,u as h,h as m,r as g,a as D}from"./render-G91tTFY4.js";import"./CoreExtension-UqvKx_PC.js";var K=!!y,L=K?n=>v()?l(n):n:l;function R(n,s,e,o){return n.addEventListener(s,e,o),L(n.removeEventListener.bind(n,s,e,o))}function b(n,s=v()){let e=0,o,a;return()=>(e++,l(()=>{e--,queueMicrotask(()=>{!e&&a&&(a(),a=o=void 0)})}),a||E(t=>o=n(a=t),s),o)}var C=b(()=>{const[n,s]=k(null);return R(window,"keydown",e=>{s(e),setTimeout(()=>s(null))}),n});function u(n){return typeof n=="function"}const d={ArrowLeft:"Left",ArrowRight:"Right",ArrowUp:"Up",ArrowDown:"Down",Enter:"Enter",l:"Last"," ":"Space",Backspace:"Back",Escape:"Escape"},[p,A]=k([]),B=n=>{const s=C();return f(w(m,(e,o,a=[])=>{let t=e;const r=[];for(;t;)t.states.has("focus")||(t.states.add("focus"),u(t.onFocus)&&t.onFocus.call(t,e,o)),r.push(t),t=t.parent;return a.forEach(c=>{r.includes(c)||(c.states.remove("focus"),u(c.onBlur)&&c.onBlur.call(c,e,o))}),A(r),r},{defer:!0})),f(()=>{const e=s();if(e){const o=d[e.key]||d[e.keyCode];h(()=>{const a=p();let t;for(const r of a){if(t=t||r,o){const c=r["on".concat(o)];if(u(c)&&c.call(r,e,r,t)===!0)break}else console.log("Unhandled key event: ".concat(e.key||e.keyCode));if(u(r.onKeyPress)&&r.onKeyPress.call(r,e,o,r,t)===!0)break}return!1})}}),p};let i;const $={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},decorators:[n=>{const s=document.createElement("div");return i&&i(),g(()=>(B(),D(n,{})),s).then(e=>{i=e.dispose}),s}]};export{$ as default};
