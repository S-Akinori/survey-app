import{n as i,o as h,f as B,b as p,_ as N,d as T,p as _,T as C,m as j}from"./Container-248deef8.js";import{r as E,j as P}from"./app-64ac808a.js";import{e as g}from"./extendSxProp-09fb10d3.js";const I=["className","component"];function M(n={}){const{themeId:o,defaultTheme:m,defaultClassName:t="MuiBox-root",generateClassName:a}=n,c=i("div",{shouldForwardProp:e=>e!=="theme"&&e!=="sx"&&e!=="as"})(h);return E.forwardRef(function(x,d){const s=B(m),r=g(x),{className:l,component:u="div"}=r,f=p(r,I);return P.jsx(c,N({as:u,ref:d,className:T(l,a?a(t):t),theme:o&&s[o]||s},f))})}const R=_(),S=M({themeId:C,defaultTheme:R,defaultClassName:"MuiBox-root",generateClassName:j.generate}),F=S;export{F as B};