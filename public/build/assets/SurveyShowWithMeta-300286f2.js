import{W as b,R as i,j as e,a as g,d as N}from"./app-1cc7af4d.js";import{A as S}from"./AdminAuthenticatedLayout-65578bd4.js";import{B as l}from"./Button-e842edb2.js";import{T as n}from"./Title-bdd144eb.js";import{C as v}from"./Container-981471f7.js";import{a as C,F as _}from"./FormGroup-a53f89f2.js";import{C as T}from"./Checkbox-1e355662.js";/* empty css            */import"./ApplicationLogo-9b07ad06.js";import"./ResponsiveNavLink-1de2d82e.js";import"./transition-768a1334.js";import"./NavLink-94d9eec0.js";import"./useFormControl-49f2c98d.js";import"./TransitionGroupContext-d9e5bb2a.js";import"./ButtonBase-12e61157.js";import"./createSvgIcon-3a230c1d.js";import"./Typography-f057043c.js";import"./extendSxProp-37d23402.js";const U=({survey:t,auth:c,user:a})=>{console.log(t);const{data:r,setData:p,post:h,put:F,processing:k,errors:A,reset:R}=b(),[o,m]=i.useState(""),[x,u]=i.useState(0);i.useState(!1),i.useState(!1),i.useState(0);const j=s=>{s.preventDefault(),console.log(r),h(route("admin.survey.user.store",{id:r.form_id,user_id:a.id}),{onSuccess:()=>{m("保存しました。"),u(r.form_id),setTimeout(()=>{m("")},3e3)}})};return e.jsxs(S,{user:c.user,header:e.jsx("h2",{className:"font-semibold leading-tight",children:e.jsxs("span",{children:[a.company," | ",a.name," 様"]})}),children:[e.jsx(g,{title:t.title}),e.jsxs(v,{className:"py-12",children:[e.jsx("div",{className:"mb-4",children:e.jsx(n,{title:t.title+" (表示・非表示設定)",Tag:"h2",className:"bg-main text-main-cont p-4 mb-4"})}),t.description&&e.jsx("div",{children:t.description}),e.jsx("div",{className:"mt-8",children:t.forms.map(s=>{var d;return e.jsxs("div",{className:"mb-12",children:[e.jsx(n,{title:s.title,Tag:"h3",className:"p-4 mb-4 border-b-2 border-main"}),s.description&&e.jsx("div",{className:"text-sm mb-4",children:s.description}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"mr-12",children:e.jsx(l,{children:e.jsx(N,{href:route("admin.form.user.show",{id:s.id,user_id:a.id}),children:"フォーム詳細"})})}),e.jsx("div",{children:e.jsxs("form",{className:"flex",onSubmit:j,children:[e.jsx(C,{children:e.jsx(_,{control:e.jsx(T,{defaultChecked:((d=s.user_form_meta)==null?void 0:d.value)!==0,onChange:f=>p({form_id:s.id,value:f.target.checked})}),label:"表示する"})}),e.jsx(l,{children:x==s.id&&o?o:"保存"})]})})]})]},s.id)})})]})]})};export{U as default};