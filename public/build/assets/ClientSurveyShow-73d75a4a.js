import{W as y,j as e,a as N,d as p,y as j}from"./app-5ecf105c.js";import{T as n}from"./Title-f6553a75.js";import{B as u}from"./Box-5478d1ff.js";import{C as w}from"./ClientAuthenticatedLayout-ebaa2597.js";import{A as T}from"./ApplicationLogo-208d0a89.js";import{B as C}from"./Button-558f95d1.js";import{u as S,S as B}from"./ScaleInputGroup-58417b59.js";import{u as A}from"./Modal-5fc84625.js";import{C as F}from"./Container-6467d92b.js";import{T as f,S as I}from"./TextField-d2511d53.js";import{F as W}from"./FormControl-a7fea203.js";import{M as k}from"./MenuItem-ae4f3295.js";/* empty css            */import"./FormGroup-d19de293.js";import"./useFormControl-576bc9de.js";import"./TransitionGroupContext-6d61b0a6.js";import"./ButtonBase-243277fc.js";import"./createSvgIcon-cd43fcf6.js";import"./Typography-2d120dc9.js";import"./extendSxProp-5d93666a.js";import"./createChainedFunction-0bab83cf.js";import"./useId-41b80942.js";import"./ResponsiveNavLink-8d202d33.js";import"./transition-55d2c7cc.js";import"./debounce-517eeb3c.js";const D=l=>{let i={};return l.answers&&l.answers.map(d=>{i["q_"+d.question_id]=d.value}),i},xe=({auth:l,survey:i,response:d,flash:M,user_id:o})=>{const v=A();S(v.breakpoints.down("sm"));const{data:r,setData:_,post:L,put:V,processing:b,errors:E,reset:G}=y(d?D(d):{}),s=a=>{const m=a.target.name,t=a.target.value;let x={...r,[m]:t};_(x)},g=a=>{console.log(r),i.id==1?j.get(route("admin.client.survey.thanks")):j.get(route("admin.client.survey.show",{id:1,user_id:o}))};return console.log(i),e.jsxs(w,{user:l.user,children:[e.jsx(N,{title:i.title}),e.jsx(F,{className:"py-12",children:e.jsx("div",{children:e.jsxs("form",{onSubmit:g,children:[e.jsxs("div",{children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsx(T,{width:70,height:70,className:"mx-auto"}),e.jsx(n,{Tag:"h1",title:i.title}),e.jsx("p",{className:"text-sm mt-4",children:"*は必須項目"})]}),i.forms.map(a=>{var m;return((m=a.user_form_meta)==null?void 0:m.value)!=0&&e.jsxs("div",{children:[e.jsx(n,{title:a.title,Tag:"h3",className:"p-4 mb-4 bg-main text-main-cont"}),e.jsx("div",{children:a.questions.map((t,x)=>{var h;return e.jsx(e.Fragment,{children:((h=t.user_question_meta)==null?void 0:h.value)!=0&&e.jsxs("div",{className:"mb-16",children:[e.jsx(n,{title:t.required?t.title+"*":t.title,Tag:"h4",className:"py-4 mb-4 border-b-2 border-main"}),t.type==="scale"&&t.scale&&e.jsx("div",{children:e.jsxs("div",{className:"mb-20",children:[e.jsxs("div",{className:"md:flex justify-between",children:[e.jsxs(u,{className:"mb-2 md:mb-0",children:["A: ",t.scale.min_text]}),e.jsxs(u,{children:["B: ",t.scale.max_text]})]}),e.jsx(B,{id:"q_"+t.id,name:"q_"+t.id,onChange:s,data:r["q_"+t.id]})]})}),t.type==="text"&&e.jsx("div",{children:e.jsx(f,{id:"q_"+t.id,type:"text",name:"q_"+t.id,defaultValue:r["q_"+t.id],variant:"outlined",onChange:s,fullWidth:!0,required:t.required})}),t.type==="textarea"&&e.jsxs("div",{children:[e.jsx(f,{id:"q_"+t.id,type:"text",name:"q_"+t.id,defaultValue:r["q_"+t.id],variant:"outlined",onChange:s,fullWidth:!0,multiline:!0,rows:4,required:t.required}),e.jsxs("div",{children:[r["q_"+t.id]?r["q_"+t.id].length:0,"文字"]})]}),t.type==="dropdown"&&t.choices&&e.jsx("div",{children:e.jsx(W,{fullWidth:!0,children:e.jsx(I,{labelId:"type",id:"q_"+t.id,name:"q_"+t.id,value:r["q_"+t.id]?r["q_"+t.id]:t.choices[0].value,onChange:s,required:t.required,children:t.choices.map((c,Q)=>e.jsx(k,{value:c.value,children:c.title},c.id))})})})]},t.id)})})})]},a.id)})]}),e.jsx("div",{className:"text-center",children:e.jsxs(C,{className:"ml-4",disabled:b,children:[i.id==1&&e.jsx(p,{href:route("admin.client.survey.thanks"),children:"回答"}),i.id!=1&&e.jsx(p,{href:route("admin.client.survey.show",{id:1,user_id:o}),children:"回答して次へ"})]})})]})})})]})};export{xe as default};