import{b as c,_ as i,J as a,K as f}from"./Container-248deef8.js";const x=["sx"],P=t=>{var s,o;const n={systemProps:{},otherProps:{}},r=(s=t==null||(o=t.theme)==null?void 0:o.unstable_sxConfig)!=null?s:a;return Object.keys(t).forEach(e=>{r[e]?n.systemProps[e]=t[e]:n.otherProps[e]=t[e]}),n};function m(t){const{sx:s}=t,o=c(t,x),{systemProps:n,otherProps:r}=P(o);let e;return Array.isArray(s)?e=[n,...s]:typeof s=="function"?e=(...u)=>{const l=s(...u);return f(l)?i({},n,l):n}:e=i({},n,s),i({},r,{sx:e})}export{m as e};