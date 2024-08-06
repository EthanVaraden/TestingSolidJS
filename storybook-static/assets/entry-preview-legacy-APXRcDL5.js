System.register(["./index-legacy-Dvg014dY.js"],(function(e,r){"use strict";var t;return{setters:[e=>{t=e.d}],execute:function(){e("renderToCanvas",(function({storyFn:e,kind:r,name:n,showMain:a,showError:f,forceRemount:d},c){var p=e();if(a(),"string"==typeof p)c.innerHTML=p,o(c);else if(p instanceof s){if(c.firstChild===p&&!1===d)return;c.innerHTML="",c.appendChild(p),i()}else f({title:`Expecting an HTML snippet or DOM node from the story: "${n}" of "${r}".`,description:t`
        Did you forget to return the HTML snippet from the story?
        Use "() => <your snippet or node>" or when defining the story.
      `})}));var r=__STORYBOOK_MODULE_GLOBAL__.global,n=__STORYBOOK_MODULE_PREVIEW_API__,o=n.simulatePageLoad,i=n.simulateDOMContentLoaded,s=r.Node;e("render",((e,r)=>{var n=r.id,o=r.component;if("string"==typeof o){var i=o;return Object.keys(e).forEach((r=>{i=i.replace(`{{${r}}}`,e[r])})),i}if(o instanceof HTMLElement){var s=o.cloneNode(!0);return Object.keys(e).forEach((r=>{s.setAttribute(r,"string"==typeof e[r]?e[r]:JSON.stringify(e[r]))})),s}if("function"==typeof o)return o(e,r);throw console.warn(t`
    Storybook's HTML renderer only supports rendering DOM elements and strings.
    Received: ${o}
  `),new Error(`Unable to render story ${n}`)})),e("parameters",{renderer:"html"})}}}));
