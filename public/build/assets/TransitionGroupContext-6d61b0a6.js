import{r,R as f}from"./app-5ecf105c.js";import{g as s}from"./Container-6467d92b.js";function i(t,e){typeof t=="function"?t(e):t&&(t.current=e)}const a=typeof window<"u"?r.useLayoutEffect:r.useEffect,p=a;function E(t){const e=r.useRef(t);return p(()=>{e.current=t}),r.useCallback((...n)=>(0,e.current)(...n),[])}function _(...t){return r.useMemo(()=>t.every(e=>e==null)?null:e=>{t.forEach(n=>{i(n,e)})},t)}function O(t,e,n="Mui"){const o={};return e.forEach(c=>{o[c]=s(t,c,n)}),o}function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,c){return o.__proto__=c,o},u(t,e)}function d(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,u(t,e)}const h=f.createContext(null);export{h as T,d as _,p as a,E as b,O as g,i as s,_ as u};