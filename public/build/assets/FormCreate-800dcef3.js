import{W as x,j as t,a as h}from"./app-9ca37bac.js";import{B as j}from"./Button-8f2a03ea.js";import{A as f}from"./AdminAuthenticatedLayout-f3ab3800.js";import{I as l}from"./InputError-3e6ac471.js";import{C as g}from"./Container-4e2b99bc.js";import{T as n}from"./TextField-3288e776.js";/* empty css            */import"./ApplicationLogo-90f10ee8.js";import"./ResponsiveNavLink-7eb61cb1.js";import"./transition-c1873401.js";import"./NavLink-dc586476.js";import"./TransitionGroupContext-4ec461ed.js";import"./FormControl-7c9b48e2.js";import"./useFormControl-76e8b3d6.js";import"./useId-8d94c0ee.js";import"./Modal-35557c3c.js";import"./createChainedFunction-0bab83cf.js";import"./debounce-517eeb3c.js";import"./createSvgIcon-fbfe3475.js";function z({auth:d,survey:i}){var a,m;console.log(i);const{data:r,setData:s,post:p,processing:c,errors:o,reset:b}=x({title:"",description:""}),u=e=>{e.preventDefault(),console.log(r),p(route("admin.form.store",{survey_id:i.id}))};return t.jsxs(f,{user:d.user,header:t.jsxs("h2",{className:"font-semibold leading-tight",children:[(a=i.user)==null?void 0:a.company," | ",(m=i.user)==null?void 0:m.name," 様"]}),children:[t.jsx(h,{title:"新規フォーム作成"}),t.jsxs(g,{className:"py-12",children:[t.jsx("h2",{className:"mb-4",children:"新規フォーム作成"}),t.jsxs("form",{onSubmit:u,children:[t.jsxs("div",{className:"mb-4",children:[t.jsx(n,{id:"title",type:"text",name:"title",value:r.title,variant:"outlined",label:"タイトル",required:!0,onChange:e=>s("title",e.target.value),fullWidth:!0}),t.jsx(l,{message:o.title,className:"mt-2"})]}),t.jsxs("div",{className:"mb-4",children:[t.jsx(n,{id:"description",type:"text",name:"description",value:r.description,variant:"outlined",label:"説明文",onChange:e=>s("description",e.target.value),multiline:!0,rows:3,fullWidth:!0}),t.jsx(l,{message:o.description,className:"mt-2"})]}),t.jsx("div",{className:"text-center mt-4",children:t.jsx(j,{className:"ml-4",disabled:c,children:"フォームを登録し質問作成へ"})})]})]})]})}export{z as default};