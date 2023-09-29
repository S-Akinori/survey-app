import{j as e,R as u,d as t}from"./app-47a11ba3.js";import{A as R}from"./AdminAuthenticatedLayout-07ec6df9.js";import{B as r}from"./Button-2ae85dd5.js";import{T as v}from"./Title-21fc28b0.js";import{B as b,R as A,a as i}from"./Box-f25dfe7c.js";import{F as y}from"./FormControl-ba54f4ba.js";import{F as l,a as S}from"./FormGroup-745e7e2e.js";import{r as T,i as k}from"./createSvgIcon-31dfd790.js";import{C as F}from"./Container-bb1043eb.js";import{C as I}from"./Checkbox-4499ffea.js";import{T as f,S as M}from"./TextField-3868d055.js";import{M as P}from"./MenuItem-d3d90186.js";import{M as L}from"./Modal-325e61a9.js";import{B as O}from"./Box-ba6a120a.js";/* empty css            */import"./ApplicationLogo-9244b8c1.js";import"./ResponsiveNavLink-420cce96.js";import"./transition-7d6d4d0e.js";import"./NavLink-813ca550.js";import"./createSvgIcon-99b47fe3.js";import"./TransitionGroupContext-ba2e54fd.js";import"./ButtonBase-201e9062.js";import"./Typography-2aa82efa.js";import"./extendSxProp-b04e7420.js";import"./debounce-517eeb3c.js";const W=({question:a})=>e.jsx("div",{children:a.type==="scale"&&a.scale&&e.jsxs("div",{children:[e.jsxs("div",{className:"md:flex justify-between",children:[e.jsxs(b,{children:["A: ",a.scale.min_text]}),e.jsxs(b,{children:["B: ",a.scale.max_text]})]}),e.jsx(y,{sx:{width:"100%"},children:e.jsxs(A,{row:!0,"aria-labelledby":"demo-form-control-label-placement",name:"position",defaultValue:"top",sx:{justifyContent:"space-between"},children:[e.jsx(l,{value:"1",control:e.jsx(i,{}),label:"Aに近い",labelPlacement:"bottom"}),e.jsx(l,{value:"2",control:e.jsx(i,{}),label:"Aにやや近い",labelPlacement:"bottom"}),e.jsx(l,{value:"3",control:e.jsx(i,{}),label:"Bにやや近い",labelPlacement:"bottom"}),e.jsx(l,{value:"4",control:e.jsx(i,{}),label:"Bに近い",labelPlacement:"bottom"})]})})]})});var c={},D=k;Object.defineProperty(c,"__esModule",{value:!0});var N=c.default=void 0,E=D(T()),G=e,H=(0,E.default)((0,G.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");N=c.default=H;const pe=({form:a,auth:g})=>{var n,x,h,j,p;const[w,o]=u.useState(!1),[B,m]=u.useState(0),C=s=>{m(Number(s.currentTarget.value)),o(!0)},_=()=>{m(0),o(!1)};return e.jsx(R,{user:g.user,header:e.jsxs("h2",{className:"font-semibold leading-tight",children:[(x=(n=a.survey)==null?void 0:n.user)==null?void 0:x.company," | ",(j=(h=a.survey)==null?void 0:h.user)==null?void 0:j.name," 様"]}),children:e.jsxs(F,{className:"py-12",children:[a.survey&&e.jsx("div",{className:"mb-4",children:e.jsxs(t,{href:route("admin.survey.show",{id:(p=a.survey)==null?void 0:p.id}),children:[e.jsx(N,{}),"フォーム一覧へ"]})}),e.jsx("div",{className:"mb-4",children:e.jsx(v,{title:a.title,Tag:"h2",className:"bg-main text-main-cont p-4 mb-4"})}),e.jsx("div",{className:"mb-4",children:e.jsx("div",{children:a.description})}),e.jsx("div",{className:"mb-4",children:e.jsx(S,{children:e.jsx(l,{control:e.jsx(I,{defaultChecked:!0}),label:"必須項目にする"})})}),e.jsx("div",{className:"mb-4",children:e.jsx(r,{children:e.jsx(t,{href:route("admin.form.edit",{id:a.id}),children:"フォーム編集"})})}),e.jsx("div",{className:"mt-12",children:a.questions.map(s=>e.jsxs("div",{className:"mb-12",children:[e.jsx(v,{title:s.title,Tag:"h3",className:"p-4 mb-4 border-b-2 border-main"}),s.description&&e.jsx("div",{className:"text-sm mb-4",children:s.description}),s.type==="scale"&&s.scale&&e.jsx("div",{className:"mb-4",children:e.jsx(W,{question:s})}),s.type==="text"&&e.jsx("div",{children:e.jsx(f,{type:"text",variant:"outlined",fullWidth:!0})}),s.type==="textarea"&&e.jsx("div",{children:e.jsx(f,{type:"text",variant:"outlined",fullWidth:!0,multiline:!0,rows:4})}),s.type==="dropdown"&&e.jsx("div",{children:e.jsx(y,{fullWidth:!0,children:e.jsx(M,{labelId:"type",id:"type",name:"type",defaultValue:s.choices&&s.choices[0].value,children:s.choices&&s.choices.map((d,V)=>e.jsx(P,{value:d.value,children:d.title},d.id))})})}),e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"mt-4 px-2",children:e.jsx(r,{children:e.jsx(t,{href:route("admin.question.edit",{id:s.id}),children:"質問編集"})})}),e.jsx("div",{className:"mt-4 px-2",children:e.jsx(r,{className:"bg-red-500 text-white",onClick:C,value:s.id,children:"質問削除"})})]})]},s.id))}),e.jsx("div",{className:"mb-4",children:e.jsx(r,{children:e.jsx(t,{href:route("admin.question.create",{form_id:a.id}),children:"質問新規作成"})})}),e.jsx(L,{open:w,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",className:"flex justify-center items-center",children:e.jsx(O,{className:"p-4 bg-white",sx:{background:"#fcfcfc"},children:e.jsxs("div",{children:[e.jsx("h2",{children:"削除してよろしいですか？"}),e.jsxs("div",{className:"mt-4 flex justify-end",children:[e.jsx(r,{className:"mr-4",children:e.jsx(t,{method:"delete",href:route("admin.question.destroy",{id:B}),children:"はい"})}),e.jsx(r,{className:"bg-red-500 text-white",onClick:_,children:"キャンセル"})]})]})})})]})})};export{pe as default};
