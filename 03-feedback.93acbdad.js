!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,v=l||d||Function("return this")(),s=Object.prototype.toString,m=Math.max,p=Math.min,g=function(){return v.Date.now()};function b(e,t,n){var r,o,a,u,f,c,l=0,d=!1,v=!1,s=!0;if("function"!=typeof e)throw new TypeError(i);function b(t){var n=r,i=o;return r=o=void 0,l=t,u=e.apply(i,n)}function j(e){return l=e,f=setTimeout(x,t),d?b(e):u}function O(e){var n=e-c;return void 0===c||n>=t||n<0||v&&e-l>=a}function x(){var e=g();if(O(e))return T(e);f=setTimeout(x,function(e){var n=t-(e-c);return v?p(n,a-(e-l)):n}(e))}function T(e){return f=void 0,s&&r?b(e):(r=o=void 0,u)}function h(){var e=g(),n=O(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return j(c);if(v)return f=setTimeout(x,t),b(c)}return void 0===f&&(f=setTimeout(x,t)),u}return t=S(t)||0,y(n)&&(d=!!n.leading,a=(v="maxWait"in n)?m(S(n.maxWait)||0,t):a,s="trailing"in n?!!n.trailing:s),h.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=o=f=void 0},h.flush=function(){return void 0===f?u:T(g())},h}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=u.test(t);return i||f.test(t)?c(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:r,maxWait:t,trailing:o})};var j="feedback-form-state",O={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")};O.form.addEventListener("submit",e(t)((function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(j)}),500)),O.form.addEventListener("input",e(t)((function(e){""!==e.target.value&&(x[e.target.name]=e.target.value,localStorage.setItem(j,JSON.stringify(x)))}),500));var x=JSON.parse(localStorage.getItem(j))||{};!function(){var e=localStorage.getItem(j);if(e){var t=JSON.parse(e);void 0!==t.email?O.input.value=t.email:O.input.value="",void 0!==t.message?O.textarea.value=t.message:O.textarea.value=""}}()}();
//# sourceMappingURL=03-feedback.93acbdad.js.map
