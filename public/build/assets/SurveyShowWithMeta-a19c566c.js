import{W as b,R as i,j as e,a as g,d as N}from"./app-9e917366.js";import{A as S}from"./AdminAuthenticatedLayout-7c507477.js";import{B as l}from"./Button-b59f34ca.js";import{T as n}from"./Title-584efa84.js";import{C as v}from"./Container-e4ce7998.js";import{a as C,F as _}from"./FormGroup-cabb07a2.js";import{C as T}from"./Checkbox-7453663b.js";/* empty css            */import"./ApplicationLogo-ddcb6c43.js";import"./ResponsiveNavLink-ed57d4d8.js";import"./transition-be0c4330.js";import"./NavLink-6b6e3aff.js";import"./useFormControl-6cbd0d8c.js";import"./TransitionGroupContext-3e979719.js";import"./ButtonBase-a0ce1ce5.js";import"./createSvgIcon-d6344585.js";import"./Typography-e5409ff6.js";import"./extendSxProp-d0adccf7.js";const U=({survey:t,auth:c,user:a})=>{console.log(t);const{data:r,setData:p,post:h,put:F,processing:k,errors:A,reset:R}=b(),[o,m]=i.useState(""),[x,u]=i.useState(0);i.useState(!1),i.useState(!1),i.useState(0);const j=s=>{s.preventDefault(),console.log(r),h(route("admin.survey.user.store",{id:r.form_id,user_id:a.id}),{onSuccess:()=>{m("保存しました。"),u(r.form_id),setTimeout(()=>{m("")},3e3)}})};return e.jsxs(S,{user:c.user,header:e.jsx("h2",{className:"font-semibold leading-tight",children:e.jsxs("span",{children:[a.company," | ",a.name," 様"]})}),children:[e.jsx(g,{title:t.title}),e.jsxs(v,{className:"py-12",children:[e.jsx("div",{className:"mb-4",children:e.jsx(n,{title:t.title+" (表示・非表示設定)",Tag:"h2",className:"bg-main text-main-cont p-4 mb-4"})}),t.description&&e.jsx("div",{children:t.description}),e.jsx("div",{className:"mt-8",children:t.forms.map(s=>{var d;return e.jsxs("div",{className:"mb-12",children:[e.jsx(n,{title:s.title,Tag:"h3",className:"p-4 mb-4 border-b-2 border-main"}),s.description&&e.jsx("div",{className:"text-sm mb-4",children:s.description}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"mr-12",children:e.jsx(l,{children:e.jsx(N,{href:route("admin.form.user.show",{id:s.id,user_id:a.id}),children:"フォーム詳細"})})}),e.jsx("div",{children:e.jsxs("form",{className:"flex",onSubmit:j,children:[e.jsx(C,{children:e.jsx(_,{control:e.jsx(T,{defaultChecked:((d=s.user_form_meta)==null?void 0:d.value)!==0,onChange:f=>p({form_id:s.id,value:f.target.checked})}),label:"表示する"})}),e.jsx(l,{children:x==s.id&&o?o:"保存"})]})})]})]},s.id)})})]})]})};export{U as default};