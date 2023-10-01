import{g as k,s as I,_ as s,a as q,u as V,b as z,d as B,e as L,c as T}from"./Container-78eb4108.js";import{r as i,j as $}from"./app-dafbfa72.js";import{g as j}from"./TransitionGroupContext-b466b28f.js";import{F as J}from"./useFormControl-3a3fa40b.js";import{i as P}from"./useId-e6eb98a4.js";const K=e=>{let o;return e<1?o=5.11916*e**2:o=4.5*Math.log(e+1)+2,(o/100).toFixed(2)},E=K;function Q(e){return k("MuiPaper",e)}j("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const X=["className","component","elevation","square","variant"],Y=e=>{const{square:o,elevation:t,variant:r,classes:a}=e,u={root:["root",r,!o&&"rounded",r==="elevation"&&`elevation${t}`]};return L(u,Q,a)},Z=I("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[t.variant],!t.square&&o.rounded,t.variant==="elevation"&&o[`elevation${t.elevation}`]]}})(({theme:e,ownerState:o})=>{var t;return s({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!o.square&&{borderRadius:e.shape.borderRadius},o.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},o.variant==="elevation"&&s({boxShadow:(e.vars||e).shadows[o.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${q("#fff",E(o.elevation))}, ${q("#fff",E(o.elevation))})`},e.vars&&{backgroundImage:(t=e.vars.overlays)==null?void 0:t[o.elevation]}))}),ee=i.forwardRef(function(o,t){const r=V({props:o,name:"MuiPaper"}),{className:a,component:u="div",elevation:d=1,square:m=!1,variant:l="elevation"}=r,c=z(r,X),v=s({},r,{component:u,elevation:d,square:m,variant:l}),p=Y(v);return $.jsx(Z,s({as:u,ownerState:v,className:B(p.root,a),ref:t},c))}),ve=ee;function U(e){return e!=null&&!(Array.isArray(e)&&e.length===0)}function _(e,o=!1){return e&&(U(e.value)&&e.value!==""||o&&U(e.defaultValue)&&e.defaultValue!=="")}function oe(e){return e.startAdornment}function te(e){return k("MuiFormControl",e)}j("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const re=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],ae=e=>{const{classes:o,margin:t,fullWidth:r}=e,a={root:["root",t!=="none"&&`margin${T(t)}`,r&&"fullWidth"]};return L(a,te,o)},ne=I("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:e},o)=>s({},o.root,o[`margin${T(e.margin)}`],e.fullWidth&&o.fullWidth)})(({ownerState:e})=>s({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},e.margin==="normal"&&{marginTop:16,marginBottom:8},e.margin==="dense"&&{marginTop:8,marginBottom:4},e.fullWidth&&{width:"100%"})),ie=i.forwardRef(function(o,t){const r=V({props:o,name:"MuiFormControl"}),{children:a,className:u,color:d="primary",component:m="div",disabled:l=!1,error:c=!1,focused:v,fullWidth:p=!1,hiddenLabel:g=!1,margin:w="none",required:C=!1,size:x="medium",variant:F="outlined"}=r,D=z(r,re),b=s({},r,{color:d,component:m,disabled:l,error:c,fullWidth:p,hiddenLabel:g,margin:w,required:C,size:x,variant:F}),O=ae(b),[y,G]=i.useState(()=>{let f=!1;return a&&i.Children.forEach(a,n=>{if(!P(n,["Input","Select"]))return;const S=P(n,["Select"])?n.props.input:n;S&&oe(S.props)&&(f=!0)}),f}),[M,R]=i.useState(()=>{let f=!1;return a&&i.Children.forEach(a,n=>{P(n,["Input","Select"])&&(_(n.props,!0)||_(n.props.inputProps,!0))&&(f=!0)}),f}),[W,h]=i.useState(!1);l&&W&&h(!1);const A=v!==void 0&&!l?v:W;let N;const H=i.useMemo(()=>({adornedStart:y,setAdornedStart:G,color:d,disabled:l,error:c,filled:M,focused:A,fullWidth:p,hiddenLabel:g,size:x,onBlur:()=>{h(!1)},onEmpty:()=>{R(!1)},onFilled:()=>{R(!0)},onFocus:()=>{h(!0)},registerEffect:N,required:C,variant:F}),[y,d,l,c,M,A,p,g,N,C,x,F]);return $.jsx(J.Provider,{value:H,children:$.jsx(ne,s({as:m,ownerState:b,className:B(O.root,u),ref:t},D,{children:a}))})}),pe=ie;export{pe as F,ve as P,_ as i};