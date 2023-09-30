import{W as y,r as C,j as a}from"./app-1cc7af4d.js";import{T as p}from"./Title-bdd144eb.js";import{B as b,R as T,a as c}from"./Box-faa78ac1.js";import{C as A}from"./ClientAuthenticatedLayout-ccee5953.js";import{A as F}from"./ApplicationLogo-9b07ad06.js";import{B as S}from"./Button-e842edb2.js";import{C as k}from"./Container-981471f7.js";import{F as f}from"./FormControl-c79cb863.js";import{F as n}from"./FormGroup-a53f89f2.js";import{T as v,S as D}from"./TextField-0ca15562.js";import{M as P}from"./MenuItem-0f47bb1e.js";/* empty css            */import"./createSvgIcon-3a230c1d.js";import"./TransitionGroupContext-d9e5bb2a.js";import"./createChainedFunction-0bab83cf.js";import"./useId-d8f711bd.js";import"./ResponsiveNavLink-1de2d82e.js";import"./transition-768a1334.js";import"./useFormControl-49f2c98d.js";import"./ButtonBase-12e61157.js";import"./Typography-f057043c.js";import"./extendSxProp-37d23402.js";import"./Modal-394f6331.js";import"./debounce-517eeb3c.js";const u=(s,t)=>{let d={};return s?s.answers.map(i=>{d["q_"+i.question_id]=i.value}):t.forms.map(i=>{i.questions.map(l=>{d["q_"+l.id]=""})}),d},me=({auth:s,survey:t,response:d,flash:i})=>{const{data:l,setData:j,post:g,put:B,processing:N,errors:R,reset:W}=y(u(d,t));console.log(s.user);const m=r=>{const o=r.target.name,e=r.target.value;let h={...l,[o]:e};j(h)};C.useEffect(()=>{j(u(d,t))},[t.id]);const w=r=>{r.preventDefault(),console.log(l),d?B(route("client.survey.update",{survey_id:t.id})):g(route("client.survey.store",{survey_id:t.id}))};return console.log(t),console.log(l),a.jsx(A,{user:s.user,children:a.jsx(k,{className:"py-12",children:a.jsxs("div",{children:[i&&a.jsx("div",{className:"bg-green-200 text-green-600 p-4 mb-4 rounded",children:i.message}),!i&&a.jsxs("form",{onSubmit:w,children:[a.jsxs("div",{children:[a.jsxs("div",{className:"text-center mb-8",children:[a.jsx(F,{width:70,height:70,className:"mx-auto"}),a.jsx(p,{Tag:"h1",title:t.title})]}),t.forms.map(r=>{var o;return((o=r.user_form_meta)==null?void 0:o.value)!=0&&a.jsxs("div",{children:[a.jsx(p,{title:r.title,Tag:"h3",className:"p-4 mb-4 bg-main text-main-cont"}),a.jsx("div",{children:r.questions.map((e,h)=>{var _;return((_=e.user_question_meta)==null?void 0:_.value)!=0&&a.jsxs("div",{className:"mb-16",children:[a.jsx(p,{title:e.required?e.title+"*":e.title,Tag:"h4",className:"py-4 mb-4 border-b-2 border-main"}),e.type==="scale"&&e.scale&&a.jsx("div",{children:a.jsxs("div",{className:"mb-20",children:[a.jsxs("div",{className:"md:flex justify-between",children:[a.jsxs(b,{children:["A: ",e.scale.min_text]}),a.jsxs(b,{children:["B: ",e.scale.max_text]})]}),a.jsx(f,{sx:{width:"100%"},required:!0,children:a.jsxs(T,{row:!0,"aria-labelledby":"demo-form-control-label-placement",name:"position",defaultValue:"top",sx:{justifyContent:"space-between"},children:[a.jsx(n,{value:"1",control:a.jsx(c,{onChange:m,required:!!e.required}),label:"Aに近い",labelPlacement:"bottom",id:"q_"+e.id,name:"q_"+e.id,checked:l["q_"+e.id]==="1"}),a.jsx(n,{value:"2",control:a.jsx(c,{onChange:m}),label:"Aにやや近い",labelPlacement:"bottom",id:"q_"+e.id,name:"q_"+e.id,checked:l["q_"+e.id]==="2"}),a.jsx(n,{value:"3",control:a.jsx(c,{onChange:m}),label:"Bにやや近い",labelPlacement:"bottom",id:"q_"+e.id,name:"q_"+e.id,checked:l["q_"+e.id]==="3"}),a.jsx(n,{value:"4",control:a.jsx(c,{onChange:m}),label:"Bに近い",labelPlacement:"bottom",id:"q_"+e.id,name:"q_"+e.id,checked:l["q_"+e.id]==="4"})]})})]})}),e.type==="text"&&a.jsx("div",{children:a.jsx(v,{id:"q_"+e.id,type:"text",name:"q_"+e.id,defaultValue:l["q_"+e.id],variant:"outlined",onChange:m,fullWidth:!0,required:!!e.required})}),e.type==="textarea"&&a.jsxs("div",{children:[a.jsx(v,{id:"q_"+e.id,type:"text",name:"q_"+e.id,defaultValue:l["q_"+e.id],variant:"outlined",onChange:m,fullWidth:!0,multiline:!0,rows:4,required:!!e.required}),a.jsxs("div",{children:[l["q_"+e.id]?l["q_"+e.id].length:0,"文字"]})]}),e.type==="dropdown"&&e.choices&&a.jsx("div",{children:a.jsx(f,{fullWidth:!0,children:a.jsx(D,{labelId:"type",id:"q_"+e.id,name:"q_"+e.id,value:l["q_"+e.id],onChange:m,required:!!e.required,children:e.choices.map((x,E)=>a.jsx(P,{value:x.value,children:x.title},x.id))})})})]},e.id)})})]},r.id)})]}),a.jsx("div",{className:"text-center",children:a.jsxs(S,{className:"ml-4",disabled:N,children:[t.id===1&&"回答",t.id!==1&&"回答して次へ"]})})]})]})})})};export{me as default};