!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var i=o("h6c0i"),r=document.querySelector(".form"),a={delay:null,step:null,amount:null};r.addEventListener("submit",(function(e){var n=function(e){position=e+1,delay=0===e?t:t+o*e,setTimeout((function(){(function(e,n){var t=Math.random()>.3;return new Promise((function(o,i){t?o({position:e,delay:n}):i({position:e,delay:n})}))})(position,delay).then((function(e){var n=e.position,t=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}),t+o*e)};e.preventDefault();for(var t=a.delay,o=a.step,r=a.amount,l=0;l<r;l+=1)n(l)})),r.addEventListener("input",(function(e){a[e.target.name]=Number(e.target.value)}))}();
//# sourceMappingURL=03-promises.dfdaf73f.js.map