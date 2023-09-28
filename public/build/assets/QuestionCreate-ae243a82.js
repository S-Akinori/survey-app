import{W as w,j as e,a as T}from"./app-4f82b0e4.js";import{B as k}from"./Button-da35b2ad.js";import{A as D}from"./AdminAuthenticatedLayout-84ba29d1.js";import{C as q,d as F,a as W,g as v}from"./Delete-cd481461.js";import{C as S}from"./Container-0be971ac.js";import{T as n,I,S as A}from"./TextField-4a65b5bc.js";import{a as L,F as B}from"./FormGroup-194312ea.js";import{F as M}from"./FormControl-c96980f6.js";import{M as d}from"./MenuItem-ede2426c.js";/* empty css            */import"./ApplicationLogo-7ea86ccd.js";import"./ResponsiveNavLink-2e581132.js";import"./transition-e081431a.js";import"./NavLink-f958907b.js";import"./createSvgIcon-13a2b7bc.js";import"./TransitionGroupContext-989dc25a.js";import"./createSvgIcon-ed057bd4.js";import"./debounce-517eeb3c.js";import"./Modal-5bbf1b40.js";import"./ButtonBase-98b20cb1.js";import"./Typography-84eedc62.js";import"./extendSxProp-ecfa9a45.js";function oe({auth:j,form_id:b,user:h}){const{data:t,setData:r,post:f,processing:g,errors:R,reset:E}=w({name:"",title:"",description:"",type:"",required:!0}),y=a=>{a.preventDefault(),console.log(t),f(route("admin.question.store",{form_id:b}))},m=a=>{const s=a.target.name,i=a.target.value;let l={...t,[s]:i};s==="type"&&i==="scale"?t.scale||(l={...t,[s]:i,scale:{minText:"",maxText:"",min:1,max:4,step:1}}):s==="type"&&i==="dropdown"&&(t.choices||(l={...t,[s]:i,choices:[{id:v(10),title:"",value:"",order:1}]})),r(l)},C=a=>{const s=a.target.checked,i={...t,required:s};r(i)},u=a=>{const s=a.target.name,i=a.target.value,l=s==null?void 0:s.split("_")[1];if(!l||!t.scale)return;const c={...t,scale:{...t.scale,[l]:i}};r(c)},_=()=>{if(!t.choices)return;const a={...t,choices:[...t.choices,{id:v(10),title:"",value:"",order:t.choices.length+1}]};r(a)},x=a=>{const s=a.target.name,i=a.target.value,l=s==null?void 0:s.split("_")[2],c=s==null?void 0:s.split("_")[0];if(!(!l||!c||!t.choices))if(l==="title"){const p={...t,choices:t.choices.map(o=>o.id===c?{...o,[l]:i,value:i}:o)};r(p)}else{const p={...t,choices:t.choices.map(o=>o.id===c?{...o,[l]:i}:o)};r(p)}},N=a=>{const s=a.currentTarget.id;if(!s||!t.choices)return;const i={...t,choices:t.choices.filter(l=>l.id!==s)};r(i)};return e.jsxs(D,{user:j.user,header:e.jsxs("h2",{className:"font-semibold leading-tight",children:[h.company," | ",h.name," 様"]}),children:[e.jsx(T,{title:"新規質問作成"}),e.jsxs(S,{className:"py-12",children:[e.jsx("h2",{className:"mb-4",children:"新規質問作成"}),e.jsxs("form",{onSubmit:y,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("div",{className:"mb-4",children:e.jsx(n,{id:"title",type:"text",name:"title",value:t.title,variant:"outlined",label:"質問文",onChange:m,fullWidth:!0,required:!0})}),e.jsx("div",{className:"mb-4",children:e.jsx(n,{id:"description",type:"text",name:"description",value:t.description,variant:"outlined",label:"説明文",onChange:m,fullWidth:!0,multiline:!0,rows:2})}),e.jsx("div",{className:"mb-4",children:e.jsx(L,{children:e.jsx(B,{control:e.jsx(q,{defaultChecked:!0,onChange:C}),label:"必須項目にする"})})}),e.jsx("div",{className:"mb-4",children:e.jsxs(M,{fullWidth:!0,children:[e.jsx(I,{id:"type",children:"質問タイプ"}),e.jsxs(A,{labelId:"type",id:"type",name:"type",value:t.type,label:"質問タイプ",onChange:m,required:!0,children:[e.jsx(d,{value:"text",children:"一行テキスト"}),e.jsx(d,{value:"textarea",children:"複数行テキスト"}),e.jsx(d,{value:"dropdown",children:"ドロップダウン"}),e.jsx(d,{value:"scale",children:"均等目盛り"})]})]})}),t.type==="scale"&&t.scale&&e.jsxs("div",{children:[e.jsx("div",{className:"mb-4",children:e.jsx(n,{id:"scale_minText",type:"text",name:"scale_minText",value:t.scale.minText,variant:"outlined",label:"最小目盛りのテキスト",onChange:u,fullWidth:!0})}),e.jsx("div",{className:"mb-4",children:e.jsx(n,{id:"scale_maxText",type:"text",name:"scale_maxText",value:t.scale.maxText,variant:"outlined",label:"最大目盛りのテキスト",onChange:u,fullWidth:!0})}),e.jsx("div",{className:"mb-4",children:e.jsx(n,{id:"scale_step",type:"number",name:"scale_step",value:(t.scale.max-t.scale.min+1)/t.scale.step,variant:"outlined",label:"目盛り数",onChange:u})})]}),(t.type==="dropdown"||t.type==="radio")&&e.jsxs("div",{children:[t.choices&&t.choices.map((a,s)=>e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsxs("div",{className:"mr-4",children:["選択肢",s+1]}),e.jsxs("div",{className:"flex",children:[e.jsx(n,{id:a.id+"_choice_title",type:"text",name:a.id+"_choice_title",value:a.title,variant:"outlined",label:"タイトル",sx:{mr:2},onChange:x,required:!0}),e.jsx(n,{id:a.id+"_choice_value",type:"hidden",name:a.id+"_choice_value",value:a.title,variant:"outlined",label:"値",sx:{display:"none"},onChange:x}),e.jsx(n,{id:a.id+"_choice_order",type:"number",name:a.id+"_choice_order",value:a.order,variant:"outlined",label:"順番",onChange:x,required:!0})]}),e.jsx("button",{id:a.id,name:a.id,type:"button",className:"pl-2",onClick:N,children:e.jsx(F,{})})]},a.id)),e.jsxs("button",{type:"button",className:"mt-4",onClick:_,children:[e.jsx(W,{})," 選択肢追加"]})]})]}),e.jsx("div",{className:"text-center mt-4",children:e.jsx(k,{className:"ml-4",disabled:g,children:"登録"})})]})]})]})}export{oe as default};