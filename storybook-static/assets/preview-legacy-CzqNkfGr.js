System.register([],(function(e,t){"use strict";return{execute:function(){var e=__STORYBOOK_MODULE_GLOBAL__.global,t=__STORYBOOK_MODULE_PREVIEW_API__.addons,n=__STORYBOOK_MODULE_CORE_EVENTS__.STORY_CHANGED,o="storybook/highlight",r="storybookHighlight",_=`${o}/add`,a=`${o}/reset`,i=e.document,l=t.getChannel(),d=()=>{var e,t=r,n=i.getElementById(t);n&&(null===(e=n.parentNode)||void 0===e||e.removeChild(n))};l.on(n,d),l.on(a,d),l.on(_,(e=>{var t=r;d();var n=Array.from(new Set(e.elements)),o=i.createElement("style");o.setAttribute("id",t),o.innerHTML=n.map((t=>`${t}{\n          ${((e="#FF4785",t="dashed")=>`\n  outline: 2px ${t} ${e};\n  outline-offset: 2px;\n  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);\n`)(e.color,e.style)}\n         }`)).join(" "),i.head.appendChild(o)}))}}}));
