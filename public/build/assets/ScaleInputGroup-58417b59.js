import{r as d,e as x,j as r}from"./app-5ecf105c.js";import{u as j}from"./Modal-5fc84625.js";import{t as S,v as w}from"./Container-6467d92b.js";import{a as v}from"./TransitionGroupContext-6d61b0a6.js";import{F as y}from"./FormControl-a7fea203.js";import{R as L,a as f}from"./Box-5478d1ff.js";import{a as p}from"./FormGroup-d19de293.js";function Q(t,s,e,n,a){const[o,m]=d.useState(()=>a&&e?e(t).matches:n?n(t).matches:s);return v(()=>{let c=!0;if(!e)return;const l=e(t),i=()=>{c&&m(l.matches)};return i(),l.addListener(i),()=>{c=!1,l.removeListener(i)}},[t,e]),o}const h=x["useSyncExternalStore"];function k(t,s,e,n,a){const o=d.useCallback(()=>s,[s]),m=d.useMemo(()=>{if(a&&e)return()=>e(t).matches;if(n!==null){const{matches:u}=n(t);return()=>u}return o},[o,t,n,a,e]),[c,l]=d.useMemo(()=>{if(e===null)return[o,()=>()=>{}];const u=e(t);return[()=>u.matches,b=>(u.addListener(b),()=>{u.removeListener(b)})]},[o,e,t]);return h(l,c,m)}function E(t,s={}){const e=S(),n=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:a=!1,matchMedia:o=n?window.matchMedia:null,ssrMatchMedia:m=null,noSsr:c=!1}=w({name:"MuiUseMediaQuery",props:s,theme:e});let l=typeof t=="function"?t(e):t;return l=l.replace(/^@media( ?)/m,""),(h!==void 0?k:Q)(l,a,o,m,c)}const G=({id:t,name:s,onChange:e,data:n})=>{const a=j(),o=E(a.breakpoints.down("sm"));return r.jsx(y,{sx:{width:"100%"},children:r.jsxs(L,{row:!o,"aria-labelledby":"demo-form-control-label-placement",name:"position",defaultValue:"top",sx:{justifyContent:"space-between"},children:[r.jsx(p,{value:"1",control:r.jsx(f,{onChange:e}),label:"Aに近い",labelPlacement:o?"end":"bottom",id:t,name:s,checked:n==="1"}),r.jsx(p,{value:"2",control:r.jsx(f,{onChange:e}),label:"Aにやや近い",labelPlacement:o?"end":"bottom",id:t,name:s,checked:n==="2"}),r.jsx(p,{value:"3",control:r.jsx(f,{onChange:e}),label:"Bにやや近い",labelPlacement:o?"end":"bottom",id:t,name:s,checked:n==="3"}),r.jsx(p,{value:"4",control:r.jsx(f,{onChange:e}),label:"Bに近い",labelPlacement:o?"end":"bottom",id:t,name:s,checked:n==="4"})]})})};export{G as S,E as u};