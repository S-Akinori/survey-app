import{W as N,j as e,a as T}from"./app-43cd903f.js";import{B as w}from"./Button-6417ca49.js";import{A as D}from"./AdminAuthenticatedLayout-4d6e4e3e.js";import{d as W,a as S,g as h}from"./Delete-8a46869d.js";import{C as k}from"./Container-55d1794a.js";import{T as n,I,S as A}from"./TextField-d5b58cf0.js";import{F}from"./FormControl-6ac6d0b1.js";import{M as c}from"./MenuItem-466affc9.js";/* empty css            */import"./ApplicationLogo-f3a07fd7.js";import"./ResponsiveNavLink-28b078d5.js";import"./transition-90057ae7.js";import"./NavLink-7ad10272.js";import"./createSvgIcon-5c5c170b.js";import"./createSvgIcon-d1fe9af2.js";import"./TransitionGroupContext-f2fe4458.js";import"./debounce-517eeb3c.js";import"./Modal-3972b84b.js";import"./ButtonBase-679453af.js";function te({auth:v,form_id:j,user:p}){const{data:t,setData:r,post:f,processing:b,errors:B,reset:L}=N({name:"",title:"",description:"",type:""}),y=a=>{a.preventDefault(),console.log(t),f(route("admin.question.store",{form_id:j}))},d=a=>{const s=a.target.name,i=a.target.value;let l={...t,[s]:i};s==="type"&&i==="scale"?t.scale||(l={...t,[s]:i,scale:{minText:"",maxText:"",min:1,max:4,step:1}}):s==="type"&&i==="dropdown"&&(t.choices||(l={...t,[s]:i,choices:[{id:h(10),title:"",value:"",order:1}]})),r(l)},m=a=>{const s=a.target.name,i=a.target.value,l=s==null?void 0:s.split("_")[1];if(!l||!t.scale)return;const o={...t,scale:{...t.scale,[l]:i}};r(o)},g=()=>{if(!t.choices)return;const a={...t,choices:[...t.choices,{id:h(10),title:"",value:"",order:t.choices.length+1}]};r(a)},u=a=>{const s=a.target.name,i=a.target.value,l=s==null?void 0:s.split("_")[2],o=s==null?void 0:s.split("_")[0];if(!l||!o||!t.choices)return;const C={...t,choices:t.choices.map(x=>x.id===o?{...x,[l]:i}:x)};r(C)},_=a=>{const s=a.currentTarget.id;if(!s||!t.choices)return;const i={...t,choices:t.choices.filter(l=>l.id!==s)};r(i)};return e.jsxs(D,{user:v.user,header:e.jsxs("h2",{className:"font-semibold leading-tight",children:[p.company," | ",p.name," 様"]}),children:[e.jsx(T,{title:"新規質問作成"}),e.jsxs(k,{className:"py-12",children:[e.jsx("h2",{className:"mb-4",children:"新規質問作成"}),e.jsxs("form",{onSubmit:y,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("div",{className:"mb-4",children:e.jsx(n,{id:"title",type:"text",name:"title",value:t.title,variant:"outlined",label:"質問文",onChange:d,fullWidth:!0})}),e.jsx("div",{className:"mb-4",children:e.jsx(n,{id:"description",type:"text",name:"description",value:t.description,variant:"outlined",label:"説明文",onChange:d,fullWidth:!0,multiline:!0,rows:2})}),e.jsx("div",{className:"mb-4",children:e.jsxs(F,{fullWidth:!0,children:[e.jsx(I,{id:"type",children:"質問タイプ"}),e.jsxs(A,{labelId:"type",id:"type",name:"type",value:t.type,label:"質問タイプ",onChange:d,children:[e.jsx(c,{value:"text",children:"一行テキスト"}),e.jsx(c,{value:"textarea",children:"複数行テキスト"}),e.jsx(c,{value:"dropdown",children:"ドロップダウン"}),e.jsx(c,{value:"scale",children:"均等目盛り"})]})]})}),t.type==="scale"&&t.scale&&e.jsxs("div",{children:[e.jsx("div",{className:"mb-4",children:e.jsx(n,{id:"scale_minText",type:"text",name:"scale_minText",value:t.scale.minText,variant:"outlined",label:"最小目盛りのテキスト",onChange:m,fullWidth:!0})}),e.jsx("div",{className:"mb-4",children:e.jsx(n,{id:"scale_maxText",type:"text",name:"scale_maxText",value:t.scale.maxText,variant:"outlined",label:"最大目盛りのテキスト",onChange:m,fullWidth:!0})}),e.jsx("div",{className:"mb-4",children:e.jsx(n,{id:"scale_step",type:"number",name:"scale_step",value:(t.scale.max-t.scale.min+1)/t.scale.step,variant:"outlined",label:"目盛り数",onChange:m})})]}),(t.type==="dropdown"||t.type==="radio")&&e.jsxs("div",{children:[t.choices&&t.choices.map((a,s)=>e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsxs("div",{className:"mr-4",children:["選択肢",s+1]}),e.jsxs("div",{className:"flex",children:[e.jsx(n,{id:a.id+"_choice_title",type:"text",name:a.id+"_choice_title",value:a.title,variant:"outlined",label:"タイトル",sx:{mr:2},onChange:u}),e.jsx(n,{id:a.id+"_choice_value",type:"text",name:a.id+"_choice_value",value:a.value,variant:"outlined",label:"値",sx:{mr:2},onChange:u}),e.jsx(n,{id:a.id+"_choice_order",type:"number",name:a.id+"_choice_order",value:a.order,variant:"outlined",label:"順番",onChange:u})]}),e.jsx("button",{id:a.id,name:a.id,type:"button",className:"pl-2",onClick:_,children:e.jsx(W,{})})]},a.id)),e.jsxs("button",{type:"button",className:"mt-4",onClick:g,children:[e.jsx(S,{})," 選択肢追加"]})]})]}),e.jsx("div",{className:"text-center mt-4",children:e.jsx(w,{className:"ml-4",disabled:b,children:"登録"})})]})]})]})}export{te as default};