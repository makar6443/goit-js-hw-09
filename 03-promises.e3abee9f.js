function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},l=t.parcelRequired7c6;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var l={id:e,exports:{}};return n[e]=l,t.call(l.exports,l,l.exports),l.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=l);var u=l("eWCmQ");const i=document.querySelector(".form"),r=(document.getElementsByTagName("label"),document.getElementsByTagName("button"),document.getElementsByName("delay")),a=document.getElementsByName("step"),d=document.getElementsByName("amount"),{elements:{delay:s,step:m,amount:c}}=i,f=(t,n)=>{e(u).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)},p=(t,n)=>{e(u).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)};function y(e,t){return new Promise(((n,o)=>{setTimeout((()=>{const l=Math.random()>.3,u={position:e,delay:t};l?n(u):o(u)}),t)}))}function v(){""===s.value||""===m.value||c.value}i.addEventListener("submit",(e=>{e.preventDefault();let t=Number(s.value);const n=Number(m.value),o=Number(c.value);for(let e=1;e<=o;e+=1)y(e,t).then((e=>f(e.position,e.delay))).catch((e=>p(e.position,e.delay))),t+=n})),r[0].addEventListener("input",(()=>{v()})),a[0].addEventListener("input",(()=>{v()})),d[0].addEventListener("input",(()=>{v()}));
//# sourceMappingURL=03-promises.e3abee9f.js.map
