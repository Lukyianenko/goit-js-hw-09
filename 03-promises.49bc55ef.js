var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("iQIUW");const r=document.querySelector(".form"),l={delay:null,step:null,amount:null};function a(e,t){const n=Math.random()>.3;return new Promise(((o,i)=>{n?o({position:e,delay:t}):i({position:e,delay:t})}))}r.addEventListener("submit",(function(e){e.preventDefault();const t=l.delay;let n=l.step;const o=l.amount;for(let e=0;e<o;e+=1){let o=e+1,r=t+n*e;setTimeout((()=>{a(o,r).then((({position:e,delay:t})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}))}),t+n*e)}})),r.addEventListener("input",(function(e){l[e.target.name]=Number(e.target.value)}));
//# sourceMappingURL=03-promises.49bc55ef.js.map
